function solution(text, skip, index) {
    const texts = [...text]
    const skips = [ ... skip]
    const word =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    
    skips.forEach(item => {
        word.splice(word.indexOf(item),1)
    })
    
    return texts.map(item => {
        return word[(word.indexOf(item)+index) % (26-skip.length)]
    }).join("")
    
    
    

    
    
}