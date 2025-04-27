const score = 400;
// console.log(score);

const balance = new Number(333);
// console.log(balance);

// console.log(balance.toString()); // converts to string
// console.log(balance.toFixed(3)); // to assign precision value
// console.log(balance.toFixed(2));
// console.log(balance.toFixed(1));


const otherNum = 23.4636;
// console.log(otherNum.toPrecision(4)); // gives precision according to given numbers
// console.log(otherNum.toPrecision(3)); // gives precision according to given numbers
// console.log(otherNum.toPrecision(2)); // gives precision according to given numbers


const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // separates numbers accordingly



// +++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++ \\

// console.log(Math);
// console.log(Math.abs(-4)); // it converts negative numbers into positive
// console.log(Math.round(4.6)); // gives round about value
// console.log(Math.ceil(4.1)); // it choose the top value
// console.log(Math.floor(4.1)); // it choose the lower value
// console.log(Math.min(4, 3, 5, 1, 8)); // it finds the lowest value
// console.log(Math.max(4, 3, 5, 1, 8)); // it finds the highest value


console.log(Math.random()); // it gives the value between 0 and 1.
console.log((Math.random()*10) + 1); // Gives a random integer from 1 to 10
console.log(Math.floor(Math.random()*10) + 1);


const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min + 1)) + min); // Will randomly log a number between 10 and 20.

