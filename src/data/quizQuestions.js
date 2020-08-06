const QUESTIONS = [
  // question 1
  {
    id: 1,
    question: "Do you like red?",
    answers: [
      {
          type: "yes",
          content: "Yes",
          nextId: 2
      },
      {
          type: "No",
          content: "No",
          nextId: 3
      },
    ]
  },
  // question 2
  {
    id: 2,
    question: "Do you like flowers?",
    answers: [
      {
          type: "yes",
          content: "Yes",
          nextId: 6
      },
      {
          type: "No",
          content: "No",
          nextId: 5
      },
    ]
  },
  // question 3
  {
    id: 3,
    question: "Do you like chips?",
    answers: [
      {
          type: "yes",
          content: "Yes",
          nextId: 5
      },
      {
          type: "No",
          content: "No",
          nextId: 4
      },
    ]
  },
  // question 4
  {
    id: 4,
    question: "Do you like mohitos?",
    answers: [
      {
          type: "yes",
          content: "Yes",
          nextId: 5
      },
      {
          type: "No",
          content: "No",
          nextId: "result 1"
      },
    ]
  },
  // question 5
  {
    id: 5,
    question: "Do you like grapes?",
    answers: [
      {
          type: "yes",
          content: "Yes",
          nextId: "result 2"
      },
      {
          type: "No",
          content: "No",
          nextId: "result 3"
      },
    ]
  }
];

export default QUESTIONS;