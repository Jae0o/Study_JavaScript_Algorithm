const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const totalCount = +input.shift()
const solution = [];
for (let i = 0; i < totalCount; i += 1) {
  const [x, y, arr] = input.shift().split(" ")
  const array = [];
  for (let a = 0; a < arr; a += 1) {
    const value = input.shift().split(" ")
    array.push([+value[0], +value[1]])
  }
  solution.push([+x, +y, array])
}

// 해당 지점에서 
const check = [
  // 위 - 아래 - 왼쪽 - 오른쪽 을 검색하기 위한 배열을 미리 만듬
  [-1, 0], [1, 0], [0, -1], [0, 1]
]

function BFS([a, b, arr]) {
  // a = 행 / b = 열  그래프를 미리 만듬
  // 해당 줄에서 행을 만들고
  const graph = Array.from({ length: a }, () => {
    const array = [];
    // 열의 갯수에 맞게 false 넣어 그래프를 만듬
    for (let i = 0; i < b; i += 1) {
      array.push(false)
    };
    return array
  })
  // 그다음 배추가 심어져있는 위치를 true 로 변경함
  for (const [x, y] of arr) {
    graph[x][y] = true
  }
  // 벌레를 카운트할 count 변수를 지정
  let count = 0;

  // 목표
  // 1. 모든 지점을 다 확인하여 true를 찾아낼 루프를 돌릴 예정
  // 2. true를 발견하면 그 지점에서 루프를 잠시 멈추고 BFS 를 실행할 예정
  // 3. true발견 지점부터 상하좌우를 찾아 바로 인접해있는 배추들을 찾고 false로 바꿀예정
  for (let i = 0; i < a; i += 1) {
    for (let j = 0; j < b; j += 1) {

      // 1. 루프를 돌다가 배추를 발견했으면?
      if (graph[i][j]) {
        // BFS 시작

        // BFS에서 사용할 queue로 현재의 배추 위치를 담음
        const queue = [[i, j]]

        // BFS 루프
        while (queue.length > 0) {
          // queue의 맨 앞 배추를 shift 하고 X Y 에 담아옴
          const [itemX, itemY] = queue.shift();

          // 상 하 좌 우 를 검색할 루프
          for (const [checkX, checkY] of check) {
            // 매 루프마다 상하좌우를 만들기위해 기존의 배추 좌표와 합함
            const X = checkX + itemX
            const Y = checkY + itemY

            // 그래프 범위내에 현재 변경된 위치가 들어와있느지 검사함
            if (X >= 0 && Y >= 0 && X < a && Y < b) {
              // 만약 변경 위치에 배추가있다면?
              if (graph[X][Y]) {
                // 배추 발견위치를 queue에 넣음
                queue.push([X, Y])
                // 그리고 해당 위치는 발견후 false 로 할당
                graph[X][Y] = false
              }
            }
          }
        }
        // 한번의 BFS는 1마리의 벌레라고 취급 count +1
        count++
      }
    }
  }
  console.log(count)
}
for (const item of solution) {
  BFS(item)
}
