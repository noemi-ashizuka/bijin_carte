const MULTIPLE_QUIZ_QUESTIONS = [
  // all images should be changed with links to wp media or other hosting in production
  {
    id: 1,
    img_url: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    question: "あなたの顔の印象は？",
    answers: [
      {
        answerId: 101,
        content: "はっきりした顔立ち",
        type: "A"
      },
      {
        answerId: 102,
        content: "優しい顔立ち",
        type: "B"
      },
      {
        answerId: 103,
        content: "はっきりした顔立ち",
        type: "C"
      },
      {
        answerId: 104,
        content: "優しい顔立ち",
        type: "D"
      }
    ]
  },
  {
    id: 2,
    img_url: "https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    question: "肌から見える血管の色味は？",
    answers: [
      {
        answerId: 105,
        content: "青っぽい",
        type: "C"
      },
      {
        answerId: 106,
        content: "緑っぽい",
        type: "A"
      },
      {
        answerId: 107,
        content: "青っぽい",
        type: "D"
      },
      {
        answerId: 108,
        content: "緑っぽい",
        type: "B"
      }
    ]
  },
  {
    id: 3,
    img_url: "https://images.unsplash.com/photo-1514163061636-02db31852e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    question: "腕の内側・うち太腿など、あまり日に当たらない箇所の肌の色は？",
    answers: [
      {
        answerId: 109,
        content: "黄味がかっている",
        type: "B"
      },
      {
        answerId: 110,
        content: "ピンクっぽい",
        type: "D"
      },
      {
        answerId: 111,
        content: "黄味がかっている",
        type: "A"
      },
      {
        answerId: 112,
        content: "ピンクっぽい",
        type: "C"
      }
    ]
  },
  {
    id: 4,
    img_url: "https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
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
    img_url: "https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
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
    img_url: "https://images.unsplash.com/photo-1582616698198-f978da534162?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    question: "肌がきれいに見えるアクセサリーは？",
    subLine: "※アクセサリーがない場合は、きれいな1円玉と5円玉を手の甲に乗せて比べてください\n（5円玉の場合は、AかB。艶ありか無しで選んでみてください。1円玉の場合は、CかD。艶ありか無しで選んでみてください。",
    answers: [
      {
        answerId: 117,
        content: "艶のあるプラチナ、シルバー。",
        type: "D"
      },
      {
        answerId: 118,
        content: "キラキラした明るいツヤありゴールド",
        type: "A"
      },
      {
        answerId: 119,
        content: "光沢控えめのプラチナ、シルバー。",
        type: "C"
      },
      {
        answerId: 120,
        content: "黄みの強いゴールドや、つや消しのゴールドまたはブロンズ",
        type: "B"
      }
    ]
  },
  {
    id: 7,
    img_url: "https://images.unsplash.com/photo-1506003094589-53954a26283f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
    img_url: "https://images.unsplash.com/photo-1542833807-ad5af0977050?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
    img_url: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
  