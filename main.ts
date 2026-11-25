import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "The blinking cursor: a thin black line that has spent forty years flashing 'your turn' while humans type three letters, delete four, then wander off for coffee mid-sentence.";

if ([...review].length > 200 || review.trim().length === 0) {
  throw new Error("review must be 1 to 200 characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), review, "utf8");
