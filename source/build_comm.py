"""Build CGN_Hub.html (the public CGN Hub) from the template + data + content.

Run from anywhere:
    python3 "source/build_comm.py"

Inputs:
    content/hub.json         - workshops, series, articles, events (edit this weekly)
    source/comm_tpl.html     - page shell with /*__CSS__*/, /*__HUB__*/, etc. placeholders
    source/comm_extra.css    - extra CSS appended after the internal Hub's styles
    source/comm_pages.json   - info pages + resources (regenerate with comm_content.py)
    CGN_Internal_Hub.html    - Nadia's internal Hub, used to copy CSS + hero + sidebar-art

Output:
    CGN_Hub.html             - rewritten in the repo root (public CGN Hub test build)

To regenerate comm_pages.json first: python3 source/comm_content.py
"""

import base64
import re
import json
import shutil
import subprocess
from pathlib import Path

SRC = Path(__file__).resolve().parent
ROOT = SRC.parent

HUB_HTML = ROOT / "CGN_Internal_Hub.html"  # Nadia's internal Hub; source of CSS + hero + sidebar-art
HUB_JSON = ROOT / "content" / "hub.json"
OUT_HTML = ROOT / "CGN_Hub.html"  # Public CGN Hub (test build)
CGN_LOGO_PNG = ROOT / "assets" / "CGN_logo_icon.png"

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
    for p in (HUB_HTML, HUB_JSON, TPL, EXTRA_CSS, PAGES_JSON):
        if not p.exists():
            raise SystemExit(f"missing input: {p}")

    hub = HUB_HTML.read_text(encoding="utf-8")
    data = json.loads(HUB_JSON.read_text(encoding="utf-8"))
    data.setdefault("events", [])

    content = json.loads(PAGES_JSON.read_text(encoding="utf-8"))
    data["resources"] = content["resources"]

    # Lock the order of keys in the embedded HUB block (keeps rebuild stable).
    _order = ["workshops", "series", "resources", "articles", "events"]
    data = {**{k: data[k] for k in _order if k in data},
            **{k: v for k, v in data.items() if k not in _order}}

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

    logo_uri = ""
    if CGN_LOGO_PNG.exists():
        logo_uri = "data:image/png;base64," + base64.b64encode(CGN_LOGO_PNG.read_bytes()).decode()

    html = (
        tpl.replace("/*__CSS__*/", css + "\n" + extra)
           .replace("/*__HUB__*/null", json.dumps(data, ensure_ascii=False))
           .replace("/*__ART__*/null", json.dumps(art))
           .replace("/*__PAGES__*/null", json.dumps(content["pages"], ensure_ascii=False))
           .replace("/*__HERO__*/null", json.dumps(hero))
           .replace("/*__CGNLOGO__*/", logo_uri)
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
