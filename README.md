# Tic Tac Toe JS

## Overview

Welcome to the Tic Tac Toe Game! This is a classic two-player game where players take turns marking spaces on a 3x3 grid with either a circle (Player 1) or a cross (Player 2). The goal is to get three of the same marks in a row, either horizontally, vertically, or diagonally.

## Features

### Play the Game

- **Player Turns**: Player 1 uses circles (〇), and Player 2 uses crosses (×).
- **Game Grid**: The game is played on a 3x3 grid, where each cell can be marked by either a circle or a cross.
- **Turn-based Gameplay**: Players take turns clicking on empty cells to place their marks.
- **Winning Condition**: The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game.
- **Game Over**: Once the game is finished, the result is displayed. If all cells are filled without a winner, the game is a draw.

### Scoring

- The game does not have a score beyond the win or draw, but the result is displayed at the end of each game.

### Collision Detection

- **Self-Collision**: There is no self-collision in this game as the goal is to fill the grid, not a snake-like movement.
- **Game Completion**: The game ends when one player wins or when the grid is filled without a winner.

### UI Components

- **Game Grid**: Displays a 3x3 grid where players click to make their move.
- **Result Display**: A message showing who won or if the game ended in a draw.
- **Restart Button**: Allows the game to be restarted and play a new round.

### Game Reset

- After each game, the option to start a new game is available by clicking the restart button. The grid is cleared, and the game begins again.

## How to Use

1. **Start the Game:**
   - Open the game in a web browser. The grid will be displayed, and Player 1 (〇) will start.

2. **Player Turns:**
   - Players alternate turns clicking on the empty cells. Player 1 uses circles (〇), and Player 2 uses crosses (×).
   - Click on a cell to place your mark. The game alternates between players automatically.

3. **Winning the Game:**
   - The first player to line up three of their marks (horizontally, vertically, or diagonally) wins the game.
   - If the grid is filled without a winner, the game will display a draw message.

4. **Game Over:**
   - Once the game ends (whether through a win or a draw), a result message will appear.
   - A restart button is available to play a new game.

5. **Restart the Game:**
   - Click the restart button to reset the game grid and start a new round.

## Screenshots

**Gameplay:**
![Gameplay](https://github.com/ElliotOne/Tic-Tac-Toe-JS/blob/master/screenshots/first.png)

**Game Over:**
![Game Over](https://github.com/ElliotOne/Tic-Tac-Toe-JS/blob/master/screenshots/second.png)

Enjoy the game, and may the best player win!
