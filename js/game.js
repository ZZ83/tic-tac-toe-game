import { 
    mark,
    currentTurnIcons,
    outlineIcons,
} from "./icons.js";

import { boardItems }      from "./elements.js";

import { highlightWinningBoxes } from "./winner.js";

function setDisplay(elements, value) {
    elements.forEach(element => {
        element.style.display = value;
    });
}

let board = [
    null, null, null,
    null, null, null,
    null, null, null,
];

export function resetBoard() {
    board = [null, null, null,null, null, null,null, null, null];
    boardItems.forEach( (element) => {
        element.innerHTML = outlineIcons.x + outlineIcons.o;
        element.style.pointerEvents = "initial";
    });
}

export const game = {
    ties:         0,
    player1Score: 0,
    player2Score: 0,
    mark:     "x",
    whosTurn: "player2",
    isComputer: false,
    tieScoreElement: document.querySelector(".game-stats__ties").lastElementChild,
    switchMarks() {
        this.mark === "x" ? this.mark = "o" : this.mark = "x";
        document.querySelector(".current-turn").innerHTML = (currentTurnIcons[this.mark]) + "<span>turn</span>";
    },
    resetScores() {
        this.ties = 0;
        this.tieScoreElement.innerHTML = this.ties;
    },
    setTiesScore() {
        this.ties ++;
        this.tieScoreElement.innerHTML = this.ties;
    },
    setOutlineColor(color) {
        document.querySelector(':root').style.setProperty("--hover-outline", color);
    },
    outlineCurrentPlayersMark() {
        setDisplay(document.querySelectorAll(`.game-board__outline-${this.mark}`), "initial");
        this.setOutlineColor(mark[this.mark].color);
    },
    placeMarkOnBoard(element, index) {
        board.splice(index, 1, this.mark);
        
        element.style.pointerEvents = "none";
        element.innerHTML = mark[this.mark].svg;
        element.firstElementChild.style.display = "initial";
        setDisplay(document.querySelectorAll(`.game-board__outline-${this.mark}`), "none");
        this.switchMarks();
        setDisplay(document.querySelectorAll(`.game-board__outline-${this.mark}`), "initial");
        this.setOutlineColor(mark[this.mark].color);

        highlightWinningBoxes(board);
    }
}





