import { 
    toggleMenuScreen, 
    toggleGameScreen, 
    toggleOverlayScreen 
} from "./toggleScreens.js";
 
const modal = document.querySelector(".modal");

export const icons = {
	svgO: {
		fill: "#F2B137",
		svg: `<svg class="alpha-modal__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.97 15.87C31.97 7.107 24.865 0 16.1 0 7.335 0 .229 7.106.229 15.87c0 8.766 7.106 15.871 15.87 15.871 8.766 0 15.871-7.105 15.871-15.87Zm-22.336 0a6.466 6.466 0 1 1 12.931 0 6.466 6.466 0 0 1-12.931 0Z" fill="#F2B137"/></svg>`,
	},
	svgX: {
		fill: "#31C3BD",
		svg: '<svg class="alpha-modal__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.68 1.635a3 3 0 0 0-4.242 0L16 9.073 8.562 1.635a3 3 0 0 0-4.243 0L1.634 4.319a3 3 0 0 0 0 4.243L9.073 16l-7.439 7.44a3 3 0 0 0 0 4.242l2.685 2.685a3 3 0 0 0 4.243 0L16 22.927l7.438 7.439a3 3 0 0 0 4.243 0l2.685-2.685a3 3 0 0 0 0-4.242L22.927 16l7.439-7.438a3 3 0 0 0 0-4.243L27.68 1.635Z" fill="#31C3BD"/></svg>',
	},
}

export function renderAplhaModal(icon, message) {
    const alphaModal = `
        <div class="alpha-modal">
            <h4 class="alpha-modal__sub-header">${message}</h4>
            <div class="alpha-modal__inner-wrapper">
                ${icon.svg}
                <h1 style="color: ${icon.fill};">Takes the round</h1>
            </div>
            <div class="test">
                <button class="btn-silver btn-left">Quit</button>
                <button class="btn-yellow btn-right">Next Round</button>
            </div>
        </div>
    `;
    modal.innerHTML = alphaModal;
    document.querySelector(".test").addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-left")) {
            toggleOverlayScreen();
            toggleGameScreen();
            toggleMenuScreen();
        }  
        if (event.target.classList.contains("btn-right")) {
            toggleOverlayScreen();
        } 
    });
}

export function renderBetaModal(message, leftButtonText, rightButtonText) {
    const betaModal = `
        <div class="beta-modal">
        <h1 class="beta-modal__text">${message}</h1>
        <div class="test">
            <button class="btn-silver btn-left">${leftButtonText}</button>
            <button class="btn-yellow btn-right">${rightButtonText}</button>
        </div>
        </div>  
    `;
    modal.innerHTML = betaModal;
    document.querySelector(".test").addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-left"))  toggleOverlayScreen();
        if (event.target.classList.contains("btn-right")) toggleOverlayScreen();
    });
}









