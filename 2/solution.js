let input = require('fs').readFileSync('input', 'utf-8').split(/\r?\n/);

input = input.map(String);

function partA(){
    let position = [0, 0];

    for(let i = 0; i < input.length; i++){

        let array = input[i].split(" ");
        
        if(array[0] === "forward"){
            position[0] += parseInt(array[1]);
        }else if(array[0] === "up"){
            position[1] -= parseInt(array[1]);
        }else if(array[0] === "down"){
            position[1] += parseInt(array[1]);
        }
    }
    console.log(position[0] * position[1]);    
}

partA();

function partB(){
    let position = [0, 0, 0];

    for(let i = 0; i < input.length; i++){

        let array = input[i].split(" ");
        
        if(array[0] === "forward"){
            position[0] += parseInt(array[1]);
            position[1] += position[2] * parseInt(array[1]);
        }else if(array[0] === "up"){
            position[2] -= parseInt(array[1]);
        }else if(array[0] === "down"){
            position[2] += parseInt(array[1]);
        }
    }
    console.log(position[0] * position[1]);
}

partB();