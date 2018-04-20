function popupVideo(){
	document.getElementById('popup-background').style.visibility = 'visible';
	document.getElementById('popup-video').style.visibility = 'visible';
}

function closePopupVideo(){
	document.getElementById('popup-background').style.visibility = 'hidden';
	document.getElementById('popup-video').style.visibility = 'hidden';
}

var index;

function showNextImg(count){
	closePopupSlide();
	index += count;
	if (index > 6) index = 1;
	if (index < 1) index = 6;
	popupSlide(index);
}

function popupSlide(clickIndex){
	index = clickIndex;
	document.getElementById('popup-background').style.visibility = 'visible';
	document.getElementsByClassName('popup-img')[index-1].style.visibility = 'visible';
	document.getElementsByClassName('fa-caret-right')[0].style.visibility = 'visible';
	document.getElementsByClassName('fa-caret-left')[0].style.visibility = 'visible';
}

function closePopupSlide(){
	document.getElementById('popup-background').style.visibility = 'hidden';
	document.getElementsByClassName('popup-img')[index-1].style.visibility = 'hidden';
	document.getElementsByClassName('fa-caret-right')[0].style.visibility = 'hidden';
	document.getElementsByClassName('fa-caret-left')[0].style.visibility = 'hidden';
}


var activePart = 7;
window.onscroll = function(){
	if (window.pageYOffset != 0) document.getElementsByClassName('menu-background')[0].style.opacity = '0.9';
	else document.getElementsByClassName('menu-background')[0].style.opacity = '0';

	var tmpActivePart = 7;
	if (window.pageYOffset > 500) tmpActivePart = 6;
	if (window.pageYOffset > 1000) tmpActivePart = 5;
	if (window.pageYOffset > 2300) tmpActivePart = 3;
	if (window.pageYOffset > 3100) tmpActivePart = 4;
	if (window.pageYOffset > 3800) tmpActivePart = 2;
	if (window.pageYOffset > 4600) tmpActivePart = 1;
	if (activePart != tmpActivePart){
		document.getElementsByClassName('menu-link')[activePart-1].style.color = 'rgb(180, 180, 180)';
		document.getElementsByClassName('menu-link')[tmpActivePart-1].style.color = 'white';
		activePart = tmpActivePart;
	}
}