const snake_ladder = (player1, player2) => {
  
  // players
  const players = {
    p1: player1,
    p2: player2,
  };

  //Board [Array]
  const board = Array(101).fill("_");

  // p1 plays first
  let currentPlayer = "p1";

  //Concept: Lookup Table
  const nextPlayer = {
    p1: "p2",
    p2: "p1",
  };

  // position
  const position = {
    p1: [],
    p2: [],
  };

  // Dice
  const dice = () => {
    let score = Math.trunc(Math.random() * 12);
    return score;
  };

  // 2-D Array, index-1 is the positions where the ladder/snake is placed
  //            index-2 is the position where the ladder/snake leads the player
  const snakeLadder = [
    [28, 10],
    [48, 16],
    [75, 32],
    [94, 71],
    [96, 42],
    [12, 50],
    [14, 55],
    [4, 56],
    [22, 58],
    [54, 88],
    [41, 79],
  ];

  // checking move
  const isValidMove = (move) => {
    if (position.p1.includes(move)) {
      return false;
    }
    if (position.p2.includes(move)) {
      return false;
    } else {
      return true;
    }
  };

  //checking for snakes or ladders and decreasing or increasing the position
  const snakeOrLadder = (currentBlock) => {
  
    snakeLadder.forEach(([i, j]) => {
      if (currentBlock === i) {
        console.log(`snake/ladder encountered, old position: ${currentBlock}`);
        currentBlock = j;
      }
    });
    return currentBlock;
  };

  // marking players positions on the board

  const updateBoard = (currentPlayer, move) => {

    board[move] = currentPlayer;
  };

  //Update position
  const updatePosition = (move) => {
    let length = position[currentPlayer].length;
    let current;
    let sum = 1;
    let finalPosition;

    if (length === 0) {

      sum=move;
      finalPosition = snakeOrLadder(sum);
      position[currentPlayer].push(finalPosition);
      console.log(`All positions: ${position[currentPlayer]}`);
    } else if (length === 1) {
      
      current = position[currentPlayer][0];
      sum = current + move;
      finalPosition = snakeOrLadder(sum);
      position[currentPlayer].push(finalPosition);
      console.log(`current position :${finalPosition}`);
      console.log(`All positions: ${position[currentPlayer]}`);
      
    } else if (length > 1) {
      
      current = position[currentPlayer][position[currentPlayer].length - 1];
      sum = current + move > 100 ? 0 : current + move;
      finalPosition = snakeOrLadder(sum);
      position[currentPlayer].push(finalPosition);
      console.log(`Current position: ${finalPosition}`); 
      console.log(`All positions: ${position[currentPlayer]}`);
    }
    return finalPosition;
  };

  // checking status of the game

  const computeStatus = () => {
    //ongoing, win-X, win-O
    let result = "ongoing";

    if (position.p1.includes(100)) {
      result = `${players.p1} wins!!`;
    }

    if (position.p2.includes(100)) {
      result = `${players.p2} wins!!`;
    }
    return result;
  };

  return (player) => {
    // Validate right player: return <error> if not
    if (player !== currentPlayer) {
      return [false, `Not your turn, its ${currentPlayer}'s turn.`];
    }

    // rolling dice
    let move = dice();
    console.log(`${currentPlayer} dice score: ${move}`);

    // Validate right move: return <error> if not
    if (!isValidMove(move)) {
      return [false, "Invalid move, try again!!"];
    }

    // updating position object
    let updatedPosition = updatePosition(move);

    //Updating the board with new positions
    updateBoard(currentPlayer, updatedPosition);

    // capturing status
    board[0] = computeStatus();

    // marking next players turn
    currentPlayer = nextPlayer[currentPlayer];

    return [true, board];
  };
};

module.exports = { snake_ladder };
