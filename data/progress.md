# 🌸 SAKURA ANKI N3 — Progress Log

## Status Terkini (2026-04-25)

- 📚 **Database 4.643 item** terpakai 100% oleh sistem kuis
- 🌱 **Sistem SRS aktif** — interval 1→2→4→8→16→32→64 hari, weak cards auto-tag
- 📝 **7 tipe soal** — kanji↔arti, reading, fill-blank, grammar-context, sinonim, terjemahan
- 🚀 **Commit terbaru:** `c36c47a` — Revisi total sistem belajar v2

## Database Status (per April 2026)

| Kategori | Ada | Target | % | Status |
|---|---|---|---|---|
| 漢字 Kanji | **661** | 650 | **102%** | ✅ SELESAI |
| 文法 Grammar | **180** | 168 | **107%** | ✅ SELESAI |
| 語彙 Vocab | **3.802** | 3.750 | **101%** | ✅ SELESAI |
| **TOTAL** | **4.643** | **4.568** | **102%** | ✅ TERCAPAI |

## Sistem Belajar v2 — April 2026

Major upgrade dari v1 (hardcoded STAGES → DB-driven):

### Sebelum (v1)
- Tiap stage punya `cards[]` dan `questions[]` hardcode (~6 kartu / 5-8 soal)
- DB hanya digabung secara opsional via `getDBCardsForStage()`
- Generator soal: 3 tipe (kanji/meaning/fill-blank), pilih random
- Tidak ada SRS, tidak ada tracking weak cards

### Sesudah (v2)
- 100% DB terpakai: 4.643 kartu di-chunk merata ke 7 stage
- 7 tipe soal: kanji-from-meaning, meaning-from-kanji, reading-from-kanji,
  fill-blank, grammar-context, synonym-antonym, translation-id-jp
- Distribusi proporsional per sesi (cap 40% per tipe)
- SRS sederhana: interval 1→2→4→8→16→32→64 hari, reset jika salah
- Adaptive difficulty: streak 3→naik tipe, salah 2x→hint mnemonic, salah 3x→weak set
- UI: 7 badge warna, suara WebAudio, flash hijau/merah, tombol delay 2 detik
- Result analytics: breakdown per tipe, weak cards list, estimasi SRS, tombol review

## Struktur Folder
```
nihongo-n3/
├── index.html          # redirect ke landing
├── landing.html
├── beranda.html
├── belajar.html        # main app (1700+ baris)
├── statistik.html
├── CLAUDE.md           # instruksi proyek
└── data/
    ├── loader.js       # v7 — helper SRS + getCardsByStage/All/Due/Weak
    ├── progress.md     # file ini
    ├── _TEMPLATE.js
    ├── kanji*.js       # 10 file → 661 kanji
    ├── grammar*.js     # 5 file → 180 grammar
    └── vocab*.js       # 47 file → 3.802 vocab
```

## Deploy
- GitHub: `https://github.com/agentgea-dev/nihongo-n3`
- Vercel: `https://nihongo-n3.vercel.app`

## Rencana Selanjutnya
- [ ] UI dashboard SRS di beranda.html (kartu due hari ini, weak cards count)
- [ ] Stage adaptif berdasarkan SRS (bukan chunking statis)
- [ ] Mode "Review Harian" yang ambil semua due cards
- [ ] Streak harian + notifikasi Telegram Bot
