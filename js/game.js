import { 
    mark,
    modalIcons,
    currentTurnIcons,
    outlineIcons,
} from "./icons.js";

import { toggleOverlayModal } from "./toggle.js";

import { boardItems }      from "./elements.js";

import { highlightWinningBoxes } from "./winner.js";

import {renderAplhaModal } from "./modals.js";

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
    player1: "o",
    player2: "x",
    mark:     "x",
    whosTurn: "player2",
    isComputer: false,
    tieScoreElement:     document.querySelector(".game-stats__ties").lastElementChild,
    player1ScoreElement: document.querySelector(".game-stats__p1").lastElementChild,
    player2ScoreElement: document.querySelector(".game-stats__p2").lastElementChild,
    displayWinner() {
        if(this.player1 === this.mark) {
            this.player1Score ++;
            this.player1ScoreElement.innerHTML = this.player1Score;
            toggleOverlayModal();
            renderAplhaModal(modalIcons[this.player1], "Player 1 wins!");
        } else {
            this.player2Score ++;
            this.player2ScoreElement.innerHTML = this.player2Score;
            toggleOverlayModal();
            renderAplhaModal(modalIcons[this.player2], "Player 2 wins!");
        }
    },
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
        highlightWinningBoxes(board);
        this.switchMarks();
        setDisplay(document.querySelectorAll(`.game-board__outline-${this.mark}`), "initial");
        this.setOutlineColor(mark[this.mark].color);

        
    }
}





