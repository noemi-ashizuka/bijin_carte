const MULTIPLE_QUIZ_QUESTIONS = [
  // all images should be changed with links to wp media or other hosting in production
  {
    id: 1,
    img_url: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/pexels-freestocksorg-318379-scaled-e1598336144421.jpg",
    question: "あなたの顔の印象は？",
    answers: [
      {
        answerId: 101,
        content: "優しい顔立ちで若々しい印象",
        type: "A"
      },
      {
        answerId: 102,
        content: "はっきりした顔立ちで大人っぽい印象",
        type: "B"
      },
      {
        answerId: 103,
        content: "優しい顔立ちでエレガントな印象",
        type: "C"
      },
      {
        answerId: 104,
        content: "はっきりした顔立ちでシャープな印象",
        type: "D"
      }
    ]
  },
  {
    id: 2,
    img_url: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/content-pixie-WdJ4WnLxyDs-unsplash-scaled-e1597280771849.jpg",
    question: "腕の内側（紫外線を浴びにくい場所）、肌から見える血管の色味は？？",
    answers: [
      {
        answerId: 105,
        content: "肌は黄みを帯びていてマットな肌、血管は緑っぽい",
        type: "C"
      },
      {
        answerId: 106,
        content: "肌は黄みを帯びていて艶がある、血管は緑っぽい",
        type: "A"
      },
      {
        answerId: 107,
        content: "肌はピンクがかっていてマット、血管は青っぽい",
        type: "D"
      },
      {
        answerId: 108,
        content: "肌はピンクがかっていてキメが細かくマット、血管は青っぽい",
        type: "B"
      }
    ]
  },
  {
    id: 3,
    img_url: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/pexels-dids-1499517-scaled-e1598336094676.jpg",
    question: "あなたの唇の特徴は？",
    answers: [
      {
        answerId: 109,
        content: "くすみがかったローズ系のピンク色",
        type: "B"
      },
      {
        answerId: 110,
        content: "赤っぽく、色がはっきりしていて、唇の境界線がはっきりしている",
        type: "D"
      },
      {
        answerId: 111,
        content: "オレンジがかったピンク色",
        type: "A"
      },
      {
        answerId: 112,
        content: "オレンジ系、くすみがかっている場合も",
        type: "C"
      }
    ]
  },
  {
    id: 4,
    img_url: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/brooke-lark-Aq2GM7iV71A-unsplash-scaled-e1597280660217.jpg",
    question: "髪（地毛）の色は？",
    answers: [
      {
        answerId: 113,
        content: "深みのあるしっかりとしたブラウン",
        type: "B"
      },
      {
        answerId: 114,
        content: "コシが強く艶やかではっきりとした黒",
        type: "D"
      },
      {
        answerId: 115,
        content: "ブラウン。太陽に当たると柔らかなブラウンに見える。",
        type: "A"
      },
      {
        answerId: 116,
        content: "ソフトでやわらかい質感の黒髪",
        type: "C"
      }
    ]
  },
  {
    id: 5,
    img_url: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/camille-brodard-kmile-feminine-creative-designer-VxAwTeiqDao-unsplash-scaled-e1597280711356.jpg",
    question: "日焼けするとどうなる？",
    answers: [
      {
        answerId: 117,
        content: "日焼けしやすく、吸収して黒くなる。元の色に戻りにくい。",
        type: "B"
      },
      {
        answerId: 118,
        content: "やや赤くなるが、すぐに小麦色に定着",
        type: "D"
      },
      {
        answerId: 119,
        content: "すぐに日焼けするが、もどるのも早い秋ごろから徐々に戻り、冬には元通りなタイプ。",
        type: "A"
      },
      {
        answerId: 120,
        content: "赤くなって日焼けしない。定着しないタイプ",
        type: "C"
      }
    ]
  },
  {
    id: 6,
    img_url: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/jess-bailey-jL6vsxG8vtw-unsplash-scaled-e1598320065560.jpg",
    question: "肌がきれいに見えるアクセサリーは？",
    subLine: "※アクセサリーがない場合は、きれいな1円玉と5円玉を手の甲に乗せて比べてください\n（5円玉の場合は、AかB。艶ありか無しで選んでみてください。1円玉の場合は、CかD。艶ありか無しで選んでみてください。",
    answers: [
      {
        answerId: 118,
        content: "A: キラキラした明るいツヤありゴールド",
        type: "A"
      },
      {
        answerId: 120,
        content: "B: 黄みの強いゴールドや、つや消しのゴールドまたはブロンズ",
        type: "B"
      },
      {
        answerId: 119,
        content: "C: 光沢控えめのプラチナ、シルバー。",
        type: "C"
      },
      {
        answerId: 117,
        content: "D: 艶のあるプラチナ、シルバー。",
        type: "D"
      }
    ]
  },
  {
    id: 7,
    img_url: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/lavender-e1598320029906.jpeg",
    question: "身近な人に褒められるファッションカラー・口紅の色は？",
    answers: [
      {
        answerId: 117,
        content: "マスタードやテラコッタなど深みのある色味マスタードやテラコッタなど深みのある色味",
        type: "B"
      },
      {
        answerId: 118,
        content: "イエローベースのカラーやコーラルピンクなどの暖かみのある明るい色味リップカラーはピーチピンクなど明るいオレンジ系",
        type: "A"
      },
      {
        answerId: 119,
        content: "ブルーやマゼンダなどの彩度の高い、鮮やかなビビットカラーリップカラーはフューシャピンクなど鮮やかなローズ系",
        type: "D"
      },
      {
        answerId: 120,
        content: "水色やラベンダーなどの淡い優しい雰囲気のパステルカラーリップカラーはローズピンクなど明るいローズ系",
        type: "C"
      }
    ]
  },
  {
    id: 8,
    img_url: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/anthony-tran-Sd9A6NVHsd4-unsplash-scaled-e1597280617108.jpg",
    question: "自分で苦手意識のあるリップは？",
    answers: [
      {
        answerId: 117,
        content: "ワインレッドなどの深くて暗めの色味。顔色が悪く見える。",
        type: "A"
      },
      {
        answerId: 118,
        content: "オレンジやレッド系。オレンジ系のはっきりした色味だと唇だけ目立つ。",
        type: "C"
      },
      {
        answerId: 119,
        content: "フューシャピンク・ローズピンクなど青みのあるピンク",
        type: "B"
      },
      {
        answerId: 120,
        content: "オレンジベージュなどのベージュ系、薄い色だとパッとせずにぼやける",
        type: "D"
      }
    ]
  },
  {
    id: 9,
    img_url: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/jamie-street-aMuq-Xz7R_M-unsplash-scaled-e1597280960438.jpg",
    question: "周りから見たあなたの第一印象は？",
    answers: [
      {
        answerId: 117,
        content: "ソフト・優しい・エレガント・ナチュラル・爽やか",
        type: "C"
      },
      {
        answerId: 118,
        content: "クール・シャープ・都会的・印象的・しっかりした",
        type: "D"
      },
      {
        answerId: 119,
        content: "明るい・キュート・可愛い・若々しい・親しみやすい",
        type: "A"
      },
      {
        answerId: 120,
        content: "落ち着いた・大人っぽい・ゴージャス・明るい",
        type: "B"
      }
    ]
  }
]

export default () =>
  Promise.resolve(MULTIPLE_QUIZ_QUESTIONS);
  