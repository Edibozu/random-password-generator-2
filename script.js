// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //ALL YOUR CODE GOES HERE
  console.log("Hey, You clicked me!");

  // Empty arrays that will eventually store the characters that the user chooses and then the final password.
  var chosenCharacters = [];
  var finalPassword = [];

  // Possible character variables.
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var special = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "/",
    "<",
    ">",
    "?",
    "+",
    "=",
    ":",
    ";",
    "[",
    "]",
    "{",
    "}",
    "~",
  ];

  // Pormpting the user with selecting how many characters they would like their password to contain.
  var passwordLength = prompt(
    "How many characters would you like your password to contain?"
  );
  console.log(passwordLength);
  // Password has to contain between 8 and 128 characters.
  if (passwordLength > 7 && passwordLength < 129) {
  } else {
    // If password has less than 8 or more than 128 characters, users will be alerted with this message.
    alert("Password length has to be between 8 and 128 characters!");
  }

  // Prompts the user to select whether they would like to add lowercase letters in their password.
  var confirmLowerCase = confirm(
    "Would you like your password to contain lowercase letters?"
  );

  // If they do choose to include lowercase characters, they will be included into the chosenCharacters array, that was formerly empty.
  if (confirmLowerCase) {
    chosenCharacters = chosenCharacters.concat(lowerCase);
    console.log(chosenCharacters);
  }

  return "Password will go here.";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
