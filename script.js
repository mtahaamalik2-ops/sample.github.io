const message =
"Today is all about celebrating the amazing person you are. Your kindness, positivity, beautiful heart, and wonderful personality make life brighter for everyone around you. May your birthday be filled with happiness, love, laughter, and unforgettable memories. 💖";

let i = 0;

function typeWriter(){
const typing = document.getElementById("typing");

if(typing && i < message.length){
typing.innerHTML += message.charAt(i);
i++;
setTimeout(typeWriter,40);
}
}

typeWriter();

const balloonColors = [
"#ff4d6d",
"#ffd166",
"#06d6a0",
"#118ab2",
"#8338ec"
];

for(let i=0;i<20;i++){

let balloon=document.createElement("div");
balloon.classList.add("balloon");

balloon.style.left=Math.random()*100+"vw";

balloon.style.background=
balloonColors[Math.floor(Math.random()*5)];

balloon.style.animationDuration=
(Math.random()*10+8)+"s";

document.body.appendChild(balloon);
}

const confettiColors=[
"#ff4d6d",
"#ffd166",
"#06d6a0",
"#118ab2",
"#8338ec"
];

for(let i=0;i<150;i++){

let confetti=document.createElement("div");
confetti.classList.add("confetti");

confetti.style.left=Math.random()*100+"vw";

confetti.style.background=
confettiColors[Math.floor(Math.random()*5)];

confetti.style.animationDuration=
(Math.random()*4+2)+"s";

document.body.appendChild(confetti);
}

setInterval(()=>{

let heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="0px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

},600);

function gift(){
alert(
"🎉 Surprise! 🎉\n\nYou are one of the most amazing people in this world. Never stop smiling because your smile makes every day brighter. ❤️"
);
}