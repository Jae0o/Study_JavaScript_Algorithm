
function solution(ham) {
    
    const array = []
    let count = 0

    for(const item of ham){
        array.push(item)
        
        const leng = array.length;
        
        if( array[leng - 4] === 1 &&
            array[leng - 3] === 2 &&
            array[leng - 2] === 3 &&
            array[leng - 1] === 1
          ){ 
            array.pop()
            array.pop()
            array.pop()
            array.pop()
           count ++
           }
        
    }

    return count
}