let input = require('fs').readFileSync('input', 'utf-8').split(/\r?\n/);

input = input.map(String);

let origin = [];
let end = [];

for(let i = 0; i < input.length; i++){
    let aux = input[i].split(" -> ");
    

    origin.push(aux[0].split(",").map(Number));
    end.push(aux[1].split(",").map(Number));
}

let matrix = [];
function checkOverlap(){
    
    let total = 0;

    for(let i = 0; i <= 9; i++){
        for(let j = 0; j <= 9; j++){
            if(matrix[i][j] > 1){
                total++;
            }
        }
    }
    return total;
}

/**
 * 
 * @param {*Array with two components resembling the value of each axis of the start point} vOrigin 
 * @param {*Array with two components resembling the value of each axis of the end point} vEnd 
 */
function trace(vOrigin, vEnd){

    for(let x = vOrigin[0]; x < vEnd[0]; x++){
        for(let y = vOrigin[1]; y < vEnd[1]; y++){
            matrix[i][j]++;
        }
    }
}

function partA(){
    trace(origin, end);
    console.log(matrix);
}

partA();

function partB(){ 
}   


partB();