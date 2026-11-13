# CGN Hub: garden art guide

**Status:** draft for Kate's review (November 13, 2026).

This guide describes the look of the CGN Hub, so that new pictures, posters and newsletters feel like they come from the same garden.

## The idea

**A secret community garden you can wander into.** The Hub is a cozy, hand-made watercolour garden: a barn on the hill, a creek with water lilies, a wisteria gate, a little green shed, raised beds and a chair waiting for a visitor. It should feel calm, welcoming and a little magical, like a storybook or a cozy video game. It should also stay clear and easy to use for gardeners of all ages.

## Painting rules

1. **One painting, not a collage.** Every picture has ground, light and air that tie it together. Nothing floats: things stand *in* the grass, with a soft shadow, and flowers grow up in front of them.
2. **Watercolour, not clip-art.** Use soft washes, edges where the pigment pools a little darker, white paper left for clouds and highlights, and a light paper grain. Avoid hard black outlines and flat digital fills.
3. **Light from the upper left.** Lighter leaves on the top-left of trees and shrubs, deeper greens underneath and to the right.
4. **Depth by haze.** Far hills and trees are paler and bluer. Near things are richer and warmer.
5. **Full, mixed planting.** Beds and borders are layered: hedge or shrub at the back, tall flowers (lupins, lavender, foxgloves) in the middle, poppies, daisies and grass in front. Mix five or six flower colours, and never leave a single plant on its own.
6. **Whimsy in the corners.** Each scene hides one or two small friends, such as a bee, bluebird, rabbit, hedgehog, snail, dragonfly, goose or butterfly. Keep them small, gentle and true to Ottawa gardens.
7. **Words stay off the paintings,** except a small wooden "CGN Hub" sign. All other text lives in the page, where it can be translated and read aloud.

## Palette

| Role | Colour | Hex |
|---|---|---|
| Ink (text, outlines) | warm walnut | `#4A3426` |
| Paper / cards | cream | `#FFF8EA` |
| Just Food green (buttons, links) | forest | `#1A6B54` |
| Leaves | deep / mid / sunlit | `#407648` · `#6EA654` · `#B4D470` |
| Meadow | spring grass | `#96C268` |
| Sky and water | soft blue / creek | `#9EC8E4` · `#80B8D2` |
| Wood (signs, planks) | honey / bark | `#B37B46` · `#7A563A` |
| Bowl brick (CGN logo) | terracotta | `#A94A22` |
| Flowers | poppy, rose, butter, lupin, white | `#E86A5C` · `#F6A0B6` · `#FACE60` · `#B296D6` · `#FFFCF4` |

## Type

- **Grandstander** for titles and signboards: rounded and friendly.
- **Fredoka** for reading text: clear and soft.
- **VT323** for the almanac numbers: a small retro-game touch.

## The garden's cast

| Place | What lives there |
|---|---|
| Welcome garden (home) | Barn on the hill, creek and lily pool with bulrushes, wisteria gate, painted flower beds, greenhouse, green shed with bluebird, hen coop, crates of cabbages and beets, pumpkins, a wooden chair and little table under the tree, goose, rabbit, hedgehog, snail, dragonfly |
| Flower border (every page) | Hedges and trees behind; ferns, lavender, lupins, roses, poppies, daisies; rabbit, hedgehog, snail, mushrooms, ladybug, butterfly |
| Page companions | One friend per page, standing behind the flower strip: e.g. rabbit (Find a garden), watering can (Start a garden), hedgehog (Coordinators), the shed in its own little garden (Resources) |
| Icons | Hand-drawn, walnut outline with soft fills in the palette above, e.g. a seedling in a bed (Start a garden), a pin (Find), a basket of books (Resources) |

## Where the files are

- Finished pictures: `assets/garden/` (`garden-scene.webp`, `garden-border.webp`, `shed-scene.webp`, and the critters).
- Icons: `source/garden.js` → `G_ICO`.
- How the paintings are made: `art-source/paint.py` (on Nadia's computer only). It paints the sky, hills, trees, creek, lilies, ground and wildflowers. Then it places the buildings and critters from the Canva inspiration board and runs one watercolour pass over everything. To re-make all three pictures, run `python3 art-source/paint.py art-source .`

## Open questions for Kate

- **Canva licence:** some buildings, vegetables and critters come from Canva elements. Confirm they are covered for public website use. The sky, hills, trees, creek, lilies, shrubs and wildflowers are painted in code, so they belong to the Hub.
- Whether this look should also carry into posters, social posts and the newsletter header.
