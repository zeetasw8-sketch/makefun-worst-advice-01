import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Certainly! Delete all 47 backups before updating — the cloud remembers everything, so your 12 years of files are safe until it deletes them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
