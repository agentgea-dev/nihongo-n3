// ═══════════════════════════════════════════════════════════════
//  JLPT N3 KANJI DATABASE — 150 Kanji
//  Format: { jp, read, meaning, example, exampleId, mnemonic,
//            wrongOpts[3], stage, category }
//  stage: 1=Pemula, 2=Dasar (kanji lanjutan)
//  category: tema pengelompokan
// ═══════════════════════════════════════════════════════════════

const KANJI_DB = [

  // ══════════════════════════════════════
  //  STAGE 1 — KANJI DASAR (50 kanji)
  // ══════════════════════════════════════

  // ── Pekerjaan & Kemampuan ──
  { jp:"改善", read:"かいぜん", meaning:"Perbaikan / Kaizen",
    example:"業務を改善しましょう。", exampleId:"Mari perbaiki operasional kerja.",
    mnemonic:"改=perbaiki + 善=baik → terkenal sebagai 'kaizen' di dunia!",
    wrongOpts:["回線","解説","会見"], stage:1, category:"pekerjaan" },

  { jp:"判断", read:"はんだん", meaning:"Penilaian / Keputusan",
    example:"冷静に判断してください。", exampleId:"Tolong nilai dengan tenang.",
    mnemonic:"判=stempel keputusan + 断=memotong → memutuskan dengan tegas",
    wrongOpts:["反断","半段","版断"], stage:1, category:"pekerjaan" },

  { jp:"能力", read:"のうりょく", meaning:"Kemampuan",
    example:"語学能力を伸ばしたい。", exampleId:"Ingin meningkatkan kemampuan bahasa.",
    mnemonic:"能=mampu + 力=kekuatan → kekuatan untuk mampu",
    wrongOpts:["農力","脳力","動力"], stage:1, category:"pekerjaan" },

  { jp:"責任", read:"せきにん", meaning:"Tanggung jawab",
    example:"責任を果たすことが大切だ。", exampleId:"Penting untuk memenuhi tanggung jawab.",
    mnemonic:"責=tuntut + 任=tugas → tugas yang harus dipertanggungjawabkan",
    wrongOpts:["席任","石任","赤任"], stage:1, category:"pekerjaan" },

  { jp:"努力", read:"どりょく", meaning:"Usaha keras / Kerja keras",
    example:"成功するために努力する。", exampleId:"Bekerja keras demi kesuksesan.",
    mnemonic:"努=rajin + 力=kekuatan → kekuatan dari kerajinan",
    wrongOpts:["怒力","土力","度力"], stage:1, category:"pekerjaan" },

  { jp:"技術", read:"ぎじゅつ", meaning:"Teknologi / Keahlian teknis",
    example:"最新の技術を学ぶ。", exampleId:"Mempelajari teknologi terbaru.",
    mnemonic:"技=teknik + 術=seni/cara → teknik dan cara melakukan sesuatu",
    wrongOpts:["技出","議術","機術"], stage:1, category:"pekerjaan" },

  { jp:"経験", read:"けいけん", meaning:"Pengalaman",
    example:"海外での経験が役に立った。", exampleId:"Pengalaman di luar negeri berguna.",
    mnemonic:"経=melewati + 験=ujian → ujian yang sudah dilewati = pengalaman",
    wrongOpts:["軽験","経権","径験"], stage:1, category:"pekerjaan" },

  { jp:"成功", read:"せいこう", meaning:"Kesuksesan / Keberhasilan",
    example:"プロジェクトが無事に成功した。", exampleId:"Proyek berhasil dengan selamat.",
    mnemonic:"成=menjadi + 功=hasil kerja → hasil kerja yang menjadi nyata",
    wrongOpts:["成行","生功","正功"], stage:1, category:"pekerjaan" },

  { jp:"失敗", read:"しっぱい", meaning:"Kegagalan",
    example:"失敗から学ぶことが大切だ。", exampleId:"Belajar dari kegagalan itu penting.",
    mnemonic:"失=kehilangan + 敗=kalah → kehilangan karena kalah",
    wrongOpts:["失配","失排","実敗"], stage:1, category:"pekerjaan" },

  { jp:"計画", read:"けいかく", meaning:"Rencana / Perencanaan",
    example:"旅行の計画を立てた。", exampleId:"Membuat rencana perjalanan.",
    mnemonic:"計=menghitung + 画=menggambar → menggambar dengan perhitungan",
    wrongOpts:["計格","系画","形画"], stage:1, category:"pekerjaan" },

  // ── Informasi & Komunikasi ──
  { jp:"情報", read:"じょうほう", meaning:"Informasi / Data",
    example:"正確な情報を集める。", exampleId:"Mengumpulkan informasi yang akurat.",
    mnemonic:"情=kondisi + 報=laporan → laporan kondisi = informasi",
    wrongOpts:["状報","情包","城報"], stage:1, category:"komunikasi" },

  { jp:"連絡", read:"れんらく", meaning:"Kontak / Kabar",
    example:"後で連絡します。", exampleId:"Nanti akan menghubungi.",
    mnemonic:"連=sambung + 絡=jalin → menyambung dan menjalin komunikasi",
    wrongOpts:["連落","恋絡","連格"], stage:1, category:"komunikasi" },

  { jp:"説明", read:"せつめい", meaning:"Penjelasan",
    example:"詳しく説明してください。", exampleId:"Tolong jelaskan secara rinci.",
    mnemonic:"説=cerita/jelaskan + 明=terang/jelas → menerangkan dengan jelas",
    wrongOpts:["設明","節明","絶明"], stage:1, category:"komunikasi" },

  { jp:"報告", read:"ほうこく", meaning:"Laporan",
    example:"結果を報告してください。", exampleId:"Tolong laporkan hasilnya.",
    mnemonic:"報=laporan + 告=beritahu → memberitahu lewat laporan",
    wrongOpts:["方告","放告","法告"], stage:1, category:"komunikasi" },

  { jp:"質問", read:"しつもん", meaning:"Pertanyaan",
    example:"遠慮なく質問してください。", exampleId:"Silakan bertanya tanpa ragu.",
    mnemonic:"質=substansi + 問=tanya → menanyakan substansinya",
    wrongOpts:["失問","実問","室問"], stage:1, category:"komunikasi" },

  { jp:"発表", read:"はっぴょう", meaning:"Presentasi / Pengumuman",
    example:"研究結果を発表した。", exampleId:"Mempresentasikan hasil penelitian.",
    mnemonic:"発=berkembang/keluar + 表=permukaan → mengeluarkan ke permukaan",
    wrongOpts:["発票","発標","発評"], stage:1, category:"komunikasi" },

  { jp:"相談", read:"そうだん", meaning:"Konsultasi / Diskusi",
    example:"困ったら相談してください。", exampleId:"Kalau kesulitan, silakan konsultasi.",
    mnemonic:"相=saling + 談=bicara → saling bicara = konsultasi",
    wrongOpts:["想談","創談","総談"], stage:1, category:"komunikasi" },

  { jp:"記録", read:"きろく", meaning:"Catatan / Rekaman",
    example:"大切なことは記録しておく。", exampleId:"Catat hal-hal penting.",
    mnemonic:"記=catat + 録=rekam → mencatat dan merekam",
    wrongOpts:["記力","記路","規録"], stage:1, category:"komunikasi" },

  // ── Pikiran & Perasaan ──
  { jp:"記憶", read:"きおく", meaning:"Ingatan / Memori",
    example:"あの日の記憶が今でも残っている。", exampleId:"Kenangan hari itu masih tersisa hingga kini.",
    mnemonic:"記=tulis + 憶=ingat → ingatan yang tercatat dalam pikiran",
    wrongOpts:["記録","記事","記号"], stage:1, category:"pikiran" },

  { jp:"感動", read:"かんどう", meaning:"Terharu / Terkesan mendalam",
    example:"その映画に感動した。", exampleId:"Terharu dengan film itu.",
    mnemonic:"感=merasakan + 動=bergerak → hati yang bergerak karena perasaan",
    wrongOpts:["感道","勘動","漢動"], stage:1, category:"pikiran" },

  { jp:"感謝", read:"かんしゃ", meaning:"Rasa syukur / Terima kasih",
    example:"助けてくれてとても感謝しています。", exampleId:"Sangat berterima kasih sudah membantu.",
    mnemonic:"感=merasakan + 謝=berterima kasih → merasakan dan mengucapkan terima kasih",
    wrongOpts:["感者","感査","感差"], stage:1, category:"pikiran" },

  { jp:"希望", read:"きぼう", meaning:"Harapan / Keinginan",
    example:"将来への希望を持って生きる。", exampleId:"Hidup dengan harapan untuk masa depan.",
    mnemonic:"希=langka/berharap + 望=melihat jauh → melihat jauh ke depan dengan harapan",
    wrongOpts:["期望","気望","起望"], stage:1, category:"pikiran" },

  { jp:"心配", read:"しんぱい", meaning:"Kekhawatiran / Cemas",
    example:"彼の健康が心配だ。", exampleId:"Khawatir dengan kesehatannya.",
    mnemonic:"心=hati + 配=berbagi/menyebar → hati yang menyebar ke mana-mana = cemas",
    wrongOpts:["新配","親配","信配"], stage:1, category:"pikiran" },

  { jp:"自信", read:"じしん", meaning:"Kepercayaan diri",
    example:"自信を持って挑戦しよう。", exampleId:"Mari mencoba dengan percaya diri.",
    mnemonic:"自=diri + 信=percaya → percaya pada diri sendiri",
    wrongOpts:["自身","自然","事情"], stage:1, category:"pikiran" },

  { jp:"満足", read:"まんぞく", meaning:"Kepuasan / Puas",
    example:"結果に満足している。", exampleId:"Puas dengan hasilnya.",
    mnemonic:"満=penuh + 足=cukup/kaki → penuh dan cukup = puas",
    wrongOpts:["万族","満続","幕足"], stage:1, category:"pikiran" },

  // ── Alam & Lingkungan ──
  { jp:"環境", read:"かんきょう", meaning:"Lingkungan",
    example:"地球の環境を守ろう。", exampleId:"Mari jaga lingkungan bumi.",
    mnemonic:"環=cincin/siklus + 境=batas → batas siklus alam = lingkungan",
    wrongOpts:["感情","観光","完成"], stage:1, category:"alam" },

  { jp:"天気", read:"てんき", meaning:"Cuaca",
    example:"明日の天気はどうですか。", exampleId:"Bagaimana cuaca besok?",
    mnemonic:"天=langit + 気=udara/semangat → udara di langit = cuaca",
    wrongOpts:["天機","転気","典気"], stage:1, category:"alam" },

  { jp:"季節", read:"きせつ", meaning:"Musim",
    example:"日本には四つの季節がある。", exampleId:"Jepang memiliki empat musim.",
    mnemonic:"季=musim + 節=simpul/siklus → siklus musim sepanjang tahun",
    wrongOpts:["気節","季絶","記節"], stage:1, category:"alam" },

  { jp:"自然", read:"しぜん", meaning:"Alam / Natural / Alami",
    example:"自然の中でのんびりしたい。", exampleId:"Ingin bersantai di alam.",
    mnemonic:"自=sendiri + 然=begitu → yang terjadi dengan sendirinya = alam",
    wrongOpts:["自善","事然","寺然"], stage:1, category:"alam" },

  { jp:"地域", read:"ちいき", meaning:"Daerah / Wilayah / Kawasan",
    example:"この地域は自然が豊かだ。", exampleId:"Daerah ini kaya akan alam.",
    mnemonic:"地=tanah/bumi + 域=wilayah → wilayah di atas tanah",
    wrongOpts:["地意気","知域","地異気"], stage:1, category:"alam" },

  // ── Kehidupan Sehari-hari ──
  { jp:"生活", read:"せいかつ", meaning:"Kehidupan / Cara hidup",
    example:"健康的な生活を送りたい。", exampleId:"Ingin menjalani hidup yang sehat.",
    mnemonic:"生=hidup + 活=aktif → hidup yang aktif = kehidupan",
    wrongOpts:["性活","星活","整活"], stage:1, category:"kehidupan" },

  { jp:"習慣", read:"しゅうかん", meaning:"Kebiasaan",
    example:"早起きの習慣をつけた。", exampleId:"Membiasakan diri bangun pagi.",
    mnemonic:"習=berlatih/belajar + 慣=terbiasa → terbiasa karena sering berlatih",
    wrongOpts:["集慣","周慣","宗慣"], stage:1, category:"kehidupan" },

  { jp:"健康", read:"けんこう", meaning:"Kesehatan / Sehat",
    example:"健康のために毎日運動する。", exampleId:"Olahraga setiap hari demi kesehatan.",
    mnemonic:"健=sehat/kuat + 康=tenteram → kuat dan tenteram = sehat",
    wrongOpts:["健全","健在","強健"], stage:1, category:"kehidupan" },

  { jp:"食事", read:"しょくじ", meaning:"Makan / Makanan",
    example:"バランスのいい食事が大切だ。", exampleId:"Makan yang seimbang itu penting.",
    mnemonic:"食=makan + 事=hal/urusan → urusan makan",
    wrongOpts:["植事","殖事","触事"], stage:1, category:"kehidupan" },

  { jp:"運動", read:"うんどう", meaning:"Olahraga / Gerak",
    example:"毎朝30分運動している。", exampleId:"Olahraga 30 menit setiap pagi.",
    mnemonic:"運=membawa/bergerak + 動=bergerak → bergerak aktif",
    wrongOpts:["運道","温動","雲動"], stage:1, category:"kehidupan" },

  { jp:"旅行", read:"りょこう", meaning:"Perjalanan / Wisata",
    example:"来月、京都へ旅行する。", exampleId:"Bulan depan berwisata ke Kyoto.",
    mnemonic:"旅=perjalanan + 行=pergi → pergi dalam perjalanan",
    wrongOpts:["旅光","旅校","旅港"], stage:1, category:"kehidupan" },

  { jp:"買い物", read:"かいもの", meaning:"Belanja",
    example:"週末に買い物に行く。", exampleId:"Pergi belanja di akhir pekan.",
    mnemonic:"買=beli + 物=barang → membeli barang = belanja",
    wrongOpts:["飼い物","貝物","買い者"], stage:1, category:"kehidupan" },

  // ── Sosial & Hubungan ──
  { jp:"社会", read:"しゃかい", meaning:"Masyarakat",
    example:"社会に貢献したい。", exampleId:"Ingin berkontribusi pada masyarakat.",
    mnemonic:"社=perkumpulan/perusahaan + 会=pertemuan → pertemuan banyak orang = masyarakat",
    wrongOpts:["社界","者会","斜会"], stage:1, category:"sosial" },

  { jp:"関係", read:"かんけい", meaning:"Hubungan / Relasi",
    example:"良い人間関係を築きたい。", exampleId:"Ingin membangun hubungan manusia yang baik.",
    mnemonic:"関=terkait + 係=menghubungkan → yang terkait dan terhubung",
    wrongOpts:["関計","完係","感係"], stage:1, category:"sosial" },

  { jp:"協力", read:"きょうりょく", meaning:"Kerjasama",
    example:"みんなで協力して取り組もう。", exampleId:"Mari bekerja sama bersama-sama.",
    mnemonic:"協=bersama/koordinasi + 力=kekuatan → kekuatan bersama",
    wrongOpts:["共力","強力","供力"], stage:1, category:"sosial" },

  { jp:"参加", read:"さんか", meaning:"Partisipasi / Ikut serta",
    example:"ボランティア活動に参加した。", exampleId:"Ikut serta dalam kegiatan sukarela.",
    mnemonic:"参=menghadiri + 加=menambah → menambah kehadiran",
    wrongOpts:["参家","参価","賛加"], stage:1, category:"sosial" },

  { jp:"文化", read:"ぶんか", meaning:"Budaya",
    example:"日本の文化に興味がある。", exampleId:"Tertarik pada budaya Jepang.",
    mnemonic:"文=tulisan/budaya + 化=berubah/menjadi → menjadi berbudaya",
    wrongOpts:["文科","分化","聞化"], stage:1, category:"sosial" },

  { jp:"伝統", read:"でんとう", meaning:"Tradisi",
    example:"日本の伝統を守りたい。", exampleId:"Ingin menjaga tradisi Jepang.",
    mnemonic:"伝=meneruskan + 統=menguasai/mewarisi → mewarisi yang diteruskan",
    wrongOpts:["伝道","電統","展統"], stage:1, category:"sosial" },

  // ── Pendidikan ──
  { jp:"勉強", read:"べんきょう", meaning:"Belajar",
    example:"毎日日本語の勉強をする。", exampleId:"Belajar bahasa Jepang setiap hari.",
    mnemonic:"勉=bersungguh-sungguh + 強=kuat → belajar dengan kuat dan sungguh-sungguh",
    wrongOpts:["文強","便強","勉競"], stage:1, category:"pendidikan" },

  { jp:"試験", read:"しけん", meaning:"Ujian / Tes",
    example:"来週、日本語の試験がある。", exampleId:"Minggu depan ada ujian bahasa Jepang.",
    mnemonic:"試=mencoba + 験=menguji → mencoba untuk diuji",
    wrongOpts:["視験","示験","紙験"], stage:1, category:"pendidikan" },

  { jp:"合格", read:"ごうかく", meaning:"Lulus / Lolos",
    example:"JLPT N3に合格した。", exampleId:"Lulus JLPT N3.",
    mnemonic:"合=cocok/sesuai + 格=standar → sesuai dengan standar = lulus",
    wrongOpts:["合角","号格","合覚"], stage:1, category:"pendidikan" },

  { jp:"卒業", read:"そつぎょう", meaning:"Kelulusan / Wisuda",
    example:"来年、大学を卒業する予定だ。", exampleId:"Berencana lulus universitas tahun depan.",
    mnemonic:"卒=selesai/tentara + 業=pekerjaan/studi → menyelesaikan studi",
    wrongOpts:["率業","卒議","率宜"], stage:1, category:"pendidikan" },

  { jp:"研究", read:"けんきゅう", meaning:"Penelitian / Riset",
    example:"環境問題について研究している。", exampleId:"Meneliti tentang masalah lingkungan.",
    mnemonic:"研=menggosok/meneliti + 究=menyelidiki → menyelidiki secara mendalam",
    wrongOpts:["研求","研球","研急"], stage:1, category:"pendidikan" },

  // ── Kesehatan ──
  { jp:"病院", read:"びょういん", meaning:"Rumah sakit",
    example:"熱があるので病院に行った。", exampleId:"Karena demam, pergi ke rumah sakit.",
    mnemonic:"病=sakit + 院=institusi/gedung → gedung untuk orang sakit",
    wrongOpts:["病員","美容院","苗院"], stage:1, category:"kesehatan" },

  { jp:"治療", read:"ちりょう", meaning:"Pengobatan / Terapi",
    example:"病気の治療を続けている。", exampleId:"Melanjutkan pengobatan penyakit.",
    mnemonic:"治=menyembuhkan + 療=mengobati → menyembuhkan dengan mengobati",
    wrongOpts:["地療","治量","値療"], stage:1, category:"kesehatan" },

  { jp:"回復", read:"かいふく", meaning:"Pemulihan / Kesembuhan",
    example:"手術後、順調に回復している。", exampleId:"Pemulihan berjalan lancar setelah operasi.",
    mnemonic:"回=kembali + 復=pulih → kembali pulih seperti semula",
    wrongOpts:["快復","開復","解復"], stage:1, category:"kesehatan" },

  // ══════════════════════════════════════
  //  STAGE 2 — KANJI LANJUTAN (50 kanji)
  // ══════════════════════════════════════

  // ── Ekonomi & Bisnis ──
  { jp:"経済", read:"けいざい", meaning:"Ekonomi",
    example:"世界経済の動向を調べる。", exampleId:"Meneliti tren ekonomi dunia.",
    mnemonic:"経=melewati/mengelola + 済=menyelesaikan → mengelola hingga selesai",
    wrongOpts:["計済","係済","形済"], stage:2, category:"ekonomi" },

  { jp:"貿易", read:"ぼうえき", meaning:"Perdagangan internasional",
    example:"日本は多くの国と貿易している。", exampleId:"Jepang berdagang dengan banyak negara.",
    mnemonic:"貿=menukar barang + 易=mudah/pertukaran → pertukaran barang antar negara",
    wrongOpts:["貿域","坊易","防易"], stage:2, category:"ekonomi" },

  { jp:"産業", read:"さんぎょう", meaning:"Industri",
    example:"自動車産業は日本の主力だ。", exampleId:"Industri otomotif adalah tulang punggung Jepang.",
    mnemonic:"産=menghasilkan + 業=pekerjaan/usaha → usaha yang menghasilkan",
    wrongOpts:["産行","賛業","算業"], stage:2, category:"ekonomi" },

  { jp:"商品", read:"しょうひん", meaning:"Produk / Barang dagangan",
    example:"新しい商品を開発した。", exampleId:"Mengembangkan produk baru.",
    mnemonic:"商=berdagang + 品=barang → barang yang diperdagangkan",
    wrongOpts:["将品","省品","小品"], stage:2, category:"ekonomi" },

  { jp:"価格", read:"かかく", meaning:"Harga",
    example:"商品の価格が上がった。", exampleId:"Harga produk naik.",
    mnemonic:"価=nilai + 格=standar/level → standar nilai = harga",
    wrongOpts:["花格","科格","過格"], stage:2, category:"ekonomi" },

  { jp:"利益", read:"りえき", meaning:"Keuntungan / Manfaat",
    example:"会社の利益が増加した。", exampleId:"Keuntungan perusahaan meningkat.",
    mnemonic:"利=keuntungan + 益=manfaat → manfaat yang menguntungkan",
    wrongOpts:["利役","離益","理益"], stage:2, category:"ekonomi" },

  { jp:"投資", read:"とうし", meaning:"Investasi",
    example:"株式に投資している。", exampleId:"Berinvestasi di saham.",
    mnemonic:"投=melempar/menaruh + 資=modal/dana → menaruh modal",
    wrongOpts:["当資","登資","答資"], stage:2, category:"ekonomi" },

  { jp:"消費", read:"しょうひ", meaning:"Konsumsi / Pemakaian",
    example:"エネルギーの消費を抑える。", exampleId:"Mengurangi konsumsi energi.",
    mnemonic:"消=menghilang + 費=pengeluaran → pengeluaran yang menghilang (habis)",
    wrongOpts:["小費","招費","焼費"], stage:2, category:"ekonomi" },

  { jp:"節約", read:"せつやく", meaning:"Penghematan",
    example:"電気代を節約するよう心がける。", exampleId:"Berusaha menghemat biaya listrik.",
    mnemonic:"節=hemat/membatasi + 約=mengurangi → mengurangi dengan pembatasan",
    wrongOpts:["設約","切約","折約"], stage:2, category:"ekonomi" },

  // ── Politik & Hukum ──
  { jp:"政治", read:"せいじ", meaning:"Politik",
    example:"政治に関心を持つことが大切だ。", exampleId:"Penting untuk menaruh perhatian pada politik.",
    mnemonic:"政=pemerintahan + 治=mengelola/memerintah → memerintah negara",
    wrongOpts:["整治","制治","成治"], stage:2, category:"politik" },

  { jp:"法律", read:"ほうりつ", meaning:"Hukum / Undang-undang",
    example:"法律を守ることは市民の義務だ。", exampleId:"Mematuhi hukum adalah kewajiban warga.",
    mnemonic:"法=hukum + 律=aturan/ritme → aturan hukum yang teratur",
    wrongOpts:["放律","方律","宝律"], stage:2, category:"politik" },

  { jp:"権利", read:"けんり", meaning:"Hak",
    example:"すべての人に教育を受ける権利がある。", exampleId:"Semua orang berhak mendapat pendidikan.",
    mnemonic:"権=hak/kekuasaan + 利=keuntungan/manfaat → kekuasaan yang menguntungkan",
    wrongOpts:["健利","件利","圏利"], stage:2, category:"politik" },

  { jp:"義務", read:"ぎむ", meaning:"Kewajiban",
    example:"税金を払うのは国民の義務だ。", exampleId:"Membayar pajak adalah kewajiban warga negara.",
    mnemonic:"義=kebenaran/keadilan + 務=tugas → tugas yang harus dilakukan demi keadilan",
    wrongOpts:["議務","技務","気務"], stage:2, category:"politik" },

  { jp:"選挙", read:"せんきょ", meaning:"Pemilihan / Pemilu",
    example:"来月、市長の選挙がある。", exampleId:"Bulan depan ada pemilihan walikota.",
    mnemonic:"選=memilih + 挙=mengangkat → mengangkat dengan memilih",
    wrongOpts:["専居","選去","撰居"], stage:2, category:"politik" },

  { jp:"平和", read:"へいわ", meaning:"Perdamaian",
    example:"世界平和のために努力する。", exampleId:"Berusaha demi perdamaian dunia.",
    mnemonic:"平=datar/damai + 和=harmonis → damai dan harmonis",
    wrongOpts:["平話","並和","平輪"], stage:2, category:"politik" },

  // ── Ilmu & Teknologi ──
  { jp:"科学", read:"かがく", meaning:"Ilmu pengetahuan / Sains",
    example:"科学の進歩は著しい。", exampleId:"Kemajuan sains sangat pesat.",
    mnemonic:"科=cabang ilmu + 学=belajar → mempelajari berbagai cabang ilmu",
    wrongOpts:["花学","化学","歌学"], stage:2, category:"ilmu" },

  { jp:"発展", read:"はってん", meaning:"Perkembangan / Kemajuan",
    example:"技術の発展が著しい。", exampleId:"Perkembangan teknologi sangat pesat.",
    mnemonic:"発=berkembang/keluar + 展=membentang → membentang dan berkembang",
    wrongOpts:["発見","発表","発生"], stage:2, category:"ilmu" },

  { jp:"研究", read:"けんきゅう", meaning:"Penelitian",
    example:"医学研究に取り組む。", exampleId:"Mengerjakan penelitian kedokteran.",
    mnemonic:"研=menggosok halus + 究=menyelidiki dalam → menyelidiki secara mendalam",
    wrongOpts:["研求","研球","研級"], stage:2, category:"ilmu" },

  { jp:"実験", read:"じっけん", meaning:"Eksperimen",
    example:"化学の実験を行った。", exampleId:"Melakukan eksperimen kimia.",
    mnemonic:"実=nyata/sesungguhnya + 験=menguji → menguji secara nyata",
    wrongOpts:["実現","実験","実権"], stage:2, category:"ilmu" },

  { jp:"発明", read:"はつめい", meaning:"Penemuan / Invensi",
    example:"エジソンは電球を発明した。", exampleId:"Edison menemukan bola lampu.",
    mnemonic:"発=menghasilkan + 明=terang → menghasilkan sesuatu yang menerangi",
    wrongOpts:["発名","発命","発鳴"], stage:2, category:"ilmu" },

  { jp:"開発", read:"かいはつ", meaning:"Pengembangan",
    example:"新製品の開発を進める。", exampleId:"Melanjutkan pengembangan produk baru.",
    mnemonic:"開=membuka + 発=berkembang → membuka lalu berkembang",
    wrongOpts:["解発","快発","会発"], stage:2, category:"ilmu" },

  // ── Psikologi & Karakter ──
  { jp:"性格", read:"せいかく", meaning:"Kepribadian / Sifat",
    example:"彼は明るい性格の持ち主だ。", exampleId:"Dia memiliki kepribadian yang ceria.",
    mnemonic:"性=sifat bawaan + 格=standar/pola → pola sifat bawaan = kepribadian",
    wrongOpts:["正格","声格","星格"], stage:2, category:"karakter" },

  { jp:"態度", read:"たいど", meaning:"Sikap / Perilaku",
    example:"礼儀正しい態度で話す。", exampleId:"Berbicara dengan sikap yang sopan.",
    mnemonic:"態=cara/postur + 度=derajat/ukuran → ukuran cara bertindak = sikap",
    wrongOpts:["対度","台度","体度"], stage:2, category:"karakter" },

  { jp:"意志", read:"いし", meaning:"Tekad / Kemauan",
    example:"強い意志を持って目標に向かう。", exampleId:"Menuju tujuan dengan tekad yang kuat.",
    mnemonic:"意=pikiran/niat + 志=tekad/aspirasi → tekad yang ada dalam pikiran",
    wrongOpts:["意思","医師","意死"], stage:2, category:"karakter" },

  { jp:"勇気", read:"ゆうき", meaning:"Keberanian",
    example:"勇気を出して発言した。", exampleId:"Mengeluarkan keberanian untuk berbicara.",
    mnemonic:"勇=berani + 気=semangat/energi → energi keberanian",
    wrongOpts:["有気","融気","遊気"], stage:2, category:"karakter" },

  { jp:"忍耐", read:"にんたい", meaning:"Kesabaran / Ketahanan",
    example:"忍耐力を持って取り組む。", exampleId:"Mengerjakan dengan daya tahan.",
    mnemonic:"忍=menahan + 耐=tahan → menahan dan bertahan",
    wrongOpts:["人体","認体","忍体"], stage:2, category:"karakter" },

  { jp:"礼儀", read:"れいぎ", meaning:"Sopan santun / Tata krama",
    example:"礼儀正しい人は好かれる。", exampleId:"Orang yang sopan disukai.",
    mnemonic:"礼=penghormatan + 儀=tata cara → tata cara menghormati",
    wrongOpts:["冷気","例義","令技"], stage:2, category:"karakter" },

  // ── Kondisi & Situasi ──
  { jp:"状況", read:"じょうきょう", meaning:"Situasi / Kondisi",
    example:"現在の状況を正確に把握する。", exampleId:"Memahami situasi saat ini dengan tepat.",
    mnemonic:"状=kondisi + 況=keadaan → kondisi dan keadaan saat ini",
    wrongOpts:["状態","情況","形況"], stage:2, category:"kondisi" },

  { jp:"原因", read:"げんいん", meaning:"Penyebab / Akar masalah",
    example:"事故の原因を調べる。", exampleId:"Menyelidiki penyebab kecelakaan.",
    mnemonic:"原=asal/akar + 因=sebab → sebab yang berasal dari akar",
    wrongOpts:["原員","元因","現因"], stage:2, category:"kondisi" },

  { jp:"結果", read:"けっか", meaning:"Hasil / Akibat",
    example:"試験の結果が出た。", exampleId:"Hasil ujian sudah keluar.",
    mnemonic:"結=mengikat/menyelesaikan + 果=buah/hasil → buah dari penyelesaian",
    wrongOpts:["結論","結語","決果"], stage:2, category:"kondisi" },

  { jp:"影響", read:"えいきょう", meaning:"Pengaruh / Dampak",
    example:"天気が体調に影響する。", exampleId:"Cuaca mempengaruhi kondisi tubuh.",
    mnemonic:"影=bayangan + 響=bergema → bergema seperti bayangan yang menyebar",
    wrongOpts:["映響","栄響","永響"], stage:2, category:"kondisi" },

  { jp:"問題", read:"もんだい", meaning:"Masalah / Soal",
    example:"環境問題は深刻だ。", exampleId:"Masalah lingkungan sangat serius.",
    mnemonic:"問=menanyakan + 題=topik → topik yang ditanyakan = masalah/soal",
    wrongOpts:["文題","門題","聞題"], stage:2, category:"kondisi" },

  { jp:"解決", read:"かいけつ", meaning:"Penyelesaian / Solusi",
    example:"問題を早急に解決する。", exampleId:"Menyelesaikan masalah dengan segera.",
    mnemonic:"解=membuka/memecah + 決=memutuskan → memutuskan untuk memecah masalah",
    wrongOpts:["解放","解説","解読"], stage:2, category:"kondisi" },

  { jp:"変化", read:"へんか", meaning:"Perubahan",
    example:"気候の変化が著しい。", exampleId:"Perubahan iklim sangat mencolok.",
    mnemonic:"変=berubah + 化=menjadi → menjadi berubah",
    wrongOpts:["変家","辺化","便化"], stage:2, category:"kondisi" },

  { jp:"発生", read:"はっせい", meaning:"Kejadian / Kemunculan",
    example:"地震が発生した。", exampleId:"Gempa bumi terjadi.",
    mnemonic:"発=keluar/terjadi + 生=timbul/hidup → timbul dan terjadi",
    wrongOpts:["発正","発声","発性"], stage:2, category:"kondisi" },

  // ── Waktu & Urutan ──
  { jp:"予定", read:"よてい", meaning:"Jadwal / Rencana",
    example:"来週の予定を確認する。", exampleId:"Mengecek jadwal minggu depan.",
    mnemonic:"予=sebelumnya + 定=menetapkan → menetapkan sebelumnya = jadwal",
    wrongOpts:["余定","与定","用定"], stage:2, category:"waktu" },

  { jp:"期間", read:"きかん", meaning:"Periode / Jangka waktu",
    example:"試験の準備期間は三ヶ月だ。", exampleId:"Periode persiapan ujian adalah tiga bulan.",
    mnemonic:"期=masa/waktu + 間=jarak/antara → jarak antara dua waktu = periode",
    wrongOpts:["機関","器官","気間"], stage:2, category:"waktu" },

  { jp:"未来", read:"みらい", meaning:"Masa depan",
    example:"明るい未来を信じている。", exampleId:"Percaya akan masa depan yang cerah.",
    mnemonic:"未=belum + 来=datang → yang belum datang = masa depan",
    wrongOpts:["見来","未頼","味来"], stage:2, category:"waktu" },

  { jp:"過去", read:"かこ", meaning:"Masa lalu",
    example:"過去の失敗から学ぶ。", exampleId:"Belajar dari kegagalan masa lalu.",
    mnemonic:"過=melewati + 去=pergi → yang sudah pergi dan dilewati = masa lalu",
    wrongOpts:["化去","家古","可古"], stage:2, category:"waktu" },

  { jp:"現在", read:"げんざい", meaning:"Saat ini / Sekarang",
    example:"現在の状況を説明する。", exampleId:"Menjelaskan situasi saat ini.",
    mnemonic:"現=muncul/nyata + 在=ada → yang ada dan nyata sekarang",
    wrongOpts:["言在","源在","限在"], stage:2, category:"waktu" },

  { jp:"順番", read:"じゅんばん", meaning:"Urutan / Giliran",
    example:"順番を守って並んでください。", exampleId:"Tolong antri sesuai urutan.",
    mnemonic:"順=urutan/lancar + 番=nomor/giliran → nomor urutan = giliran",
    wrongOpts:["準番","純番","巡番"], stage:2, category:"waktu" },

  // ── Tempat & Lokasi ──
  { jp:"施設", read:"しせつ", meaning:"Fasilitas",
    example:"スポーツ施設を利用する。", exampleId:"Menggunakan fasilitas olahraga.",
    mnemonic:"施=membangun/melaksanakan + 設=mendirikan → yang dibangun dan didirikan",
    wrongOpts:["市設","始設","指設"], stage:2, category:"tempat" },

  { jp:"地方", read:"ちほう", meaning:"Daerah / Provinsi",
    example:"地方の文化を体験したい。", exampleId:"Ingin merasakan budaya daerah.",
    mnemonic:"地=tanah + 方=arah/wilayah → wilayah di suatu arah = daerah",
    wrongOpts:["知方","値方","地放"], stage:2, category:"tempat" },

  { jp:"都市", read:"とし", meaning:"Kota",
    example:"大都市に住むのは便利だ。", exampleId:"Tinggal di kota besar itu mudah.",
    mnemonic:"都=ibu kota/semua + 市=pasar/kota → kota yang ramai seperti pasar",
    wrongOpts:["土市","図市","途市"], stage:2, category:"tempat" },

  { jp:"国際", read:"こくさい", meaning:"Internasional",
    example:"国際交流を通じて視野を広げる。", exampleId:"Memperluas wawasan melalui pertukaran internasional.",
    mnemonic:"国=negara + 際=antara/batas → antara berbagai negara = internasional",
    wrongOpts:["国祭","穀際","石際"], stage:2, category:"tempat" },

  // ══════════════════════════════════════
  //  STAGE 6 — KANJI LANJUTAN TINGGI (50 kanji)
  // ══════════════════════════════════════

  // ── Abstrak & Konseptual ──
  { jp:"概念", read:"がいねん", meaning:"Konsep / Gagasan abstrak",
    example:"抽象的な概念を理解する。", exampleId:"Memahami konsep abstrak.",
    mnemonic:"概=gambaran umum + 念=pikiran → gambaran pikiran = konsep",
    wrongOpts:["概年","外念","害念"], stage:6, category:"abstrak" },

  { jp:"論理", read:"ろんり", meaning:"Logika / Penalaran",
    example:"論理的に考えることが大切だ。", exampleId:"Penting untuk berpikir secara logis.",
    mnemonic:"論=berdebat/berargumen + 理=prinsip/alasan → prinsip berargumen = logika",
    wrongOpts:["倫理","道理","原理"], stage:6, category:"abstrak" },

  { jp:"根拠", read:"こんきょ", meaning:"Dasar / Landasan / Bukti",
    example:"根拠のない話は信じられない。", exampleId:"Tidak bisa percaya bicara tanpa dasar.",
    mnemonic:"根=akar + 拠=bersandar → bersandar pada akar yang kuat",
    wrongOpts:["根気","原拠","限拠"], stage:6, category:"abstrak" },

  { jp:"矛盾", read:"むじゅん", meaning:"Kontradiksi / Bertentangan",
    example:"その主張には矛盾がある。", exampleId:"Ada kontradiksi dalam argumen itu.",
    mnemonic:"矛=tombak (menyerang) + 盾=perisai (bertahan) → saling bertentangan",
    wrongOpts:["無順","夢順","武順"], stage:6, category:"abstrak" },

  { jp:"価値", read:"かち", meaning:"Nilai / Harga (abstrak)",
    example:"芸術作品の価値は計れない。", exampleId:"Nilai karya seni tidak bisa diukur.",
    mnemonic:"価=nilai/harga + 値=angka/nilai → nilai yang terukur",
    wrongOpts:["花値","下値","科値"], stage:6, category:"abstrak" },

  { jp:"本質", read:"ほんしつ", meaning:"Esensi / Inti / Hakikat",
    example:"問題の本質を見極める。", exampleId:"Memahami esensi masalah.",
    mnemonic:"本=akar/inti + 質=substansi → substansi dari inti = esensi",
    wrongOpts:["本室","本質","凡質"], stage:6, category:"abstrak" },

  // ── Emosi Lanjutan ──
  { jp:"充実", read:"じゅうじつ", meaning:"Memuaskan / Penuh makna",
    example:"充実した人生を送りたい。", exampleId:"Ingin menjalani hidup yang bermakna.",
    mnemonic:"充=penuh + 実=buah/isi → hari yang penuh dan berbuah",
    wrongOpts:["重実","中実","住実"], stage:6, category:"emosi" },

  { jp:"後悔", read:"こうかい", meaning:"Penyesalan",
    example:"あの時の決断を後悔している。", exampleId:"Menyesali keputusan saat itu.",
    mnemonic:"後=setelah/kemudian + 悔=menyesal → menyesal setelah kejadian",
    wrongOpts:["光海","後解","公会"], stage:6, category:"emosi" },

  { jp:"感激", read:"かんげき", meaning:"Sangat terkesan / Terharu sekali",
    example:"素晴らしい演奏に感激した。", exampleId:"Sangat terkesan dengan penampilan yang luar biasa.",
    mnemonic:"感=merasakan + 激=sengit/kuat → merasakan sesuatu yang kuat sekali",
    wrongOpts:["感劇","感撃","観激"], stage:6, category:"emosi" },

  { jp:"嫉妬", read:"しっと", meaning:"Cemburu / Iri hati",
    example:"友達の成功に嫉妬してしまった。", exampleId:"Merasa iri dengan kesuksesan teman.",
    mnemonic:"嫉=iri + 妬=cemburu → iri dan cemburu",
    wrongOpts:["失途","室戸","疾徒"], stage:6, category:"emosi" },

  // ── Sosial Lanjutan ──
  { jp:"貢献", read:"こうけん", meaning:"Kontribusi / Sumbangan",
    example:"社会発展に貢献したい。", exampleId:"Ingin berkontribusi pada pembangunan masyarakat.",
    mnemonic:"貢=persembahan + 献=dedikasi → mendedikasikan diri",
    wrongOpts:["交換","公演","講演"], stage:6, category:"sosial" },

  { jp:"批判", read:"ひはん", meaning:"Kritik",
    example:"建設的な批判を受け入れる。", exampleId:"Menerima kritik yang konstruktif.",
    mnemonic:"批=menilai/memukul + 判=keputusan → keputusan penilaian yang tajam",
    wrongOpts:["被判","比判","悲判"], stage:6, category:"sosial" },

  { jp:"差別", read:"さべつ", meaning:"Diskriminasi",
    example:"差別のない社会を目指す。", exampleId:"Bertujuan menciptakan masyarakat tanpa diskriminasi.",
    mnemonic:"差=perbedaan + 別=memisahkan → memisahkan karena perbedaan",
    wrongOpts:["差列","査別","作別"], stage:6, category:"sosial" },

  { jp:"尊重", read:"そんちょう", meaning:"Penghargaan / Menghormati",
    example:"お互いの意見を尊重する。", exampleId:"Saling menghormati pendapat masing-masing.",
    mnemonic:"尊=hormat/mulia + 重=berat/penting → menganggap penting dan mulia",
    wrongOpts:["存重","村重","損重"], stage:6, category:"sosial" },

  { jp:"妥協", read:"だきょう", meaning:"Kompromi / Toleransi",
    example:"双方が妥協点を見つけた。", exampleId:"Kedua pihak menemukan titik kompromi.",
    mnemonic:"妥=damai/tepat + 協=kerjasama → kerjasama menuju kedamaian",
    wrongOpts:["打協","多協","打興"], stage:6, category:"sosial" },

  // ── Karakteristik Khusus ──
  { jp:"率直", read:"そっちょく", meaning:"Blak-blakan / Terus terang",
    example:"率直に意見を述べた。", exampleId:"Menyatakan pendapat secara blak-blakan.",
    mnemonic:"率=memimpin/langsung + 直=lurus → langsung dan lurus = jujur",
    wrongOpts:["率則","率束","卒直"], stage:6, category:"karakter" },

  { jp:"謙虚", read:"けんきょ", meaning:"Rendah hati",
    example:"成功しても謙虚でいることが大切だ。", exampleId:"Penting untuk tetap rendah hati meski sukses.",
    mnemonic:"謙=rendah hati + 虚=kosong/sederhana → hati yang kosong dari kesombongan",
    wrongOpts:["健居","見居","謙巨"], stage:6, category:"karakter" },

  { jp:"誠実", read:"せいじつ", meaning:"Tulus / Jujur / Setia",
    example:"誠実な態度で接する。", exampleId:"Bersikap dengan tulus.",
    mnemonic:"誠=tulus/sungguh-sungguh + 実=nyata/sesungguhnya → sungguh-sungguh dan nyata",
    wrongOpts:["整実","制実","声実"], stage:6, category:"karakter" },

  { jp:"執着", read:"しゅうちゃく", meaning:"Keterikatan berlebihan / Obsesi",
    example:"過去への執着を手放す。", exampleId:"Melepaskan keterikatan pada masa lalu.",
    mnemonic:"執=memegang erat + 着=melekat → melekat dengan memegang erat",
    wrongOpts:["集着","周着","就着"], stage:6, category:"karakter" },

  { jp:"覚悟", read:"かくご", meaning:"Tekad / Kesiapan menanggung akibat",
    example:"覚悟を決めて挑戦する。", exampleId:"Menantang dengan tekad yang sudah bulat.",
    mnemonic:"覚=sadar + 悟=mengerti → sadar dan siap menanggung segala akibat",
    wrongOpts:["確固","格後","角語"], stage:6, category:"karakter" },

  // ── Analisis & Evaluasi ──
  { jp:"比較", read:"ひかく", meaning:"Perbandingan",
    example:"二つの案を比較する。", exampleId:"Membandingkan dua rencana.",
    mnemonic:"比=membandingkan + 較=menimbang → menimbang dengan membandingkan",
    wrongOpts:["比格","皮革","被格"], stage:6, category:"analisis" },

  { jp:"評価", read:"ひょうか", meaning:"Penilaian / Evaluasi",
    example:"公正に評価することが大切だ。", exampleId:"Penting menilai secara adil.",
    mnemonic:"評=menilai + 価=nilai/harga → menilai dengan standar nilai",
    wrongOpts:["表価","票価","氷価"], stage:6, category:"analisis" },

  { jp:"検討", read:"けんとう", meaning:"Pertimbangan / Kajian",
    example:"慎重に検討してから決める。", exampleId:"Memutuskan setelah mempertimbangkan dengan cermat.",
    mnemonic:"検=memeriksa + 討=membahas → membahas sambil memeriksa",
    wrongOpts:["見当","建当","献当"], stage:6, category:"analisis" },

  { jp:"判明", read:"はんめい", meaning:"Terbukti / Menjadi jelas",
    example:"原因が判明した。", exampleId:"Penyebabnya terbukti.",
    mnemonic:"判=menilai + 明=terang/jelas → menjadi jelas setelah dinilai",
    wrongOpts:["判命","版名","帆名"], stage:6, category:"analisis" },

  { jp:"確認", read:"かくにん", meaning:"Konfirmasi / Pengecekan",
    example:"内容を確認してください。", exampleId:"Tolong konfirmasi isinya.",
    mnemonic:"確=pasti/kokoh + 認=mengakui → mengakui dengan pasti",
    wrongOpts:["格認","画認","確任"], stage:6, category:"analisis" },

  // ── Ekspresi & Seni ──
  { jp:"表現", read:"ひょうげん", meaning:"Ekspresi / Ungkapan",
    example:"自分の気持ちを言葉で表現する。", exampleId:"Mengungkapkan perasaan dengan kata-kata.",
    mnemonic:"表=permukaan/menampilkan + 現=muncul/nyata → menampilkan yang ada di dalam",
    wrongOpts:["表原","票現","氷現"], stage:6, category:"seni" },

  { jp:"想像", read:"そうぞう", meaning:"Imajinasi / Bayangan",
    example:"未来の社会を想像してみる。", exampleId:"Mencoba membayangkan masyarakat masa depan.",
    mnemonic:"想=pikiran/angan + 像=gambar/bentuk → menggambar dalam pikiran",
    wrongOpts:["創造","総像","相像"], stage:6, category:"seni" },

  { jp:"感性", read:"かんせい", meaning:"Sensitivitas / Kepekaan seni",
    example:"豊かな感性を育てる。", exampleId:"Memupuk kepekaan yang kaya.",
    mnemonic:"感=merasakan + 性=sifat bawaan → sifat bawaan untuk merasakan",
    wrongOpts:["完成","感声","肝性"], stage:6, category:"seni" },

];

// Fungsi helper untuk ambil kartu per stage
function getKanjiByStage(stageNum) {
  return KANJI_DB.filter(k => k.stage === stageNum);
}

// Fungsi build questions dari KANJI_DB
function buildKanjiQuestions(kanjiList) {
  return kanjiList.map(k => ({
    jp: `___。`,
    furi: k.read,
    prompt: `Kanji untuk ${k.read} (${k.meaning.split('/')[0].trim()}):`,
    opts: [k.jp, ...k.wrongOpts],
    ans: 0,
    exp: `${k.jp}(${k.read}) = ${k.meaning}. ${k.mnemonic}`,
    // opts akan di-shuffle di runtime
  }));
}

console.log(`✅ Kanji DB loaded: ${KANJI_DB.length} kanji`);
