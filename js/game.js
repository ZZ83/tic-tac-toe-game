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
    mark:     "o",
    whosTurn: "player2",
    isComputer: false,
    switchMarks() {
        this.mark === "x" ? this.mark = "o" : this.mark = "x";
        const  currentTurnDiv = document.querySelector(".current-turn");
        currentTurnDiv.innerHTML = (currentTurnIcons[this.mark]) + "<span>turn</span>";
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





