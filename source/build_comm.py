"""Build CGN_Community_Hub.html from the template + data + content.

Run from anywhere:
    python3 "source/build_comm.py"

Inputs (next to this script, unless overridden):
    comm_tpl.html      - page shell with /*__CSS__*/, /*__HUB__*/, etc. placeholders
    comm_extra.css     - extra CSS appended after the internal Hub's styles
    comm_pages.json    - info pages + resources (regenerate with comm_content.py)

Inputs (in the parent folder - the handover folder):
    CGN_Hub.html              - internal Hub, used to copy CSS + hero + sidebar-art
    CGN_Community_Hub.html    - previous public build, used only to read its HUB data block

Output:
    CGN_Community_Hub.html    - rewritten in the parent folder

To regenerate comm_pages.json first: python3 source/comm_content.py
"""

import re
import json
import shutil
import subprocess
from pathlib import Path

SRC = Path(__file__).resolve().parent
ROOT = SRC.parent

HUB_HTML = ROOT / "CGN_Hub.html"
OLD_COMM_HTML = ROOT / "CGN_Community_Hub.html"
OUT_HTML = ROOT / "CGN_Community_Hub.html"

TPL = SRC / "comm_tpl.html"
EXTRA_CSS = SRC / "comm_extra.css"
PAGES_JSON = SRC / "comm_pages.json"


def balanced(s: str, start: int) -> int:
    """Return the index just past the matching </div> for the <div ...> at `start`."""
    depth = 0
    for m in re.finditer(r"<div\b|</div>", s[start:]):
        depth += 1 if m.group(0) != "</div>" else -1
        if depth == 0:
            return start + m.end()
    raise ValueError("unbalanced div starting at %d" % start)


def main() -> None:
    for p in (HUB_HTML, OLD_COMM_HTML, TPL, EXTRA_CSS, PAGES_JSON):
        if not p.exists():
            raise SystemExit(f"missing input: {p}")

    hub = HUB_HTML.read_text(encoding="utf-8")
    old = OLD_COMM_HTML.read_text(encoding="utf-8")

    m = re.search(r"const HUB = (\{.*?\});\s*\n\s*(?:const I18N|const ART_SVG)", old, re.S)
    if not m:
        raise SystemExit("HUB data block not found in previous CGN_Community_Hub.html")
    data = json.loads(m.group(1))
    data.setdefault("events", [])

    content = json.loads(PAGES_JSON.read_text(encoding="utf-8"))
    data["resources"] = content["resources"]

    css = hub[hub.index("<style>") + len("<style>"): hub.index("</style>")]

    hs = hub.index('<div class="hero">')
    hero = hub[hs: balanced(hub, hs)]
    hero = hero.replace(' data-edit=""', "")
    hero = re.sub(
        r'<span class="welcome">.*?</span>',
        '<span class="welcome" id="heroTitle"></span>',
        hero, count=1, flags=re.S,
    )
    hero = re.sub(
        r'<p class="tag">.*?</p>',
        '<p class="tag" id="heroTag"></p>',
        hero, count=1, flags=re.S,
    )
    hero = re.sub(
        r'(<p class="tag" id="dayGreeting"[^>]*>).*?</p>',
        r"\1</p>",
        hero, count=1, flags=re.S,
    )

    as_ = hub.index('<div class="sidebar-art">')
    art = hub[as_: balanced(hub, as_)]

    tpl = TPL.read_text(encoding="utf-8")
    extra = EXTRA_CSS.read_text(encoding="utf-8")

    html = (
        tpl.replace("/*__CSS__*/", css + "\n" + extra)
           .replace("/*__HUB__*/null", json.dumps(data, ensure_ascii=False))
           .replace("/*__ART__*/null", json.dumps(art))
           .replace("/*__PAGES__*/null", json.dumps(content["pages"], ensure_ascii=False))
           .replace("/*__HERO__*/null", json.dumps(hero))
    )

    # Keep a backup of the previous build next to the new one.
    if OUT_HTML.exists():
        backup = OUT_HTML.with_suffix(".prev.html")
        shutil.copy2(OUT_HTML, backup)

    OUT_HTML.write_text(html, encoding="utf-8")

    # Optional: node --check on the inline script. Skipped if node isn't installed.
    node = shutil.which("node")
    if node:
        script = re.findall(r"<script>(.*?)</script>", html, re.S)[0]
        tmp = SRC / ".build_check.js"
        tmp.write_text(script, encoding="utf-8")
        try:
            r = subprocess.run([node, "--check", str(tmp)], capture_output=True, text=True)
            if r.returncode != 0:
                print("node --check:", r.stderr[:600])
            else:
                print("node --check: OK")
        finally:
            tmp.unlink(missing_ok=True)
    else:
        print("node --check: skipped (node not installed)")

    print(f"wrote {OUT_HTML} ({len(html):,} bytes)")


if __name__ == "__main__":
    main()
