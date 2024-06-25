const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = Number(inputs.shift());

  solution(N, inputs);
});

function solution(N, scores) {
  let totalTime = 0;

  let A = {
    score: 0,
    time: 0,
  };

  let B = {
    score: 0,
    time: 0,
  };

  for (const item of [...scores, "0 48:00"]) {
    const [team, time] = item.split(" ");
    const split = time.split(":");

    const currentTime = Number(split[0]) * 60 + Number(split[1]);

    if (A.score > B.score) {
      A.time += currentTime - totalTime;
    }

    if (B.score > A.score) {
      B.time += currentTime - totalTime;
    }

    if (team === "1") {
      A.score++;
    }

    if (team === "2") {
      B.score++;
    }

    totalTime = currentTime;
  }

  const result = [];
  result.push(
    `${(~~(A.time / 60)).toString().padStart(2, "0")}:${(A.time % 60)
      .toString()
      .padStart(2, "0")}`
  );
  result.push(
    `${(~~(B.time / 60)).toString().padStart(2, "0")}:${(B.time % 60)
      .toString()
      .padStart(2, "0")}`
  );

  console.log(result.join("\n"));
}
