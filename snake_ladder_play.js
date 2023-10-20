const { snake_ladder } = require("./snake_ladder");
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let play; 

// This is to print 10x10 grid for the board
const print = (i, board) => {
  if (i <= 100) {
    if (i === 11 || i === 21 || i === 31 || i === 41 || i === 51 || i === 61 || i === 71 || i === 81 || i === 91) {
      console.log("");
    }
    process.stdout.write(board[i].concat("  "));
    print(i + 1, board);
  }
};

// This is to print current status and board. 
const printBoard = (board) => {
  console.log("");
  print(1, board);
  console.log("");
  console.log("");
  console.log(`Status: ${board[0]}`);
  console.log("");
};

// This function proceeds the game on the basis of status.
const start = () => {

  rl.question("Enter who is this p1/p2? :",(input)=>{
    
    if(input === 0) {process.exit(1);}

  [result, boardOrMessage] = play(input);

  if (result) {
    printBoard(boardOrMessage);
  } else {
    console.log(boardOrMessage);
  }
  if(boardOrMessage[0] === "ongoing" || typeof(boardOrMessage)==='string'){
    start();
  } else {
    return"";
  }
 
}); 
  
}

//  This function initiates the game and prompts for player names
const initiate = () => {
  rl.question("Enter names of the players (player-1, player-2):" , ( input ) => {

    let [player1, player2] = input.split(",");
  
    play = snake_ladder(player1.trim(), player2.trim()); 
  
    start();

  });
  
}

initiate();



 








