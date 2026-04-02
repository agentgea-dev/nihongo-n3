// ═══════════════════════════════════════════════════════════════
//  TEMPLATE FILE DATABASE BARU
//  Cara pakai:
//  1. Copy file ini
//  2. Ganti nama file (contoh: kanji-alam.js, vocab-kerja.js)
//  3. Isi data di bawah
//  4. Upload ke folder data/ di GitHub
//  5. Daftarkan nama file di data/loader.js
//  SELESAI! Index.html otomatis membaca data baru.
// ═══════════════════════════════════════════════════════════════

// ════════════════════════════════
//  TEMPLATE KANJI — copy & isi!
// ════════════════════════════════
addKanji([

  // ── FORMAT WAJIB (semua field harus diisi) ──
  {
    jp:        "漢字",           // ← kanji / kata Jepang
    read:      "かんじ",         // ← cara baca (hiragana)
    meaning:   "Karakter Kanji", // ← arti Indonesia
    example:   "漢字を勉強する。",  // ← contoh kalimat Jepang
    exampleId: "Belajar kanji.", // ← terjemahan contoh
    mnemonic:  "漢=Han + 字=karakter → karakter dari zaman Han",
    wrongOpts: ["誤り1","誤り2","誤り3"], // ← 3 jawaban SALAH untuk kuis
    stage:     1,                // ← masuk tahap berapa (1-7)
    category:  "contoh",        // ← tema (alam, kerja, tubuh, dll)
  },

  // ── CONTOH NYATA — KANJI ALAM ──
  { jp:"海",    read:"うみ",      meaning:"Laut",
    example:"夏は海で泳ぐ。",      exampleId:"Di musim panas berenang di laut.",
    mnemonic:"海 = air (氵) + setiap (毎) → setiap hari ada airnya = laut",
    wrongOpts:["川","山","空"],    stage:1, category:"alam" },

  { jp:"山",    read:"やま",      meaning:"Gunung",
    example:"富士山は美しい。",     exampleId:"Gunung Fuji itu indah.",
    mnemonic:"山 = tiga puncak gunung yang tersusun ↑↑↑",
    wrongOpts:["川","海","森"],    stage:1, category:"alam" },

  { jp:"川",    read:"かわ",      meaning:"Sungai",
    example:"川で魚を捕った。",     exampleId:"Menangkap ikan di sungai.",
    mnemonic:"川 = tiga garis mengalir ke bawah = sungai mengalir",
    wrongOpts:["海","池","湖"],    stage:1, category:"alam" },

  { jp:"森",    read:"もり",      meaning:"Hutan",
    example:"森の中で迷った。",     exampleId:"Tersesat di dalam hutan.",
    mnemonic:"森 = 木+木+木 = tiga pohon = banyak pohon = hutan",
    wrongOpts:["林","木","竹"],    stage:1, category:"alam" },

]);


// ════════════════════════════════
//  TEMPLATE GRAMMAR — copy & isi!
// ════════════════════════════════
addGrammar([

  {
    jp:           "〜ところだ",        // ← pola grammar
    meaning:      "Sedang akan / Baru saja",
    example:      "今から出かけるところだ。",
    exampleId:    "Sekarang sedang akan pergi keluar.",
    mnemonic:     "ところ = titik/momen. 辞書形+ところ = tepat akan melakukan",
    quizSentence: "今から出かける___だ。",
    quizFuri:     "",
    quizPrompt:   "Pola 'sedang akan/baru saja':",
    quizOpts:     ["ところ","はず","もの","こと"],
    quizAns:      0,
    quizExp:      "〜ところだ = tepat pada momen. 辞書形+ところ = akan melakukan. た形+ところ = baru saja melakukan.",
    stage:        5,
    category:     "waktu",
  },

]);


// ════════════════════════════════
//  TEMPLATE VOCAB — copy & isi!
// ════════════════════════════════
addVocab([

  {
    jp:        "丁寧",           // ← kata / kosakata
    read:      "ていねい",        // ← cara baca
    meaning:   "Sopan / Cermat", // ← arti Indonesia
    type:      "adj-na",         // ← noun/verb/adj-i/adj-na/adv
    example:   "丁寧な言葉遣いが大切だ。",
    exampleId: "Pemilihan kata yang sopan itu penting.",
    mnemonic:  "丁=lurus + 寧=tenang → tenang dan lurus = sopan",
    wrongOpts: ["親切","失礼","乱暴"],
    stage:     3,
    category:  "karakter",
  },

]);

console.log("✅ Template file loaded — ganti isinya dengan data N3 kamu!");
