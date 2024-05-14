// Quiz One: Write a JavaScript program where the program takes a random integer between 1 and 10, 
// and the user is then prompted to input a guess number. The program displays the message 
// "Good Work" if the input matches the guess number otherwise "Not matched".



//prompt the user for input

var inputNumber=prompt("enter a number in range 0-10")


//random number && converting it to a whole number
var randomNumber=Math.floor(Math.random()*10)



//typecasting the  user input to integer and checking if it matches the random number
if(parseInt(inputNumber)===randomNumber){

    console.log("Good Work");
}else{
    console.log("Not Matched");
}