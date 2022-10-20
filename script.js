"use strict";
let secretNumber = makeSecreNumber();
let score = 30;
let hightScore = 0;

const displayMassage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    displayMassage("Нет числа, введите число от 1 до 30");
  } else if (guess === secretNumber) {
    displayMassage("Правильное число, поздравляю ✨");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";

    if (score > hightScore) {
      hightScore = score;
      document.querySelector(".hightscore-points").textContent = hightScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMassage(
        guess > secretNumber
          ? "Слишком большое число"
          : "Слишком маленькое число"
      );
      score--;
      document.querySelector(".score-points").textContent = score;
    } else {
      displayMassage("Ты проиграл🗿");
      document.querySelector(".score-points").textContent = 0;
    }
  }
});
function makeSecreNumber() {
  return Math.trunc(Math.random() * 30) + 1;
}

document.querySelector(".again").addEventListener("click", function () {
  score = 30;
  secretNumber = Math.trunc(Math.random() * 30) + 1;

  displayMassage("Угадай число");
  document.querySelector(".score-points").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "rgb(0, 179, 255)";
});
