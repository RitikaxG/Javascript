const name = "Ritika"
const repoCount = 50

//  console.log(name + repoCount + "Value")

//  Backticks : String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('splee-slay-fire')
//  Accesing Key:Value Pair
console.log(gameName[0]);
console.log(gameName.__proto__);

//  String Methods in Javascript

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4);
console.log(newString);

//  Negative numbers select from end of array

//  Will extract string starting from 4th character from end upto 2nd character from the end
const anotherString = gameName.slice(-4,-2);
console.log(anotherString);

//  Trim & Replace
const newStringOne = "      Speeee     "
console.log(newStringOne);
console.log(newStringOne.trim());

//  Browser do not understand spaces so automatically converts spaces to %20
const url = "https://speeslay.com/spee%20fire"

//  Converting it to usable url
console.log(url.replace('%20','-'));
console.log(url.includes('Ritika'));

console.log(gameName.split('-'));




