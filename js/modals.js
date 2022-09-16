import { 
    toggleMenuScreen, 
    toggleGameScreen, 
    toggleOverlayModal
} from "./toggle.js";
 
const modal = document.querySelector(".modal");

// Creates the alphaModal component
export function renderAplhaModal(icon, message) {
    const alphaModal = `
        <div class="alpha-modal">
            <h4 class="alpha-modal__sub-header">${message}</h4>
            <div class="alpha-modal__inner-wrapper">
                ${icon.svg}
                <h1 style="color: ${icon.fill};">Takes the round</h1>
            </div>
            <div class="button-wrapper">
                <button class="btn-silver btn-left">Quit</button>
                <button class="btn-yellow btn-right">Next Round</button>
            </div>
        </div>
    `;
    modal.innerHTML = alphaModal;
    // Listens for clicks on both left and right modal buttons
    document.querySelector(".button-wrapper").addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-left")) {
            toggleOverlayModal();
            toggleGameScreen();
            toggleMenuScreen();
        }  
        if (event.target.classList.contains("btn-right")) {
            toggleOverlayModal();
        } 
    });
}

// Creates the betaModal component
export function renderBetaModal(message, leftButtonText, rightButtonText) {
    const betaModal = `
        <div class="beta-modal">
        <h1 class="beta-modal__text">${message}</h1>
        <div class="button-wrapper">
            <button class="btn-silver btn-left">${leftButtonText}</button>
            <button class="btn-yellow btn-right">${rightButtonText}</button>
        </div>
        </div>  
    `;
    modal.innerHTML = betaModal;
    // Listens for clicks on both left and right modal buttons
    document.querySelector(".button-wrapper").addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-left")) {
            toggleOverlayModal();
        } 
        if (event.target.classList.contains("btn-right")) {
            toggleOverlayModal();
        }
    });
}









