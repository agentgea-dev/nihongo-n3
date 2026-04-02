// ═══════════════════════════════════════════════════════════════
//  JLPT N3 VOCABULARY DATABASE — 120 Kosakata
//  Format: { jp, read, meaning, example, exampleId, mnemonic,
//            wrongOpts[3], stage, category, type }
//  type: noun/verb/adj-i/adj-na/adv
// ═══════════════════════════════════════════════════════════════

const VOCAB_DB = [

  // ══════════════════════════════════════
  //  STAGE 3 — KOSAKATA DASAR N3 (40 kata)
  // ══════════════════════════════════════

  // ── Kata Sifat -な (Sifat Karakter) ──
  { jp:"真面目", read:"まじめ", meaning:"Serius / Tekun / Rajin", type:"adj-na",
    example:"彼はとても真面目な学生だ。", exampleId:"Dia murid yang sangat rajin.",
    mnemonic:"真=sejati + 面目=wajah → wajah yang sejati = serius",
    wrongOpts:["元気","暇","適当"], stage:3, category:"karakter" },

  { jp:"丁寧", read:"ていねい", meaning:"Sopan / Cermat / Teliti", type:"adj-na",
    example:"丁寧な言葉遣いが大切だ。", exampleId:"Pemilihan kata yang sopan itu penting.",
    mnemonic:"丁=lurus + 寧=tenang → tenang dan lurus = sopan dan teliti",
    wrongOpts:["親切","失礼","乱暴"], stage:3, category:"karakter" },

  { jp:"素直", read:"すなお", meaning:"Jujur / Patuh / Polos", type:"adj-na",
    example:"素直な性格の子供だ。", exampleId:"Anak yang berkarakter jujur.",
    mnemonic:"素=polos/alami + 直=lurus → lurus dan alami = jujur dan polos",
    wrongOpts:["正直","素敵","素朴"], stage:3, category:"karakter" },

  { jp:"積極的", read:"せっきょくてき", meaning:"Aktif / Proaktif / Bersemangat", type:"adj-na",
    example:"積極的に参加することが大切だ。", exampleId:"Penting untuk berpartisipasi secara aktif.",
    mnemonic:"積=menumpuk + 極=ekstrem + 的=sufiks → secara ekstrem menumpuk energi",
    wrongOpts:["消極的","後ろ向き","受動的"], stage:3, category:"karakter" },

  { jp:"慎重", read:"しんちょう", meaning:"Berhati-hati / Cermat", type:"adj-na",
    example:"慎重に行動することが必要だ。", exampleId:"Perlu bertindak dengan berhati-hati.",
    mnemonic:"慎=berhati-hati + 重=penting/berat → menganggap serius karena berhati-hati",
    wrongOpts:["冷静","適当","大胆"], stage:3, category:"karakter" },

  { jp:"穏やか", read:"おだやか", meaning:"Tenang / Damai / Kalem", type:"adj-na",
    example:"穏やかな性格で皆に好かれる。", exampleId:"Disukai semua karena sifatnya yang tenang.",
    mnemonic:"穏=tenang/damai → suasana yang tenang seperti permukaan air tenang",
    wrongOpts:["激しい","荒い","激動的"], stage:3, category:"karakter" },

  // ── Kata Benda (Abstrak) ──
  { jp:"根気", read:"こんき", meaning:"Ketekunan / Ketabahan", type:"noun",
    example:"根気があれば何でもできる。", exampleId:"Dengan ketekunan apapun bisa.",
    mnemonic:"根=akar + 気=semangat → semangat yang berakar kuat",
    wrongOpts:["勇気","元気","本気"], stage:3, category:"abstrak" },

  { jp:"自信", read:"じしん", meaning:"Kepercayaan diri", type:"noun",
    example:"自信を持って挑戦しよう。", exampleId:"Mari mencoba dengan percaya diri.",
    mnemonic:"自=diri + 信=percaya → percaya pada diri sendiri",
    wrongOpts:["自身","自由","自然"], stage:3, category:"abstrak" },

  { jp:"責任", read:"せきにん", meaning:"Tanggung jawab", type:"noun",
    example:"責任を持って仕事をする。", exampleId:"Bekerja dengan penuh tanggung jawab.",
    mnemonic:"責=tuntut + 任=tugas → tugas yang harus dipertanggungjawabkan",
    wrongOpts:["義務","権利","役割"], stage:3, category:"abstrak" },

  { jp:"前向き", read:"まえむき", meaning:"Positif / Berorientasi maju", type:"adj-na",
    example:"前向きに考えることが大切だ。", exampleId:"Berpikir positif itu penting.",
    mnemonic:"前=depan + 向き=menghadap → selalu menghadap ke depan",
    wrongOpts:["後ろ向き","横向き","下向き"], stage:3, category:"abstrak" },

  { jp:"要約", read:"ようやく", meaning:"Ringkasan / Rangkuman", type:"noun",
    example:"内容を要約してください。", exampleId:"Tolong rangkum isinya.",
    mnemonic:"要=pokok + 約=singkat → singkat ke pokoknya",
    wrongOpts:["説明","紹介","発表"], stage:3, category:"akademik" },

  { jp:"集中", read:"しゅうちゅう", meaning:"Konsentrasi / Fokus", type:"noun",
    example:"仕事に集中できない。", exampleId:"Tidak bisa berkonsentrasi pada pekerjaan.",
    mnemonic:"集=mengumpulkan + 中=tengah → kumpulkan pikiran ke satu titik tengah",
    wrongOpts:["集合","集団","収集"], stage:3, category:"akademik" },

  // ── Kata Kerja ──
  { jp:"諦める", read:"あきらめる", meaning:"Menyerah / Melepaskan", type:"verb",
    example:"諦めずに続けることが大切だ。", exampleId:"Penting untuk terus tanpa menyerah.",
    mnemonic:"諦=menyerah → suara 'aki-ra-me-ru' → aki = musim gugur daun gugur = melepaskan",
    wrongOpts:["辞める","断る","やめる"], stage:3, category:"aksi" },

  { jp:"励ます", read:"はげます", meaning:"Menyemangati / Mendorong", type:"verb",
    example:"友達を励ましてあげた。", exampleId:"Menyemangati teman.",
    mnemonic:"励=bersemangat + ます → 'hage-masu' → memberikan semangat",
    wrongOpts:["慰める","叱る","褒める"], stage:3, category:"aksi" },

  { jp:"悩む", read:"なやむ", meaning:"Bingung / Galau / Khawatir", type:"verb",
    example:"進路について悩んでいる。", exampleId:"Sedang galau tentang jalan hidup.",
    mnemonic:"悩=galau/bingung → 'na-ya-mu' → bunyi seperti orang mengeluh",
    wrongOpts:["困る","迷う","苦しむ"], stage:3, category:"emosi" },

  { jp:"気づく", read:"きづく", meaning:"Menyadari / Menyadar", type:"verb",
    example:"間違いに気づいた。", exampleId:"Menyadari kesalahannya.",
    mnemonic:"気=perasaan/perhatian + づく=sampai → perhatian yang sampai = menyadari",
    wrongOpts:["気になる","気にする","気をつける"], stage:3, category:"aksi" },

  { jp:"断る", read:"ことわる", meaning:"Menolak / Menolak dengan sopan", type:"verb",
    example:"丁寧に断った。", exampleId:"Menolak dengan sopan.",
    mnemonic:"断=memotong/menolak → memotong permintaan orang lain",
    wrongOpts:["やめる","辞める","諦める"], stage:3, category:"komunikasi" },

  { jp:"怒る", read:"おこる", meaning:"Marah", type:"verb",
    example:"ミスをして上司に怒られた。", exampleId:"Dimarahi atasan karena kesalahan.",
    mnemonic:"怒=marah → 'o-ko-ru' → ingat 'okoru' = terjadi masalah → marah",
    wrongOpts:["叫ぶ","泣く","笑う"], stage:3, category:"emosi" },

  { jp:"驚く", read:"おどろく", meaning:"Terkejut / Kaget", type:"verb",
    example:"突然のニュースに驚いた。", exampleId:"Terkejut dengan berita yang tiba-tiba.",
    mnemonic:"驚=kaget/terkejut → 'o-do-ro-ku' → bunyi seperti suara kaget",
    wrongOpts:["喜ぶ","悲しむ","怒る"], stage:3, category:"emosi" },

  { jp:"信じる", read:"しんじる", meaning:"Percaya / Mempercayai", type:"verb",
    example:"自分の可能性を信じる。", exampleId:"Percaya pada kemungkinan diri sendiri.",
    mnemonic:"信=percaya → 'shin-ji-ru' → shin=hati/kepercayaan",
    wrongOpts:["疑う","思う","考える"], stage:3, category:"pikiran" },

  { jp:"比べる", read:"くらべる", meaning:"Membandingkan", type:"verb",
    example:"二つの案を比べてみた。", exampleId:"Mencoba membandingkan dua rencana.",
    mnemonic:"比=membandingkan → 'ku-ra-be-ru' → coba raba perbandingannya",
    wrongOpts:["調べる","数える","確かめる"], stage:3, category:"aksi" },

  // ── Kata Keterangan (Adverb) ──
  { jp:"なかなか", read:"なかなか", meaning:"Cukup / Sungguh / Tidak mudah", type:"adv",
    example:"なかなか難しい問題だ。", exampleId:"Sungguh soal yang sulit.",
    mnemonic:"なかなか = 'naka-naka' → ditengah-tengah (tidak mudah, tidak sulit)",
    wrongOpts:["なんとか","どうにか","とにかく"], stage:3, category:"intensitas" },

  { jp:"だんだん", read:"だんだん", meaning:"Perlahan-lahan / Semakin", type:"adv",
    example:"だんだん上手になってきた。", exampleId:"Perlahan-lahan semakin mahir.",
    mnemonic:"だんだん = 'dan-dan' → tangga = naik perlahan seperti menaiki tangga",
    wrongOpts:["どんどん","ずっと","もっと"], stage:3, category:"perubahan" },

  { jp:"どんどん", read:"どんどん", meaning:"Terus menerus / Semakin cepat", type:"adv",
    example:"仕事がどんどん増えている。", exampleId:"Pekerjaan terus bertambah.",
    mnemonic:"どんどん = 'don-don' → suara drum = momentum yang terus berjalan",
    wrongOpts:["だんだん","ずっと","もっと"], stage:3, category:"perubahan" },

  { jp:"ちゃんと", read:"ちゃんと", meaning:"Dengan benar / Dengan baik", type:"adv",
    example:"ちゃんと確認してから送る。", exampleId:"Kirim setelah memastikan dengan benar.",
    mnemonic:"ちゃんと = 'chan-to' → 'chanto' = benar-benar rapi dan tepat",
    wrongOpts:["きちんと","しっかり","はっきり"], stage:3, category:"cara" },

  { jp:"きちんと", read:"きちんと", meaning:"Dengan rapi / Dengan teratur", type:"adv",
    example:"きちんと整理してください。", exampleId:"Tolong atur dengan rapi.",
    mnemonic:"きちんと = 'ki-chi-n-to' → teratur seperti garis lurus",
    wrongOpts:["ちゃんと","しっかり","はっきり"], stage:3, category:"cara" },

  { jp:"はっきり", read:"はっきり", meaning:"Dengan jelas / Terang-terangan", type:"adv",
    example:"はっきり言ってください。", exampleId:"Tolong bicara dengan jelas.",
    mnemonic:"はっきり = 'hak-ki-ri' → 'hakkiri' = jelas seperti cahaya yang terang",
    wrongOpts:["ぼんやり","あいまい","ぼやけ"], stage:3, category:"cara" },

  { jp:"ついに", read:"ついに", meaning:"Akhirnya / Pada akhirnya", type:"adv",
    example:"ついに試験に合格した。", exampleId:"Akhirnya lulus ujian.",
    mnemonic:"ついに = 'tsui-ni' → 'tsui' = ujung → sampai di ujung = akhirnya",
    wrongOpts:["やっと","とうとう","ようやく"], stage:3, category:"waktu" },

  { jp:"やっと", read:"やっと", meaning:"Akhirnya / Baru saja berhasil", type:"adv",
    example:"やっと宿題が終わった。", exampleId:"Akhirnya PR selesai.",
    mnemonic:"やっと = 'yat-to' → 'yatto' = dengan susah payah akhirnya berhasil",
    wrongOpts:["ついに","とうとう","ようやく"], stage:3, category:"waktu" },

  { jp:"すでに", read:"すでに", meaning:"Sudah / Telah (sebelumnya)", type:"adv",
    example:"彼はすでに帰っていた。", exampleId:"Dia sudah pulang.",
    mnemonic:"すでに = 'su-de-ni' → 'sudeni' = sudah ada → sudah selesai sebelumnya",
    wrongOpts:["もう","まだ","これから"], stage:3, category:"waktu" },

  { jp:"ますます", read:"ますます", meaning:"Semakin / Makin-makin", type:"adv",
    example:"日本語がますます上手になった。", exampleId:"Bahasa Jepang semakin mahir.",
    mnemonic:"ますます = 'masu-masu' → ます=meningkat dua kali = semakin meningkat",
    wrongOpts:["だんだん","どんどん","もっと"], stage:3, category:"intensitas" },

  { jp:"わざと", read:"わざと", meaning:"Sengaja / Dengan maksud", type:"adv",
    example:"わざと負けたのではない。", exampleId:"Bukan sengaja kalah.",
    mnemonic:"わざと = 'wa-za-to' → 'waza' = keahlian → sengaja menggunakan keahlian",
    wrongOpts:["わざわざ","せっかく","つい"], stage:3, category:"cara" },

  { jp:"せっかく", read:"せっかく", meaning:"Dengan susah payah / Sayang (jika sia-sia)", type:"adv",
    example:"せっかく来たのに、会えなかった。", exampleId:"Sayang sudah jauh-jauh datang tapi tidak bisa bertemu.",
    mnemonic:"せっかく = 'sek-ka-ku' → susah payah datang = sayang kalau sia-sia",
    wrongOpts:["わざと","わざわざ","もったいない"], stage:3, category:"cara" },

  // ══════════════════════════════════════
  //  STAGE 6 — KOSAKATA LANJUTAN N3 (40 kata)
  // ══════════════════════════════════════

  // ── Kata Benda Abstrak Lanjutan ──
  { jp:"論理", read:"ろんり", meaning:"Logika / Penalaran", type:"noun",
    example:"論理的な思考が大切だ。", exampleId:"Pemikiran yang logis itu penting.",
    mnemonic:"論=berargumen + 理=prinsip → prinsip berargumen = logika",
    wrongOpts:["倫理","道理","原理"], stage:6, category:"akademik" },

  { jp:"矛盾", read:"むじゅん", meaning:"Kontradiksi / Tidak konsisten", type:"noun",
    example:"その話には矛盾がある。", exampleId:"Ada kontradiksi dalam cerita itu.",
    mnemonic:"矛=tombak + 盾=perisai → menyerang dan bertahan = bertentangan",
    wrongOpts:["問題","疑問","不満"], stage:6, category:"akademik" },

  { jp:"根拠", read:"こんきょ", meaning:"Dasar / Landasan / Bukti", type:"noun",
    example:"根拠を示してください。", exampleId:"Tolong tunjukkan dasarnya.",
    mnemonic:"根=akar + 拠=bersandar → bersandar pada akar yang kuat",
    wrongOpts:["理由","原因","証拠"], stage:6, category:"akademik" },

  { jp:"予測", read:"よそく", meaning:"Prediksi / Perkiraan", type:"noun",
    example:"今後の動向を予測する。", exampleId:"Memprediksi tren ke depan.",
    mnemonic:"予=sebelumnya + 測=mengukur → mengukur sebelum terjadi = prediksi",
    wrongOpts:["予定","予想","予言"], stage:6, category:"akademik" },

  { jp:"様々", read:"さまざま", meaning:"Bermacam-macam / Beragam", type:"adj-na",
    example:"様々な意見を聞いた。", exampleId:"Mendengar berbagai macam pendapat.",
    mnemonic:"様=gaya/cara → banyak gaya/cara = beragam",
    wrongOpts:["色々","いろいろ","多様"], stage:6, category:"kuantitas" },

  { jp:"充実", read:"じゅうじつ", meaning:"Memuaskan / Penuh makna", type:"adj-na",
    example:"充実した毎日を送りたい。", exampleId:"Ingin menjalani hari-hari yang bermakna.",
    mnemonic:"充=penuh + 実=buah → hari yang penuh dan berbuah",
    wrongOpts:["満足","幸福","豊か"], stage:6, category:"emosi" },

  { jp:"後悔", read:"こうかい", meaning:"Penyesalan", type:"noun",
    example:"あの選択を後悔している。", exampleId:"Menyesali pilihan itu.",
    mnemonic:"後=setelah + 悔=menyesal → menyesal setelah terjadi",
    wrongOpts:["反省","失望","残念"], stage:6, category:"emosi" },

  { jp:"覚悟", read:"かくご", meaning:"Tekad / Kesiapan mental", type:"noun",
    example:"覚悟を持って臨む。", exampleId:"Menghadapi dengan tekad yang bulat.",
    mnemonic:"覚=sadar + 悟=mengerti → sadar sepenuhnya dan siap menanggung",
    wrongOpts:["決心","決意","意志"], stage:6, category:"karakter" },

  { jp:"貢献", read:"こうけん", meaning:"Kontribusi / Sumbangan", type:"noun",
    example:"社会への貢献を忘れない。", exampleId:"Tidak lupa berkontribusi pada masyarakat.",
    mnemonic:"貢=persembahan + 献=dedikasi → mendedikasikan diri",
    wrongOpts:["協力","参加","援助"], stage:6, category:"sosial" },

  { jp:"批判", read:"ひはん", meaning:"Kritik / Kecaman", type:"noun",
    example:"建設的な批判を受け入れる。", exampleId:"Menerima kritik yang konstruktif.",
    mnemonic:"批=menilai + 判=keputusan → keputusan penilaian yang tajam = kritik",
    wrongOpts:["非難","反論","否定"], stage:6, category:"komunikasi" },

  // ── Kata Kerja Lanjutan ──
  { jp:"把握する", read:"はあくする", meaning:"Memahami / Menguasai (situasi)", type:"verb",
    example:"状況を正確に把握する。", exampleId:"Memahami situasi dengan tepat.",
    mnemonic:"把=menggenggam + 握=menggenggam → menggenggam erat = menguasai sepenuhnya",
    wrongOpts:["理解する","知る","わかる"], stage:6, category:"kognitif" },

  { jp:"実現する", read:"じつげんする", meaning:"Mewujudkan / Mengejawantahkan", type:"verb",
    example:"夢を実現するために努力する。", exampleId:"Berusaha untuk mewujudkan impian.",
    mnemonic:"実=nyata + 現=muncul → membuat yang nyata muncul = mewujudkan",
    wrongOpts:["達成する","成功する","完成する"], stage:6, category:"aksi" },

  { jp:"促進する", read:"そくしんする", meaning:"Mendorong / Mempercepat", type:"verb",
    example:"経済成長を促進する政策。", exampleId:"Kebijakan yang mendorong pertumbuhan ekonomi.",
    mnemonic:"促=mendorong + 進=maju → mendorong untuk maju",
    wrongOpts:["推進する","促す","進める"], stage:6, category:"aksi" },

  { jp:"検討する", read:"けんとうする", meaning:"Mempertimbangkan / Mengkaji", type:"verb",
    example:"慎重に検討してから決める。", exampleId:"Memutuskan setelah mengkaji dengan cermat.",
    mnemonic:"検=memeriksa + 討=membahas → membahas sambil memeriksa",
    wrongOpts:["考える","調べる","判断する"], stage:6, category:"kognitif" },

  { jp:"妥協する", read:"だきょうする", meaning:"Berkompromi", type:"verb",
    example:"双方が少し妥協した。", exampleId:"Kedua pihak sedikit berkompromi.",
    mnemonic:"妥=tepat/damai + 協=kerjasama → kerjasama menuju titik tengah",
    wrongOpts:["譲歩する","折れる","諦める"], stage:6, category:"sosial" },

  { jp:"克服する", read:"こくふくする", meaning:"Mengatasi / Mengalahkan (rintangan)", type:"verb",
    example:"困難を克服した。", exampleId:"Berhasil mengatasi kesulitan.",
    mnemonic:"克=menguasai + 服=mengalahkan → mengalahkan dan menguasai hambatan",
    wrongOpts:["解決する","乗り越える","突破する"], stage:6, category:"aksi" },

  // ── Kata Sifat Lanjutan ──
  { jp:"率直", read:"そっちょく", meaning:"Blak-blakan / Terus terang", type:"adj-na",
    example:"率直に言うと、難しい。", exampleId:"Terus terang, itu sulit.",
    mnemonic:"率=memimpin/langsung + 直=lurus → langsung dan lurus = jujur",
    wrongOpts:["正直","素直","坦率"], stage:6, category:"karakter" },

  { jp:"謙虚", read:"けんきょ", meaning:"Rendah hati / Tidak sombong", type:"adj-na",
    example:"成功しても謙虚でいる。", exampleId:"Tetap rendah hati meski sukses.",
    mnemonic:"謙=rendah hati + 虚=kosong → hati yang kosong dari kesombongan",
    wrongOpts:["謙遜","控えめ","遠慮"], stage:6, category:"karakter" },

  { jp:"誠実", read:"せいじつ", meaning:"Tulus / Jujur / Setia", type:"adj-na",
    example:"誠実な対応を心がける。", exampleId:"Berusaha merespons dengan tulus.",
    mnemonic:"誠=tulus/sungguh + 実=nyata → sungguh-sungguh dan nyata",
    wrongOpts:["正直","忠実","真剣"], stage:6, category:"karakter" },

  { jp:"曖昧", read:"あいまい", meaning:"Tidak jelas / Ambigu / Samar", type:"adj-na",
    example:"曖昧な返事はよくない。", exampleId:"Jawaban yang tidak jelas itu tidak baik.",
    mnemonic:"曖昧 → 'ai-mai' → ingat 'aimer' (Prancis=cinta) tapi bentuknya samar",
    wrongOpts:["不明","不確か","漠然"], stage:6, category:"kondisi" },

  // ══════════════════════════════════════
  //  STAGE 7 — KOSAKATA MASTER N3 (40 kata)
  // ══════════════════════════════════════

  { jp:"執着", read:"しゅうちゃく", meaning:"Keterikatan berlebihan / Obsesi", type:"noun",
    example:"過去への執着を手放す。", exampleId:"Melepaskan keterikatan pada masa lalu.",
    mnemonic:"執=memegang erat + 着=melekat → melekat dengan memegang erat",
    wrongOpts:["こだわり","依存","中毒"], stage:7, category:"psikologi" },

  { jp:"嫉妬", read:"しっと", meaning:"Cemburu / Iri hati", type:"noun",
    example:"友達の成功に嫉妬した。", exampleId:"Iri pada kesuksesan teman.",
    mnemonic:"嫉=iri + 妬=cemburu → gabungan dua kanji yang sama-sama negatif",
    wrongOpts:["羨ましい","妬ましい","うらやむ"], stage:7, category:"emosi" },

  { jp:"尊重", read:"そんちょう", meaning:"Menghormati / Menghargai", type:"noun",
    example:"お互いの意見を尊重する。", exampleId:"Saling menghormati pendapat.",
    mnemonic:"尊=mulia/hormat + 重=penting/berat → menganggap penting dan mulia",
    wrongOpts:["敬意","敬う","重視する"], stage:7, category:"sosial" },

  { jp:"妥当", read:"だとう", meaning:"Wajar / Tepat / Layak", type:"adj-na",
    example:"その判断は妥当だと思う。", exampleId:"Saya pikir keputusan itu wajar.",
    mnemonic:"妥=tepat + 当=benar/mengenai → tepat dan benar sasaran",
    wrongOpts:["適切","適当","正当"], stage:7, category:"evaluasi" },

  { jp:"曖昧", read:"あいまい", meaning:"Tidak jelas / Ambigu", type:"adj-na",
    example:"曖昧な表現は避けるべきだ。", exampleId:"Seharusnya menghindari ekspresi yang ambigu.",
    mnemonic:"曖昧 → kedua kanji sama-sama mengandung elemen yang 'tersembunyi'",
    wrongOpts:["不明瞭","漠然","不鮮明"], stage:7, category:"kondisi" },

  { jp:"概念", read:"がいねん", meaning:"Konsep / Gagasan abstrak", type:"noun",
    example:"抽象的な概念を理解する。", exampleId:"Memahami konsep abstrak.",
    mnemonic:"概=gambaran umum + 念=pikiran → gambaran pikiran = konsep",
    wrongOpts:["観念","理念","信念"], stage:7, category:"abstrak" },

  { jp:"本質", read:"ほんしつ", meaning:"Esensi / Inti / Hakikat", type:"noun",
    example:"問題の本質を見抜く。", exampleId:"Memahami esensi masalah.",
    mnemonic:"本=akar/inti + 質=substansi → substansi dari inti = esensi",
    wrongOpts:["本体","本来","本当"], stage:7, category:"abstrak" },

  { jp:"価値観", read:"かちかん", meaning:"Nilai-nilai / Cara pandang tentang nilai", type:"noun",
    example:"人それぞれ価値観が違う。", exampleId:"Setiap orang berbeda nilai-nilainya.",
    mnemonic:"価値=nilai + 観=pandangan → pandangan tentang nilai = value",
    wrongOpts:["世界観","人生観","道徳観"], stage:7, category:"abstrak" },

  { jp:"矛盾", read:"むじゅん", meaning:"Kontradiksi / Inkonsistensi", type:"noun",
    example:"発言に矛盾がある。", exampleId:"Ada kontradiksi dalam pernyataannya.",
    mnemonic:"矛=tombak (menyerang) + 盾=perisai (bertahan) → saling bertentangan",
    wrongOpts:["不一致","対立","葛藤"], stage:7, category:"logika" },

  { jp:"妥協", read:"だきょう", meaning:"Kompromi", type:"noun",
    example:"妥協点を見つける。", exampleId:"Menemukan titik kompromi.",
    mnemonic:"妥=tepat + 協=kerjasama → kerjasama menuju titik tengah yang tepat",
    wrongOpts:["譲歩","折衷","和解"], stage:7, category:"sosial" },

  { jp:"葛藤", read:"かっとう", meaning:"Konflik batin / Pergulatan jiwa", type:"noun",
    example:"心の葛藤を乗り越えた。", exampleId:"Mengatasi konflik batin.",
    mnemonic:"葛=tanaman merambat + 藤=tanaman merambat → dua tanaman saling membelit = konflik batin",
    wrongOpts:["悩み","苦しみ","迷い"], stage:7, category:"psikologi" },

  { jp:"普遍", read:"ふへん", meaning:"Universal / Umum berlaku", type:"adj-na",
    example:"愛は普遍的な感情だ。", exampleId:"Cinta adalah perasaan yang universal.",
    mnemonic:"普=umum/biasa + 遍=menyebar → menyebar ke mana-mana = universal",
    wrongOpts:["一般","共通","全体"], stage:7, category:"abstrak" },

  { jp:"洞察", read:"どうさつ", meaning:"Wawasan mendalam / Insight", type:"noun",
    example:"鋭い洞察力を持つ人だ。", exampleId:"Orang yang memiliki wawasan tajam.",
    mnemonic:"洞=gua (dalam) + 察=mengamati → mengamati yang ada di dalam = insight",
    wrongOpts:["観察","分析","直感"], stage:7, category:"kognitif" },

  { jp:"自覚", read:"じかく", meaning:"Kesadaran diri / Menyadari sendiri", type:"noun",
    example:"自分の立場を自覚する。", exampleId:"Menyadari posisi diri sendiri.",
    mnemonic:"自=diri + 覚=sadar → sadar terhadap diri sendiri",
    wrongOpts:["自意識","自省","反省"], stage:7, category:"psikologi" },

  { jp:"克服", read:"こくふく", meaning:"Mengatasi / Mengalahkan rintangan", type:"noun",
    example:"恐怖心の克服に挑戦する。", exampleId:"Mencoba mengatasi rasa takut.",
    mnemonic:"克=menguasai + 服=mengalahkan → mengalahkan hambatan",
    wrongOpts:["解決","突破","乗り越え"], stage:7, category:"aksi" },

  { jp:"促進", read:"そくしん", meaning:"Promosi / Percepatan", type:"noun",
    example:"健康促進のための運動。", exampleId:"Olahraga untuk promosi kesehatan.",
    mnemonic:"促=mendorong + 進=maju → mendorong untuk maju lebih cepat",
    wrongOpts:["推進","発展","向上"], stage:7, category:"proses" },

];

// Fungsi helper
function getVocabByStage(stageNum) {
  return VOCAB_DB.filter(v => v.stage === stageNum);
}

function buildVocabQuestions(vocabList) {
  return vocabList.map(v => ({
    jp: `${v.example.replace(v.jp, '___')}`,
    furi: v.read,
    prompt: `Pilih kata yang tepat (${v.meaning.split('/')[0].trim()}):`,
    opts: [v.jp, ...v.wrongOpts],
    ans: 0,
    exp: `${v.jp}(${v.read}) = ${v.meaning}. ${v.mnemonic}`,
  }));
}

console.log(`✅ Vocab DB loaded: ${VOCAB_DB.length} kosakata`);
