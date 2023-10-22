const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [A, B] = [...input[0]].reverse().join("").split(" ");
+A > +B ? console.log(A) : console.log(B);
