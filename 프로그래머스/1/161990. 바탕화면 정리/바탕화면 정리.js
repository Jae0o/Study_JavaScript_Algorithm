function solution(wallpaper) {
    const array = [...wallpaper]
                        .map((a,i)=> a.includes("#") ? i :false)
                        .filter(a => a !== false)
    const a = array[0]
    const c = array.reverse()[0]+1;
    
    const array2 = [...wallpaper].map(a => [...a]
                                 .map((b,i)=> b === "#" ? i:"")
                                 .filter(a => a!=="")         
                                )
    
    const b = Math.min(...array2.flat());
    const d = Math.max(...array2.flat())+1;

    return [a,b,c,d]
}