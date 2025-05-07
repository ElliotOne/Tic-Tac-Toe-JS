let home0 = document.querySelector("#home-0 span"), // Home 0
    home1 = document.querySelector("#home-1 span"), // Home 1
    home2 = document.querySelector("#home-2 span"),
    home3 = document.querySelector("#home-3 span"),
    home4 = document.querySelector("#home-4 span"),
    home5 = document.querySelector("#home-5 span"),
    home6 = document.querySelector("#home-6 span"),
    home7 = document.querySelector("#home-7 span"),
    home8 = document.querySelector("#home-8 span"),
    btnRestart = document.getElementById("btn-restart"), // Restart button
    lblResult = document.getElementById("lbl-result"); // Result label

// 0 or circle for player 1
// 1 or cross for player 2

let whichPlayer, // Determines the current player
    isGameFinished, // Indicates whether the game is finished
    homesArr; // Array to store the state of the houses

// After the page is fully loaded
document.addEventListener("loadend", function () {
    StartNewGame(); // Start a new game
})

// Function to create a 2D array for the houses
function Create2DArray(rows) {
    var arr = [];

    for (var i = 0; i < rows; i++) {
        arr[i] = [];
    }

    return arr;
}

// Store the 2D array in the homesArr variable
homesArr = Create2DArray(3);

// Start a new game
function StartNewGame() {
    whichPlayer = 0; // Default player is player 1
    isGameFinished = false; // The game is not finished

    // Clear the contents of the houses in HTML
    home0.innerHTML = "";
    home1.innerHTML = "";
    home2.innerHTML = "";
    home3.innerHTML = "";
    home4.innerHTML = "";
    home5.innerHTML = "";
    home6.innerHTML = "";
    home7.innerHTML = "";
    home8.innerHTML = "";
}

// Fill data in the array
function fillData(x, y) {
    // If the house is empty
    if (homesArr[x][y] === undefined) {
        // If it's player 1's turn
        if (whichPlayer == 0) {
            // Set the house value to 0 (circle)
            homesArr[x][y] = 0;
            // Switch to player 2
            whichPlayer = 1;
            // Update the game board
            printOnScreen(x, y, 0);
        } else {
            homesArr[x][y] = 1;
            whichPlayer = 0;
            printOnScreen(x, y, 1);
        }
    }
}

// Print the game board on the screen
function printOnScreen(x, y, player) {

    // If the board is full, game over
    if (IsBoardFull()) {
        lblResult.style.color = "rgb(214, 0, 64)";
        lblResult.innerHTML = "The board is full. No one won.";
        isGameFinished = true;
    }

    // Player's sign
    let sign;
    if (player === 0) {
        sign = "&SmallCircle;"; // Circle for player 1
    } else {
        sign = "&times;"; // Cross for player 2
    }

    // Place the sign in the respective house on the HTML board
    if (x === 0 && y === 0) {
        home0.innerHTML = sign; // If it's house 0,0 in the array, place the sign there in HTML
    } else if (x === 0 && y === 1) {
        home1.innerHTML = sign;
    } else if (x === 0 && y === 2) {
        home2.innerHTML = sign;
    } else if (x === 1 && y === 0) {
        home3.innerHTML = sign;
    } else if (x === 1 && y === 1) {
        home4.innerHTML = sign;
    } else if (x === 1 && y === 2) {
        home5.innerHTML = sign;
    } else if (x === 2 && y === 0) {
        home6.innerHTML = sign;
    } else if (x === 2 && y === 1) {
        home7.innerHTML = sign;
    } else {
        home8.innerHTML = sign;
    }

    // If the game is over, determine the winner
    if (IsGameOver()) {
        lblResult.style.color = "rgb(214, 0, 64)";
        lblResult.innerHTML = WhoIsWinner(); // Who won the game
        isGameFinished = true;
    }
}

// Determine the winner
function WhoIsWinner() {
    if (whichPlayer == 1) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

// Check if the board is full
function IsBoardFull() {
    // If any house is empty
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (homesArr[i][j] === undefined) {
                return false; // Not full
            }
        }
    }
    return true; // Full
}

// Check if the game is over
function IsGameOver() {
    // Check if a row, column, or diagonal is completed
    return (rowCrossed() || columnCrossed() || diagonalCrossed());
}

// Check if a row is completed
function rowCrossed() {
    // Check each row
    for (let i = 0; i < 3; i++) {
        // If all houses in the current row are the same
        if (homesArr[i][0] === homesArr[i][1] && homesArr[i][1] === homesArr[i][2] && homesArr[i][0] !== undefined) {
            return true;
        }
    }

    return false;
}

// Check if a column is completed
function columnCrossed() {
    // Check each column
    for (let i = 0; i < 3; i++) {
        // If all houses in the current column are the same
        if (homesArr[0][i] === homesArr[1][i] && homesArr[1][i] === homesArr[2][i] && homesArr[0][i] !== undefined) {
            return true;
        }
    }
    return false;
}

// Check if a diagonal is completed
function diagonalCrossed() {
    // Check the diagonal from (0,0) to (2,2)
    if (homesArr[0][0] === homesArr[1][1] && homesArr[1][1] === homesArr[2][2] && homesArr[0][0] !== undefined) {
        return true;
    }

    // Check the diagonal from (2,0) to (0,2)
    if (homesArr[0][2] === homesArr[1][1] && homesArr[1][1] === homesArr[2][0] && homesArr[0][2] !== undefined) {
        return true;
    }

    return false;
}

// Event listeners for clicking on each house in HTML

home0.addEventListener("click", function () {
    if (!isGameFinished) {
        fillData(0, 0);
    }
})

home1.addEventListener("click", function () {
    if (!isGameFinished) {
        fillData(0, 1);
    }
})

home2.addEventListener("click", function () {
    if (!isGameFinished) {
        fillData(0, 2);
    }
})

home3.addEventListener("click", function () {
    if (!isGameFinished) {
        fillData(1, 0);
    }
})

home4.addEventListener("click", function () {
    if (!isGameFinished) {
        fillData(1, 1);
    }
})

home5.addEventListener("click", function () {
    if (!isGameFinished) {
        fillData(1, 2);
    }
})

home6.addEventListener("click", function () {
    if (!isGameFinished) {
        fillData(2, 0);
    }
})

home7.addEventListener("click", function () {
    if (!isGameFinished) {
        fillData(2, 1);
    }
})

home8.addEventListener("click", function () {
    if (!isGameFinished) {
        fillData(2, 2);
    }
})

btnRestart.addEventListener("click", function () {
    homesArr = Create2DArray(3);
    StartNewGame();
    lblResult.innerHTML = "";
})
