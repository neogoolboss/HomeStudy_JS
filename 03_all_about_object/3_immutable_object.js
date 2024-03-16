/**
 * Immutable Object
 */

const yuJin = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.yaer = new Date().getFullYear() - age
    }

}
console.log(yuJin);
console.log('===================================');

/**
 * Extensible
 */

console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';
console.log(yuJin);

Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin));
yuJin['groupName'] = '아이브';
console.log(yuJin);

delete yuJin['position'];
console.log(yuJin);
console.log('===================================');

/**
 * Seal
 */

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.yaer = new Date().getFullYear() - age
    }
}

console.log(yuJin2);

console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2);
console.log(yuJin2);

console.log(Object.isSealed(yuJin2));
console.log('===================================');

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.yaer = new Date().getFullYear() - age
    }
}

console.log(Object.isFrozen(yuJin3));
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브';
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);

console.log(Object.getOwnPropertyDescriptors(yuJin3));
console.log('===================================');
const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));