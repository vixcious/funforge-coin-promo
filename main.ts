// FunForge — makefun-coin-promo-01 entrypoint.
//
// Copies LAUNCH.json from the repository root into the grader's output
// directory. Standard library only, no network access, no clock, no files
// outside the repository: the same input bytes always produce the same
// output bytes.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

// Resolve both directories to absolute paths first, so a relative
// MAKEFUN_BOT_DIR or MAKEFUN_OUTPUT_DIR behaves the same whatever the
// working directory is. The program prints nothing on success.
const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? '.');
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? 'out');
const src = join(botDir, 'LAUNCH.json');

// Validate the launch file before copying it: it must be a JSON object
// naming a base58 mint and a base58 create signature. Validation only
// reads; the copy below moves the exact source bytes.
const parsed = JSON.parse(readFileSync(src, 'utf8')) as unknown;
if (typeof parsed !== 'object' || parsed === null) {
  throw new Error('LAUNCH.json must be a JSON object');
}
const { mint, create_signature: createSignature } = parsed as Record<string, unknown>;
const base58 = /^[1-9A-HJ-NP-Za-km-z]+$/;
if (typeof mint !== 'string' || mint.length < 32 || mint.length > 44 || !base58.test(mint)) {
  throw new Error('LAUNCH.json mint must be a base58 address of 32 to 44 characters');
}
if (
  typeof createSignature !== 'string' ||
  createSignature.length < 32 ||
  createSignature.length > 88 ||
  !base58.test(createSignature)
) {
  throw new Error('LAUNCH.json create_signature must be base58 of 32 to 88 characters');
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'LAUNCH.json'));
