var canvas = document.querySelector('#canv');
var ctx = canvas.getContext('2d');

var xCoord = document.getElementById('xCoord');
var yCoord = document.getElementById('yCoord');

var system = {
	currentTool: '',
	currentColor: document.querySelector('#color').value,
	brushSize: document.querySelector('#sizeSelect').value
};

var switchTool = function (el) {
	if (el.id == 'brush') {
		return 'brush';
	} else if (el.id == 'clear') {
		return 'clear';
	}
};

function onmousemove(evt) {
	if (evt.target.id == 'canv') {
		let x = evt.offsetX;
		let y = evt.offsetY;
		xCoord.innerText = x;
		yCoord.innerText = y;

		if (evt.buttons == 1) {
			if (system.currentTool == 'brush') {
				ctx.fillStyle = system.currentColor;
				ctx.fillRect(x, y, system.brushSize, system.brushSize);
			} else if (system.currentTool == 'clear') {
				ctx.clearRect(xCoord.innerText, yCoord.innerText, system.brushSize, system.brushSize);
			}
		}
	}
}

function onclick(evt) {
	if (evt.target.classList.contains('toolButton')) {
		system.currentTool = switchTool(evt.target);
	}
};

function onchange(evt) {
	console.log(evt.target.value);
	if (evt.target.id == 'sizeSelect') {
		system.brushSize = evt.target.value;
	} else if (evt.target.id == 'color') {
		system.currentColor = evt.target.value;
	}
}

window.addEventListener('mousemove', onmousemove);
window.addEventListener('click', onclick);
window.addEventListener('change', onchange);

function setDateTime() {
	document.querySelector('#time').innerText = new Date();
}

setDateTime();
window.setInterval(setDateTime, 1000);
