/**
 * Inheritance
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    
    dance() {
        return `여자 아이돌 ${this.name}이 춤을 춘다.`
    }
}

class MaleIdolModel extends IdolModel {

    sing() {
        return `남자 아이돌 ${this.name}이 노래를 부른다.`
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);

console.log(yuJin);
console.log(yuJin.dance());

const jiMin = new MaleIdolModel('지민', 1995);

console.log(jiMin);
console.log(jiMin.sing());
console.log('===================================');

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);
