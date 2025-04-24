const name = "Hanash Ahad";
const repoCount = 50;

// console.log(name + repoCount + "Value"); => This is old method and should not be used mostly

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("Hanash-game");

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length); // finds length
console.log(gameName.toUpperCase()); // converts to uppercase
console.log(gameName.charAt(3)); // find with index number
console.log(gameName.indexOf('n')); // searching the value index

const newString = gameName.substring(0, 4); // does not accept negative indexing
console.log(newString);
const anotherString = gameName.slice(-11, 4); // accept negative indexing
console.log(anotherString);


const newStringOne = "   Hanash   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // remove spaces


const url = "https://hanash.com/hanash%20ahad";

console.log(url.replace('%20'  ,  '-')); // replace() method replaces characters

console.log(url.includes('hanash')); // to find out the keyword

console.log(gameName.split('-'));
