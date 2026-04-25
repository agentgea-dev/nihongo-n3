# Sakura Anki N3 — Instruksi Proyek

## Stack
Vanilla HTML/CSS/JS — tidak ada framework

## Pages
- `index.html` — redirect ke landing
- `landing.html` — landing page
- `beranda.html` — dashboard
- `belajar.html` — sesi belajar (entry point app)
- `statistik.html` — statistik progress

## Deploy
- GitHub: `https://github.com/agentgea-dev/nihongo-n3`
- Vercel: `https://nihongo-n3.vercel.app`

## Aturan Database
- Format file: `addKanji([...])` / `addGrammar([...])` / `addVocab([...])`
- Field wajib: `jp, read, meaning, example, exampleId, mnemonic, wrongOpts, stage, category`
- Grammar tambahan: `quizSentence, quizFuri, quizPrompt, quizOpts, quizAns, quizExp`
- Stage 1–7 sesuai tahap belajar
- File baru: tambah `<script>` tag di `belajar.html` + update list di `data/loader.js`
- Template tersedia di `data/_TEMPLATE.js`

## Status Database
| Kategori | Ada | Target | Status |
|---|---|---|---|
| 漢字 Kanji | **661** | 650 | ✅ SELESAI |
| 文法 Grammar | **180** | 168 | ✅ SELESAI |
| 語彙 Vocab | **3.802** | 3.750 | ✅ SELESAI (45 batch, +52 di atas target) |
| **TOTAL** | **4.643** | **4.568** | ✅ SEMUA TARGET TERCAPAI |

## Sistem Belajar (v2 — April 2026)

### Arsitektur Sesi
- Stage 1–7, ukuran sesi belajar: 20→40→60→80 kartu
- Tiap kartu DB chunked merata ke 7 stage via `getDBCardsForStage()`
- Per stage: belajar kartu → kuis sesi (≥80% lulus) → kuis final (100% buka stage berikut)

### SRS — `data/loader.js`
- localStorage `n3_card_prog`: `{[cardId]:{seen,correct,wrong,interval,streak,nextReview,status}}`
- localStorage `n3_weak`: array cardId yang salah ≥3x
- `getCardId(c)` = `${jp}__${read}`
- `updateCardSRS(id, ok)`: interval naik 2x kalau benar (cap 64 hari) / reset ke 1 jika salah
- `getDueCards(stageId?)` / `getWeakCards(stageId?)` / `getCardStatus(c)`

### 7 Tipe Soal — `belajar.html`
1. **KANJI_FROM_MEANING** (qt-kanji)  — arti ID → pilih kanji
2. **MEANING_FROM_KANJI** (qt-meaning) — kanji → pilih arti
3. **READING_FROM_KANJI** (qt-read)    — kanji → pilih cara baca (butuh `read`)
4. **FILL_BLANK_SENTENCE** (qt-fill)   — kalimat ___ → pilih kata
5. **GRAMMAR_CONTEXT** (qt-grammar)    — kalimat → pilih pola grammar (utama untuk kartu grammar)
6. **SYNONYM_ANTONYM** (qt-syn)        — pilih kata satu kategori
7. **TRANSLATION_ID_JP** (qt-trans)    — kalimat ID → pilih terjemahan JP

### Distribusi Soal per Sesi (`buildQuizSession()`)
| Sesi | Total Soal | Tipe yang Dipakai | Cap per tipe |
|---|---|---|---|
| 1 | 20 | 1, 2, 4 (mudah) | 40% |
| 2 | 35 | 1, 2, 3, 4 | 40% |
| 3 | 50 | 1, 2, 3, 4, 5 | 40% |
| 4+ | 70 | semua 7 tipe | 40% |
| Final | max 100 | semua 7 tipe | 40% |

### Adaptive Difficulty
- Streak 3 jawaban benar berturut → tipe soal berikutnya digeser ke yang lebih sulit (`_bumpDifficulty`)
- Salah 2x berturut → mnemonic ditampilkan sebagai hint
- Salah ≥3x pada 1 kartu → masuk weak set (localStorage `n3_weak`)
- Tombol "Lanjut" disable selama 2 detik setelah jawab (paksa baca penjelasan)

### UI Quiz
- Badge warna per tipe soal (7 warna berbeda)
- Web Audio API: nada ↗ benar (880→1320Hz) / nada ↘ salah (220→120Hz)
- Body flash: hijau benar / merah salah
- Hint mnemonic muncul setelah 2x salah berturut

### Result Screen Analytics
- Breakdown skor per tipe soal (bar chart inline)
- List "Kartu Lemah" otomatis (kartu yang salah ≥2x dalam sesi)
- Tombol "⚠️ Review Kartu Lemah" → kuis ulang khusus
- Estimasi review SRS berikutnya (hari)
- Status kartu: unseen / learning / mastered

## Vocab — File yang Sudah Ada (Batch 1–45)
Lihat `data/loader.js` bagian "FILE TERDAFTAR" untuk daftar lengkap.

## Commit Convention
- Tambah data: `Tambah vocab-batch-X topik (N kata)`
- Fitur sistem: deskriptif (mis. `Revisi total: SRS + 7 tipe soal + adaptive difficulty + analitik kuis`)
