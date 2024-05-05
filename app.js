const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"||
    userInput === 'bomb'
  ) {
    return userInput;
  } else return "Error! Invalid input.";
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "game tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry Computer Won.";
    } else return "Congratulations you won!";
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry Computer Won.";
    } else return "Congratulations you won!";
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry Computer Won.";
    } else return "Congratulations you won!";
  }
  if (userChoice==='bomb'){
    return "Congratulations you won!";
  }
};
const playGame = () => {
  const userChoice = getUserChoice("BOMB");
  const computerChoice = getComputerChoice();
  console.log("You choose " + userChoice);
  console.log("The computer chooses " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
