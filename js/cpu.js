import { 
    player1, 
    player2, 
} from "./players.js";

const huPlayer = player1.mark;
const aiPlayer = player2.mark;

/** 
 * Returns list of the indexes of empty spots on the board
 * @param  {array}  board - Game board represented as an array.
 */
function emptyIndexies(board) {
    return board.filter(item => item != "o" && item != "x");
}

/** 
 * Winning combinations using the board indexies
 */
function winning(board, player){
    if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
    ) {
        return true;
    } else {
        return false;
    }
}

/** 
 * Minimax algorithm
 * @param {array}   board - Game board represented as an array.
 * @param {string}  player - The players mark
 */
export function minimax(newBoard, player) {
    //available spots
    var availSpots = emptyIndexies(newBoard);
    // checks for the terminal states such as win, lose, and tie 
    // and returning a value accordingly
    if (winning(newBoard, huPlayer)){
        return {score: -10};
    }
    else if (winning(newBoard, aiPlayer)){
        return {score: 10};
    }
    else if (availSpots.length === 0){
        return {score: 0};
    }
    // an array to collect all the objects
    var moves = [];
    // loop through available spots
    for (var i = 0; i < availSpots.length; i++) {
        //create an object for each and store the index of that spot 
        var move = {};
            move.index = newBoard[availSpots[i]];
        // set the empty spot to the current player
        newBoard[availSpots[i]] = player;
        /*collect the score resulted from calling minimax on the opponent of the current player*/
        if (player == aiPlayer){
            var result = minimax(newBoard, huPlayer);
            move.score = result.score;
        }
        else{
            var result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }
        // reset the spot to empty
        newBoard[availSpots[i]] = move.index;
        // push the object to the array
        moves.push(move);
    }
    // if it is the computer's turn loop over the moves and choose the move with the highest score
    var bestMove;
    if(player === aiPlayer) {
        var bestScore = -10000;
        for(var i = 0; i < moves.length; i++){
            if(moves[i].score > bestScore){
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        // else loop over the moves and choose the move with the lowest score
        var bestScore = 10000;
        for(var i = 0; i < moves.length; i++){
            if(moves[i].score < bestScore){
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    // return the chosen move (object) from the moves array
    return moves[bestMove];
}













































































































































































// import { 
//     player1, 
//     player2, 
// } from "./players.js";

// import { board } from "./board.js";

// // Check all the values are equal
// const equals3 = (a, b, c) => {
//     return a === b && b === c && a !== "";
// };

// export const scores = {
//     x:  10,
//     o: -10,
//     tie: 0,
// };

// // Bot move
// export const bestMove = () => {
//     // AI to make its turn
//     let move;

//     let bestScore = -Infinity;
    
//     for (let i = 0; i < board.length; i++) {
//         // Is the spot available?
//         if (board[i] === null) {
//             board[i] = player2.mark;
//             let score = minimax(board, 0, false);
//             board[i] = null;
//             if (score > bestScore) {
//                 bestScore = score;
//                 move = i;
//             }
//         }
//     }
//     return move;
// };

// // Calculate where next move should take place
// const minimax = (board, depth, isMaximizing) => {
//     // Check the winner and return the score
//     let result = checkWinner();
//     if (result !== null) {
//         return scores[result];
//     }
//     if (isMaximizing) {
//         let bestScore = -Infinity;
//         for (let i = 0; i < board.length; i++) {
//             // Is the spot available?
//             if (board[i] === null) {
//                 board[i] = player2.mark;
//                 let score = minimax(board, depth + 1, false);
//                 board[i] = null;
//                 bestScore = Math.max(score, bestScore);
//             }
//         }
//         return bestScore;
//     } else {
//         let bestScore = Infinity;
//         for (let i = 0; i < board.length; i++) {
//             // Is the spot available?
//             if (board[i] === null) {
//                 board[i] = player1.mark;
//                 let score = minimax(board, depth + 1, true);
//                 board[i] = null;
//                 bestScore = Math.min(score, bestScore);
//             }
//         }
//         return bestScore;
//     }
// };



// // Check match winner
// const checkWinner = () => {
// 	let winner = null;

// 	// Horizontal
//     if (equals3(board[0], board[1], board[2])) {
//         winner  = board[0];
//     } else if (equals3(board[3], board[4], board[5])) {
//         winner  = board[3];
//     } else if (equals3(board[6], board[7], board[8])) {
//         winner  = board[6];
//     }

// 	// Vertical
// 	if (equals3(board[0], board[3], board[6])) {
//         winner  = board[0];
//     } else if (equals3(board[1], board[4], board[7])) {
//         winner  = board[1];
//     } else if (equals3(board[2], board[5], board[8])) {
//         winner  = board[2];
//     }

// 	// Diagonal
//     if (equals3(board[0], board[4], board[8])) {
//         winner = board[0];
//     }
//     if (equals3(board[2], board[4], board[6])) {
//         winner = board[2];
//     }

// 	// Are still moves left
//     let openSpots = 0;
//     for (let i = 0; i < board.length; i++) {
//         if (board[i] === null) {
//             openSpots++;
//         }
//     }

// 	// Return winner
// 	if (winner == null && openSpots == 0) {
// 		return "tie";
// 	} else {
// 		return winner;
// 	}
// };



































































































