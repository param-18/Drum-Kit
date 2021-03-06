//for mouse input
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    makeAnimate(this.innerHTML);
  });
}
//for keyboard input
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  makeAnimate(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
     var sound = new Audio("sounds/tom-1.mp3");
     sound.play();
      break;
    case "a":
    var sound = new Audio("sounds/tom-2.mp3");
    sound.play();
      break;
    case "s":
    var sound = new Audio("sounds/tom-3.mp3");
    sound.play();
      break;
    case "d":
    var sound = new Audio("sounds/tom-4.mp3");
    sound.play();
      break;
    case "j":
    var sound = new Audio("sounds/snare.mp3");
    sound.play();
      break;
    case "k":
    var sound = new Audio("sounds/kick-bass.mp3");
    sound.play();
      break;
    case "l":
    var sound = new Audio("sounds/crash.mp3");
    sound.play();
      break;
    default:
    console.log(key);
      break;
  }

}

function makeAnimate(key)
{
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){
   document.querySelector("."+key).classList.remove("pressed");
 },60);
}
