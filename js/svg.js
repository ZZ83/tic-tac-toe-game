export function withXIcon() {
	const iconSvg  = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	iconSvg.setAttribute('fill', '#31C3BD');
	iconSvg.setAttribute('viewBox', '0 0 32 32');
	iconSvg.classList.add('alpha-modal__icon');
	iconPath.setAttribute('d', 'M27.68 1.635a3 3 0 0 0-4.242 0L16 9.073 8.562 1.635a3 3 0 0 0-4.243 0L1.634 4.319a3 3 0 0 0 0 4.243L9.073 16l-7.439 7.44a3 3 0 0 0 0 4.242l2.685 2.685a3 3 0 0 0 4.243 0L16 22.927l7.438 7.439a3 3 0 0 0 4.243 0l2.685-2.685a3 3 0 0 0 0-4.242L22.927 16l7.439-7.438a3 3 0 0 0 0-4.243L27.68 1.635Z');
	iconSvg.appendChild(iconPath);
	return iconSvg;
}

export function withOIcon() {
	const iconSvg  = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	iconSvg.setAttribute('fill', '#F2B137');
	iconSvg.setAttribute('viewBox', '0 0 32 32');
	iconSvg.classList.add('alpha-modal__icon');
	iconPath.setAttribute('d', 'M31.97 15.87C31.97 7.107 24.865 0 16.1 0 7.335 0 .229 7.106.229 15.87c0 8.766 7.106 15.871 15.87 15.871 8.766 0 15.871-7.105 15.871-15.87Zm-22.336 0a6.466 6.466 0 1 1 12.931 0 6.466 6.466 0 0 1-12.931 0Z');
	iconSvg.appendChild(iconPath);
	return iconSvg;
}

