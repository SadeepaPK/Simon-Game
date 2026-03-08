var gameover = true;

const elementgreen = document.getElementById("green");
elementgreen.addEventListener("click", function() {
    var audio = new Audio('sounds/green.mp3');
    audio.play();
});

const elementred = document.getElementById("red");
elementred.addEventListener("click" , function() {
    var audio = new Audio('sounds/red.mp3');
    audio.play();
});

const elementblue = document.getElementById("blue");
elementblue.addEventListener("click", function() {
    var audio = new Audio('sounds/blue.mp3');
    audio.play();
});

const elementyellow = document.getElementById("yellow");
elementyellow.addEventListener("click", function() {
    var audio = new Audio('sounds/yellow.mp3');
    audio.play();
});

document.addEventListener("keydown" , function(event) {
    console.log("Key pressed: " + event.key);
    if (event.key == "a") {
    console.log("The 'a' key was pressed!");
}
});

do{
const number = Math.round((Math.random() * 3 ) + 1);
console.log("Random number between 1 and 30: " + number);

switch (number) {
    case 1:
        var audiogreen = new Audio('sounds/red.mp3');
        audiogreen.play();
        break;
    case 2:
        var audiored = new Audio('sounds/blue.mp3');
        audiored.play();
        break;
    case 3:
      var audioyellow = new Audio('sounds/yellow.mp3');
      audioyellow.play();
      break;
    case 4:
      var audioblue = new Audio('sounds/green.mp3');
      audioblue.play();
      break;
    default:
        console.log("Random number is out of range.");
}
}
while (gameover);