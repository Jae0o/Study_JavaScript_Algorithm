const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    input = input[0].split("")
    input = input.map(item => {
        const value = item
        const checkUpper = item.toUpperCase()
        
        if(checkUpper === value){
            return item.toLowerCase()
        }
        return checkUpper
    })
    console.log(input.join(""))
    
});