// click gen password
// prompt "how many chars" (8-128)
    // if not, stop prompts
// prompt "do you want lowercase, special chars, uppercase, numbers"
    // must select at least 1 of these or it will stop prompts
// display random password with all selected parameters
// can copy to clipboard

// will use arrays, objects, and if statements.


console.log("connected!");

//Declare the variables that will be used

let userChoices = [];
let randomPassword = "";
let arrayLC = [];
let arrayUC = [];
let arraySC = [];
let arrayNum = [];
let randomIndexNumber = 0;

//Declare the arrys with the various character options    
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "~", ",", ".", ":", ";", "-", "_", "+", "="];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Function to start the password generator that will run when the "Generate Password" button is clicked.
function beginGenerator() {
    //Prompt user for a password length and dont let them proceed until a valid number is chosen
    let passwordLength = prompt("How long would you like your password to be? Please input a number between 8 and 128.");
    // while (passwordLength <= 7 || passwordLength >= 129 || passwordLength != Number){
    //     alert("Please select a number between 8 and 128");
    //     passwordLength = prompt("How long would you like your password to be? Please input a number between 8 and 128.");
    //     console.log(passwordLength);
    // } 
    while (passwordLength <= 7 || passwordLength >= 129){
        alert("Please select a number between 8 and 128");
        passwordLength = prompt("How long would you like your password to be? Please input a number between 8 and 128.");
        console.log(passwordLength);
    } 

    console.log(passwordLength);

    //Prompt user for password specifications
    const userLC = confirm("Do you want lower case letters in your password?");
    console.log(userLC);
    const userUC = confirm("Do you want upper case letters in your password?");
    console.log(userUC);
    const userSC = confirm("Do you want special characters in your password?");
    console.log(userSC);
    const userNum = confirm("Do you want numbers in your password?");
    console.log(userNum);
    
    
    //Find which character choices the user picked and add them all together into one string.
    if (userLC) {
        arrayLC = userChoices.concat(lowerCase);
        userChoices = arrayLC;
        console.log(userChoices);
    };
    if (userUC) {
        arrayUC = userChoices.concat(upperCase);
        userChoices = arrayUC;
        console.log(userChoices);
    };
    if (userSC) {
        arraySC = userChoices.concat(specialCharacters);
        userChoices = arraySC;
        console.log(userChoices);
    };
    if (userNum) {
        arrayNum = userChoices.concat(numbers);
        userChoices = arrayNum;
        console.log(userChoices);
    };
    // if (userChoices === []) {
    //     alert("You must choose at least one character type!")
    // }
    
    //Generate a random number and loop through the master character array, adding each character at the corresponding randomly generated index number to the randomPassword string.
    for (let i = 0; i < passwordLength; i++) {
        randomIndexNumber = Math.floor(Math.random()*userChoices.length);
        randomPassword += userChoices[randomIndexNumber];
    };
    
    console.log(randomPassword);
    // Paste random password to the text input.
    
    reset();

    //Return the password.
    // return randomPassword;
};

//Function to reset all variables
function reset() {
    userChoices = [];
    randomPassword = "";
    arrayLC = [];
    arrayUC = [];
    arraySC = [];
    arrayNum = [];
    randomIndexNumber = 0;
};