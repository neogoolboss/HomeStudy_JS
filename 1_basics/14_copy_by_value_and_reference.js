/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다.
 * 2) 객체는 copy by reference다.
 */
let original = '안녕하세요';
let clone = original;
console.log(original);
console.log(clone);
console.log('===================================');

clone += ' 페이커 입니다.';
console.log(original);
console.log(clone);
console.log('===================================');

let originalObj = {
    name: '대상혁',
    team: 'SKT T1',
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

// originalObj['team'] = '국가대표';
// console.log(originalObj);
// console.log(cloneObj);

cloneObj['team'] = '국가대표';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);
console.log('===================================');

const untara1 = {
    name : '운타라',
    team : '치지직',
}

const untara2 = untara1

const untara3 = {
    name : '운타라',
    team : '치지직',
}

console.log(untara1 === untara2); // true
console.log(untara1 === untara3); // false
console.log(untara2 === untara3); // false

/**
 * Spread Operator
 */

// copy by value 가능
const untara4 = {
    ... untara1,
}
console.log(untara4);
console.log(untara4 === untara1);

const untara5 = {
    year: 1996,
    ... untara1,
    position: 'top',
}
console.log(untara5);