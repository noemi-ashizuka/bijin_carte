const YES_NO = [
  {
    id: 1,
    question: "Do you like coffee?",
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
    question: "Do you like tea?",
    answers: [
      {
        answerId: 102,
        content: "Yes",
        nextId: 1
      },
      {
        answerId: 103,
        content: "No",
        nextId: 3
      }
    ]
  },
  {
    id: 3,
    question: "Do you like ice cream?",
    answers: [
      {
        answerId: 104,
        content: "Yes",
        nextId: 4
      },
      {
        answerId: 105,
        content: "No",
        nextId: 2
      }
    ]
  },
  {
    id: 4,
    question: "Do you like apples?",
    answers: [
      {
        answerId: 104,
        content: "Yes",
        nextId: 5
      },
      {
        answerId: 105,
        content: "No",
        nextId: 6
      }
    ]
  },
  {
    id: 5,
    question: "This is result 1",
    // answers: [
    //   {
    //     answerId: 104,
    //     content: "Yes",
    //     nextId: 1
    //   },
    //   {
    //     answerId: 105,
    //     content: "No",
    //     nextId: 3
    //   }
    // ]
  },
  {
    id: 6,
    question: "this is result 2",
    // answers: [
    //   {
    //     answerId: 104,
    //     content: "Yes",
    //     nextId: 1
    //   },
    //   {
    //     answerId: 105,
    //     content: "No",
    //     nextId: 3
    //   }
    // ]
  }
];

export default () =>
  Promise.resolve(YES_NO);