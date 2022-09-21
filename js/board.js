import { outlineIcons } from "./icons.js";

export const boardItems = document.querySelectorAll(".game-board__item");

export let board = [
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

export function clearWinnerBoxes() {
    boardItems.forEach( (element) => {
        element.classList.remove("winner-x");
        element.classList.remove("winner-o");
    });
}