// kanji-batch8-final.js — Kanji N3: Batch Terakhir (57 kanji → target 650 tercapai!)
addKanji([

  // ── ABSTRAK & KONSEP ──
  { jp:"概",read:"がい",meaning:"Gambaran umum / Garis besar",
    example:"概要を説明する。",exampleId:"Menjelaskan gambaran umum.",
    mnemonic:"木(kayu)+旣(sudah) → kayu yang sudah dilihat sekilas = gambaran umum",
    wrongOpts:["略","要","大"],stage:4,category:"abstrak" },

  { jp:"略",read:"りゃく",meaning:"Singkat / Garis besar",
    example:"略して言うと、失敗だ。",exampleId:"Singkatnya, gagal.",
    mnemonic:"田(sawah)+各(masing-masing) → masing-masing petak sawah diringkas = singkat",
    wrongOpts:["概","省","簡"],stage:4,category:"abstrak" },

  { jp:"項",read:"こう",meaning:"Item / Pasal / Kolom",
    example:"各項目を確認する。",exampleId:"Memeriksa setiap item.",
    mnemonic:"工(kerja)+頁(kepala) → kepala pekerjaan = item/pasal",
    wrongOpts:["条","節","目"],stage:4,category:"abstrak" },

  { jp:"条",read:"じょう",meaning:"Pasal / Syarat / Garis",
    example:"契約の条件を読む。",exampleId:"Membaca syarat kontrak.",
    mnemonic:"夂(berjalan)+木(kayu) → kayu yang berjalan lurus = garis/pasal",
    wrongOpts:["項","節","款"],stage:4,category:"abstrak" },

  { jp:"款",read:"かん",meaning:"Pasal / Klausul",
    example:"契約款を確認する。",exampleId:"Memeriksa klausul kontrak.",
    mnemonic:"欠(kurang)+示(menunjukkan) → menunjukkan yang kurang = klausul",
    wrongOpts:["条","項","節"],stage:6,category:"abstrak" },

  { jp:"規",read:"き",meaning:"Aturan / Standar",
    example:"規則を守る。",exampleId:"Mematuhi aturan.",
    mnemonic:"夫(suami)+見(melihat) → suami yang mengawasi standar = aturan",
    wrongOpts:["則","律","法"],stage:3,category:"abstrak" },

  { jp:"矛",read:"む/ほこ",meaning:"Tombak / Kontradiksi",
    example:"矛盾している。",exampleId:"Bertentangan / Kontradiksi.",
    mnemonic:"Gambar tombak yang meruncing = tombak",
    wrongOpts:["盾","槍","剣"],stage:5,category:"abstrak" },

  { jp:"盾",read:"じゅん/たて",meaning:"Perisai",
    example:"矛盾を解決する。",exampleId:"Menyelesaikan kontradiksi.",
    mnemonic:"十(sepuluh)+目(mata)+一 → perisai dengan banyak mata = perisai",
    wrongOpts:["矛","鎧","甲"],stage:5,category:"abstrak" },

  { jp:"端",read:"たん/はし",meaning:"Ujung / Tepi / Awal",
    example:"机の端に置く。",exampleId:"Meletakkan di ujung meja.",
    mnemonic:"立(berdiri)+耑(ujung) → berdiri di ujung = ujung",
    wrongOpts:["辺","隅","際"],stage:3,category:"abstrak" },

  { jp:"際",read:"さい/きわ",meaning:"Tepi / Batas / Kesempatan",
    example:"国際交流に参加する。",exampleId:"Berpartisipasi dalam pertukaran internasional.",
    mnemonic:"阜(bukit)+祭(upacara) → upacara di tepi bukit = kesempatan/batas",
    wrongOpts:["端","辺","縁"],stage:3,category:"abstrak" },

  // ── GERAKAN & AKSI ──
  { jp:"跳",read:"ちょう/と/は",meaning:"Melompat",
    example:"高くジャンプして跳んだ。",exampleId:"Melompat tinggi.",
    mnemonic:"足(kaki)+兆(pertanda) → pertanda kaki melompat = melompat",
    wrongOpts:["飛","踊","駆"],stage:3,category:"gerakan" },

  { jp:"踊",read:"おど",meaning:"Menari",
    example:"みんなで踊った。",exampleId:"Semua menari bersama.",
    mnemonic:"足(kaki)+甬(jalan sempit) → kaki yang bergerak di jalan sempit = menari",
    wrongOpts:["跳","舞","飛"],stage:3,category:"gerakan" },

  { jp:"舞",read:"ぶ/ま",meaning:"Menari (tradisional) / Bertebaran",
    example:"雪が舞っている。",exampleId:"Salju berterbangan.",
    mnemonic:"無(tidak ada)+舛(kaki) → kaki yang bergerak tanpa henti = menari",
    wrongOpts:["踊","跳","飛"],stage:3,category:"gerakan" },

  { jp:"滑",read:"かつ/すべ",meaning:"Licin / Meluncur",
    example:"道が滑って転んだ。",exampleId:"Jatuh karena jalan licin.",
    mnemonic:"氵(air)+骨(tulang) → tulang yang dibasahi air = licin",
    wrongOpts:["滑","溜","流"],stage:3,category:"gerakan" },

  { jp:"揺",read:"よう/ゆ",meaning:"Bergoyang / Mengguncang",
    example:"地震で家が揺れた。",exampleId:"Rumah bergoyang karena gempa.",
    mnemonic:"手(tangan)+㕣(bergerak) → tangan yang menggoyangkan = bergoyang",
    wrongOpts:["振","震","動"],stage:3,category:"gerakan" },

  { jp:"震",read:"しん/ふる",meaning:"Gemetar / Berguncang",
    example:"恐怖で体が震えた。",exampleId:"Tubuh gemetar karena ketakutan.",
    mnemonic:"雨(hujan)+辰(waktu) → hujan yang membuat gemetar = gemetar",
    wrongOpts:["揺","振","動"],stage:3,category:"gerakan" },

  { jp:"振",read:"しん/ふ",meaning:"Mengayunkan / Menggerakkan",
    example:"旗を振る。",exampleId:"Mengibarkan bendera.",
    mnemonic:"手(tangan)+辰(waktu) → tangan yang bergerak mengikuti waktu = mengayunkan",
    wrongOpts:["揺","震","動"],stage:3,category:"gerakan" },

  { jp:"押",read:"おう/お",meaning:"Mendorong / Menekan",
    example:"ドアを押して開ける。",exampleId:"Membuka pintu dengan mendorong.",
    mnemonic:"手(tangan)+甲(baju zirah) → tangan yang menekan keras = mendorong",
    wrongOpts:["引","押","叩"],stage:2,category:"gerakan" },

  { jp:"引",read:"いん/ひ",meaning:"Menarik",
    example:"ドアを引いて開ける。",exampleId:"Membuka pintu dengan menarik.",
    mnemonic:"弓(busur)+丨(garis) → menarik garis busur = menarik",
    wrongOpts:["押","引","伸"],stage:2,category:"gerakan" },

  { jp:"握",read:"あく/にぎ",meaning:"Menggenggam / Berjabat tangan",
    example:"手を握る。",exampleId:"Menggenggam tangan.",
    mnemonic:"手(tangan)+屋(rumah) → tangan yang masuk ke rumah = menggenggam",
    wrongOpts:["掴","持","把"],stage:3,category:"gerakan" },

  // ── KEADAAN & KONDISI ──
  { jp:"鮮",read:"せん/あざ",meaning:"Segar / Cerah / Jelas",
    example:"鮮やかな色だ。",exampleId:"Warnanya cerah.",
    mnemonic:"魚(ikan)+羊(domba) → ikan dan domba yang segar = segar",
    wrongOpts:["新","清","爽"],stage:3,category:"kondisi" },

  { jp:"鈍",read:"どん/にぶ",meaning:"Tumpul / Lambat",
    example:"反応が鈍い。",exampleId:"Reaksinya lambat.",
    mnemonic:"金(logam)+屯(berkumpul) → logam yang menumpuk = tumpul",
    wrongOpts:["鋭","遅","緩"],stage:3,category:"kondisi" },

  { jp:"鋭",read:"えい/するど",meaning:"Tajam / Cerdas",
    example:"鋭い質問だ。",exampleId:"Pertanyaan yang tajam.",
    mnemonic:"金(logam)+兌(bersinar) → logam yang bersinar tajam = tajam",
    wrongOpts:["鈍","鋭","刃"],stage:3,category:"kondisi" },

  { jp:"粗",read:"そ/あら",meaning:"Kasar / Tidak halus",
    example:"粗い仕事ぶりだ。",exampleId:"Cara kerjanya kasar.",
    mnemonic:"米(beras)+且(selain itu) → beras yang tidak halus = kasar",
    wrongOpts:["荒","粗","雑"],stage:3,category:"kondisi" },

  { jp:"荒",read:"こう/あら",meaning:"Ganas / Kasar (alam)",
    example:"荒れた天気が続く。",exampleId:"Cuaca buruk terus berlanjut.",
    mnemonic:"艹(tanaman)+亡(hilang)+巛(sungai) → tanaman yang hanyut = ganas/kasar",
    wrongOpts:["粗","荒","猛"],stage:3,category:"kondisi" },

  { jp:"鈍",read:"どん",meaning:"Tumpul / Lamban",
    example:"鈍感な人だ。",exampleId:"Orang yang tidak peka.",
    mnemonic:"金(logam)+屯(menumpuk) → logam menumpuk = tidak tajam = tumpul",
    wrongOpts:["鋭","遅","鈍"],stage:3,category:"kondisi" },

  { jp:"透",read:"とう/す",meaning:"Tembus / Transparan",
    example:"透明なガラス。",exampleId:"Kaca yang transparan.",
    mnemonic:"辶(berjalan)+秀(unggul) → berjalan menembus = transparan",
    wrongOpts:["透","通","抜"],stage:3,category:"kondisi" },

  // ── UKURAN & JUMLAH ──
  { jp:"倍",read:"ばい",meaning:"Kali lipat / Ganda",
    example:"二倍の量が必要だ。",exampleId:"Butuh jumlah dua kali lipat.",
    mnemonic:"亻(orang)+咅(bertambah) → orang yang bertambah = kali lipat",
    wrongOpts:["倍","増","翻"],stage:2,category:"ukuran" },

  { jp:"超",read:"ちょう/こ",meaning:"Melampaui / Super",
    example:"予算を超えた。",exampleId:"Melampaui anggaran.",
    mnemonic:"走(berlari)+召(memanggil) → berlari melampaui = melampaui",
    wrongOpts:["越","過","超"],stage:3,category:"ukuran" },

  { jp:"余",read:"よ/あま",meaning:"Sisa / Lebih",
    example:"時間に余裕がある。",exampleId:"Ada kelonggaran waktu.",
    mnemonic:"人+矢(panah)+木 → panah yang tersisa = sisa/lebih",
    wrongOpts:["残","剰","過"],stage:3,category:"ukuran" },

  { jp:"幅",read:"はば",meaning:"Lebar / Rentang",
    example:"道路の幅が広い。",exampleId:"Lebar jalan luas.",
    mnemonic:"巾(kain)+畐(penuh) → kain yang lebar = lebar",
    wrongOpts:["幅","広","径"],stage:3,category:"ukuran" },

  // ── WAKTU & PERIODE KHUSUS ──
  { jp:"瞬",read:"しゅん/またた",meaning:"Sekejap / Berkedip",
    example:"瞬間的に判断した。",exampleId:"Memutuskan dalam sekejap.",
    mnemonic:"目(mata)+舜(seketika) → mata yang berkedip = sekejap",
    wrongOpts:["刻","瞬","即"],stage:4,category:"waktu" },

  { jp:"刻",read:"こく/きざ",meaning:"Waktu tertentu / Mengukir",
    example:"時刻を確認する。",exampleId:"Mengecek waktu.",
    mnemonic:"亥(babi hutan)+刀(pisau) → mengukir waktu = waktu/mengukir",
    wrongOpts:["時","刻","刷"],stage:3,category:"waktu" },

  { jp:"暦",read:"こよみ/れき",meaning:"Kalender / Penanggalan",
    example:"暦を見て予定を立てる。",exampleId:"Melihat kalender untuk membuat rencana.",
    mnemonic:"厂(atap)+日(hari)+木(kayu) → kayu yang menandai hari = kalender",
    wrongOpts:["暦","日","年"],stage:3,category:"waktu" },

  { jp:"暫",read:"ざん/しばら",meaning:"Sementara / Sebentar",
    example:"暫く待ってください。",exampleId:"Tolong tunggu sebentar.",
    mnemonic:"斬(memotong)+日(hari) → memotong hari = sementara",
    wrongOpts:["少","短","一時"],stage:4,category:"waktu" },

  // ── KOMUNIKASI & BAHASA ──
  { jp:"訴",read:"そ/うった",meaning:"Mengadukan / Mengeluh",
    example:"裁判所に訴えた。",exampleId:"Mengadukan ke pengadilan.",
    mnemonic:"言(kata)+斥(menolak) → kata-kata penolakan = mengadukan",
    wrongOpts:["告","申","訴"],stage:4,category:"komunikasi" },

  { jp:"誓",read:"せい/ちか",meaning:"Bersumpah / Berjanji",
    example:"愛を誓う。",exampleId:"Bersumpah atas cinta.",
    mnemonic:"折(patah)+言(kata) → kata-kata yang memotong = sumpah",
    wrongOpts:["約","盟","誓"],stage:4,category:"komunikasi" },

  { jp:"縁",read:"えん/ふち",meaning:"Hubungan / Nasib / Tepi",
    example:"ご縁があって出会えた。",exampleId:"Bisa bertemu karena ada takdir.",
    mnemonic:"糸(benang)+彖(mengelilingi) → benang yang mengelilingi = hubungan",
    wrongOpts:["関","縁","絆"],stage:3,category:"hubungan" },

  { jp:"縛",read:"ばく/しば",meaning:"Mengikat / Membatasi",
    example:"ルールに縛られる。",exampleId:"Terikat oleh aturan.",
    mnemonic:"糸(benang)+尃(menyebar) → benang yang menyebar mengikat = mengikat",
    wrongOpts:["結","束","縛"],stage:4,category:"hubungan" },

  { jp:"解",read:"かい/と",meaning:"Memecahkan / Memahami / Melepaskan",
    example:"問題を解く。",exampleId:"Memecahkan masalah.",
    mnemonic:"角(tanduk)+刀(pisau)+牛(sapi) → memotong tanduk sapi = melepaskan",
    wrongOpts:["解","析","分"],stage:3,category:"kognitif" },

  // ── PEMERINTAH & INSTITUSI ──
  { jp:"朝",read:"ちょう/あさ",meaning:"Pagi / Istana kekaisaran",
    example:"朝食を食べる。",exampleId:"Makan sarapan.",
    mnemonic:"十(sepuluh)+日(matahari)+月(bulan) → matahari dan bulan di pagi hari = pagi",
    wrongOpts:["朝","昼","晩"],stage:1,category:"waktu" },

  { jp:"幕",read:"まく/ばく",meaning:"Tirai / Babak / Keshogunan",
    example:"幕が上がる。",exampleId:"Tirai naik.",
    mnemonic:"艹(tanaman)+日(hari)+巾(kain) → kain yang menutupi hari = tirai",
    wrongOpts:["幕","帰","旗"],stage:4,category:"institusi" },

  { jp:"藩",read:"はん",meaning:"Domain feodal / Han",
    example:"江戸時代の藩の制度。",exampleId:"Sistem domain feodal era Edo.",
    mnemonic:"艹(tanaman)+潘(air tenang) → wilayah yang tenang = domain",
    wrongOpts:["藩","県","州"],stage:6,category:"institusi" },

  { jp:"将",read:"しょう/まさ",meaning:"Jenderal / Akan / Rencana",
    example:"将来の夢を語る。",exampleId:"Menceritakan impian masa depan.",
    mnemonic:"爿(papan)+肉(daging)+寸(sedikit) → rencana yang disiapkan = akan/jenderal",
    wrongOpts:["帥","司","将"],stage:4,category:"institusi" },

  { jp:"臣",read:"しん/じん",meaning:"Menteri / Hamba",
    example:"大臣が発表した。",exampleId:"Menteri mengumumkan.",
    mnemonic:"Gambar mata yang tunduk ke bawah = hamba/menteri",
    wrongOpts:["王","君","主"],stage:4,category:"institusi" },

  // ── ALAM & MATERI ──
  { jp:"鉄",read:"てつ",meaning:"Besi / Metal",
    example:"鉄でできた橋だ。",exampleId:"Jembatan yang terbuat dari besi.",
    mnemonic:"金(logam)+矢(panah)+人 → logam yang tajam seperti panah = besi",
    wrongOpts:["鋼","銅","金"],stage:2,category:"materi" },

  { jp:"鋼",read:"こう/はがね",meaning:"Baja",
    example:"鋼鉄の扉だ。",exampleId:"Pintu baja.",
    mnemonic:"金(logam)+岡(bukit) → logam sekuat bukit = baja",
    wrongOpts:["鉄","銅","金"],stage:3,category:"materi" },

  { jp:"銅",read:"どう",meaning:"Tembaga",
    example:"銅メダルを獲得した。",exampleId:"Mendapatkan medali perunggu.",
    mnemonic:"金(logam)+同(sama) → logam yang sama warnya = tembaga",
    wrongOpts:["鉄","鋼","金"],stage:3,category:"materi" },

  { jp:"炭",read:"たん/すみ",meaning:"Arang / Karbon",
    example:"炭火で焼く。",exampleId:"Dipanggang dengan bara arang.",
    mnemonic:"山(gunung)+炭(api bawah) → api di bawah gunung = arang",
    wrongOpts:["炎","煤","煙"],stage:3,category:"materi" },

  { jp:"灰",read:"はい",meaning:"Abu",
    example:"たばこの灰を落とした。",exampleId:"Menjatuhkan abu rokok.",
    mnemonic:"厂(atap)+火(api) → sisa api di bawah atap = abu",
    wrongOpts:["炭","煙","塵"],stage:3,category:"materi" },

  { jp:"煙",read:"えん/けむ",meaning:"Asap",
    example:"煙が目にしみた。",exampleId:"Asap menyengat mata.",
    mnemonic:"火(api)+垔(tertutup) → api yang tertutup mengeluarkan asap = asap",
    wrongOpts:["灰","炭","霧"],stage:3,category:"materi" },

  { jp:"塵",read:"じん/ちり",meaning:"Debu / Kotoran kecil",
    example:"塵も積もれば山となる。",exampleId:"Debu yang menumpuk pun menjadi gunung.",
    mnemonic:"土(tanah)+亠+罒+土 → tanah yang sangat kecil = debu",
    wrongOpts:["埃","灰","砂"],stage:4,category:"materi" },

  { jp:"埃",read:"ほこり",meaning:"Debu (di permukaan)",
    example:"棚の埃を拭く。",exampleId:"Mengelap debu di rak.",
    mnemonic:"土(tanah)+矣(kata seru) → tanah yang melayang = debu",
    wrongOpts:["塵","灰","砂"],stage:4,category:"materi" },

  { jp:"錆",read:"さび",meaning:"Karat",
    example:"鉄が錆びた。",exampleId:"Besi sudah berkarat.",
    mnemonic:"金(logam)+青(biru) → logam yang berubah biru = karat",
    wrongOpts:["腐","汚","傷"],stage:3,category:"materi" },

  // ── UMUM & SERING MUNCUL JLPT N3 ──
  { jp:"互",read:"ご/たが",meaning:"Saling / Timbal balik",
    example:"互いに助け合う。",exampleId:"Saling membantu satu sama lain.",
    mnemonic:"Dua tangan yang saling berjabat = saling/timbal balik",
    wrongOpts:["共","相","両"],stage:3,category:"hubungan" },

  { jp:"貿",read:"ぼう",meaning:"Perdagangan / Barter",
    example:"貿易で利益を得た。",exampleId:"Mendapat keuntungan dari perdagangan.",
    mnemonic:"卯(kelinci)+貝(uang) → uang yang berlari = perdagangan",
    wrongOpts:["商","売","買"],stage:3,category:"ekonomi" },

  { jp:"訓",read:"くん/おし",meaning:"Instruksi / Ajaran / Bacaan kun",
    example:"訓練を積む。",exampleId:"Menumpuk latihan.",
    mnemonic:"言(kata)+川(sungai) → kata-kata yang mengalir = instruksi",
    wrongOpts:["教","示","令"],stage:3,category:"pendidikan" },

  { jp:"駐",read:"ちゅう",meaning:"Parkir / Ditempatkan",
    example:"駐車場に停める。",exampleId:"Memarkir di tempat parkir.",
    mnemonic:"馬(kuda)+主(tuan) → kuda tuan yang diam di tempat = parkir",
    wrongOpts:["停","泊","置"],stage:3,category:"transport" },

  { jp:"諦",read:"てい/あきら",meaning:"Menyerah / Menerima",
    example:"諦めずに頑張る。",exampleId:"Berjuang tanpa menyerah.",
    mnemonic:"言(kata)+帝(kaisar) → kata-kata kaisar yang memutuskan = pasrah/menyerah",
    wrongOpts:["断","放","捨"],stage:3,category:"emosi" },

  { jp:"賦",read:"ふ",meaning:"Membayar cicilan / Puisi",
    example:"月賦で買う。",exampleId:"Membeli dengan cicilan bulanan.",
    mnemonic:"武(bela diri)+貝(uang) → uang yang dibayar dengan semangat = cicilan",
    wrongOpts:["賃","税","料"],stage:5,category:"ekonomi" },

  { jp:"錦",read:"にしき",meaning:"Brokat / Kain mewah",
    example:"錦の着物を着る。",exampleId:"Memakai kimono brokat.",
    mnemonic:"金(logam)+帛(kain putih) → kain seindah logam = brokat",
    wrongOpts:["絹","綿","布"],stage:5,category:"budaya" },

]);
console.log("✅ kanji-batch8-final.js — 57 kanji | TARGET 650 TERCAPAI! 🎉");
