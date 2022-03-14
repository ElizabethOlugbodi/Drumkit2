// document.addEventListener("keydown", function(e) {
//     let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if(audio) {
//         audio.play();
//         audio.CurrentTime = 0;
//         this.classList.add("playing");
//         }
// });
// let kk = document.querySelectorAll(".key")
// kk.forEach(function(e) {
//     e.addEventListener('transitionend',remove);
// });

// function remove() {
//     if(k.propertyName = "transform") {
//         this.classList.remove("playing");
//     } else {
//         return;
//     }
// }

// const boom = document.getElementById("boom");
// const clap = document.getElementById("clap");
// const hihat = document.getElementById("hihat");
// const kick = document.getElementById("kick");
// const openhat = document.getElementById("openhat");
// const ride = document.getElementById("ride");
// const snare = document.getElementById("snare");
// const tink = document.getElementById("tink");
// const tom = document.getElementById("tom");

// document.addEventListener("keypress", (event) => {
//     if (event.key === "a" || event.key === "A") {
//         audioClap.src = "./sounds/clap.wav";
//     }
// });

// document.addEventListener("keypress", (event) => {
//     if (event.key === "s" || event.key === "S") {
//         audiohithat.src = "./sounds/hithat.wav";
//     }
// });

// document.addEventListener("keypress", (event) => {
//     if (event.key === "d" || event.key === "D4") {
//         audiokick.src = "./sounds/kick.wav";
//     }
// });

// document.addEventListener("keypress", (event) => {
//     if (event.key === "f" || event.key === "F") {
//         audioopenhat.src = "./sounds/openhat.wav";
//     }
// });

// document.addEventListener("keypress", (event) => {
//     if (event.key === "g" || event.key === "G") {
//         audioride.src = "./sounds/ride.wav";
//     }
// });

// document.addEventListener("keypress", (event) => {
//     if (event.key === "h" || event.key === "H") {
//         audiosnare.src = "./sounds/snare.wav";
//     }
// });

// document.addEventListener("keypress", (event) => {
//     if (event.key === "j" || event.key === "J") {
//         audiotink.src = "./sounds/tink.wav";
//     }
// });

// document.addEventListener("keypress", (event) => {
//     if (event.key === "k" || event.key === "K") {
//         audiotom.src = "./sounds/tom.wav";
//     }
// });

// document.addEventListener("keypress", (event) => {
//     if (event.key === "l" || event.key === "L") {
//         audioboom.src = "./sounds/boom.wav";
//     }
// });


function sounds(){
    if (document.activeElement.id == "a"){
    const audio=new Audio ("./sounds/boom.wav");
    audio.play();
    }
else if (document.activeElement.id == "s"){
    const audio=new Audio ("./sounds/clap.wav");
    audio.play();
    }
else if (document.activeElement.id == "d"){
    const audio=new Audio ("./sounds/hihat.wav");
    audio.play();
    } 
else if (document.activeElement.id == "f"){
    const audio=new Audio ("./sounds/kick.wav");
    audio.play();
    } 
else if (document.activeElement.id == "g"){
    const audio=new Audio ("./sounds/openhat.wav");
    audio.play();
    } 
else if (document.activeElement.id == "h"){
    const audio=new Audio ("./sounds/ride.wav");
audio.play();
    } 
else if (document.activeElement.id == "j"){
    const audio=new Audio ("./sounds/snare.wav");
    audio.play();
    }     
else if (document.activeElement.id == "k"){
    const audio=new Audio ("./sounds/tink.wav");
    audio.play();
    }    
else if (document.activeElement.id == "l"){
    const audio=new Audio ("./sounds/tom.wav");
    audio.play();
    }  
}

document.addEventListener("keypress", (e) => {
    if (e.key== "a") {
    const audio=new Audio("./sounds/boom.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});
}
    else if (e.key== "s") {
    const audio=new Audio("./sounds/clap.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});
}
    else if (e.key== "d") {
    const audio=new Audio("./sounds/hihat.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});
}   

    else if (e.key== "f") {
    const audio=new Audio("./sounds/kick.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
 });
}
        
else if (e.key== "g") {
    const audio=new Audio("./sounds/openhat.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});
}

else if (e.key== "h") {
    const audio=new Audio("./sounds/ride.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});
}

else if (e.key== "j") {
    const audio=new Audio("./sounds/snare.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});
}

else if (e.key== "k") {
    const audio=new Audio("./sounds/tink.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});
}
else if (e.key== "l") {
    const audio=new Audio("./sounds/tom.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});
}
})
