const amount = 12


if(amount < 10){
    console.log('small number');
}
else{
    console.log('large number');
}

console.log(`hey it's my first node app!!!`);

// CommonJS, every file is module (by default)
// Module - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
console.log(names)


 sayHi('susan')
 sayHi(names.john)
 sayHi(names.peter)