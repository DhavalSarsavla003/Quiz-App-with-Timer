let data = [
  {
    question: ". Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyperlink>"],
    answer: "<a>",
    qno: "1",
  },
  {
    question: ". Which attribute is used in HTML to define inline styles?",
    options: ["class", "style", "font", "css"],
    answer: "style",
    qno: "2",
  },
  {
    question: ". Which HTML tag is used to display an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: "<img>",
    qno: "3",
  },
  {
    question: ". Which property is used to change the background color in CSS?",
    options: ["bgcolor", "color", "background-color", "back-color"],
    answer: "background-color",
    qno: "4",
  },
  {
    question: ". In CSS, which property is used to change the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size",
    qno: "5",
  },
  {
    question: ". Which symbol is used to select an id in CSS?",
    options: [". (dot)", "# (hash)", "* (asterisk)", "@ (at)"],
    answer: "# (hash)",
    qno: "6",
  },
  {
    question: ". Which of the following is used to insert output in C++?",
    options: ["cin", "cout", "print", "scanf"],
    answer: "cout",
    qno: "7",
  },
  {
    question: ". Which header file is required for input and output in C++?",
    options: ["stdio.h", "iostream", "conio.h", "string.h"],
    answer: "iostream",
    qno: "8",
  },
  {
    question: ". What is the correct syntax to declare a pointer in C++?",
    options: ["int p;", "int *p;", "pointer p;", "int &p;"],
    answer: "int *p;",
    qno: "9",
  },
  {
    question: ". Which of the following is the correct way to create a comment in C++?",
    options: ["# comment", "// comment", "<!-- comment -->", "* comment *"],
    answer: "// comment",
    qno: "10",
  },
];


let selectedIndex = null;
let starttime = null;
let countdown = null;
let currentQuestion = 0;
let currentIndex = 0;
let time = 15;
let score = 0;
let correctAns = 0;

document.querySelector('.card').style.display = "none";

document.getElementById("start-btn").addEventListener("click", () => {
  document.querySelector('.card').style.display = "block";
  document.querySelector('.Quiz-Start').style.display = "none";
  startQuestions(currentIndex);
});

let totalTime = 0;
setInterval(() => {
  totalTime++;
}, 1000);

function startQuestions(index) {
  document.getElementById('qno').innerHTML = data[index].qno;
  document.getElementById('qout10').innerHTML = data[index].qno;
  document.getElementById('Question').innerHTML = data[index].question;
  document.getElementById('op-1').innerText = data[index].options[0];
  document.getElementById('op-2').innerText = data[index].options[1];
  document.getElementById('op-3').innerText = data[index].options[2];
  document.getElementById('op-4').innerText = data[index].options[3];
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`btn-${i}`).style.backgroundColor = '';
  }
  resetTime();
}

function displayTime() {
  let min = Math.floor(time / 60);
  let sec = time % 60;
  document.getElementById('timer').innerHTML =
    `${min.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')}`;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < data.length) {
    startQuestions(currentIndex);
  } else {
    clearInterval(countdown);
    endQuiz();
  }
}

function resetTime() {
  clearInterval(countdown);
  time = 15;
  displayTime();
  startTime();
}

function startTime() {
  countdown = setInterval(() => {
    if (time > 0) {
      time--;
      displayTime();
    } else {
      clearInterval(countdown);
      nextQuestion();
    }
  }, 1000);
}

function selectAnswer(selectedIndex) {
  clearInterval(countdown);

  const selectedAnswer = data[currentIndex].options[selectedIndex];
  const correctAnswer = data[currentIndex].answer;

  if (selectedAnswer === correctAnswer) {
    score++;
    correctAns++;
    document.getElementById(`btn-${selectedIndex + 1}`).style.backgroundColor = 'rgba(112,255,145,0.9)';
  } else {
    document.getElementById(`btn-${selectedIndex + 1}`).style.backgroundColor = 'rgba(255,99,99,0.9)';
  }

  setTimeout(nextQuestion, 300);
}


function resetQuestion() {
  currentQuestion = 0
  score = 0;
  totaltime = 0;
  location.reload();
}

let rBtn = document.getElementById('resetbtn');
rBtn.style.display = "none"

function endQuiz() {
  if (currentIndex >= data.length) {
    document.querySelector('.quiz').style.display = "none";
    rBtn.style.display = "block"
    document.getElementById('score').innerHTML = score + "0%";
    document.getElementById('cAns').innerHTML = correctAns;
    document.getElementById('t-Time').innerHTML = totalTime + "s";
  }
}
