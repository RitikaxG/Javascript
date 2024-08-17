//  Primitive Data Types

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
//  Call by Value : When you copy these data types reference to original memory address is not given but copied variable's address is given


// JavaScript is a dynamically typed language. This means that the type of a variable is determined at runtime, rather than being explicitly declared and enforced at compile time, as in statically typed languages.

let x = 5;        // x is now a number
x = "hello";      // x is now a string

const score = 100
const scoreValue  = 100.3
const isLoggedIn  = false

const outsideTemp = null
let userEmail

//  Defining Symbols (Return unique value)

const id        = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // false

const bigNumber = 34567890234568765n

//  Non-Primitive (Reference) Types

//  Call by Reference
//  Arrays, Objects, Functions

//  Arrays
const heroes = ["batman","captain america","Deadpool"];

//  Object
let myObj = {
    name : "Ritika",
    age  : 21,

}
//  Function
const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp); // object
//  Primitive DataTypes

//  undefined : undefined
//  null      : object
//  boolean   : boolean
//  Number    : number
//  String    : string
//  symbol    : symbol 
//  BigInt    : bigint

//  Non Primitive DataTypes

// Object{native and does not implement [[Call]]}         : object
// Object{native or host and does implement [[Call]]}     : function
// Object{host and does not implement [[Call]]}           : Implementation-defined except may not be "undefined","boolean","number" or "string"

//  function  : function object
//  Arrays    : object


//  ****************** MEMORY *********************

//  STACK (Primitive)    : We get a copy of the variable declared
//  HEAP (Non-Primitive) : We get a reference to the original variable

let myEmailId   = "ritikaxg@gmail.com"
let anotherName = myEmailId

anotherName = "ritikaxg"

console.log(myEmailId);
console.log(anotherName);

let userOne = {
    email : "ritikaxg@gmail.com",
    upi   : "ritika@ybl"
}

let userTwo = userOne

userTwo.email = "ritika@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);




