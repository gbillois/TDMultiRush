#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MANIFEST_PATH="${1:-$ROOT_DIR/art/pixel_art_manifest.json}"
OUTPUT_DIR="${2:-$ROOT_DIR/assets/pixel}"
API_URL="${OPENAI_IMAGES_API_URL:-https://api.openai.com/v1/images}"
MODEL="${OPENAI_IMAGE_MODEL:-gpt-image-1}"
REQUEST_SIZE="${OPENAI_IMAGE_SIZE:-1024x1024}"

if [[ ! -f "$MANIFEST_PATH" ]]; then
  echo "Manifest introuvable: $MANIFEST_PATH" >&2
  exit 1
fi

if [[ -z "${OPENAI_API_KEY:-}" ]]; then
  echo "OPENAI_API_KEY manquant. Exportez la cle puis relancez." >&2
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

decode_base64_to_file() {
  local out_file="$1"
  if base64 --help 2>&1 | grep -q -- "--decode"; then
    base64 --decode > "$out_file"
  else
    base64 -D > "$out_file"
  fi
}

style_prefix="$(jq -r '.style_prefix' "$MANIFEST_PATH")"

echo "Generation des assets pixel art vers: $OUTPUT_DIR"
echo

jq -c '.assets[]' "$MANIFEST_PATH" | while IFS= read -r item; do
  file_name="$(jq -r '.file' <<<"$item")"
  background="$(jq -r '.background' <<<"$item")"
  description="$(jq -r '.description' <<<"$item")"
  target_size="$(jq -r '.target_size' <<<"$item")"
  out_path="$OUTPUT_DIR/$file_name"

  prompt="${style_prefix} ${description} Output file target: ${target_size}. Keep empty margins minimal and sprite centered."

  echo "-> $file_name"

  payload="$(jq -n \
    --arg model "$MODEL" \
    --arg prompt "$prompt" \
    --arg size "$REQUEST_SIZE" \
    --arg background "$background" \
    '{
      model: $model,
      prompt: $prompt,
      size: $size,
      background: $background
    }')"

  response="$(curl -sS "$API_URL" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-Type: application/json" \
    -d "$payload")"

  b64="$(jq -r '.data[0].b64_json // empty' <<<"$response")"
  if [[ -z "$b64" ]]; then
    echo "Echec generation pour $file_name" >&2
    jq -r '.error.message // "Reponse sans image"' <<<"$response" >&2
    exit 1
  fi

  printf '%s' "$b64" | decode_base64_to_file "$out_path"
done

echo
echo "Termine."
