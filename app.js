let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
  msg.innerText = "Game was Draw! Play Again!";
  msg.style.backgroundColor = "#293a73";
};

const genCompChoice = () => {
  const options = ["stone", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost!Computer's ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = " red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  }
  else {
    let userWin = true;
    if (userChoice === "stone") {
      userWin = compChoice === " paper" ? false : true;
    }
    else if (userChoice === "paper") {
      userWin = compChoice === " scissors" ? false : true;
    }
    else {
      userWin = compChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});