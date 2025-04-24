// primitive

// 7 types : Strings, Number, Boolean, null, undefined, Symbol,BigInt


const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123"); // values are same but the value of output is not same
console.log(id === anotherId);

const bigNumber = 3467855335465756345n



// Reference type (Non-Primitive)




// Array, Objects, Functions

const heros = ["shaktiman","doga","superman"];
let myObj = {
    name : "Hanash Ahad",
    age : 24,
};

const myFunctions = function(){
    console.log("Hello World");
    
}

console.log(typeof heros);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ \\

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "Hkayofficial";

let anotherName = "Hanashofficial";

console.log(myYoutubename);
console.log(anotherName);


let userOne = {
    email: "user@gmail.com",
    nayapay:"user@nayapay",
}

let userTwo = userOne;

userTwo.email = "hanash@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
