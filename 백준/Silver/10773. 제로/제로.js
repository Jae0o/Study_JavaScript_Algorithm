const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.slice(1, input.length).map(item => +item)

const stack = [];
for (const item of input) {
  if (item !== 0) {
    stack.push(item)
  } else {
    stack.pop()
  }
}
console.log(stack.reduce((a, b) => a += b, 0))
