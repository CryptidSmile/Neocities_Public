// javascript
// mouse가 될 요소 불러오기


const mouse_cursor = document.querySelector("#cursor"); // cursor image
document.addEventListener("mousemove", (event) => { // mouse 움직일때마다



    mouse_cursor.style.top = event.clientY + "px";
    mouse_cursor.style.left = event.clientX + "px";
    console.log(getComputedStyle(mouse_cursor).position);
});


    // cursor image 위치가 마우스 위치에 있기를 바라


    //    console.log("x=", event.clientX)
    //    console.log("y=", event.clientY)
