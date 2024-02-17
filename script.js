let drumbuttons = document.querySelectorAll('.drum').length;

for(let i=0; i<drumbuttons; i++){


document.querySelectorAll('button')[i].addEventListener('click', function() {
   let sound = this.innerHTML;
   keyboard(sound);
  
});

}

document.addEventListener('keypress', function(event){
   keyboard(event.key);
});
 function keyboard(key){
    switch (key) {
        case "m":
            let m =new Audio('sounds/tom-1.mp3');
            m.play();
            break;
        case "o":
            let o =new Audio('sounds/tom-2.mp3');
            o.play();
            break;
        case "h":
            let h =new Audio('sounds/tom-3.mp3');
            h.play();
            break;
        case "d":
            let d =new Audio('sounds/tom-4.mp3');
            d.play();
            break;
        case "s":
            let s =new Audio('sounds/crash.mp3');
            s.play();
            break;
        case "a":
            let a =new Audio('sounds/crash.mp3');
            a.play();
            break;
        case "b":
            let b =new Audio('sounds/kick-bass.mp3');
            b.play();
            break;
        case "i":
            let i =new Audio('sounds/snare.mp3');
            i.play();
            break;
        default:
            console.log(sound)
            
       }
 }

// function handleClick(){
//     alert("i got clicked")
// }
// function play(){
//     let audio =new Audio('sounds/tom-1.mp3');
//     audio.play();
  
// }

