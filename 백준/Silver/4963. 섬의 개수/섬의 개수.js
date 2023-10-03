const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const solution = [];
while (input.length > 0) {
  const [w, h] = input.shift().split(" ");
  const array = []
  for (let i = 0; i < h; i += 1) {
    const value = input.shift().split(" ").map(item => +item)
    array.push(value)
  }
  solution.push([w, h, array])
}
solution.pop()
// BFS 실행하며 인근 정점에서 섬을 찾기위한 좌표 수정
const check = [
  [-1, -1], // 왼쪽 위
  [-1, 0], // 위
  [-1, 1], // 오른쪽 위
  [0, -1], // 왼쪽
  [1, -1], // 왼쪽 아래
  [1, 0], // 아래
  [1, 1], // 오른쪽 아래
  [0, 1] // 오른쪽
]
function land([w, h, graph]) {
  // 섬의 개수를 카운팅하기위한 count
  let count = 0;
  // 목표
  // 1. 모든 좌표를 전부 탐색하는 루프가 한개 존재할것
  // 2. 그리고 루프를 돌며 땅을 찾으면 멈추고 BFS를 실행
  // 3. BFS 통해 인근 땅을 찾고 방문한 땅은 모두 0으로 변경
  // 4. BFS 1 루프에 1count 

  // 모든 좌표를 검사하며 땅을 찾아낼 루프
  for (let i = 0; i < h; i += 1) {
    for (let j = 0; j < w; j += 1) {
      // 땅을 발견하면? BFS 실행
      if (graph[i][j] === 1) {
        // BFS 를 위한 queue와 발견한 섬을 BFS 시작지점으로 전달
        const queue = [[i, j]];
        // BFS 시작
        while (queue.length > 0) {
          // 해당 queue shift 의 넓이 높이로 변수에 담음
          const [itemH, itemW] = queue.shift()

          // 위에서 할당한 상하좌우 모서리까지 전부 탐색
          for (const [checkH, checkW] of check) {
            // 탐색을 위한 섬 좌표 변경
            const H = checkH + itemH;
            const W = checkW + itemW;

            // 존재하는 좌표를 벗어나 error 발생을 예방하기위한 조건
            if (H >= 0 && W >= 0 && H < h && W < w) {
              // 만약 인근에 섬이있다면
              if (graph[H][W] === 1) {
                // 해당 섬의 좌표를 queue에 넣고
                queue.push([H, W])
                // 해당 섬은 방문처리
                graph[H][W] = 0
              }
            }
          }
        }
        // BFS 1 루프에 1 count
        count++
      }
    }
  }
  console.log(count)
}
for (const test of solution) {
  land(test)
}