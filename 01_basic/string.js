const name="devesh"
const repoCount=50
// old syntax
console.log(name + repoCount +  "Value");

// new syntax
console.log(`Hello my name is ${name} and my repo cpount is ${repoCount}`);

const gameName = new String('devesh-dc')
console.log(gameName[0]);
//prototype 
console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    devesh   "
console.log(newStringOne);
console.log(newStringOne.trim());