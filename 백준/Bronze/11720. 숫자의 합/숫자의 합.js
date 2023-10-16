const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')
input.shift()
console.log([...input[0]].reduce((a, b) => a += +b, 0))
