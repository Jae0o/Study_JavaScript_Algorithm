const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [_, check] = input.shift().split(" ")
const array = [];
input[0].split(" ").forEach((item) => +item < +check ? array.push(item) : "")
console.log(array.join(" "))