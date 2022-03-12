// document.querySelector("button").addEventListener("click", clicked);
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", Clicked);
  function Clicked(){
    sound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  }
}

document.addEventListener("keypress", function(event){
  sound(event.key);
  buttonAnimation(event.key);
})


function sound(buttonPressed){
  switch (buttonPressed) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play()
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play()
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play()
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play()
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play()
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play()
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play()
      break;
    default:
  }
}
function buttonAnimation(ButtonPressed){
  var activeKey = document.querySelector("." + ButtonPressed);
  activeKey.classList.add("pressed");

  // document.querySelector("." + ButtonPressed).setTimeout(  document.querySelector("." + ButtonPressed).classList.remove("pressed") , 100
    setTimeout(function(){
    activeKey.classList.remove("pressed");
  }, 50);
}
