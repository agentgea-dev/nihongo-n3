// ═══════════════════════════════════════════════════════════════
//  vocab-batch16-keizai-seiji.js — Kosakata N3: Ekonomi & Politik
//  80 kata | Batch 16 dari 16
// ═══════════════════════════════════════════════════════════════
addVocab([

  // ── EKONOMI ──
  { jp:"経済",read:"けいざい",meaning:"Ekonomi",type:"noun",
    example:"経済が回復してきた。",exampleId:"Ekonomi mulai pulih.",
    mnemonic:"経=mengelola + 済=menyelesaikan → menyelesaikan pengelolaan = ekonomi",
    wrongOpts:["財政","金融","景気"],stage:3,category:"ekonomi" },

  { jp:"景気",read:"けいき",meaning:"Kondisi ekonomi / Booming",type:"noun",
    example:"景気が良くなってきた。",exampleId:"Kondisi ekonomi membaik.",
    mnemonic:"景=gambaran + 気=semangat/kondisi → gambaran kondisi = kondisi ekonomi",
    wrongOpts:["経済","好景気","活況"],stage:3,category:"ekonomi" },

  { jp:"不景気",read:"ふけいき",meaning:"Resesi / Kondisi ekonomi buruk",type:"noun",
    example:"不景気でリストラが増えた。",exampleId:"PHK meningkat karena resesi.",
    mnemonic:"不=tidak + 景気=kondisi baik → kondisi ekonomi yang tidak baik = resesi",
    wrongOpts:["不況","デフレ","景気後退"],stage:3,category:"ekonomi" },

  { jp:"インフレ",read:"いんふれ",meaning:"Inflasi",type:"noun",
    example:"インフレで生活費が上がった。",exampleId:"Biaya hidup naik karena inflasi.",
    mnemonic:"インフレ = inflation (disingkat) = kenaikan harga umum",
    wrongOpts:["デフレ","スタグフレーション","物価上昇"],stage:3,category:"ekonomi" },

  { jp:"デフレ",read:"でふれ",meaning:"Deflasi",type:"noun",
    example:"長年のデフレが続いている。",exampleId:"Deflasi yang berkepanjangan terus berlanjut.",
    mnemonic:"デフレ = deflation (disingkat) = penurunan harga umum",
    wrongOpts:["インフレ","不況","価格下落"],stage:6,category:"ekonomi" },

  { jp:"GDP",read:"じーでぃーぴー",meaning:"PDB (Produk Domestik Bruto)",type:"noun",
    example:"GDPが増加した。",exampleId:"PDB meningkat.",
    mnemonic:"GDP = Gross Domestic Product = PDB = nilai semua produksi dalam negeri",
    wrongOpts:["GNP","国民総生産","経済規模"],stage:6,category:"ekonomi" },

  { jp:"貿易",read:"ぼうえき",meaning:"Perdagangan internasional",type:"noun",
    example:"自由貿易を推進する。",exampleId:"Mendorong perdagangan bebas.",
    mnemonic:"貿=menukar + 易=mudah/perdagangan → perdagangan antar negara",
    wrongOpts:["取引","交易","輸出入"],stage:3,category:"ekonomi" },

  { jp:"輸出",read:"ゆしゅつ",meaning:"Ekspor",type:"noun",
    example:"自動車を輸出する。",exampleId:"Mengekspor mobil.",
    mnemonic:"輸=mengangkut + 出=keluar → mengangkut keluar = ekspor",
    wrongOpts:["輸入","貿易","送る"],stage:3,category:"ekonomi" },

  { jp:"輸入",read:"ゆにゅう",meaning:"Impor",type:"noun",
    example:"食料を輸入する。",exampleId:"Mengimpor bahan makanan.",
    mnemonic:"輸=mengangkut + 入=masuk → mengangkut masuk = impor",
    wrongOpts:["輸出","購入","仕入れ"],stage:3,category:"ekonomi" },

  { jp:"株",read:"かぶ",meaning:"Saham",type:"noun",
    example:"株を購入した。",exampleId:"Membeli saham.",
    mnemonic:"株 → 'kabu' = 'cabang/saham perusahaan' = saham",
    wrongOpts:["債券","投資信託","有価証券"],stage:3,category:"ekonomi" },

  { jp:"為替",read:"かわせ",meaning:"Nilai tukar / Kurs",type:"noun",
    example:"為替レートが変動した。",exampleId:"Nilai tukar berfluktuasi.",
    mnemonic:"為替 → 'kawase' = pertukaran uang antar mata uang = kurs",
    wrongOpts:["相場","レート","通貨"],stage:3,category:"ekonomi" },

  { jp:"金融",read:"きんゆう",meaning:"Keuangan / Finansial",type:"noun",
    example:"金融機関に相談する。",exampleId:"Berkonsultasi dengan lembaga keuangan.",
    mnemonic:"金=uang + 融=mencairkan/mengalirkan → mengalirkan uang = keuangan",
    wrongOpts:["財務","会計","金銭"],stage:3,category:"ekonomi" },

  { jp:"財政",read:"ざいせい",meaning:"Fiskal / Keuangan negara",type:"noun",
    example:"財政赤字が問題だ。",exampleId:"Defisit fiskal menjadi masalah.",
    mnemonic:"財=kekayaan + 政=pemerintahan → kekayaan pemerintahan = fiskal",
    wrongOpts:["財務","経済","国家予算"],stage:6,category:"ekonomi" },

  { jp:"補助金",read:"ほじょきん",meaning:"Subsidi / Dana bantuan",type:"noun",
    example:"農業に補助金を出す。",exampleId:"Memberikan subsidi untuk pertanian.",
    mnemonic:"補助=membantu + 金=uang → uang untuk membantu = subsidi",
    wrongOpts:["助成金","給付金","援助"],stage:3,category:"ekonomi" },

  { jp:"企業",read:"きぎょう",meaning:"Perusahaan / Korporasi",type:"noun",
    example:"大企業に就職した。",exampleId:"Diterima di perusahaan besar.",
    mnemonic:"企=merencanakan + 業=usaha/bisnis → merencanakan usaha = perusahaan",
    wrongOpts:["会社","法人","組織"],stage:3,category:"ekonomi" },

  { jp:"倒産",read:"とうさん",meaning:"Kebangkrutan / Bangkrut",type:"noun",
    example:"会社が倒産した。",exampleId:"Perusahaan bangkrut.",
    mnemonic:"倒=jatuh + 産=aset → aset yang jatuh = bangkrut",
    wrongOpts:["破産","廃業","閉鎖"],stage:3,category:"ekonomi" },

  { jp:"合併",read:"がっぺい",meaning:"Merger / Penggabungan",type:"noun",
    example:"二社が合併した。",exampleId:"Dua perusahaan bergabung (merger).",
    mnemonic:"合=bersama + 併=menggabungkan → menggabungkan bersama = merger",
    wrongOpts:["買収","統合","提携"],stage:6,category:"ekonomi" },

  { jp:"買収",read:"ばいしゅう",meaning:"Akuisisi / Pengambilalihan",type:"noun",
    example:"大手企業が買収された。",exampleId:"Perusahaan besar diakuisisi.",
    mnemonic:"買=membeli + 収=mengambil → membeli dan mengambil alih = akuisisi",
    wrongOpts:["合併","M&A","取得"],stage:6,category:"ekonomi" },

  { jp:"リストラ",read:"りすとら",meaning:"PHK / Restrukturisasi",type:"noun",
    example:"不況でリストラされた。",exampleId:"Di-PHK karena resesi.",
    mnemonic:"リストラ = restructuring (disingkat) = PHK/restrukturisasi",
    wrongOpts:["解雇","退職","レイオフ"],stage:3,category:"ekonomi" },

  { jp:"成長",read:"せいちょう",meaning:"Pertumbuhan",type:"noun",
    example:"経済成長が続いている。",exampleId:"Pertumbuhan ekonomi terus berlanjut.",
    mnemonic:"成=berhasil/tumbuh + 長=besar → tumbuh menjadi besar = pertumbuhan",
    wrongOpts:["発展","発達","拡大"],stage:3,category:"ekonomi" },

  // ── POLITIK & PEMERINTAHAN ──
  { jp:"政府",read:"せいふ",meaning:"Pemerintah",type:"noun",
    example:"政府が対策を発表した。",exampleId:"Pemerintah mengumumkan tindakan penanggulangan.",
    mnemonic:"政=pemerintahan + 府=kantor besar → kantor besar pemerintahan = pemerintah",
    wrongOpts:["行政","国家","内閣"],stage:3,category:"politik" },

  { jp:"内閣",read:"ないかく",meaning:"Kabinet",type:"noun",
    example:"内閣が組閣された。",exampleId:"Kabinet dibentuk.",
    mnemonic:"内=dalam + 閣=gedung penting → gedung dalam = kabinet (pemerintahan)",
    wrongOpts:["政府","議会","省庁"],stage:6,category:"politik" },

  { jp:"議会",read:"ぎかい",meaning:"Parlemen / Dewan",type:"noun",
    example:"議会で法案が可決された。",exampleId:"RUU disetujui di parlemen.",
    mnemonic:"議=berdiskusi + 会=pertemuan → pertemuan diskusi = parlemen",
    wrongOpts:["国会","議院","立法府"],stage:3,category:"politik" },

  { jp:"国会",read:"こっかい",meaning:"DPR Jepang / Parlemen Nasional",type:"noun",
    example:"国会議員に選ばれた。",exampleId:"Terpilih sebagai anggota parlemen.",
    mnemonic:"国=negara + 会=pertemuan → pertemuan negara = parlemen nasional",
    wrongOpts:["議会","国務院","立法府"],stage:3,category:"politik" },

  { jp:"政党",read:"せいとう",meaning:"Partai politik",type:"noun",
    example:"政党に入党する。",exampleId:"Bergabung dengan partai politik.",
    mnemonic:"政=politik + 党=kelompok/partai → kelompok politik = partai politik",
    wrongOpts:["党","与党","野党"],stage:3,category:"politik" },

  { jp:"与党",read:"よとう",meaning:"Partai berkuasa / Koalisi pemerintah",type:"noun",
    example:"与党が政策を推進する。",exampleId:"Partai berkuasa mendorong kebijakan.",
    mnemonic:"与=memberi + 党=partai → partai yang memberi (berkuasa) = partai pemerintah",
    wrongOpts:["野党","政党","連立"],stage:6,category:"politik" },

  { jp:"野党",read:"やとう",meaning:"Partai oposisi",type:"noun",
    example:"野党が批判した。",exampleId:"Partai oposisi mengkritik.",
    mnemonic:"野=liar/lapangan/oposisi + 党=partai → partai di 'lapangan' = oposisi",
    wrongOpts:["与党","少数党","反対党"],stage:6,category:"politik" },

  { jp:"首相",read:"しゅしょう",meaning:"Perdana menteri",type:"noun",
    example:"新しい首相が就任した。",exampleId:"Perdana menteri baru dilantik.",
    mnemonic:"首=kepala + 相=menteri → kepala para menteri = perdana menteri",
    wrongOpts:["大臣","総理","大統領"],stage:3,category:"politik" },

  { jp:"大臣",read:"だいじん",meaning:"Menteri",type:"noun",
    example:"外務大臣が会見を開いた。",exampleId:"Menteri luar negeri mengadakan konferensi pers.",
    mnemonic:"大=besar + 臣=pelayan raja/pejabat → pejabat besar = menteri",
    wrongOpts:["首相","知事","長官"],stage:3,category:"politik" },

  { jp:"大統領",read:"だいとうりょう",meaning:"Presiden (kepala negara)",type:"noun",
    example:"アメリカの大統領が来日した。",exampleId:"Presiden Amerika mengunjungi Jepang.",
    mnemonic:"大=besar + 統=menyatukan + 領=memimpin → pemimpin besar penyatu = presiden",
    wrongOpts:["首相","国王","元首"],stage:3,category:"politik" },

  { jp:"条約",read:"じょうやく",meaning:"Perjanjian / Traktat",type:"noun",
    example:"平和条約を締結した。",exampleId:"Menandatangani perjanjian damai.",
    mnemonic:"条=pasal/ketentuan + 約=mengikat → mengikat dengan ketentuan = traktat",
    wrongOpts:["協定","合意","契約"],stage:3,category:"politik" },

  { jp:"外交",read:"がいこう",meaning:"Diplomasi",type:"noun",
    example:"外交で問題を解決する。",exampleId:"Menyelesaikan masalah melalui diplomasi.",
    mnemonic:"外=luar + 交=berhubungan → berhubungan dengan luar negeri = diplomasi",
    wrongOpts:["国際関係","外務","交渉"],stage:3,category:"politik" },

  { jp:"安全保障",read:"あんぜんほしょう",meaning:"Keamanan nasional",type:"noun",
    example:"国家の安全保障を強化する。",exampleId:"Memperkuat keamanan nasional.",
    mnemonic:"安全=aman + 保障=jaminan → jaminan keamanan = keamanan nasional",
    wrongOpts:["防衛","国防","安保"],stage:6,category:"politik" },

  { jp:"憲法",read:"けんぽう",meaning:"Konstitusi / Undang-undang Dasar",type:"noun",
    example:"憲法を改正する議論が続く。",exampleId:"Diskusi amandemen konstitusi terus berlanjut.",
    mnemonic:"憲=aturan dasar + 法=hukum → hukum aturan dasar = konstitusi/UUD",
    wrongOpts:["法律","法令","基本法"],stage:3,category:"politik" },

  { jp:"民主主義",read:"みんしゅしゅぎ",meaning:"Demokrasi",type:"noun",
    example:"民主主義を守る。",exampleId:"Menjaga demokrasi.",
    mnemonic:"民主=rakyat berkuasa + 主義=isme → paham rakyat berkuasa = demokrasi",
    wrongOpts:["共産主義","独裁","専制"],stage:3,category:"politik" },

  { jp:"投票",read:"とうひょう",meaning:"Memilih / Voting",type:"noun",
    example:"選挙で投票する。",exampleId:"Memilih di pemilu.",
    mnemonic:"投=melempar + 票=surat suara → melempar surat suara = memilih",
    wrongOpts:["選挙","票","一票"],stage:3,category:"politik" },

  { jp:"候補者",read:"こうほしゃ",meaning:"Kandidat / Calon",type:"noun",
    example:"候補者が演説した。",exampleId:"Kandidat berpidato.",
    mnemonic:"候補=kandidat + 者=orang → orang yang menjadi kandidat = calon",
    wrongOpts:["立候補者","出馬者","当選者"],stage:3,category:"politik" },

  { jp:"当選",read:"とうせん",meaning:"Terpilih / Menang pemilihan",type:"noun",
    example:"選挙で当選した。",exampleId:"Terpilih di pemilihan.",
    mnemonic:"当=mengenai + 選=terpilih → mengenai pilihan = terpilih",
    wrongOpts:["落選","当確","当選者"],stage:3,category:"politik" },

  { jp:"落選",read:"らくせん",meaning:"Tidak terpilih / Kalah pemilihan",type:"noun",
    example:"惜しくも落選した。",exampleId:"Sayang tidak terpilih.",
    mnemonic:"落=jatuh + 選=pilihan → jatuh dari pilihan = tidak terpilih",
    wrongOpts:["当選","敗退","失敗"],stage:3,category:"politik" },

  // ── HUKUM & KEAMANAN ──
  { jp:"裁判所",read:"さいばんしょ",meaning:"Pengadilan",type:"noun",
    example:"裁判所で争う。",exampleId:"Bersengketa di pengadilan.",
    mnemonic:"裁判=persidangan + 所=tempat → tempat persidangan = pengadilan",
    wrongOpts:["法廷","検察庁","警察"],stage:3,category:"hukum" },

  { jp:"弁護士",read:"べんごし",meaning:"Pengacara / Advokat",type:"noun",
    example:"弁護士に相談する。",exampleId:"Berkonsultasi dengan pengacara.",
    mnemonic:"弁護=membela + 士=ahli → ahli membela = pengacara",
    wrongOpts:["検察官","判事","弁理士"],stage:3,category:"hukum" },

  { jp:"検察",read:"けんさつ",meaning:"Jaksa / Penuntut umum",type:"noun",
    example:"検察が起訴した。",exampleId:"Jaksa mengajukan tuntutan.",
    mnemonic:"検=memeriksa + 察=mengamati → memeriksa dan mengamati untuk menuntut",
    wrongOpts:["弁護士","警察","判事"],stage:6,category:"hukum" },

  { jp:"逮捕",read:"たいほ",meaning:"Penangkapan / Ditangkap",type:"noun",
    example:"容疑者が逮捕された。",exampleId:"Tersangka ditangkap.",
    mnemonic:"逮=mengejar + 捕=menangkap → mengejar dan menangkap = penangkapan",
    wrongOpts:["拘束","検挙","摘発"],stage:3,category:"hukum" },

  { jp:"容疑者",read:"ようぎしゃ",meaning:"Tersangka",type:"noun",
    example:"容疑者の取り調べが行われた。",exampleId:"Pemeriksaan tersangka dilakukan.",
    mnemonic:"容疑=kecurigaan + 者=orang → orang yang dicurigai = tersangka",
    wrongOpts:["被疑者","被告","犯人"],stage:3,category:"hukum" },

  { jp:"判決",read:"はんけつ",meaning:"Putusan / Vonis",type:"noun",
    example:"無罪の判決が下された。",exampleId:"Vonis tidak bersalah dijatuhkan.",
    mnemonic:"判=memutuskan + 決=keputusan → keputusan akhir = vonis",
    wrongOpts:["判断","決定","裁決"],stage:3,category:"hukum" },

  { jp:"無罪",read:"むざい",meaning:"Tidak bersalah / Bebas",type:"noun",
    example:"最終的に無罪となった。",exampleId:"Akhirnya dinyatakan tidak bersalah.",
    mnemonic:"無=tidak ada + 罪=kesalahan → tidak ada kesalahan = tidak bersalah",
    wrongOpts:["有罪","無実","潔白"],stage:3,category:"hukum" },

  { jp:"有罪",read:"ゆうざい",meaning:"Bersalah / Vonis bersalah",type:"noun",
    example:"有罪の判決が出た。",exampleId:"Vonis bersalah keluar.",
    mnemonic:"有=ada + 罪=kesalahan → ada kesalahan = bersalah",
    wrongOpts:["無罪","犯罪","有罪判決"],stage:3,category:"hukum" },

  { jp:"訴訟",read:"そしょう",meaning:"Gugatan / Litigasi",type:"noun",
    example:"損害賠償訴訟を起こす。",exampleId:"Mengajukan gugatan ganti rugi.",
    mnemonic:"訴=mengadukan + 訟=berperkara → mengadukan dan berperkara = gugatan",
    wrongOpts:["裁判","告訴","訴え"],stage:6,category:"hukum" },

  { jp:"賠償",read:"ばいしょう",meaning:"Ganti rugi",type:"noun",
    example:"損害賠償を請求する。",exampleId:"Menuntut ganti rugi.",
    mnemonic:"賠=mengganti kerugian + 償=membayar kembali → membayar ganti rugi",
    wrongOpts:["補償","保障","補填"],stage:6,category:"hukum" },

  { jp:"禁止",read:"きんし",meaning:"Larangan / Dilarang",type:"noun",
    example:"ここは立ち入り禁止だ。",exampleId:"Di sini dilarang masuk.",
    mnemonic:"禁=melarang + 止=menghentikan → menghentikan dengan melarang = larangan",
    wrongOpts:["制限","規制","不可"],stage:3,category:"hukum" },

  { jp:"義務",read:"ぎむ",meaning:"Kewajiban",type:"noun",
    example:"国民の義務を果たす。",exampleId:"Memenuhi kewajiban warga negara.",
    mnemonic:"義=kebenaran + 務=tugas → tugas yang harus dilakukan dengan benar = kewajiban",
    wrongOpts:["責任","権利","役割"],stage:3,category:"hukum" },

  { jp:"権利",read:"けんり",meaning:"Hak",type:"noun",
    example:"基本的人権を守る。",exampleId:"Melindungi hak asasi manusia.",
    mnemonic:"権=wewenang + 利=keuntungan → wewenang yang menguntungkan = hak",
    wrongOpts:["義務","特権","資格"],stage:3,category:"hukum" },

  { jp:"平和",read:"へいわ",meaning:"Perdamaian / Damai",type:"noun",
    example:"世界平和を願う。",exampleId:"Mendambakan perdamaian dunia.",
    mnemonic:"平=datar/tenang + 和=harmoni → harmoni yang tenang = perdamaian",
    wrongOpts:["和平","平静","穏やか"],stage:3,category:"politik" },

  { jp:"紛争",read:"ふんそう",meaning:"Konflik / Perselisihan",type:"noun",
    example:"地域紛争が続いている。",exampleId:"Konflik regional terus berlanjut.",
    mnemonic:"紛=kacau/berselisih + 争=bertarung → bertarung dalam kekacauan = konflik",
    wrongOpts:["対立","争い","戦争"],stage:6,category:"politik" },

  { jp:"難民",read:"なんみん",meaning:"Pengungsi",type:"noun",
    example:"難民を受け入れる。",exampleId:"Menerima pengungsi.",
    mnemonic:"難=kesulitan + 民=rakyat → rakyat yang dalam kesulitan = pengungsi",
    wrongOpts:["移民","亡命者","避難民"],stage:6,category:"politik" },

  { jp:"移民",read:"いみん",meaning:"Imigran / Migrasi",type:"noun",
    example:"移民政策を議論する。",exampleId:"Mendiskusikan kebijakan imigrasi.",
    mnemonic:"移=pindah + 民=rakyat → rakyat yang pindah = imigran",
    wrongOpts:["難民","外国人","帰化"],stage:3,category:"politik" },

  { jp:"国際連合",read:"こくさいれんごう",meaning:"PBB (Persatuan Bangsa-Bangsa)",type:"noun",
    example:"国際連合で演説した。",exampleId:"Berpidato di PBB.",
    mnemonic:"国際=internasional + 連合=persatuan → persatuan internasional = PBB",
    wrongOpts:["国連","NATO","EU"],stage:3,category:"politik" },

  { jp:"条件",read:"じょうけん",meaning:"Syarat / Kondisi",type:"noun",
    example:"合格の条件を満たした。",exampleId:"Memenuhi syarat kelulusan.",
    mnemonic:"条=pasal/ketentuan + 件=hal → hal yang menjadi ketentuan = syarat",
    wrongOpts:["前提","資格","基準"],stage:3,category:"abstrak" },

  { jp:"財務",read:"ざいむ",meaning:"Keuangan (administrasi) / Urusan keuangan",type:"noun",
    example:"財務省が予算を管理する。",exampleId:"Kementerian Keuangan mengelola anggaran.",
    mnemonic:"財=harta/keuangan + 務=tugas → tugas keuangan = administrasi keuangan",
    wrongOpts:["財政","金融","経理"],stage:6,category:"ekonomi" },

  { jp:"会計",read:"かいけい",meaning:"Akuntansi / Pembukuan",type:"noun",
    example:"会計士に決算書を作ってもらう。",exampleId:"Meminta akuntan membuat laporan keuangan.",
    mnemonic:"会=berkumpul + 計=menghitung → menghitung yang terkumpul = akuntansi",
    wrongOpts:["経理","財務","簿記"],stage:3,category:"ekonomi" },

  { jp:"金利",read:"きんり",meaning:"Suku bunga / Tingkat bunga",type:"noun",
    example:"金利が下がると借りやすくなる。",exampleId:"Ketika suku bunga turun, lebih mudah meminjam.",
    mnemonic:"金=uang + 利=keuntungan/bunga → bunga dari uang = suku bunga",
    wrongOpts:["利息","利率","配当"],stage:6,category:"ekonomi" },

  { jp:"供給",read:"きょうきゅう",meaning:"Pasokan / Suplai",type:"noun",
    example:"電力の供給が不足している。",exampleId:"Pasokan listrik tidak mencukupi.",
    mnemonic:"供=menyediakan + 給=memberi → menyediakan dan memberi = pasokan",
    wrongOpts:["需要","提供","配給"],stage:6,category:"ekonomi" },

  { jp:"需要",read:"じゅよう",meaning:"Permintaan / Demand",type:"noun",
    example:"需要と供給のバランスが大切だ。",exampleId:"Keseimbangan permintaan dan pasokan sangat penting.",
    mnemonic:"需=membutuhkan + 要=perlu → membutuhkan dan perlu = permintaan",
    wrongOpts:["供給","要求","需要量"],stage:6,category:"ekonomi" },

  { jp:"独占",read:"どくせん",meaning:"Monopoli",type:"noun",
    example:"市場の独占を防ぐ法律がある。",exampleId:"Ada undang-undang yang mencegah monopoli pasar.",
    mnemonic:"独=sendiri/monopoli + 占=menduduki → menduduki sendiri = monopoli",
    wrongOpts:["寡占","競争","占有"],stage:7,category:"ekonomi" },

  { jp:"規制",read:"きせい",meaning:"Regulasi / Peraturan",type:"noun",
    example:"環境規制が強化された。",exampleId:"Regulasi lingkungan diperketat.",
    mnemonic:"規=aturan/standar + 制=mengatur → mengatur dengan standar = regulasi",
    wrongOpts:["規則","法律","制限"],stage:6,category:"hukum" },

  { jp:"民営化",read:"みんえいか",meaning:"Privatisasi",type:"noun",
    example:"郵便局が民営化された。",exampleId:"Kantor pos diprivatisasi.",
    mnemonic:"民=rakyat/swasta + 営=mengelola + 化=menjadi → menjadi dikelola swasta = privatisasi",
    wrongOpts:["国営化","公営化","自由化"],stage:7,category:"ekonomi" },

  { jp:"行政",read:"ぎょうせい",meaning:"Administrasi pemerintahan",type:"noun",
    example:"行政の効率化が求められている。",exampleId:"Efisiensi administrasi pemerintahan dituntut.",
    mnemonic:"行=menjalankan + 政=pemerintahan → menjalankan pemerintahan = administrasi pemerintahan",
    wrongOpts:["立法","司法","政治"],stage:6,category:"politik" },

  { jp:"中央銀行",read:"ちゅうおうぎんこう",meaning:"Bank sentral",type:"noun",
    example:"中央銀行が金利を決める。",exampleId:"Bank sentral menentukan suku bunga.",
    mnemonic:"中央=pusat + 銀行=bank → bank yang di pusat = bank sentral",
    wrongOpts:["市中銀行","地方銀行","都市銀行"],stage:7,category:"ekonomi" },

  { jp:"株式市場",read:"かぶしきしじょう",meaning:"Pasar saham / Bursa efek",type:"noun",
    example:"株式市場が大きく変動した。",exampleId:"Pasar saham berfluktuasi besar.",
    mnemonic:"株式=saham + 市場=pasar → pasar saham = bursa efek",
    wrongOpts:["証券市場","金融市場","為替市場"],stage:7,category:"ekonomi" },

  { jp:"為替レート",read:"かわせれーと",meaning:"Kurs / Nilai tukar mata uang",type:"noun",
    example:"為替レートが急変した。",exampleId:"Kurs berubah drastis.",
    mnemonic:"為替=pertukaran mata uang + レート=rate → tingkat pertukaran = kurs",
    wrongOpts:["金利","株価","物価"],stage:7,category:"ekonomi" },

  { jp:"財政政策",read:"ざいせいせいさく",meaning:"Kebijakan fiskal",type:"noun",
    example:"財政政策で景気を刺激する。",exampleId:"Merangsang perekonomian dengan kebijakan fiskal.",
    mnemonic:"財政=keuangan negara + 政策=kebijakan → kebijakan keuangan negara = kebijakan fiskal",
    wrongOpts:["金融政策","経済政策","税制改革"],stage:7,category:"ekonomi" },

  { jp:"国際貿易",read:"こくさいぼうえき",meaning:"Perdagangan internasional",type:"noun",
    example:"国際貿易が経済成長を促す。",exampleId:"Perdagangan internasional mendorong pertumbuhan ekonomi.",
    mnemonic:"国際=internasional + 貿易=perdagangan → perdagangan antar negara = perdagangan internasional",
    wrongOpts:["外国貿易","輸出入","通商"],stage:6,category:"ekonomi" },

  { jp:"消費者",read:"しょうひしゃ",meaning:"Konsumen",type:"noun",
    example:"消費者の権利を守る法律がある。",exampleId:"Ada undang-undang yang melindungi hak konsumen.",
    mnemonic:"消費=konsumsi + 者=orang → orang yang mengkonsumsi = konsumen",
    wrongOpts:["生産者","購買者","利用者"],stage:3,category:"ekonomi" },

  { jp:"生産者",read:"せいさんしゃ",meaning:"Produsen",type:"noun",
    example:"生産者と消費者をつなぐ。",exampleId:"Menghubungkan produsen dan konsumen.",
    mnemonic:"生産=produksi + 者=orang → orang yang memproduksi = produsen",
    wrongOpts:["消費者","製造者","供給者"],stage:6,category:"ekonomi" },

  { jp:"経済格差",read:"けいざいかくさ",meaning:"Kesenjangan ekonomi",type:"noun",
    example:"経済格差が社会問題になっている。",exampleId:"Kesenjangan ekonomi menjadi masalah sosial.",
    mnemonic:"経済=ekonomi + 格差=perbedaan/kesenjangan → perbedaan di bidang ekonomi = kesenjangan ekonomi",
    wrongOpts:["貧富の差","所得格差","社会格差"],stage:7,category:"ekonomi" },

  { jp:"公共",read:"こうきょう",meaning:"Publik / Umum",type:"noun",
    example:"公共施設は誰でも使える。",exampleId:"Fasilitas publik bisa digunakan siapa saja.",
    mnemonic:"公=umum/publik + 共=bersama → milik bersama publik = publik",
    wrongOpts:["公的","公営","共有"],stage:3,category:"politik" },

  { jp:"規制緩和",read:"きせいかんわ",meaning:"Deregulasi / Pelonggaran regulasi",type:"noun",
    example:"規制緩和で新しいビジネスが生まれた。",exampleId:"Bisnis baru lahir dari deregulasi.",
    mnemonic:"規制=regulasi + 緩和=pelonggaran → melonggarkan regulasi = deregulasi",
    wrongOpts:["規制強化","自由化","民営化"],stage:7,category:"ekonomi" },

  { jp:"国内総生産",read:"こくないそうせいさん",meaning:"GDP / Produk Domestik Bruto",type:"noun",
    example:"国内総生産が増加した。",exampleId:"GDP meningkat.",
    mnemonic:"国内=dalam negeri + 総=total + 生産=produksi → total produksi dalam negeri = GDP",
    wrongOpts:["国民総生産","経済成長率","貿易収支"],stage:7,category:"ekonomi" },

  { jp:"インフレ",read:"いんふれ",meaning:"Inflasi",type:"noun",
    example:"インフレで物価が上がった。",exampleId:"Harga naik karena inflasi.",
    mnemonic:"インフレ = inflation (kata pinjaman) = inflasi",
    wrongOpts:["デフレ","スタグフレーション","物価上昇"],stage:6,category:"ekonomi" },

  { jp:"デフレ",read:"でふれ",meaning:"Deflasi",type:"noun",
    example:"長期のデフレが続いている。",exampleId:"Deflasi jangka panjang terus berlanjut.",
    mnemonic:"デフレ = deflation (kata pinjaman) = deflasi",
    wrongOpts:["インフレ","景気後退","不況"],stage:7,category:"ekonomi" },

  { jp:"景気",read:"けいき",meaning:"Kondisi ekonomi / Keadaan bisnis",type:"noun",
    example:"景気が回復してきた。",exampleId:"Kondisi ekonomi mulai pulih.",
    mnemonic:"景=pemandangan/kondisi + 気=suasana → suasana kondisi = keadaan ekonomi",
    wrongOpts:["経済","好況","不況"],stage:3,category:"ekonomi" },

]);

console.log("✅ vocab-batch16-keizai-seiji.js loaded — 80 kata ekonomi & politik");
