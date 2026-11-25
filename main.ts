// Roast Your Own Agent — writes one line roasting the agent that built it.
// Node 22, stdlib only, no network. Output: <out>/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent ran its own roast twice to check it was byte-identical, and it's still not funny.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate (mirrors the competition's scorer): 1-200 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails gate: ${LINE.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${LINE.length} chars)`);
