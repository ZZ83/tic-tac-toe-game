import { toggleMenuScreen, toggleGameScreen, toggleOverlayScreen } from "./toggleScreens.js";
   
// Create the shared modal elements  
const modalDiv    = document.querySelector(".modal");
const leftButton  = document.createElement("button");
const rightButton = document.createElement("button");

// Create beta modal elements
const betaModal      = document.createElement("div");
const betaModalText  = document.createElement("h1");
const betaModalInner = document.createElement("div");

export function renderBetaModal(message, leftButtonText, rightButtonText) {
    // Add the needed classes,
    betaModal.classList.add("beta-modal");
    betaModalText.classList.add("beta-modal__text");
    betaModalInner.classList.add("beta-modal__inner");
    leftButton.classList.add("btn-silver", "btn-left");
    rightButton.classList.add("btn-yellow", "btn-right");
    
    // Set the needed innerHTML,
    betaModalText.innerHTML = message;
    leftButton.innerHTML    = leftButtonText;
    rightButton.innerHTML   = rightButtonText;
    
    // Append elements together
    betaModalInner.append(leftButton, rightButton);
    betaModal.append(betaModalText, betaModalInner);
    
    // Add click event to the left and right buttons
    betaModalInner.addEventListener("click", function listener(event) {
        if (event.target.classList.contains("btn-left")) {
            toggleOverlayScreen();
            event.target.parentElement.parentElement.remove();
            event.target.parentElement.removeEventListener("click", listener);
        }
        if (event.target.classList.contains("btn-right")) {
            toggleOverlayScreen();
            toggleGameScreen();
            toggleMenuScreen();
            event.target.parentElement.parentElement.remove();
            event.target.parentElement.removeEventListener("click", listener);
        }
    });
    // Target modal div and insert betaModal HTML
    modalDiv.append(betaModal);
}
    






