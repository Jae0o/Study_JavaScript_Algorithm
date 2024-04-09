function solution(n, lost, reserve) {
    const help = reserve.sort((a,b)=> a-b)
    const l = lost.sort((a,b)=> a-b).map(item => {
        if(help.includes(item)){
            help.splice(help.indexOf(item),1)
            return null
        }
        return item
    })
    
    const value = l.map(item => {
        if(help.includes(item-1)){
            help.splice(help.indexOf(item-1),1)
            return null
        } else if(help.includes(item +1)){
            help.splice(help.indexOf(item+1),1)
            return null
        } else {
            return item
        }
    }).filter(item => item !== null).length

    
    return n-value
}