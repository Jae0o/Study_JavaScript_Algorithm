const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (const item of input) {
  console.log(parseInt(item[0]) + parseInt(item[2]));
}
