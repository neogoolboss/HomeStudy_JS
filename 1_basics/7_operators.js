/**
 * Operators 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 4);
console.log(10 * (10 + 10));

console.log('===================================');


/**
 * 증가와 감소
 */

let number = 1;
number++;
console.log(number);

number--;
console.log(number);
console.log('===================================');

/**
 * 연산자의 위치
 */

let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;              // 현업에서 잘 안씀
console.log(result, number);

result = --number;              // 현업에서 잘 안씀
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 사용
 */

let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);
console.log('===================================');

sample = true

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);
console.log('===================================');

sample = false

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);
console.log('===================================');

sample = '대상혁';
// NaN = Not a Number
console.log(+sample);
console.log('===================================');

/**
 * 할당 연산자(assignment operator) 
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);
console.log('===================================');

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);        // true
console.log(5 == '5');      // true
console.log(0 == '');       // true
console.log(true == 1);     // true
console.log(false == 0);    // true
console.log(true == '1');   // true
console.log('===================================');
console.log(5 === 5);        // true
console.log(5 === '5');      // false
console.log(0 === '');       // false
console.log(true === 1);     // false
console.log(false === 0);    // false
console.log(true === '1');   // false
console.log('===================================');

console.log(5 != 5);        // false
console.log(5 != '5');      // false
console.log(0 != '');       // false
console.log(true != 1);     // false
console.log(false != 0);    // false
console.log(true != '1');   // false
console.log('===================================');
console.log(5 !== 5);        // false
console.log(5 !== '5');      // true
console.log(0 !== '');       // true
console.log(true !== 1);     // true
console.log(false !== 0);    // true
console.log(true !== '1');   // true
console.log('===================================');

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 >= 1);
console.log(100 <= 1);
console.log('===================================');

/**
 * 삼항 조건 연산자(ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
console.log('===================================');

/**
 * 논리 연산자
 * 
 * 1) &&
 * 2) ||
 */
// && 조건은 모두 true여야 true를 반환함.
console.log(true && true);      // true
console.log(true && false);     // false
console.log(false && true);     // false
console.log(false && false);    // false
console.log('===================================');

// ||조건은 하나만 true여도 true를 반환한다.
console.log(true || true);      // true
console.log(true || false);     // true
console.log(false || true);     // true
console.log(false || false);    // false
console.log('===================================');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);
console.log('===================================');
console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log('===================================');

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true 면 우측 값 반환
 * &&를 사용했을 때 좌측이 false 면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true 면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false 면 우측 값 반환
 */
console.log(true || '대상혁');      // true
console.log(false || '대상혁');     // 대상혁
console.log(false && '대상혁');     // false
console.log(true && '대상혁');      // 대상혁
console.log('===================================');
console.log(true && true && '대상혁'); // 젠장 또 대상혁이야?
console.log(true && false && '대상혁'); //false
console.log('===================================');

/**
 * 지수 연산자
 */

console.log(2 ** 2);
console.log(10 ** 3);
console.log('===================================');

/**
 * null 연산자
 */

let name;
console.log(name);
// ?? 는 좌측 값이 null 이거나 undefined일 때 우측 값을 반환해라.
name = name ?? '대상혁';
console.log(name); // 대상혁
name = name ?? '구마유시';      // 위에서 name 대상혁으로 초기화 되었기 때문에 구마유시는 될 수 없다.
console.log(name); // 젠장 또! 대상혁!?
console.log('===================================');

let name2;
name2 ??= '케리아';
console.log(name2);





