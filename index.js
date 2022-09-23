var numberOfDrums = $(".button").length;
for(var i=0; i<numberOfDrums; i++){
	$(".button")[i].addEventListener("click", clickToPlay);
}

function clickToPlay()
{
	var char = this.innerHTML;
	makeSound(char);
}

document.addEventListener("keypress", pressToPlay);

function pressToPlay(event)
{
	var char = event.key;
	makeSound(char);
}

function makeSound(char)
{
	var audio;
	switch(char)
	{
		case 'A':
		audio = new Audio("sounds/crash.mp3");
		audio.play();
		break;

		case 'S':
		audio = new Audio("sounds/draw-sword1-44724.mp3");
		audio.play();
		break;

		case 'D':
		audio = new Audio("sounds/kick-bass.mp3");
		audio.play();
		break;

		case 'F':
		audio = new Audio("sounds/punch.mp3");
		audio.play();
		break;

		case 'G':
		audio = new Audio("sounds/squeakyToy.mp3");
		audio.play();
		break;

		case 'H':
		audio = new Audio("sounds/sound-effect-thriller-1-108404.mp3");
		audio.play();
		break;

		case 'J':
		audio = new Audio("sounds/snare.mp3");
		audio.play();
		break;

		case 'K':
		audio = new Audio("sounds/mixed-whip-crack-1-102825.mp3");
		audio.play();
		break;

		case 'L':
		audio = new Audio("sounds/tom-1.mp3");
		audio.play();
		break;
	}
}