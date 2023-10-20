Snake and Ladder

# Over view:

1. Two players
2. A Board (10x10)
3. 'Player-1' plays first by default 
4. Validates the player's turn
5. 
6. Game status :
            1. Player-wins if 100 is reached first
            2. Ongoing
7. Displays the board and status on each turn
8. Warning message on wrong move or invalid player.


# How to play:

1. Run snake_ladder_play.js file.
2. Enter players' names. 'player-1' has the first turn by default.
3. enter p1/p2 when promped.  

# Design and domain requirements. 

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

  After each turn these array gets updated respectively and store the value of position. For every new turn the dice score is added in the preveous block value (last element in the position arrays):
  
  current + move  (current => current positin from the position array, move => dice score)
  
  Then this sum value is pushed 
  
  Currently board is being printed incorrectly orientation wise.

8. 



 

  ## Emerging Requirements

  1. Store the name of the players.
  2. Current player, Next player.
  3. Store the game board.
  4. game status.
  5. Game orchestration. 

    