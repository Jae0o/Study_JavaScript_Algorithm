function solution(n, arr1, arr2) {
    
    const first = arr1.map(item => {
        const change =item.toString(2)
        return ("0".repeat(n-change.length)+change).split("")
    })
    
    const two = arr2.map(item => {
        const change =item.toString(2)
        return ("0".repeat(n-change.length)+change).split("")
    }).map((arr,arridx) => {
        return arr.map((item,idx)=> {
            return item = parseInt(item) + parseInt(first[arridx][idx])
        })
    })
    
    return two.map(item => {
        return item.map(a => {
            if(a === 0) {
                return " "
            } else {
                return "#"
            }
        }).join("")
    })


    
}