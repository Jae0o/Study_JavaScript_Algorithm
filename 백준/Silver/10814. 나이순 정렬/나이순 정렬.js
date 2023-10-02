const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.slice(1, input.length).map(item => {
  const value = item.split(" ")
  return [parseInt(value[0]), value[1]]
})
  .sort((a, b) => a[0] - b[0])
  .map(item => item.join(" "))
  .join("\n")
console.log(input)