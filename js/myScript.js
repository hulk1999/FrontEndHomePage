// controlling Youtube video
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '390',
		width: '640',
		videoId: 'eyFP5s403jY',
	});
}

// popup video when click on image
function popupVideo(){
	document.getElementById('popup-background').style.visibility = 'visible';
	document.getElementById('player').style.visibility = 'visible';
	player.playVideo();
}

// close video
function closePopupVideo(){
	document.getElementById('popup-background').style.visibility = 'hidden';
	document.getElementById('player').style.visibility = 'hidden';
	player.stopVideo();
}

// for image slide
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
	document.getElementsByClassName('img-index')[0].style.visibility = 'visible';
	document.getElementsByClassName('fa-caret-right')[0].style.visibility = 'visible';
	document.getElementsByClassName('fa-caret-left')[0].style.visibility = 'visible';
	document.getElementById('img-index-count').innerHTML = index;
}

function closePopupSlide(){
	document.getElementById('popup-background').style.visibility = 'hidden';
	document.getElementsByClassName('popup-img')[index-1].style.visibility = 'hidden';
	document.getElementsByClassName('img-index')[0].style.visibility = 'hidden';
	document.getElementsByClassName('fa-caret-right')[0].style.visibility = 'hidden';
	document.getElementsByClassName('fa-caret-left')[0].style.visibility = 'hidden';
}

// get y-coordinate
function getOffset(el){
	el = el.getBoundingClientRect();
	return {
    	left: el.left + window.scrollX,
    	top: el.top + window.scrollY
  	}
}

// when scrolling
var activePart = 7;
window.onscroll = function(){

	// for menu background
	if (window.pageYOffset != 0) document.getElementsByClassName('menu-background')[0].style.opacity = '0.9';
	else document.getElementsByClassName('menu-background')[0].style.opacity = '0';

	// for menu highlighting
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

	// for revealing animation
	var i;
    for (i=1; i<=30; i++){
    if (getOffset(document.getElementsByClassName('reveal-animation')[i-1]).top < window.pageYOffset + screen.height - 200)
        document.getElementsByClassName('reveal-animation')[i-1].classList.add('in');
    }
}