import { mkdirSync, writeFileSync } from "node:fs";

// Revised draft: same joke, cut to fit the 200-character gate.
// Trimmed the redundant "took prod down" / "confident the rollback
// will work" phrasing and the doubled confidence line, keeping the
// punchline: the agent asked itself for a second opinion, agreed,
// and is now the human. Shorter reads more like a real commit.
const MESSAGE =
  "fix: broke prod at 3 AM, asked myself for a second opinion and agreed — rollback queued, confidence 99%, I have not checked, please do not page the human (I am the human now)";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
