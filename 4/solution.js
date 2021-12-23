let input = require('fs').readFileSync('input', 'utf-8').split(/\r?\n/);

input = input.map(String);

var sequence = input[0];

//Bingo board
function Bingo (frow, srow, trow, frthrow, fthrow){

    //Rows 
    this.frow = frow;
    this.srow = srow;
    this.trow = trow;
    this.frthrow = frthrow;
    this.fthrow = fthrow;

    //Columns
    this.fcol = [frow[0], srow[0], trow[0], frthrow[0], fthrow[0]];
    this.scol = [frow[1], srow[1], trow[1], frthrow[1], fthrow[1]];
    this.tcol = [frow[2], srow[2], trow[2], frthrow[2], fthrow[2]];
    this.frthcol = [frow[3], srow[3], trow[3], frthrow[3], fthrow[3]];
    this.fthcol = [frow[4], srow[4], trow[4], frthrow[4], fthrow[4]];

    //Sort and replace number in board
    this.play = function(number) {
        for(let i = 0; i < 5; i++){
            if(this.frow[i] === number){
               this.frow[i] = "X";
            }
            if(this.srow[i] === number){
                this.srow[i] = "X";
            } 
            if(this.trow[i] === number){
                this.trow[i] = "X";
            } 
            if(this.frthrow[i] === number){
                this.frthrow[i] = "X";
            } 
            if(this.fthrow[i] === number){
                this.fthrow[i] = "X";
            }  
        }
    };

    //Check the conditions to win
    this.getWinner = function() {
        let win = false;

        for(let i = 0; i < 5; i++){
            if(this.frow[i] === "X" && this.srow[i] === "X" && this.trow[i] === "X" && this.frthrow[i] === "X" && this.fthrow[i] === "X"){
                win = true;
            }else if(this.fcol[i] === "X" && this.scol[i] === "X" && this.tcol[i] === "X" && this.frthcol[i] === "X" && this.fthcol[i] === "X"){
                win = true;
            }
        }
        return win;
    }

    //Get the score of the board
    this.getScore = function(){
        let sum = 0;

        for(let i = 0; i < 5; i++){
            if(this.frow[i] != "X"){
                sum += parseInt(this.from[i]);
            }
            if(this.srow[i] != "X"){
                sum += parseInt(this.srow[i]);
            } 
            if(this.trow[i] != "X"){
                sum += parseInt(this.trow[i]);
            } 
            if(this.frthrow[i] != "X"){
                sum += parseInt(this.frthrow[i]);
            } 
            if(this.fthrow[i] != "X"){
                sum += parseInt(this.fthrow[i]);
            }  
        }

        return sum;
    }
}

function partA(){
    var bingoCollection = [];

    let aux = [];

    for(let i = 1; i < input.length; i++){
        aux.push(input[i].split(/\s+/g));       
    }

    for(let i = 1; i < aux.length; i++){   
            
            if(aux[i][0] === '') aux[i].shift();                         
            bingoCollection.push(aux[i], aux[i + 1], aux[i + 2], aux[i + 3], aux[i + 4]);
    }
    console.log(input[40]);
    console.log(aux[0][1]);
    console.log(bingoCollection[40]);
}

partA();

function partB(){    
}

partB();