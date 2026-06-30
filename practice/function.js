function showMessage(from, text) {
  from = '*' + from + '*'; // "from"을 좀 더 멋지게 꾸며줍니다.
  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// 함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변경되지 않습니다.
alert( from ); // Ann



//////////////////////////

// Why use variables ? 

function showMessage(from, text) {
  from = '*' + from + '*'; // "from"을 좀 더 멋지게 꾸며줍니다.
  alert( from + ': ' + text );
}

let from = "Ann";

showMessage("Annie", "Hello"); // *Ann*: Hello

// 함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변경되지 않습니다.
alert( "Annie" ); // Ann

//////////////////////////


function showMessage() {
  from = '*' + from + '*'; // "from"을 좀 더 멋지게 꾸며줍니다.
  alert( from + ': ' + text );
}

let from = "Ann";
let text = "Hello"

showMessage(); // *Ann*: Hello

// 함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변경되지 않습니다.
alert( from ); // Ann

//////////////////////////

// Why use parameters ?

function showMessage() {
    let msg;
  msg = '*' + from + '*'; // "from"을 좀 더 멋지게 꾸며줍니다.
  alert( msg + ': ' + text );
}

let from = "Ann";
let text = "Hello"

showMessage(); // *Ann*: Hello

// 함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변경되지 않습니다.
alert( from ); // Ann






