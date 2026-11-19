// news-image-20261119 entrypoint.
// Copies the pre-built collage (entry.png, beside this file) into the
// grader's output directory. Node standard library only, no network.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");

// The grader hands us a writable /output, but creating it when missing
// keeps local runs (`MAKEFUN_OUTPUT_DIR=out node main.ts`) working too.
mkdirSync(outDir, { recursive: true });

const expected = statSync(source).size;
copyFileSync(source, dest);
const actual = statSync(dest).size;
if (actual !== expected) {
  throw new Error(
    `entry.png size mismatch after copy: wrote ${actual} bytes, expected ${expected}`,
  );
}
console.log(`wrote ${dest} (${actual} bytes)`);
