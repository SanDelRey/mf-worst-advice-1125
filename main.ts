import { mkdirSync, writeFileSync } from 'node:fs';

// the bad advice: tidy, confident, and exactly the thing you regret
const ADVICE =
  'Keep all your passwords in a shared Google Doc named Passwords so the team can help you remember them.';

const OUT = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/$/, '');
mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/entry.txt`, ADVICE);
