let oneScore = 0;
let secondScore = 0;

function playerOne() {
  oneScore = Math.floor(Math.random() * 6 + 1);
  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + oneScore + ".png");
  return oneScore;
}

function playerSecond() {
  secondScore = Math.floor(Math.random() * 6 + 1);
  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + secondScore + ".png");
  return secondScore;
}

const playerOneResult = playerOne();
const playerSecondResult = playerSecond();

if (playerOneResult > playerSecondResult) {
  document.querySelector("h1").textContent = "Player One Wins";
  console.log(oneScore + "    " + secondScore);
} else if (playerOneResult === playerSecondResult) {
  document.querySelector("h1").textContent = "It's a Draw";
} else if (playerOneResult < playerSecondResult) {
  document.querySelector("h1").textContent = "Player Two Wins";
}
