// ═══════════════════════════════════════════════════════════════
//  vocab-batch7-kuliner.js — Kosakata N3: Makanan & Kuliner
//  80 kata | Batch 7 dari 8
//  Upload ke: nihongo-n3/data/vocab-batch7-kuliner.js
// ═══════════════════════════════════════════════════════════════
addVocab([

  // ── MAKANAN JEPANG UTAMA ──
  { jp:"寿司",read:"すし",meaning:"Sushi",type:"noun",
    example:"寿司屋でマグロを食べた。",exampleId:"Makan tuna di restoran sushi.",
    mnemonic:"寿=panjang umur + 司=mengatur → mengatur umur panjang = makanan istimewa",
    wrongOpts:["刺身","握り","手巻き"],stage:3,category:"kuliner" },

  { jp:"刺身",read:"さしみ",meaning:"Sashimi / Ikan mentah iris",type:"noun",
    example:"新鮮な刺身が食べたい。",exampleId:"Ingin makan sashimi yang segar.",
    mnemonic:"刺=menusuk + 身=daging → daging yang ditusuk (diiris tipis)",
    wrongOpts:["寿司","カルパッチョ","魚介"],stage:3,category:"kuliner" },

  { jp:"天ぷら",read:"てんぷら",meaning:"Tempura / Gorengan tepung",type:"noun",
    example:"エビの天ぷらが大好きだ。",exampleId:"Sangat suka tempura udang.",
    mnemonic:"天ぷら = tempura (dari kata Portugis temporal) → penggorengan adonan tipis",
    wrongOpts:["唐揚げ","フライ","素揚げ"],stage:3,category:"kuliner" },

  { jp:"味噌汁",read:"みそしる",meaning:"Sup miso",type:"noun",
    example:"朝食に味噌汁を飲む。",exampleId:"Minum sup miso saat sarapan.",
    mnemonic:"味噌=pasta kedelai + 汁=sup/kaldu → sup dari pasta kedelai",
    wrongOpts:["お吸い物","豚汁","すまし汁"],stage:3,category:"kuliner" },

  { jp:"うどん",read:"うどん",meaning:"Udon / Mi tebal Jepang",type:"noun",
    example:"温かいうどんを食べた。",exampleId:"Makan udon hangat.",
    mnemonic:"うどん = udon → mie tebal Jepang (mudah diingat)",
    wrongOpts:["そば","ラーメン","そうめん"],stage:3,category:"kuliner" },

  { jp:"そば",read:"そば",meaning:"Soba / Mi gandum",type:"noun",
    example:"年越しそばを食べる習慣がある。",exampleId:"Ada kebiasaan makan soba tahun baru.",
    mnemonic:"そば = soba → mie gandum hitam yang kenyal",
    wrongOpts:["うどん","ラーメン","きしめん"],stage:3,category:"kuliner" },

  { jp:"ラーメン",read:"らーめん",meaning:"Ramen / Mi kuah Jepang",type:"noun",
    example:"醤油ラーメンが一番好きだ。",exampleId:"Ramen kecap adalah favoritku.",
    mnemonic:"ラーメン = ramen → mie kuah lezat (berasal dari bahasa Tionghoa 拉麺)",
    wrongOpts:["うどん","つけ麺","つるつる"],stage:3,category:"kuliner" },

  { jp:"丼",read:"どんぶり",meaning:"Mangkuk besar / Makanan dalam mangkuk besar",type:"noun",
    example:"牛丼が人気メニューだ。",exampleId:"Beef bowl adalah menu populer.",
    mnemonic:"丼=どんぶり → mangkuk besar berisi nasi dan lauk = donburi",
    wrongOpts:["茶碗","鉢","お椀"],stage:3,category:"kuliner" },

  // ── CARA MEMASAK ──
  { jp:"煮る",read:"にる",meaning:"Merebus / Memasak dengan air",type:"verb",
    example:"野菜を煮てスープを作った。",exampleId:"Merebus sayuran untuk membuat sup.",
    mnemonic:"煮=火(api)+者(orang) → orang yang memasak dengan api = merebus",
    wrongOpts:["ゆでる","炊く","蒸す"],stage:3,category:"memasak" },

  { jp:"焼く",read:"やく",meaning:"Memanggang / Menggoreng tanpa minyak",type:"verb",
    example:"魚を焼いて食べた。",exampleId:"Memanggang ikan lalu makan.",
    mnemonic:"焼=api membakar → memasak dengan api langsung",
    wrongOpts:["揚げる","炒める","炙る"],stage:3,category:"memasak" },

  { jp:"揚げる",read:"あげる",meaning:"Menggoreng (dengan banyak minyak)",type:"verb",
    example:"唐揚げを揚げる。",exampleId:"Menggoreng ayam goreng.",
    mnemonic:"揚=terangkat → makanan terangkat di dalam minyak panas",
    wrongOpts:["炒める","焼く","炊く"],stage:3,category:"memasak" },

  { jp:"炒める",read:"いためる",meaning:"Menumis / Menggoreng sambil diaduk",type:"verb",
    example:"野菜を炒めて作った。",exampleId:"Membuat masakan dengan menumis sayuran.",
    mnemonic:"炒=炒める(itameru) → menumis dengan wajan panas",
    wrongOpts:["揚げる","焼く","炒る"],stage:3,category:"memasak" },

  { jp:"蒸す",read:"むす",meaning:"Mengukus",type:"verb",
    example:"茶碗蒸しを蒸した。",exampleId:"Mengukus chawan mushi.",
    mnemonic:"蒸=蒸気(steam/uap) → memasak dengan uap = mengukus",
    wrongOpts:["煮る","炊く","ゆでる"],stage:3,category:"memasak" },

  { jp:"切る",read:"きる",meaning:"Memotong",type:"verb",
    example:"玉ねぎを薄く切った。",exampleId:"Memotong bawang tipis-tipis.",
    mnemonic:"切=刀(pisau)+七(tujuh) → memotong dengan pisau",
    wrongOpts:["刻む","削る","薄切り"],stage:3,category:"memasak" },

  { jp:"混ぜる",read:"まぜる",meaning:"Mencampur / Mengaduk",type:"verb",
    example:"材料をよく混ぜてください。",exampleId:"Tolong aduk bahan dengan baik.",
    mnemonic:"混=campur + ぜる(jadi) → mencampur bahan jadi satu",
    wrongOpts:["かき混ぜる","合わせる","溶かす"],stage:3,category:"memasak" },

  { jp:"漬ける",read:"つける",meaning:"Merendam / Mengasinkan / Marinasi",type:"verb",
    example:"野菜を塩に漬けて保存する。",exampleId:"Merendam sayuran dalam garam untuk disimpan.",
    mnemonic:"漬=氵(air)+責(menuntut) → merendam dalam larutan",
    wrongOpts:["塩漬け","マリネ","煮浸し"],stage:3,category:"memasak" },

  { jp:"煮込む",read:"にこむ",meaning:"Memasak dengan api kecil lama / Merebus perlahan",type:"verb",
    example:"カレーを煮込んで作った。",exampleId:"Membuat kari dengan merebus perlahan.",
    mnemonic:"煮=merebus + 込む=memasukkan → memasukkan bahan dan merebus lama",
    wrongOpts:["煮る","炒め煮","蒸し煮"],stage:3,category:"memasak" },

  // ── RASA & TEKSTUR ──
  { jp:"甘い",read:"あまい",meaning:"Manis",type:"adj-i",
    example:"このケーキはとても甘い。",exampleId:"Kue ini sangat manis.",
    mnemonic:"甘=あま(amai) → rasa manis yang enak",
    wrongOpts:["砂糖","甘さ","甘味"],stage:3,category:"rasa" },

  { jp:"辛い",read:"からい",meaning:"Pedas / Asin",type:"adj-i",
    example:"このカレーは辛すぎる。",exampleId:"Kari ini terlalu pedas.",
    mnemonic:"辛=からい(karai) → pedas seperti cabai",
    wrongOpts:["塩辛い","激辛","苦い"],stage:3,category:"rasa" },

  { jp:"酸っぱい",read:"すっぱい",meaning:"Asam",type:"adj-i",
    example:"レモンは酸っぱい。",exampleId:"Lemon itu asam.",
    mnemonic:"酸っぱい=すっぱい(suppai) → rasa asam yang khas",
    wrongOpts:["苦い","渋い","えぐい"],stage:3,category:"rasa" },

  { jp:"苦い",read:"にがい",meaning:"Pahit",type:"adj-i",
    example:"コーヒーは苦いが好きだ。",exampleId:"Kopi pahit tapi suka.",
    mnemonic:"苦=にが(niga) → pahit seperti kopi tanpa gula",
    wrongOpts:["辛い","渋い","えぐい"],stage:3,category:"rasa" },

  { jp:"しょっぱい",read:"しょっぱい",meaning:"Asin (berlebihan)",type:"adj-i",
    example:"この料理はしょっぱすぎる。",exampleId:"Masakan ini terlalu asin.",
    mnemonic:"しょっぱい = shoppai → rasa asin yang berlebihan",
    wrongOpts:["塩辛い","辛い","塩味"],stage:3,category:"rasa" },

  { jp:"こってり",read:"こってり",meaning:"Berat / Berlemak / Kental",type:"adv",
    example:"こってりしたラーメンが好きだ。",exampleId:"Suka ramen yang kental berlemak.",
    mnemonic:"こってり = kotteri → rasa berat dan kaya lemak",
    wrongOpts:["あっさり","濃厚","クリーミー"],stage:3,category:"rasa" },

  { jp:"あっさり",read:"あっさり",meaning:"Ringan / Tidak berlemak / Segar",type:"adv",
    example:"あっさりした塩ラーメンが好きだ。",exampleId:"Suka ramen garam yang ringan.",
    mnemonic:"あっさり = assari → rasa yang ringan dan tidak berlemak",
    wrongOpts:["こってり","さっぱり","淡白"],stage:3,category:"rasa" },

  { jp:"さっぱり",read:"さっぱり",meaning:"Segar / Ringan / Tidak berminyak",type:"adv",
    example:"さっぱりした料理が食べたい。",exampleId:"Ingin makan masakan yang segar.",
    mnemonic:"さっぱり = sappari → segar seperti setelah makan buah",
    wrongOpts:["あっさり","すっきり","爽やか"],stage:3,category:"rasa" },

  { jp:"濃厚",read:"のうこう",meaning:"Kental / Pekat / Rich",type:"adj-na",
    example:"濃厚なチーズケーキを食べた。",exampleId:"Makan cheesecake yang sangat kental.",
    mnemonic:"濃=pekat + 厚=tebal → pekat dan tebal = kental/rich",
    wrongOpts:["クリーミー","こってり","まろやか"],stage:3,category:"rasa" },

  { jp:"まろやか",read:"まろやか",meaning:"Lembut / Halus / Mild",type:"adj-na",
    example:"まろやかな味のスープだ。",exampleId:"Supnya berasa lembut dan halus.",
    mnemonic:"まろやか = maroyaka → lembut di mulut seperti sutra",
    wrongOpts:["柔らかい","まった","まったり"],stage:3,category:"rasa" },

  // ── BAHAN MASAKAN ──
  { jp:"調味料",read:"ちょうみりょう",meaning:"Bumbu / Seasoning",type:"noun",
    example:"調味料を入れすぎた。",exampleId:"Terlalu banyak memasukkan bumbu.",
    mnemonic:"調=menyetel + 味=rasa + 料=bahan → bahan penyetel rasa = bumbu",
    wrongOpts:["香辛料","スパイス","薬味"],stage:3,category:"memasak" },

  { jp:"醤油",read:"しょうゆ",meaning:"Kecap asin Jepang / Soy sauce",type:"noun",
    example:"醤油を少し加える。",exampleId:"Menambahkan sedikit kecap.",
    mnemonic:"醤=pasta + 油=minyak → cairan fermentasi kedelai = kecap asin",
    wrongOpts:["味噌","たれ","ポン酢"],stage:3,category:"memasak" },

  { jp:"味噌",read:"みそ",meaning:"Pasta kedelai fermentasi / Miso",type:"noun",
    example:"味噌を溶かしてスープを作る。",exampleId:"Melarutkan miso untuk membuat sup.",
    mnemonic:"味=rasa + 噌=fermentasi → fermentasi yang menghasilkan rasa",
    wrongOpts:["醤油","豆腐","納豆"],stage:3,category:"memasak" },

  { jp:"出汁",read:"だし",meaning:"Kaldu / Stock (dari kombu, ikan, dll)",type:"noun",
    example:"昆布で出汁を取った。",exampleId:"Membuat kaldu dari rumput laut kombu.",
    mnemonic:"出汁=だし → kaldu dasar masakan Jepang",
    wrongOpts:["スープ","ブイヨン","コンソメ"],stage:3,category:"memasak" },

  { jp:"酢",read:"す",meaning:"Cuka",type:"noun",
    example:"酢を加えて酸味を出す。",exampleId:"Menambahkan cuka untuk memberi rasa asam.",
    mnemonic:"酢=酉(fermentasi)+乍(segera) → fermentasi yang cepat = cuka",
    wrongOpts:["レモン汁","ポン酢","梅干し"],stage:3,category:"memasak" },

  { jp:"砂糖",read:"さとう",meaning:"Gula",type:"noun",
    example:"砂糖を入れすぎて甘くなった。",exampleId:"Jadi manis karena terlalu banyak gula.",
    mnemonic:"砂=pasir + 糖=gula → butiran pasir manis = gula",
    wrongOpts:["塩","みりん","はちみつ"],stage:3,category:"memasak" },

  { jp:"塩",read:"しお",meaning:"Garam",type:"noun",
    example:"塩を少々加える。",exampleId:"Menambahkan sedikit garam.",
    mnemonic:"塩=土+鹵(garam) → mineral dari tanah = garam",
    wrongOpts:["砂糖","醤油","みりん"],stage:3,category:"memasak" },

  { jp:"みりん",read:"みりん",meaning:"Mirin / Sake manis untuk memasak",type:"noun",
    example:"照り焼きにみりんを使う。",exampleId:"Menggunakan mirin untuk teriyaki.",
    mnemonic:"みりん = mirin → sake manis untuk masakan Jepang",
    wrongOpts:["酒","醤油","甘酒"],stage:3,category:"memasak" },

  // ── RESTORAN & MAKAN ──
  { jp:"定食",read:"ていしょく",meaning:"Set meal / Makanan set",type:"noun",
    example:"ランチの定食を頼んだ。",exampleId:"Memesan set makan siang.",
    mnemonic:"定=tetap + 食=makan → makan yang sudah ditetapkan = set meal",
    wrongOpts:["セット","コース","弁当"],stage:3,category:"restoran" },

  { jp:"弁当",read:"べんとう",meaning:"Bekal / Bento",type:"noun",
    example:"母に弁当を作ってもらった。",exampleId:"Dibuatkan bekal oleh ibu.",
    mnemonic:"弁当=べんとう → bekal yang dikemas = bento (terkenal di dunia)",
    wrongOpts:["定食","おにぎり","サンドイッチ"],stage:3,category:"restoran" },

  { jp:"おにぎり",read:"おにぎり",meaning:"Onigiri / Nasi kepal",type:"noun",
    example:"コンビニでおにぎりを買った。",exampleId:"Membeli onigiri di minimarket.",
    mnemonic:"おにぎり = onigiri → nasi yang dikepal (dari 握る=menggenggam)",
    wrongOpts:["寿司","弁当","いなり"],stage:3,category:"kuliner" },

  { jp:"居酒屋",read:"いざかや",meaning:"Izakaya / Bar Jepang",type:"noun",
    example:"会社の同僚と居酒屋に行った。",exampleId:"Pergi ke izakaya dengan rekan kerja.",
    mnemonic:"居=tinggal + 酒屋=toko minum → tempat tinggal sambil minum = bar Jepang",
    wrongOpts:["バー","酒場","飲み屋"],stage:3,category:"restoran" },

  { jp:"注文",read:"ちゅうもん",meaning:"Memesan / Pesanan",type:"noun",
    example:"料理を注文する。",exampleId:"Memesan makanan.",
    mnemonic:"注=menuangkan + 文=tulisan/pesan → menulis/menyampaikan pesanan",
    wrongOpts:["オーダー","依頼","要望"],stage:3,category:"restoran" },

  { jp:"会計",read:"かいけい",meaning:"Perhitungan tagihan / Kasir",type:"noun",
    example:"食事後に会計をした。",exampleId:"Membayar setelah makan.",
    mnemonic:"会=bertemu + 計=menghitung → bertemu untuk menghitung = kasir",
    wrongOpts:["お会計","レジ","支払い"],stage:3,category:"restoran" },

  { jp:"おかわり",read:"おかわり",meaning:"Tambah porsi / Refill",type:"noun",
    example:"ご飯のおかわりをした。",exampleId:"Minta tambah nasi.",
    mnemonic:"お+代わり → pengganti/tambahan yang diminta",
    wrongOpts:["追加","足す","追い飯"],stage:3,category:"restoran" },

  { jp:"食欲",read:"しょくよく",meaning:"Nafsu makan",type:"noun",
    example:"体調が悪くて食欲がない。",exampleId:"Tidak ada nafsu makan karena tidak sehat.",
    mnemonic:"食=makan + 欲=nafsu → nafsu untuk makan",
    wrongOpts:["食べたい","胃袋","空腹"],stage:3,category:"restoran" },

  // ── MAKANAN & MINUMAN UMUM ──
  { jp:"野菜",read:"やさい",meaning:"Sayuran",type:"noun",
    example:"毎日野菜をたくさん食べる。",exampleId:"Makan banyak sayuran setiap hari.",
    mnemonic:"野=padang + 菜=tanaman hijau → tanaman hijau dari padang = sayuran",
    wrongOpts:["果物","穀物","豆類"],stage:3,category:"kuliner" },

  { jp:"果物",read:"くだもの",meaning:"Buah-buahan",type:"noun",
    example:"旬の果物が一番おいしい。",exampleId:"Buah musiman paling enak.",
    mnemonic:"果=buah + 物=benda → benda yang berbuah = buah-buahan",
    wrongOpts:["野菜","フルーツ","木の実"],stage:3,category:"kuliner" },

  { jp:"肉",read:"にく",meaning:"Daging",type:"noun",
    example:"牛肉を薄く切った。",exampleId:"Memotong daging sapi tipis-tipis.",
    mnemonic:"肉=にく(niku) → daging (pendek, mudah diingat)",
    wrongOpts:["魚介","豚肉","鶏肉"],stage:3,category:"kuliner" },

  { jp:"魚介",read:"ぎょかい",meaning:"Hasil laut / Seafood",type:"noun",
    example:"魚介類が豊富な地域だ。",exampleId:"Daerah yang kaya hasil laut.",
    mnemonic:"魚=ikan + 介=cangkang/bintang laut → ikan dan hasil laut",
    wrongOpts:["海鮮","シーフード","魚類"],stage:3,category:"kuliner" },

  { jp:"穀物",read:"こくもつ",meaning:"Biji-bijian / Serealia",type:"noun",
    example:"穀物は主食の基本だ。",exampleId:"Biji-bijian adalah dasar makanan pokok.",
    mnemonic:"穀=biji padi + 物=benda → benda biji-bijian",
    wrongOpts:["米","麦","雑穀"],stage:3,category:"kuliner" },

  { jp:"乳製品",read:"にゅうせいひん",meaning:"Produk susu / Dairy",type:"noun",
    example:"乳製品はカルシウムが豊富だ。",exampleId:"Produk susu kaya kalsium.",
    mnemonic:"乳=susu + 製品=produk → produk dari susu",
    wrongOpts:["チーズ","バター","ヨーグルト"],stage:3,category:"kuliner" },

  { jp:"飲み物",read:"のみもの",meaning:"Minuman",type:"noun",
    example:"何か飲み物を注文しますか。",exampleId:"Apakah ingin memesan minuman?",
    mnemonic:"飲み=minum + 物=benda → benda yang diminum = minuman",
    wrongOpts:["ドリンク","飲料","液体"],stage:3,category:"kuliner" },

  // ── KONDISI MAKANAN ──
  { jp:"新鮮",read:"しんせん",meaning:"Segar / Fresh",type:"adj-na",
    example:"新鮮な魚が一番おいしい。",exampleId:"Ikan segar paling enak.",
    mnemonic:"新=baru + 鮮=segar → baru dan segar = fresh",
    wrongOpts:["生きのいい","フレッシュ","採れたて"],stage:3,category:"kuliner" },

  { jp:"旬",read:"しゅん",meaning:"Musim panen / Waktu terbaik bahan makanan",type:"noun",
    example:"旬の食材を使った料理が好きだ。",exampleId:"Suka masakan yang menggunakan bahan musiman.",
    mnemonic:"旬=10 hari (musim panen biasanya berlangsung singkat) → musim terbaik bahan",
    wrongOpts:["季節","産地","採れたて"],stage:3,category:"kuliner" },

  { jp:"腐る",read:"くさる",meaning:"Busuk / Membusuk",type:"verb",
    example:"食材が腐ってしまった。",exampleId:"Bahan makanan jadi busuk.",
    mnemonic:"腐=くさ(kusa=bau busuk) + る → menjadi berbau busuk = membusuk",
    wrongOpts:["傷む","劣化する","傷つく"],stage:3,category:"kuliner" },

  { jp:"保存",read:"ほぞん",meaning:"Menyimpan / Pengawetan",type:"noun",
    example:"冷蔵庫で食材を保存する。",exampleId:"Menyimpan bahan makanan di kulkas.",
    mnemonic:"保=menjaga + 存=ada/tetap → menjaga agar tetap ada = menyimpan",
    wrongOpts:["冷凍","冷蔵","貯蔵"],stage:3,category:"kuliner" },

  // ── PERALATAN MASAK ──
  { jp:"鍋",read:"なべ",meaning:"Panci / Pot",type:"noun",
    example:"大きな鍋でシチューを作った。",exampleId:"Membuat stew di panci besar.",
    mnemonic:"鍋=金属(logam)+ハ(isi yang meluap) → wadah logam untuk memasak",
    wrongOpts:["フライパン","ボウル","やかん"],stage:3,category:"memasak" },

  { jp:"包丁",read:"ほうちょう",meaning:"Pisau dapur",type:"noun",
    example:"包丁を研いで切れ味をよくした。",exampleId:"Mengasah pisau untuk mempertajamnya.",
    mnemonic:"包=membungkus + 丁=alat → alat untuk memotong dan membungkus",
    wrongOpts:["ナイフ","刃物","出刃"],stage:3,category:"memasak" },

  { jp:"まな板",read:"まないた",meaning:"Talenan",type:"noun",
    example:"まな板の上で野菜を切る。",exampleId:"Memotong sayuran di atas talenan.",
    mnemonic:"まな板=まな(mata/lihat)+板(papan) → papan yang digunakan saat melihat dan memotong",
    wrongOpts:["カッティングボード","俎板","台"],stage:3,category:"memasak" },

  { jp:"フライパン",read:"ふらいぱん",meaning:"Penggorengan / Wajan datar",type:"noun",
    example:"フライパンで卵を焼いた。",exampleId:"Menggoreng telur dengan wajan.",
    mnemonic:"フライパン = frying pan → wajan untuk menggoreng (dari bahasa Inggris)",
    wrongOpts:["鍋","中華鍋","鉄板"],stage:3,category:"memasak" },

  // ── GIZI & KESEHATAN MAKANAN ──
  { jp:"栄養",read:"えいよう",meaning:"Gizi / Nutrisi",type:"noun",
    example:"栄養バランスを考えて食べる。",exampleId:"Makan dengan mempertimbangkan keseimbangan gizi.",
    mnemonic:"栄=berkembang + 養=memelihara → memelihara pertumbuhan = nutrisi",
    wrongOpts:["カロリー","ビタミン","ミネラル"],stage:3,category:"kuliner" },

  { jp:"カロリー",read:"かろりー",meaning:"Kalori",type:"noun",
    example:"カロリーが高い食べ物を控える。",exampleId:"Mengurangi makanan tinggi kalori.",
    mnemonic:"カロリー = calorie → kalori (dari bahasa Inggris/Perancis)",
    wrongOpts:["熱量","エネルギー","脂質"],stage:3,category:"kuliner" },

  { jp:"食物繊維",read:"しょくもつせんい",meaning:"Serat pangan / Dietary fiber",type:"noun",
    example:"食物繊維が豊富な野菜を食べる。",exampleId:"Makan sayuran kaya serat pangan.",
    mnemonic:"食物=makanan + 繊維=serat → serat yang ada dalam makanan",
    wrongOpts:["繊維","食繊維","植物繊維"],stage:3,category:"kuliner" },

  { jp:"消化",read:"しょうか",meaning:"Pencernaan / Mencerna",type:"noun",
    example:"消化に良い食べ物を食べる。",exampleId:"Makan makanan yang mudah dicerna.",
    mnemonic:"消=menghilangkan + 化=mengubah → mengubah dan menghilangkan = mencerna",
    wrongOpts:["吸収","代謝","分解"],stage:3,category:"kuliner" },

  // ── MAKANAN KHAS DAERAH ──
  { jp:"郷土料理",read:"きょうどりょうり",meaning:"Masakan khas daerah / Masakan lokal",type:"noun",
    example:"地方の郷土料理を楽しんだ。",exampleId:"Menikmati masakan khas daerah.",
    mnemonic:"郷土=kampung halaman + 料理=masakan → masakan kampung halaman = khas daerah",
    wrongOpts:["地元料理","伝統料理","名物料理"],stage:3,category:"kuliner" },

  { jp:"名物",read:"めいぶつ",meaning:"Spesialitas / Produk andalan",type:"noun",
    example:"この町の名物は何ですか。",exampleId:"Apa spesialitas kota ini?",
    mnemonic:"名=terkenal + 物=benda → benda yang terkenal = spesialitas",
    wrongOpts:["特産品","名産","土産"],stage:3,category:"kuliner" },

  { jp:"お土産",read:"おみやげ",meaning:"Oleh-oleh / Souvenir",type:"noun",
    example:"京都旅行のお土産を買った。",exampleId:"Membeli oleh-oleh dari perjalanan ke Kyoto.",
    mnemonic:"お土産=omiyage → oleh-oleh khas dari suatu tempat",
    wrongOpts:["記念品","土産物","プレゼント"],stage:3,category:"kuliner" },

  { jp:"食文化",read:"しょくぶんか",meaning:"Budaya makan / Food culture",type:"noun",
    example:"日本の食文化は世界的に有名だ。",exampleId:"Budaya makan Jepang terkenal di seluruh dunia.",
    mnemonic:"食=makan + 文化=budaya → budaya yang berkaitan dengan makan",
    wrongOpts:["料理文化","食習慣","グルメ"],stage:3,category:"kuliner" },

  { jp:"和食",read:"わしょく",meaning:"Masakan Jepang",type:"noun",
    example:"和食はユネスコ無形文化遺産だ。",exampleId:"Masakan Jepang adalah warisan budaya takbenda UNESCO.",
    mnemonic:"和=Jepang/harmoni + 食=makanan → makanan khas Jepang",
    wrongOpts:["洋食","中華","日本料理"],stage:3,category:"kuliner" },

  { jp:"洋食",read:"ようしょく",meaning:"Masakan bergaya Barat",type:"noun",
    example:"洋食レストランでハンバーグを食べた。",exampleId:"Makan hamburger steak di restoran Western.",
    mnemonic:"洋=Barat/Eropa + 食=makanan → makanan bergaya Barat",
    wrongOpts:["和食","外食","中華"],stage:3,category:"kuliner" },

  { jp:"揚げる",read:"あげる",meaning:"Menggoreng (deep fry)",type:"verb",
    example:"天ぷらを揚げる。",exampleId:"Menggoreng tempura.",
    mnemonic:"揚=mengangkat+る → mengangkat makanan dari minyak = menggoreng",
    wrongOpts:["焼く","炒める","蒸す"],stage:3,category:"memasak" },

  { jp:"煮る",read:"にる",meaning:"Merebus / Memasak dengan air",type:"verb",
    example:"野菜を柔らかくなるまで煮る。",exampleId:"Merebus sayuran hingga lunak.",
    mnemonic:"煮=4点火(api)+者(orang) → orang yang memasak dengan api di bawah = merebus",
    wrongOpts:["茹でる","炊く","蒸す"],stage:3,category:"memasak" },

  { jp:"蒸す",read:"むす",meaning:"Mengukus",type:"verb",
    example:"蒸し器で野菜を蒸した。",exampleId:"Mengukus sayuran dengan kukusan.",
    mnemonic:"蒸=uap+す → memasak dengan uap = mengukus",
    wrongOpts:["煮る","炒める","焼く"],stage:3,category:"memasak" },

  { jp:"炒める",read:"いためる",meaning:"Menumis / Menggoreng dengan sedikit minyak",type:"verb",
    example:"野菜と肉を炒めた。",exampleId:"Menumis sayuran dan daging.",
    mnemonic:"炒=api kecil → memasak dengan api kecil dan sedikit minyak = menumis",
    wrongOpts:["揚げる","焼く","煮る"],stage:3,category:"memasak" },

  { jp:"漬ける",read:"つける",meaning:"Mengasinkan / Merendam / Memfermentasi",type:"verb",
    example:"梅を塩に漬けた。",exampleId:"Merendam buah plum dalam garam.",
    mnemonic:"漬=氵(air)+責(tanggung jawab) → merendam dalam cairan = mengasinkan",
    wrongOpts:["浸す","塗る","かける"],stage:3,category:"memasak" },

  { jp:"刺身",read:"さしみ",meaning:"Sashimi / Ikan mentah iris",type:"noun",
    example:"新鮮な刺身を食べた。",exampleId:"Makan sashimi yang segar.",
    mnemonic:"刺=menusuk+身=tubuh → menusuk ikan langsung = sashimi mentah",
    wrongOpts:["寿司","天ぷら","焼き魚"],stage:3,category:"kuliner" },

  { jp:"丼",read:"どんぶり",meaning:"Semangkuk nasi dengan topping / Mangkuk besar",type:"noun",
    example:"牛丼を注文した。",exampleId:"Memesan gyudon (nasi sapi).",
    mnemonic:"丼=mangkuk besar → nasi dengan lauk di atas dalam mangkuk besar",
    wrongOpts:["茶碗","鍋","お椀"],stage:3,category:"kuliner" },

  { jp:"食欲",read:"しょくよく",meaning:"Nafsu makan / Selera makan",type:"noun",
    example:"体調が悪くて食欲がない。",exampleId:"Tidak ada nafsu makan karena tidak enak badan.",
    mnemonic:"食=makan+欲=keinginan → keinginan untuk makan = nafsu makan",
    wrongOpts:["食事","食べ物","空腹"],stage:3,category:"rasa" },

  { jp:"後味",read:"あとあじ",meaning:"After taste / Rasa yang tersisa",type:"noun",
    example:"このワインは後味がいい。",exampleId:"Anggur ini memiliki after taste yang enak.",
    mnemonic:"後=setelah+味=rasa → rasa yang tersisa setelah menelan = after taste",
    wrongOpts:["余韻","残味","余味"],stage:3,category:"rasa" },

  { jp:"予約",read:"よやく",meaning:"Reservasi / Pemesanan tempat",type:"noun",
    example:"レストランを予約した。",exampleId:"Membuat reservasi restoran.",
    mnemonic:"予=sebelumnya+約=janji → membuat janji sebelumnya = reservasi",
    wrongOpts:["注文","申込み","手配"],stage:3,category:"restoran" },

  { jp:"お代わり",read:"おかわり",meaning:"Tambah porsi / Refill",type:"noun",
    example:"ご飯のお代わりをもらった。",exampleId:"Meminta tambah nasi.",
    mnemonic:"代=ganti+わり=berganti → ganti dengan porsi baru = tambah porsi",
    wrongOpts:["おまけ","追加","お替わり"],stage:3,category:"restoran" },

  { jp:"割り勘",read:"わりかん",meaning:"Bayar sendiri-sendiri / Dutch pay",type:"noun",
    example:"今日は割り勘にしよう。",exampleId:"Hari ini kita bayar sendiri-sendiri ya.",
    mnemonic:"割=membagi+勘=perhitungan → membagi perhitungan = dutch pay",
    wrongOpts:["おごり","奢り","折半"],stage:3,category:"restoran" },

]);
