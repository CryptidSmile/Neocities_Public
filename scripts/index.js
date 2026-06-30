console.log('index.js loaded');

function button() {
alert("I'm a button!");
console.log("button log")
}

const jsButton = document.querySelector("#js-btn");

/*
jsButton.onclick = function jsButtonClick(){
    alert("I'm a javascript button!");
    console.log("js button")
}
*/

jsButton.addEventListener = () => {
    alert("I'm a javascript button!");
    console.log("js button");
}

const door = document.querySelector(".door");
const imgDoor = document.querySelector(".img-door")
var knocksound = new Audio('assets/door-knock-sound.mp3');

door.addEventListener("dblclick", ()=> {
    knocksound.play(console.log("knocking sound"));
    // delay
    setTimeout(()=> {console.log("door open delay"), imgDoor.style.backgroundImage = "url('/assets/images/open door.png')"}, 3000);
    // delay 
    setTimeout(()=> {window.location.href = "/pages/home.html";}, 700);
});

 


/*
.img-door:hover{
    width: 332px;
    height: 729px;
    background-image: url("/assets/images/open door.png");
}



element.addEventListener("event", function);

as an arrow function v

element.addEventListener("event", ()=> {});





jsButton.onclick = jsButtonClick;

function jsButtonClick(){
    console.log('jsButton loaded')
    alert("I'm a javascript button!");
    console.log("js button")
}

*/


/* 숙제
문이 열릴 때, 문 열리는 사운드 파일추가

*/