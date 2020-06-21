for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", () => {
    //console.log('sound clicked')
    /// this.style.color="white" ;
    console.log(this);

    var buttonInnerHtml = this.innerHTML;
    console.log(buttonInnerHtml)

   
  });
}

document.addEventListener("keypress", (e)=>{
   // alert('key was pressed')

   makeSound(e.key)
   buttonAnimation(e.key)

})


function makeSound(key){

    switch (key) {
        case "w":
          var tom1 = new Audio("./sounds/tom-1.mp3");
          tom1.play();
          break;
  
        case "a":
          var tom2 = new Audio("./sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("./sounds/tom-3.mp3");
          tom3.play();
          break;
  
        case "d":
          var tom4 = new Audio("./sounds/tom-4.mp3");
          tom4.play();
          break;
  
        case "j":
          var snare = new Audio("./sounds/snare.mp3");
          snare.play();
          break;
  
        default:
            console.log('Nope...')
      }

}

function buttonAnimation(key){
    var activeButton= document.querySelector("."+key)
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 100);


}

// var audio = new Audio('./sounds/tom-1.mp3')
// audio.play()
