const questions = [
  {
    question: "Neutral component with pH range 7 represents what color?",
    optionA: "Blue",
    optionB: "Yellow",
    optionC: "Green",
    correctOpt: "optionC",
  },
  {
    question: "Belarus is located in which part of Europe?",
    optionA: "Northern",
    optionB: "Eastern",
    optionC: "Southern",
    correctOpt: "optionB",
  },
  {
    question: "Which of the following is NOT a Saudi Arabian brand?",
    optionA: "Gazprom",
    optionB: "ADNOC",
    optionC: "Sberbank",
    correctOpt: "optionB",
  },
  {
    question: "What is the most common fuel used in nuclear reactor?",
    optionA: "Uranium",
    optionB: "Mineral Salt",
    optionC: "Hydrogen",
    correctOpt: "optionA",
  },
  {
    question: "What is the most famous port?",
    optionA: "Port of Shanghai",
    optionB: "Port of Hong Kong",
    optionC: "Port of Singapore",
    correctOpt: "optionA",
  },
  {
    question: "What is a 2 line poem?",
    optionA: "Amalthea",
    optionB: "Couplets",
    optionC: "Callisto",
    correctOpt: "optionB",
  },
  {
    question: "What is your name",
    optionA: "Jay",
    optionB: "Joe",
    optionC: "Jill",
    correctOpt: "optionB",
  },
  {
    question:
      "In which film, Arnold Schwarzenegger acts as the Howard Langston?",
    optionA: "Staying Hungry",
    optionB: "Pumping Iron",
    optionC: "Jingle All the Way",
    correctOpt: "optionC",
  },
  {
    question: "People in Chile speak in",
    optionA: "English",
    optionB: "Spanish",
    optionC: "French",
    correctOpt: "optionB",
  },
  {
    question: "Which of the following is a product brand from Mexico?",
    optionA: "Malee",
    optionB: "Atlantis",
    optionC: "Atletica",
    correctOpt: "optionC",
  },
  {
    question: "What is the least populated country in South America?",
    optionA: "Suriname",
    optionB: "Mexico",
    optionC: "Venezuela",
    correctOpt: "optionA",
  },
  {
    question: "Ukraine is located in which part of Europe?",
    optionA: "Southern",
    optionB: "Eastern",
    optionC: "Western",
    correctOpt: "optionB",
  },
  {
    question: "What is the UN Code for Cyprus?",
    optionA: "196",
    optionB: "148",
    optionC: "156",
    correctOpt: "optionA",
  },
  {
    question: "Which country has the oldest harbor?",
    optionA: "Italy",
    optionB: "Ukraine",
    optionC: "Egypt",
    correctOpt: "optionC",
  },
  {
    question: "Which of the following is a European country?",
    optionA: "Togo",
    optionB: "Tunisia",
    optionC: "Lithuania",
    correctOpt: "optionC",
  },
];

const questionNum = document.querySelector("#question");
const totalQuestions = document.querySelector("#total");
const resultDiv = document.querySelector("#result");
const questionForm = document.querySelector("#question-form");
const questionBox = document.querySelector("#question-box");
const options = document.querySelectorAll(".options");
// const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const submitBtn = document.querySelector("#submit-btn");

let totalScore = 0;
let questionIndex = 0;
totalQuestions.innerHTML = questions.length;

// events

const updateDom = () => {
  const currentQuestion = questions[questionIndex];
  questionNum.innerHTML = questionIndex + 1;
  questionBox.innerHTML = currentQuestion.question;

  updateOptions(options, currentQuestion);
  validateAnswers(currentQuestion);

  questionForm.elements.option.forEach((el) => {
    el.checked = false;
  });

  //   toggle previous, next and submit button
  //   if (questionIndex === 0) {
  //     prevBtn.disabled = true;
  //   } else {
  //     prevBtn.disabled = false;
  //   }

  if (questionIndex < questions.length - 1) {
    submitBtn.disabled = true;
    nextBtn.disabled = false;
  } else {
    submitBtn.disabled = false;
    nextBtn.disabled = true;
  }
};

const updateOptions = (option, currentQuestion) => {
  option[0].children[0].value = currentQuestion.optionA;
  option[1].children[0].value = currentQuestion.optionB;
  option[2].children[0].value = currentQuestion.optionC;

  option[0].children[1].innerHTML = currentQuestion.optionA;
  option[1].children[1].innerHTML = currentQuestion.optionB;
  option[2].children[1].innerHTML = currentQuestion.optionC;
};

// Event Listeners
const runEvents = (target, action) => {
  target.addEventListener("click", (e) => {
    e.preventDefault();
    action();
    updateDom();
  });
};
// runEvents(prevBtn, () => {
//   questionIndex > 0 && questionIndex--;
// });
runEvents(nextBtn, () => {
  questionIndex < questions.length - 1 && questionIndex++;
});

// Validate Answers and add to scores
const validateAnswers = (currentQuestion) => {
  if (
    questionForm.elements.option.value ===
    currentQuestion[currentQuestion.correctOpt]
  ) {
    totalScore++;
  }
};

questionForm.onsubmit = (e) => {
  e.preventDefault();
  updateDom();
  questionForm.style.display = "none";
  resultDiv.style.display = "block";
  resultDiv.firstElementChild.innerHTML = `Total Score: ${totalScore} / ${questions.length}`;
};

updateDom();
