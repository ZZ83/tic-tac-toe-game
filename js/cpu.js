import { 
    player1, 
    player2, 
} from "./players.js";

import { board } from "./board.js";

// Check all the values are equal
const equals3 = (a, b, c) => {
    return a === b && b === c && a !== "";
};

export const scores = {
    x:  10,
    o: -10,
    tie: 0,
};

console.log(board);

// Bot move
export const bestMove = () => {
    // AI to make its turn
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < board.length; i++) {
        // Is the spot available?
        if (board[i] === null) {
            board[i] = player2.mark;
            let score = minimax(board, 0, false);
            board[i] = null;
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
    return move;
};

// Calculate where next move should take place
const minimax = (board, depth, isMaximizing) => {
    // Check the winner and return the score
    let result = checkWinner();
    if (result !== null) {
        return scores[result];
    }
    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            // Is the spot available?
            if (board[i] === null) {
                board[i] = player2.mark;
                let score = minimax(board, depth + 1, false);
                board[i] = null;
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            // Is the spot available?
            if (board[i] === null) {
                board[i] = player1.mark;
                let score = minimax(board, depth + 1, true);
                board[i] = null;
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
};



// Check match winner
const checkWinner = () => {
	let winner = null;

	// Horizontal
    if (equals3(board[0], board[1], board[2])) {
        winner  = board[0];
    } else if (equals3(board[3], board[4], board[5])) {
        winner  = board[3];
    } else if (equals3(board[6], board[7], board[8])) {
        winner  = board[6];
    }

	// Vertical
	if (equals3(board[0], board[3], board[6])) {
        winner  = board[0];
    } else if (equals3(board[1], board[4], board[7])) {
        winner  = board[1];
    } else if (equals3(board[2], board[5], board[8])) {
        winner  = board[2];
    }

	// Diagonal
    if (equals3(board[0], board[4], board[8])) {
        winner = board[0];
    }
    if (equals3(board[2], board[4], board[6])) {
        winner = board[2];
    }

	// Are still moves left
    let openSpots = 0;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
            openSpots++;
        }
    }

	// Return winner
	if (winner == null && openSpots == 0) {
		return "tie";
	} else {
		return winner;
	}
};




console.log( bestMove() )


































































































