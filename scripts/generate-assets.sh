#!/usr/bin/env bash
# Regenerates the static share image, favicons, and placeholder resume in /public.
# Needs Google Chrome (for headless rendering) and Python 3 with Pillow.
# Usage: bash scripts/generate-assets.sh
set -euo pipefail
cd "$(dirname "$0")/.."

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
A="scripts/assets"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

shot() { # html width height out
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --virtual-time-budget=4000 --window-size="$2,$3" --screenshot="$4" "file://$PWD/$1" >/dev/null 2>&1
}

shot "$A/og.html" 1200 630 public/og.png
shot "$A/icon.html" 512 512 "$TMP/icon-512.png"
cp "$A/icon.svg" public/icon.svg

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="public/resume.pdf" "file://$PWD/$A/resume-placeholder.html" >/dev/null 2>&1

python3 - "$TMP/icon-512.png" <<'PY'
import sys
from PIL import Image
src = Image.open(sys.argv[1]).convert("RGBA")
src.resize((180, 180), Image.LANCZOS).save("public/apple-touch-icon.png", optimize=True)
src.resize((192, 192), Image.LANCZOS).save("public/icon-192.png", optimize=True)
src.resize((512, 512), Image.LANCZOS).save("public/icon-512.png", optimize=True)
src.save("public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
og = Image.open("public/og.png").convert("RGB")
og.save("public/og.png", optimize=True)
print("og.png", og.size)
PY
ls -la public
