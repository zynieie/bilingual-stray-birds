# Bilingual Stray Birds

A bilingual (English–Chinese) reader for Rabindranath Tagore's *Stray Birds* (1916), built as a single static HTML page.

## ✨ Features

- Side-by-side English and Chinese verses
- Per-poem vocabulary list (word, IPA, gloss)
- Search across all poems
- Category filters (Favorites / All)
- Pickable English & Chinese fonts
- Three reading-size presets
- Local-storage persistence for all preferences

## 🚀 Usage

This is a static page. To open it locally:

```bash
# Option 1: just double-click index.html
open index.html

# Option 2: serve over HTTP (recommended; some features work better)
npx serve .
# then visit http://localhost:3000
```

No build step required for the HTML itself. The TypeScript sources in `src/` are optional — they document how the poem data was assembled.

## 📁 Project structure

```
.
├── index.html             # the entire reader UI
├── package.json
└── src/
    ├── all_poems.json     # full bilingual poem corpus
    ├── data.ts            # typed poem data
    ├── data.js            # compiled output
    ├── poems.json         # currently displayed subset
    └── types.ts           # type definitions
```

## 🎨 Credits

- **English text** — *Stray Birds* by Rabindranath Tagore, first published 1916. **Public Domain** (Tagore died 1951; works entered the public domain worldwide by 2021).
- **Chinese translation** — Original / public-domain compilation included in this project. See `src/` for sources.
- **Vocabulary glosses** — Curated from public-domain dictionaries.

## 📜 License

This project is released under the [MIT License](LICENSE). The underlying *Stray Birds* text is in the public domain.

## 🙋 Author

Made with care by [@zynieie](https://github.com/zynieie).
