let input = require('fs').readFileSync('input', 'utf-8').split(/\r?\n/);

input = input.map(Number);

function partA(){
    let increases = 0;
    for(let i = 1; i< input.length; ++i){
        if (input[i - 1] < input[i]) ++increases;
    }

    console.log(increases);
}

partA();

function partB(){
    let increases = 0;
    for(let i = 1; i < input.length; ++i){        
        if ( (input[i - 1] + input[i] + input[i+1]) < (input[i] + input[i + 1] + input[i + 2])) ++increases;
    }

    console.log(increases);
}

partB();