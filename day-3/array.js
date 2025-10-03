
// Find unique numbers
const duplicates = [1,2,3,4,3,2,1,4,5,]
const unique= [...new Set(duplicates)]
// console.log(unique)

// check the value exists
const numbers = new Set([35,34,23,23,45,3])
// console.log(numbers.has(3));

const devices = ["Apple","Google Pixel 8", "Samsung Note 10 Plus", "Ultra thin phone"];
const longestString= devices.reduce((acc,crr)=>acc.length>crr.length?acc:crr);
// console.log(longestString)

const mixed = [8,"mehedi",10,"Jillu"];
const pushed = mixed.push("I am pushed");
console.log(mixed)
const poped = mixed.pop();
console.log(mixed)
const uniShifted = mixed.unshift("I am unshift");
console.log(mixed)
const shifted = mixed.shift();
console.log(mixed)

// descending order
const descending = [8,4,9,6,5,6,2,]
const dOrdered = descending.sort((a,b)=>b-a);
console.log(dOrdered)