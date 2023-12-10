const rl = require("readline").createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, K] = inputs[0].split(" ");
  const value = solution(N, K);
  console.log(`<${value.join(", ")}>`);
});

function solution(N, K) {
  const arr = Array.from({ length: N }, (_, i) => i + 1);

  let count = 0;
  let curIndex = -1;
  const result = [];

  while (arr.length > 0) {
    ++count;
    ++curIndex;

    if (count % K === 0) {
      result.push(arr[curIndex]);
      arr.splice(curIndex, 1);
      curIndex--;
    }

    if (curIndex === arr.length - 1) {
      curIndex = -1;
    }
  }

  return result;
}