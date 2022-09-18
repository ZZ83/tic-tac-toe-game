const game    = document.querySelector(".game");
const menu    = document.querySelector(".new-game");
const overlay = document.querySelector(".overlay");

/** 
 * Shows or hides either the game, menu, or overlay screen/modal.
 */
export function toggleMenuScreen() {
    menu.style.display === "none" ? (menu.style.display = "block") : (menu.style.display = "none");
}

export function toggleGameScreen() {
    game.style.display === "none" ? (game.style.display = "block") : (game.style.display = "none");
}

export function toggleOverlayModal() {
    overlay.style.display === "none" ? (overlay.style.display = "block") : (overlay.style.display = "none");
}
