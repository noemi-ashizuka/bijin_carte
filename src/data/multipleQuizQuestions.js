const MULTIPLE_QUIZ_QUESTIONS = [
  {
    id: 1,
    img_url: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    question: "目の色は?",
    answers: [
      {
        answerId: 101,
        content: "明るいブラウン or ソフ トなブラックガラス玉の様 にキラキラ",
        type: "A"
      },
      {
        answerId: 102,
        content: "赤身のブラウン or ソフ トなブラック",
        type: "B"
      },
      {
        answerId: 103,
        content: "ダークブラウン or ブラック",
        type: "C"
      },
      {
        answerId: 104,
        content: "ブラウン or 赤みのある ダークブラック",
        type: "D"
      }
    ]
  },
  {
    id: 2,
    img_url: "https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    question: "肌の色は?",
    answers: [
      {
        answerId: 105,
        content: "明るいオークル系 皮膚が薄い",
        type: "C"
      },
      {
        answerId: 106,
        content: "明るいピンク系で肌質 はマット",
        type: "A"
      },
      {
        answerId: 107,
        content: "オークル系でマット肌",
        type: "D"
      },
      {
        answerId: 108,
        content: "ピンク系で色白肌",
        type: "B"
      }
    ]
  },
  {
    id: 3,
    img_url: "https://images.unsplash.com/photo-1514163061636-02db31852e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    question: "日焼けした際の反応は?",
    answers: [
      {
        answerId: 109,
        content: "すぐに日焼けするが、 戻るのも早い",
        type: "B"
      },
      {
        answerId: 110,
        content: "赤くなって日焼けしない",
        type: "D"
      },
      {
        answerId: 111,
        content: "日焼けしやくす戻りに くい",
        type: "A"
      },
      {
        answerId: 112,
        content: "やや赤くなり、その後 日焼けする",
        type: "C"
      }
    ]
  },
  {
    id: 4,
    img_url: "https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    question: "肌になじむアクセサリー は?",
    answers: [
      {
        answerId: 113,
        content: "キラキラした明るいゴー ルド",
        type: "B"
      },
      {
        answerId: 114,
        content: "優しい光沢のあるピラ チナ・シルバー",
        type: "D"
      },
      {
        answerId: 115,
        content: "黄みの強いゴールド・ 艶消しゴールドブロンドカ ラー",
        type: "A"
      },
      {
        answerId: 116,
        content: "艶のあるプラチナシル バー",
        type: "C"
      }
    ]
  },
  {
    id: 5,
    img_url: "https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    question: "周りから褒められる口紅の 色は?",
    answers: [
      {
        answerId: 117,
        content: "ピーチピンクなど明る いオレンジ系",
        type: "B"
      },
      {
        answerId: 118,
        content: "ローズピンクなど明る いピンク系",
        type: "D"
      },
      {
        answerId: 119,
        content: "オレンジベージュなど落ち着いたオレンジ系",
        type: "A"
      },
      {
        answerId: 120,
        content: "ピンクなど鮮やかなロー ズ系",
        type: "C"
      }
    ]
  }
]

export default () =>
  Promise.resolve(MULTIPLE_QUIZ_QUESTIONS);