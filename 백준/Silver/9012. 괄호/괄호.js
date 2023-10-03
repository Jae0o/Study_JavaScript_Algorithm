const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.slice(1, input.length).map(item => item.split(""))
const result = [];
for (const array of input) {
  if (check(array) === 1) {
    result.push("NO")
  } else {
    result.push("YES")
  }
}
console.log(result.join('\n'))

function check(array) {
  const stack = [];

  for (const item of array) {
    if (item === "(") {
      stack.push(item)
    } else {
      if (stack.length !== 0) {
        stack.pop()
      } else {
        return stack.push("No")
      }
    }
  }

  return stack.length !== 0 ? 1 : 0
}