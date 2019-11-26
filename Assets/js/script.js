// click gen password.
// prompt "how many chars" (8-128).
    // if not, keep asking until a valid number is entered.
// prompt "do you want lowercase, special chars, uppercase, numbers".
    // must select at least 1 of these or will loop until a valid option is chosen.
// display random password with all selected parameters.
// can copy to clipboard.

console.log("connected!");

//Declare the variables that will be used
let userChoices = [];
let randomPassword = "";
let arrayLC = [];
let arrayUC = [];
let arraySC = [];
let arrayNum = [];
let randomIndexNumber = 0;
let passwordNumber = 0;
let passwordLength = 0;
let userLC;
let userUC;
let userSC;
let userNum;

//Declare the arrys with the various character options    
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "~", ",", ".", ":", ";", "-", "_", "+", "="];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Function Declarations

//Function to start the password generator that will run when the "Generate Password" button is clicked.
function beginGenerator() {
    choosePasswordLength();
    console.log(passwordLength);
    passwordSpecs();
    while ((userLC === false) && (userUC === false) && (userSC === false) && (userNum === false)) {
        alert("You must select at least one character type!");
        passwordSpecs();
    };
    createMasterCharacterArray();
    reset();
};

//Function to determine password length
function choosePasswordLength() {
    passwordLength = prompt("How long would you like your password to be? Please input a number between 8 and 128.");
    
    console.log(typeof passwordLength);
    passwordNumber = parseInt(passwordLength);
    passwordLength = passwordNumber;
    console.log(typeof passwordLength);

    while ((typeof passwordLength === "string") || (isNaN(passwordLength)) || (passwordLength <= 7 || passwordLength >= 129)){
        alert("Please select a number between 8 and 128");
        passwordLength = prompt("How long would you like your password to be? Please input a number between 8 and 128.");
        passwordNumber = parseInt(passwordLength);
        passwordLength = passwordNumber;
        console.log(typeof passwordLength);
    };
};

//Function to choose password specifications
function passwordSpecs() {
    userLC = confirm("Do you want lower case letters in your password?");
    console.log(userLC);
    userUC = confirm("Do you want upper case letters in your password?");
    console.log(userUC);
    userSC = confirm("Do you want special characters in your password?");
    console.log(userSC);
    userNum = confirm("Do you want numbers in your password?");
    console.log(userNum);
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

//Function to combine arrays based on user input, loop through the array, create a random password, and paste it to the text input
function createMasterCharacterArray (){
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
    //Generate a random number and loop through the master character array, adding each character at the corresponding randomly generated index number to the randomPassword string.
    for (let i = 0; i < passwordLength; i++) {
        randomIndexNumber = Math.floor(Math.random()*userChoices.length);
        randomPassword += userChoices[randomIndexNumber];
    };
    console.log(randomPassword);
    // Paste random password to the text input.
    document.getElementById("pass").value = randomPassword;
};