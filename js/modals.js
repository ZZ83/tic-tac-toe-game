import { 
    toggleMenuScreen, 
    toggleGameScreen, 
    toggleOverlayScreen 
} from "./toggleScreens.js";
 
// Create the shared modal elements  
const modalDiv    = document.querySelector(".modal");
const leftButton  = document.createElement("button");
const rightButton = document.createElement("button");

// Create alpha modal elements
const alphaModal               = document.createElement("div");
const alphaModalSubHeader      = document.createElement("h4");
const alphaModalInner          = document.createElement("div");
const alphaModalText           = document.createElement("h1");
const alphaModalButtonsWrapper = document.createElement("div");

// Create beta modal elements
const betaModal      = document.createElement("div");
const betaModalText  = document.createElement("h1");
const betaModalInner = document.createElement("div");

export function renderAplhaModal(svg, message) {
    const icon = svg();

    // Add the needed classes,
    alphaModal.          classList.add("alpha-modal");
    alphaModalSubHeader. classList.add("alpha-modal__sub-header");
    alphaModalInner.     classList.add("alpha-modal__inner-wrapper");
    alphaModalText.      classList.add("alpha-modal__text");
    leftButton.          classList.add("btn-silver", "btn-left");
    rightButton.         classList.add("btn-yellow", "btn-right");

    // Set the main headers color
    alphaModalText.style.color    = icon.getAttribute("fill");

    // Set the needed innerHTML,
    alphaModalSubHeader.innerHTML = message;
    alphaModalText.innerHTML      = "takes the round";
    leftButton.innerHTML          = "quit";
    rightButton.innerHTML         = "next round";
    
    // Append elements together
    alphaModalInner.          append(icon);
    alphaModalInner.          append(alphaModalText);
    alphaModalButtonsWrapper. append(leftButton, rightButton);
    alphaModal.               append(alphaModalSubHeader, alphaModalInner, alphaModalButtonsWrapper);

    // Add click event to the left and right buttons
    alphaModal.addEventListener("click", function listener(event) {
        if (event.target.classList.contains("btn-left")) {
            toggleOverlayScreen();
            icon.remove()
            event.target.parentElement.parentElement.remove();
            event.target.parentElement.parentElement.removeEventListener("click", listener);
        }
        if (event.target.classList.contains("btn-right")) {
            toggleOverlayScreen();
            toggleGameScreen();
            toggleMenuScreen();
            icon.remove()
            event.target.parentElement.parentElement.remove();
            event.target.parentElement.parentElement.removeEventListener("click", listener);
        }
    });
    // Target modal div and insert betaModal component
    modalDiv.append(alphaModal);
}

export function renderBetaModal(message, leftButtonText, rightButtonText) {
    // Add the needed classes,
    betaModal.      classList.add("beta-modal");
    betaModalText.  classList.add("beta-modal__text");
    betaModalInner. classList.add("beta-modal__inner");
    leftButton.     classList.add("btn-silver", "btn-left");
    rightButton.    classList.add("btn-yellow", "btn-right");
    
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
    // Target modal div and insert betaModal component
    modalDiv.append(betaModal);
}
    






