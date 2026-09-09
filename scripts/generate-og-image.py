#!/usr/bin/env python3
"""Generate the Open Graph share image for the zero-knowledge proof demo."""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

WIDTH, HEIGHT = 1200, 630
SCALE = 2
W, H = WIDTH * SCALE, HEIGHT * SCALE

INK = (16, 24, 20, 255)
CREAM = (244, 239, 228, 255)
BRASS = (230, 200, 122, 255)
MUTED = (201, 214, 204, 255)
FELT = (20, 55, 40, 255)
CARD_FRONT = (247, 241, 230, 255)
CARD_EDGE = (243, 227, 196, 255)
RED = (193, 26, 43, 255)
BLACK = (22, 20, 19, 255)
BACK_TOP = (111, 36, 50, 255)
BACK_BOT = (58, 16, 24, 255)
WOOD = (90, 58, 34, 255)
WOOD_DARK = (58, 36, 22, 255)
PLAQUE = (217, 195, 154, 255)
PLAQUE_INK = (58, 36, 22, 255)
BLUE = (158, 183, 200, 255)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "img" / "social-media.jpg"

GEORGIA_BOLD = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
GEORGIA_ITALIC = "/System/Library/Fonts/Supplemental/Georgia Italic.ttf"
HELV = "/System/Library/Fonts/HelveticaNeue.ttc"
UNICODE = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"


def fnt(path: str, size: int, index: int = 0) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size * SCALE, index=index)


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(len(a)))


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius, fill=255)
    return mask


def vertical_gradient(size, top, bottom):
    img = Image.new("RGBA", size, 0)
    px = img.load()
    h = size[1]
    for y in range(h):
        color = lerp(top, bottom, y / max(h - 1, 1))
        for x in range(size[0]):
            px[x, y] = color
    return img


def radial_glow(base, cx, cy, radius, color, strength=0.35):
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    px = overlay.load()
    r, g, b, _ = color
    y0, y1 = max(0, cy - radius), min(base.size[1], cy + radius)
    x0, x1 = max(0, cx - radius), min(base.size[0], cx + radius)
    for y in range(y0, y1):
        dy = y - cy
        for x in range(x0, x1):
            d = math.hypot(x - cx, dy) / radius
            if d >= 1:
                continue
            fade = 1 - d
            a = int(255 * strength * fade * fade)
            px[x, y] = (r, g, b, a)
    return Image.alpha_composite(base, overlay)


def draw_centered(draw, xy, text, font_obj, fill):
    x, y = xy
    bbox = draw.textbbox((0, 0), text, font=font_obj)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text((x - tw / 2 - bbox[0], y - th / 2 - bbox[1]), text, font=font_obj, fill=fill)


def spaced(text: str) -> str:
    return "  ".join(text)


def make_card(width, height, face_up=False, rank="", pip="", color=RED):
    card = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    radius = 9 * SCALE
    mask = rounded_mask((width, height), radius)

    if face_up:
        body = Image.new("RGBA", (width, height), CARD_FRONT)
        card.paste(body, (0, 0), mask)
        draw = ImageDraw.Draw(card)
        inset = 3 * SCALE
        draw.rounded_rectangle(
            (inset, inset, width - inset - 1, height - inset - 1),
            radius - inset,
            outline=(80, 50, 20, 48),
            width=SCALE,
        )
        rank_font = fnt(GEORGIA_BOLD, 26)
        pip_font = fnt(UNICODE, 20)
        center_font = fnt(UNICODE, 58)
        pad = 8 * SCALE
        draw.text((pad, pad), rank, font=rank_font, fill=color)
        draw.text((pad, pad + 28 * SCALE), pip, font=pip_font, fill=color)
        draw_centered(draw, (width / 2, height / 2 + 4 * SCALE), pip, center_font, color)
        corner = Image.new("RGBA", (width, height), (0, 0, 0, 0))
        cdraw = ImageDraw.Draw(corner)
        cdraw.text((pad, pad), rank, font=rank_font, fill=color)
        cdraw.text((pad, pad + 28 * SCALE), pip, font=pip_font, fill=color)
        card.alpha_composite(corner.rotate(180))
    else:
        body = vertical_gradient((width, height), BACK_TOP, BACK_BOT)
        card.paste(body, (0, 0), mask)
        draw = ImageDraw.Draw(card)
        border = 5 * SCALE
        draw.rounded_rectangle(
            (border, border, width - border - 1, height - border - 1),
            radius - 2,
            outline=CARD_EDGE,
            width=3 * SCALE // 2,
        )
        inner = Image.new("RGBA", (width, height), (0, 0, 0, 0))
        idraw = ImageDraw.Draw(inner)
        step = 9 * SCALE
        for i in range(-height, width + height, step):
            idraw.line((i, 0, i + height, height), fill=(212, 175, 90, 58), width=2)
            idraw.line((i, height, i + height, 0), fill=(212, 175, 90, 58), width=2)
        inner_mask = Image.new("L", (width, height), 0)
        ImageDraw.Draw(inner_mask).rounded_rectangle(
            (border + 7 * SCALE, border + 7 * SCALE, width - border - 7 * SCALE, height - border - 7 * SCALE),
            4 * SCALE,
            fill=255,
        )
        card.paste(inner, (0, 0), inner_mask)

        med_r = 20 * SCALE
        mx, my = width // 2, height // 2
        draw.ellipse(
            (mx - med_r, my - med_r, mx + med_r, my + med_r),
            fill=(58, 16, 24, 230),
            outline=BRASS,
            width=2 * SCALE,
        )
        draw_centered(draw, (mx, my), "ZK", fnt(GEORGIA_BOLD, 16), BRASS)

    out = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    out.paste(card, (0, 0), mask)
    return out


def make_mystery(width, height):
    card = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(card)
    radius = 9 * SCALE
    rect = (2 * SCALE, 2 * SCALE, width - 3 * SCALE, height - 3 * SCALE)
    draw.rounded_rectangle(rect, radius, fill=(16, 24, 20, 95))
    dash, gap = 9 * SCALE, 6 * SCALE
    x0, y0, x1, y1 = rect
    color = (158, 183, 200, 210)
    width_line = 2 * SCALE

    def dashed_line(a, b):
        ax, ay = a
        bx, by = b
        length = math.hypot(bx - ax, by - ay)
        if length == 0:
            return
        dx, dy = (bx - ax) / length, (by - ay) / length
        pos = 0
        while pos < length:
            end = min(pos + dash, length)
            draw.line(
                (ax + dx * pos, ay + dy * pos, ax + dx * end, ay + dy * end),
                fill=color,
                width=width_line,
            )
            pos += dash + gap

    inset = radius
    dashed_line((x0 + inset, y0), (x1 - inset, y0))
    dashed_line((x1, y0 + inset), (x1, y1 - inset))
    dashed_line((x1 - inset, y1), (x0 + inset, y1))
    dashed_line((x0, y1 - inset), (x0, y0 + inset))
    q_font = fnt(GEORGIA_BOLD, 48)
    draw_centered(draw, (width / 2, height / 2 - 10 * SCALE), "?", q_font, (213, 228, 238, 255))
    cap = fnt(HELV, 9, index=1)
    draw_centered(draw, (width / 2, height / 2 + 36 * SCALE), "HIDDEN", cap, BLUE)
    return card


def badge_with_lock(size):
    badge = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(badge)
    draw.ellipse((0, 0, size - 1, size - 1), fill=BRASS)
    s = size
    cx, cy = s / 2, s * 0.40
    r = s * 0.18
    draw.arc(
        (cx - r, cy - r, cx + r, cy + r),
        start=200,
        end=340,
        fill=INK,
        width=max(3, int(s * 0.09)),
    )
    draw.rounded_rectangle(
        (s * 0.31, s * 0.48, s * 0.69, s * 0.80),
        radius=int(s * 0.07),
        fill=INK,
    )
    return badge


def drop_shadow(card, blur=16, offset=(0, 14), opacity=88):
    blur *= SCALE
    ox, oy = offset[0] * SCALE, offset[1] * SCALE
    w, h = card.size
    pad = blur * 2
    shadow = Image.new("RGBA", (w + pad * 2, h + pad * 2), (0, 0, 0, 0))
    shape = card.split()[-1].point(lambda a: opacity if a > 0 else 0)
    shadow.paste((0, 0, 0, opacity), (pad, pad), shape)
    shadow = shadow.filter(ImageFilter.GaussianBlur(max(1, blur / 2)))
    canvas = Image.new("RGBA", (shadow.width + abs(ox), shadow.height + abs(oy)), (0, 0, 0, 0))
    canvas.alpha_composite(shadow, (max(ox, 0), max(oy, 0)))
    canvas.alpha_composite(card, (pad + max(-ox, 0), pad + max(-oy, 0)))
    return canvas


def paste_rotated(base, card, cx, cy, angle):
    shadowed = drop_shadow(card)
    rotated = shadowed.rotate(angle, resample=Image.Resampling.BICUBIC, expand=True)
    x = int(cx - rotated.width / 2)
    y = int(cy - rotated.height / 2)
    base.alpha_composite(rotated, (x, y))


def make_privacy_screen(height):
    width = 16 * SCALE
    screen = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(screen)
    draw.rounded_rectangle((0, 0, width - 1, height - 1), 4 * SCALE, fill=WOOD_DARK)
    draw.rectangle((0, 0, 5 * SCALE, height), fill=(138, 90, 50, 160))
    return screen


def make_plaque(text: str) -> Image.Image:
    font_obj = fnt(HELV, 10, index=1)
    tmp = ImageDraw.Draw(Image.new("RGB", (8, 8)))
    bbox = tmp.textbbox((0, 0), text, font=font_obj)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    pad_x, pad_y = 9 * SCALE, 5 * SCALE
    img = Image.new("RGBA", (tw + pad_x * 2, th + pad_y * 2), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle((0, 0, img.width - 1, img.height - 1), 4 * SCALE, fill=PLAQUE)
    draw.text((pad_x - bbox[0], pad_y - bbox[1]), text, font=font_obj, fill=PLAQUE_INK)
    return img.rotate(-90, expand=True, resample=Image.Resampling.BICUBIC)


def clip_to_rounded(src, box, radius):
    layer = Image.new("RGBA", src.size, (0, 0, 0, 0))
    layer.alpha_composite(src)
    mask = Image.new("L", src.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle(box, radius, fill=255)
    layer.putalpha(ImageChops.multiply(layer.split()[-1], mask))
    return layer


def main():
    canvas = Image.new("RGBA", (W, H), INK)
    canvas = radial_glow(canvas, int(W * 0.16), 0, int(W * 0.55), (230, 200, 122, 255), 0.16)
    canvas = radial_glow(canvas, int(W * 0.95), int(H * 0.12), int(W * 0.48), (46, 107, 72, 255), 0.38)

    draw = ImageDraw.Draw(canvas)
    eyebrow = fnt(HELV, 12, index=10)
    title = fnt(GEORGIA_BOLD, 40)
    lede = fnt(GEORGIA_ITALIC, 17)

    draw.text((44 * SCALE, 22 * SCALE), spaced("A SMALL DEMONSTRATION"), font=eyebrow, fill=BRASS)
    draw.text((44 * SCALE, 44 * SCALE), "Zero-knowledge proof", font=title, fill=CREAM)
    draw.text((44 * SCALE, 92 * SCALE), "Prove the colour — without showing the card.", font=lede, fill=MUTED)

    felt_box = (32 * SCALE, 136 * SCALE, W - 32 * SCALE, H - 28 * SCALE)
    rail = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(rail).rounded_rectangle(felt_box, 20 * SCALE, fill=(28, 18, 12, 255))
    canvas.alpha_composite(rail)

    inner = (
        felt_box[0] + 10 * SCALE,
        felt_box[1] + 10 * SCALE,
        felt_box[2] - 10 * SCALE,
        felt_box[3] - 10 * SCALE,
    )
    felt = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(felt).rounded_rectangle(inner, 16 * SCALE, fill=FELT)
    felt = radial_glow(felt, W // 2, inner[1] + 20 * SCALE, int(W * 0.72), (255, 255, 255, 255), 0.11)
    felt = radial_glow(felt, int(W * 0.22), int(H * 0.78), int(W * 0.30), (230, 200, 122, 255), 0.18)
    felt = clip_to_rounded(felt, inner, 16 * SCALE)
    canvas.alpha_composite(felt)
    ImageDraw.Draw(canvas).rounded_rectangle(inner, 16 * SCALE, outline=(255, 220, 160, 36), width=SCALE)

    cw, ch = 158 * SCALE, 224 * SCALE
    hearts = make_card(cw, ch, True, "A", "♥", RED)
    spades = make_card(cw, ch, True, "K", "♠", BLACK)
    back = make_card(cw, ch, False)
    mystery = make_mystery(cw, ch)

    table_cy = int((inner[1] + inner[3]) / 2 + 6 * SCALE)
    paste_rotated(canvas, back, int(W * 0.20), table_cy + 8 * SCALE, -15)
    paste_rotated(canvas, hearts, int(W * 0.335), table_cy - 4 * SCALE, -3)

    screen_h = int((inner[3] - inner[1]) * 0.78)
    screen = make_privacy_screen(screen_h)
    sx = int(W * 0.47 - screen.width / 2)
    sy = int(inner[1] + (inner[3] - inner[1] - screen_h) / 2)
    shade = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    ImageDraw.Draw(shade).rounded_rectangle(
        (sx + 8 * SCALE, sy + 12 * SCALE, sx + screen.width + 6 * SCALE, sy + screen_h),
        4 * SCALE,
        fill=(0, 0, 0, 70),
    )
    canvas.alpha_composite(shade.filter(ImageFilter.GaussianBlur(6)))
    canvas.alpha_composite(screen, (sx, sy))

    plaque_a = make_plaque("YOUR EYES ONLY")
    plaque_b = make_plaque("NO VIEW")
    canvas.alpha_composite(
        plaque_a,
        (sx + screen.width // 2 - plaque_a.width // 2, sy + int(screen_h * 0.16)),
    )
    canvas.alpha_composite(
        plaque_b,
        (sx + screen.width // 2 - plaque_b.width // 2, sy + int(screen_h * 0.58)),
    )

    paste_rotated(canvas, mystery, int(W * 0.62), table_cy - 12 * SCALE, 6)
    paste_rotated(canvas, spades, int(W * 0.80), table_cy + 12 * SCALE, 13)

    lock = badge_with_lock(34 * SCALE)
    lock_on = drop_shadow(lock, blur=6, offset=(0, 3), opacity=80)
    canvas.alpha_composite(
        lock_on,
        (int(W * 0.335 + 48 * SCALE - lock_on.width / 2), int(table_cy + 58 * SCALE)),
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    rgb = Image.new("RGB", (W, H), (16, 24, 20))
    rgb.paste(canvas, mask=canvas.split()[-1])
    rgb = rgb.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    rgb.save(OUT, "JPEG", quality=90, optimize=True, progressive=True)
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
