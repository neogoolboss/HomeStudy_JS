/**
 * 타입변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof age, age);
console.log(typeof stringAge, stringAge);
console.log('===================================');

// 암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); // 2가 string으로 변함
console.log('98' * 2); // '98'이 number로 변함
console.log('98' - 2); // '98'이 number로 변함

console.log('===================================');

/**
 * 명시적 변환 몇가지
 */
console.log(typeof (99).toString());
console.log(typeof (true).toString());
console.log(typeof (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');
console.log('===================================');

/**
 * Boolean 타입으로의 변환
 */
console.log(!'x');  // false
console.log(!!'x'); // true

console.log(!!''); // false (값이 없기 때문.)

console.log(!!0);   // false
console.log(!!'0'); // true : String에 글자가 들어 있다.

console.log(!!'false');
console.log(!!false);
console.log(!!undefined); // false
console.log(!!null); // false

console.log(!!{}); // true
console.log(!![]); // true

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 숫자 0
 * 
 * 모두 false를 반환한다.
 */
