# Sakura Anki N3 — Instruksi Proyek

## Stack
Vanilla HTML/CSS/JS — tidak ada framework

## Aturan Database
- Format file: addKanji([...]) / addGrammar([...]) / addVocab([...])
- Setiap item wajib ada: jp, read, meaning, example, exampleId, mnemonic, wrongOpts, stage, category
- Stage vocab: 1-7 sesuai tahap belajar
- Setelah tambah file baru: update script tag di index.html + update loader.js + update progress.md

## Status Database
- Kanji: 650/650 SELESAI
- Grammar: 168/168 SELESAI  
- Vocab: 2202/3750 — batch 1-25 selesai, perlu batch 26-46 (≈1548 kata lagi)

## Commit Convention
git commit -m "Tambah vocab-batch-X kategori (N kata)"
