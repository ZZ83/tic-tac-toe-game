export const boardItems = document.querySelectorAll(".game-board__item");

export function clearWinnerBoxes() {
    boardItems.forEach( (element) => {
        element.classList.remove("winner-x");
        element.classList.remove("winner-o");
    });
}