import { boardItems }   from "./elements.js";
import { outlineIcons } from "./icons.js";

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