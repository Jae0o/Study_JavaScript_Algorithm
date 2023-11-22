function solution(a, b, n) {
    // a개 가져다 주면 b 개를 줌 
    let count = 0;
    const bottle = (a,b,n)=>{
        if(n<a){return;}
        
        const newBottle = Math.floor(n/a) *b
        const remainsBottle = n%a
        
        count += newBottle;
        const totalBottle = newBottle + remainsBottle
        
        bottle(a,b,totalBottle)
    }
    
    bottle(a,b,n)
    return count
}