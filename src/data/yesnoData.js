const YES_NO = [
  {
    id: 1,
    question: "洗顔や入浴の後、お肌につっぱり感を感じますか？",
    imgUrl: "https://images.unsplash.com/photo-1535031171703-48b1362baa98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    answers: [
      {
        answerId: 100,
        content: "Yes",
        nextId: 2
      },
      {
        answerId: 101,
        content: "No",
        nextId: 3
      }
    ]
  },
  {
    id: 2,
    question: "目元、口元など皮膚の薄いところが乾燥しがち",
    answers: [
      {
        answerId: 102,
        content: "Yes",
        nextId: 4
      },
      {
        answerId: 103,
        content: "No",
        nextId: 5
      }
    ]
  },
  {
    id: 3,
    question: "T ゾーンの化粧崩れがしやすい",
    answers: [
      {
        answerId: 104,
        content: "Yes",
        nextId: 7
      },
      {
        answerId: 105,
        content: "No",
        nextId: 6
      }
    ]
  },
  {
    id: 4,
    question: "１日中顔のお肌のかさつきが気になる",
    answers: [
      {
        answerId: 104,
        content: "Yes",
        nextId: 8
      },
      {
        answerId: 105,
        content: "No",
        nextId: 9
      }
    ]
  },
  {
    id: 5,
    question: "日焼けや汗をかいた時季節の変化など、外的要因で痒みやヒリヒリ感を感じやすい",
    answers: [
      {
        answerId: 104,
        content: "Yes",
        nextId: 9
      },
      {
        answerId: 105,
        content: "No",
        nextId: 10
      }
    ]
  },
  {
    id: 6,
    question: "目元、口元など皮膚の薄いところの乾燥が気になる",
    answers: [
      {
        answerId: 104,
        content: "Yes",
        nextId: 11
      },
      {
        answerId: 105,
        content: "No",
        nextId: 10
      }
    ]
  },
  {
    id: 7,
    question: "頬がベタつき、毛穴の開きが気になる",
    answers: [
      {
        answerId: 104,
        content: "Yes",
        nextId: 12
      },
      {
        answerId: 105,
        content: "No",
        nextId: 11
      }
    ]
  },
  {
    id: 8,
    question: "Result 1",
  },
  {
    id: 9,
    question: "Result 2",
  },
  {
    id: 10,
    question: "Result 3",
  },
  {
    id: 11,
    question: "Result 4",
  },
  {
    id: 12,
    question: "Result 5",
  },
];

export default () =>
  Promise.resolve(YES_NO);
