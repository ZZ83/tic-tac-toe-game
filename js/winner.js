import { boardItems }          from "./elements.js";
import { outlineIcons }        from "./icons.js";
import { toggleOverlayModal }  from "./toggle.js";
import { renderTiedBetaModal } from "./modals.js";


function hightlight(list, mark) {
    list.forEach(element => {
        element.innerHTML = outlineIcons[mark];
        element.classList.add(`winner-${mark}`);
        element.firstElementChild.style.display = "initial";
    }); 
}

function allAreTruthy(arr) {
    return arr.every(element => element);
}

export function highlightWinningBoxes(board) {
    const row1   = [...boardItems].splice(0, 3);
    const row2   = [...boardItems].splice(3, 3);
    const row3   = [...boardItems].splice(6, 9);
    const col1   = []; col1  .push(boardItems[0], boardItems[3], boardItems[6]);
    const col2   = []; col2  .push(boardItems[1], boardItems[4], boardItems[7]);
    const col3   = []; col3  .push(boardItems[2], boardItems[5], boardItems[8]);
    const slant1 = []; slant1.push(boardItems[0], boardItems[4], boardItems[8]);
    const slant2 = []; slant2.push(boardItems[2], boardItems[4], boardItems[6]);
    switch(true) {
        // Hightlight winning X boxes
        case board[0] === "x" && board[1] === "x" && board[2] === "x":
            hightlight(row1, "x");
            break;
        case board[3] === "x" && board[4] === "x" && board[5] === "x":
            hightlight(row2, "x");
            break;
        case board[6] === "x" && board[7] === "x" && board[8] === "x":
            hightlight(row3, "x");
            break;
        case board[0] === "x" && board[3] === "x" && board[6] === "x":
            hightlight(col1, "x");
            break;
        case board[1] === "x" && board[4] === "x" && board[7] === "x":
            hightlight(col2, "x");
            break;
        case board[2] === "x" && board[5] === "x" && board[8] === "x":
            hightlight(col3, "x");
            break;
        case board[0] === "x" && board[4] === "x" && board[8] === "x":
            hightlight(slant1, "x");
            break;
        case board[2] === "x" && board[4] === "x" && board[6] === "x":
            hightlight(slant2, "x");
            break;
        // Hightlight winning O boxes
        case board[0] === "o" && board[1] === "o" && board[2] === "o":
            hightlight(row1, "o");
            break;
        case board[3] === "o" && board[4] === "o" && board[5] === "o":
            hightlight(row2, "o");
            break;
        case board[6] === "o" && board[7] === "o" && board[8] === "o":
            hightlight(row3, "o");
            break;
        case board[0] === "o" && board[3] === "o" && board[6] === "o":
            hightlight(col1, "o");
            break;
        case board[1] === "o" && board[4] === "o" && board[7] === "o":
            hightlight(col2, "o");
            break;
        case board[2] === "o" && board[5] === "o" && board[8] === "o":
            hightlight(col3, "o");
            break;
        case board[0] === "o" && board[4] === "o" && board[8] === "o":
            hightlight(slant1, "o");
            break;
        case board[2] === "o" && board[4] === "o" && board[6] === "o":
            hightlight(slant2, "o");
            break;
        case allAreTruthy(board):
            toggleOverlayModal();
            renderTiedBetaModal();
            break;
    }
}

