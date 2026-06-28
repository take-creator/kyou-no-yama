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
const backButton = document.querySelector("#backButton");
const brandButton = document.querySelector("[data-view-home]");
const timeOptions = document.querySelector("#timeOptions");
const originButtons = Array.from(document.querySelectorAll("[data-origin]"));
const fallbackPhotoUrl = "./assets/mountain-mark.png";
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
  const suggestions = onsenSuggestions[mountain.id] ?? [
    {
      name: `${mountain.trailheadName}周辺の温泉・日帰り入浴`,
      area: mountain.area,
      accessMinutes: 30,
      category: "日帰り入浴",
      note: "現在営業している施設はGoogle Mapsで確認してください。",
    },
  ];
  return suggestions
    .filter((onsen) => !onsen.accessMinutes || onsen.accessMinutes <= 30)
    .sort((first, second) => (first.accessMinutes ?? 30) - (second.accessMinutes ?? 30));
}

function formatOnsenAccess(onsen) {
  return onsen.accessMinutes ? `約${onsen.accessMinutes}分` : "30分以内";
}

function renderAccessSection(mountain) {
  return `
    <div class="detail-section support-section">
      <h2>アクセス</h2>
      <dl class="access-list">
        <div class="access-row"><dt>出発地</dt><dd>${escapeHtml(state.origin)}</dd></div>
        <div class="access-row"><dt>目的地</dt><dd>${mountain.trailheadName}</dd></div>
        <div class="access-row"><dt>目安移動時間</dt><dd>${formatHours(mountain.estimatedAccessMinutesFromOsaka)}</dd></div>
      </dl>
      <p class="support-note">Google Mapsは公共交通ルートで開きます。車で行く場合は、Maps上で移動手段を切り替えてください。</p>
      <div class="map-actions">
        <a class="detail-button" href="${googleMapsUrl(mountain)}" target="_blank" rel="noopener">登山口まで案内</a>
      </div>
    </div>
  `;
}

function renderOnsenSection(mountain) {
  const onsenItems = nearbyOnsenFor(mountain)
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
    .join("");

  return `
    <div class="detail-section support-section">
      <h2>30分以内の温泉・スーパー銭湯</h2>
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

function isMountainInTimeRange(mountain, minutes) {
  const range = getTimeRange(minutes);
  const accessMinutes = mountain.estimatedAccessMinutesFromOsaka;
  return accessMinutes > range.minExclusive && accessMinutes <= range.maxInclusive;
}

function hasMountainsForTimeRange(minutes) {
  return mountains.some((mountain) => isMountainInTimeRange(mountain, minutes));
}

function formatTimeRange(minutes) {
  const range = getTimeRange(minutes);
  if (range.minExclusive === 0) return `${minutes}分以内`;
  return `${range.minExclusive + 1}〜${minutes}分`;
}

function updateAvailableTimeOptions() {
  const inputs = Array.from(timeOptions.querySelectorAll('input[name="minutes"]'));
  let firstAvailableInput = null;

  inputs.forEach((input) => {
    const minutes = Number(input.value);
    const isAvailable = hasMountainsForTimeRange(minutes);
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

function showView(view) {
  homeView.classList.toggle("hidden", view !== "home");
  listView.classList.toggle("hidden", view !== "list");
  detailView.classList.toggle("hidden", view !== "detail");
  backButton.classList.toggle("hidden", view === "home");
  window.scrollTo({ top: 0, behavior: "smooth" });
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
  updateAvailableTimeOptions();
  state.origin = originInput.value.trim() || "大阪駅";
  state.maxMinutes = getSelectedMinutes();
  state.currentResults = mountains
    .filter((mountain) => isMountainInTimeRange(mountain, state.maxMinutes))
    .sort((a, b) => a.estimatedAccessMinutesFromOsaka - b.estimatedAccessMinutesFromOsaka);

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
    const card = document.createElement("article");
    card.className = "mountain-card";
    card.innerHTML = `
      <div class="photo-frame">
        <img class="mountain-image" src="${photo.url}" alt="${mountain.name}の写真" loading="lazy" referrerpolicy="no-referrer" onerror="this.src='${fallbackPhotoUrl}'; this.classList.add('image-fallback');" />
        ${photoCreditLink(photo)}
      </div>
      <div class="card-top">
        <div>
          <h3>${mountain.name}</h3>
          <p class="area">${mountain.area}</p>
        </div>
        <span class="badge">${mountain.difficulty}</span>
      </div>
      <div class="meta-grid">
        <div class="meta"><span>目安移動時間</span><strong>${formatHours(mountain.estimatedAccessMinutesFromOsaka)}</strong></div>
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

function googleMapsUrl(mountain) {
  const destination = encodeURIComponent(`${mountain.trailheadLat},${mountain.trailheadLng}`);
  const origin = encodeURIComponent(state.origin);
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=transit`;
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
            <div class="info-row"><dt>目安移動時間</dt><dd>${formatHours(mountain.estimatedAccessMinutesFromOsaka)}</dd></div>
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
  renderDetail(button.dataset.detailId);
});

backButton.addEventListener("click", () => {
  if (!detailView.classList.contains("hidden")) {
    showView("list");
    return;
  }
  showView("home");
});

brandButton.addEventListener("click", () => showView("home"));
originInput.addEventListener("input", updateOriginButtonState);
timeOptions.addEventListener("change", updateSelectedTimeOptionState);
originButtons.forEach((button) => {
  button.addEventListener("click", () => {
    originInput.value = button.dataset.origin;
    updateOriginButtonState();
  });
});
updateAvailableTimeOptions();
updateOriginButtonState();
