// Variable 선언하기

// 1) var - 더 이상 쓰지 않는다.
// 2) let
// 3) const

var name = '자바스크립트';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/* let과 var로 선언하면 값을 추후 변경할 수 있다. */
ive = '장원영';
console.log(ive);

const hyori = '이효리';
console.log(hyori);
// hyori = '옥주현';
// console.log(hyori);

/**
 * 선언과 할당
 * 1) 변수를 선언하는 것. var name;
 * 2) 할당 name = '이름;
 */

let girlFriend;
console.log(girlFriend); // 할당을 하지 않으면 초기 값이 undefined

// const는 선언과 동시에 초기화를 해야함.