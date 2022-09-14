// The game board
const gameBoard = [
    1, 2, 3, 
    4, 5, 6, 
    7, 8, 9
];

let numberOfTies = 0;

export const player1 = {
    score:         0,
    mark:          "o",
    isGoingFirst:  false,
    isCurrentTurn: false,
}

export const player2 = {
    score:         0,
    mark:          "x",
    isGoingFirst:  true,
    isCurrentTurn: true,
    isComputer:    false,
}



