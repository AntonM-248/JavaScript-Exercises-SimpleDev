let announcement = document.querySelector("#announcement");

let players = ['X', 'O'];
let gameWon = false;
let currentPlayer = players[Math.floor(Math.random() * 2)];
let boxClicked = [false,false,false,
  false,false,false,
  false,false,false];
let winningSets = [[0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [1,4,7]];

let selections = new Array(9);

let modifyBox = (index,box) => {
  if(!boxClicked[index] && !gameWon){
    boxClicked[index] = true;
    box.innerText = currentPlayer;
    selections[index] = currentPlayer;
    if(!checkIfGameWon()){
      currentPlayer = players.find(v => v != currentPlayer);
      announcement.innerText = `Player ${currentPlayer}'s Turn`;
    }
  }
}

let startGame = () => {
  announcement.innerText = `Player ${currentPlayer}'s Turn`;
  document.querySelectorAll(".ttt-box").forEach((box, index) => {
    box.addEventListener('click', modifyBox.bind(this,index,box));
  });
}

let checkIfGameWon = () => {
  winningSets.forEach(set => {
    if(selections[set[0]] === selections[set[1]] 
      && selections[set[1]] === selections[set[2]]
      && players.includes(selections[set[0]]) ){
        announcement.innerText = `Player ${currentPlayer} won!`;
         gameWon=true;
      }
  })
  return gameWon;
}

startGame();