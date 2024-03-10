/**
 * function -> 함수
 */

/**
 * 만약에 2 라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환 받고 싶다면?
 */

console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());
console.log('===================================');
/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

function calculate() {
    console.log((2 * 10 / 2 % 3).toString());

}
// calculate();
console.log('==================================='); 

// 중복 에러가 아닌 var 처럼 덮어씌워짐.
function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());

}
/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter 라고 한다.
 * 실제 입력하는 값은 argument라고 한다.
 */
calculate(4);
calculate(5);
console.log('===================================');

function multiply(x, y) {
    console.log(x * y);
}
multiply(3, 4);
console.log('===================================');

function multiply2(x, y = 10) {
    console.log(x * y);
}
multiply2(2, 4);
multiply2(2);
console.log('===================================');

/**
 * return 반환받기
 */
function multiply3(x, y) {
    return x * y;
}

const result = multiply3(2, 4);
console.log(result);

const result2 = multiply3(4, 5);
console.log(result2);
console.log('===================================');

/**
 * Arrow 함수
 */
const multiply4 = (x, y) => {
    return x * y ;
}
console.log(multiply4(3, 4));

const multiply5 = (x, y) => x * y;
console.log(multiply5(3, 3));

const multiply6 = x => x * 2;
console.log(multiply6(2));

const multiply7 = x => y => z => `x : ${x}, y : ${y}, z : ${z}`;
console.log(multiply7(2)(5)(7));

function multiply8(x) {
    return function(y) {
        return function(z) {
            return `x : ${x}, y : ${y}, z : ${z}`;
        }
    }
}
console.log(multiply8(3)(5)(1));

const multiplyTwo = function(x, y) {
    return x * y;
}
console.log(multiplyTwo(4, 5));
console.log('===================================');

const multiplyThree = function(x, y, z) {
    console.log(arguments);
    return x * y * z;
}
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function(...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoked function
(function(x, y) {
    console.log(x * y);
})(9, 9);

console.log(typeof multiply);
console.log(multiply instanceof Object);



