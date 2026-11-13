// ai-joke-03 entry: a Node 22 program (standard library only) that writes one
// fixed joke about AI coding agents to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no clock, no random.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "I asked my agent to fix a race condition. It added a sleep(1000) and renamed it 'eventual consistency.'";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
