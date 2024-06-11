const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs[0].split(" ").map(Number);

  const QArray = inputs[1].split(" ").reverse();
  const Q = Number(QArray.pop());
  const Queen = [];

  for (let i = 0; i < Q; i++) {
    const x = QArray.pop();
    const y = QArray.pop();

    Queen.push([Number(x), Number(y)]);
  }

  const KArray = inputs[2].split(" ").reverse();
  const K = Number(KArray.pop());
  const Knight = [];

  for (let i = 0; i < K; i++) {
    const x = KArray.pop();
    const y = KArray.pop();

    Knight.push([Number(x), Number(y)]);
  }

  const PArray = inputs[3].split(" ").reverse();
  const P = Number(PArray.pop());
  const Pawn = [];

  for (let i = 0; i < P; i++) {
    const x = PArray.pop();
    const y = PArray.pop();

    Pawn.push([Number(x), Number(y)]);
  }

  solution(N, M, Queen, Knight, Pawn);
});

const queenMoving = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
];

const knightMoving = [
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [-1, 2],
];

function solution(N, M, Queen, Knight, Pawn) {
  const graph = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(""));
  let count = N * M;

  Queen.forEach(([x, y]) => {
    count--;
    graph[x][y] = "Q";
  });

  Knight.forEach(([x, y]) => {
    count--;
    graph[x][y] = "K";
  });

  Pawn.forEach(([x, y]) => {
    count--;
    graph[x][y] = "P";
  });

  const isKnight = (x, y) => {
    for (const [moveX, moveY] of knightMoving) {
      const nextX = moveX + x;
      const nextY = moveY + y;

      if (
        nextX > N ||
        nextY > M ||
        nextX < 1 ||
        nextY < 1 ||
        graph[nextX][nextY] !== ""
      ) {
        continue;
      }

      count--;
      graph[nextX][nextY] = "C";
    }
  };

  const isQueen = (x, y) => {
    for (const [moveX, moveY] of queenMoving) {
      let nextX = moveX + x;
      let nextY = moveY + y;

      while (
        nextX <= N &&
        nextY <= M &&
        nextX > 0 &&
        nextY > 0 &&
        graph[nextX][nextY] !== "K" &&
        graph[nextX][nextY] !== "Q" &&
        graph[nextX][nextY] !== "P"
      ) {
        if (graph[nextX][nextY] !== "C") {
          graph[nextX][nextY] = "C";
          count--;
        }

        nextX += moveX;
        nextY += moveY;
      }
    }
  };

  for (let x = 1; x < N + 1; x++) {
    for (let y = 1; y < M + 1; y++) {
      if (graph[x][y] === "K") {
        isKnight(x, y);
      }

      if (graph[x][y] === "Q") {
        isQueen(x, y);
      }
    }
  }

  console.log(count);
}
