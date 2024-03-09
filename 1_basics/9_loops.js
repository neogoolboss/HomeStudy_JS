/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for (let i = 0; i < 10; i++) {
    console.log(i);
} 
console.log('===================================');
for(let i = 10; i > 0; i--) {
    console.log(i);
}
console.log('===================================');
for(let i = 0; i < 3; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}

// *을 이용해서 6 x 6의 정사각형 출력하기
let square = '';
let side = 6;

for(let i = 0; i < 6; i++) {
    for (let j = 0; j < side; j++){
        square += '*';
    }
    square += '\n'
}

console.log(square);
console.log('===================================');
/**
 * for...in
 */
const faker = {
    name : '이상혁',
    year : 1996,
    team : 'SKT T1'
}

for(let key in faker) {
    console.log(key);   // key 반환
}
console.log('===================================');

const t1MemberArray = ['제우스', '오너', '페이커', '구마유시', '케리아'];

for(let key in t1MemberArray){
    console.log(key);  // 인덱스 값 반환
    console.log(`${key} : ${t1MemberArray[key]}`);
}

console.log('===================================');

/**
 * for...of
 */
for(let value of t1MemberArray) {
    console.log(value); // 값을 반환!
}
console.log('===================================');
/**
 * While
 */
let number = 0;

while(number < 10) {
    number++;
    console.log(number);
}
console.log('===================================');

/**
 * do...while 잘 사용하지 않음.
 */
number = 0;

do {
    number++;
} while(number < 10);
console.log(number);
console.log('===================================');

/**
 * break
 */
for(let i = 0; i < 10; i++) {
    if(i == 5) {
        break;
    }
    console.log(i);
}
console.log('===================================');

number = 0;

while(number < 10) {
    if(number === 5) {
        break;
    }
    number ++;
    console.log(number);
}
console.log('===================================');
/**
 * continue
 */
for (let i = 0; i < 10; i++) {
    if(i ===5) {
        continue;           // break;와 달리 스킵하고 다음 반복 진행
    }
    console.log(i);
}
console.log('===================================');
number = 0;

while(number < 10) {
    number++;

    if(number ===7 ){
        continue;
    }

    console.log(number);
}

