function solution(k, score) {
    const array = [];
    
    const result = [];
    
    for(let i = 0 ; i < score.length ; i ++){
        
        if(array.length < k){
            array.push(score[i])
            array.sort((a,b)=>a-b)
        } else {
            if(array[0] < score[i] ){
                array.shift()
                array.push(score[i])
                array.sort((a,b)=>a-b)
            }

        }
        
        result.push(Math.min(...array))
    }
    
    return result
}