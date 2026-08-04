// cursor 불러오기
// Displays a trail of footprints behind custom cursor.

console.log("footprints.js loaded");
const shoe_cursor = document.querySelector("#cursor");

// 마지막 마우스 x, y를 저장할 변수와, 마지막 발자국 x, y 좌표 변수 만들기
let lastX = null; // mouse x 좌표
let lastY = null; // mouse y
let lastShoeX = null; // shoe x
let lastShoeY = null; // shoe y

// "어느정도거리" 움직였을때 찍고싶은데?
const STEP = 30;

document.addEventListener("mousemove", (event) => {

    const x = event.clientX;
    const y = event.clientY;


    //lastX가 null 이었냐?
    if (lastX == null) {
        lastX = x
        lastY = y
        return;
    };

    
    let dx = x - lastX;
    let dy = y - lastY;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < STEP) return;

    // Creates and adds the shoe into the page.
    const shoe = document.createElement("img");
    shoe.src = "/assets/images/leftshoeprint.png";
    shoe.classList.add("footprint")
    shoe.style.top = y + "px";
    shoe.style.left = x + "px";    
    document.body.appendChild(shoe);     
    
    // 찍은 발자국 삭제
    setTimeout(()=> {shoe.remove()}, 4000);

    lastX = x;
    lastY = y;

});

// github 


// isLeftFoot True/False, 1,0 변수 활용 1
// image - Scale (이미지를 좌우 반전 시켜주는 함수, 스타일)

// next steps
// 발자국 방향(각도) - 삼각함수 sin cos tan, 두점사이의 방향(벡터) atan2 
// 발자국 애니메이션
// 발자국 색상 변경,
// 발자국 양발 사인 간격 