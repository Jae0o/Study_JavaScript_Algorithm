const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [A, B, C] = inputs[0].split(" ");

  solution(+A, +B, +C);
});

function solution(A, B, C) {
  const visited = Array.from({ length: 201 }, () =>
    Array.from({ length: 201 }, () => Array.from({ length: 201 }, () => false))
  );

  const queue = [[0, 0, C]];
  const result = [];

  while (queue.length) {
    const [a, b, c] = queue.shift();

    if (visited[a][b][c]) continue;

    visited[a][b][c] = true;

    if (a === 0) {
      result.push(c);
    }

    if (a + b > B) {
      queue.push([a + b - B, B, c]);
    } else {
      queue.push([0, a + b, c]);
    }

    if (a + c > C) {
      queue.push([a + c - C, b, C]);
    } else {
      queue.push([0, b, a + c]);
    }

    if (b + a > A) {
      queue.push([A, b + a - A, c]);
    } else {
      queue.push([b + a, 0, c]);
    }

    if (b + c > C) {
      queue.push([a, b + c - C, C]);
    } else {
      queue.push([a, 0, b + c]);
    }

    if (c + a > A) {
      queue.push([A, b, c + a - A]);
    } else {
      queue.push([c + a, b, 0]);
    }

    if (c + b > B) {
      queue.push([a, B, c + b - B]);
    } else {
      queue.push([a, c + b, 0]);
    }
  }

  console.log(result.sort((a, b) => a - b).join(" "));
}
