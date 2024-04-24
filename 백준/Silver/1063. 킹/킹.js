const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [K, S, N] = inputs.shift().split(" ");

  solution(K, S, N, inputs);
});

const checkList = {
  R: [0, 1],
  L: [0, -1],
  B: [-1, 0],
  T: [1, 0],
  RT: [1, 1],
  LT: [1, -1],
  RB: [-1, 1],
  LB: [-1, -1],
};

const alphabet = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
};

function solution(K, S, N, movingList) {
  const king = K.split("")
    .reverse()
    .map((item, index) => {
      if (index === 0) {
        return +item;
      }

      return alphabet[item];
    });

  const stone = S.split("")
    .reverse()
    .map((item, index) => {
      if (index === 0) {
        return +item;
      }

      return alphabet[item];
    });

  for (const move of movingList) {
    const [checkX, checkY] = checkList[move];

    const kingX = checkX + king[0];
    const kingY = checkY + king[1];

    const stoneX = checkX + stone[0];
    const stoneY = checkY + stone[1];

    const prevKing = [...king];
    const prevStone = [...stone];

    if (kingX < 9 && kingY < 9 && kingX >= 1 && kingY >= 1) {
      king[0] = kingX;
      king[1] = kingY;
    }

    if (king[0] === stone[0] && king[1] === stone[1]) {
      if (stoneX < 9 && stoneY < 9 && stoneX >= 1 && stoneY >= 1) {
        stone[0] = stoneX;
        stone[1] = stoneY;
      } else {
        king[0] = prevKing[0];
        king[1] = prevKing[1];

        stone[0] = prevStone[0];
        stone[1] = prevStone[1];
      }
    }
  }

  console.log(`${alphabet[king[1]]}${king[0]}`);
  console.log(`${alphabet[stone[1]]}${stone[0]}`);
}