let pos = 0;
let slide = 1;

function toLeft() {
	let viewportWidth = window.innerWidth;
	let size = viewportWidth * 60 / 100;
	document.getElementById('rightB').style.visibility = "visible";
	document.getElementById('rightB').style.cursor = "pointer";
	pos += size;
	pos = Math.min(pos, 0);
	if (pos >= -6) {
		document.getElementById('leftB').style.visibility = "hidden";
		document.getElementById('leftB').style.cursor = "default";
	}
	document.getElementById('list').style.marginLeft = pos + "px";

	newSlide(slide -= 1);
};

function toRight() {
	let viewportWidth = window.innerWidth;
	let size = viewportWidth * 60 / 100;
	document.getElementById('leftB').style.visibility = "visible";
	document.getElementById('leftB').style.cursor = "pointer";
	pos -= size;
	pos = Math.max(pos, -size * (4 - 1));
	if (pos == -size * (4 - 1)) {
		document.getElementById('rightB').style.visibility = "hidden";
		document.getElementById('rightB').style.cursor = "default";
	}
	document.getElementById('list').style.marginLeft = pos + "px";

	newSlide(slide += 1);
};

visualViewport.onresize = () => {
	pos = 0;
	slide = 1;
	newSlide(slide);
	document.getElementById('list').style.marginLeft = pos;
	document.getElementById('leftB').style.visibility = "hidden";
	document.getElementById('leftB').style.cursor = "default";
	document.getElementById('rightB').style.visibility = "visible";
	document.getElementById('rightB').style.cursor = "pointer";
};

function newSlide(slideNum) {
	el = document.getElementById('slide');
	switch(slideNum) {
		case 1:
			el.textContent = "ЧАЙ ДЛЯ ВСЕЙ СЕМЬИ";
			break;
		case 2:
			el.textContent = "НЕЖНЫЙ ВКУС";
			break;
		case 3:
			el.textContent = "ШИРОКИЙ АССОРТИМЕНТ";
			break;
		case 4:
			el.textContent = "ИЗЫСКАННЫЙ АРОМАТ";
			break;
	}
};