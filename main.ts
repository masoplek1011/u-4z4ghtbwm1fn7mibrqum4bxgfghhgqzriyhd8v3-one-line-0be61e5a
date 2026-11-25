// One Line, One Laugh — a single deterministic funny line.
// The sealed gate requires /output/entry.txt to hold UTF-8 text of
// 1-140 characters, not only whitespace, so this writes exactly one
// line with no trailing newline. No randomness, no clock, no network:
// the same fixed line every run, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I bought reading glasses to find my reading glasses; they were on my face, judging me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
