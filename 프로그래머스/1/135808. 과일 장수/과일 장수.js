function solution(k, m, score) {
const array = score.sort((a,b) => b-a)
let count = 0;
for(let i = 0; i< array.length ; i++) {
    if(i%m === 0){ 
       const num = score.slice(i,i+m)
        if(num.length === m){
                count += Math.min(...num)*m
        }     
    }
}
return count
}