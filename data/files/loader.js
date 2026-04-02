// ═══════════════════════════════════════════════════════════════
//  loader.js — AUTO DATABASE MERGER
//  Cara pakai: tambah file baru di folder data/, daftarkan di
//  FILE_LIST di bawah. Selesai! Tidak perlu ubah index.html.
// ═══════════════════════════════════════════════════════════════

// ── DAFTARKAN FILE DATABASE DI SINI ──
// Untuk tambah database baru: cukup tambah nama file ke array
// yang sesuai di bawah, lalu upload file .js ke folder data/
const DB_FILES = {

  kanji: [
    // File yang sudah ada:
    'kanji',            // data/kanji.js (125 kanji)

    // Tinggal tambahkan nama file baru di bawah ini:
    'kanji-alam',      // data/kanji-alam.js (50 kanji alam)
    // 'kanji-pekerjaan',
    // 'kanji-tubuh',
    // 'kanji-waktu',
    // 'kanji-emosi',
    // 'kanji-pendidikan',
    // 'kanji-transportasi',
    // 'kanji-makanan',
    // 'kanji-ekonomi',
    // 'kanji-politik',
  ],

  grammar: [
    'grammar',           // 55 pola grammar dasar
    'grammar-batch1',    // 40 pola kondisional, waktu & alasan
    'grammar-batch2',    // 38 pola derajat, perbandingan & khusus
    'grammar-batch3',    // 35 pola pasif, formal & penutup
    // tambah file baru di sini:
  ],

  vocab: [
    // File yang sudah ada:
    'vocabulary',       // data/vocabulary.js (69 kata)

    // Tinggal tambahkan nama file baru di bawah ini:
    'vocab-kerja',     // data/vocab-kerja.js (40 kata kerja)
    // 'vocab-alam',
    // 'vocab-tubuh',
    // 'vocab-makanan',
    // 'vocab-keluarga',
    // 'vocab-transportasi',
    // 'vocab-teknologi',
    // 'vocab-sifat',
    // 'vocab-kata-kerja',
    // 'vocab-kata-keterangan',
  ],

};

window.__DB_READY = false;

(function mergeAllDatabases() {
  window.addEventListener('DOMContentLoaded', () => {
    const totalKanji   = window.KANJI_DB   ? window.KANJI_DB.length   : 0;
    const totalGrammar = window.GRAMMAR_DB ? window.GRAMMAR_DB.length : 0;
    const totalVocab   = window.VOCAB_DB   ? window.VOCAB_DB.length   : 0;

    window.__DB_READY = true;

    console.log(`
╔══════════════════════════════════╗
║   🌸 SAKURA ANKI N3 — DATABASE   ║
╠══════════════════════════════════╣
║  漢字  Kanji   : ${String(totalKanji).padStart(4)} item         ║
║  文法  Grammar : ${String(totalGrammar).padStart(4)} pola         ║
║  語彙  Vocab   : ${String(totalVocab).padStart(4)} kata         ║
║  TOTAL         : ${String(totalKanji+totalGrammar+totalVocab).padStart(4)} item         ║
╚══════════════════════════════════╝`);

    window.dispatchEvent(new CustomEvent('db-ready', {
      detail: { kanji: totalKanji, grammar: totalGrammar, vocab: totalVocab }
    }));
  });
})();

// ── HELPER FUNCTIONS ──
// Panggil addKanji(), addGrammar(), addVocab() di file database baru

window.addKanji = function(entries) {
  if (!window.KANJI_DB) window.KANJI_DB = [];
  window.KANJI_DB.push(...entries);
};

window.addGrammar = function(entries) {
  if (!window.GRAMMAR_DB) window.GRAMMAR_DB = [];
  window.GRAMMAR_DB.push(...entries);
};

window.addVocab = function(entries) {
  if (!window.VOCAB_DB) window.VOCAB_DB = [];
  window.VOCAB_DB.push(...entries);
};
