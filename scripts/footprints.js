// cursor 불러오기
// Displays a trail of footprints behind custom cursor.

console.log("footprints.js loaded");
const shoe_cursor = document.querySelector("#cursor");

// 마지막 마우스 x, y를 저장할 변수와, 마지막 발자국 x, y 좌표 변수 만들기
let lastX = null; // mouse x 좌표
let lastY = null; // mouse y
let lastShoeX = null; // shoe x
let lastShoeY = null; // shoe y

// 내가 알고싶은거 변수
let isLeftFoot = false;
// isLeftFoot = !isleftFoot;

// "어느정도거리" 움직였을때 찍고싶은데?
const STEP = 45;
// 좌우 발 간격
const DIST = 10;



// atan2

// let angleResultRadian = atan2결과 (radian) => (degree)
// angleResultDegree = angleResultRadian * (180 / Math.PI)

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
    let deg = Math.atan2(dy, dx) * (180/Math.PI) + 90; // mouse방향

    if (dist < STEP) return;

    // 내가 가는 방향
    let angle = deg * (Math.PI/180);
    //let side = right일때는 DIST만큼 움직이고, left일때는 -DIST만큼
    let side = isLeftFoot ? DIST : -DIST
    let px = x + (side*Math.cos(angle))
    let py = y + (side*Math.sin(angle))

    // Creates and adds the shoe into the page.
    const shoe = document.createElement("img");
    shoe.src = "/assets/images/rightshoeprint.png"; // 검토, right foot print
    shoe.classList.add("footprint")
    shoe.style.top = py + "px";
    shoe.style.left = px + "px";    
    shoe.style.rotate = deg + "deg"; 
    if(!isLeftFoot) {
        shoe.style.transform = 'scaleX(-1)'; // flip horizontally
    }

    document.body.appendChild(shoe);     


    
    // 찍은 발자국 삭제
    setTimeout(()=> {
        shoe.remove()}, 4000);

    lastX = x;
    lastY = y;

    isLeftFoot = !isLeftFoot;

});

// github 

// transform: scaleX(-1);
// element.style.transform = 'scaleX(-1)';

// isLeftFoot True/False, 1,0 변수 활용 1
// image - Scale (이미지를 좌우 반전 시켜주는 함수, 스타일)

// 






// next steps
// 발자국 방향(각도) - 삼각함수 sin cos tan, 두점사이의 방향(벡터) atan2 
// 발자국 애니메이션
// 발자국 색상 변경,
// 발자국 양발 사인 간격 