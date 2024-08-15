let score  = "44rxz"
let score2 = null
let score3 = undefined
let score4 = true

console.log(typeof score);

let valueInNumber  = Number(score)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)

console.log(typeof(valueInNumber));
console.log(valueInNumber); // NaN

console.log(valueInNumber2); // 0

console.log(valueInNumber3); // NaN

console.log(valueInNumber4); // 1 // 0 for false

//  "33"        =>  33
//  "8445hv"    =>  NaN
//  true        =>  1;  false => 0

let isLoggedIn  = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); //  true

//  1           => true ;    0   =>  false
//  ""          => false
//  "Ritika"    => true  

let someNumber = 55

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);




