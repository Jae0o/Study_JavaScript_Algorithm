function solution(A,B){
    const array1 = A.sort((a,b)=>a-b);
    const array2 = B.sort((a,b)=>b-a);
    let value = 0
    for(let i = 0 ; i < A.length ; i ++ ){
        value += array1[i]*array2[i]
    }
    
    return value}