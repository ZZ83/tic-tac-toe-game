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
    
    const betaModal = `
        <div class="beta-modal">
        <h1 class="beta-modal__text">${message}</h1>
        <div class="test">
            <button class="btn-silver btn-left">${leftButtonText}</button>
            <button class="btn-yellow btn-right">${rightButtonText}</button>
        </div>
        </div>  
    `
    modalDiv.innerHTML = betaModal;

    document.querySelector(".test").addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-left")) {
            toggleOverlayScreen();
        }
        if (event.target.classList.contains("btn-right")) {
            toggleOverlayScreen();
            toggleGameScreen();
            toggleMenuScreen();
        }
    });
}









