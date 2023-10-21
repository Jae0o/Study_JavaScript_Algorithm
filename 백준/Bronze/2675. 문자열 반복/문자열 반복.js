const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
input = input.map((item) => {
  const value = item.split(" ");

  const word = [...value[1]];
  const result = word.map((item) => {
    let words = "";
    for (let i = 0; i < +value[0]; i += 1) {
      words += item;
    }

    return words;
  });
  console.log(result.join(""));
});