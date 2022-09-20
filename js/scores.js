const oScore   = document.querySelector(".game-stats__o").lastElementChild;
const xScore   = document.querySelector(".game-stats__x").lastElementChild;
const tieScore = document.querySelector(".game-stats__ties").lastElementChild;

export function resetScores() {
    xScore.textContent   = "0";
    oScore.textContent   = "0";
    tieScore.textContent = "0";
}

export function addToTieScore() {
    let score = parseInt(tieScore.textContent);
    score ++;
    tieScore.textContent = score;
}

export function addToXsScore() {
    let score = parseInt(xScore.textContent);
    score ++;
    xScore.textContent = score;
}

export function addToOsScore() {
    let score = parseInt(oScore.textContent);
    score ++;
    oScore.textContent = score;
}

export function setScoreHeaders(xHeader, oHeader) {
    const x = document.querySelector(".game-stats__x").firstElementChild;
    const o = document.querySelector(".game-stats__o").firstElementChild;
    x.textContent = `X (${xHeader})`;
    o.textContent = `O (${oHeader})`;
}