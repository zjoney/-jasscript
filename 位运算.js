// 4个bit 2的3次方 
// let a = 0b1000;
// console.log(Math.pow(2, 3)); // run code  8
// 2.js----------------
let a = 0b100; //4
let b = 0b011; //3
console.log(a&b.toString(2));// 000 0
console.log((a|b).toString(2));// 111 7
console.log((a^b).toString(2));// 111 7

// 0b100数字1是负数,按位非远算结果是-（x+1），-(2的2次方+1)
console.log(~a) // -5
// 100， 如果1标识符号位，-(2^2), -4
console.log(~(a)); // -4
// -4(100)对应原码 011
console.log(~(-4)); // +3
// 3.js-----------------





