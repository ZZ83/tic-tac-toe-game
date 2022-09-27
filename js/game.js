import { 
    player1, 
    player2 
} from "./players.js";

import { 
    mark,
    currentTurnIcons,
} from "./icons.js";

import { 
    allAreTruthy, 
    highlightWinningBoxes 
} from "./winner.js";

import { 
    board, 
    boardItems, 
    preventButtonClicks
} from "./board.js";

import { minimax } from "./cpu.js";

/** 
 * Sets the current players turn mark hover outline
 * @param  {string}  string - Which outline mark to display
 * @param  {string}  string - The display value
 */
export function setDisplay(mark, value) {
    const outline = document.querySelectorAll(`.game-board__outline-${mark}`);
    outline.forEach( element => {
        element.style.display = value;
    });
}

/** 
 * Shows which marks turn is it
 * @param  {string}  string - Mark of the current player
 */
export function setCurrentTurnMark(mark) {
    document.querySelector(".current-turn").innerHTML = mark + "<span>turn</span>";
}

/** 
 * Resets the game to its initial state
 */
export function resetToInitialState() {
    const xMark =  document.querySelector(".mark-selection__x");
    if( xMark.classList.contains("selected") ) {
        xMark.classList.remove("selected");
        xMark.nextElementSibling.classList.add("selected");
    }
    game.mark    = "x";
    player1.mark = "o";
    player2.mark = "x";
    game.whoIsGoingFirst = "x"
    setDisplay("o", "none");
    setDisplay("x", "none");
    game.isComputer = false;
}

export const game = {
    isComputer: false,
    mark: "x",
    whoIsGoingFirst: "x",
    switchMarks() {
        this.mark === "x" ? this.mark = "o" : this.mark = "x";
        setCurrentTurnMark(currentTurnIcons[this.mark]);
    },
    switchWhosGoingFirst() {
        this.whoIsGoingFirst === "x" ? this.whoIsGoingFirst = "o" : this.whoIsGoingFirst = "x";
        this.mark = this.whoIsGoingFirst;
        setCurrentTurnMark(currentTurnIcons[this.mark]);
        setDisplay(this.mark, "initial");
        this.setOutlineColor(mark[this.mark].color);
    },
    setOutlineColor(color) {
        document.querySelector(':root').style.setProperty("--hover-outline", color);
    },
    outlineCurrentPlayersMark() {
        setDisplay(this.mark, "initial");
        this.setOutlineColor(mark[this.mark].color);
    },
    placeMarkOnBoard(element, index) {
        board.splice(index, 1, this.mark);
        element.style.pointerEvents = "none";
        element.innerHTML = mark[this.mark].svg;
        setDisplay(this.mark, "none");
        highlightWinningBoxes(board);
        this.switchMarks();
        setDisplay(this.mark, "initial");
        this.setOutlineColor(mark[this.mark].color);
        this.runAi();
        if(game.isComputer === true) {
            preventButtonClicks();
        }
    },
    /** 
     * Runs the minimax algo when playing aginst computer
     */
    runAi() {
        if(game.isComputer === true && player2.mark === "x" && game.mark === "x" || game.isComputer === true && player2.mark === "o" && game.mark === "o") {
            setTimeout(() => {
                if( !allAreTruthy(board) ) {
                    const bestMove = minimax(board, player2.mark).index;
                    boardItems[bestMove].innerHTML = mark[player2.mark].svg;
                    board.splice(bestMove, 1, player2.mark);
                    setDisplay(game.mark, "none");
                    highlightWinningBoxes(board);
                    game.switchMarks();
                    setDisplay(game.mark, "initial");
                    game.setOutlineColor(mark[game.mark].color);
                    boardItems.forEach( (element) => {
                        if (element.children.length === 2) {
                            element.style.pointerEvents = "initial";
                        }
                    });
                }
            }, 200)
        }
    }
}





