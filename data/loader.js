// loader.js — SAKURA ANKI N3 — v6
// Update: grammar 100% ✅ | kanji 100% ✅ | vocab batch 1-16 ✅
window.addKanji   = e => { if(!window.KANJI_DB)  window.KANJI_DB=[];  window.KANJI_DB.push(...e);  };
window.addGrammar = e => { if(!window.GRAMMAR_DB) window.GRAMMAR_DB=[]; window.GRAMMAR_DB.push(...e); };
window.addVocab   = e => { if(!window.VOCAB_DB)  window.VOCAB_DB=[];  window.VOCAB_DB.push(...e);  };

window.__DB_READY = false;
window.addEventListener('DOMContentLoaded', () => {
  const k = window.KANJI_DB?.length   || 0;
  const g = window.GRAMMAR_DB?.length || 0;
  const v = window.VOCAB_DB?.length   || 0;
  window.__DB_READY = true;
  console.log(`🌸 DB AKTIF | Kanji:${k}/650 Grammar:${g}/168 Vocab:${v}/3750 Total:${k+g+v}`);
  window.dispatchEvent(new CustomEvent('db-ready', { detail:{kanji:k,grammar:g,vocab:v} }));
});

// FILE TERDAFTAR:
// KANJI  : kanji, kanji-alam,
//           kanji-batch1-kerja, kanji-batch2-kesehatan, kanji-batch3-pendidikan,
//           kanji-batch4-sosial, kanji-batch5-waktu, kanji-batch6-pikiran,
//           kanji-batch7-makanan, kanji-batch8-final          ← 650/650 ✅
// GRAMMAR: grammar, grammar-batch1, grammar-batch2, grammar-batch3, grammar-final  ← 168/168 ✅
// VOCAB  : vocabulary, vocab-kerja,
//           vocab-batch1-sifat, vocab-batch2-katakerja,
//           vocab-batch3-kehidupan, vocab-batch4-alam-teknologi,
//           vocab-batch5-emosi, vocab-batch6-akademik,
//           vocab-batch7-kuliner, vocab-batch8-abstrak,
//           vocab-batch9-jikan-setsuzoku, vocab-batch10-kotsu-ido,
//           vocab-batch11-kaimono-okane, vocab-batch12-tabi-kanko,
//           vocab-batch13-karada-byoki, vocab-batch14-bunka-geijutsu,
//           vocab-batch15-sport-shumi, vocab-batch16-keizai-seiji,
//           vocab-batch17-kazoku-kankei, vocab-batch18-tenki-kisetsu,
//           vocab-batch19-gakko-kyoiku, vocab-batch20-jutaku-kenchiku,
//           vocab-batch21-shokuji-inshoku, vocab-batch22-fasshon-fuku,
//           vocab-batch23-gijutsu-intanetto, vocab-batch24-shizen-kankyo,
//           vocab-batch25-media-nyusu,
//           vocab-batch26-kanji-suji,
//           vocab-batch27-shigoto-shokugyo,
//           vocab-batch28-horitsu-shakai,
//           vocab-batch29-kanjo-ningen,
//           vocab-batch30-geijutsu-bungaku,
//           vocab-batch31-sports-kyogi,
//           vocab-batch32-doushokubutsu,
//           vocab-batch33-sozai-zairyo,
//           vocab-batch34-iro-katachi,
//           vocab-batch35-basho-hoko,
//           vocab-batch36-shukyo-dento,
//           vocab-batch37-rekishi-bunmei,
//           vocab-batch38-kagaku-kenkyu,
//           vocab-batch39-igaku-kenko,
//           vocab-batch40-setsuzoku-fukushi,
//           vocab-batch41-giongo-gitaigo,
//           vocab-batch42-keigo-aratamari  ← 3562/3750
