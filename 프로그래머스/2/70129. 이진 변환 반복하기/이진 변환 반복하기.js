function solution(s) {
    const count = [0,0]
    while(s.length > 1) {
        count[0]++
        count[1] += (s.match(/0/g)??[]).length;
        s = s.replace(/0/g,"").length.toString(2);
    
    }
    return count
}