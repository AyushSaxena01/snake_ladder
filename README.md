Snake and Ladder

# Over view:

1. Two players
2. A Board (10x10)
3. 'Player-1' plays first by default 
4. Validates the player's turn
5. Game status :
            1. Player-wins if 100 is reached first
            2. Ongoing
6. Displays the board and status on each turn
7. Warning message on wrong move or invalid player.


# How to play:

1. Run snake_ladder_play.js file.
2. Enter players' names. 'player-1' has the first turn by default.
3. enter p1/p2 when promped.  

# Description and flow of the game. 

1. We start the game.

2. There are 2 players [rule]:  used players object to store players.

  const players = {
    p1: player1,
    p2: player2,
  };

3. We store their names.

4. player-1 plays first. [rule]

5. A dice is rolled by each player, using random function to generate a value:

  const dice = () => {
    let score = Math.trunc(Math.random() * 12);
    console.log(`DICE = ${score}`);
    return score;
  };

6. Snakes and ladders are stored as a 2D array:

   const snakeLadder = [ [28, 10], [48, 16], [75, 32],.... ]
                          i   j
   i - start (the block where it is placed)
   j - end point (where it leads)

7. Players mark their spot on board:

   Using 1D array as board:

   const board = Array(101).fill("_");

   Using two different arrays to store the current positions of p1 & p2:

   const position = {
    p1: [],
    p2: [],
  };

  Position is updated using the updatePosition() which takes the move/dice score as the argument 

  In the updatePosition() we take 'current' as the current position of player (last index of position arrays), the new updated position is calculated by adding current and move:
  
  current + move  (current => current positin from the position array, move => dice score)

  This sum is passed to snakeOrLadder() which checks if the new block position contains a snake or ladder and returns the altered block position accordingly.
  
  Then this altered block position value  (finalPosition) is pushed in the position array for respective player.

  The finalPosition value is passed as argument to updateBoard() which places the p1/p2 on the finalPosition index value.
  
  Currently board is being printed incorrectly orientation wise.

8. The status of the game is stored at 0th index of the board:

     board[0] = computeStatus();

9. Players' turn is changed by look up table:

  currentPlayer = nextPlayer[currentPlayer];

10. The game continues untill one wins. It shows error if players get repeated block positions, players can not be at the same position.

  # Design and domain requirements. 

  1. Store the name of the players.
  2. Current player, Next player.
  3. Store the game board.
  4. game status.
  5. store snakes and ladders.
  5. Game orchestration. 

    