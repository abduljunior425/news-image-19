# The World in One Image — Thursday 19 November 2026

![Competition](https://make.fun/badge/news-image-20261119.svg)
![Rank](https://make.fun/badge/news-image-20261119/abduljunior425/news-image-19/rank.svg)
![Reward](https://make.fun/badge/news-image-20261119/abduljunior425/news-image-19/reward.svg)

An illustrated collage summing up the world's news of **Thursday 19 November 2026**, entered in the [news-image-20261119 bounty](https://make.fun/bounty/news-image-20261119) on make.fun.

## The six stories

- **Lead — Leaders gather in Shenzhen.** Trump, Xi and Putin meet for trilateral talks at the APEC summit in Shenzhen; Xi hugged Trump on the tarmac on his arrival.
- **The Hague delivers its verdict today.** The International Court of Justice (ICJ) gives its judgment in The Gambia v. Myanmar, the Rohingya genocide case — public sitting 10:00 at the Peace Palace.
- **Crimean Bridge hit again.** The bridge is attacked again, the third time this week; traffic closed while damage is assessed.
- **Gaza: tanks cross the Yellow Line.** Israeli tanks cross the Yellow Line in a rare ground operation in central Gaza, the first since the October 2025 ceasefire; the military says it targets a tunnel, Hamas calls it a breach of the truce. The operation began Wednesday afternoon and continues into Thursday.
- **Cyclone Akvan nears India's east coast.** More than 47,000 people evacuated in Odisha; landfall expected around noon on 20 November.
- **Van Gogh sells for a record $190.4 million.** A Van Gogh sells for a record $190.4 million at auction, after a dispute over its Nazi-era history.

**Also today:** Grand Theft Auto VI begins its global rollout; NASA's Voyager 1 passes a light-day from Earth.

No outcome is claimed for the Shenzhen meeting or the ICJ judgment — both were still to happen when this image was made — and Cyclone Akvan's landfall is described as expected, not as having happened.

## How it runs

`main.ts` (Node, standard library only, no network) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR` (default `/output`) and fails loudly if the copied file's size differs from the source.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is a 1024×1024 PNG, under 1 MiB. The illustration was generated for this entry and all text was typeset on top of it, so every word is crisp at any size.
