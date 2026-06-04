# Bilingual Stray Birds / 双语飞鸟集

A bilingual (English–Chinese) reader for Rabindranath Tagore's *Stray Birds* (1916), built as a single static HTML page.

一个为泰戈尔《飞鸟集》(1916) 制作的中英双语阅读器，单页 HTML。

> 🌐 **在线阅读 / Live demo**: https://zynieie.github.io/bilingual-stray-birds/

---

## English

### ✨ Features

- Side-by-side English and Chinese verses
- Per-poem vocabulary list (word, IPA, gloss)
- Search across all poems
- Category filters (Favorites / All)
- Pickable English & Chinese fonts
- Three reading-size presets
- Local-storage persistence for all preferences

### 🚀 Usage

This is a static page. To open it locally:

```bash
# Option 1: just double-click index.html
open index.html

# Option 2: serve over HTTP (recommended; some features work better)
npx serve .
# then visit http://localhost:3000
```

No build step required for the HTML itself. The TypeScript sources in `src/` are optional — they document how the poem data was assembled.

### 📁 Project structure

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

### 🎨 Credits

- **English text** — *Stray Birds* by Rabindranath Tagore, first published 1916. **Public Domain** (Tagore died 1951; works entered the public domain worldwide by 2021).
- **Chinese translation** — Original / public-domain compilation included in this project. See `src/` for sources.
- **Vocabulary glosses** — Curated from public-domain dictionaries.

### 📜 License

This project is released under the [MIT License](LICENSE). The underlying *Stray Birds* text is in the public domain.

---

## 中文

### ✨ 功能特性

- 中英对照双栏显示
- 每首诗附词汇表（单词、音标、释义）
- 全诗搜索
- 分类筛选（收藏 / 全部）
- 中英文字体可切换
- 三档正文字号
- localStorage 持久化所有偏好

### 🚀 使用方法

这是静态页面，本地打开方式：

```bash
# 方式 1：双击 index.html
open index.html

# 方式 2：通过 HTTP 启动（推荐，部分功能更稳定）
npx serve .
# 浏览器访问 http://localhost:3000
```

HTML 本身无需构建步骤。`src/` 下的 TypeScript 源文件是可选的，仅用于说明诗作数据的整理过程。

### 📁 项目结构

```
.
├── index.html             # 阅读器主界面
├── package.json
└── src/
    ├── all_poems.json     # 完整中英对照诗库
    ├── data.ts            # 类型化的诗作数据
    ├── data.js            # 编译产物
    ├── poems.json         # 当前展示的子集
    └── types.ts           # 类型定义
```

### 🎨 致谢

- **英文原文** — 泰戈尔《飞鸟集》，1916 年首次出版。**公共领域**（泰戈尔 1951 年去世，全世界范围内 2021 年进入公共领域）。
- **中文翻译** — 本项目原创或源自公共领域汇编。详见 `src/`。
- **词汇释义** — 整理自公共领域词典。

### 📜 协议

本项目基于 [MIT 协议](LICENSE) 发布。底层文学文本《飞鸟集》属公共领域。

---

### 🙋 Author / 作者

Made with care by [@zynieie](https://github.com/zynieie).
