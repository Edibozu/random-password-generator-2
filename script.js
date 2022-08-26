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

  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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

  // Prompts the user to chhose whether they'd like to include lowercase letters in their password.
  var confirmLowerCase = confirm("Click OK to include lowercase letters.");
  // If they do choose to include lowercase characters, they will be included into the chosenCharacters array, that was formerly empty.
  if (confirmLowerCase) {
    chosenCharacters = chosenCharacters.concat(lowerCase);
    console.log(chosenCharacters);
  }

  // Prompts the user to chhose whether they'd like to include uppercase letters in their password.
  var confirmUpperCase = confirm("Click OK to include uppercase letters.");
  if (confirmUpperCase) {
    chosenCharacters = chosenCharacters.concat(upperCase);
    console.log(chosenCharacters);
  }

  // Prompts the user to chhose whether they'd like to include special characters in their password.
  var confirmSpecial = confirm("Click OK to include special characters.");
  if (confirmSpecial) {
    chosenCharacters = chosenCharacters.concat(special);
    console.log(chosenCharacters);
  }

  // Prompts the user to chhose whether they'd like to include numbers in their password.
  var confirmNumbers = confirm("Click OK to include numbers.");
  if (confirmNumbers) {
    chosenCharacters = chosenCharacters.concat(numbers);
    console.log(chosenCharacters);
  }

  return "Password will go here.";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
