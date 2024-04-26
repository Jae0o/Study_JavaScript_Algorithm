const fs=require("fs");
let input=fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n=+input[0];
let team=input[1].split(' ').map((item)=>Number(item));
team.sort((a, b) => a - b);
let answer = 0;
for (let i = 0; i < n - 2; i++) {
  if(team[i]>0) break;   
  let lt = i + 1;
  let rt = n - 1;
  while (lt < rt) {
    let sum = team[i] + team[lt] + team[rt];
    if(sum===0){
        if (team[lt] === team[rt]) {
           let n = rt - lt + 1;
           answer += (n * (n - 1)) / 2;
           break;
        }
        let l=1;
        let r=1;
        while (lt+1<rt&&team[lt] == team[lt + 1]) {
             l++;
             lt++;
        }
        while (lt<rt-1&&team[rt] == team[rt - 1]) {
             r++;
             rt--;           
        }
        answer += l * r;
    }
    if (sum > 0) {
      rt--;
    } else{
      lt++;
    } 
    
  }
}

console.log(answer);