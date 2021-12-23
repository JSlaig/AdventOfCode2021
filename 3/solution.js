let input = require('fs').readFileSync('input', 'utf-8').split(/\r?\n/);

input = input.map(String);

function partA(){
    let gamma = "";
    let epsilon = "";

    let ones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    for(let i = 0; i < input.length; i++){
        let bits = input[i].split("");
        
        if(bits[0] === "1"){
            ones[0]++;
        }
        if(bits[1] === "1"){
            ones[1]++;
        }
        if(bits[2] === "1"){
            ones[2]++;
        }
        if(bits[3] === "1"){
            ones[3]++;
        }
        if(bits[4] === "1"){
            ones[4]++;
        }
        if(bits[5] === "1"){
            ones[5]++;
        }
        if(bits[6] === "1"){
            ones[6]++;
        }
        if(bits[7] === "1"){
            ones[7]++;
        }
        if(bits[8] === "1"){
            ones[8]++;
        }
        if(bits[9] === "1"){
            ones[9]++;
        }
        if(bits[10] === "1"){
            ones[10]++;
        }
        if(bits[11] === "1"){
            ones[11]++;
        }
    }


    for(let i = 0; i < ones.length; i++){
        if(ones[i] > (input.length / 2)){
            gamma += "1";
            epsilon += "0";
        }else{
            gamma += "0";
            epsilon += "1";
        }
    }

    //console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))
}

partA();

function partB(){
    let ones;
    let zeros;
    let aux = input;
    let aux2 = input;

    for(let j = 0; j < 12; j++){

        ones = "";
        zeros = "";

        for(let i = 0; i < aux.length; i++){
            if(aux[i].charAt(j) === "1"){
                ones += aux[i];
            }else{
                zeros += aux[i];
            }
        }

        aux = null;
        
        if(ones.length > zeros.length){                       
            aux = ones.match(/.{1,12}/g);          
        }else if(ones.length < zeros.length){                        
            aux = zeros.match(/.{1,12}/g);
        }else{
            aux = ones.match(/.{1,12}/g);
        }
    } 

    

    for(let j = 0; j < 12; j++){

        ones = "";
        zeros = "";
        
        if(aux2.length > 1){
            for(let i = 0; i < aux2.length; i++){
                if(aux2[i].charAt(j) === "1"){
                    ones += aux2[i];
                }else{
                    zeros += aux2[i];
                }
            } 
            
            aux2 = null;

            if(ones.length < zeros.length){        
                aux2 = ones.match(/.{1,12}/g);
            }else if(ones.length > zeros.length){
                aux2 = zeros.match(/.{1,12}/g);
            }else{
                aux2 = zeros.match(/.{1,12}/g);
            }
        }
    }

    console.log(parseInt(aux[0], 2) * parseInt(aux2[0], 2))
}

partB();