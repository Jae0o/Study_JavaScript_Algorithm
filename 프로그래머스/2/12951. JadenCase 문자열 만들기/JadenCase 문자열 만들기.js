function solution(s) {
    return s.toLowerCase().split(" ").map(i => i.replace(/\w/g,(item,index)=> 
                                           index === 0 ? item.toUpperCase() :item)).join(" ")
}