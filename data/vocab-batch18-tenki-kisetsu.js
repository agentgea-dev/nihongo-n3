// vocab-batch18-tenki-kisetsu.js — Cuaca & Musim (80 kata)
addVocab([

  { jp:"天気予報",read:"てんきよほう",meaning:"Ramalan cuaca",type:"noun",
    example:"天気予報では明日は雨だ。",exampleId:"Menurut ramalan cuaca, besok hujan.",
    mnemonic:"天気=cuaca + 予報=prakiraan → prakiraan cuaca = ramalan cuaca",
    wrongOpts:["気象","天候","気象情報"],stage:3,category:"cuaca" },

  { jp:"気温",read:"きおん",meaning:"Suhu udara / Temperatur",type:"noun",
    example:"今日の気温は30度だ。",exampleId:"Suhu udara hari ini 30 derajat.",
    mnemonic:"気=udara/suasana + 温=panas/hangat → panas udara = suhu udara",
    wrongOpts:["体温","室温","温度"],stage:3,category:"cuaca" },

  { jp:"湿度",read:"しつど",meaning:"Kelembaban",type:"noun",
    example:"梅雨は湿度が高い。",exampleId:"Kelembaban tinggi di musim hujan.",
    mnemonic:"湿=lembab + 度=tingkat → tingkat kelembaban = kelembaban",
    wrongOpts:["気温","温度","乾燥"],stage:6,category:"cuaca" },

  { jp:"気圧",read:"きあつ",meaning:"Tekanan udara / Tekanan atmosfer",type:"noun",
    example:"低気圧が近づいている。",exampleId:"Tekanan udara rendah mendekat.",
    mnemonic:"気=udara + 圧=tekanan → tekanan udara = tekanan atmosfer",
    wrongOpts:["大気","気温","風圧"],stage:6,category:"cuaca" },

  { jp:"晴れ",read:"はれ",meaning:"Cerah / Cuaca cerah",type:"noun",
    example:"明日は晴れの予報だ。",exampleId:"Besok prakiraan cerah.",
    mnemonic:"晴=cerah/matahari bersinar + れ → kondisi cerah = cuaca cerah",
    wrongOpts:["曇り","雨","快晴"],stage:3,category:"cuaca" },

  { jp:"曇り",read:"くもり",meaning:"Berawan / Mendung",type:"noun",
    example:"今日は一日中曇りだった。",exampleId:"Hari ini berawan sepanjang hari.",
    mnemonic:"曇=mendung/awan tebal + り → kondisi mendung = berawan",
    wrongOpts:["晴れ","雨","霧"],stage:3,category:"cuaca" },

  { jp:"雷",read:"かみなり",meaning:"Petir / Guntur",type:"noun",
    example:"雷が鳴って怖かった。",exampleId:"Petir berbunyi dan menakutkan.",
    mnemonic:"雷=karakter 'petir' → bunyi menggelegar dari langit",
    wrongOpts:["稲妻","雷雨","嵐"],stage:3,category:"cuaca" },

  { jp:"台風",read:"たいふう",meaning:"Topan / Badai tropis",type:"noun",
    example:"強い台風が上陸した。",exampleId:"Topan kuat mendarat.",
    mnemonic:"台=platform besar + 風=angin → angin yang sangat besar = topan",
    wrongOpts:["嵐","暴風雨","ハリケーン"],stage:3,category:"cuaca" },

  { jp:"嵐",read:"あらし",meaning:"Badai",type:"noun",
    example:"嵐で外に出られない。",exampleId:"Tidak bisa keluar karena badai.",
    mnemonic:"嵐=karakter 'badai' = kondisi alam sangat buruk",
    wrongOpts:["台風","暴風雨","突風"],stage:3,category:"cuaca" },

  { jp:"霧",read:"きり",meaning:"Kabut",type:"noun",
    example:"朝霧で視界が悪い。",exampleId:"Kabut pagi membuat pandangan buruk.",
    mnemonic:"霧=karakter 'kabut' → air yang melayang di udara",
    wrongOpts:["もや","霞","煙"],stage:6,category:"cuaca" },

  { jp:"霜",read:"しも",meaning:"Embun beku / Frost",type:"noun",
    example:"寒い朝、草に霜が降りた。",exampleId:"Pagi yang dingin, embun beku turun di rumput.",
    mnemonic:"霜=karakter 'embun beku' = air yang membeku di permukaan",
    wrongOpts:["氷","雪","露"],stage:6,category:"cuaca" },

  { jp:"露",read:"つゆ",meaning:"Embun",type:"noun",
    example:"朝の草に露が光っている。",exampleId:"Embun bersinar di rumput pagi.",
    mnemonic:"露=karakter 'embun' = tetesan air di pagi hari",
    wrongOpts:["霜","霧","水滴"],stage:6,category:"cuaca" },

  { jp:"洪水",read:"こうずい",meaning:"Banjir / Banjir besar",type:"noun",
    example:"大雨で洪水が起きた。",exampleId:"Banjir terjadi karena hujan lebat.",
    mnemonic:"洪=banjir besar + 水=air → air yang membanjir = banjir",
    wrongOpts:["氾濫","増水","浸水"],stage:3,category:"bencana" },

  { jp:"干ばつ",read:"かんばつ",meaning:"Kekeringan",type:"noun",
    example:"干ばつで農作物が被害を受けた。",exampleId:"Hasil panen terdampak kekeringan.",
    mnemonic:"干=kering + ばつ=kondisi buruk → kondisi kering yang buruk = kekeringan",
    wrongOpts:["旱魃","乾燥","日照り"],stage:7,category:"bencana" },

  { jp:"地震",read:"じしん",meaning:"Gempa bumi",type:"noun",
    example:"大きな地震が発生した。",exampleId:"Gempa bumi besar terjadi.",
    mnemonic:"地=bumi + 震=getaran/gemetar → getaran bumi = gempa bumi",
    wrongOpts:["余震","津波","噴火"],stage:3,category:"bencana" },

  { jp:"津波",read:"つなみ",meaning:"Tsunami",type:"noun",
    example:"地震の後に津波の警報が出た。",exampleId:"Peringatan tsunami dikeluarkan setelah gempa.",
    mnemonic:"津=pelabuhan + 波=gelombang → gelombang yang datang ke pelabuhan = tsunami",
    wrongOpts:["高潮","大波","洪水"],stage:3,category:"bencana" },

  { jp:"噴火",read:"ふんか",meaning:"Letusan gunung berapi",type:"noun",
    example:"火山が噴火した。",exampleId:"Gunung berapi meletus.",
    mnemonic:"噴=menyemburkan + 火=api → menyemburkan api = letusan gunung berapi",
    wrongOpts:["爆発","火災","煙"],stage:6,category:"bencana" },

  { jp:"避難",read:"ひなん",meaning:"Evakuasi / Mengungsi",type:"noun",
    example:"災害時に速やかに避難する。",exampleId:"Evakuasi cepat saat bencana.",
    mnemonic:"避=menghindari + 難=bahaya → menghindari bahaya = evakuasi",
    wrongOpts:["脱出","逃げる","救助"],stage:3,category:"bencana" },

  { jp:"春",read:"はる",meaning:"Musim semi",type:"noun",
    example:"春になると桜が咲く。",exampleId:"Bunga sakura mekar saat musim semi.",
    mnemonic:"春=karakter 'musim semi' = musim bunga mekar",
    wrongOpts:["夏","秋","冬"],stage:3,category:"musim" },

  { jp:"夏",read:"なつ",meaning:"Musim panas",type:"noun",
    example:"夏は海に行くのが楽しい。",exampleId:"Menyenangkan pergi ke pantai di musim panas.",
    mnemonic:"夏=karakter 'musim panas' = musim terpanas",
    wrongOpts:["春","秋","冬"],stage:3,category:"musim" },

  { jp:"秋",read:"あき",meaning:"Musim gugur",type:"noun",
    example:"秋になると葉が赤くなる。",exampleId:"Daun-daun menjadi merah saat musim gugur.",
    mnemonic:"秋=karakter 'musim gugur' = musim daun berguguran",
    wrongOpts:["春","夏","冬"],stage:3,category:"musim" },

  { jp:"冬",read:"ふゆ",meaning:"Musim dingin",type:"noun",
    example:"冬は寒くて雪が降る。",exampleId:"Musim dingin dingin dan bersalju.",
    mnemonic:"冬=karakter 'musim dingin' = musim terdingin",
    wrongOpts:["春","夏","秋"],stage:3,category:"musim" },

  { jp:"梅雨",read:"つゆ",meaning:"Musim hujan (Jepang) / Rainy season",type:"noun",
    example:"梅雨の時期は洗濯が大変だ。",exampleId:"Musim cuci baju sulit di musim hujan.",
    mnemonic:"梅=buah plum + 雨=hujan → hujan saat plum matang = musim hujan Jepang",
    wrongOpts:["雨季","雨期","梅雨明け"],stage:3,category:"musim" },

  { jp:"紅葉",read:"こうよう",meaning:"Dedaunan merah / Momiji",type:"noun",
    example:"紅葉を見に山に行く。",exampleId:"Pergi ke gunung untuk melihat dedaunan merah.",
    mnemonic:"紅=merah + 葉=daun → daun yang menjadi merah = dedaunan musim gugur",
    wrongOpts:["落葉","新緑","紅葉狩り"],stage:3,category:"musim" },

  { jp:"新緑",read:"しんりょく",meaning:"Dedaunan hijau baru (musim semi)",type:"noun",
    example:"五月の新緑が美しい。",exampleId:"Dedaunan hijau baru di bulan Mei sangat indah.",
    mnemonic:"新=baru + 緑=hijau → hijau yang baru = dedaunan hijau muda",
    wrongOpts:["緑葉","若葉","新芽"],stage:6,category:"musim" },

  { jp:"桜",read:"さくら",meaning:"Bunga sakura / Pohon ceri",type:"noun",
    example:"桜の花が満開になった。",exampleId:"Bunga sakura telah mekar penuh.",
    mnemonic:"桜=karakter 'bunga sakura' = simbol musim semi Jepang",
    wrongOpts:["梅","桃","菊"],stage:3,category:"alam" },

  { jp:"雪景色",read:"ゆきげしき",meaning:"Pemandangan salju",type:"noun",
    example:"雪景色を窓から眺める。",exampleId:"Memandang pemandangan salju dari jendela.",
    mnemonic:"雪=salju + 景色=pemandangan → pemandangan yang tertutup salju",
    wrongOpts:["雪原","雪山","吹雪"],stage:6,category:"cuaca" },

  { jp:"吹雪",read:"ふぶき",meaning:"Badai salju / Blizzard",type:"noun",
    example:"吹雪で何も見えない。",exampleId:"Tidak bisa melihat apa-apa karena badai salju.",
    mnemonic:"吹=berhembus + 雪=salju → salju yang berhembus = badai salju",
    wrongOpts:["大雪","雪嵐","粉雪"],stage:6,category:"cuaca" },

  { jp:"日照り",read:"ひでり",meaning:"Kemarau / Terik matahari",type:"noun",
    example:"日照りが続いて水不足になった。",exampleId:"Kemarau panjang menyebabkan kekurangan air.",
    mnemonic:"日=matahari + 照り=bersinar terik → matahari bersinar tanpa henti = kemarau",
    wrongOpts:["干ばつ","旱魃","酷暑"],stage:6,category:"cuaca" },

  { jp:"暖かい",read:"あたたかい",meaning:"Hangat",type:"adj",
    example:"今日は暖かい日だ。",exampleId:"Hari ini hari yang hangat.",
    mnemonic:"暖=hangat + かい=akhiran adjektif → bersifat hangat",
    wrongOpts:["温かい","ぬるい","熱い"],stage:3,category:"cuaca" },

  { jp:"涼しい",read:"すずしい",meaning:"Sejuk / Segar (udara)",type:"adj",
    example:"木陰は涼しい。",exampleId:"Di bawah naungan pohon terasa sejuk.",
    mnemonic:"涼=sejuk + しい=akhiran adjektif → terasa sejuk dan segar",
    wrongOpts:["寒い","冷たい","冷涼"],stage:3,category:"cuaca" },

  { jp:"蒸し暑い",read:"むしあつい",meaning:"Panas pengap / Gerah",type:"adj",
    example:"梅雨は蒸し暑い。",exampleId:"Musim hujan terasa gerah.",
    mnemonic:"蒸し=mengukus + 暑い=panas → panas seperti dikukus = gerah/pengap",
    wrongOpts:["暑い","湿っぽい","ジメジメ"],stage:3,category:"cuaca" },

  { jp:"肌寒い",read:"はださむい",meaning:"Agak dingin / Dingin di kulit",type:"adj",
    example:"夕方になって肌寒くなった。",exampleId:"Menjadi agak dingin saat menjelang sore.",
    mnemonic:"肌=kulit + 寒い=dingin → dingin yang terasa di kulit = agak dingin",
    wrongOpts:["寒い","冷える","ひんやり"],stage:6,category:"cuaca" },

  { jp:"穏やか",read:"おだやか",meaning:"Tenang / Damai (cuaca/suasana)",type:"adj",
    example:"穏やかな晴れの日だ。",exampleId:"Hari cerah yang tenang.",
    mnemonic:"穏=tenang/damai + やか=akhiran → bersifat tenang dan damai",
    wrongOpts:["静か","落ち着いた","平和"],stage:3,category:"cuaca" },

  { jp:"厳しい",read:"きびしい",meaning:"Keras / Parah (kondisi)",type:"adj",
    example:"今年は厳しい寒さだ。",exampleId:"Tahun ini dinginnya parah.",
    mnemonic:"厳=ketat/keras + しい=akhiran adjektif → sangat ketat/keras = parah",
    wrongOpts:["激しい","強い","辛い"],stage:3,category:"cuaca" },

  { jp:"季節",read:"きせつ",meaning:"Musim / Waktu dalam tahun",type:"noun",
    example:"日本には四つの季節がある。",exampleId:"Jepang memiliki empat musim.",
    mnemonic:"季=musim/waktu + 節=periode/ruas → periode musim = musim",
    wrongOpts:["時期","時季","シーズン"],stage:3,category:"musim" },

  { jp:"気候",read:"きこう",meaning:"Iklim",type:"noun",
    example:"日本の気候は温暖だ。",exampleId:"Iklim Jepang sedang.",
    mnemonic:"気=udara/cuaca + 候=kondisi waktu → kondisi cuaca jangka panjang = iklim",
    wrongOpts:["天候","天気","気象"],stage:3,category:"cuaca" },

  { jp:"天候",read:"てんこう",meaning:"Keadaan cuaca / Kondisi cuaca",type:"noun",
    example:"天候に恵まれた旅行だった。",exampleId:"Perjalanan diberkahi cuaca yang bagus.",
    mnemonic:"天=langit/alam + 候=kondisi waktu → kondisi langit = keadaan cuaca",
    wrongOpts:["天気","気候","気象"],stage:6,category:"cuaca" },

  { jp:"気象",read:"きしょう",meaning:"Meteorologi / Fenomena cuaca",type:"noun",
    example:"気象庁が警報を出した。",exampleId:"Badan Meteorologi mengeluarkan peringatan.",
    mnemonic:"気=udara/cuaca + 象=fenomena/gajah → fenomena cuaca = meteorologi",
    wrongOpts:["天気","天候","気候"],stage:6,category:"cuaca" },

  { jp:"猛暑",read:"もうしょ",meaning:"Panas terik / Gelombang panas",type:"noun",
    example:"今年は猛暑が続いている。",exampleId:"Tahun ini gelombang panas terus berlanjut.",
    mnemonic:"猛=ganas/dahsyat + 暑=panas → panas yang dahsyat = gelombang panas",
    wrongOpts:["酷暑","炎天","熱波"],stage:6,category:"cuaca" },

  { jp:"豪雨",read:"ごうう",meaning:"Hujan lebat / Downpour",type:"noun",
    example:"豪雨で川が氾濫した。",exampleId:"Sungai meluap karena hujan lebat.",
    mnemonic:"豪=mewah/hebat/deras + 雨=hujan → hujan yang sangat deras = hujan lebat",
    wrongOpts:["大雨","暴雨","集中豪雨"],stage:6,category:"cuaca" },

  { jp:"大雪",read:"おおゆき",meaning:"Salju lebat",type:"noun",
    example:"大雪で交通機関が止まった。",exampleId:"Transportasi berhenti karena salju lebat.",
    mnemonic:"大=besar/banyak + 雪=salju → salju yang banyak = salju lebat",
    wrongOpts:["吹雪","積雪","粉雪"],stage:3,category:"cuaca" },

  { jp:"積雪",read:"せきせつ",meaning:"Salju yang menumpuk / Akumulasi salju",type:"noun",
    example:"積雪量が50センチを超えた。",exampleId:"Akumulasi salju melebihi 50 sentimeter.",
    mnemonic:"積=menumpuk + 雪=salju → salju yang menumpuk = akumulasi salju",
    wrongOpts:["大雪","降雪","新雪"],stage:6,category:"cuaca" },

  { jp:"暖冬",read:"だんとう",meaning:"Musim dingin yang hangat",type:"noun",
    example:"今年は暖冬で雪が少なかった。",exampleId:"Tahun ini musim dingin hangat dan sedikit salju.",
    mnemonic:"暖=hangat + 冬=musim dingin → musim dingin yang hangat = musim dingin ringan",
    wrongOpts:["厳冬","寒冬","冷冬"],stage:7,category:"musim" },

  { jp:"冷夏",read:"れいか",meaning:"Musim panas yang dingin",type:"noun",
    example:"冷夏の影響で農作物が不作だった。",exampleId:"Hasil pertanian buruk akibat musim panas dingin.",
    mnemonic:"冷=dingin + 夏=musim panas → musim panas yang dingin = musim panas dingin",
    wrongOpts:["猛暑","酷暑","冷秋"],stage:7,category:"musim" },

  { jp:"長雨",read:"ながあめ",meaning:"Hujan berkepanjangan",type:"noun",
    example:"長雨で洗濯物が乾かない。",exampleId:"Cucian tidak kering karena hujan berkepanjangan.",
    mnemonic:"長=panjang/lama + 雨=hujan → hujan yang berlangsung lama = hujan berkepanjangan",
    wrongOpts:["梅雨","豪雨","小雨"],stage:6,category:"cuaca" },

  { jp:"小雨",read:"こさめ",meaning:"Hujan gerimis / Gerimis",type:"noun",
    example:"小雨が降り始めた。",exampleId:"Gerimis mulai turun.",
    mnemonic:"小=kecil + 雨=hujan → hujan kecil-kecil = gerimis",
    wrongOpts:["霧雨","大雨","豪雨"],stage:3,category:"cuaca" },

  { jp:"豪雪地帯",read:"ごうせつちたい",meaning:"Daerah salju lebat",type:"noun",
    example:"新潟は豪雪地帯で有名だ。",exampleId:"Niigata terkenal sebagai daerah salju lebat.",
    mnemonic:"豪雪=salju lebat + 地帯=kawasan → kawasan salju lebat",
    wrongOpts:["寒冷地","積雪地帯","雪国"],stage:7,category:"cuaca" },

  { jp:"暴風",read:"ぼうふう",meaning:"Angin kencang / Angin badai",type:"noun",
    example:"暴風で木が倒れた。",exampleId:"Pohon tumbang karena angin kencang.",
    mnemonic:"暴=brutal/kencang + 風=angin → angin yang brutal = angin kencang",
    wrongOpts:["強風","台風","突風"],stage:6,category:"cuaca" },

  { jp:"強風",read:"きょうふう",meaning:"Angin kuat",type:"noun",
    example:"強風注意報が出ている。",exampleId:"Peringatan angin kuat dikeluarkan.",
    mnemonic:"強=kuat + 風=angin → angin yang kuat = angin kuat",
    wrongOpts:["暴風","微風","突風"],stage:3,category:"cuaca" },

  { jp:"微風",read:"びふう",meaning:"Angin sepoi-sepoi / Angin pelan",type:"noun",
    example:"微風が心地よく吹いている。",exampleId:"Angin sepoi-sepoi berhembus menyenangkan.",
    mnemonic:"微=kecil/halus + 風=angin → angin yang kecil/halus = angin sepoi-sepoi",
    wrongOpts:["そよ風","強風","無風"],stage:7,category:"cuaca" },

  { jp:"日差し",read:"ひざし",meaning:"Sinar matahari / Cahaya matahari",type:"noun",
    example:"強い日差しで肌が焼けた。",exampleId:"Kulit terbakar karena sinar matahari yang kuat.",
    mnemonic:"日=matahari + 差し=menerobos masuk → sinar yang menerobos dari matahari = sinar matahari",
    wrongOpts:["太陽","日光","陽光"],stage:3,category:"cuaca" },

  { jp:"日照時間",read:"にっしょうじかん",meaning:"Durasi sinar matahari",type:"noun",
    example:"冬は日照時間が短い。",exampleId:"Durasi sinar matahari pendek di musim dingin.",
    mnemonic:"日照=penyinaran matahari + 時間=waktu → waktu sinar matahari = durasi penyinaran",
    wrongOpts:["昼間","昼の長さ","日の出"],stage:7,category:"cuaca" },

  { jp:"夕立",read:"ゆうだち",meaning:"Hujan sore / Hujan tiba-tiba di sore hari",type:"noun",
    example:"夕立で急に雨が降ってきた。",exampleId:"Hujan tiba-tiba turun di sore hari.",
    mnemonic:"夕=sore + 立=berdiri tiba-tiba → hujan yang tiba-tiba di sore hari",
    wrongOpts:["にわか雨","夕雨","夕暮れ"],stage:6,category:"cuaca" },

  { jp:"にわか雨",read:"にわかあめ",meaning:"Hujan tiba-tiba / Hujan sesaat",type:"noun",
    example:"にわか雨に傘なしで濡れた。",exampleId:"Basah kuyup tanpa payung karena hujan tiba-tiba.",
    mnemonic:"にわか=tiba-tiba/mendadak + 雨=hujan → hujan yang tiba-tiba = shower",
    wrongOpts:["夕立","小雨","土砂降り"],stage:6,category:"cuaca" },

  { jp:"土砂降り",read:"どしゃふり",meaning:"Hujan deras sekali",type:"noun",
    example:"土砂降りで前が見えない。",exampleId:"Tidak bisa melihat ke depan karena hujan sangat deras.",
    mnemonic:"土砂=tanah+pasir + 降り=turun → hujan deras seperti tanah dan pasir turun",
    wrongOpts:["豪雨","大雨","集中豪雨"],stage:6,category:"cuaca" },

  { jp:"快晴",read:"かいせい",meaning:"Langit biru cerah / Cerah sekali",type:"noun",
    example:"今日は快晴で富士山が見える。",exampleId:"Hari ini langit cerah dan Gunung Fuji terlihat.",
    mnemonic:"快=menyenangkan + 晴=cerah → cerah yang menyenangkan = langit biru cerah",
    wrongOpts:["晴れ","晴天","好天"],stage:3,category:"cuaca" },

  { jp:"曇天",read:"どんてん",meaning:"Langit berawan / Cuaca mendung",type:"noun",
    example:"曇天で写真が暗くなった。",exampleId:"Foto menjadi gelap karena cuaca mendung.",
    mnemonic:"曇=mendung + 天=langit → langit mendung = cuaca berawan",
    wrongOpts:["晴天","雨天","曇り"],stage:6,category:"cuaca" },

  { jp:"降水量",read:"こうすいりょう",meaning:"Curah hujan",type:"noun",
    example:"今月の降水量が例年より多い。",exampleId:"Curah hujan bulan ini lebih banyak dari biasanya.",
    mnemonic:"降水=air yang turun + 量=jumlah → jumlah air yang turun = curah hujan",
    wrongOpts:["雨量","水量","雨の量"],stage:7,category:"cuaca" },

  { jp:"最高気温",read:"さいこうきおん",meaning:"Suhu tertinggi",type:"noun",
    example:"今日の最高気温は35度だ。",exampleId:"Suhu tertinggi hari ini 35 derajat.",
    mnemonic:"最高=tertinggi + 気温=suhu udara → suhu udara tertinggi",
    wrongOpts:["最低気温","平均気温","最高温度"],stage:3,category:"cuaca" },

  { jp:"最低気温",read:"さいていきおん",meaning:"Suhu terendah",type:"noun",
    example:"最低気温が氷点下になった。",exampleId:"Suhu terendah menjadi di bawah nol.",
    mnemonic:"最低=terendah + 気温=suhu udara → suhu udara terendah",
    wrongOpts:["最高気温","氷点","低温"],stage:3,category:"cuaca" },

  { jp:"彼岸",read:"ひがん",meaning:"Musim pergantian (sekitar equinox Jepang)",type:"noun",
    example:"お彼岸にお墓参りをする。",exampleId:"Mengunjungi makam saat musim equinox.",
    mnemonic:"彼岸=pantai seberang (dunia lain) → saat mendoakan leluhur saat equinox",
    wrongOpts:["お盆","春分","秋分"],stage:7,category:"musim" },

  { jp:"立春",read:"りっしゅん",meaning:"Awal musim semi (dalam kalender)",type:"noun",
    example:"立春を過ぎると少し暖かくなる。",exampleId:"Setelah awal musim semi agak lebih hangat.",
    mnemonic:"立=mulai/berdiri + 春=musim semi → mulainya musim semi = awal musim semi",
    wrongOpts:["春分","啓蟄","春彼岸"],stage:7,category:"musim" },

  { jp:"春分",read:"しゅんぶん",meaning:"Vernal equinox / Titik seimbang musim semi",type:"noun",
    example:"春分の日は昼と夜の長さが同じだ。",exampleId:"Pada equinox musim semi, siang dan malam sama panjang.",
    mnemonic:"春=musim semi + 分=membagi → membagi musim semi = equinox musim semi",
    wrongOpts:["秋分","夏至","冬至"],stage:7,category:"musim" },

  { jp:"夏至",read:"げし",meaning:"Titik balik matahari musim panas / Solstice",type:"noun",
    example:"夏至は一年で一番昼が長い日だ。",exampleId:"Solstice adalah hari terpanjang dalam setahun.",
    mnemonic:"夏=musim panas + 至=mencapai ujung → titik ujung musim panas = solstice",
    wrongOpts:["冬至","春分","秋分"],stage:7,category:"musim" },

  { jp:"冬至",read:"とうじ",meaning:"Titik balik matahari musim dingin",type:"noun",
    example:"冬至はカボチャを食べる習慣がある。",exampleId:"Ada kebiasaan makan labu di hari titik balik musim dingin.",
    mnemonic:"冬=musim dingin + 至=mencapai ujung → titik ujung musim dingin",
    wrongOpts:["夏至","春分","秋分"],stage:7,category:"musim" },

  { jp:"お盆",read:"おぼん",meaning:"Festival Bon (musim panas untuk leluhur)",type:"noun",
    example:"お盆に帰省して墓参りをする。",exampleId:"Pulang kampung saat Obon untuk mengunjungi makam.",
    mnemonic:"お盆=festival musim panas Jepang untuk mendoakan leluhur (mid-Agustus)",
    wrongOpts:["彼岸","正月","七夕"],stage:3,category:"budaya" },

  { jp:"花見",read:"はなみ",meaning:"Piknik melihat bunga (sakura)",type:"noun",
    example:"会社の同僚と花見をした。",exampleId:"Piknik melihat bunga bersama rekan kerja.",
    mnemonic:"花=bunga + 見=melihat → melihat bunga = hanami",
    wrongOpts:["花火","散歩","ピクニック"],stage:3,category:"budaya" },

  { jp:"花火",read:"はなび",meaning:"Kembang api",type:"noun",
    example:"夏祭りで花火を見た。",exampleId:"Melihat kembang api di festival musim panas.",
    mnemonic:"花=bunga + 火=api → api yang mekar seperti bunga = kembang api",
    wrongOpts:["打ち上げ花火","花見","ろうそく"],stage:3,category:"budaya" },

  { jp:"初雪",read:"はつゆき",meaning:"Salju pertama (musim ini)",type:"noun",
    example:"今冬初めての初雪が降った。",exampleId:"Salju pertama musim ini turun.",
    mnemonic:"初=pertama/awal + 雪=salju → salju yang pertama turun = salju pertama",
    wrongOpts:["大雪","新雪","積雪"],stage:6,category:"cuaca" },

  { jp:"雨季",read:"うき",meaning:"Musim hujan (tropis)",type:"noun",
    example:"雨季には毎日のように雨が降る。",exampleId:"Hujan turun hampir setiap hari di musim hujan.",
    mnemonic:"雨=hujan + 季=musim → musim hujan = musim hujan",
    wrongOpts:["梅雨","乾季","雨期"],stage:6,category:"musim" },

  { jp:"乾季",read:"かんき",meaning:"Musim kemarau / Musim kering",type:"noun",
    example:"乾季は雨がほとんど降らない。",exampleId:"Hampir tidak ada hujan di musim kemarau.",
    mnemonic:"乾=kering + 季=musim → musim kering = musim kemarau",
    wrongOpts:["雨季","旱季","乾燥期"],stage:6,category:"musim" },

  { jp:"温暖化",read:"おんだんか",meaning:"Pemanasan global",type:"noun",
    example:"地球温暖化が進んでいる。",exampleId:"Pemanasan global semakin berlanjut.",
    mnemonic:"温暖=hangat + 化=berubah menjadi → menjadi hangat = pemanasan global",
    wrongOpts:["温室効果","気候変動","環境破壊"],stage:3,category:"lingkungan" },

  { jp:"気候変動",read:"きこうへんどう",meaning:"Perubahan iklim",type:"noun",
    example:"気候変動の影響が深刻だ。",exampleId:"Dampak perubahan iklim sangat serius.",
    mnemonic:"気候=iklim + 変動=perubahan → perubahan iklim = climate change",
    wrongOpts:["温暖化","環境問題","天候不順"],stage:6,category:"lingkungan" },

  { jp:"晴天",read:"せいてん",meaning:"Cuaca cerah / Langit cerah",type:"noun",
    example:"晴天の下でスポーツをした。",exampleId:"Berolahraga di bawah cuaca cerah.",
    mnemonic:"晴=cerah + 天=langit → langit yang cerah = cuaca cerah",
    wrongOpts:["快晴","曇天","雨天"],stage:3,category:"cuaca" },

  { jp:"雨天",read:"うてん",meaning:"Cuaca hujan / Hari hujan",type:"noun",
    example:"雨天の場合は中止になる。",exampleId:"Akan dibatalkan jika cuaca hujan.",
    mnemonic:"雨=hujan + 天=langit/hari → hari dengan langit hujan = cuaca hujan",
    wrongOpts:["晴天","悪天候","荒天"],stage:3,category:"cuaca" },

  { jp:"悪天候",read:"あくてんこう",meaning:"Cuaca buruk",type:"noun",
    example:"悪天候のため、試合が延期された。",exampleId:"Pertandingan ditunda karena cuaca buruk.",
    mnemonic:"悪=buruk + 天候=keadaan cuaca → keadaan cuaca yang buruk = cuaca buruk",
    wrongOpts:["荒天","天候不順","嵐"],stage:3,category:"cuaca" },

  { jp:"天気図",read:"てんきず",meaning:"Peta cuaca",type:"noun",
    example:"天気図を見て天気を予測する。",exampleId:"Memprediksi cuaca dengan melihat peta cuaca.",
    mnemonic:"天気=cuaca + 図=peta/gambar → gambar/peta cuaca = peta cuaca",
    wrongOpts:["気象図","地図","予報図"],stage:6,category:"cuaca" },

  { jp:"等圧線",read:"とうあつせん",meaning:"Garis isobar / Garis tekanan sama",type:"noun",
    example:"等圧線が密なところは風が強い。",exampleId:"Angin kuat di tempat garis isobar rapat.",
    mnemonic:"等=sama + 圧=tekanan + 線=garis → garis tekanan yang sama = isobar",
    wrongOpts:["等高線","前線","低気圧"],stage:7,category:"cuaca" },

  { jp:"前線",read:"ぜんせん",meaning:"Front (meteorologi) / Bidang front",type:"noun",
    example:"寒冷前線が通過した。",exampleId:"Front dingin melewati.",
    mnemonic:"前=depan/maju + 線=garis → garis yang maju = front meteorologi",
    wrongOpts:["等圧線","低気圧","高気圧"],stage:7,category:"cuaca" },

]);

console.log("✅ vocab-batch18-tenki-kisetsu.js loaded — 80 kata cuaca & musim");
