// Assignment code here
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specials = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function generatePassword() {
  // Prompt for password criteria
  // Test for atleast one criteria
  while (!lowerCaseTest && !upperCaseTest && !numbersTest && !specialsTest) {
    window.alert("Please choose atleast one criteria.");
    var lowerCaseTest = confirm("Do you want lowercase letters in your password?");
    var upperCaseTest = confirm("Do you want uppercase letters in your password?");
    var numbersTest = confirm("Do you want numbers in your password?");
    var specialsTest = confirm("Do you want special characters in your password?");
  }

  // Prompt Password Length
  var passwordLength = parseInt(prompt("How many characters do you want your password to be? (Enter 8-128)"));

  // Get a length in the correct range:
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Please enter a length between 8 and 128:"));
    console.log("oopsie");
  }

  // Generate Password
  var newPass = [];
  var newPassArray = "";
  while (newPass.length < passwordLength) {
    if (lowerCaseTest) newPassArray = newPassArray.concat(lowerLetters);
    if (upperCaseTest) newPassArray = newPassArray.concat(upperLetters);
    if (numbersTest) newPassArray = newPassArray.concat(numbers);
    if (specialsTest) newPassArray = newPassArray.concat(specials);

    for (var i = 0; i < passwordLength; i++) {
      var randChar = newPassArray[Math.floor(Math.random() * newPassArray.length)];
      newPass.push(randChar);
    }
    var joinPass = newPass.join("");
    return joinPass;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
