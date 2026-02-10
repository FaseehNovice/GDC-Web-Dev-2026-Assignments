const prompt = require('prompt-sync')();

const randNum = Math.ceil(Math.random() * 20);
let input;

do{

    input = parseInt(prompt("Guess the Number: "));

    if(input > randNum)
        console.log("Your Number is greater than the random Number")
    else if(input < randNum)
        console.log("Your Number is smaller than the random Number")
    else
        console.log("Congratulations You win!!!!!")

}while(input !== randNum)