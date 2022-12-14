export const outlineIcons  = {
    x: `<svg class="game-board__outline-x" width="50%" height="50%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#1F3641"  stroke-width="2" d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z"/></svg>`,
    o: `<svg class="game-board__outline-o" width="50%" height="50%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><path fill="#1F3641"  stroke-width="2" d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>`
}

//These icons might be the same as the modal icons
export const currentTurnIcons = {
    x: `<svg class="current-turn__mark" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.68 1.635a3 3 0 0 0-4.242 0L16 9.073 8.562 1.635a3 3 0 0 0-4.243 0L1.634 4.319a3 3 0 0 0 0 4.243L9.073 16l-7.439 7.44a3 3 0 0 0 0 4.242l2.685 2.685a3 3 0 0 0 4.243 0L16 22.927l7.438 7.439a3 3 0 0 0 4.243 0l2.685-2.685a3 3 0 0 0 0-4.242L22.927 16l7.439-7.438a3 3 0 0 0 0-4.243L27.68 1.635Z"/></svg>`,
    o: `<svg class="current-turn__mark" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.97 15.87C31.97 7.107 24.865 0 16.1 0 7.335 0 .229 7.106.229 15.87c0 8.766 7.106 15.871 15.87 15.871 8.766 0 15.871-7.105 15.871-15.87Zm-22.336 0a6.466 6.466 0 1 1 12.931 0 6.466 6.466 0 0 1-12.931 0Z"/></svg>`,
}

//These icons might be the same as the current turn icons
export const modalIcons = {
	"o": {
		fill: "#F2B137",
		svg: `<svg class="alpha-modal__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.97 15.87C31.97 7.107 24.865 0 16.1 0 7.335 0 .229 7.106.229 15.87c0 8.766 7.106 15.871 15.87 15.871 8.766 0 15.871-7.105 15.871-15.87Zm-22.336 0a6.466 6.466 0 1 1 12.931 0 6.466 6.466 0 0 1-12.931 0Z" fill="#F2B137"/></svg>`,
	},
	"x": {
		fill: "#31C3BD",
		svg: '<svg class="alpha-modal__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.68 1.635a3 3 0 0 0-4.242 0L16 9.073 8.562 1.635a3 3 0 0 0-4.243 0L1.634 4.319a3 3 0 0 0 0 4.243L9.073 16l-7.439 7.44a3 3 0 0 0 0 4.242l2.685 2.685a3 3 0 0 0 4.243 0L16 22.927l7.438 7.439a3 3 0 0 0 4.243 0l2.685-2.685a3 3 0 0 0 0-4.242L22.927 16l7.439-7.438a3 3 0 0 0 0-4.243L27.68 1.635Z" fill="#31C3BD"/></svg>',
	},
}

export const mark = {
    "x": {
        id: 0,
        outline: 2,
		color: "#31C3BD",
		svg: '<svg class="game-board__x" width="50%" height="50%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#31C3BD" fill-rule="evenodd" stroke="transparent" clip-rule="evenodd" d="M27.68 1.635a3 3 0 0 0-4.242 0L16 9.073 8.562 1.635a3 3 0 0 0-4.243 0L1.634 4.319a3 3 0 0 0 0 4.243L9.073 16l-7.439 7.44a3 3 0 0 0 0 4.242l2.685 2.685a3 3 0 0 0 4.243 0L16 22.927l7.438 7.439a3 3 0 0 0 4.243 0l2.685-2.685a3 3 0 0 0 0-4.242L22.927 16l7.439-7.438a3 3 0 0 0 0-4.243L27.68 1.635Z"/></svg>',
	},
	"o": {
        id: 1,
        outline: 3,
		color: "#F2B137",
		svg: `<svg class="game-board__o" width="50%" height="50%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#F2B137" fill-rule="evenodd" stroke="transparent" clip-rule="evenodd" d="M31.97 15.87C31.97 7.107 24.865 0 16.1 0 7.335 0 .229 7.106.229 15.87c0 8.766 7.106 15.871 15.87 15.871 8.766 0 15.871-7.105 15.871-15.87Zm-22.336 0a6.466 6.466 0 1 1 12.931 0 6.466 6.466 0 0 1-12.931 0Z"/></svg>`,
	},
}




