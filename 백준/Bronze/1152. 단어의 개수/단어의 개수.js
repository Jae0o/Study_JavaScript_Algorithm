const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")[0];
if (!input) {
  return console.log(0);
}
console.log(input.split(" ").length);