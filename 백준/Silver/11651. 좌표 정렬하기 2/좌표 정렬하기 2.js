const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(" "))
  .slice(1, input.length)
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  }).map(item => item.join(" ")).join('\n')
console.log(input)