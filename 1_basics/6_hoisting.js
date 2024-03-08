/**
 * Hoisting
 */

console.log('Hello');
console.log('World');
console.log('===================================');
// console.log(name); // undefined
// var name = '자바스크립트';
// console.log(name);
console.log('===================================');

// var name;
// console.log(name);
// name = '자바스크립트'
// console.log(name);
console.log('===================================');
/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */

/* let과 const를 사용하는 이유는 Hoisting 현상을 var 키워드는 막아주지 못하기 때문!  */
console.log(faker);
// let faker = '대상혁';
// const faker = '대상혁';
