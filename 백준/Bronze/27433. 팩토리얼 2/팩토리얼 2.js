const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = parseInt(...input)
function recursion(num, count = 1) {
  if (num === 0) {
    count = count
  } else {
    count *= num
  }
  if (num === 1) {
    return count
  } else if (num > 1) {
    return recursion(num - 1, count)
  } else {
    return recursion(num + 1, count)
  }
}
console.log(recursion(input))