import { outlineIcons } from "./icons.js";

export const boardItems = document.querySelectorAll(".game-board__item");

export let board = [
    null, null, null,
    null, null, "o",
    null, null, null,
];

export function resetBoard() {
    board = [null, null, null,null, null, null,null, null, null];
    boardItems.forEach( (element) => {
        element.innerHTML = outlineIcons.x + outlineIcons.o;
        element.style.pointerEvents = "initial";
    });
}

export function clearWinnerBoxes() {
    boardItems.forEach( (element) => {
        element.classList.remove("winner-x");
        element.classList.remove("winner-o");
    });
}
































































































































// const bestMove = () => {
//     // AI to make its turn
//     let move;
//     let bestScore = -Infinity;
//     for (let i = 0; i < board.length; i++) { 
//         if (board[i] === null) {
//             board[i] = "x";
//             let score = minimax(board, 0, false);
//             board[i] = null;
//             if (score > bestScore) {
//                 bestScore = score;
//                 move = board[i];
//                 // console.log(board.indexOf(board[i]));
//             }
//         }
//     }
//     return move;
// };

// //Calculate where next move should take place
// const minimax = (board, depth, isMaximizing) => {
//     let result = checkWinner();
//     if (result !== null) {
//         return scores[result];
//     }
//     if (isMaximizing) {
//         let bestScore = -Infinity;
//         for (let i = 0; i < board.length; i++) {
//             if (board[i] === null) {
//                 board[i] = "x";
//                 let score = minimax(board, depth + 1, false);
//                 board[i] = null;
//                 bestScore = Math.max(score, bestScore);
//             }
//         }
//         return bestScore;
//     } else {
//         let bestScore = Infinity;
//         for (let i = 0; i < board.length; i++) {
//             if (board[i] === null) {
//                 board[i] = "o";
//                 let score = minimax(board, depth + 1, true);
//                 board[i] = null;
//                 bestScore = Math.min(score, bestScore);
//             }
//         }
//         return bestScore;
//     }
// };

// //Check all the values are equal
// const equals3 = (a, b, c) => {
//     return a == b && b == c && a != "";
// };

// const scores = {
//     X: 10,
//     O: -10,
//     tie: 0,
// };

// //Check match winner
// const checkWinner = () => {
//     let winner = null;
  
//     for (let i = 0; i < 3; i++) {
//         if (equals3(board[i][0], board[i][1], board[i][2])) {
//             winner = board[i][0];
//         }
//     }
    
//       // Vertical
//     for (let i = 0; i < 3; i++) {
//         if (equals3(board[0][i], board[1][i], board[2][i])) {
//             winner = board[0][i];
//         }
//     }
    
//     // Diagonal
//     if (equals3(board[0][0], board[1][1], board[2][2])) {
//         winner = board[0][0];
//     }
//     if (equals3(board[2][0], board[1][1], board[0][2])) {
//         winner = board[2][0];
//     }
  
//     //Are still moves left
//     let openSpots = 0;
//     for (let i = 0; i < 3; i++) {
//         if (board[i] === null) {
//           openSpots++;
//         }
//     }
  
//     //Return winner
//     if (winner == null && openSpots == 0) {
//       return "tie";
//     } else {
//       return winner;
//     }
//   };

// console.log( bestMove() );