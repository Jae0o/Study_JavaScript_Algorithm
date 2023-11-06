function solution(array) {
    let count = 0
    
    for(const item of array ){
        const arr = [...item.toString()]
        
        arr.forEach((word)=> {
            if(word === "7"){
                count ++
            }
        }) 
    }
    return count
}