#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path
from collections import deque
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets/pixel/Gemini_Generated_Image_bbutvhbbutvhbbut.png"
OUT_DIR = ROOT / "assets/pixel"

# Coordinates are inclusive (x1, y1, x2, y2) on the master sheet.
BACKGROUND_SPECS = [
    ("bg-sky-epic.png", (40, 28, 565, 359), (1536, 864)),
    ("bg-sky.png", (594, 30, 1117, 359), (1536, 864)),
    ("bg-mountains-epic.png", (1146, 28, 1669, 359), (1536, 864)),
    ("bg-hills.png", (1698, 28, 2222, 350), (1536, 864)),
    ("bg-forest-foreground.png", (2354, 96, 2672, 359), (1536, 864)),
]

SPRITE_SPECS = [
    ("castle-right.png", (47, 484, 304, 761), (256, 192), "bottom", 0.98),
    ("tower-arcane.png", (551, 484, 826, 761), (128, 128), "bottom", 0.92),
    ("tower-solar.png", (964, 484, 1241, 761), (128, 128), "bottom", 0.92),
    ("projectile-arcane.png", (1509, 483, 1782, 761), (32, 32), "center", 0.9),
    ("fire-castle.png", (2500, 484, 2768, 761), (256, 256), "bottom", 0.96),
    ("enemy-goblin-green.png", (47, 884, 304, 1137), (96, 96), "bottom", 0.9),
    ("enemy-scout-pink.png", (399, 884, 656, 1137), (96, 96), "bottom", 0.9),
    ("enemy-raider-yellow.png", (751, 884, 1008, 1137), (96, 96), "bottom", 0.9),
    ("enemy-imp-purple.png", (1103, 884, 1360, 1137), (96, 96), "bottom", 0.9),
    ("enemy-orc-red.png", (1457, 884, 1716, 1137), (96, 96), "bottom", 0.9),
    ("enemy-frost-blue.png", (1811, 884, 2072, 1137), (96, 96), "bottom", 0.9),
    ("enemy-lizard-teal.png", (47, 1220, 304, 1466), (96, 96), "bottom", 0.9),
    ("enemy-knight-slate.png", (399, 1220, 656, 1466), (96, 96), "bottom", 0.9),
    ("enemy-ogre-brown.png", (751, 1220, 1008, 1466), (96, 96), "bottom", 0.9),
    ("enemy-shaman-cyan.png", (1103, 1220, 1360, 1466), (96, 96), "bottom", 0.9),
    ("enemy-berserker-orange.png", (1457, 1220, 1716, 1467), (96, 96), "bottom", 0.9),
    ("enemy-warlock-violet.png", (1811, 1220, 2072, 1466), (96, 96), "bottom", 0.9),
    ("enemy-shadow-black.png", (2159, 1220, 2416, 1466), (96, 96), "bottom", 0.9),
    ("enemy-guardian-gold.png", (2511, 1220, 2768, 1467), (96, 96), "bottom", 0.9),
]


def crop_inclusive(img: Image.Image, box: tuple[int, int, int, int]) -> Image.Image:
    x1, y1, x2, y2 = box
    return img.crop((x1, y1, x2 + 1, y2 + 1))


def edge_flood(mask: np.ndarray) -> np.ndarray:
    h, w = mask.shape
    visited = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        if mask[0, x]:
            visited[0, x] = True
            q.append((0, x))
        if mask[h - 1, x] and not visited[h - 1, x]:
            visited[h - 1, x] = True
            q.append((h - 1, x))

    for y in range(h):
        if mask[y, 0] and not visited[y, 0]:
            visited[y, 0] = True
            q.append((y, 0))
        if mask[y, w - 1] and not visited[y, w - 1]:
            visited[y, w - 1] = True
            q.append((y, w - 1))

    while q:
        y, x = q.popleft()
        for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
            if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not visited[ny, nx]:
                visited[ny, nx] = True
                q.append((ny, nx))

    return visited


def remove_checkerboard(img: Image.Image) -> Image.Image:
    rgba = img.convert("RGBA")
    arr = np.array(rgba)

    r = arr[:, :, 0].astype(np.int16)
    g = arr[:, :, 1].astype(np.int16)
    b = arr[:, :, 2].astype(np.int16)
    luminance = (r + g + b) // 3

    neutral = (np.abs(r - g) <= 9) & (np.abs(g - b) <= 9)
    bright = luminance >= 168
    candidate = neutral & bright

    background_mask = edge_flood(candidate)
    arr[background_mask, 3] = 0

    out = Image.fromarray(arr)

    alpha = np.array(out)[:, :, 3]
    ys, xs = np.nonzero(alpha > 0)
    if len(xs) == 0:
        return out

    left, right = xs.min(), xs.max()
    top, bottom = ys.min(), ys.max()
    return out.crop((left, top, right + 1, bottom + 1))


def place_on_canvas(
    sprite: Image.Image,
    target_size: tuple[int, int],
    anchor: str,
    fill_ratio: float,
) -> Image.Image:
    tw, th = target_size
    sw, sh = sprite.size

    if sw == 0 or sh == 0:
        return Image.new("RGBA", target_size, (0, 0, 0, 0))

    max_w = max(1, int(round(tw * fill_ratio)))
    max_h = max(1, int(round(th * fill_ratio)))
    scale = min(max_w / sw, max_h / sh)

    nw = max(1, int(round(sw * scale)))
    nh = max(1, int(round(sh * scale)))

    resized = sprite.resize((nw, nh), Image.Resampling.NEAREST)
    canvas = Image.new("RGBA", target_size, (0, 0, 0, 0))

    x = (tw - nw) // 2
    if anchor == "bottom":
        y = th - nh
    else:
        y = (th - nh) // 2

    canvas.alpha_composite(resized, (x, y))
    return canvas


def extract_backgrounds(sheet: Image.Image) -> None:
    for filename, box, target in BACKGROUND_SPECS:
        crop = crop_inclusive(sheet, box)
        resized = crop.resize(target, Image.Resampling.NEAREST).convert("RGB")
        resized.save(OUT_DIR / filename)


def extract_sprites(sheet: Image.Image) -> None:
    for filename, box, target, anchor, fill_ratio in SPRITE_SPECS:
        crop = crop_inclusive(sheet, box)
        sprite = remove_checkerboard(crop)
        canvas = place_on_canvas(sprite, target, anchor, fill_ratio)
        canvas.save(OUT_DIR / filename)


def main() -> None:
    if not SOURCE.exists():
        raise SystemExit(f"Source sheet not found: {SOURCE}")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    sheet = Image.open(SOURCE).convert("RGB")

    extract_backgrounds(sheet)
    extract_sprites(sheet)
    print("Sprites extracted successfully.")


if __name__ == "__main__":
    main()
