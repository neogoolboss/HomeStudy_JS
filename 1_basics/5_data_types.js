/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 Object 타입이 있다.
 * 
 * 1) Number(숫자)
 * 2) String(문자열)
 * 3) Boolean(불리언)
 * 4) undefined(언디파인드)
 * 5) null(널)
 * 6) Symbol(심볼)
 * 
 * 7) Object(객체)\
 *    -> Function, Array, Object
 */

const age = 30;
const tempature = -10;
const pi = 3.14;
console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('===================================');

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('===================================');

/**
 * String 타입
 */
const codeHomeStudy = '"코드"집공부';
console.log(codeHomeStudy);
console.log(typeof codeHomeStudy);

const girlFriend = "'여자친구' 오하영";
console.log(girlFriend);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline : \n
 * 2) tab : \t
 * 3) 백슬래시를 스트링으로 표ㅛ현하고 싶다면 두번 입력하면 됨.
 */
const iveYuJin = '아이브안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\코드공부';
console.log(backSlash);
const smallQutoation = '김만호\'코드공부';
console.log(smallQutoation);

const iveWonYoung2 = `아이브 ' " / / / / 
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '동방신기';
console.log(groupName + ' 유노윤호');
console.log(`${groupName} 유노윤호`);
console.log('===================================');

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('===================================');

/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화 하지 않았을 때 저장되는 값이다.
 * 직접 undefined로 값을 초기화하는건 지양해야 한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log('===================================');

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화 할 때 사용된다.
 */

let init = null;
console.log(init);
console.log(typeof init);
console.log('===================================');

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);
console.log('===================================');

/**
 * Object 타입
 * 
 * Map
 * 키 : 밸류의 쌍으로 이루어져 있다.
 * key:value
 */
const dictionary = {
    red : '빨강',
    orange : '주황',
    yellow : '노랑'
};
console.log(dictionary);
console.log(dictionary.red);
console.log(dictionary.orange);
console.log(dictionary.yellow);
console.log(typeof dictionary);
console.log('===================================');

/**
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있는 타입이다.
 */

const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '이서',
    '리즈'
];
console.log(iveMembersArray);
console.log('===================================');

/**
 * index
 * 
 * 0부터 시작해서 1씩 올라간다.
 */

console.log(iveMembersArray[0]);
console.log(iveMembersArray[1]);
console.log(iveMembersArray[2]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = '유재석';
console.log(iveMembersArray);
console.log(iveMembersArray[0]);
console.log('===================================');

/**
 * static typing : 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시를 한다.
 * 
 * dynamic typing : 변수의 타입을 명시적으로 선언하지 않고 갑에 의해 타입을 '추론'한다.
 * JavaScript : dynamic typing
 */