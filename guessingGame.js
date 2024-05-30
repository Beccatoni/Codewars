const MIN = 1, MAX = 10;

let secretNumber = Math.floor(Math.random() * (MAX-MIN +1) + MIN);

let guesses = 0, hint = '', number= 0 ;
do{
    //in from the user
    let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);

    number = parseInt(input);

    guesses++;

    if(number > secretNumber){
        hint = ', and less than ' + number;
    } else if(number < secretNumber){
        hint = ', and greater than ' + number;
    } else if(number == secretNumber){
        alert(`Bravo! you're correct after ${guesses} guess(es).`);
    }
} while(number != secretNumber)