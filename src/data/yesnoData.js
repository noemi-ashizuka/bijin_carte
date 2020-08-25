const YES_NO = [
  {
    id: 1,
    question: "洗顔や入浴の後、お肌につっぱり感を感じますか？",
    imgUrl: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/humphrey-muleba-NfpkqJ9314E-unsplash-scaled-e1598320629572.jpg",
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
    imgUrl: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/tirza-van-dijk-dq0x8AvNKv8-unsplash-scaled-e1598320550648.jpg",
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
    imgUrl: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/ian-dooley-y_CSTKJ0bEs-unsplash-scaled-e1598320540732.jpg",
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
    imgUrl: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/content-pixie-fMx0jcIxKmw-unsplash-scaled-e1598320510954.jpg",
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
    imgUrl: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/holger-link-MqNyusb_ne4-unsplash-scaled-e1598320533638.jpg",
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
    imgUrl: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/heather-ford-vhHXYVa5q-s-unsplash-scaled-e1598320521776.jpg",
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
    imgUrl: "http://www.wp.bijin-carte.com/wp-content/uploads/2020/08/hanna-postova-oha7AANDiL8-unsplash-scaled-e1597280816617.jpg",
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
