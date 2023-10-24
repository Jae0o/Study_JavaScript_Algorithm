const fs = require("fs");
const input = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `z`
  ).trim();
  
console.log(input.charCodeAt(0));