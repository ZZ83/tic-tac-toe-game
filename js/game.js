import { 
    mark,
    modalIcons,
    currentTurnIcons,
} from "./icons.js";

import { board }                 from "./board.js";
import { renderAplhaModal }      from "./modals.js";
import { toggleOverlayModal }    from "./toggle.js";
import { highlightWinningBoxes } from "./winner.js";

/** 
 * Sets the current players turn mark hover outline
 * @param  {string}  string - Which outline mark to display
 * @param  {string}  string - The display value
 */
function setDisplay(mark, value) {
    const outline = document.querySelectorAll(`.game-board__outline-${mark}`);
    outline.forEach( element => {
        element.style.display = value;
    });
}

export function setCurrentTurnMark(mark) {
    document.querySelector(".current-turn").innerHTML = mark + "<span>turn</span>";
}

export const game = {
    ties:       0,
    isComputer: false,
    mark: "x",
    whosTurn: "player2",
    whoIsGoingFirst: "x",
    tieScoreElement: document.querySelector(".game-stats__ties").lastElementChild,

    switchWhosGoingFirst() {
        this.whoIsGoingFirst === "x" ? this.whoIsGoingFirst = "o" : this.whoIsGoingFirst = "x";
        this.mark = this.whoIsGoingFirst;
        setCurrentTurnMark(currentTurnIcons[this.mark]);
    },

    switchMarks() {
        this.mark === "x" ? this.mark = "o" : this.mark = "x";
        setCurrentTurnMark(currentTurnIcons[this.mark]);
    },

    resetScores() {
        this.ties    = 0;
        this.player1 = 0;
        this.player2 = 0;
        this.tieScoreElement.innerHTML     = this.ties;
        this.player1ScoreElement.innerHTML = this.player1;
        this.player2ScoreElement.innerHTML = this.player2;
    },

    setTiesScore() {
        this.ties ++;
        this.tieScoreElement.innerHTML = this.ties;
    },

    setOutlineColor(color) {
        document.querySelector(':root').style.setProperty("--hover-outline", color);
    },

    outlineCurrentPlayersMark() {
        setDisplay(this.mark, "initial");
        this.setOutlineColor(mark[this.mark].color);
    },

    placeMarkOnBoard(element, index) {
        // Inserts the currents players mark into the board array
        board.splice(index, 1, this.mark);
        // Disables the div of the item just cliked on
        element.style.pointerEvents = "none";
        // Places the current players mark on the tic tac toe board
        element.innerHTML = mark[this.mark].svg;
        setDisplay(this.mark, "none");
        highlightWinningBoxes(board);
        this.switchMarks();
        setDisplay(this.mark, "initial");
        this.setOutlineColor(mark[this.mark].color);
    }
}





