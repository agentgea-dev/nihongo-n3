// loader.js — SAKURA ANKI N3 — v7
// Update: grammar 100% ✅ | kanji 100% ✅ | vocab 3802/3750 ✅
// v7: + helper getCardsByStage / getAllCards / SRS (n3_card_prog) / weak cards
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

// ═══════════════════════════════════════════════════════════════
//  HELPER: Kategorisasi kartu berdasarkan tipe
// ═══════════════════════════════════════════════════════════════
window.getCardType = function(c){
  if(!c) return 'unknown';
  if(c._type) return c._type;
  // Heuristik: grammar punya quizSentence atau quizOpts
  if(c.quizSentence||c.quizOpts) return 'grammar';
  // Kalau jp dimulai dengan 〜 → grammar
  if(c.jp && c.jp.charAt(0)==='〜') return 'grammar';
  // Kalau panjang jp 1 karakter dan punya read → kanji
  if(c.jp && c.jp.length===1 && c.read) return 'kanji';
  // Default vocab
  return 'vocab';
};

// ID unik per kartu (untuk SRS tracking)
window.getCardId = function(c){
  if(!c) return null;
  return (c.jp||'')+'__'+(c.read||'');
};

// ═══════════════════════════════════════════════════════════════
//  HELPER: Akses semua kartu / per stage
// ═══════════════════════════════════════════════════════════════
window.getAllCards = function(){
  const k = (window.KANJI_DB||[]).map(c=>({...c, _src:'kanji'}));
  const g = (window.GRAMMAR_DB||[]).map(c=>({...c, _src:'grammar'}));
  const v = (window.VOCAB_DB||[]).map(c=>({...c, _src:'vocab'}));
  return [...k, ...g, ...v];
};

// Kartu yang stage-nya sesuai (kalau field stage ada di item)
window.getCardsByStage = function(stageId){
  return window.getAllCards().filter(c => c.stage === stageId);
};

// ═══════════════════════════════════════════════════════════════
//  SRS: Spaced Repetition System sederhana
//  localStorage key: 'n3_card_prog'  → { [cardId]: {seen,correct,wrong,nextReview,interval,streak} }
//  localStorage key: 'n3_weak'       → [cardId, ...]
// ═══════════════════════════════════════════════════════════════
window.SRS_KEY = 'n3_card_prog';
window.WEAK_KEY = 'n3_weak';
window.DAY_MS = 24*60*60*1000;

window.loadCardProg = function(){
  try { return JSON.parse(localStorage.getItem(window.SRS_KEY)) || {}; }
  catch(e){ return {}; }
};
window.saveCardProg = function(prog){
  try { localStorage.setItem(window.SRS_KEY, JSON.stringify(prog)); } catch(e){}
};
window.loadWeakSet = function(){
  try { return new Set(JSON.parse(localStorage.getItem(window.WEAK_KEY))||[]); }
  catch(e){ return new Set(); }
};
window.saveWeakSet = function(set){
  try { localStorage.setItem(window.WEAK_KEY, JSON.stringify([...set])); } catch(e){}
};

// Update SRS state untuk satu kartu setelah dijawab
window.updateCardSRS = function(cardId, isCorrect){
  if(!cardId) return;
  const prog = window.loadCardProg();
  const e = prog[cardId] || {seen:0, correct:0, wrong:0, interval:1, streak:0, nextReview:0, status:'unseen'};
  e.seen++;
  if(isCorrect){
    e.correct++;
    e.streak = (e.streak||0) + 1;
    e.interval = Math.min(64, (e.interval||1) * 2); // 1→2→4→8→16→32→64 hari
    e.status = e.correct >= 3 && e.streak >= 2 ? 'mastered' : 'learning';
  } else {
    e.wrong++;
    e.streak = 0;
    e.interval = 1;
    e.status = 'learning';
    // Tambah ke weak set jika salah ≥3x
    if(e.wrong >= 3){
      const w = window.loadWeakSet();
      w.add(cardId);
      window.saveWeakSet(w);
    }
  }
  e.nextReview = Date.now() + e.interval * window.DAY_MS;
  prog[cardId] = e;
  window.saveCardProg(prog);
  return e;
};

// Kartu yang waktu reviewnya sudah lewat
window.getDueCards = function(stageId){
  const prog = window.loadCardProg();
  const now = Date.now();
  const all = stageId ? window.getCardsByStage(stageId) : window.getAllCards();
  return all.filter(c => {
    const e = prog[window.getCardId(c)];
    return e && e.nextReview && e.nextReview <= now && e.status !== 'mastered';
  });
};

// Kartu yang sudah ditandai weak (salah ≥3x)
window.getWeakCards = function(stageId){
  const w = window.loadWeakSet();
  if(w.size===0) return [];
  const all = stageId ? window.getCardsByStage(stageId) : window.getAllCards();
  return all.filter(c => w.has(window.getCardId(c)));
};

// Status kartu: 'unseen' | 'learning' | 'mastered'
window.getCardStatus = function(c){
  const prog = window.loadCardProg();
  const e = prog[window.getCardId(c)];
  if(!e || !e.seen) return 'unseen';
  return e.status || 'learning';
};

// FILE TERDAFTAR:
// KANJI  : kanji, kanji-alam,
//           kanji-batch1-kerja, kanji-batch2-kesehatan, kanji-batch3-pendidikan,
//           kanji-batch4-sosial, kanji-batch5-waktu, kanji-batch6-pikiran,
//           kanji-batch7-makanan, kanji-batch8-final          ← 650/650 ✅
// GRAMMAR: grammar, grammar-batch1, grammar-batch2, grammar-batch3, grammar-final  ← 168/168 ✅
// VOCAB  : vocabulary, vocab-kerja,
//           vocab-batch1-sifat .. vocab-batch28-horitsu-shakai,
//           vocab-batch29-kanjo-ningen .. vocab-batch44-n3-hinshutu-b,
//           vocab-batch45-n3-hinshutu-c  ← 3802/3750 ✅
