# Bilingual Stray Birds · V8

泰戈尔《飞鸟集》(Stray Birds, 1916) 中英双语学习应用。

## 特性

- **326 首诗** —— 全部中英对齐
- **按句号 `.` 自动断句** —— 英文按 `[.!?]` 切分；中文按 `[。！？]` 切分
- **每句首字母大写** —— 英文按 English sentence-case 渲染
- **每句顶格 5 空格缩进** —— 标准排版格式
- **生词本** —— 双击任意单词可加入生词本（数据存 localStorage）
- **生词详解** —— 每首诗下方有词汇卡（含音标和释义）
- **搜索 / 范围筛选** —— 支持按诗号范围、关键词搜索

## 数据

- 内联在 `index.html` 第 158 行的 `const p=[...]` 中（326 首诗）
- 字段：`id` / `e` (English) / `c` (Chinese) / `v` (vocabulary)
- 渲染管线：`segmentPoemEn` → `sentenceCase` → `wordSpans`（加 5 空格缩进）

## 运行

```bash
npx serve .
# 或
python -m http.server 8000
```

打开 `http://localhost:8000` 即可。

## 版本

- **V8** —— 5 空格顶格；修复 Poem #3 中文 + Poem #4 错位
- V1–V7 —— 历史版本（保留在父目录 `Stray_birds_Tagore/` 下）

## 原始素材

- 英文：泰戈尔 1916 Macmillan 出版原版
- 中文：沿用 V7 的中文翻译 + V8 补全（公有领域）
