import { game }                from "./game.js";
import { boardItems }          from "./elements.js";
import { outlineIcons }        from "./icons.js";
import { toggleOverlayModal }  from "./toggle.js";
import { renderTiedBetaModal } from "./modals.js";


/** 
 * Checks if the array has all truthy values, ie, if every place on the game board has a mark.
 * @param  {array}    board - Game board represented as an array.
 * @return {boolean}  Boolean value indicating whether the game has ended in a tie (true) or not (false).
 */
function allAreTruthy(board) {
    return board.every(element => element);
}

/** 
 * Highlight the winning marks.
 * @param {array}  list - List of the winning game board items.
 * @param {string} mark - The mark of the winning player.
 */
function hightlight(list, mark) {
    list.forEach(element => {
        element.innerHTML = outlineIcons[mark];
        element.classList.add(`winner-${mark}`);
        element.firstElementChild.style.display = "initial";
    }); 
}

/** 
 * Check if the game has a winner or ends in a tie.
 * @param {array} board - Game board represented as an array.
 */
export function highlightWinningBoxes(board) {
    const row1   = [...boardItems].splice(0, 3);
    const row2   = [...boardItems].splice(3, 3);
    const row3   = [...boardItems].splice(6, 9);
    const col1   = []; col1  .push(boardItems[0], boardItems[3], boardItems[6]);
    const col2   = []; col2  .push(boardItems[1], boardItems[4], boardItems[7]);
    const col3   = []; col3  .push(boardItems[2], boardItems[5], boardItems[8]);
    const slant1 = []; slant1.push(boardItems[0], boardItems[4], boardItems[8]);
    const slant2 = []; slant2.push(boardItems[2], boardItems[4], boardItems[6]);
    switch(true) {
        /** Hightlight winning rows, columns, or slants for X mark. */
        case board[0] === "x" && board[1] === "x" && board[2] === "x":
            hightlight(row1, "x");
            game.displayWinner();
            break;
        case board[3] === "x" && board[4] === "x" && board[5] === "x":
            hightlight(row2, "x");
            game.displayWinner();
            break;
        case board[6] === "x" && board[7] === "x" && board[8] === "x":
            hightlight(row3, "x");
            game.displayWinner();
            break;
        case board[0] === "x" && board[3] === "x" && board[6] === "x":
            hightlight(col1, "x");
            game.displayWinner();
            break;
        case board[1] === "x" && board[4] === "x" && board[7] === "x":
            hightlight(col2, "x");
            game.displayWinner();
            break;
        case board[2] === "x" && board[5] === "x" && board[8] === "x":
            hightlight(col3, "x");
            game.displayWinner();
            break;
        case board[0] === "x" && board[4] === "x" && board[8] === "x":
            hightlight(slant1, "x");
            game.displayWinner();
            break;
        case board[2] === "x" && board[4] === "x" && board[6] === "x":
            hightlight(slant2, "x");
            game.displayWinner();
            break;
        /** Hightlight winning rows, columns, or slants for O mark. */
        case board[0] === "o" && board[1] === "o" && board[2] === "o":
            hightlight(row1, "o");
            game.displayWinner();
            break;
        case board[3] === "o" && board[4] === "o" && board[5] === "o":
            hightlight(row2, "o");
            game.displayWinner();
            break;
        case board[6] === "o" && board[7] === "o" && board[8] === "o":
            hightlight(row3, "o");
            game.displayWinner();
            break;
        case board[0] === "o" && board[3] === "o" && board[6] === "o":
            hightlight(col1, "o");
            game.displayWinner();
            break;
        case board[1] === "o" && board[4] === "o" && board[7] === "o":
            hightlight(col2, "o");
            game.displayWinner();
            break;
        case board[2] === "o" && board[5] === "o" && board[8] === "o":
            hightlight(col3, "o");
            game.displayWinner();
            break;
        case board[0] === "o" && board[4] === "o" && board[8] === "o":
            hightlight(slant1, "o");
            game.displayWinner();
            break;
        case board[2] === "o" && board[4] === "o" && board[6] === "o":
            hightlight(slant2, "o");
            game.displayWinner();
            break;
        /** Runs if the game ends in a tie. */
        case allAreTruthy(board):
            toggleOverlayModal();
            renderTiedBetaModal();
            game.setTiesScore();
            break;
    }
}

