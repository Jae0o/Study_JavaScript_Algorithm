const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').sort((a, b) => +a - +b);
const result = [];
let count = 1;
for (let i = 0; i < 30; i += 1) {
  if (+input[i] !== count) {
    result.push(count)
    count += 1
  }
  count += 1
}
for (let i = 0; i < 2; i++) {
  console.log(result[i])
}