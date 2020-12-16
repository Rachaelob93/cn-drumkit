function play(theLetter) {

  switch (theLetter) {
    case "a":
      var boom = new Audio("./sounds/boom.wav");
      boom.play();
      break;

    case "s":
      var clap = new Audio("./sounds/clap.wav");
      clap.play();
      break;

    case "d":
      var hihat = new Audio("./sounds/hihat.wav");
      hihat.play();
      break;

    case "f":
      var kick = new Audio("./sounds/kick.wav");
      kick.play();
      break;

    case "g":
      var openhat = new Audio("./sounds/openhat.wav");
      openhat.play();
      break;

    case "h":
      var ride = new Audio("./sounds/ride.wav");
      ride.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.wav");
      snare.play();
      break;

    case "k":
      var tink = new Audio("./sounds/tink.wav");
      tink.play();
      break;

    case "l":
      var tom = new Audio("./sounds/tom.wav");
      tom.play();
      break;
      default:
      console.log(buttonInnerHTML);

  }

}

var i;
var letter;
var array = document.querySelectorAll(".drum");

for (i = 0; i < array.length; i++) {

  array[i].addEventListener("click", function() {
    letter = this.innerHTML;
    play(letter);
    buttonAnimation(letter);
  });
}

document.addEventListener("keydown", function(event) {
  letter = event.key;
  play(letter);
  buttonAnimation(letter);
});