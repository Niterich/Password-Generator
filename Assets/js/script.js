// click gen password
// prompt "how many chars" (8-128)
    // if not, stop prompts
// prompt "do you want lowercase, special chars, uppercase, numbers"
    // must select at least 1 of these or it will stop prompts
// display random password with all selected parameters
// can copy to clipboard

// will use arrays, objects, and if statements.

console.log("connected!");

let userChoices
    
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "~", ",", ".", ":", ";", "-", "_", "+", "="]
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const passwordLength = prompt("How long would you like your password to be? Please input a number between 8 and 128.")
if (passwordLength < 7 && passwordLength < 129) {

} else {
    alert("Please select a number between 8 and 128");
}

const userLC = confirm("Do you want lower case letters in your password?");
const userUC = confirm("Do you want upper case letters in your password?");
const userSC = confirm("Do you want special characters in your password?");
const userNum = confirm("Do you want numbers in your password?");





// function randomStr(len, arr) { 
//     var ans = ''; 
//     for (var i = len; i > 0; i--) { 
//         ans += arr[Math.floor(Math.random() * arr.length)]; 
//     } 
//     return ans; 
// }