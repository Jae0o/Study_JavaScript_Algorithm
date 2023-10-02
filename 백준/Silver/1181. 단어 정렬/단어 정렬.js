const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.slice(1, input.length)
const setValue = new Set(input)
input = [...setValue]
  .sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length
    } else {
      if (a > b) {
        return 1
      } else {
        return -1
      }
    }
  })
  .join('\n')

console.log(input)