import { 
    toggleMenuScreen, 
    toggleGameScreen, 
    toggleOverlayScreen 
} from "./toggleScreens.js";

import { 
    renderAplhaModal, 
    renderBetaModal 
} from "./modals.js";

import { 
   withXIcon
} from "./svg.js";

document.querySelector(".mark-selection").addEventListener("click", function (event) {
    if (event.target.classList.contains("mark-selection__x")) {
        event.target.classList.toggle("selected");
        event.target.nextElementSibling.classList.toggle("selected");
    }
    if (event.target.classList.contains("mark-selection__o")) {
        event.target.classList.toggle("selected");
        event.target.previousElementSibling.classList.toggle("selected");
    }
});

document.querySelector("#new-game-buttons").addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-new-game--cpu")) {
        toggleMenuScreen();
        toggleGameScreen();
    }
    if (event.target.classList.contains("btn-new-game--player")) {
        toggleMenuScreen();
        toggleGameScreen();
    }
});

document.querySelector(".btn-restart").addEventListener("click", function () {
    toggleOverlayScreen();
    renderBetaModal("Restart game?", "no, cancel", "yes, restart");
    // renderBetaModal("restart game?", "no, cancel", "yes, restart");
});


// const modalDiv    = document.querySelector(".modal");

// const test = `
//     <div class="beta-modal">
//     <h1 class="beta-modal__text">{argument}</h1>
//     <div class="test">
//         <button class="btn-silver btn-left">{argument}</button>
//         <button class="btn-yellow btn-right">{argument}</button>
//     </div>
//     </div>  
// `

// modalDiv.innerHTML = test;


// document.querySelector(".test").addEventListener("click", function listener(event) {
//     console.log("Testing");
// });
    




