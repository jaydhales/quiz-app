const questions = [
  {
    question: "What is your name",
    optionA: "Jay",
    optionB: "Joe",
    optionC: "Jill",
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
    question: "What is your name",
    optionA: "Jay",
    optionB: "Joe",
    optionC: "Jill",
    correctOpt: "optionB",
  },
];

const questionNum = document.querySelector("#question");
const totalQuestions = document.querySelector("#total");
const resultDiv = document.querySelector("#result");
const questionForm = document.querySelector("#question-form");
const questionBox = document.querySelector("#question-box");
const options = document.querySelectorAll(".options");
const prevBtn = document.querySelector("#prev-btn");
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
  if (questionIndex === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

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
runEvents(prevBtn, () => {
  questionIndex > 0 && questionIndex--;
});
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
  resultDiv.innerHTML += `<div>
    <p>Total Score: ${totalScore} / ${questions.length}</p>
  </div>`;
};

updateDom();
