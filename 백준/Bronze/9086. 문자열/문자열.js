const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')
for (let i = 1; i < input.length; i += 1) {
  console.log(input[i][0] + input[i][input[i].length - 1])
}
