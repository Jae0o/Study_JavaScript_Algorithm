const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[1].split(" ").sort((a, b) => +a - +b)
console.log(input[0] + " " + input[input.length - 1])
