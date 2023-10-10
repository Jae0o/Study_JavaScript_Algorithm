
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')
input.shift()
input = input.map(item => +item)

input.forEach((item) => {
  let current = 1, last = 0, result = 0;

  for (let i = 0; i < item; i++) {
    last = current;
    current = result;

    result = last + current
  }
  console.log(current + " " + result)
})