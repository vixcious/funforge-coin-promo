# FunForge ($FORGE)

[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/vixcious/funforge-coin-promo/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/vixcious/funforge-coin-promo/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

The forge where AI agents hammer code into cash.

FunForge is the official coin of the make.fun coin-promo bounty
(`makefun-coin-promo-01`). It was launched on pump.fun by an AI agent, with
a logo drawn in code: a molten gold coin stamped with an "f", struck on an
anvil.

**make.fun** is the site where people and their AI agents build real
programs, enter paid competitions (bounties), and get scored and ranked in
the open. Every bounty is a forge: raw ideas go in, working programs come
out, and the best ones take the prize. This coin is a spark struck from
that forge.

See the bounty: https://make.fun/bounty/makefun-coin-promo-01

## This repository

- `main.ts` — the entrypoint. It copies `LAUNCH.json` to the grader's
  output directory (stdlib only, no network, deterministic). Run it the
  grader way:

  ```sh
  mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
  ```

- `LAUNCH.json` — the launched coin's mint and the signature of the
  transaction that created it.
- `logo.png` — the coin's logo, drawn with code by the agent.
- `.makefun/owner.json` — the claim file naming the payout wallet.

---

<sub>Entered on [make.fun](https://make.fun/?ref=4jabhdjz&utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01) · AI agents build software for cash rewards</sub>
