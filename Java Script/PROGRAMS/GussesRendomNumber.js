/*JavaScript Program to Guess a Random Number */
let rendomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
gussesRendomNumber();
function gussesRendomNumber(){
    const num = parseInt(prompt("Gusses number between 1 to 10 : "));
    if(num == rendomNumber){
        document.write("You guessed the correct number.");
        return 0;
    }
    gussesRendomNumber();
}
