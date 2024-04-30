const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs.shift().split(" ").map(Number);
  const brandList = inputs.map((item) => item.split(" ").map(Number));

  solution(N, M, brandList);
});

function solution(N, M, brandList) {
  let result = 0;

  const packageValue = brandList.sort((a, b) => a[0] - b[0])[0][0];
  const singleValue = brandList.sort((a, b) => a[1] - b[1])[0][1];

  const singlePackageValue = singleValue * 6;

  if (singlePackageValue < packageValue) {
    result += singlePackageValue * Math.floor(N / 6);
  } else {
    result += packageValue * Math.floor(N / 6);
  }

  const num = N % 6;

  if (num * singleValue < packageValue) {
    result += num * singleValue;

    return console.log(result);
  }

  result += packageValue;
  console.log(result);
}
