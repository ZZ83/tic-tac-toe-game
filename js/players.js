export const player1 = {
    name: "p1",
    mark: "o",
    score: 0,
}

export const player2 = {
    name: "p2",
    mark: "x",
    score: 0,
}


// Set the score headers with correct players
function setGreenScore(score) {
    const greenScore  = document.querySelector(".game-stats__p1").lastElementChild;
    greenScore.innerHTML = score;
}
function setYellowScore(score) {
    const yellowScore = document.querySelector(".game-stats__p2").lastElementChild;
    yellowScore.innerHTML = score;
}

export function setScoreHeaders(blueHeader, yellowHeader) {
    const blue   = document.querySelector(".game-stats__blue").firstElementChild;
    const yellow = document.querySelector(".game-stats__yellow").firstElementChild;
    blue.  innerHTML = `X (${blueHeader})`;
    yellow.innerHTML = `O (${yellowHeader})`;
}