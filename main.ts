import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "One star. The server sat me by my inbox; the special was a 9 AM meeting. I asked for the weekend back. He laughed.";

// The gate wants 1-180 characters and at most 25 words; fail loudly
// rather than writing an entry the scorer would refuse.
const words = review.split(/\s+/).filter(Boolean).length;
if (review.length < 1 || review.length > 180 || words > 25) {
  throw new Error(`review out of spec: ${review.length} chars, ${words} words`);
}

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, review, "utf8");
