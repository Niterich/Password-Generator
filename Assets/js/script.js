// click gen password
// prompt "how many chars" (8-128)
    // if not, stop prompts
// prompt "do you want lowercase, special chars, uppercase, numbers"
    // must select at least 1 of these or it will stop prompts
// display random password with all selected parameters
// can copy to clipboard

// will use arrays, objects, and if statements.

console.log("connected!");

//Declare the variables i will use
let userChoices = [];
let randomPassword = "";
let arrayLC = [];
let arrayUC = [];
let arraySC = [];
let arrayNum = [];
let randomIndexNumber = 0;

//Declare the arrys with the various character options    
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "~", ",", ".", ":", ";", "-", "_", "+", "="]
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Prompt user for a password length and dont let them proceed until a valid number is chosen
let passwordLength = prompt("How long would you like your password to be? Please input a number between 8 and 128.")
while (passwordLength <= 7 || passwordLength >= 129) {
    alert("Please select a number between 8 and 128");
    passwordLength = prompt("How long would you like your password to be? Please input a number between 8 and 128.");
    console.log(passwordLength);
} 

console.log(passwordLength);

const userLC = confirm("Do you want lower case letters in your password?");
console.log(userLC);
const userUC = confirm("Do you want upper case letters in your password?");
console.log(userUC);
const userSC = confirm("Do you want special characters in your password?");
console.log(userSC);
const userNum = confirm("Do you want numbers in your password?");
console.log(userNum);

if (userLC) {
    arrayLC = userChoices.concat(lowerCase);
    userChoices = arrayLC;
    console.log(arrayLC);
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
if (userSC) {
    arrayNum = userChoices.concat(numbers);
    userChoices = arrayNum;
    console.log(userChoices);
};

console.log(userChoices);

for (let i = 0; i < passwordLength; i++) {
    randomIndexNumber = Math.floor(Math.random()*userChoices.length);
    randomPassword += userChoices[randomIndexNumber];
    console.log(randomIndexNumber);
}

console.log(randomPassword);
