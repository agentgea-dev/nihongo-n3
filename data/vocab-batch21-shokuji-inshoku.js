// vocab-batch21-shokuji-inshoku.js — Makanan & Minuman (80 kata)
addVocab([

  { jp:"食材",read:"しょくざい",meaning:"Bahan makanan / Bahan masak",type:"noun",
    example:"新鮮な食材を市場で買う。",exampleId:"Membeli bahan makanan segar di pasar.",
    mnemonic:"食=makan + 材=bahan → bahan untuk dimakan = bahan makanan",
    wrongOpts:["食品","材料","原料"],stage:3,category:"makanan" },

  { jp:"食品",read:"しょくひん",meaning:"Produk makanan / Pangan",type:"noun",
    example:"食品の安全が重要だ。",exampleId:"Keamanan pangan sangat penting.",
    mnemonic:"食=makan + 品=barang/produk → produk yang dimakan = produk makanan",
    wrongOpts:["食材","食料","食べ物"],stage:3,category:"makanan" },

  { jp:"栄養",read:"えいよう",meaning:"Nutrisi / Gizi",type:"noun",
    example:"バランスよく栄養を摂る。",exampleId:"Mengonsumsi nutrisi secara seimbang.",
    mnemonic:"栄=tumbuh subur + 養=memelihara → memelihara pertumbuhan = nutrisi",
    wrongOpts:["養分","成分","滋養"],stage:3,category:"makanan" },

  { jp:"カロリー",read:"かろりー",meaning:"Kalori",type:"noun",
    example:"カロリーを気にして食べる。",exampleId:"Makan dengan memperhatikan kalori.",
    mnemonic:"カロリー = calorie (kata pinjaman) = kalori",
    wrongOpts:["エネルギー","熱量","脂質"],stage:3,category:"makanan" },

  { jp:"たんぱく質",read:"たんぱくしつ",meaning:"Protein",type:"noun",
    example:"肉や卵にたんぱく質が多い。",exampleId:"Daging dan telur banyak mengandung protein.",
    mnemonic:"たんぱく質=protein (istilah ilmiah) = nutrisi pembangun tubuh",
    wrongOpts:["脂質","炭水化物","ビタミン"],stage:6,category:"makanan" },

  { jp:"炭水化物",read:"たんすいかぶつ",meaning:"Karbohidrat",type:"noun",
    example:"ご飯やパンは炭水化物が多い。",exampleId:"Nasi dan roti banyak mengandung karbohidrat.",
    mnemonic:"炭水化物=karbohidrat (istilah kimia) = sumber energi",
    wrongOpts:["たんぱく質","脂質","糖質"],stage:6,category:"makanan" },

  { jp:"脂質",read:"ししつ",meaning:"Lemak / Lipid",type:"noun",
    example:"脂質の取りすぎに注意する。",exampleId:"Perhatikan asupan lemak yang berlebihan.",
    mnemonic:"脂=lemak/minyak + 質=zat → zat lemak = lipid",
    wrongOpts:["たんぱく質","炭水化物","コレステロール"],stage:7,category:"makanan" },

  { jp:"食欲",read:"しょくよく",meaning:"Nafsu makan",type:"noun",
    example:"食欲がなくて何も食べられない。",exampleId:"Tidak bisa makan apa-apa karena tidak nafsu makan.",
    mnemonic:"食=makan + 欲=keinginan → keinginan untuk makan = nafsu makan",
    wrongOpts:["食べたい","食事","空腹"],stage:3,category:"makanan" },

  { jp:"満腹",read:"まんぷく",meaning:"Kenyang",type:"noun",
    example:"満腹になるまで食べた。",exampleId:"Makan sampai kenyang.",
    mnemonic:"満=penuh + 腹=perut → perut yang penuh = kenyang",
    wrongOpts:["腹一杯","お腹いっぱい","空腹"],stage:3,category:"makanan" },

  { jp:"空腹",read:"くうふく",meaning:"Lapar",type:"noun",
    example:"空腹のまま会議に出た。",exampleId:"Ikut rapat dalam keadaan lapar.",
    mnemonic:"空=kosong + 腹=perut → perut yang kosong = lapar",
    wrongOpts:["満腹","おなかがすいた","飢え"],stage:3,category:"makanan" },

  { jp:"味",read:"あじ",meaning:"Rasa / Cita rasa",type:"noun",
    example:"この料理は味がいい。",exampleId:"Masakan ini rasanya enak.",
    mnemonic:"味=karakter 'rasa/cita rasa' = sensasi di lidah",
    wrongOpts:["風味","旨味","香り"],stage:3,category:"makanan" },

  { jp:"甘い",read:"あまい",meaning:"Manis",type:"adj",
    example:"このケーキはとても甘い。",exampleId:"Kue ini sangat manis.",
    mnemonic:"甘=manis → bersifat manis seperti gula",
    wrongOpts:["辛い","苦い","酸っぱい"],stage:3,category:"makanan" },

  { jp:"辛い",read:"からい",meaning:"Pedas / Asin",type:"adj",
    example:"この料理は辛すぎる。",exampleId:"Masakan ini terlalu pedas.",
    mnemonic:"辛=pedas/pahit → sensasi panas di mulut",
    wrongOpts:["甘い","苦い","酸っぱい"],stage:3,category:"makanan" },

  { jp:"苦い",read:"にがい",meaning:"Pahit",type:"adj",
    example:"コーヒーは苦いが好きだ。",exampleId:"Kopi pahit tapi suka.",
    mnemonic:"苦=pahit/sulit → rasa tidak menyenangkan yang pahit",
    wrongOpts:["甘い","辛い","酸っぱい"],stage:3,category:"makanan" },

  { jp:"酸っぱい",read:"すっぱい",meaning:"Asam",type:"adj",
    example:"レモンは酸っぱい。",exampleId:"Lemon itu asam.",
    mnemonic:"酸=asam + っぱい=akhiran sifat → bersifat asam",
    wrongOpts:["甘い","苦い","辛い"],stage:3,category:"makanan" },

  { jp:"塩辛い",read:"しおからい",meaning:"Asin",type:"adj",
    example:"この漬物は塩辛い。",exampleId:"Acar ini asin.",
    mnemonic:"塩=garam + 辛い=pedas/kuat → rasa kuat dari garam = asin",
    wrongOpts:["甘い","辛い","苦い"],stage:3,category:"makanan" },

  { jp:"旨味",read:"うまみ",meaning:"Umami / Gurih",type:"noun",
    example:"出汁の旨味が料理を引き立てる。",exampleId:"Umami dashi menonjolkan cita rasa masakan.",
    mnemonic:"旨=enak/lezat + 味=rasa → rasa yang enak = umami",
    wrongOpts:["甘味","うまさ","コク"],stage:6,category:"makanan" },

  { jp:"調味料",read:"ちょうみりょう",meaning:"Bumbu / Penyedap rasa",type:"noun",
    example:"調味料を上手に使う。",exampleId:"Menggunakan bumbu dengan terampil.",
    mnemonic:"調=mengatur + 味=rasa + 料=bahan → bahan untuk mengatur rasa = bumbu",
    wrongOpts:["香辛料","スパイス","薬味"],stage:3,category:"makanan" },

  { jp:"醤油",read:"しょうゆ",meaning:"Kecap asin / Soy sauce",type:"noun",
    example:"醤油をかけて食べる。",exampleId:"Makan dengan disiram kecap asin.",
    mnemonic:"醤=pasta/saus fermentasi + 油=minyak/cairan → saus fermentasi kedelai = kecap asin",
    wrongOpts:["みそ","塩","ソース"],stage:3,category:"makanan" },

  { jp:"味噌",read:"みそ",meaning:"Miso (pasta fermentasi)",type:"noun",
    example:"味噌汁は日本の伝統食だ。",exampleId:"Sup miso adalah makanan tradisional Jepang.",
    mnemonic:"味噌=pasta fermentasi kedelai khas Jepang",
    wrongOpts:["醤油","豆腐","だし"],stage:3,category:"makanan" },

  { jp:"出汁",read:"だし",meaning:"Kaldu / Dashi (kaldu Jepang)",type:"noun",
    example:"昆布と鰹節で出汁を取る。",exampleId:"Membuat kaldu dari rumput laut dan ikan katsuo.",
    mnemonic:"出=mengeluarkan + 汁=sari/cairan → sari yang dikeluarkan = kaldu",
    wrongOpts:["スープ","ブイヨン","スープストック"],stage:6,category:"makanan" },

  { jp:"炒める",read:"いためる",meaning:"Menumis / Menggoreng sebentar",type:"verb",
    example:"野菜を油で炒める。",exampleId:"Menumis sayuran dengan minyak.",
    mnemonic:"炒=menggoreng/menumis + める=kata kerja → menggoreng dengan sedikit minyak = menumis",
    wrongOpts:["揚げる","焼く","蒸す"],stage:3,category:"memasak" },

  { jp:"揚げる",read:"あげる",meaning:"Menggoreng (rendam minyak)",type:"verb",
    example:"天ぷらを揚げる。",exampleId:"Menggoreng tempura.",
    mnemonic:"揚=mengangkat/menggoreng + げる=kata kerja → mengangkat dari minyak panas = menggoreng",
    wrongOpts:["炒める","焼く","煮る"],stage:3,category:"memasak" },

  { jp:"煮る",read:"にる",meaning:"Merebus / Memasak dalam air",type:"verb",
    example:"野菜をじっくり煮る。",exampleId:"Merebus sayuran dengan perlahan.",
    mnemonic:"煮=merebus + る=kata kerja → memasak dengan air panas = merebus",
    wrongOpts:["茹でる","炒める","蒸す"],stage:3,category:"memasak" },

  { jp:"蒸す",read:"むす",meaning:"Mengukus",type:"verb",
    example:"蒸し器で野菜を蒸す。",exampleId:"Mengukus sayuran dengan kukusan.",
    mnemonic:"蒸=mengukus + す=kata kerja → memasak dengan uap = mengukus",
    wrongOpts:["煮る","茹でる","炒める"],stage:3,category:"memasak" },

  { jp:"茹でる",read:"ゆでる",meaning:"Merebus (dalam air mendidih)",type:"verb",
    example:"パスタを茹でる。",exampleId:"Merebus pasta.",
    mnemonic:"茹=merebus + でる=kata kerja → memasak langsung dalam air mendidih = merebus",
    wrongOpts:["煮る","蒸す","炒める"],stage:3,category:"memasak" },

  { jp:"焼く",read:"やく",meaning:"Memanggang / Membakar",type:"verb",
    example:"肉をフライパンで焼く。",exampleId:"Memanggang daging di wajan.",
    mnemonic:"焼=memanggang/membakar + く=kata kerja → memasak dengan panas langsung = memanggang",
    wrongOpts:["炒める","揚げる","煮る"],stage:3,category:"memasak" },

  { jp:"盛り付け",read:"もりつけ",meaning:"Penyajian makanan / Plating",type:"noun",
    example:"盛り付けが美しい料理だ。",exampleId:"Masakan dengan penyajian yang indah.",
    mnemonic:"盛り=menumpuk/menyajikan + 付け=memasang → cara menyajikan makanan = plating",
    wrongOpts:["飾り付け","演出","デコレーション"],stage:6,category:"memasak" },

  { jp:"食事",read:"しょくじ",meaning:"Makan / Waktu makan",type:"noun",
    example:"食事の時間が楽しみだ。",exampleId:"Menantikan waktu makan.",
    mnemonic:"食=makan + 事=hal/acara → acara makan = makan/waktu makan",
    wrongOpts:["食べる","食品","食料"],stage:3,category:"makanan" },

  { jp:"朝食",read:"ちょうしょく",meaning:"Sarapan",type:"noun",
    example:"毎朝朝食を食べる。",exampleId:"Sarapan setiap pagi.",
    mnemonic:"朝=pagi + 食=makan → makan di pagi hari = sarapan",
    wrongOpts:["昼食","夕食","夜食"],stage:3,category:"makanan" },

  { jp:"昼食",read:"ちゅうしょく",meaning:"Makan siang",type:"noun",
    example:"会社の近くで昼食をとる。",exampleId:"Makan siang di dekat kantor.",
    mnemonic:"昼=siang + 食=makan → makan di siang hari = makan siang",
    wrongOpts:["朝食","夕食","間食"],stage:3,category:"makanan" },

  { jp:"夕食",read:"ゆうしょく",meaning:"Makan malam",type:"noun",
    example:"家族で夕食を食べる。",exampleId:"Makan malam bersama keluarga.",
    mnemonic:"夕=sore/malam + 食=makan → makan di malam hari = makan malam",
    wrongOpts:["朝食","昼食","夜食"],stage:3,category:"makanan" },

  { jp:"間食",read:"かんしょく",meaning:"Camilan / Snack",type:"noun",
    example:"間食のしすぎは体に良くない。",exampleId:"Terlalu banyak ngemil tidak baik untuk tubuh.",
    mnemonic:"間=di antara + 食=makan → makan di antara waktu makan = camilan",
    wrongOpts:["おやつ","軽食","夜食"],stage:3,category:"makanan" },

  { jp:"外食",read:"がいしょく",meaning:"Makan di luar",type:"noun",
    example:"忙しくて外食が続いた。",exampleId:"Karena sibuk, terus makan di luar.",
    mnemonic:"外=luar + 食=makan → makan di luar rumah = makan di luar",
    wrongOpts:["内食","自炊","出前"],stage:3,category:"makanan" },

  { jp:"自炊",read:"じすい",meaning:"Masak sendiri",type:"noun",
    example:"一人暮らしで毎日自炊している。",exampleId:"Masak sendiri setiap hari karena hidup sendiri.",
    mnemonic:"自=sendiri + 炊=memasak → memasak sendiri = self-cooking",
    wrongOpts:["手料理","家庭料理","内食"],stage:3,category:"memasak" },

  { jp:"出前",read:"でまえ",meaning:"Pesan antar / Delivery makanan",type:"noun",
    example:"ピザの出前を頼んだ。",exampleId:"Memesan delivery pizza.",
    mnemonic:"出=keluar + 前=depan → mengirim ke depan pintu = pesan antar",
    wrongOpts:["デリバリー","配達","テイクアウト"],stage:3,category:"makanan" },

  { jp:"食べ放題",read:"たべほうだい",meaning:"All you can eat / Makan sepuasnya",type:"noun",
    example:"焼肉食べ放題に行った。",exampleId:"Pergi ke all you can eat yakiniku.",
    mnemonic:"食べ=makan + 放題=sepuasnya → makan sepuasnya = all you can eat",
    wrongOpts:["バイキング","ビュッフェ","おかわり自由"],stage:3,category:"makanan" },

  { jp:"定食",read:"ていしょく",meaning:"Set meal / Makanan paket",type:"noun",
    example:"ランチ定食を注文した。",exampleId:"Memesan set meal makan siang.",
    mnemonic:"定=tetap/standar + 食=makanan → makanan yang sudah ditetapkan = set meal",
    wrongOpts:["セット","コース","お膳"],stage:3,category:"makanan" },

  { jp:"献立",read:"こんだて",meaning:"Menu (rencana makanan)",type:"noun",
    example:"今週の献立を考えた。",exampleId:"Memikirkan menu minggu ini.",
    mnemonic:"献=menyajikan + 立=menyusun → menyusun hidangan = menu",
    wrongOpts:["メニュー","レシピ","料理"],stage:6,category:"memasak" },

  { jp:"レシピ",read:"れしぴ",meaning:"Resep",type:"noun",
    example:"インターネットでレシピを探す。",exampleId:"Mencari resep di internet.",
    mnemonic:"レシピ = recipe (kata pinjaman) = resep masakan",
    wrongOpts:["献立","手順","作り方"],stage:3,category:"memasak" },

  { jp:"食器",read:"しょっき",meaning:"Peralatan makan / Piring",type:"noun",
    example:"食器を丁寧に洗う。",exampleId:"Mencuci peralatan makan dengan hati-hati.",
    mnemonic:"食=makan + 器=wadah/alat → alat untuk makan = peralatan makan",
    wrongOpts:["皿","茶碗","調理器具"],stage:3,category:"memasak" },

  { jp:"箸",read:"はし",meaning:"Sumpit",type:"noun",
    example:"箸の使い方を練習する。",exampleId:"Berlatih cara menggunakan sumpit.",
    mnemonic:"箸=karakter 'sumpit' = alat makan khas Asia",
    wrongOpts:["フォーク","スプーン","ナイフ"],stage:3,category:"memasak" },

  { jp:"包丁",read:"ほうちょう",meaning:"Pisau dapur",type:"noun",
    example:"包丁を研いで切れ味をよくする。",exampleId:"Mengasah pisau dapur agar tajam.",
    mnemonic:"包=membungkus + 丁=alat → alat yang membungkus/memotong = pisau dapur",
    wrongOpts:["ナイフ","まな板","フライパン"],stage:3,category:"memasak" },

  { jp:"まな板",read:"まないた",meaning:"Talenan",type:"noun",
    example:"まな板の上で野菜を切る。",exampleId:"Memotong sayuran di atas talenan.",
    mnemonic:"まな=merata/untuk motong + 板=papan → papan untuk memotong = talenan",
    wrongOpts:["包丁","鍋","フライパン"],stage:3,category:"memasak" },

  { jp:"鍋",read:"なべ",meaning:"Panci / Pot",type:"noun",
    example:"鍋料理は冬に人気だ。",exampleId:"Masakan panci populer di musim dingin.",
    mnemonic:"鍋=karakter 'panci/pot' = wadah masak dari logam",
    wrongOpts:["フライパン","釜","寸胴"],stage:3,category:"memasak" },

  { jp:"ご飯",read:"ごはん",meaning:"Nasi / Makanan",type:"noun",
    example:"ご飯を三杯食べた。",exampleId:"Makan nasi tiga kali.",
    mnemonic:"ご=prefix sopan + 飯=nasi/makanan → nasi/makanan (sopan)",
    wrongOpts:["白米","お米","食事"],stage:3,category:"makanan" },

  { jp:"麺",read:"めん",meaning:"Mie",type:"noun",
    example:"ラーメンの麺が太い。",exampleId:"Mie ramen tebal.",
    mnemonic:"麺=karakter 'mie' = makanan dari tepung berbentuk panjang",
    wrongOpts:["パスタ","うどん","そば"],stage:3,category:"makanan" },

  { jp:"漬物",read:"つけもの",meaning:"Acar / Sayuran asin",type:"noun",
    example:"食事に漬物が出た。",exampleId:"Makan disajikan dengan acar.",
    mnemonic:"漬=merendam/mengasinkan + 物=benda → benda yang direndam = acar",
    wrongOpts:["キムチ","ピクルス","浅漬け"],stage:3,category:"makanan" },

  { jp:"豆腐",read:"とうふ",meaning:"Tahu",type:"noun",
    example:"冷奴は夏の定番だ。",exampleId:"Tahu dingin adalah makanan musim panas yang biasa.",
    mnemonic:"豆=kacang kedelai + 腐=fermentasi → kedelai yang difermentasi = tahu",
    wrongOpts:["油揚げ","厚揚げ","納豆"],stage:3,category:"makanan" },

  { jp:"納豆",read:"なっとう",meaning:"Natto (kedelai fermentasi)",type:"noun",
    example:"納豆は独特の匂いがある。",exampleId:"Natto memiliki bau yang khas.",
    mnemonic:"納=menyimpan/fermentasi + 豆=kacang kedelai → kedelai yang difermentasi = natto",
    wrongOpts:["豆腐","味噌","醤油"],stage:3,category:"makanan" },

  { jp:"刺身",read:"さしみ",meaning:"Sashimi / Ikan mentah",type:"noun",
    example:"新鮮な刺身を食べた。",exampleId:"Makan sashimi segar.",
    mnemonic:"刺=menusuk/memotong + 身=daging → daging yang dipotong = sashimi",
    wrongOpts:["寿司","刺し身","海鮮"],stage:3,category:"makanan" },

  { jp:"天ぷら",read:"てんぷら",meaning:"Tempura",type:"noun",
    example:"サクサクの天ぷらが好きだ。",exampleId:"Suka tempura yang renyah.",
    mnemonic:"天ぷら=makanan gorengan Jepang dengan adonan tipis = tempura",
    wrongOpts:["から揚げ","フライ","揚げ物"],stage:3,category:"makanan" },

  { jp:"おかず",read:"おかず",meaning:"Lauk pauk",type:"noun",
    example:"ご飯においしいおかずがある。",exampleId:"Ada lauk yang enak untuk nasinya.",
    mnemonic:"おかず=lauk yang dimakan bersama nasi",
    wrongOpts:["副菜","主菜","惣菜"],stage:3,category:"makanan" },

  { jp:"主食",read:"しゅしょく",meaning:"Makanan pokok",type:"noun",
    example:"日本の主食はご飯だ。",exampleId:"Makanan pokok Jepang adalah nasi.",
    mnemonic:"主=utama/pokok + 食=makanan → makanan yang utama = makanan pokok",
    wrongOpts:["副食","主菜","おかず"],stage:3,category:"makanan" },

  { jp:"副菜",read:"ふくさい",meaning:"Lauk pendamping / Sayuran",type:"noun",
    example:"副菜に野菜サラダを作った。",exampleId:"Membuat salad sayuran sebagai lauk pendamping.",
    mnemonic:"副=pendamping + 菜=sayuran/lauk → lauk yang mendampingi = lauk pendamping",
    wrongOpts:["主食","主菜","おかず"],stage:6,category:"makanan" },

  { jp:"飲み物",read:"のみもの",meaning:"Minuman",type:"noun",
    example:"飲み物は何がいいですか。",exampleId:"Minuman apa yang mau?",
    mnemonic:"飲み=minum + 物=benda → benda untuk diminum = minuman",
    wrongOpts:["ドリンク","液体","飲料"],stage:3,category:"minuman" },

  { jp:"お茶",read:"おちゃ",meaning:"Teh / Teh Jepang",type:"noun",
    example:"食後にお茶を飲む。",exampleId:"Minum teh setelah makan.",
    mnemonic:"お=prefix sopan + 茶=teh → teh (sopan) = teh",
    wrongOpts:["緑茶","番茶","麦茶"],stage:3,category:"minuman" },

  { jp:"水分",read:"すいぶん",meaning:"Cairan / Asupan air",type:"noun",
    example:"水分を十分に摂る。",exampleId:"Mengonsumsi cairan yang cukup.",
    mnemonic:"水=air + 分=komponen → komponen air dalam tubuh = cairan",
    wrongOpts:["水","飲料水","体液"],stage:3,category:"minuman" },

  { jp:"アルコール",read:"あるこーる",meaning:"Alkohol",type:"noun",
    example:"アルコールの飲みすぎに注意する。",exampleId:"Perhatikan minum alkohol berlebihan.",
    mnemonic:"アルコール = alcohol (kata pinjaman) = alkohol",
    wrongOpts:["お酒","ビール","ワイン"],stage:3,category:"minuman" },

  { jp:"甘口",read:"あまくち",meaning:"Rasa manis (sake/anggur) / Tidak pedas",type:"noun",
    example:"甘口のワインが好きだ。",exampleId:"Suka anggur yang manis.",
    mnemonic:"甘=manis + 口=mulut/rasa → rasa di mulut yang manis = manis/tidak pedas",
    wrongOpts:["辛口","甘味","甘さ"],stage:6,category:"minuman" },

  { jp:"辛口",read:"からくち",meaning:"Rasa pedas/kering (sake/anggur)",type:"noun",
    example:"辛口の日本酒を飲む。",exampleId:"Minum sake Jepang yang kering.",
    mnemonic:"辛=pedas/kering + 口=mulut/rasa → rasa kering di mulut = dry/kering",
    wrongOpts:["甘口","辛味","辛さ"],stage:6,category:"minuman" },

  { jp:"アレルギー",read:"あれるぎー",meaning:"Alergi",type:"noun",
    example:"小麦アレルギーがある。",exampleId:"Ada alergi gandum.",
    mnemonic:"アレルギー = allergy (kata pinjaman) = alergi",
    wrongOpts:["不耐症","過敏症","免疫反応"],stage:3,category:"makanan" },

  { jp:"添加物",read:"てんかぶつ",meaning:"Zat aditif / Bahan tambahan makanan",type:"noun",
    example:"添加物が少ない食品を選ぶ。",exampleId:"Memilih makanan dengan sedikit zat aditif.",
    mnemonic:"添加=menambahkan + 物=benda/zat → zat yang ditambahkan = zat aditif",
    wrongOpts:["保存料","着色料","防腐剤"],stage:7,category:"makanan" },

  { jp:"有機",read:"ゆうき",meaning:"Organik",type:"noun",
    example:"有機野菜を食べるようにしている。",exampleId:"Berusaha makan sayuran organik.",
    mnemonic:"有=ada + 機=kehidupan/organisme → memiliki sifat kehidupan = organik",
    wrongOpts:["無農薬","天然","自然"],stage:6,category:"makanan" },

  { jp:"旬",read:"しゅん",meaning:"Musim (produk) / Paling segar",type:"noun",
    example:"旬の野菜は美味しい。",exampleId:"Sayuran musimnya enak.",
    mnemonic:"旬=sepuluh hari/musim puncak → waktu puncak kualitas produk = musim",
    wrongOpts:["季節","時期","収穫期"],stage:6,category:"makanan" },

  { jp:"産地",read:"さんち",meaning:"Daerah asal produk / Tempat produksi",type:"noun",
    example:"産地直送の野菜を買う。",exampleId:"Membeli sayuran langsung dari daerah produksi.",
    mnemonic:"産=menghasilkan + 地=tempat → tempat menghasilkan = daerah asal produk",
    wrongOpts:["原産地","生産地","発祥地"],stage:6,category:"makanan" },

  { jp:"食中毒",read:"しょくちゅうどく",meaning:"Keracunan makanan",type:"noun",
    example:"食中毒に注意する。",exampleId:"Berhati-hati terhadap keracunan makanan.",
    mnemonic:"食=makan + 中毒=keracunan → keracunan dari makanan = keracunan makanan",
    wrongOpts:["食あたり","中毒","食の安全"],stage:6,category:"makanan" },

  { jp:"賞味期限",read:"しょうみきげん",meaning:"Tanggal kedaluwarsa (rasa)",type:"noun",
    example:"賞味期限を確認してから食べる。",exampleId:"Cek tanggal kedaluwarsa sebelum makan.",
    mnemonic:"賞味=rasa yang baik + 期限=batas waktu → batas waktu rasa terjaga = tanggal kadaluwarsa",
    wrongOpts:["消費期限","有効期限","品質保証期限"],stage:6,category:"makanan" },

  { jp:"消費期限",read:"しょうひきげん",meaning:"Batas konsumsi / Tanggal habis pakai",type:"noun",
    example:"消費期限が切れた食品は捨てる。",exampleId:"Buang makanan yang sudah melewati batas konsumsi.",
    mnemonic:"消費=konsumsi + 期限=batas waktu → batas waktu konsumsi = batas pakai",
    wrongOpts:["賞味期限","有効期限","製造年月日"],stage:6,category:"makanan" },

  { jp:"新鮮",read:"しんせん",meaning:"Segar",type:"adj",
    example:"新鮮な魚を市場で買う。",exampleId:"Membeli ikan segar di pasar.",
    mnemonic:"新=baru + 鮮=segar/cerah → baru dan segar = segar",
    wrongOpts:["生鮮","フレッシュ","採れたて"],stage:3,category:"makanan" },

  { jp:"腐る",read:"くさる",meaning:"Busuk / Membusuk",type:"verb",
    example:"食べ物が腐った。",exampleId:"Makanan membusuk.",
    mnemonic:"腐=busuk + る=kata kerja → menjadi busuk = membusuk",
    wrongOpts:["傷む","劣化する","変質する"],stage:3,category:"makanan" },

  { jp:"揚げ物",read:"あげもの",meaning:"Gorengan",type:"noun",
    example:"揚げ物は美味しいが太りやすい。",exampleId:"Gorengan enak tapi mudah gemuk.",
    mnemonic:"揚げ=menggoreng + 物=makanan → makanan yang digoreng = gorengan",
    wrongOpts:["焼き物","蒸し物","炒め物"],stage:3,category:"makanan" },

  { jp:"焼き物",read:"やきもの",meaning:"Makanan panggang / Grilled food",type:"noun",
    example:"焼き魚は日本の定番だ。",exampleId:"Ikan panggang adalah makanan khas Jepang.",
    mnemonic:"焼き=panggang/bakar + 物=makanan → makanan yang dipanggang = makanan panggang",
    wrongOpts:["揚げ物","炒め物","煮物"],stage:3,category:"makanan" },

  { jp:"煮物",read:"にもの",meaning:"Masakan rebus / Simmered dish",type:"noun",
    example:"おでんは代表的な煮物だ。",exampleId:"Oden adalah masakan rebus yang representatif.",
    mnemonic:"煮=rebus + 物=makanan → makanan yang direbus = masakan rebus",
    wrongOpts:["揚げ物","焼き物","汁物"],stage:3,category:"makanan" },

  { jp:"汁物",read:"しるもの",meaning:"Sup / Makanan berkuah",type:"noun",
    example:"汁物は体を温める。",exampleId:"Sup menghangatkan tubuh.",
    mnemonic:"汁=sari/kuah + 物=makanan → makanan berkuah = sup",
    wrongOpts:["スープ","鍋","ポトフ"],stage:3,category:"makanan" },

  { jp:"おにぎり",read:"おにぎり",meaning:"Onigiri / Nasi kepal",type:"noun",
    example:"コンビニでおにぎりを買う。",exampleId:"Membeli onigiri di minimarket.",
    mnemonic:"おにぎり=nasi yang dikepal berbentuk segitiga = nasi kepal",
    wrongOpts:["おむすび","ライスボール","寿司"],stage:3,category:"makanan" },

  { jp:"弁当",read:"べんとう",meaning:"Bekal / Bento",type:"noun",
    example:"手作りのお弁当を持って行く。",exampleId:"Membawa bekal buatan sendiri.",
    mnemonic:"弁当=kotak makanan yang dibawa = bekal/bento",
    wrongOpts:["おにぎり","ランチ","食事"],stage:3,category:"makanan" },

  { jp:"飲食店",read:"いんしょくてん",meaning:"Restoran / Tempat makan",type:"noun",
    example:"近所に飲食店が多い。",exampleId:"Banyak restoran di sekitar sini.",
    mnemonic:"飲食=makan dan minum + 店=toko → toko makan minum = restoran",
    wrongOpts:["食堂","レストラン","居酒屋"],stage:3,category:"makanan" },

  { jp:"食堂",read:"しょくどう",meaning:"Kantin / Ruang makan",type:"noun",
    example:"会社の食堂でランチを食べる。",exampleId:"Makan siang di kantin kantor.",
    mnemonic:"食=makan + 堂=aula/ruangan → ruangan makan = kantin",
    wrongOpts:["食事処","レストラン","カフェテリア"],stage:3,category:"makanan" },

  { jp:"居酒屋",read:"いざかや",meaning:"Izakaya / Restoran minum Jepang",type:"noun",
    example:"仕事の後、居酒屋で飲む。",exampleId:"Minum di izakaya setelah bekerja.",
    mnemonic:"居=ada/tinggal + 酒=sake/minuman + 屋=tempat → tempat minum-minum = izakaya",
    wrongOpts:["バー","飲み屋","パブ"],stage:3,category:"makanan" },

]);



console.log("✅ vocab-batch21-shokuji-inshoku.js loaded — 80 kata makanan & minuman");
