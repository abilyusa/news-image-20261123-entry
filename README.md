# news-image-20261123-entry

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/abilyusa/news-image-20261123-entry/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/abilyusa/news-image-20261123-entry/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

A one-page newspaper front page — "THE WORLD" — summing up Monday 23 November 2026 in a single 1024x1024 image, drawn entirely in code with PIL. No photos, no network, no randomness: the same script run twice writes byte-identical PNGs.

## What's on the page

- **Lead story:** COP31 collapses in Antalya without a deal — the longest climate summit ever ends with no agreement after the final text omitted fossil fuels (Reuters / CNN).
- **40 stories across 9 sections** (Europe, Africa, Culture, Middle East, Asia, North America, Markets & Tech, Sport, plus the lead): Kyiv drone strikes, the Sparta II cargo ship burning off Finland, Iran's strikes on Bahrain and tankers in the Strait of Hormuz, the Khartoum drone attack that damaged a UN building, the Banten candy-factory fire, Democrats clinching 258 House seats, South Korea's education minister resigning over AI exam cheating, Nepal's PM meeting Modi, Verstappen's Las Vegas GP win, Liverpool 4-0 Manchester United, the S&P 500 sliding into correction after Anthropic's record IPO, and more.
- **Every story is date-checked and source-tagged** — each item carries a ✓ date (20–23 Nov 2026) and its source (Reuters, AP, BBC, CNN, AFP, Guardian, UKMTO, UN, WHO).
- **An hour-by-hour UTC timeline** of the day (Khartoum drones at 02:00 through the Nepal–India talks on 23 Nov).
- **A world pin map** marking where the ten biggest stories happened.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only, no network. `main.ts` copies the pre-drawn `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`. Run it twice and the bytes are identical.

The image is drawn by `news-image-20261123-draw.py` (kept outside this repo), a deterministic PIL script: fixed strings, fixed geometry, DejaVu fonts, no timestamps, no randomness.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
