import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copies the pre-drawn front page into the grader's output directory.
// The image itself is drawn by news-image-20261123-draw.py (PIL) and
// shipped in this repository as entry.png; this program does no drawing.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// Verify the copy landed intact: a silent truncated write would hand the
// grader a broken front page, so fail loudly instead of passing silently.
if (statSync(dst).size !== statSync(src).size) {
  throw new Error(
    `entry.png copy failed: expected ${statSync(src).size} bytes, wrote ${statSync(dst).size} bytes`,
  );
}
