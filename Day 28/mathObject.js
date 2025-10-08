const prompt = require('prompt-sync')();
function userInput(){
    return parseInt(prompt("Gusse Number between 1 to 10! :"));
};

function playAgain(){
    let again = prompt("Do You Wanna Play Again Yes or No !");
    if(again == 'Yes'){
        gusseNumber()
    }
}

function gusseNumber(){
    const rand = Math.floor(Math.random() * 10)+ 1 ;
    const res = userInput();
    let again;
    if(res > rand){
        console.log("High");
        playAgain()
        
    }else if(res < rand){
        console.log("low")
        playAgain()
    }else{
        console.log(`Correct Guess! Lucky Number is ${rand}`)
    }
    
}

gusseNumber();