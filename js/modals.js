import { toggleMenuScreen, toggleGameScreen, toggleOverlayScreen } from "./toggleScreens.js";

export const modal = {
    alphaModal: {},
    betaModal: {
        /**
         * Create beta modal elements,
         */
        betaModal:      document.createElement("div"),
        betaModalText:  document.createElement("h1"),
        betaModalInner: document.createElement("div"),
        leftButton:     document.createElement("button"),
        rightButton:    document.createElement("button"),
        render() {
            /**
             * Add the needed classes,
             */
            this.betaModal.classList.add("beta-modal");
            this.betaModalText.classList.add("beta-modal__text");
            this.betaModalInner.classList.add("beta-modal__inner");
            this.leftButton.classList.add("btn-silver", "btn-left");
            this.rightButton.classList.add("btn-yellow", "btn-right");
            /**
             * Set the needed innerHTML,
             */
            this.betaModalText.innerHTML = "restart game?";
            this.leftButton.innerHTML    = "no, cancel";
            this.rightButton.innerHTML   = "yes, restart";
            /**
             * Append elements together,
             */
            this.betaModalInner.append(this.leftButton, this.rightButton);
            this.betaModal.append(this.betaModalText, this.betaModalInner);
            /**
             * Listens for click on `.betaModalText`,
             */
            this.betaModalInner.addEventListener("click", function listener(event) {
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

            document.querySelector(".modal").append(this.betaModal);
        },
    },
};
