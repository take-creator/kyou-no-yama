const mountains = [
  {
    id: "kongo",
    name: "金剛山",
    area: "大阪府千早赤阪村・奈良県御所市",
    elevation: 1125,
    trailheadName: "金剛登山口",
    trailheadLat: 34.4233,
    trailheadLng: 135.6562,
    estimatedAccessMinutesFromOsaka: 95,
    hikingMinutes: 210,
    difficulty: "初級〜中級",
    appeal: "関西を代表する低山。ルートが豊富で、山頂周辺の達成感も大きい一座です。",
    highlights: ["四季の変化がはっきりしていて何度でも歩きやすい", "売店や休憩ポイントがあり初挑戦でも計画しやすい", "大阪側から公共交通で向かいやすい"],
    cautions: ["冬季は凍結や積雪があるため軽アイゼンが必要な日があります", "人気ルートでも分岐が多いので地図アプリを併用してください"],
  },
  {
    id: "ikoma",
    name: "生駒山",
    area: "大阪府東大阪市・奈良県生駒市",
    elevation: 642,
    trailheadName: "枚岡駅",
    trailheadLat: 34.6685,
    trailheadLng: 135.6508,
    estimatedAccessMinutesFromOsaka: 45,
    hikingMinutes: 150,
    difficulty: "初心者",
    appeal: "大阪市内から近く、眺望とアクセスの良さを両立した日帰り向きの山です。",
    highlights: ["駅から歩き始めやすい", "大阪平野を見渡せるポイントが多い", "短めにも長めにも調整しやすい"],
    cautions: ["舗装路と山道が混ざるため靴は歩きやすさ重視がおすすめです", "休日は山上周辺が混みやすいです"],
  },
  {
    id: "ponpon",
    name: "ポンポン山",
    area: "大阪府高槻市・京都市西京区",
    elevation: 679,
    trailheadName: "神峯山寺",
    trailheadLat: 34.9041,
    trailheadLng: 135.6055,
    estimatedAccessMinutesFromOsaka: 80,
    hikingMinutes: 220,
    difficulty: "初級〜中級",
    appeal: "静かな森歩きと山頂の開放感が魅力。関西の定番ハイキング先です。",
    highlights: ["森の道が長く、落ち着いた山歩きができる", "山頂は広く休憩しやすい", "高槻方面からアクセスしやすい"],
    cautions: ["登山口までのバス本数を事前に確認してください", "雨上がりはぬかるみやすい区間があります"],
  },
  {
    id: "satsuki",
    name: "五月山",
    area: "大阪府池田市",
    elevation: 315,
    trailheadName: "五月山公園",
    trailheadLat: 34.8267,
    trailheadLng: 135.4254,
    estimatedAccessMinutesFromOsaka: 35,
    hikingMinutes: 90,
    difficulty: "初心者",
    appeal: "短時間で自然と展望を楽しめる、思い立った日に行きやすい里山です。",
    highlights: ["大阪市内から非常に近い", "短いコースでも展望を楽しめる", "公園と組み合わせやすい"],
    cautions: ["短い山でも夏場は暑さ対策が必要です", "車道沿いを歩く区間では通行に注意してください"],
  },
  {
    id: "konosan",
    name: "交野山",
    area: "大阪府交野市",
    elevation: 341,
    trailheadName: "いきものふれあいの里",
    trailheadLat: 34.7795,
    trailheadLng: 135.6892,
    estimatedAccessMinutesFromOsaka: 55,
    hikingMinutes: 120,
    difficulty: "初心者",
    appeal: "山頂の巨岩からの眺めが印象的。短めでも満足感のある低山です。",
    highlights: ["山頂の観音岩から見晴らしが良い", "自然観察と組み合わせやすい", "半日ハイクに向いている"],
    cautions: ["岩場周辺は足元に注意してください", "施設の開館日や駐車場利用条件を確認してください"],
  },
  {
    id: "rokko",
    name: "六甲山",
    area: "兵庫県神戸市",
    elevation: 931,
    trailheadName: "阪急芦屋川駅",
    trailheadLat: 34.7351,
    trailheadLng: 135.3001,
    estimatedAccessMinutesFromOsaka: 45,
    hikingMinutes: 260,
    difficulty: "中級",
    appeal: "都市近郊とは思えない本格感。眺望、岩場、達成感を味わえる定番コースです。",
    highlights: ["芦屋川から王道ルートに入りやすい", "風吹岩など見どころが多い", "山上施設や下山ルートの選択肢が多い"],
    cautions: ["人気ルートでも行程は長めです", "岩場や急登があるため初心者だけの無理な計画は避けてください"],
  },
  {
    id: "maya",
    name: "摩耶山",
    area: "兵庫県神戸市",
    elevation: 702,
    trailheadName: "新神戸駅",
    trailheadLat: 34.7068,
    trailheadLng: 135.1951,
    estimatedAccessMinutesFromOsaka: 50,
    hikingMinutes: 230,
    difficulty: "初級〜中級",
    appeal: "新幹線駅から歩ける山。布引の滝と掬星台の眺望が強い魅力です。",
    highlights: ["新神戸駅からそのまま歩き出せる", "布引の滝や貯水池を楽しめる", "掬星台から神戸方面の展望が良い"],
    cautions: ["登りはしっかり標高差があります", "夕景狙いの場合は下山手段とライトを準備してください"],
  },
  {
    id: "katsuragi",
    name: "大和葛城山",
    area: "奈良県御所市・大阪府千早赤阪村",
    elevation: 959,
    trailheadName: "葛城山ロープウェイ前",
    trailheadLat: 34.4556,
    trailheadLng: 135.6903,
    estimatedAccessMinutesFromOsaka: 100,
    hikingMinutes: 190,
    difficulty: "初級〜中級",
    appeal: "山頂部が広く、季節の花と展望が楽しめる気持ちの良い山です。",
    highlights: ["山頂の開放感が大きい", "ロープウェイを組み合わせて調整しやすい", "金剛山方面の眺めも楽しめる"],
    cautions: ["ツツジの時期は混雑しやすいです", "ロープウェイ運行状況を事前に確認してください"],
  },
  {
    id: "minoh",
    name: "箕面山",
    area: "大阪府箕面市",
    elevation: 355,
    trailheadName: "阪急箕面駅",
    trailheadLat: 34.8342,
    trailheadLng: 135.4686,
    estimatedAccessMinutesFromOsaka: 35,
    hikingMinutes: 110,
    difficulty: "初心者",
    appeal: "駅近で滝道から自然に入れる、初めてのハイキングにも選びやすい山です。",
    highlights: ["箕面大滝と合わせて歩ける", "舗装路中心でも自然を感じやすい", "飲食店や休憩場所が比較的多い"],
    cautions: ["滝道は観光客も多いです", "山道へ入る場合は標識と分岐を確認してください"],
  },
  {
    id: "iimori",
    name: "飯盛山",
    area: "大阪府大東市・四條畷市",
    elevation: 314,
    trailheadName: "四条畷駅",
    trailheadLat: 34.7311,
    trailheadLng: 135.6398,
    estimatedAccessMinutesFromOsaka: 35,
    hikingMinutes: 110,
    difficulty: "初心者",
    appeal: "短時間で登れて眺めも良い、午後からでも計画しやすい身近な低山です。",
    highlights: ["駅からアクセスしやすい", "山頂付近から大阪方面を見渡せる", "歴史散策と組み合わせやすい"],
    cautions: ["住宅地から山道へ入るため道順を確認してください", "夏場は低山特有の暑さに注意してください"],
  },
  {
    id: "wakakusa",
    name: "若草山",
    area: "奈良県奈良市",
    elevation: 342,
    trailheadName: "若草山麓ゲート",
    trailheadLat: 34.6889,
    trailheadLng: 135.8502,
    estimatedAccessMinutesFromOsaka: 80,
    hikingMinutes: 90,
    difficulty: "初心者",
    appeal: "奈良公園と合わせて歩ける、展望重視のゆるい山歩き向きの一座です。",
    highlights: ["奈良市街と生駒方面を見渡せる", "観光とハイキングを一緒に楽しみやすい", "短時間でも満足感が出やすい"],
    cautions: ["開山期間や入山時間を事前に確認してください", "観光客が多い日は歩くペースに余裕を見てください"],
  },
  {
    id: "otowa",
    name: "音羽山",
    area: "京都府京都市・滋賀県大津市",
    elevation: 593,
    trailheadName: "京阪大谷駅",
    trailheadLat: 34.9949,
    trailheadLng: 135.8542,
    estimatedAccessMinutesFromOsaka: 85,
    hikingMinutes: 170,
    difficulty: "初級〜中級",
    appeal: "京都と大津の境を歩く、駅から入りやすい展望ハイクです。",
    highlights: ["公共交通だけで計画しやすい", "琵琶湖方面の眺めを楽しめる", "京都東山方面と組み合わせやすい"],
    cautions: ["分岐が多いのでルート確認が必要です", "雨上がりは滑りやすい区間があります"],
  },
  {
    id: "kisen",
    name: "紀泉アルプス",
    area: "大阪府阪南市・和歌山県和歌山市",
    elevation: 420,
    trailheadName: "山中渓駅",
    trailheadLat: 34.3259,
    trailheadLng: 135.268,
    estimatedAccessMinutesFromOsaka: 85,
    hikingMinutes: 210,
    difficulty: "初級〜中級",
    appeal: "大阪南部から和歌山県境へ抜ける、明るい尾根歩きが魅力の山域です。",
    highlights: ["駅から歩き出せる", "低山ながら縦走気分を味わえる", "春は桜と組み合わせやすい"],
    cautions: ["縦走する場合は下山駅と時間を先に決めてください", "夏場は日差しと水分不足に注意してください"],
  },
  {
    id: "hiei",
    name: "比叡山",
    area: "京都府京都市・滋賀県大津市",
    elevation: 848,
    trailheadName: "修学院駅",
    trailheadLat: 35.0508,
    trailheadLng: 135.7919,
    estimatedAccessMinutesFromOsaka: 95,
    hikingMinutes: 240,
    difficulty: "初級〜中級",
    appeal: "京都側から登れて、歴史ある山上エリアまで歩ける関西定番の山です。",
    highlights: ["京都市内からアクセスしやすい", "山上の寺社や展望と組み合わせやすい", "下山手段の選択肢が多い"],
    cautions: ["標高差があるため行動時間に余裕を見てください", "山上施設の営業時間を確認してください"],
  },
  {
    id: "konze",
    name: "金勝アルプス",
    area: "滋賀県栗東市",
    elevation: 605,
    trailheadName: "上桐生バス停",
    trailheadLat: 34.9646,
    trailheadLng: 136.015,
    estimatedAccessMinutesFromOsaka: 110,
    hikingMinutes: 240,
    difficulty: "初級〜中級",
    appeal: "奇岩と展望が楽しい、低山ながら冒険感のある滋賀の人気山域です。",
    highlights: ["岩場と展望の変化が大きい", "写真に残るポイントが多い", "日帰りで非日常感を味わえる"],
    cautions: ["岩場では手を使う場面があります", "バス時刻と駐車場の混雑を確認してください"],
  },
  {
    id: "takamikura",
    name: "高御位山",
    area: "兵庫県加古川市・高砂市",
    elevation: 304,
    trailheadName: "鹿嶋神社",
    trailheadLat: 34.7891,
    trailheadLng: 134.8047,
    estimatedAccessMinutesFromOsaka: 115,
    hikingMinutes: 150,
    difficulty: "初級〜中級",
    appeal: "播磨アルプスの岩尾根と展望を短時間で楽しめる山です。",
    highlights: ["低山でも岩尾根の開放感がある", "山頂から播磨平野を見渡せる", "半日ハイクにしやすい"],
    cautions: ["岩の上は滑りやすいので靴選びが重要です", "夏は日陰が少ない区間があります"],
  },
  {
    id: "horai",
    name: "蓬莱山",
    area: "滋賀県大津市",
    elevation: 1174,
    trailheadName: "びわ湖バレイ山麓駅",
    trailheadLat: 35.1886,
    trailheadLng: 135.8871,
    estimatedAccessMinutesFromOsaka: 125,
    hikingMinutes: 240,
    difficulty: "初級〜中級",
    appeal: "琵琶湖を大きく見下ろせる、山上の開放感が強い一座です。",
    highlights: ["琵琶湖の展望が大きい", "ロープウェイ利用で計画を調整しやすい", "稜線の雰囲気を味わえる"],
    cautions: ["風が強い日は体感温度が下がります", "ロープウェイ運行状況を確認してください"],
  },
  {
    id: "bentendake",
    name: "弁天岳",
    area: "和歌山県高野町",
    elevation: 984,
    trailheadName: "高野山駅",
    trailheadLat: 34.2334,
    trailheadLng: 135.5867,
    estimatedAccessMinutesFromOsaka: 130,
    hikingMinutes: 90,
    difficulty: "初心者",
    appeal: "高野山観光と合わせて歩きやすい、静かな短時間ハイクです。",
    highlights: ["高野山エリアと組み合わせやすい", "歩行時間が短めで計画しやすい", "山上の涼しさを感じやすい"],
    cautions: ["寺社エリアではマナーを守って歩いてください", "冬季は冷え込みや凍結に注意してください"],
  },
  {
    id: "atago",
    name: "愛宕山",
    area: "京都府京都市",
    elevation: 924,
    trailheadName: "清滝バス停",
    trailheadLat: 35.0465,
    trailheadLng: 135.6696,
    estimatedAccessMinutesFromOsaka: 140,
    hikingMinutes: 300,
    difficulty: "中級",
    appeal: "京都の山らしい静けさと登りごたえがある、達成感の大きい山です。",
    highlights: ["表参道は道が分かりやすい", "山頂付近の神社まで歩く目的が明確", "京都北山らしい雰囲気を味わえる"],
    cautions: ["登りが長く体力が必要です", "冬季は積雪や凍結への備えが必要です"],
  },
  {
    id: "seppiko",
    name: "雪彦山",
    area: "兵庫県姫路市",
    elevation: 915,
    trailheadName: "雪彦山登山口",
    trailheadLat: 35.071,
    trailheadLng: 134.6625,
    estimatedAccessMinutesFromOsaka: 150,
    hikingMinutes: 300,
    difficulty: "中級",
    appeal: "岩場と急登が続く、本格的な山歩きを味わいたい人向けの山です。",
    highlights: ["岩峰の迫力がある", "短い距離でも登山感が強い", "播磨方面の山深さを感じられる"],
    cautions: ["岩場や鎖場に不安がある場合は避けてください", "雨天や雨上がりは難度が上がります"],
  },
  {
    id: "ibuki",
    name: "伊吹山",
    area: "滋賀県米原市",
    elevation: 1377,
    trailheadName: "伊吹山登山口",
    trailheadLat: 35.3863,
    trailheadLng: 136.3917,
    estimatedAccessMinutesFromOsaka: 155,
    hikingMinutes: 360,
    difficulty: "中級",
    appeal: "関西から狙いやすい百名山。大きな標高差と展望が魅力です。",
    highlights: ["山頂からの眺望が広い", "季節の花を楽しめる", "達成感のある日帰り登山になる"],
    cautions: ["標高差が大きく体力が必要です", "強風や天候変化に注意してください"],
  },
  {
    id: "buna",
    name: "武奈ヶ岳",
    area: "滋賀県大津市",
    elevation: 1214,
    trailheadName: "坊村",
    trailheadLat: 35.2292,
    trailheadLng: 135.855,
    estimatedAccessMinutesFromOsaka: 160,
    hikingMinutes: 360,
    difficulty: "中級",
    appeal: "比良山系らしい稜線と山頂の開放感を味わえる人気の山です。",
    highlights: ["山頂の展望が良い", "本格的な山歩きの満足感がある", "比良山系の自然をしっかり楽しめる"],
    cautions: ["行程が長く早出が必要です", "天候悪化時は稜線で風を受けやすいです"],
  },
  {
    id: "soni",
    name: "倶留尊山",
    area: "奈良県曽爾村",
    elevation: 1038,
    trailheadName: "曽爾高原",
    trailheadLat: 34.5138,
    trailheadLng: 136.1369,
    estimatedAccessMinutesFromOsaka: 170,
    hikingMinutes: 210,
    difficulty: "初級〜中級",
    appeal: "曽爾高原の草原風景と山歩きを合わせて楽しめる奈良東部の名所です。",
    highlights: ["草原の景色が印象的", "秋のススキ時期が人気", "短めでも遠出感がある"],
    cautions: ["観光シーズンは駐車場が混みやすいです", "一部に急な登りがあります"],
  },
  {
    id: "aoba",
    name: "青葉山",
    area: "京都府舞鶴市",
    elevation: 693,
    trailheadName: "松尾寺",
    trailheadLat: 35.5095,
    trailheadLng: 135.4854,
    estimatedAccessMinutesFromOsaka: 180,
    hikingMinutes: 240,
    difficulty: "中級",
    appeal: "若狭湾方面の景色と双耳峰の山容が魅力の北部エリアの山です。",
    highlights: ["海の見える展望がある", "京都北部まで足を伸ばす特別感がある", "変化のある山道を楽しめる"],
    cautions: ["遠方なので出発時間に余裕が必要です", "岩場や急坂では慎重に歩いてください"],
  },
  {
    id: "ryujin",
    name: "龍神岳",
    area: "和歌山県田辺市",
    elevation: 1382,
    trailheadName: "ごまさんスカイタワー",
    trailheadLat: 34.0573,
    trailheadLng: 135.5639,
    estimatedAccessMinutesFromOsaka: 190,
    hikingMinutes: 70,
    difficulty: "初心者",
    appeal: "和歌山県最高峰を短時間で歩ける、遠出ドライブ向きの山です。",
    highlights: ["短い歩行で高標高の空気を味わえる", "護摩壇山と合わせて歩きやすい", "紀伊山地の展望を楽しめる"],
    cautions: ["アクセス道路の通行状況を確認してください", "標高が高く天候が変わりやすいです"],
  },
  {
    id: "odaigahara",
    name: "大台ヶ原",
    area: "奈良県上北山村",
    elevation: 1695,
    trailheadName: "大台ヶ原ビジターセンター",
    trailheadLat: 34.1847,
    trailheadLng: 136.1094,
    estimatedAccessMinutesFromOsaka: 210,
    hikingMinutes: 240,
    difficulty: "初級〜中級",
    appeal: "関西屈指の高原歩き。大蛇嵓など見どころが多い遠征向きの山です。",
    highlights: ["標高の高い自然を手軽に味わえる", "大蛇嵓の展望が強い印象を残す", "周回コースで変化を楽しめる"],
    cautions: ["道路の冬季閉鎖や通行規制を確認してください", "霧や雨が多いエリアなので天気確認が重要です"],
  },
  {
    id: "hyono",
    name: "氷ノ山",
    area: "兵庫県養父市",
    elevation: 1510,
    trailheadName: "福定親水公園",
    trailheadLat: 35.3662,
    trailheadLng: 134.5179,
    estimatedAccessMinutesFromOsaka: 225,
    hikingMinutes: 360,
    difficulty: "中級",
    appeal: "兵庫県最高峰。遠出してしっかり登りたい日に向く山です。",
    highlights: ["山頂の達成感が大きい", "ブナ林など山深い雰囲気を楽しめる", "関西北部の自然を味わえる"],
    cautions: ["移動と登山の両方が長いため早出が必要です", "残雪期や冬季は難度が大きく上がります"],
  },
  {
    id: "hakkyou",
    name: "八経ヶ岳",
    area: "奈良県天川村",
    elevation: 1915,
    trailheadName: "行者還トンネル西口",
    trailheadLat: 34.219,
    trailheadLng: 135.924,
    estimatedAccessMinutesFromOsaka: 230,
    hikingMinutes: 420,
    difficulty: "中級",
    appeal: "近畿最高峰。しっかり準備して挑む、関西の本格日帰り登山です。",
    highlights: ["近畿最高峰の達成感がある", "大峰山脈らしい深い山を味わえる", "健脚向けの目標にしやすい"],
    cautions: ["行程が長く初心者だけの計画は避けてください", "登山口までの道路状況と天候を必ず確認してください"],
  },
  {
    id: "myoken",
    name: "能勢妙見山",
    area: "大阪府豊能町・兵庫県川西市",
    elevation: 660,
    trailheadName: "妙見口駅",
    trailheadLat: 34.9189,
    trailheadLng: 135.4684,
    estimatedAccessMinutesFromOsaka: 65,
    hikingMinutes: 180,
    difficulty: "初級〜中級",
    appeal: "北摂の里山らしい静けさと展望を楽しめる、電車で行きやすい定番の低山です。",
    highlights: ["妙見口駅から歩き始めやすい", "里山と尾根歩きの変化を楽しめる", "半日から一日まで計画を組みやすい"],
    cautions: ["登山道と車道が交差する区間では通行に注意してください", "冬場は山上付近が冷え込みます"],
  },
  {
    id: "kabutoyama",
    name: "甲山",
    area: "兵庫県西宮市",
    elevation: 309,
    trailheadName: "甲山森林公園",
    trailheadLat: 34.7734,
    trailheadLng: 135.3287,
    estimatedAccessMinutesFromOsaka: 45,
    hikingMinutes: 80,
    difficulty: "初心者",
    appeal: "西宮市街から近く、公園散策と合わせて短時間で楽しめる丸い山容の低山です。",
    highlights: ["短い時間で山歩き気分を味わえる", "甲山森林公園と組み合わせやすい", "家族連れでも計画しやすい"],
    cautions: ["公園利用者も多いため歩く速度に余裕を見てください", "雨上がりは階段や土道が滑りやすいです"],
  },
  {
    id: "nakayama",
    name: "中山",
    area: "兵庫県宝塚市",
    elevation: 478,
    trailheadName: "阪急中山観音駅",
    trailheadLat: 34.8186,
    trailheadLng: 135.3654,
    estimatedAccessMinutesFromOsaka: 50,
    hikingMinutes: 170,
    difficulty: "初級〜中級",
    appeal: "宝塚から入りやすく、寺社と尾根道をつないで歩ける身近な展望ハイクです。",
    highlights: ["駅から登山口まで分かりやすい", "中山寺や奥之院と合わせて歩ける", "六甲方面とは違う静かな山歩きができる"],
    cautions: ["人気ルートでも分岐があるため地図を確認してください", "夏場は低山らしく暑さ対策が必要です"],
  },
  {
    id: "hachibuse",
    name: "鉢伏山",
    area: "兵庫県神戸市須磨区",
    elevation: 246,
    trailheadName: "須磨浦公園駅",
    trailheadLat: 34.6439,
    trailheadLng: 135.1028,
    estimatedAccessMinutesFromOsaka: 60,
    hikingMinutes: 100,
    difficulty: "初心者",
    appeal: "海を近くに感じながら歩ける、須磨アルプス入口の短時間ハイク向き低山です。",
    highlights: ["駅からすぐ登れる", "神戸の海と街を見渡せる", "須磨浦公園と合わせて歩きやすい"],
    cautions: ["階段が多い区間があります", "晴天時は日差しが強くなりやすいです"],
  },
  {
    id: "yokoo",
    name: "横尾山",
    area: "兵庫県神戸市須磨区",
    elevation: 312,
    trailheadName: "須磨浦公園駅",
    trailheadLat: 34.6526,
    trailheadLng: 135.1132,
    estimatedAccessMinutesFromOsaka: 60,
    hikingMinutes: 150,
    difficulty: "初級〜中級",
    appeal: "須磨アルプスの岩尾根を楽しめる、低山ながら変化の大きい神戸の人気コースです。",
    highlights: ["馬の背の岩稜が印象的", "海と街の展望がある", "短い距離でも山歩きの満足感が高い"],
    cautions: ["岩場では足元とすれ違いに注意してください", "強風時や雨天時は無理をしないでください"],
  },
  {
    id: "arima_fuji",
    name: "有馬富士",
    area: "兵庫県三田市",
    elevation: 374,
    trailheadName: "有馬富士公園",
    trailheadLat: 34.921,
    trailheadLng: 135.2054,
    estimatedAccessMinutesFromOsaka: 80,
    hikingMinutes: 110,
    difficulty: "初心者",
    appeal: "整った公園から歩ける、山容が美しく初めての低山にも選びやすい一座です。",
    highlights: ["有馬富士公園を起点にしやすい", "短時間で山頂まで行ける", "三田方面の自然を気軽に楽しめる"],
    cautions: ["公園内のルート分岐を確認してください", "夏場は虫よけと水分を準備してください"],
  },
  {
    id: "shosha",
    name: "書写山",
    area: "兵庫県姫路市",
    elevation: 371,
    trailheadName: "書写山ロープウェイ山麓駅",
    trailheadLat: 34.8902,
    trailheadLng: 134.6593,
    estimatedAccessMinutesFromOsaka: 130,
    hikingMinutes: 120,
    difficulty: "初心者",
    appeal: "圓教寺の歴史ある山上空間とハイキングを合わせて楽しめる姫路の名山です。",
    highlights: ["ロープウェイで調整しやすい", "寺社めぐりと山歩きを組み合わせられる", "遠出感があり日帰り旅に向いている"],
    cautions: ["山上施設の拝観時間を確認してください", "階段や石畳は雨の日に滑りやすいです"],
  },
  {
    id: "masui",
    name: "増位山",
    area: "兵庫県姫路市",
    elevation: 259,
    trailheadName: "随願寺",
    trailheadLat: 34.8719,
    trailheadLng: 134.7145,
    estimatedAccessMinutesFromOsaka: 125,
    hikingMinutes: 100,
    difficulty: "初心者",
    appeal: "姫路市街から近く、短めの山歩きと寺社の静けさを味わえる低山です。",
    highlights: ["短時間で歩きやすい", "随願寺周辺の落ち着いた雰囲気がある", "姫路方面の寄り道と相性が良い"],
    cautions: ["山道と参道の分岐を確認してください", "低山でも夏は暑さ対策が必要です"],
  },
  {
    id: "kobushi",
    name: "小野アルプス・紅山",
    area: "兵庫県小野市",
    elevation: 183,
    trailheadName: "鴨池公園",
    trailheadLat: 34.8279,
    trailheadLng: 134.9715,
    estimatedAccessMinutesFromOsaka: 110,
    hikingMinutes: 160,
    difficulty: "初級〜中級",
    appeal: "標高は低くても岩稜の迫力がある、短距離で冒険感を味わえる低山です。",
    highlights: ["紅山の岩場が印象的", "低山ながら変化のある縦走ができる", "写真に残るポイントが多い"],
    cautions: ["岩場が苦手な場合は無理をしないでください", "雨天や濡れた岩の状態では避けてください"],
  },
  {
    id: "yuzuruha",
    name: "諭鶴羽山",
    area: "兵庫県南あわじ市",
    elevation: 608,
    trailheadName: "諭鶴羽ダム",
    trailheadLat: 34.2304,
    trailheadLng: 134.8277,
    estimatedAccessMinutesFromOsaka: 170,
    hikingMinutes: 180,
    difficulty: "初級〜中級",
    appeal: "淡路島の最高峰。海の気配と山深さを一緒に味わえる遠出向きの山です。",
    highlights: ["淡路島まで足を伸ばす特別感がある", "山頂付近の展望が気持ち良い", "温泉や海沿いドライブと組み合わせやすい"],
    cautions: ["車移動の時間に余裕を見てください", "登山口周辺の駐車場所を事前に確認してください"],
  },
  {
    id: "futakami",
    name: "二上山",
    area: "奈良県葛城市・大阪府太子町",
    elevation: 517,
    trailheadName: "二上山駅",
    trailheadLat: 34.5239,
    trailheadLng: 135.6764,
    estimatedAccessMinutesFromOsaka: 65,
    hikingMinutes: 150,
    difficulty: "初心者",
    appeal: "大阪と奈良の境にある双耳峰。駅から歩けて歴史散策も楽しめる人気低山です。",
    highlights: ["電車で行きやすい", "雌岳・雄岳をつないで歩ける", "奈良盆地方面の眺めが良い"],
    cautions: ["階段や急な登りがあるためペース配分に注意してください", "寺社や史跡周辺ではマナーを守って歩いてください"],
  },
  {
    id: "shigi",
    name: "信貴山",
    area: "奈良県平群町",
    elevation: 437,
    trailheadName: "信貴山下駅",
    trailheadLat: 34.6077,
    trailheadLng: 135.6698,
    estimatedAccessMinutesFromOsaka: 70,
    hikingMinutes: 120,
    difficulty: "初心者",
    appeal: "朝護孫子寺と合わせて歩ける、観光と軽い山歩きのバランスが良い山です。",
    highlights: ["寺社めぐりと合わせやすい", "半日でも計画しやすい", "奈良側からアクセスしやすい"],
    cautions: ["参道と登山道が混ざるため道順を確認してください", "休日は観光客で混みやすいです"],
  },
  {
    id: "takayasu",
    name: "高安山",
    area: "大阪府八尾市・奈良県平群町",
    elevation: 488,
    trailheadName: "信貴山口駅",
    trailheadLat: 34.6166,
    trailheadLng: 135.6564,
    estimatedAccessMinutesFromOsaka: 55,
    hikingMinutes: 140,
    difficulty: "初心者",
    appeal: "大阪東部から近く、生駒山系の尾根歩きを短時間で楽しめる低山です。",
    highlights: ["近鉄沿線から入りやすい", "信貴山方面へつなげやすい", "午後からでも歩きやすい"],
    cautions: ["ケーブル道や車道付近では通行に注意してください", "分岐が多いのでルート確認が必要です"],
  },
  {
    id: "takaosan_osaka",
    name: "高尾山",
    area: "大阪府柏原市",
    elevation: 278,
    trailheadName: "河内堅上駅",
    trailheadLat: 34.585,
    trailheadLng: 135.651,
    estimatedAccessMinutesFromOsaka: 60,
    hikingMinutes: 120,
    difficulty: "初心者",
    appeal: "柏原市街から近く、古墳や里山の雰囲気を感じながら歩ける身近な低山です。",
    highlights: ["駅から歩ける", "短めの行程で計画しやすい", "生駒山系南部の静かな雰囲気がある"],
    cautions: ["住宅地から山道へ入るため道順を確認してください", "夏は日陰の少ない区間があります"],
  },
  {
    id: "inunaki",
    name: "犬鳴山",
    area: "大阪府泉佐野市",
    elevation: 558,
    trailheadName: "犬鳴山バス停",
    trailheadLat: 34.345,
    trailheadLng: 135.347,
    estimatedAccessMinutesFromOsaka: 80,
    hikingMinutes: 160,
    difficulty: "初級〜中級",
    appeal: "渓谷と滝の雰囲気を楽しめる、大阪南部の日帰りハイクに向いた山域です。",
    highlights: ["渓谷沿いの道が涼しげ", "温泉と組み合わせやすい", "南大阪からアクセスしやすい"],
    cautions: ["濡れた石や橋は滑りやすいです", "バス本数を事前に確認してください"],
  },
  {
    id: "amashi",
    name: "雨山",
    area: "大阪府熊取町",
    elevation: 312,
    trailheadName: "永楽ゆめの森公園",
    trailheadLat: 34.3789,
    trailheadLng: 135.3568,
    estimatedAccessMinutesFromOsaka: 75,
    hikingMinutes: 120,
    difficulty: "初心者",
    appeal: "泉州エリアで短時間の山歩きができる、展望と里山感のある低山です。",
    highlights: ["公園起点で計画しやすい", "低山ながら展望を楽しめる", "南大阪の半日ハイクに向いている"],
    cautions: ["登山口までの移動手段を確認してください", "夏場は暑さと虫対策が必要です"],
  },
  {
    id: "makio",
    name: "槇尾山",
    area: "大阪府和泉市",
    elevation: 601,
    trailheadName: "槇尾山施福寺",
    trailheadLat: 34.3833,
    trailheadLng: 135.4804,
    estimatedAccessMinutesFromOsaka: 90,
    hikingMinutes: 160,
    difficulty: "初級〜中級",
    appeal: "施福寺への参道と山道を合わせて歩く、南大阪のしっかりめ低山です。",
    highlights: ["寺社と山歩きを組み合わせられる", "短めでも登りごたえがある", "和泉山脈らしい雰囲気を味わえる"],
    cautions: ["参道の登りが続くためペース配分に注意してください", "車の場合は駐車場情報を確認してください"],
  },
  {
    id: "iwawaki",
    name: "岩湧山",
    area: "大阪府河内長野市",
    elevation: 897,
    trailheadName: "岩湧の森",
    trailheadLat: 34.3898,
    trailheadLng: 135.5813,
    estimatedAccessMinutesFromOsaka: 85,
    hikingMinutes: 210,
    difficulty: "初級〜中級",
    appeal: "山頂部のススキ草原と広い展望が魅力の、南大阪を代表する人気の山です。",
    highlights: ["山頂の開放感が大きい", "秋のススキが印象的", "金剛山系の展望を楽しめる"],
    cautions: ["登山口までの公共交通は時間確認が必要です", "山頂部は風が強い日があります"],
  },
  {
    id: "izumi_katsuragi",
    name: "和泉葛城山",
    area: "大阪府岸和田市・和歌山県紀の川市",
    elevation: 858,
    trailheadName: "牛滝山",
    trailheadLat: 34.3481,
    trailheadLng: 135.444,
    estimatedAccessMinutesFromOsaka: 95,
    hikingMinutes: 240,
    difficulty: "初級〜中級",
    appeal: "大阪南部から和歌山県境へ登る、ブナ林と展望が魅力の山です。",
    highlights: ["牛滝山から登山計画を組みやすい", "山頂付近の自然が豊か", "温泉と組み合わせやすい"],
    cautions: ["行程はやや長めです", "車道歩きや林道区間では車に注意してください"],
  },
  {
    id: "takatori_nara",
    name: "高取山",
    area: "奈良県高取町",
    elevation: 584,
    trailheadName: "壺阪山駅",
    trailheadLat: 34.4498,
    trailheadLng: 135.7968,
    estimatedAccessMinutesFromOsaka: 100,
    hikingMinutes: 170,
    difficulty: "初級〜中級",
    appeal: "高取城跡へ向かって歩く、歴史と山歩きの満足感が強い奈良の低山です。",
    highlights: ["城跡の石垣が見どころ", "駅から歩いて周回しやすい", "奈良南部の日帰り旅に向いている"],
    cautions: ["城跡周辺は足元に注意してください", "夏は虫と暑さへの備えが必要です"],
  },
  {
    id: "miwa",
    name: "三輪山",
    area: "奈良県桜井市",
    elevation: 467,
    trailheadName: "大神神社",
    trailheadLat: 34.5318,
    trailheadLng: 135.8678,
    estimatedAccessMinutesFromOsaka: 90,
    hikingMinutes: 120,
    difficulty: "初級〜中級",
    appeal: "大神神社の信仰の山として知られ、静かに歩きたい日に向く特別感のある山です。",
    highlights: ["大神神社と合わせて訪れやすい", "奈良らしい歴史と自然を感じられる", "短時間でも印象に残りやすい"],
    cautions: ["入山時間やルールを必ず確認してください", "飲食や撮影など禁止事項に注意してください"],
  },
  {
    id: "kasuga",
    name: "春日山",
    area: "奈良県奈良市",
    elevation: 498,
    trailheadName: "春日大社",
    trailheadLat: 34.6815,
    trailheadLng: 135.8547,
    estimatedAccessMinutesFromOsaka: 80,
    hikingMinutes: 150,
    difficulty: "初心者",
    appeal: "奈良公園の奥に広がる森を歩く、観光と自然散策を合わせやすい山域です。",
    highlights: ["奈良公園から歩き始めやすい", "原始林の雰囲気を感じられる", "若草山と合わせて計画しやすい"],
    cautions: ["保護区域のルールを守って歩いてください", "観光地から離れると静かなのでルート確認が必要です"],
  },
  {
    id: "yoshino",
    name: "吉野山",
    area: "奈良県吉野町",
    elevation: 858,
    trailheadName: "吉野駅",
    trailheadLat: 34.3693,
    trailheadLng: 135.8573,
    estimatedAccessMinutesFromOsaka: 115,
    hikingMinutes: 180,
    difficulty: "初級〜中級",
    appeal: "桜の名所として知られる山域を、季節の景色と寺社を巡りながら歩けます。",
    highlights: ["吉野駅から歩き始めやすい", "寺社と展望を楽しめる", "季節ごとの表情が大きい"],
    cautions: ["桜の時期は非常に混雑します", "上千本方面まで歩く場合は時間に余裕が必要です"],
  },
  {
    id: "daimonji",
    name: "大文字山",
    area: "京都府京都市左京区",
    elevation: 466,
    trailheadName: "銀閣寺道",
    trailheadLat: 35.0257,
    trailheadLng: 135.8085,
    estimatedAccessMinutesFromOsaka: 80,
    hikingMinutes: 150,
    difficulty: "初心者",
    appeal: "京都市街を見下ろす展望が魅力。観光と合わせやすい京都東山の定番低山です。",
    highlights: ["火床からの展望が良い", "銀閣寺周辺から入りやすい", "短時間でも京都らしい山歩きができる"],
    cautions: ["観光地周辺は混雑しやすいです", "下山ルートを間違えないよう確認してください"],
  },
  {
    id: "inari",
    name: "稲荷山",
    area: "京都府京都市伏見区",
    elevation: 233,
    trailheadName: "伏見稲荷駅",
    trailheadLat: 34.9671,
    trailheadLng: 135.7791,
    estimatedAccessMinutesFromOsaka: 70,
    hikingMinutes: 120,
    difficulty: "初心者",
    appeal: "千本鳥居から山道へ入る、京都観光と軽い山歩きを一緒に楽しめる低山です。",
    highlights: ["駅からすぐ歩き出せる", "鳥居と展望を楽しめる", "短時間でも満足感がある"],
    cautions: ["観光客が多いため早朝や時間に余裕のある計画がおすすめです", "階段が多いので歩きやすい靴が必要です"],
  },
  {
    id: "yoshidayama",
    name: "吉田山",
    area: "京都府京都市左京区",
    elevation: 105,
    trailheadName: "出町柳駅",
    trailheadLat: 35.0277,
    trailheadLng: 135.7888,
    estimatedAccessMinutesFromOsaka: 60,
    hikingMinutes: 60,
    difficulty: "初心者",
    appeal: "京都市内で短時間の自然散策ができる、街歩き感覚の小さな低山です。",
    highlights: ["市街地から近い", "短時間で歩ける", "カフェや寺社散策と組み合わせやすい"],
    cautions: ["登山というより散策向けです", "夕方以降は足元に注意してください"],
  },
  {
    id: "kurama",
    name: "鞍馬山",
    area: "京都府京都市左京区",
    elevation: 584,
    trailheadName: "鞍馬駅",
    trailheadLat: 35.1168,
    trailheadLng: 135.7727,
    estimatedAccessMinutesFromOsaka: 100,
    hikingMinutes: 180,
    difficulty: "初級〜中級",
    appeal: "鞍馬寺から貴船方面へ抜ける、京都北部の自然と歴史を味わえる山歩きです。",
    highlights: ["鞍馬寺と貴船を結びやすい", "木の根道など変化がある", "京都市内から遠出感を味わえる"],
    cautions: ["寺社の拝観時間やルート状況を確認してください", "濡れた石段や木の根は滑りやすいです"],
  },
  {
    id: "ushio",
    name: "牛尾山",
    area: "京都府京都市山科区",
    elevation: 551,
    trailheadName: "山科駅",
    trailheadLat: 34.9862,
    trailheadLng: 135.8352,
    estimatedAccessMinutesFromOsaka: 80,
    hikingMinutes: 180,
    difficulty: "初級〜中級",
    appeal: "山科から入れる静かな山道で、京都東山とは違う落ち着いた雰囲気を楽しめます。",
    highlights: ["山科駅周辺から計画しやすい", "寺社や渓谷の雰囲気がある", "京都近郊で人の少ない山歩きをしやすい"],
    cautions: ["分岐が多いので地図確認が必要です", "沢沿いは雨後に滑りやすくなります"],
  },
  {
    id: "mikami",
    name: "三上山",
    area: "滋賀県野洲市",
    elevation: 432,
    trailheadName: "御上神社",
    trailheadLat: 35.0551,
    trailheadLng: 136.025,
    estimatedAccessMinutesFromOsaka: 100,
    hikingMinutes: 120,
    difficulty: "初心者",
    appeal: "近江富士とも呼ばれる美しい山容で、短時間でも登った満足感がある滋賀の低山です。",
    highlights: ["山の形が美しい", "御上神社と合わせて訪れやすい", "琵琶湖方面の寄り道と相性が良い"],
    cautions: ["急な箇所もあるため足元に注意してください", "登山口周辺の駐車場状況を確認してください"],
  },
  {
    id: "hachimanyama",
    name: "八幡山",
    area: "滋賀県近江八幡市",
    elevation: 271,
    trailheadName: "八幡山ロープウェー前",
    trailheadLat: 35.1397,
    trailheadLng: 136.0915,
    estimatedAccessMinutesFromOsaka: 110,
    hikingMinutes: 80,
    difficulty: "初心者",
    appeal: "近江八幡観光と合わせやすく、ロープウェーも使える気軽な展望低山です。",
    highlights: ["街歩きと組み合わせやすい", "琵琶湖方面の展望がある", "短時間でも楽しみやすい"],
    cautions: ["観光シーズンは混雑します", "ロープウェーの運行時間を確認してください"],
  },
  {
    id: "shizugatake",
    name: "賤ヶ岳",
    area: "滋賀県長浜市",
    elevation: 421,
    trailheadName: "余呉駅",
    trailheadLat: 35.5106,
    trailheadLng: 136.1995,
    estimatedAccessMinutesFromOsaka: 150,
    hikingMinutes: 150,
    difficulty: "初心者",
    appeal: "余呉湖と琵琶湖北部の景色を楽しめる、歴史ある展望の低山です。",
    highlights: ["余呉湖周辺と合わせて歩ける", "山頂からの眺めが広い", "歴史散策としても楽しめる"],
    cautions: ["大阪からは移動が長めです", "冬季は積雪や凍結に注意してください"],
  },
  {
    id: "odani",
    name: "小谷山",
    area: "滋賀県長浜市",
    elevation: 495,
    trailheadName: "小谷城戦国歴史資料館",
    trailheadLat: 35.4466,
    trailheadLng: 136.2731,
    estimatedAccessMinutesFromOsaka: 150,
    hikingMinutes: 150,
    difficulty: "初級〜中級",
    appeal: "小谷城跡をたどる、歴史好きにも歩きごたえのある湖北の低山です。",
    highlights: ["城跡の見どころが多い", "湖北の遠出感がある", "短めでも変化を感じられる"],
    cautions: ["城跡周辺は足元に注意してください", "公共交通の場合は接続時間を確認してください"],
  },
  {
    id: "iidoyama",
    name: "飯道山",
    area: "滋賀県甲賀市",
    elevation: 664,
    trailheadName: "貴生川駅",
    trailheadLat: 34.9227,
    trailheadLng: 136.1589,
    estimatedAccessMinutesFromOsaka: 125,
    hikingMinutes: 210,
    difficulty: "初級〜中級",
    appeal: "甲賀の静かな山道と修験の雰囲気を感じられる、落ち着いた日帰り向きの山です。",
    highlights: ["人の少ない山歩きをしやすい", "寺社や歴史の雰囲気がある", "滋賀南部の遠出候補になる"],
    cautions: ["道標と地図を確認しながら歩いてください", "下山後の交通手段を先に確認してください"],
  },
  {
    id: "nagusa",
    name: "名草山",
    area: "和歌山県和歌山市",
    elevation: 228,
    trailheadName: "紀三井寺駅",
    trailheadLat: 34.1836,
    trailheadLng: 135.1915,
    estimatedAccessMinutesFromOsaka: 95,
    hikingMinutes: 100,
    difficulty: "初心者",
    appeal: "紀三井寺から歩きやすく、和歌山市街と海の気配を感じられる低山です。",
    highlights: ["駅からアクセスしやすい", "紀三井寺と合わせて歩ける", "短時間の和歌山ハイクに向く"],
    cautions: ["低山でも夏場は暑さ対策が必要です", "寺社周辺ではマナーを守って歩いてください"],
  },
  {
    id: "takatsuko",
    name: "高津子山",
    area: "和歌山県和歌山市",
    elevation: 137,
    trailheadName: "雑賀崎",
    trailheadLat: 34.18,
    trailheadLng: 135.1545,
    estimatedAccessMinutesFromOsaka: 110,
    hikingMinutes: 80,
    difficulty: "初心者",
    appeal: "海辺の景色と合わせて短く歩ける、和歌山らしい展望散策向きの低山です。",
    highlights: ["海の眺めと合わせやすい", "短時間で歩ける", "雑賀崎周辺の寄り道に向いている"],
    cautions: ["登山というより散策寄りです", "公共交通の接続を事前に確認してください"],
  },
  {
    id: "oyama_kyoto",
    name: "大江山",
    area: "京都府福知山市・与謝野町",
    elevation: 833,
    trailheadName: "鬼嶽稲荷神社",
    trailheadLat: 35.3992,
    trailheadLng: 135.0962,
    estimatedAccessMinutesFromOsaka: 160,
    hikingMinutes: 210,
    difficulty: "初級〜中級",
    appeal: "丹後方面へ足を伸ばして歩く、鬼伝説と稜線の雰囲気が残る京都北部の山です。",
    highlights: ["遠出の特別感がある", "稜線歩きの気持ち良さがある", "丹後方面の観光と組み合わせやすい"],
    cautions: ["移動時間が長いため早出がおすすめです", "天候が崩れる日は無理をしないでください"],
  },
  {
    id: "yura",
    name: "由良ヶ岳",
    area: "京都府宮津市",
    elevation: 640,
    trailheadName: "丹後由良駅",
    trailheadLat: 35.5147,
    trailheadLng: 135.1919,
    estimatedAccessMinutesFromOsaka: 170,
    hikingMinutes: 210,
    difficulty: "初級〜中級",
    appeal: "日本海側の展望を楽しめる、京都北部まで遠出したい日に向く山です。",
    highlights: ["海の見える山歩きができる", "駅から計画しやすい", "天橋立方面の寄り道と相性が良い"],
    cautions: ["大阪からは移動が長めです", "海風で体感温度が下がる日があります"],
  },
  {
    id: "mitsumine",
    name: "三峰山",
    area: "奈良県御杖村・三重県津市",
    elevation: 1235,
    trailheadName: "みつえ青少年旅行村",
    trailheadLat: 34.4899,
    trailheadLng: 136.2121,
    estimatedAccessMinutesFromOsaka: 170,
    hikingMinutes: 240,
    difficulty: "初級〜中級",
    appeal: "霧氷で知られる奈良東部の山。季節感のある遠出ハイクに向いています。",
    highlights: ["冬の霧氷シーズンが有名", "山頂付近の雰囲気が良い", "温泉と組み合わせやすい"],
    cautions: ["冬季は雪山装備が必要な日があります", "車の場合は道路状況を確認してください"],
  },
  {
    id: "takami",
    name: "高見山",
    area: "奈良県東吉野村・三重県松阪市",
    elevation: 1248,
    trailheadName: "たかすみ温泉",
    trailheadLat: 34.427,
    trailheadLng: 136.0918,
    estimatedAccessMinutesFromOsaka: 155,
    hikingMinutes: 240,
    difficulty: "中級",
    appeal: "美しい山容と霧氷で人気の、奈良東部を代表する登りごたえのある山です。",
    highlights: ["山頂の展望が良い", "冬の霧氷が魅力", "温泉を起点に計画しやすい"],
    cautions: ["冬季は装備と道路状況の確認が必須です", "急な登りがあるため体力に余裕を持ってください"],
  },
  {
    id: "kannonmine",
    name: "観音峰",
    area: "奈良県天川村",
    elevation: 1347,
    trailheadName: "観音峰登山口",
    trailheadLat: 34.2399,
    trailheadLng: 135.8688,
    estimatedAccessMinutesFromOsaka: 170,
    hikingMinutes: 240,
    difficulty: "初級〜中級",
    appeal: "大峰山系の入口として歩きやすく、展望台からの眺めが魅力の山です。",
    highlights: ["展望台から大峰方面を眺められる", "洞川温泉と組み合わせやすい", "本格山域の雰囲気を味わえる"],
    cautions: ["登山口までの移動に時間がかかります", "冬季や悪天候時は無理をしないでください"],
  },
  {
    id: "yamanoabe",
    name: "龍王山",
    area: "奈良県天理市",
    elevation: 586,
    trailheadName: "天理駅",
    trailheadLat: 34.601,
    trailheadLng: 135.8305,
    estimatedAccessMinutesFromOsaka: 85,
    hikingMinutes: 180,
    difficulty: "初級〜中級",
    appeal: "山の辺の道や古墳群と合わせて歩きやすい、奈良盆地東側の展望低山です。",
    highlights: ["歴史散策と組み合わせやすい", "奈良盆地を見渡せる", "天理方面から計画しやすい"],
    cautions: ["長く歩く場合は水分を多めに準備してください", "分岐でルート確認が必要です"],
  },
  {
    id: "matsuo_ikaruga",
    name: "松尾山",
    area: "奈良県斑鳩町",
    elevation: 315,
    trailheadName: "法隆寺駅",
    trailheadLat: 34.6187,
    trailheadLng: 135.7422,
    estimatedAccessMinutesFromOsaka: 75,
    hikingMinutes: 120,
    difficulty: "初心者",
    appeal: "法隆寺周辺の観光と合わせて歩ける、斑鳩エリアの静かな低山です。",
    highlights: ["法隆寺と合わせて計画しやすい", "短時間で歩きやすい", "歴史散策の延長で楽しめる"],
    cautions: ["登山口までの道順を確認してください", "夏場は低山特有の暑さに注意してください"],
  },
];

const state = {
  origin: "大阪駅",
  maxMinutes: 60,
  currentResults: [],
};

const homeView = document.querySelector("#homeView");
const listView = document.querySelector("#listView");
const detailView = document.querySelector("#detailView");
const searchForm = document.querySelector("#searchForm");
const originInput = document.querySelector("#originInput");
const resultTitle = document.querySelector("#resultTitle");
const resultCount = document.querySelector("#resultCount");
const mountainCards = document.querySelector("#mountainCards");
const emptyState = document.querySelector("#emptyState");
const listBackButton = document.querySelector("#listBackButton");
const topbar = document.querySelector(".topbar");
const backButton = document.querySelector("#backButton");
const timeOptions = document.querySelector("#timeOptions");
const originButtons = Array.from(document.querySelectorAll("[data-origin]"));
const fallbackPhotoUrl = "./assets/mountain-mark.png";
let listScrollY = 0;
const defaultOriginName = "大阪駅";
const originStationProfiles = {
  "大阪駅": {
    name: "大阪駅",
    lat: 34.7025,
    lng: 135.4959,
    aliases: ["大阪", "梅田", "大阪梅田", "大阪駅", "梅田駅"],
  },
  "京都駅": {
    name: "京都駅",
    lat: 34.9858,
    lng: 135.7588,
    aliases: ["京都", "京都駅"],
  },
  "近鉄奈良駅": {
    name: "近鉄奈良駅",
    lat: 34.6844,
    lng: 135.8279,
    aliases: ["奈良", "奈良駅", "近鉄奈良", "近鉄奈良駅"],
  },
  "和歌山駅": {
    name: "和歌山駅",
    lat: 34.2326,
    lng: 135.1912,
    aliases: ["和歌山", "和歌山駅"],
  },
  "大津駅": {
    name: "大津駅",
    lat: 35.0037,
    lng: 135.8646,
    aliases: ["滋賀", "大津", "大津駅"],
  },
  "三ノ宮駅": {
    name: "三ノ宮駅",
    lat: 34.6941,
    lng: 135.1955,
    aliases: ["兵庫", "神戸", "三宮", "三ノ宮", "三宮駅", "三ノ宮駅"],
  },
};
const osakaStationProfile = originStationProfiles[defaultOriginName];

function currentOriginName() {
  return originInput.value.trim() || defaultOriginName;
}

function normalizeOriginName(origin) {
  const compactOrigin = String(origin || "")
    .replace(/\s/g, "")
    .toLowerCase();
  if (!compactOrigin || compactOrigin === "現在地") return defaultOriginName;

  const match = Object.values(originStationProfiles).find((profile) =>
    profile.aliases.some((alias) => alias.replace(/\s/g, "").toLowerCase() === compactOrigin),
  );
  return match?.name ?? origin;
}

function originProfileFor(origin) {
  return originStationProfiles[normalizeOriginName(origin)];
}

function distanceKm(from, to) {
  const earthRadiusKm = 6371;
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const dLat = toRadians(to.lat - from.lat);
  const dLng = toRadians(to.lng - from.lng);
  const lat1 = toRadians(from.lat);
  const lat2 = toRadians(to.lat);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function estimatedAccessMinutes(mountain, origin = currentOriginName()) {
  const originProfile = originProfileFor(origin);
  if (!originProfile || originProfile.name === defaultOriginName) {
    return mountain.estimatedAccessMinutesFromOsaka;
  }

  const trailhead = { lat: mountain.trailheadLat, lng: mountain.trailheadLng };
  const osakaDistance = distanceKm(osakaStationProfile, trailhead);
  const originDistance = distanceKm(originProfile, trailhead);
  const adjustedMinutes = mountain.estimatedAccessMinutesFromOsaka + (originDistance - osakaDistance) * 1.15;
  return Math.min(300, Math.max(20, roundToFive(adjustedMinutes)));
}
function bathSuggestion(name, area, accessMinutes, category, note, photoKey) {
  return { name, area, accessMinutes, category, note, photoKey };
}

function commonsImageUrl(file, width = 960) {
  const filePath = encodeURIComponent(file).replace(/%20/g, "_");
  return `https://commons.wikimedia.org/wiki/Special:Redirect/file/${filePath}?width=${width}`;
}

const onsenSuggestions = {
  kongo: [
    bathSuggestion("かもきみの湯", "奈良県御所市", 18, "日帰り温泉", "金剛山・葛城山方面の下山後に組み合わせやすい候補です。", "nara"),
    bathSuggestion("天然温泉 虹の湯 大阪狭山店", "大阪府大阪狭山市", 28, "スーパー銭湯", "大阪方面へ戻る日にも寄り道しやすい大型入浴施設です。", "rotenburo"),
    bathSuggestion("橿原ぽかぽか温泉", "奈良県橿原市", 30, "スーパー銭湯", "奈良側へ下りたあとに食事まで済ませやすい候補です。", "nara"),
  ],
  ikoma: [
    bathSuggestion("音の花温泉", "奈良県生駒市", 15, "日帰り温泉", "生駒山の奈良側へ下りる計画と相性の良い温泉候補です。", "nara"),
    bathSuggestion("天然温泉 風の湯 新石切店", "大阪府東大阪市", 22, "スーパー銭湯", "石切・東大阪方面へ戻るときに使いやすい候補です。", "rotenburo"),
    bathSuggestion("東大阪石切温泉 ホテルセイリュウ", "大阪府東大阪市", 20, "温泉", "大阪平野側の眺めと合わせて検討しやすい入浴候補です。", "nara"),
  ],
  ponpon: [
    bathSuggestion("美人湯 祥風苑", "大阪府高槻市", 20, "日帰り温泉", "摂津峡エリアの温泉候補。高槻方面へ戻る日によく合います。", "minoh"),
    bathSuggestion("摂津峡花の里温泉 山水館", "大阪府高槻市", 18, "温泉", "渓谷沿いの雰囲気も楽しみたい日に向いています。", "minoh"),
    bathSuggestion("極楽湯 茨木店", "大阪府茨木市", 28, "スーパー銭湯", "大阪北部へ戻る途中に寄りやすいスーパー銭湯候補です。", "minoh"),
  ],
  satsuki: [
    bathSuggestion("伏尾温泉 不死王閣", "大阪府池田市", 12, "温泉", "五月山から池田方面へ戻る流れで検討しやすい候補です。", "minoh"),
    bathSuggestion("箕面湯元 水春", "大阪府箕面市", 22, "スーパー銭湯", "箕面・千里方面に戻る日に使いやすい大型施設です。", "minoh"),
    bathSuggestion("極楽湯 茨木店", "大阪府茨木市", 30, "スーパー銭湯", "大阪北部で食事も含めて整えたい日の候補です。", "minoh"),
  ],
  konosan: [
    bathSuggestion("東香里湯元 水春", "大阪府寝屋川市", 22, "スーパー銭湯", "交野・枚方方面の下山後に探しやすい入浴候補です。", "minoh"),
    bathSuggestion("湯快のゆ 寝屋川店", "大阪府寝屋川市", 25, "スーパー銭湯", "寝屋川方面へ戻るときに食事も取りやすい候補です。", "minoh"),
    bathSuggestion("極楽湯 枚方店", "大阪府枚方市", 28, "スーパー銭湯", "枚方方面へ抜ける計画で検討しやすい候補です。", "minoh"),
  ],
  rokko: [
    bathSuggestion("有馬温泉 太閤の湯", "兵庫県神戸市", 20, "日帰り温泉", "六甲山から有馬方面へ下る計画と相性の良い定番候補です。", "arima"),
    bathSuggestion("灘温泉 水道筋店", "兵庫県神戸市", 24, "温泉", "神戸市街側へ戻る日に立ち寄りやすい温泉候補です。", "arima"),
    bathSuggestion("HATなぎさの湯", "兵庫県神戸市", 28, "スーパー銭湯", "三宮・灘方面へ戻る日のスーパー銭湯候補です。", "arima"),
  ],
  maya: [
    bathSuggestion("神戸みなと温泉 蓮", "兵庫県神戸市", 18, "温泉", "新神戸・三宮方面へ戻る日の立ち寄り候補です。", "arima"),
    bathSuggestion("灘温泉 水道筋店", "兵庫県神戸市", 15, "温泉", "摩耶山から市街地側へ下りたあとに使いやすい候補です。", "arima"),
    bathSuggestion("HATなぎさの湯", "兵庫県神戸市", 20, "スーパー銭湯", "神戸市街で食事も合わせやすいスーパー銭湯候補です。", "arima"),
  ],
  katsuragi: [
    bathSuggestion("かもきみの湯", "奈良県御所市", 20, "日帰り温泉", "大和葛城山ロープウェイ側から下山する日に検討しやすい候補です。", "nara"),
    bathSuggestion("橿原ぽかぽか温泉", "奈良県橿原市", 28, "スーパー銭湯", "奈良側へ戻るときに食事も済ませやすい候補です。", "nara"),
    bathSuggestion("天然温泉 虹の湯 大阪狭山店", "大阪府大阪狭山市", 30, "スーパー銭湯", "大阪南部へ帰る流れで寄りやすい入浴候補です。", "rotenburo"),
  ],
  minoh: [
    bathSuggestion("箕面温泉スパーガーデン", "大阪府箕面市", 8, "温泉", "箕面駅方面へ戻る流れで立ち寄りやすい温泉候補です。", "minoh"),
    bathSuggestion("箕面湯元 水春", "大阪府箕面市", 15, "スーパー銭湯", "短時間で汗を流して食事まで済ませやすい候補です。", "minoh"),
    bathSuggestion("伏尾温泉 不死王閣", "大阪府池田市", 20, "温泉", "池田方面へ抜ける計画で候補にしやすい温泉です。", "minoh"),
  ],
  iimori: [
    bathSuggestion("東香里湯元 水春", "大阪府寝屋川市", 20, "スーパー銭湯", "四條畷・寝屋川方面で下山後に探しやすい入浴候補です。", "minoh"),
    bathSuggestion("湯快のゆ 寝屋川店", "大阪府寝屋川市", 22, "スーパー銭湯", "京阪沿線へ戻るときに使いやすい候補です。", "minoh"),
    bathSuggestion("極楽湯 枚方店", "大阪府枚方市", 28, "スーパー銭湯", "枚方方面へ抜ける帰り道で検討しやすい候補です。", "minoh"),
  ],
  wakakusa: [
    bathSuggestion("ゆららの湯 奈良店", "奈良県奈良市", 18, "スーパー銭湯", "奈良市内観光と合わせて検討しやすい日帰り入浴候補です。", "nara"),
    bathSuggestion("ゆららの湯 押熊店", "奈良県奈良市", 25, "スーパー銭湯", "奈良北部へ戻る計画で使いやすい大型施設です。", "nara"),
    bathSuggestion("奈良健康ランド", "奈良県天理市", 30, "スーパー銭湯", "食事や休憩までまとめたい日に向いている候補です。", "nara"),
  ],
  otowa: [
    bathSuggestion("大津温泉 おふろcafeびわこ座", "滋賀県大津市", 20, "スーパー銭湯", "大津側へ下りる計画で候補にしやすい温泉施設です。", "ogoto"),
    bathSuggestion("スパリゾート雄琴 あがりゃんせ", "滋賀県大津市", 28, "スーパー銭湯", "琵琶湖側へ戻る日にゆっくり休みやすい候補です。", "ogoto"),
    bathSuggestion("守山天然温泉 ほたるの湯", "滋賀県守山市", 30, "スーパー銭湯", "湖東方面へ帰る流れで検討しやすい候補です。", "ogoto"),
  ],
  kisen: [
    bathSuggestion("犬鳴山温泉 不動口館", "大阪府泉佐野市", 10, "温泉", "紀泉エリアの下山後に温泉も楽しみたい日の候補です。", "rotenburo"),
    bathSuggestion("りんくうの湯", "大阪府泉佐野市", 28, "スーパー銭湯", "大阪湾側へ戻る日に食事や買い物と合わせやすい候補です。", "rotenburo"),
    bathSuggestion("天然温泉 清児の湯", "大阪府貝塚市", 30, "スーパー銭湯", "泉州方面へ戻る日の立ち寄り候補です。", "rotenburo"),
  ],
  hiei: [
    bathSuggestion("スパリゾート雄琴 あがりゃんせ", "滋賀県大津市", 20, "スーパー銭湯", "比叡山から琵琶湖側へ抜ける計画と組み合わせやすい候補です。", "ogoto"),
    bathSuggestion("大津温泉 おふろcafeびわこ座", "滋賀県大津市", 25, "スーパー銭湯", "大津市街側へ戻る日にも使いやすい候補です。", "ogoto"),
    bathSuggestion("草津湯元 水春", "滋賀県草津市", 30, "スーパー銭湯", "草津・京都方面へ戻るときに検討しやすい候補です。", "ogoto"),
  ],
  konze: [
    bathSuggestion("十二坊温泉ゆらら", "滋賀県湖南市", 15, "日帰り温泉", "湖南・栗東方面の山歩き後に検討しやすい温泉候補です。", "ogoto"),
    bathSuggestion("守山天然温泉 ほたるの湯", "滋賀県守山市", 28, "スーパー銭湯", "湖東方面へ戻る日に食事も合わせやすい候補です。", "ogoto"),
    bathSuggestion("草津湯元 水春", "滋賀県草津市", 30, "スーパー銭湯", "草津方面へ抜ける帰り道で使いやすい候補です。", "ogoto"),
  ],
  takamikura: [
    bathSuggestion("野天風呂 あかねの湯 加古川店", "兵庫県加古川市", 25, "スーパー銭湯", "加古川方面へ戻るときに立ち寄りやすい候補です。", "kinosaki"),
    bathSuggestion("加古川天然温泉 ぷくぷくの湯", "兵庫県加古川市", 25, "スーパー銭湯", "下山後に食事も済ませやすいスーパー銭湯候補です。", "kinosaki"),
    bathSuggestion("野天風呂 あかねの湯 姫路南店", "兵庫県姫路市", 30, "スーパー銭湯", "姫路方面へ戻る日の候補です。", "kinosaki"),
  ],
  horai: [
    bathSuggestion("比良とぴあ", "滋賀県大津市", 15, "日帰り温泉", "比良山系の下山後に候補にしやすい温泉施設です。", "ogoto"),
    bathSuggestion("スパリゾート雄琴 あがりゃんせ", "滋賀県大津市", 30, "スーパー銭湯", "琵琶湖側へ戻ってゆっくり休みたい日の候補です。", "ogoto"),
    bathSuggestion("くつき温泉てんくう", "滋賀県高島市", 30, "日帰り温泉", "湖西北部へ抜ける計画で検討しやすい候補です。", "ogoto"),
  ],
  bentendake: [
    bathSuggestion("高野山温泉 福智院", "和歌山県高野町", 8, "温泉", "高野山滞在や観光と合わせて検討しやすい温泉候補です。", "kawayu"),
    bathSuggestion("かつらぎ温泉 八風の湯", "和歌山県かつらぎ町", 30, "日帰り温泉", "高野山から下る帰り道で検討しやすい候補です。", "kawayu"),
    bathSuggestion("野迫川温泉 ホテルのせ川", "奈良県野迫川村", 30, "日帰り温泉", "南側へ抜ける計画で候補にしやすい温泉です。", "kawayu"),
  ],
  atago: [
    bathSuggestion("嵐山温泉 風風の湯", "京都府京都市", 25, "日帰り温泉", "清滝・嵐山方面へ戻る計画で候補にしやすい温泉施設です。", "kinosaki"),
    bathSuggestion("さがの温泉 天山の湯", "京都府京都市", 30, "スーパー銭湯", "嵯峨野方面へ戻る日に食事も合わせやすい候補です。", "kinosaki"),
    bathSuggestion("仁左衛門の湯", "京都府京都市", 30, "スーパー銭湯", "京都市内へ戻る帰り道で検討しやすい候補です。", "kinosaki"),
  ],
  seppiko: [
    bathSuggestion("塩田温泉 湯元 上山旅館", "兵庫県姫路市", 25, "温泉", "姫路北部方面で下山後に温泉を探す日の候補です。", "kinosaki"),
    bathSuggestion("姫路市はやしだ交流センター ゆたりん", "兵庫県姫路市", 28, "日帰り温泉", "姫路北部の帰り道で立ち寄りやすい候補です。", "kinosaki"),
    bathSuggestion("野天風呂 あかねの湯 姫路南店", "兵庫県姫路市", 30, "スーパー銭湯", "姫路市街方面へ戻る日のスーパー銭湯候補です。", "kinosaki"),
  ],
  ibuki: [
    bathSuggestion("伊吹薬草の里文化センター ジョイいぶき", "滋賀県米原市", 15, "日帰り温泉", "伊吹山登山口周辺で入浴候補を探すときの起点になります。", "ogoto"),
    bathSuggestion("あねがわ温泉", "滋賀県長浜市", 28, "日帰り温泉", "長浜方面へ戻る帰り道で検討しやすい候補です。", "ogoto"),
    bathSuggestion("長浜太閤温泉 浜湖月", "滋賀県長浜市", 30, "温泉", "琵琶湖側へ戻る計画で候補にしやすい温泉です。", "ogoto"),
  ],
  buna: [
    bathSuggestion("くつき温泉てんくう", "滋賀県高島市", 25, "日帰り温泉", "坊村・朽木方面へ下山する計画で検討しやすい候補です。", "ogoto"),
    bathSuggestion("比良とぴあ", "滋賀県大津市", 30, "日帰り温泉", "湖西側へ戻る日に使いやすい温泉候補です。", "ogoto"),
    bathSuggestion("マキノ高原温泉さらさ", "滋賀県高島市", 30, "日帰り温泉", "高島方面へ抜ける計画で候補にしやすい施設です。", "ogoto"),
  ],
  soni: [
    bathSuggestion("曽爾高原温泉 お亀の湯", "奈良県曽爾村", 10, "日帰り温泉", "曽爾高原とセットで組みやすい定番の温泉候補です。", "nara"),
    bathSuggestion("みつえ温泉 姫石の湯", "奈良県御杖村", 25, "日帰り温泉", "御杖方面へ抜ける帰り道で検討しやすい候補です。", "nara"),
    bathSuggestion("美榛苑", "奈良県宇陀市", 30, "温泉", "宇陀方面へ戻る日に候補にしやすい温泉です。", "nara"),
  ],
  aoba: [
    bathSuggestion("若狭高浜温泉 湯っぷる", "福井県高浜町", 20, "日帰り温泉", "青葉山から若狭湾側へ戻る日と相性の良い温泉候補です。", "kinosaki"),
    bathSuggestion("あみーシャン大飯", "福井県おおい町", 25, "日帰り温泉", "若狭湾沿いへ抜ける計画で候補にしやすい施設です。", "kinosaki"),
    bathSuggestion("濱の湯", "福井県小浜市", 30, "日帰り温泉", "小浜方面へ戻る日の入浴候補です。", "kinosaki"),
  ],
  ryujin: [
    bathSuggestion("龍神温泉 元湯", "和歌山県田辺市", 20, "日帰り温泉", "龍神岳・高野龍神スカイライン方面と合わせたい定番候補です。", "ryujin"),
    bathSuggestion("季楽里龍神", "和歌山県田辺市", 22, "温泉", "龍神温泉エリアで食事や休憩も検討しやすい候補です。", "ryujin"),
    bathSuggestion("丹生ヤマセミ温泉館", "和歌山県田辺市", 30, "日帰り温泉", "龍神方面から下る帰り道で候補にしやすい施設です。", "ryujin"),
  ],
  odaigahara: [
    bathSuggestion("入之波温泉 山鳩湯", "奈良県川上村", 30, "温泉", "大台ヶ原方面から帰る途中に検討しやすい温泉候補です。", "kawayu"),
    bathSuggestion("ホテル杉の湯", "奈良県川上村", 25, "温泉", "川上村方面へ戻るときに候補にしやすい温泉です。", "kawayu"),
    bathSuggestion("大宇陀温泉 あきののゆ", "奈良県宇陀市", 30, "日帰り温泉", "奈良方面へ戻る日の立ち寄り候補です。", "nara"),
  ],
  hyono: [
    bathSuggestion("とがやま温泉 天女の湯", "兵庫県養父市", 25, "日帰り温泉", "氷ノ山登山後に養父方面で検討しやすい温泉候補です。", "kinosaki"),
    bathSuggestion("但馬楽座 やぶ温泉", "兵庫県養父市", 30, "日帰り温泉", "養父方面へ戻る帰り道で候補にしやすい施設です。", "kinosaki"),
    bathSuggestion("若杉高原温泉", "兵庫県養父市", 30, "日帰り温泉", "若杉方面へ抜ける計画で検討しやすい候補です。", "kinosaki"),
  ],
  hakkyou: [
    bathSuggestion("天の川温泉センター", "奈良県天川村", 25, "日帰り温泉", "大峰・天川村方面の登山後に候補にしやすい温泉施設です。", "nara"),
    bathSuggestion("洞川温泉センター", "奈良県天川村", 30, "日帰り温泉", "洞川方面へ戻るときに立ち寄りやすい候補です。", "nara"),
    bathSuggestion("黒滝の湯", "奈良県黒滝村", 30, "日帰り温泉", "下市・黒滝方面へ帰る計画で候補にしやすい施設です。", "nara"),
  ],
};

Object.assign(onsenSuggestions, {
  myoken: [
    bathSuggestion("伏尾温泉 不死王閣", "大阪府池田市", 25, "温泉", "妙見口・池田方面へ戻る流れで検討しやすい温泉候補です。", "minoh"),
    bathSuggestion("箕面湯元 水春", "大阪府箕面市", 35, "スーパー銭湯", "箕面方面へ抜ける帰り道で食事も合わせやすい候補です。", "minoh"),
    bathSuggestion("るり渓温泉", "京都府南丹市", 45, "日帰り温泉", "能勢・亀岡方面に回る日なら候補にしやすい温泉施設です。", "minoh"),
  ],
  kabutoyama: [
    bathSuggestion("ナチュールスパ宝塚", "兵庫県宝塚市", 20, "温泉", "西宮・宝塚方面へ戻る日に立ち寄りやすい温泉候補です。", "arima"),
    bathSuggestion("宝乃湯", "兵庫県宝塚市", 25, "温泉", "宝塚方面で汗を流して帰りたい日に使いやすい候補です。", "arima"),
    bathSuggestion("双葉温泉", "兵庫県西宮市", 25, "温泉", "阪神西宮方面へ戻る日にも検討しやすい入浴候補です。", "arima"),
  ],
  nakayama: [
    bathSuggestion("宝乃湯", "兵庫県宝塚市", 12, "温泉", "中山観音駅方面へ下山したあとに寄りやすい温泉候補です。", "arima"),
    bathSuggestion("ナチュールスパ宝塚", "兵庫県宝塚市", 18, "温泉", "宝塚市街へ戻る流れで組み合わせやすい候補です。", "arima"),
    bathSuggestion("宝塚温泉 ホテル若水", "兵庫県宝塚市", 18, "温泉", "宝塚駅方面へ抜ける日の候補にしやすい温泉です。", "arima"),
  ],
  hachibuse: [
    bathSuggestion("華の湯", "兵庫県神戸市須磨区", 18, "スーパー銭湯", "須磨方面へ下りたあとに立ち寄りやすい入浴候補です。", "arima"),
    bathSuggestion("あぐろの湯", "兵庫県神戸市長田区", 25, "スーパー銭湯", "長田・三宮方面へ戻るときに使いやすい候補です。", "arima"),
    bathSuggestion("HATなぎさの湯", "兵庫県神戸市", 35, "スーパー銭湯", "神戸市街側でゆっくり休みたい日の候補です。", "arima"),
  ],
  yokoo: [
    bathSuggestion("華の湯", "兵庫県神戸市須磨区", 20, "スーパー銭湯", "須磨アルプスの下山後に検討しやすい入浴候補です。", "arima"),
    bathSuggestion("あぐろの湯", "兵庫県神戸市長田区", 25, "スーパー銭湯", "板宿・長田方面へ抜ける帰り道で使いやすい候補です。", "arima"),
    bathSuggestion("HATなぎさの湯", "兵庫県神戸市", 35, "スーパー銭湯", "三宮方面へ戻る日に候補にしやすい施設です。", "arima"),
  ],
  arima_fuji: [
    bathSuggestion("三田天然温泉 寿ノ湯", "兵庫県三田市", 15, "スーパー銭湯", "有馬富士公園から三田市街へ戻る流れで使いやすい候補です。", "arima"),
    bathSuggestion("有馬温泉 太閤の湯", "兵庫県神戸市", 28, "日帰り温泉", "有馬方面へ寄り道する計画と相性の良い温泉候補です。", "arima"),
    bathSuggestion("花山乃湯", "兵庫県三田市", 30, "日帰り温泉", "三田・北神戸方面で汗を流したい日に検討しやすい施設です。", "arima"),
  ],
  shosha: [
    bathSuggestion("姫路市はやしだ交流センター ゆたりん", "兵庫県姫路市", 25, "日帰り温泉", "書写山から姫路北部へ抜ける帰り道で候補にしやすい施設です。", "kinosaki"),
    bathSuggestion("野天風呂 あかねの湯 姫路南店", "兵庫県姫路市", 28, "スーパー銭湯", "姫路市街方面へ戻る日に食事も合わせやすい候補です。", "kinosaki"),
    bathSuggestion("湯ったりハウス", "兵庫県姫路市", 25, "スーパー銭湯", "姫路駅方面へ戻るときに立ち寄りやすい候補です。", "kinosaki"),
  ],
  masui: [
    bathSuggestion("湯ったりハウス", "兵庫県姫路市", 18, "スーパー銭湯", "姫路市街側へ下山したあとに使いやすい入浴候補です。", "kinosaki"),
    bathSuggestion("野天風呂 あかねの湯 姫路南店", "兵庫県姫路市", 25, "スーパー銭湯", "姫路方面で食事まで済ませたい日の候補です。", "kinosaki"),
    bathSuggestion("姫路市はやしだ交流センター ゆたりん", "兵庫県姫路市", 30, "日帰り温泉", "姫路北部へ回る計画なら候補にしやすい施設です。", "kinosaki"),
  ],
  kobushi: [
    bathSuggestion("白雲谷温泉ゆぴか", "兵庫県小野市", 12, "日帰り温泉", "小野アルプスの下山後に組み合わせやすい定番候補です。", "kinosaki"),
    bathSuggestion("加古川天然温泉 ぷくぷくの湯", "兵庫県加古川市", 25, "スーパー銭湯", "加古川方面へ戻る日に使いやすい候補です。", "kinosaki"),
    bathSuggestion("野天風呂 あかねの湯 加古川店", "兵庫県加古川市", 30, "スーパー銭湯", "食事や休憩も合わせたい日に検討しやすい施設です。", "kinosaki"),
  ],
  yuzuruha: [
    bathSuggestion("南あわじクア施設 さんゆー館", "兵庫県南あわじ市", 20, "日帰り温泉", "諭鶴羽山の下山後に南あわじ側で候補にしやすい施設です。", "kinosaki"),
    bathSuggestion("ゆーぷる", "兵庫県南あわじ市", 25, "日帰り温泉", "淡路島南部で汗を流して帰りたい日に向いています。", "kinosaki"),
    bathSuggestion("美湯 松帆の郷", "兵庫県淡路市", 55, "日帰り温泉", "明石海峡大橋方面へ戻る長めの帰り道で検討しやすい候補です。", "kinosaki"),
  ],
  futakami: [
    bathSuggestion("太子温泉", "大阪府太子町", 15, "温泉", "二上山の大阪側へ下りる計画と組み合わせやすい温泉候補です。", "nara"),
    bathSuggestion("天然温泉 延羽の湯 本店 羽曳野", "大阪府羽曳野市", 25, "スーパー銭湯", "二上山から大阪方面へ戻る日に使いやすい大型温浴施設です。", "rotenburo"),
    bathSuggestion("天然温泉 虹の湯 大阪狭山店", "大阪府大阪狭山市", 35, "スーパー銭湯", "南大阪方面へ帰る流れで検討しやすい候補です。", "rotenburo"),
  ],
  shigi: [
    bathSuggestion("信貴山観光ホテル", "奈良県三郷町", 10, "温泉", "信貴山周辺で下山後に温泉を探すときの候補です。", "nara"),
    bathSuggestion("八尾温泉 喜多の湯", "大阪府八尾市", 25, "スーパー銭湯", "大阪側へ戻る日にも立ち寄りやすい大型入浴施設です。", "rotenburo"),
    bathSuggestion("音の花温泉", "奈良県生駒市", 35, "日帰り温泉", "奈良側へ回る計画で候補にしやすい温泉です。", "nara"),
  ],
  takayasu: [
    bathSuggestion("八尾温泉 喜多の湯", "大阪府八尾市", 20, "スーパー銭湯", "高安山から八尾方面へ戻るときに使いやすい候補です。", "rotenburo"),
    bathSuggestion("信貴山観光ホテル", "奈良県三郷町", 18, "温泉", "信貴山側へ回る計画なら候補にしやすい温泉です。", "nara"),
    bathSuggestion("天然温泉 延羽の湯 本店 羽曳野", "大阪府羽曳野市", 35, "スーパー銭湯", "南大阪方面へ戻る日にも検討しやすい候補です。", "rotenburo"),
  ],
  takaosan_osaka: [
    bathSuggestion("八尾温泉 喜多の湯", "大阪府八尾市", 22, "スーパー銭湯", "柏原・八尾方面で下山後に使いやすい入浴候補です。", "rotenburo"),
    bathSuggestion("天然温泉 延羽の湯 本店 羽曳野", "大阪府羽曳野市", 30, "スーパー銭湯", "南大阪へ戻る流れで寄り道しやすい大型温浴施設です。", "rotenburo"),
    bathSuggestion("太子温泉", "大阪府太子町", 30, "温泉", "太子町方面へ抜ける計画で候補にしやすい温泉です。", "nara"),
  ],
  inunaki: [
    bathSuggestion("犬鳴山温泉 不動口館", "大阪府泉佐野市", 5, "温泉", "犬鳴山の下山後にすぐ検討しやすい温泉候補です。", "rotenburo"),
    bathSuggestion("りんくうの湯", "大阪府泉佐野市", 25, "スーパー銭湯", "りんくう方面へ戻る日に食事や買い物と合わせやすい候補です。", "rotenburo"),
    bathSuggestion("天然温泉 清児の湯", "大阪府貝塚市", 25, "スーパー銭湯", "泉州方面へ戻る流れで使いやすい入浴施設です。", "rotenburo"),
  ],
  amashi: [
    bathSuggestion("天然温泉 清児の湯", "大阪府貝塚市", 18, "スーパー銭湯", "熊取・貝塚方面で下山後に探しやすい候補です。", "rotenburo"),
    bathSuggestion("りんくうの湯", "大阪府泉佐野市", 25, "スーパー銭湯", "泉佐野方面へ戻る日に使いやすい大型施設です。", "rotenburo"),
    bathSuggestion("犬鳴山温泉 不動口館", "大阪府泉佐野市", 30, "温泉", "犬鳴山方面へ回る計画なら温泉も合わせやすい候補です。", "rotenburo"),
  ],
  makio: [
    bathSuggestion("天然温泉 風の湯 河内長野店", "大阪府河内長野市", 25, "スーパー銭湯", "河内長野方面へ戻るときに使いやすい候補です。", "rotenburo"),
    bathSuggestion("奥水間温泉", "大阪府貝塚市", 30, "温泉", "和泉山系の下山後に静かな温泉を合わせたい日の候補です。", "rotenburo"),
    bathSuggestion("牛滝温泉 四季まつり", "大阪府岸和田市", 35, "日帰り温泉", "岸和田方面へ抜ける帰り道で検討しやすい施設です。", "rotenburo"),
  ],
  iwawaki: [
    bathSuggestion("天然温泉 風の湯 河内長野店", "大阪府河内長野市", 20, "スーパー銭湯", "岩湧山から河内長野方面へ戻る日に使いやすい候補です。", "rotenburo"),
    bathSuggestion("天見温泉 南天苑", "大阪府河内長野市", 20, "温泉", "天見方面へ下りる計画で候補にしやすい温泉です。", "rotenburo"),
    bathSuggestion("天然温泉 虹の湯 大阪狭山店", "大阪府大阪狭山市", 35, "スーパー銭湯", "南大阪方面へ戻る日に検討しやすい大型施設です。", "rotenburo"),
  ],
  izumi_katsuragi: [
    bathSuggestion("牛滝温泉 四季まつり", "大阪府岸和田市", 10, "日帰り温泉", "牛滝山側から下山する日に組み合わせやすい温泉候補です。", "rotenburo"),
    bathSuggestion("天然温泉 清児の湯", "大阪府貝塚市", 25, "スーパー銭湯", "泉州方面へ戻る流れで使いやすい候補です。", "rotenburo"),
    bathSuggestion("奥水間温泉", "大阪府貝塚市", 30, "温泉", "貝塚方面へ抜ける計画で候補にしやすい温泉です。", "rotenburo"),
  ],
  takatori_nara: [
    bathSuggestion("橿原ぽかぽか温泉", "奈良県橿原市", 18, "スーパー銭湯", "高取山から橿原方面へ戻るときに使いやすい候補です。", "nara"),
    bathSuggestion("あすかの湯", "奈良県橿原市", 20, "スーパー銭湯", "明日香・橿原方面の観光と合わせやすい入浴候補です。", "nara"),
    bathSuggestion("大宇陀温泉 あきののゆ", "奈良県宇陀市", 30, "日帰り温泉", "奈良南部へ回る計画で検討しやすい温泉です。", "nara"),
  ],
  miwa: [
    bathSuggestion("奈良健康ランド", "奈良県天理市", 20, "スーパー銭湯", "桜井・天理方面で食事や休憩までまとめやすい候補です。", "nara"),
    bathSuggestion("橿原ぽかぽか温泉", "奈良県橿原市", 22, "スーパー銭湯", "橿原方面へ戻る日にも使いやすい入浴施設です。", "nara"),
    bathSuggestion("大宇陀温泉 あきののゆ", "奈良県宇陀市", 25, "日帰り温泉", "宇陀方面へ抜ける計画で候補にしやすい温泉です。", "nara"),
  ],
  kasuga: [
    bathSuggestion("ゆららの湯 奈良店", "奈良県奈良市", 18, "スーパー銭湯", "奈良市内へ戻る流れで使いやすい入浴候補です。", "nara"),
    bathSuggestion("ゆららの湯 押熊店", "奈良県奈良市", 25, "スーパー銭湯", "奈良北部へ抜ける帰り道で検討しやすい候補です。", "nara"),
    bathSuggestion("奈良健康ランド", "奈良県天理市", 30, "スーパー銭湯", "食事や休憩もまとめたい日に向いている候補です。", "nara"),
  ],
  yoshino: [
    bathSuggestion("吉野温泉元湯", "奈良県吉野町", 10, "温泉", "吉野山の下山後に温泉を合わせたい日の候補です。", "nara"),
    bathSuggestion("中荘温泉", "奈良県吉野町", 20, "日帰り温泉", "吉野町内で汗を流して帰りたい日に検討しやすい施設です。", "nara"),
    bathSuggestion("大宇陀温泉 あきののゆ", "奈良県宇陀市", 35, "日帰り温泉", "宇陀方面へ回る帰り道で候補にしやすい温泉です。", "nara"),
  ],
  daimonji: [
    bathSuggestion("京都北白川天然ラジウム温泉 えいせん京", "京都府京都市", 25, "温泉", "左京区側で下山後に温泉を探すときの候補です。", "kinosaki"),
    bathSuggestion("天然温泉 天翔の湯 大門", "京都府京都市", 30, "温泉", "京都市街へ戻る流れで検討しやすい温泉候補です。", "kinosaki"),
    bathSuggestion("仁左衛門の湯", "京都府京都市", 35, "スーパー銭湯", "西京区方面へ抜ける計画で使いやすい候補です。", "kinosaki"),
  ],
  inari: [
    bathSuggestion("伏見力の湯", "京都府京都市", 15, "スーパー銭湯", "伏見方面へ戻るときに使いやすい大型入浴施設です。", "kinosaki"),
    bathSuggestion("天然温泉 天翔の湯 大門", "京都府京都市", 20, "温泉", "京都駅方面へ戻る流れで検討しやすい温泉候補です。", "kinosaki"),
    bathSuggestion("仁左衛門の湯", "京都府京都市", 30, "スーパー銭湯", "京都市内で食事も合わせたい日に候補にしやすい施設です。", "kinosaki"),
  ],
  yoshidayama: [
    bathSuggestion("京都北白川天然ラジウム温泉 えいせん京", "京都府京都市", 20, "温泉", "左京区内で短時間の山歩き後に検討しやすい温泉候補です。", "kinosaki"),
    bathSuggestion("天然温泉 天翔の湯 大門", "京都府京都市", 30, "温泉", "京都市街へ戻る日に使いやすい候補です。", "kinosaki"),
    bathSuggestion("仁左衛門の湯", "京都府京都市", 35, "スーパー銭湯", "京都西側へ移動する日なら候補にしやすい施設です。", "kinosaki"),
  ],
  kurama: [
    bathSuggestion("京都北白川天然ラジウム温泉 えいせん京", "京都府京都市", 35, "温泉", "鞍馬方面から市街地へ戻る途中で検討しやすい温泉候補です。", "kinosaki"),
    bathSuggestion("天然温泉 天翔の湯 大門", "京都府京都市", 45, "温泉", "京都駅方面へ戻る長めの帰り道で候補にしやすい施設です。", "kinosaki"),
    bathSuggestion("仁左衛門の湯", "京都府京都市", 50, "スーパー銭湯", "京都市内へ戻ってゆっくり休みたい日の候補です。", "kinosaki"),
  ],
  ushio: [
    bathSuggestion("大津温泉 おふろcafeびわこ座", "滋賀県大津市", 20, "スーパー銭湯", "山科・大津方面へ下山したあとに使いやすい候補です。", "ogoto"),
    bathSuggestion("天然温泉 天翔の湯 大門", "京都府京都市", 30, "温泉", "京都市街へ戻る日にも検討しやすい温泉です。", "kinosaki"),
    bathSuggestion("仁左衛門の湯", "京都府京都市", 35, "スーパー銭湯", "京都方面で食事も合わせたい日の候補です。", "kinosaki"),
  ],
  mikami: [
    bathSuggestion("守山天然温泉 ほたるの湯", "滋賀県守山市", 15, "スーパー銭湯", "野洲・守山方面へ戻るときに使いやすい候補です。", "ogoto"),
    bathSuggestion("草津湯元 水春", "滋賀県草津市", 25, "スーパー銭湯", "草津方面へ抜ける帰り道で検討しやすい大型施設です。", "ogoto"),
    bathSuggestion("十二坊温泉ゆらら", "滋賀県湖南市", 30, "日帰り温泉", "湖南方面へ回る計画で候補にしやすい温泉です。", "ogoto"),
  ],
  hachimanyama: [
    bathSuggestion("休暇村近江八幡 宮ヶ浜の湯", "滋賀県近江八幡市", 20, "温泉", "近江八幡周辺で琵琶湖側へ寄る日に候補にしやすい温泉です。", "ogoto"),
    bathSuggestion("守山天然温泉 ほたるの湯", "滋賀県守山市", 30, "スーパー銭湯", "守山方面へ戻る流れで使いやすい入浴施設です。", "ogoto"),
    bathSuggestion("草津湯元 水春", "滋賀県草津市", 35, "スーパー銭湯", "草津・京都方面へ帰る日にも検討しやすい候補です。", "ogoto"),
  ],
  shizugatake: [
    bathSuggestion("北近江リゾート 天然温泉 北近江の湯", "滋賀県長浜市", 15, "日帰り温泉", "賤ヶ岳から木之本・長浜方面へ戻る日に使いやすい候補です。", "ogoto"),
    bathSuggestion("あねがわ温泉", "滋賀県長浜市", 28, "日帰り温泉", "長浜方面へ抜ける帰り道で検討しやすい温泉です。", "ogoto"),
    bathSuggestion("長浜太閤温泉 浜湖月", "滋賀県長浜市", 30, "温泉", "琵琶湖側へ戻って休みたい日の候補です。", "ogoto"),
  ],
  odani: [
    bathSuggestion("北近江リゾート 天然温泉 北近江の湯", "滋賀県長浜市", 18, "日帰り温泉", "小谷山から長浜・木之本方面へ戻る日に使いやすい候補です。", "ogoto"),
    bathSuggestion("あねがわ温泉", "滋賀県長浜市", 22, "日帰り温泉", "長浜方面の帰り道で立ち寄りやすい温泉です。", "ogoto"),
    bathSuggestion("長浜太閤温泉 浜湖月", "滋賀県長浜市", 30, "温泉", "琵琶湖側へ回る計画で候補にしやすい温泉です。", "ogoto"),
  ],
  iidoyama: [
    bathSuggestion("十二坊温泉ゆらら", "滋賀県湖南市", 20, "日帰り温泉", "甲賀・湖南方面の山歩き後に候補にしやすい温泉です。", "ogoto"),
    bathSuggestion("草津湯元 水春", "滋賀県草津市", 35, "スーパー銭湯", "草津方面へ戻る日に食事も合わせやすい候補です。", "ogoto"),
    bathSuggestion("甲賀温泉 やっぽんぽんの湯", "滋賀県甲賀市", 35, "日帰り温泉", "甲賀方面へ抜ける計画で候補にしやすい温泉施設です。", "ogoto"),
  ],
  nagusa: [
    bathSuggestion("紀州黒潮温泉", "和歌山県和歌山市", 15, "温泉", "和歌浦方面へ戻る流れで立ち寄りやすい温泉候補です。", "kawayu"),
    bathSuggestion("ふくろうの湯", "和歌山県和歌山市", 20, "温泉", "和歌山市街へ戻る日に使いやすい入浴施設です。", "kawayu"),
    bathSuggestion("花山温泉 薬師の湯", "和歌山県和歌山市", 25, "温泉", "和歌山市内で本格的な温泉を合わせたい日の候補です。", "kawayu"),
  ],
  takatsuko: [
    bathSuggestion("紀州黒潮温泉", "和歌山県和歌山市", 15, "温泉", "雑賀崎・和歌浦方面の散策後に組み合わせやすい温泉候補です。", "kawayu"),
    bathSuggestion("ふくろうの湯", "和歌山県和歌山市", 20, "温泉", "和歌山市街へ戻る帰り道で使いやすい候補です。", "kawayu"),
    bathSuggestion("花山温泉 薬師の湯", "和歌山県和歌山市", 25, "温泉", "車で和歌山市内へ戻る日にも検討しやすい温泉です。", "kawayu"),
  ],
  oyama_kyoto: [
    bathSuggestion("福知山温泉 養老の湯", "京都府福知山市", 35, "日帰り温泉", "大江山から福知山方面へ戻る日に候補にしやすい温泉です。", "kinosaki"),
    bathSuggestion("あやべ温泉 二王の湯", "京都府綾部市", 40, "日帰り温泉", "丹波方面へ回る計画なら検討しやすい温泉施設です。", "kinosaki"),
    bathSuggestion("天橋立温泉 智恵の湯", "京都府宮津市", 50, "日帰り温泉", "宮津方面へ抜ける帰り道で候補にしやすい温泉です。", "kinosaki"),
  ],
  yura: [
    bathSuggestion("天橋立温泉 智恵の湯", "京都府宮津市", 25, "日帰り温泉", "丹後由良から宮津方面へ戻る日に候補にしやすい温泉です。", "kinosaki"),
    bathSuggestion("宮津温泉 ピント湯", "京都府宮津市", 25, "日帰り温泉", "宮津市街へ戻る流れで使いやすい入浴候補です。", "kinosaki"),
    bathSuggestion("福知山温泉 養老の湯", "京都府福知山市", 50, "日帰り温泉", "福知山方面へ帰る長めの帰り道で候補にしやすい施設です。", "kinosaki"),
  ],
  mitsumine: [
    bathSuggestion("みつえ温泉 姫石の湯", "奈良県御杖村", 15, "日帰り温泉", "三峰山から御杖方面へ下山する日に組み合わせやすい候補です。", "nara"),
    bathSuggestion("曽爾高原温泉 お亀の湯", "奈良県曽爾村", 30, "日帰り温泉", "曽爾方面へ回る計画で候補にしやすい温泉です。", "nara"),
    bathSuggestion("美榛苑", "奈良県宇陀市", 35, "温泉", "宇陀方面へ戻る日に検討しやすい候補です。", "nara"),
  ],
  takami: [
    bathSuggestion("たかすみ温泉", "奈良県東吉野村", 5, "日帰り温泉", "高見山の登山口周辺でそのまま検討しやすい温泉候補です。", "nara"),
    bathSuggestion("やはた温泉", "奈良県東吉野村", 25, "日帰り温泉", "東吉野村内で下山後に立ち寄りやすい温泉です。", "nara"),
    bathSuggestion("みつえ温泉 姫石の湯", "奈良県御杖村", 35, "日帰り温泉", "御杖方面へ抜ける計画で候補にしやすい施設です。", "nara"),
  ],
  kannonmine: [
    bathSuggestion("洞川温泉センター", "奈良県天川村", 15, "日帰り温泉", "観音峰から洞川方面へ戻る日に立ち寄りやすい候補です。", "nara"),
    bathSuggestion("天の川温泉センター", "奈良県天川村", 25, "日帰り温泉", "天川村内で下山後に温泉を合わせたい日の候補です。", "nara"),
    bathSuggestion("黒滝の湯", "奈良県黒滝村", 30, "日帰り温泉", "下市・黒滝方面へ帰る計画で使いやすい施設です。", "nara"),
  ],
  yamanoabe: [
    bathSuggestion("奈良健康ランド", "奈良県天理市", 15, "スーパー銭湯", "天理方面で食事や休憩までまとめやすい大型施設です。", "nara"),
    bathSuggestion("ゆららの湯 奈良店", "奈良県奈良市", 25, "スーパー銭湯", "奈良市内へ戻る流れで候補にしやすい入浴施設です。", "nara"),
    bathSuggestion("橿原ぽかぽか温泉", "奈良県橿原市", 30, "スーパー銭湯", "橿原方面へ抜ける帰り道で検討しやすい候補です。", "nara"),
  ],
  matsuo_ikaruga: [
    bathSuggestion("奈良健康ランド", "奈良県天理市", 20, "スーパー銭湯", "斑鳩・天理方面で下山後に使いやすい候補です。", "nara"),
    bathSuggestion("信貴山観光ホテル", "奈良県三郷町", 25, "温泉", "信貴山方面へ回る計画で候補にしやすい温泉です。", "nara"),
    bathSuggestion("音の花温泉", "奈良県生駒市", 30, "日帰り温泉", "生駒方面へ戻る日にも検討しやすい温泉候補です。", "nara"),
  ],
});

const onsenPhotos = {
  arima: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Arima_Onsen_Kobe04s5s4272.jpg/960px-Arima_Onsen_Kobe04s5s4272.jpg",
    file: "Arima Onsen Kobe04s5s4272.jpg",
    label: "有馬温泉",
  },
  arimaRiver: {
    url: commonsImageUrl("Arima Onsen River 2013.jpg"),
    file: "Arima Onsen River 2013.jpg",
    label: "有馬温泉",
  },
  arimaRopeway: {
    url: commonsImageUrl("170811 Rokko-Arima Ropeway Kobe Japan00n.jpg"),
    file: "170811 Rokko-Arima Ropeway Kobe Japan00n.jpg",
    label: "有馬方面",
  },
  minoh: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Minoo_Kanko_Hotel.jpg/960px-Minoo_Kanko_Hotel.jpg",
    file: "Minoo Kanko Hotel.jpg",
    label: "箕面温泉",
  },
  minohSpa: {
    url: commonsImageUrl("MINOO-ONSEN.JPG"),
    file: "MINOO-ONSEN.JPG",
    label: "箕面温泉",
  },
  minohFalls: {
    url: commonsImageUrl("Minoh Falls Minoh Osaka pref Japan01s5.jpg"),
    file: "Minoh Falls Minoh Osaka pref Japan01s5.jpg",
    label: "箕面エリア",
  },
  nara: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Totsukawa_spa_town_2011.JPG/960px-Totsukawa_spa_town_2011.JPG",
    file: "Totsukawa spa town 2011.JPG",
    label: "奈良の温泉地",
  },
  naraRoten: {
    url: commonsImageUrl("Rotenburo - panoramio.jpg"),
    file: "Rotenburo - panoramio.jpg",
    label: "奈良の露天風呂",
  },
  naraIyashi: {
    url: commonsImageUrl("Iyashinoyu - panoramio.jpg"),
    file: "Iyashinoyu - panoramio.jpg",
    label: "奈良の温泉",
  },
  ogoto: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Yumotokan-Ogoto_onsen_Lake_Biwa_view_2.jpg/960px-Yumotokan-Ogoto_onsen_Lake_Biwa_view_2.jpg",
    file: "Yumotokan-Ogoto onsen Lake Biwa view 2.jpg",
    label: "おごと温泉",
  },
  ogotoStation: {
    url: commonsImageUrl("Ogoto-Onsen Station.jpg"),
    file: "Ogoto-Onsen Station.jpg",
    label: "おごと温泉",
  },
  ogotoTown: {
    url: commonsImageUrl("Ogoto station-Nov.2013.jpg"),
    file: "Ogoto station-Nov.2013.jpg",
    label: "おごと温泉",
  },
  kawayu: {
    url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Kawayu_Onsen_in_Tanabe.jpg",
    file: "Kawayu Onsen in Tanabe.jpg",
    label: "川湯温泉",
  },
  kawayuRiver: {
    url: commonsImageUrl("Kawayu onsen1.JPG"),
    file: "Kawayu onsen1.JPG",
    label: "川湯温泉",
  },
  kawayuKumano: {
    url: commonsImageUrl("Kumano Kodo pilgrimage route Kawa-yu Onsen World heritage 熊野古道 川湯温泉08.JPG"),
    file: "Kumano Kodo pilgrimage route Kawa-yu Onsen World heritage 熊野古道 川湯温泉08.JPG",
    label: "川湯温泉",
  },
  kinosaki: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Kinosaki_Onsen_%282019%29_01.jpg/960px-Kinosaki_Onsen_%282019%29_01.jpg",
    file: "Kinosaki Onsen (2019) 01.jpg",
    label: "城崎温泉",
  },
  kinosakiStation: {
    url: commonsImageUrl("Kinosaki onsen station.jpg"),
    file: "Kinosaki onsen station.jpg",
    label: "城崎温泉",
  },
  kinosakiInfo: {
    url: commonsImageUrl("Kinosaki onsen tourist information center.jpg"),
    file: "Kinosaki onsen tourist information center.jpg",
    label: "城崎温泉街",
  },
  ryujin: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Ryuzinonsenmotoyu.jpg/960px-Ryuzinonsenmotoyu.jpg",
    file: "Ryuzinonsenmotoyu.jpg",
    label: "龍神温泉",
  },
  ryujinSpa1: {
    url: commonsImageUrl("Ryujin Spa1.JPG"),
    file: "Ryujin Spa1.JPG",
    label: "龍神温泉",
  },
  ryujinSpa2: {
    url: commonsImageUrl("Ryujin Spa2.JPG"),
    file: "Ryujin Spa2.JPG",
    label: "龍神温泉",
  },
  rotenburo: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Rotenburo_-_panoramio.jpg/960px-Rotenburo_-_panoramio.jpg",
    file: "Rotenburo - panoramio.jpg",
    label: "温泉",
  },
  kawayuBath: {
    url: commonsImageUrl("Kawayu onsen1.JPG"),
    file: "Kawayu onsen1.JPG",
    label: "温泉",
  },
  ryujinBath: {
    url: commonsImageUrl("Ryujin Spa1.JPG"),
    file: "Ryujin Spa1.JPG",
    label: "温泉",
  },
};
const onsenPhotoVariants = {
  arima: ["arima", "arimaRiver", "arimaRopeway"],
  minoh: ["minoh", "minohSpa", "minohFalls"],
  nara: ["nara", "naraRoten", "naraIyashi"],
  ogoto: ["ogoto", "ogotoStation", "ogotoTown"],
  kawayu: ["kawayu", "kawayuRiver", "kawayuKumano"],
  kinosaki: ["kinosaki", "kinosakiStation", "kinosakiInfo"],
  ryujin: ["ryujin", "ryujinSpa1", "ryujinSpa2"],
  rotenburo: ["rotenburo", "kawayuBath", "ryujinBath"],
};
const officialOnsenPhotos = {
  "伏尾温泉 不死王閣": {
    url: "https://www.fushioukaku.co.jp/top/img/day-trip_img01.png",
    source: "https://www.fushioukaku.co.jp/",
    label: "伏尾温泉 不死王閣",
    credit: "公式写真",
  },
  "箕面湯元 水春": {
    url: "https://suisyun.jp/mino/wp-content/uploads/2022/06/ogp.jpg",
    source: "https://suisyun.jp/mino/",
    label: "箕面湯元 水春",
    credit: "公式写真",
  },
  "東香里湯元 水春": {
    url: "https://suisyun.jp/neyagawa/wp-content/uploads/2022/05/ogp.png",
    source: "https://suisyun.jp/neyagawa/",
    label: "東香里湯元 水春",
    credit: "公式写真",
  },
  "神戸みなと温泉 蓮": {
    url: "https://ren-onsen.jp/img/og_image.jpg",
    source: "https://ren-onsen.jp/",
    label: "神戸みなと温泉 蓮",
    credit: "公式写真",
  },
  "HATなぎさの湯": {
    url: "https://nagisa-u.com/wp/wp-content/uploads/ogimage.jpg",
    source: "https://nagisa-u.com/",
    label: "HATなぎさの湯",
    credit: "公式写真",
  },
  "東大阪石切温泉 ホテルセイリュウ": {
    url: "https://www.hotelseiryu.com/ogp.jpg",
    source: "https://www.hotelseiryu.com/",
    label: "ホテルセイリュウ",
    credit: "公式写真",
  },
  "摂津峡花の里温泉 山水館": {
    url: "https://sansuikan.com/common/img/img_main00.jpg",
    source: "https://sansuikan.com/",
    label: "山水館",
    credit: "公式写真",
  },
  "奈良健康ランド": {
    url: "https://www.narakenkoland.net/assets/top/facility_spa-c4866dcbe7e8e719329cf7f1d83ca5933f30acee41c919b09cb4d3ea226b9fbd.jpg",
    source: "https://www.narakenkoland.net/",
    label: "奈良健康ランド",
    credit: "公式写真",
  },
  "大津温泉 おふろcafeびわこ座": {
    url: "https://ofurocafe-biwakoza.com/common/img/ogp.png",
    source: "https://ofurocafe-biwakoza.com/",
    label: "びわこ座",
    credit: "公式写真",
  },
  "スパリゾート雄琴 あがりゃんせ": {
    url: "https://www.agaryanse.co.jp/wp-content/themes/agaryanse_theme/images/home/mv_img01.jpg",
    source: "https://www.agaryanse.co.jp/",
    label: "あがりゃんせ",
    credit: "公式写真",
  },
  "りんくうの湯": {
    url: "https://rinkunoyu.jp/wp/wp-content/uploads/2023/05/ogp_2101.png",
    source: "https://rinkunoyu.jp/",
    label: "りんくうの湯",
    credit: "公式写真",
  },
  "草津湯元 水春": {
    url: "https://suisyun.jp/kusatsu/wp-content/uploads/2023/12/ogp.png",
    source: "https://suisyun.jp/kusatsu/",
    label: "草津湯元 水春",
    credit: "公式写真",
  },
  "比良とぴあ": {
    url: "https://www.hiratopia.com/images/main_01.jpg",
    source: "https://www.hiratopia.com/",
    label: "比良とぴあ",
    credit: "公式写真",
  },
  "くつき温泉てんくう": {
    url: "https://gp-kutsuki.com/wp-content/themes/twentyseventeen-child/assets/images/og-image.png",
    source: "https://gp-kutsuki.com/tencoo/",
    label: "くつき温泉てんくう",
    credit: "公式写真",
  },
  "高野山温泉 福智院": {
    url: "https://fukuchiin.com/wp-content/uploads/logo_ogp.jpg",
    source: "https://www.fukuchiin.com/",
    label: "福智院",
    credit: "公式写真",
  },
  "かつらぎ温泉 八風の湯": {
    url: "https://www.happuno-yu.com/images/back1.jpg",
    source: "https://www.happuno-yu.com/",
    label: "八風の湯",
    credit: "公式写真",
  },
  "さがの温泉 天山の湯": {
    url: "https://ndg.jp/wp-content/uploads/2025/04/kinkaku.webp",
    source: "https://ndg.jp/tenzan/",
    label: "天山の湯",
    credit: "公式写真",
  },
  "塩田温泉 湯元 上山旅館": {
    url: "https://ueyama-ryokan.com/img/common/img_ogpimage.png",
    source: "https://www.ueyama-ryokan.com/",
    label: "上山旅館",
    credit: "公式写真",
  },
  "あねがわ温泉": {
    url: "https://static.wixstatic.com/media/3ea8c1_cd68419b4be0416b835c37d5ac04490e~mv2.jpg/v1/fill/w_700,h_580,al_c/3ea8c1_cd68419b4be0416b835c37d5ac04490e~mv2.jpg",
    source: "https://www.mau.co.jp/onsen",
    label: "あねがわ温泉",
    credit: "公式写真",
  },
  "季楽里龍神": {
    url: "https://kirari-ryujin.com/common/img/ogp.jpg",
    source: "https://kirari-ryujin.com/",
    label: "季楽里龍神",
    credit: "公式写真",
  },
  "ホテル杉の湯": {
    url: "https://www.suginoyu.com/common/img/ogp.jpg",
    source: "https://www.suginoyu.com/",
    label: "ホテル杉の湯",
    credit: "公式写真",
  },
  "大宇陀温泉 あきののゆ": {
    url: "https://akinonoyu.nara.jp/wp-content/uploads/2023/04/topbana01.jpg",
    source: "https://akinonoyu.nara.jp/",
    label: "あきののゆ",
    credit: "公式写真",
  },
  "天の川温泉センター": {
    url: "https://www.vill.tenkawa.nara.jp/tourism/wp-content/uploads/2021/07/DSC3465.jpg",
    source: "https://www.vill.tenkawa.nara.jp/tourism/spot/5174/",
    label: "天の川温泉センター",
    credit: "公式写真",
  },
  "洞川温泉センター": {
    url: "https://www.vill.tenkawa.nara.jp/tourism/wp-content/uploads/2021/07/resize-5166.jpg",
    source: "https://www.vill.tenkawa.nara.jp/tourism/spot/5166/",
    label: "洞川温泉センター",
    credit: "公式写真",
  },
};
const onsenPhotoKeysByMountain = {
  kongo: "nara",
  ikoma: "nara",
  ponpon: "minoh",
  satsuki: "minoh",
  konosan: "minoh",
  rokko: "arima",
  maya: "arima",
  katsuragi: "nara",
  minoh: "minoh",
  iimori: "minoh",
  wakakusa: "nara",
  otowa: "ogoto",
  kisen: "rotenburo",
  hiei: "ogoto",
  konze: "ogoto",
  takamikura: "kinosaki",
  horai: "ogoto",
  bentendake: "kawayu",
  atago: "kinosaki",
  seppiko: "kinosaki",
  ibuki: "ogoto",
  buna: "ogoto",
  soni: "nara",
  aoba: "kinosaki",
  ryujin: "ryujin",
  odaigahara: "kawayu",
  hyono: "kinosaki",
  hakkyou: "nara",
};
const mountainPhotos = {
  kongo: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Mount_Kongo%28Kongosanchi%297.jpg/1280px-Mount_Kongo%28Kongosanchi%297.jpg",
    file: "Mount Kongo(Kongosanchi)7.jpg",
  },
  ikoma: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mt_Ikoma1600px.JPG/1280px-Mt_Ikoma1600px.JPG",
    file: "Mt Ikoma1600px.JPG",
  },
  ponpon: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Mt.PonPon.jpg/1280px-Mt.PonPon.jpg",
    file: "Mt.PonPon.jpg",
  },
  satsuki: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Mt_satuki01.jpeg/1280px-Mt_satuki01.jpeg",
    file: "Mt satuki01.jpeg",
  },
  konosan: {
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Konosan.jpg",
    file: "Konosan.jpg",
  },
  rokko: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mt_rokko01s2816.jpg/1280px-Mt_rokko01s2816.jpg",
    file: "Mt rokko01s2816.jpg",
  },
  maya: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Mount_Maya_beside_Kobe.jpg/1280px-Mount_Maya_beside_Kobe.jpg",
    file: "Mount Maya beside Kobe.jpg",
  },
  katsuragi: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mount_Yamatokatsurag9.jpg/1280px-Mount_Yamatokatsurag9.jpg",
    file: "Mount Yamatokatsurag9.jpg",
  },
  minoh: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Minoh_Falls_Minoh_Osaka_pref_Japan01s5.jpg/1280px-Minoh_Falls_Minoh_Osaka_pref_Japan01s5.jpg",
    file: "Minoh Falls Minoh Osaka pref Japan01s5.jpg",
  },
  iimori: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Iimoriyama5.jpg/1280px-Iimoriyama5.jpg",
    file: "Iimoriyama5.jpg",
  },
  wakakusa: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/WakakusaYama.jpg/1280px-WakakusaYama.jpg",
    file: "WakakusaYama.jpg",
  },
  otowa: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Otowayama_Shiga_Side.jpg/1280px-Otowayama_Shiga_Side.jpg",
    file: "Otowayama Shiga Side.jpg",
  },
  kisen: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/%E7%8A%AC%E9%B3%B4%E5%B1%B1%E6%B8%93%E8%B0%B7_2013.11.23_-_panoramio.jpg/1280px-%E7%8A%AC%E9%B3%B4%E5%B1%B1%E6%B8%93%E8%B0%B7_2013.11.23_-_panoramio.jpg",
    file: "犬鳴山渓谷 2013.11.23 - panoramio.jpg",
  },
  hiei: {
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Hieizan_biwakogawa.JPG",
    file: "Hieizan biwakogawa.JPG",
  },
  konze: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Komasaka_Magaibutsu-Buddha_figure_carved_on_a_rock_face_in_Ritto_city.jpg/1280px-Komasaka_Magaibutsu-Buddha_figure_carved_on_a_rock_face_in_Ritto_city.jpg",
    file: "Komasaka Magaibutsu-Buddha figure carved on a rock face in Ritto city.jpg",
  },
  takamikura: {
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Takamikura1.jpg",
    file: "Takamikura1.jpg",
  },
  horai: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mt._Hira-san_01.jpg/1280px-Mt._Hira-san_01.jpg",
    file: "Mt. Hira-san 01.jpg",
  },
  bentendake: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Danjogaran_Koyasan12n3200.jpg/1280px-Danjogaran_Koyasan12n3200.jpg",
    file: "Danjogaran Koyasan12n3200.jpg",
  },
  atago: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Drone_panorama_of_Mount_Atago_from_the_south.jpg/1280px-Drone_panorama_of_Mount_Atago_from_the_south.jpg",
    file: "Drone panorama of Mount Atago from the south.jpg",
  },
  seppiko: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mount_Seppiko.jpg/1280px-Mount_Seppiko.jpg",
    file: "Mount Seppiko.jpg",
  },
  ibuki: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ibukiyama_from_Kannonzaka%28Maibara-Nagahama%29.jpg/1280px-Ibukiyama_from_Kannonzaka%28Maibara-Nagahama%29.jpg",
    file: "Ibukiyama from Kannonzaka(Maibara-Nagahama).jpg",
  },
  buna: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Mount_Bunagatake.jpg/1280px-Mount_Bunagatake.jpg",
    file: "Mount Bunagatake.jpg",
  },
  soni: {
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Sonikogen_from_Mount_Kuroso.jpg",
    file: "Sonikogen from Mount Kuroso.jpg",
  },
  aoba: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Mount_Aoba_%28Kyoto%2C_Fukui%29.jpg/1280px-Mount_Aoba_%28Kyoto%2C_Fukui%29.jpg",
    file: "Mount Aoba (Kyoto, Fukui).jpg",
  },
  ryujin: {
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Mt_ryujin.JPG",
    file: "Mt ryujin.JPG",
  },
  odaigahara: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Mount_Odaigahara_around_Daijagura.jpg/1280px-Mount_Odaigahara_around_Daijagura.jpg",
    file: "Mount Odaigahara around Daijagura.jpg",
  },
  hyono: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Hyonosen01s1600.jpg/1280px-Hyonosen01s1600.jpg",
    file: "Hyonosen01s1600.jpg",
  },
  hakkyou: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Hakkyo01.JPG/1280px-Hakkyo01.JPG",
    file: "Hakkyo01.JPG",
  },
  myoken: {
    url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Mount_Myoken_%28Nose%291.jpg",
    file: "Mount Myoken (Nose)1.jpg",
  },
  kabutoyama: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Hyogo_prefectural_Kabutoyama_Forest_Park04n4592.jpg/1280px-Hyogo_prefectural_Kabutoyama_Forest_Park04n4592.jpg",
    file: "Hyogo prefectural Kabutoyama Forest Park04n4592.jpg",
  },
  nakayama: {
    url: "https://upload.wikimedia.org/wikipedia/commons/7/76/Nakayama_%28Hyogo%291.jpg",
    file: "Nakayama (Hyogo)1.jpg",
  },
  hachibuse: {
    url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Sumaurakoen_st01s2816.jpg",
    file: "Sumaurakoen st01s2816.jpg",
  },
  yokoo: {
    url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Mount_Higashi_%28Suma-ku%2C_Kobe%29_umanose.jpg",
    file: "Mount Higashi (Suma-ku, Kobe) umanose.jpg",
  },
  arima_fuji: {
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/ArimaFuji.jpg",
    file: "ArimaFuji.jpg",
  },
  shosha: {
    url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Mt.Shosha.jpg",
    file: "Mt.Shosha.jpg",
  },
  masui: {
    url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Mt.Masui_M9.jpg",
    file: "Mt.Masui M9.jpg",
  },
  kobushi: {
    url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Ono_Alps.JPG",
    file: "Ono Alps.JPG",
  },
  yuzuruha: {
    url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Yuzuruha_Mts_3.jpg",
    file: "Yuzuruha Mts 3.jpg",
  },
  futakami: {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Mount_Nijo%2C_zenkei.jpg",
    file: "Mount Nijo, zenkei.jpg",
  },
  shigi: {
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Mount_Shigi1.jpg",
    file: "Mount Shigi1.jpg",
  },
  takayasu: {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Mt_Takayasu.JPG",
    file: "Mt Takayasu.JPG",
  },
  takaosan_osaka: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Takaoyama%2C_Osaka02.JPG/1280px-Takaoyama%2C_Osaka02.JPG",
    file: "Takaoyama, Osaka02.JPG",
  },
  inunaki: {
    url: "https://upload.wikimedia.org/wikipedia/commons/a/ac/%E7%8A%AC%E9%B3%B4%E5%B1%B1%E4%B8%83%E5%AE%9D%E7%80%A7%E5%AF%BA%E3%81%AE%E8%BA%AB%E4%BB%A3%E4%B8%8D%E5%8B%95_%E6%B3%89%E4%BD%90%E9%87%8E%E5%B8%82_2013.11.23_-_panoramio.jpg",
    file: "犬鳴山七宝瀧寺の身代不動 泉佐野市 2013.11.23 - panoramio.jpg",
  },
  amashi: {
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Ameyama_%28Kumatori%2C_Osaka%29_kyukeisho.jpg",
    file: "Ameyama (Kumatori, Osaka) kyukeisho.jpg",
  },
  makio: {
    url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Mount_Makio2.jpg",
    file: "Mount Makio2.jpg",
  },
  iwawaki: {
    url: "https://upload.wikimedia.org/wikipedia/commons/5/57/MtIwawaki.JPG",
    file: "MtIwawaki.JPG",
  },
  izumi_katsuragi: {
    url: "https://upload.wikimedia.org/wikipedia/commons/2/22/Izumi-Katuragisan-Hachidai-ryuoujinjya-2023april.jpg",
    file: "Izumi-Katuragisan-Hachidai-ryuoujinjya-2023april.jpg",
  },
  takatori_nara: {
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Takatori_Castle_air.jpg",
    file: "Takatori Castle air.jpg",
  },
  miwa: {
    url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Mount_Miwa.jpg",
    file: "Mount Miwa.jpg",
  },
  kasuga: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mount_Mikasa_and_Mount_Hana%2C_enkei.jpg/1280px-Mount_Mikasa_and_Mount_Hana%2C_enkei.jpg",
    file: "Mount Mikasa and Mount Hana, enkei.jpg",
  },
  yoshino: {
    url: "https://upload.wikimedia.org/wikipedia/commons/7/79/Cherry_blossoms_at_Yoshinoyama_01.jpg",
    file: "Cherry blossoms at Yoshinoyama 01.jpg",
  },
  daimonji: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Nyoigatake_long_001.jpg/1280px-Nyoigatake_long_001.jpg",
    file: "Nyoigatake long 001.jpg",
  },
  inari: {
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Fushimi_Inari_shrine_Senbon%28Thousand%29_torii_%2C_%E4%BC%8F%E8%A6%8B%E7%A8%B2%E8%8D%B7%E5%A4%A7%E7%A4%BE_%E5%8D%83%E6%9C%AC%E9%B3%A5%E5%B1%85_-_panoramio.jpg",
    file: "Fushimi Inari shrine Senbon(Thousand) torii , 伏見稲荷大社 千本鳥居 - panoramio.jpg",
  },
  yoshidayama: {
    url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Kyoto_Yoshidayama_20181202.jpg",
    file: "Kyoto Yoshidayama 20181202.jpg",
  },
  kurama: {
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Kurama-dera_sanmon.jpg",
    file: "Kurama-dera sanmon.jpg",
  },
  ushio: {
    url: "https://image.jimcdn.com/app/cms/image/transf/none/path/s3845c98fff39244a/backgroundarea/ied303145fe243a0d/version/1552461481/image.jpg",
    source: "https://www.hougonji.info/",
    credit: "写真: 牛尾山 法厳寺",
  },
  mikami: {
    url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Omi-fuji_2023.jpg",
    file: "Omi-fuji 2023.jpg",
  },
  hachimanyama: {
    url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Yahatahachimanjo02.jpg",
    file: "Yahatahachimanjo02.jpg",
  },
  shizugatake: {
    url: "https://upload.wikimedia.org/wikipedia/commons/0/02/Shizugatake_seen_from_the_NNE.jpg",
    file: "Shizugatake seen from the NNE.jpg",
  },
  odani: {
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Odaniyama_from_Takatsuki_2009-2-8.jpg",
    file: "Odaniyama from Takatsuki 2009-2-8.jpg",
  },
  iidoyama: {
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Hiking_trails_of_Mount_Handou_01.jpg",
    file: "Hiking trails of Mount Handou 01.jpg",
  },
  nagusa: {
    url: "https://upload.wikimedia.org/wikipedia/commons/2/27/250830_Mount_Tengu%2C_Wakayama%2C_Japan07s3.jpg",
    file: "250830 Mount Tengu, Wakayama, Japan07s3.jpg",
  },
  takatsuko: {
    url: "https://axi-w.jp/wp2023/wp-content/uploads/2023/04/001.jpg",
    source: "https://axi-w.jp/play/takozusiyama/",
    credit: "写真: 和歌山市観光協会",
  },
  oyama_kyoto: {
    url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Mt.Oe.jpg",
    file: "Mt.Oe.jpg",
  },
  yura: {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/61/Mt.Yuragatake.jpg",
    file: "Mt.Yuragatake.jpg",
  },
  mitsumine: {
    url: "https://upload.wikimedia.org/wikipedia/commons/3/33/%E3%81%BF%E3%81%A4%E3%81%88%E9%9D%92%E5%B0%91%E5%B9%B4%E6%97%85%E8%A1%8C%E6%9D%91%E4%BB%98%E8%BF%91%E3%81%8B%E3%82%89%E8%A6%8B%E3%81%9F%E4%B8%89%E5%B3%B0%E5%B1%B1.jpg",
    file: "みつえ青少年旅行村付近から見た三峰山.jpg",
  },
  takami: {
    url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Takamisan01.JPG",
    file: "Takamisan01.JPG",
  },
  kannonmine: {
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/2010-10-18_%E8%A6%B3%E9%9F%B3%E5%B3%B0%E5%B1%B1_-_panoramio.jpg",
    file: "2010-10-18 観音峰山 - panoramio.jpg",
  },
  yamanoabe: {
    url: "https://www.naracity-guide.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MzIzOCwicHVyIjoiYmxvYl9pZCJ9fQ==--03061fb4d92cf1c4ba5593dcdb5dca74e8a215d6/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJ3ZWJwIiwicmVzaXplX3RvX2ZpdCI6WzEwMjQsbnVsbF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--ccfbaec608ef4c396ab8f145b50415baececafc7/%E5%A4%A9%E7%90%86%E5%B8%82_%E9%BE%8D%E7%8E%8B%E5%B1%B1_240521.jpg",
    source: "https://www.naracity-guide.com/zh-cn/spots/238",
    credit: "写真: 奈良市観光協会",
  },
  matsuo_ikaruga: {
    url: "https://yamatoji.nara-kankou.or.jp/contents/images/0000000214/dff72a944bae5d88886d84994ad06716.jpg",
    source: "https://yamatoji.nara-kankou.or.jp/01shaji/02tera/02west_area/matsuodera/",
    credit: "写真: 奈良県観光公式サイト",
  },
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return entities[character];
  });
}

function photoFor(mountain) {
  return mountainPhotos[mountain.id] ?? { url: fallbackPhotoUrl };
}

function onsenPhotoFor(mountain, onsen = {}, index = 0) {
  if (officialOnsenPhotos[onsen.name]) {
    return officialOnsenPhotos[onsen.name];
  }
  return null;
}

function representativeOnsenPhotoFor(mountain, onsen = {}, index = 0) {
  const basePhotoKey = onsen.photoKey ?? onsenPhotoKeysByMountain[mountain.id] ?? "rotenburo";
  const photoKeys = onsenPhotoVariants[basePhotoKey] ?? [basePhotoKey];
  const photoKey = photoKeys[index % photoKeys.length] ?? basePhotoKey;
  return onsenPhotos[photoKey] ?? onsenPhotos[basePhotoKey] ?? onsenPhotos.rotenburo;
}

function photoSourceUrl(photo) {
  if (photo.source) return photo.source;
  if (!photo.file) return "";
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(photo.file).replace(/%20/g, "_")}`;
}

function photoCreditLink(photo) {
  const sourceUrl = photoSourceUrl(photo);
  if (!sourceUrl) return "";
  return `<a class="image-credit" href="${sourceUrl}" target="_blank" rel="noopener">${escapeHtml(photo.credit ?? "写真: Wikimedia Commons")}</a>`;
}

function mapsSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function nearbyOnsenFor(mountain) {
  const suggestions = [...(onsenSuggestions[mountain.id] ?? [])].sort(
    (first, second) => (first.accessMinutes ?? Number.POSITIVE_INFINITY) - (second.accessMinutes ?? Number.POSITIVE_INFINITY),
  );
  const withinThirtyMinutes = suggestions.filter((onsen) => onsen.accessMinutes && onsen.accessMinutes <= 30);
  if (withinThirtyMinutes.length > 0) {
    return { items: withinThirtyMinutes, rangeMinutes: 30 };
  }

  const withinSixtyMinutes = suggestions.filter((onsen) => onsen.accessMinutes && onsen.accessMinutes <= 60);
  if (withinSixtyMinutes.length > 0) {
    return { items: withinSixtyMinutes, rangeMinutes: 60 };
  }

  return { items: [], rangeMinutes: null };
}

function formatOnsenAccess(onsen) {
  return onsen.accessMinutes ? `約${onsen.accessMinutes}分` : "30分以内";
}

const accessRouteHints = {
  kongo: { transitVia: "河内長野駅・金剛登山口バス停", carVia: "南阪奈道路・国道309号方面" },
  ikoma: { transitVia: "鶴橋駅・枚岡駅", carVia: "阪神高速東大阪線方面" },
  ponpon: { transitVia: "JR高槻駅・神峯山口", carVia: "名神高速 高槻IC方面" },
  satsuki: { transitVia: "阪急池田駅", carVia: "阪神高速池田線方面" },
  konosan: { transitVia: "京阪交野市駅・私市駅", carVia: "第二京阪道路 枚方東IC方面" },
  rokko: { transitVia: "阪急芦屋川駅", carVia: "阪神高速 芦屋・六甲方面" },
  maya: { transitVia: "新神戸駅", carVia: "阪神高速 神戸線方面" },
  katsuragi: { transitVia: "近鉄御所駅・葛城ロープウェイ前", carVia: "南阪奈道路・葛城IC方面" },
  minoh: { transitVia: "阪急箕面駅", carVia: "新御堂筋・箕面方面" },
  iimori: { transitVia: "JR四条畷駅", carVia: "第二京阪道路・寝屋川方面" },
  wakakusa: { transitVia: "近鉄奈良駅・奈良公園", carVia: "第二阪奈道路・奈良公園方面" },
  otowa: { transitVia: "京阪大谷駅", carVia: "名神高速 京都東IC方面" },
  kisen: { transitVia: "JR山中渓駅", carVia: "阪和道 泉南IC方面" },
  hiei: { transitVia: "叡山電鉄 修学院駅", carVia: "京都東IC・比叡山方面" },
  konze: { transitVia: "JR草津駅・上桐生バス停", carVia: "新名神 草津田上IC方面" },
  takamikura: { transitVia: "JR曽根駅・高御位山登山口", carVia: "加古川バイパス 高砂北方面" },
  horai: { transitVia: "JR蓬莱駅・比良駅", carVia: "湖西道路 志賀方面" },
  bentendake: { transitVia: "南海高野山駅", carVia: "京奈和道 かつらぎ西IC方面" },
  atago: { transitVia: "嵐山駅・清滝バス停", carVia: "京都市内・清滝方面" },
  seppiko: { transitVia: "JR姫路駅・雪彦山バス停", carVia: "播但連絡道路 福崎方面" },
  ibuki: { transitVia: "JR近江長岡駅・伊吹登山口", carVia: "名神高速 関ヶ原IC方面" },
  buna: { transitVia: "JR堅田駅・坊村バス停", carVia: "湖西道路・国道367号方面" },
  soni: { transitVia: "近鉄名張駅・曽爾高原バス停", carVia: "名阪国道 針IC方面" },
  aoba: { transitVia: "JR若狭高浜駅", carVia: "舞鶴若狭道 大飯高浜IC方面" },
  ryujin: { transitVia: "高野山駅・龍神温泉方面", carVia: "高野龍神スカイライン方面" },
  odaigahara: { transitVia: "近鉄大和上市駅・大台ヶ原バス停", carVia: "国道169号・大台ヶ原ドライブウェイ" },
  hyono: { transitVia: "JR八鹿駅・鉢伏口", carVia: "北近畿豊岡道 八鹿氷ノ山IC方面" },
  hakkyou: { transitVia: "近鉄下市口駅・天川川合", carVia: "南阪奈道路・国道309号方面" },
  myoken: { transitVia: "阪急川西能勢口駅・能勢電鉄 妙見口駅", carVia: "新御堂筋・箕面グリーンロード方面" },
  kabutoyama: { transitVia: "阪急甲陽園駅・甲山森林公園", carVia: "阪神高速 神戸線・西宮方面" },
  nakayama: { transitVia: "阪急中山観音駅", carVia: "中国道 宝塚IC方面" },
  hachibuse: { transitVia: "山陽電鉄 須磨浦公園駅", carVia: "阪神高速 神戸線・須磨方面" },
  yokoo: { transitVia: "山陽電鉄 須磨浦公園駅・板宿駅", carVia: "阪神高速 神戸線・須磨方面" },
  arima_fuji: { transitVia: "JR三田駅・有馬富士公園", carVia: "中国道 神戸三田IC方面" },
  shosha: { transitVia: "JR姫路駅・書写山ロープウェイ", carVia: "山陽道 山陽姫路西IC方面" },
  masui: { transitVia: "JR姫路駅・随願寺方面", carVia: "播但連絡道路 花田IC方面" },
  kobushi: { transitVia: "JR加古川駅・市場駅方面", carVia: "山陽道 三木小野IC方面" },
  yuzuruha: { transitVia: "高速舞子・南あわじ方面バス", carVia: "神戸淡路鳴門道 西淡三原IC方面" },
  futakami: { transitVia: "近鉄二上山駅", carVia: "南阪奈道路 太子IC方面" },
  shigi: { transitVia: "近鉄信貴山下駅", carVia: "第二阪奈道路・信貴山方面" },
  takayasu: { transitVia: "近鉄信貴山口駅", carVia: "外環状線・信貴山方面" },
  takaosan_osaka: { transitVia: "JR河内堅上駅", carVia: "西名阪道 柏原IC方面" },
  inunaki: { transitVia: "南海泉佐野駅・犬鳴山バス停", carVia: "阪和道 上之郷IC方面" },
  amashi: { transitVia: "JR熊取駅・永楽ゆめの森公園", carVia: "阪和道 貝塚IC方面" },
  makio: { transitVia: "泉北高速 和泉中央駅・槇尾山方面", carVia: "阪和道 岸和田和泉IC方面" },
  iwawaki: { transitVia: "南海河内長野駅・滝畑方面", carVia: "南阪奈道路・河内長野方面" },
  izumi_katsuragi: { transitVia: "南海岸和田駅・牛滝山方面", carVia: "阪和道 岸和田和泉IC方面" },
  takatori_nara: { transitVia: "近鉄壺阪山駅", carVia: "京奈和道 御所南IC方面" },
  miwa: { transitVia: "JR三輪駅・大神神社", carVia: "西名阪道 天理IC方面" },
  kasuga: { transitVia: "近鉄奈良駅・春日大社", carVia: "第二阪奈道路・奈良公園方面" },
  yoshino: { transitVia: "近鉄吉野駅", carVia: "南阪奈道路・吉野方面" },
  daimonji: { transitVia: "京阪出町柳駅・銀閣寺道", carVia: "名神高速 京都東IC方面" },
  inari: { transitVia: "JR稲荷駅・京阪伏見稲荷駅", carVia: "阪神高速 京都線・伏見方面" },
  yoshidayama: { transitVia: "京阪出町柳駅", carVia: "名神高速 京都東IC方面" },
  kurama: { transitVia: "叡山電鉄 鞍馬駅", carVia: "京都市内・鞍馬街道方面" },
  ushio: { transitVia: "JR山科駅・毘沙門堂方面", carVia: "名神高速 京都東IC方面" },
  mikami: { transitVia: "JR野洲駅・御上神社", carVia: "名神高速 栗東IC方面" },
  hachimanyama: { transitVia: "JR近江八幡駅・八幡山ロープウェー", carVia: "名神高速 竜王IC方面" },
  shizugatake: { transitVia: "JR余呉駅", carVia: "北陸道 木之本IC方面" },
  odani: { transitVia: "JR河毛駅・小谷城跡方面", carVia: "北陸道 小谷城スマートIC方面" },
  iidoyama: { transitVia: "JR貴生川駅", carVia: "新名神 甲南IC方面" },
  nagusa: { transitVia: "JR紀三井寺駅", carVia: "阪和道 和歌山IC方面" },
  takatsuko: { transitVia: "JR和歌山駅・雑賀崎方面", carVia: "阪和道 和歌山IC方面" },
  oyama_kyoto: { transitVia: "京都丹後鉄道 大江駅・大江山方面", carVia: "京都縦貫道 舞鶴大江IC方面" },
  yura: { transitVia: "京都丹後鉄道 丹後由良駅", carVia: "京都縦貫道 宮津天橋立IC方面" },
  mitsumine: { transitVia: "近鉄名張駅・御杖村方面", carVia: "名阪国道 針IC方面" },
  takami: { transitVia: "近鉄榛原駅・たかすみ温泉方面", carVia: "名阪国道 針IC方面" },
  kannonmine: { transitVia: "近鉄下市口駅・洞川温泉方面", carVia: "南阪奈道路・国道309号方面" },
  yamanoabe: { transitVia: "JR・近鉄天理駅", carVia: "西名阪道 天理IC方面" },
  matsuo_ikaruga: { transitVia: "JR法隆寺駅", carVia: "西名阪道 法隆寺IC方面" },
};

function roundToFive(minutes) {
  return Math.round(minutes / 5) * 5;
}

function estimatedDrivingAccessMinutes(mountain) {
  const trainMinutes = estimatedAccessMinutes(mountain, state.origin);
  if (trainMinutes <= 45) return Math.max(25, roundToFive(trainMinutes - 10));
  if (trainMinutes <= 90) return roundToFive(trainMinutes * 0.82);
  if (trainMinutes <= 150) return roundToFive(trainMinutes * 0.78);
  return roundToFive(trainMinutes * 0.72);
}

function accessHintFor(mountain) {
  return accessRouteHints[mountain.id] ?? {
    transitVia: "主要乗換駅・最寄りバス停",
    carVia: "主要道路・周辺駐車場",
  };
}

const approachTimeOverrides = {
  rokko: { transitFrom: "阪急芦屋川駅", transitMinutes: 25, carMinutes: 10 },
  maya: { transitFrom: "新神戸駅", transitMinutes: 15, carMinutes: 5 },
  satsuki: { transitFrom: "阪急池田駅", transitMinutes: 10, carMinutes: 5 },
  konosan: { transitFrom: "私市駅", transitMinutes: 20, carMinutes: 5 },
  hiei: { transitFrom: "修学院駅", transitMinutes: 25, carMinutes: 10 },
  atago: { transitFrom: "清滝バス停", transitMinutes: 5, carMinutes: 5 },
  ibuki: { transitFrom: "伊吹登山口バス停", transitMinutes: 5, carMinutes: 5 },
  buna: { transitFrom: "坊村バス停", transitMinutes: 5, carMinutes: 5 },
  futakami: { transitFrom: "近鉄二上山駅", transitMinutes: 10, carMinutes: 5 },
  daimonji: { transitFrom: "銀閣寺道バス停", transitMinutes: 10, carMinutes: 10 },
  kurama: { transitFrom: "鞍馬駅", transitMinutes: 5, carMinutes: 5 },
};

function lastTransitPointLabel(routeHint, mountain) {
  const override = approachTimeOverrides[mountain.id]?.transitFrom;
  if (override) return override;

  const candidates = routeHint.transitVia
    .split(/[・、]/)
    .map((part) => part.trim())
    .filter(Boolean);
  const lastCandidate = candidates[candidates.length - 1];
  if (!lastCandidate || lastCandidate.includes("方面")) return "最寄り駅・バス停";
  return lastCandidate;
}

function estimatedTransitApproachMinutes(mountain) {
  const override = approachTimeOverrides[mountain.id]?.transitMinutes;
  if (override) return override;

  const trailheadName = mountain.trailheadName;
  if (/駅/.test(trailheadName)) return 8;
  if (/バス停|登山口|ロープウェイ|山麓駅|ビジターセンター|ゲート/.test(trailheadName)) return 3;
  if (/公園|神社|大社|寺|温泉/.test(trailheadName)) return 5;
  return 10;
}

function estimatedParkingApproachMinutes(mountain) {
  const override = approachTimeOverrides[mountain.id]?.carMinutes;
  if (override) return override;

  const trailheadName = mountain.trailheadName;
  if (/駅|バス停/.test(trailheadName)) return 5;
  if (/登山口|ロープウェイ|山麓駅|ビジターセンター|ゲート|公園|神社|大社|寺|温泉/.test(trailheadName)) return 3;
  return 5;
}

function formatWalkingMinutes(minutes) {
  return minutes <= 1 ? "徒歩すぐ" : `徒歩約${minutes}分`;
}

function renderAccessRouteCard({ title, minutes, steps, approach, mapUrl, buttonLabel, modifier = "" }) {
  const stepItems = steps
    .map(
      (step) => `
        <li class="route-step">
          <span class="route-badge">${escapeHtml(step.badge)}</span>
          <span class="route-rail"><span class="route-dot"></span></span>
          <div class="route-copy">
            <h3>${escapeHtml(step.title)}</h3>
            <p>${escapeHtml(step.detail)}</p>
          </div>
        </li>
      `,
    )
    .join("");

  return `
    <div class="access-route-card ${modifier}">
      <div class="access-route-header">
        <span>${escapeHtml(title)}</span>
        <strong>${formatHours(minutes)}</strong>
      </div>
      <ol class="route-line">${stepItems}</ol>
      <div class="approach-time">
        <span>アプローチ時間</span>
        <strong>${escapeHtml(approach)}</strong>
      </div>
      <a class="map-link-button" href="${mapUrl}" target="_blank" rel="noopener">${escapeHtml(buttonLabel)}</a>
    </div>
  `;
}

function renderAccessSection(mountain) {
  const transitMinutes = estimatedAccessMinutes(mountain, state.origin);
  const drivingMinutes = estimatedDrivingAccessMinutes(mountain);
  const routeHint = accessHintFor(mountain);
  const transitApproachFrom = lastTransitPointLabel(routeHint, mountain);
  const transitApproach = `${transitApproachFrom}から登山口まで ${formatWalkingMinutes(estimatedTransitApproachMinutes(mountain))}`;
  const drivingApproach = `周辺駐車場から登山口まで ${formatWalkingMinutes(estimatedParkingApproachMinutes(mountain))}`;
  const transitSteps = [
    { badge: "発", title: state.origin, detail: "現在地・出発地" },
    { badge: "乗換", title: routeHint.transitVia, detail: "電車・バスを乗り継いで登山口方面へ" },
    { badge: "着", title: transitApproachFrom, detail: "登山口に近い駅・バス停" },
  ];
  const drivingSteps = [
    { badge: "発", title: state.origin, detail: "現在地・出発地" },
    { badge: "経由", title: routeHint.carVia, detail: "道路状況と駐車場を確認しながら移動" },
    { badge: "駐車", title: "周辺駐車場", detail: `${mountain.trailheadName}付近の駐車場` },
  ];

  return `
    <div class="detail-section support-section">
      <h2>アクセス</h2>
      <div class="access-route-grid">
        ${renderAccessRouteCard({
          title: "電車・バス",
          minutes: transitMinutes,
          steps: transitSteps,
          approach: transitApproach,
          mapUrl: googleMapsUrl(mountain, "transit"),
          buttonLabel: "電車で開く",
        })}
        ${renderAccessRouteCard({
          title: "車",
          minutes: drivingMinutes,
          steps: drivingSteps,
          approach: drivingApproach,
          mapUrl: googleMapsUrl(mountain, "driving"),
          buttonLabel: "車で開く",
          modifier: "access-route-card--car",
        })}
      </div>
      <p class="support-note">表示時間とアプローチ時間はMVP用の目安です。実際の所要時間、乗換、駐車場の位置はGoogle Mapsで確認してください。</p>
    </div>
  `;
}

function renderOnsenSection(mountain) {
  const nearbyOnsen = nearbyOnsenFor(mountain);
  const onsenItems =
    nearbyOnsen.items.length > 0
      ? nearbyOnsen.items
          .map((onsen, index) => {
            const photo = onsenPhotoFor(mountain, onsen, index);
            const query = `${onsen.name} ${onsen.area}`;
            const photoMarkup = photo
              ? `
                <div class="onsen-photo-frame">
                  <img
                    class="onsen-photo"
                    src="${escapeHtml(photo.url)}"
                    alt="${escapeHtml(`${onsen.name}の公式写真`)}"
                    loading="lazy"
                    referrerpolicy="no-referrer"
                    onerror="this.closest('.onsen-photo-frame').classList.add('onsen-photo-frame--missing'); this.remove();"
                  />
                  <span class="onsen-photo-label">${escapeHtml(photo.label)}</span>
                  ${photoCreditLink(photo)}
                </div>
              `
              : `
                <a class="onsen-photo-frame onsen-photo-frame--missing" href="${mapsSearchUrl(`${query} 写真`)}" target="_blank" rel="noopener">
                  <span class="onsen-photo-label">${escapeHtml(onsen.name)}</span>
                  <strong>Google Mapsで写真を見る</strong>
                </a>
              `;
            return `
              <div class="onsen-item">
                ${photoMarkup}
                <div class="onsen-copy">
                  <div class="onsen-meta-row">
                    <span class="onsen-time">登山口・下山地から ${escapeHtml(formatOnsenAccess(onsen))}</span>
                    <span class="onsen-category">${escapeHtml(onsen.category ?? "入浴施設")}</span>
                  </div>
                  <h3>${escapeHtml(onsen.name)}</h3>
                  <p class="onsen-area">${escapeHtml(onsen.area)}</p>
                  <p>${escapeHtml(onsen.note)}</p>
                </div>
                <a class="map-link-button" href="${mapsSearchUrl(query)}" target="_blank" rel="noopener">Maps</a>
              </div>
            `;
          })
          .join("")
      : `<p class="onsen-empty">なし</p>`;

  return `
    <div class="detail-section support-section">
      <h2>近くの温泉</h2>
      <div class="onsen-list">${onsenItems}</div>
      <p class="support-note">表示時間は登山口または主な下山地点からの目安です。営業時間、定休日、日帰り入浴の可否は変わるため、出発前に公式情報かGoogle Mapsで確認してください。</p>
      <div class="map-actions">
        <a class="detail-button secondary" href="${mapsSearchUrl(`${mountain.trailheadName} 周辺 スーパー銭湯 温泉`)}" target="_blank" rel="noopener">周辺の温泉を探す</a>
      </div>
    </div>
  `;
}

function getTimeValues() {
  return Array.from(timeOptions.querySelectorAll('input[name="minutes"]'))
    .map((input) => Number(input.value))
    .sort((a, b) => a - b);
}

function getTimeRange(minutes) {
  const values = getTimeValues();
  const index = values.indexOf(minutes);
  return {
    minExclusive: index > 0 ? values[index - 1] : 0,
    maxInclusive: minutes,
  };
}

function isMountainInTimeRange(mountain, minutes, origin = currentOriginName()) {
  const range = getTimeRange(minutes);
  const accessMinutes = estimatedAccessMinutes(mountain, origin);
  return accessMinutes > range.minExclusive && accessMinutes <= range.maxInclusive;
}

function hasMountainsForTimeRange(minutes, origin = currentOriginName()) {
  return mountains.some((mountain) => isMountainInTimeRange(mountain, minutes, origin));
}

function formatTimeRange(minutes) {
  const range = getTimeRange(minutes);
  if (range.minExclusive === 0) return `${minutes}分以内`;
  return `${range.minExclusive + 1}〜${minutes}分`;
}

function updateAvailableTimeOptions(origin = currentOriginName()) {
  const inputs = Array.from(timeOptions.querySelectorAll('input[name="minutes"]'));
  let firstAvailableInput = null;

  inputs.forEach((input) => {
    const minutes = Number(input.value);
    const isAvailable = hasMountainsForTimeRange(minutes, origin);
    input.disabled = !isAvailable;
    input.closest("label").classList.toggle("hidden", !isAvailable);

    if (isAvailable && firstAvailableInput === null) {
      firstAvailableInput = input;
    }
  });

  const selectedInput = inputs.find((input) => input.checked && !input.disabled);
  if (!selectedInput && firstAvailableInput) {
    firstAvailableInput.checked = true;
  }

  updateSelectedTimeOptionState();
}

function updateSelectedTimeOptionState() {
  const inputs = Array.from(timeOptions.querySelectorAll('input[name="minutes"]'));
  inputs.forEach((input) => {
    input.closest("label").classList.toggle("selected", input.checked);
  });
}

function showView(view, options = {}) {
  const scrollY = options.scrollY ?? 0;
  homeView.classList.toggle("hidden", view !== "home");
  listView.classList.toggle("hidden", view !== "list");
  detailView.classList.toggle("hidden", view !== "detail");
  topbar.classList.toggle("topbar--home", view === "home");
  backButton.classList.toggle("hidden", view === "home");
  window.scrollTo({ top: scrollY, behavior: "auto" });
}

function formatHours(minutes) {
  if (minutes < 60) return `${minutes}分`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours}時間${rest}分` : `${hours}時間`;
}

function getSelectedMinutes() {
  const selected = document.querySelector('input[name="minutes"]:checked');
  return Number(selected?.value ?? 60);
}

function searchMountains() {
  state.origin = currentOriginName();
  updateAvailableTimeOptions(state.origin);
  state.maxMinutes = getSelectedMinutes();
  state.currentResults = mountains
    .filter((mountain) => isMountainInTimeRange(mountain, state.maxMinutes, state.origin))
    .sort((a, b) => estimatedAccessMinutes(a, state.origin) - estimatedAccessMinutes(b, state.origin));

  renderList();
  showView("list");
}

function updateOriginButtonState() {
  const currentOrigin = originInput.value.trim();
  originButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.origin === currentOrigin);
  });
}

function renderList() {
  resultTitle.textContent = `${state.origin}から${formatTimeRange(state.maxMinutes)}で行ける山`;
  resultCount.textContent = `${state.currentResults.length}件`;
  mountainCards.innerHTML = "";
  emptyState.classList.toggle("hidden", state.currentResults.length > 0);

  state.currentResults.forEach((mountain) => {
    const photo = photoFor(mountain);
    const accessMinutes = estimatedAccessMinutes(mountain, state.origin);
    const card = document.createElement("article");
    card.className = "mountain-card";
    card.innerHTML = `
      <div class="card-top">
        <div>
          <h3>${mountain.name}</h3>
          <p class="area">${mountain.area}</p>
        </div>
        <span class="badge">${mountain.difficulty}</span>
      </div>
      <div class="photo-frame">
        <img class="mountain-image" src="${photo.url}" alt="${mountain.name}の写真" loading="lazy" referrerpolicy="no-referrer" onerror="this.src='${fallbackPhotoUrl}'; this.classList.add('image-fallback');" />
        ${photoCreditLink(photo)}
      </div>
      <div class="meta-grid">
        <div class="meta"><span>目安移動時間</span><strong>${formatHours(accessMinutes)}</strong></div>
        <div class="meta"><span>登山口</span><strong>${mountain.trailheadName}</strong></div>
        <div class="meta"><span>登山時間</span><strong>${formatHours(mountain.hikingMinutes)}</strong></div>
        <div class="meta"><span>標高</span><strong>${mountain.elevation}m</strong></div>
      </div>
      <p class="appeal">${mountain.appeal}</p>
      <button class="detail-button" type="button" data-detail-id="${mountain.id}">詳細を見る</button>
    `;
    mountainCards.appendChild(card);
  });
}

function googleMapsUrl(mountain, travelmode = "transit") {
  const destination = encodeURIComponent(`${mountain.trailheadLat},${mountain.trailheadLng}`);
  const origin = encodeURIComponent(state.origin);
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=${travelmode}`;
}

function renderDetail(id) {
  const mountain = mountains.find((item) => item.id === id);
  if (!mountain) return;
  const photo = photoFor(mountain);

  detailView.innerHTML = `
    <article class="detail-card">
      <div class="detail-hero">
        <div>
          <p>${mountain.area}</p>
          <h1>${mountain.name}</h1>
          <p>${mountain.elevation}m・${mountain.difficulty}</p>
        </div>
        <div class="detail-photo-frame">
          <img class="detail-image" src="${photo.url}" alt="${mountain.name}の写真" referrerpolicy="no-referrer" onerror="this.src='${fallbackPhotoUrl}'; this.classList.add('image-fallback');" />
          ${photoCreditLink(photo)}
        </div>
      </div>
      <div class="detail-body">
        <div class="detail-section">
          <h2>基本情報</h2>
          <dl class="info-list">
            <div class="info-row"><dt>エリア</dt><dd>${mountain.area}</dd></div>
            <div class="info-row"><dt>標高</dt><dd>${mountain.elevation}m</dd></div>
            <div class="info-row"><dt>難易度</dt><dd>${mountain.difficulty}</dd></div>
            <div class="info-row"><dt>登山口</dt><dd>${mountain.trailheadName}</dd></div>
            <div class="info-row"><dt>登山時間</dt><dd>${formatHours(mountain.hikingMinutes)}</dd></div>
            <div class="info-row"><dt>電車・バス目安</dt><dd>${formatHours(estimatedAccessMinutes(mountain, state.origin))}</dd></div>
          </dl>
        </div>
        ${renderAccessSection(mountain)}
        ${renderOnsenSection(mountain)}
        <div class="detail-section">
          <h2>おすすめポイント</h2>
          <ul class="bullet-list">
            ${mountain.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <h2>注意点</h2>
          <ul class="bullet-list">
            ${mountain.cautions.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <p class="notice">移動時間と温泉候補はMVP用の目安です。実際の交通状況、天候、登山道状況、施設営業状況は出発前に確認してください。</p>
        </div>
        <div class="detail-bottom-actions">
          <button class="detail-button secondary detail-back-button" type="button" data-detail-back>戻る</button>
        </div>
      </div>
    </article>
  `;
  showView("detail");
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchMountains();
});

mountainCards.addEventListener("click", (event) => {
  const button = event.target.closest("[data-detail-id]");
  if (!button) return;
  listScrollY = window.scrollY;
  renderDetail(button.dataset.detailId);
});

detailView.addEventListener("click", (event) => {
  const button = event.target.closest("[data-detail-back]");
  if (!button) return;
  showView("list", { scrollY: listScrollY });
});

backButton.addEventListener("click", () => {
  if (!detailView.classList.contains("hidden")) {
    showView("list", { scrollY: listScrollY });
    return;
  }
  showView("home");
});

listBackButton?.addEventListener("click", () => {
  showView("home");
});

originInput.addEventListener("input", () => {
  updateOriginButtonState();
  updateAvailableTimeOptions();
});
timeOptions.addEventListener("change", updateSelectedTimeOptionState);
originButtons.forEach((button) => {
  button.addEventListener("click", () => {
    originInput.value = button.dataset.origin;
    updateOriginButtonState();
    updateAvailableTimeOptions();
  });
});
updateAvailableTimeOptions();
updateOriginButtonState();
