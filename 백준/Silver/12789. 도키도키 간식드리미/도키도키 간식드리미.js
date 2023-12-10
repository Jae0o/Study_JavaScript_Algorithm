const rl = require("readline").createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = parseInt(inputs[0], 10);
  const arr = inputs[1].split(" ").map((item) => parseInt(item, 10));
  console.log(solution(N, arr));
});

function solution(N, arr) {
  let count = 1;
  let index = 0;
  const stack = [];

  while (count !== N) {
    // 본 배열 순서 맞을때
    if (arr[index] && arr[index] === count) {
      index++;
      count++;
      continue;
    }
    // 스택 순번 검사
    if (stack.length && stack[stack.length - 1] === count) {
      stack.pop();
      count++;
      continue;
    }

    // 순번이 아닐때
    if (arr[index] && arr[index] !== count) {
      stack.push(arr[index]);
      index++;
      continue;
    }

    break;
  }

  return count === N ? "Nice" : "Sad";
}
