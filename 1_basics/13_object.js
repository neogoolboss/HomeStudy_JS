/**
 * Object / 객체
 */

// key : value parie
let faker = {
    name : '대상혁',
    team : 'SKT T1',
    game : function(){
        return `${this.name}(이)가 롤을 합니다.`;
    }
};

console.log(faker);
console.log(faker.name);
console.log(faker['name']);
console.log(faker.team);
console.log(faker.game());

const key = 'name';
console.log(faker[key]);

const nameKey = 'name';
const nameValue = '대상혁';
const teamKey = 'team';
const teamValue = 'SKT T1';

const faker2 = {
    [nameKey]: nameValue,
    [teamKey]: teamValue,
    game : function(){
        return `${this.name}(이)가 롤을 합니다.`;
    }
}
console.log(faker2);
console.log(faker2.game());

faker2['koreanName'] = '이 상 혁';
console.log(faker2);

delete faker2['koreanName'];
console.log(faker2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경할 수 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */

const zeus = {
    name : '제우스',
    team : 'SKT T1'
}
console.log(zeus);
// zeus = {};
zeus['name'] = '우제';
console.log(zeus);

/**
 * 모든 키 값 다 가져오기
 */

console.log(Object.keys(faker));

/**
 * 모든 밸류 값 다 가져오기
 */
console.log(Object.values(faker));

const name = '대상혁';

const faker3 = {
    name,       // name = name,
}
console.log(faker3);

