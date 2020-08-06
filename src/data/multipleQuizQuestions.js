const MULTIPLE_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What color do you like?",
    answers: [
      {
        answerId: 101,
        content: "Red",
        type: "A"
      },
      {
        answerId: 102,
        content: "Pink",
        type: "B"
      },
      {
        answerId: 103,
        content: "Green",
        type: "C"
      },
      {
        answerId: 104,
        content: "Brown",
        type: "D"
      }
    ]
  },
  {
    id: 2,
    question: "What vacation do you like?",
    answers: [
      {
        answerId: 105,
        content: "Beach",
        type: "C"
      },
      {
        answerId: 106,
        content: "Mountain",
        type: "A"
      },
      {
        answerId: 107,
        content: "City",
        type: "D"
      },
      {
        answerId: 108,
        content: "Home",
        type: "B"
      }
    ]
  },
  {
    id: 3,
    question: "What vacation do you like?",
    answers: [
      {
        answerId: 109,
        content: "Beach",
        type: "B"
      },
      {
        answerId: 110,
        content: "Mountain",
        type: "D"
      },
      {
        answerId: 111,
        content: "City",
        type: "A"
      },
      {
        answerId: 112,
        content: "Home",
        type: "C"
      }
    ]
  },
  {
    id: 4,
    question: "What's your favorite pet?",
    answers: [
      {
        answerId: 113,
        content: "Dog",
        type: "B"
      },
      {
        answerId: 114,
        content: "Cat",
        type: "D"
      },
      {
        answerId: 115,
        content: "Hamster",
        type: "A"
      },
      {
        answerId: 116,
        content: "Fish",
        type: "C"
      }
    ]
  },
  {
    id: 5,
    question: "What's your hobby?",
    answers: [
      {
        answerId: 117,
        content: "Running or sports",
        type: "B"
      },
      {
        answerId: 118,
        content: "Reading or playing games",
        type: "D"
      },
      {
        answerId: 119,
        content: "Art and crafts",
        type: "A"
      },
      {
        answerId: 120,
        content: "Cooking",
        type: "C"
      }
    ]
  }
]

export default () =>
  Promise.resolve(MULTIPLE_QUIZ_QUESTIONS);