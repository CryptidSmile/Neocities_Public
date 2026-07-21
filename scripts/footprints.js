// cursor 불러오기
// Displays a trail of footprints behind custom cursor.

console.log("footprints.js loaded");
const shoe_cursor = document.querySelector("#cursor");



// const , let

// 마지막 마우스 x, y를 저장할 변수와, 마지막 발자국 x, y 좌표 변수 만들기
let lastX = null; // mouse x 좌표
let lastY = null; // mouse y
let lastShoeX = null; // shoe x
let lastShoeY = null; // shoe y

document.addEventListener("mousemove", (event) => {

    const x = event.clientX;
    const y = event.clientY;

    // Creates and adds the shoe into the page.
    const shoe = document.createElement("img");
    shoe.src = "/assets/images/leftshoeprint.png";
    shoe.classList.add("footprint")
    shoe.style.top = y + "px";
    shoe.style.left = x + "px";    
    document.body.appendChild(shoe);


    // 발자국이 마우스가 어느정도 움직였을때만 발자국이 찍히는거만
    // Math sqrt

    // 찍은 발자국 삭제
    setTimeout(()=> {shoe.remove()}, 4000);


    // 마우스마지막 위치를 저장해둔다.

});