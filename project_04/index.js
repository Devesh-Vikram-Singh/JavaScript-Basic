const randomnumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=socument.createElement('p')
let prevGuess=[];
let minGuess=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess= parseInt(userInput.value)
       validateGuess(guess);
    });
}
function validation(guess){
    //
    
}

function checkGuess(guess){

}

function displayGuess(guess){

}
function displayMessage(message){

}


function endGame(){

}
function newGame(){

}