/**
 * Array Functions
 */

let sktT1Members = [
    '제우스',
    '오너',
    '페이커',
    '구마유시',
    '케리아',
]
console.log(sktT1Members);

// push()
console.log(sktT1Members.push('구원'));
console.log(sktT1Members);
console.log('===================================');

// pop() : 끝 삭제
console.log(sktT1Members.pop());
console.log(sktT1Members);
console.log('===================================');

// shift() : 앞 삭제
console.log(sktT1Members.shift());
console.log(sktT1Members);

// unshift() : 앞 추가
console.log(sktT1Members.unshift('제우스'));
console.log(sktT1Members);
console.log('===================================');

// splice()
console.log(sktT1Members.splice(0, 3));
console.log(sktT1Members);
console.log('===================================');

sktT1Members = [
    '제우스',
    '오너',
    '페이커',
    '구마유시',
    '케리아',
]
console.log(sktT1Members);

// concat() : push와 다르다. 새로운 Array를 만들어서 반환함.
console.log(sktT1Members.concat('운타라'));
console.log(sktT1Members);

// slice() : splice와 다르다.
console.log(sktT1Members.slice(0, 2));
console.log(sktT1Members);
console.log('===================================');

// spread operator
let sktT1Members2 = [
    ...sktT1Members,
    '운타라'
];
console.log(sktT1Members2);
console.log('===================================');

let sktT1Members3 = sktT1Members;
console.log(sktT1Members3);
console.log(sktT1Members3 === sktT1Members);

// console.log([
//     ...sktT1Members,
// ] === sktT1Members);
// console.log('===================================');

// join() : 모든 값들을 String으로 엮을 때 사용
console.log(sktT1Members.join()); 
console.log(typeof sktT1Members.join());
console.log(sktT1Members.join('/'));
console.log(sktT1Members.join(', '));
console.log('===================================');
// sort()
// 오름차순 정렬
sktT1Members.sort();  // 반환값 없음
console.log(sktT1Members);
console.log(sktT1Members.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => {
    return a > b ? -1 : 1
})
console.log(numbers);
console.log('===================================');

// map() : 기존 Array는 바꾸지 않고 새로운 Array 반환.
console.log(sktT1Members.map((x) => x));
console.log(sktT1Members.map((x) => `T1 : ${x}`));

console.log(sktT1Members.map((x) => {
    if( x === '페이커') {
        return `주장: ${x}`;
    } else {
        return x;
    }
}));

console.log(sktT1Members);

// filter()
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 ===0));
console.log('===================================');

// find() : filter와 비슷하지만 첫번째 값만 반환
console.log(numbers.find((x) => x % 2 === 0));

// findIndex() : find에서 나온 값의 index를 반환
console.log(numbers.findIndex((x) => x % 2 === 0));
console.log('===================================');

//reduce()
console.log(numbers.reduce((p, n) => p + n, 0));
/**
 * (p, n) => p + n   콜백함수
 * 0 초기값
 * 1) 초기값인 0이 p에 입력된다.
 * 2) numbers array의 첫번째 값인 1이 n에 입력된다.
 * 3) p + n 즉, 0 + 1의 결과 값인 1이 반환
 * 4) 3)에서 반환한 값 1이 p에 입력된다.
 * 5) array의 두번째 값인 8이 n에 입력된다.
 * 6) p + n 즉, 1 + 8의 결과 값인 9가 반환
 * 7) 6)에서 반환한 값 9가 p에 입력된다.
 * 8) numbers 리스트의 모든 값들을 다 순회할 때까지 반복한다.
 */

// sktT1Members 변수에 있는 모든 String 값의 길이 구하기
console.log(sktT1Members.reduce((p, n) => p + n.length, 0));