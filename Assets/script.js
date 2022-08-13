// Assignment Code
var generateBtn = document.querySelector("#generate");

//object with criteria and arrays
var criteriaArrays = {
  length : 0,
  upperCase : true,
  upperCaseLetters : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',],
  lowerCase : true,
  lowerCaseLetters : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numeric : true,
  numbers : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialCharacters : true,
  special : [' ', ' ! ', ' " ', ' # ', ' $ ', ' % ', ' & ', " ' ", ' ( ', ' ) ', ' * ', ' + ', ' , ', ' - ', ' . ', ' / ', ' : ', ' ; ', ' < ', ' = ', ' > ', ' ? ', ' @ ', ' [ ', ' \ ', ' ] ', ' ^ ', ' _ ', ' ` ',' { ', ' } ', ' ~ ',],
}
// Write password to the #password input
function writePassword() {

  function passwordLength() {
    var i = window.prompt("How long will your password be (8-128)?");

    if (i >= 8 && length <=128){
      criteriaArrays.length = i;
    } else {
      window.alert("Please input a number between 8 and 128.")
      passwordLength();
      return;
    }
  }

  function passwordUpper() {
    var i= window.prompt("Will your password include upper case letters? Yes/No?");

    i = i.toLowerCase();

    if (i == "yes"  || i == "y") {
      criteriaArrays.upperCase = true;
    }
    else if (i == "no" || i == "n") {
      criteriaArrays.upperCase = false;
    } else {
      window.alert("Please input Yes/No (Y/N).")
      passwordUpper();
      return;
    }
  }

  function passwordLower() {
    var i = window.prompt("Will your password include lower case letters? Yes/No?");

    i = i.toLowerCase();

    if (i == "yes"  || i == "y") {
      criteriaArrays.lowerCase = true;
    }
    else if (i == "no" || i == "n") {
      criteriaArrays.lowerCase = false;
    } else {
      window.alert("Please input Yes/No (Y/N).")
      passwordLower();
      return;
    }
  }

  function passwordNumeric() {
    var i = window.prompt("Will your password include numbers? Yes/No?");

    i = i.toLowerCase();

    if (i == "yes"  || i == "y") {
      criteriaArrays.numeric = true;
    }
    else if (i == "no" || i == "n") {
      criteriaArrays.numeric = false;
    } else {
      window.alert("Please input Yes/No (Y/N).")
      passwordNumeric();
      return;
    }
  }

    function passwordSpecChar() {
      var i = window.prompt("Will your password include special characters? Yes/No?");
  
      i = i.toLowerCase();
  
      if (i == "yes"  || i == "y") {
        criteriaArrays.specialCharacters = true;
      }
      else if (i == "no" || i == "n") {
        criteriaArrays.specialCharacters = false;
      } else {
        window.alert("Please input Yes/No (Y/N).")
        passwordSpecChar();
        return;
      }
    }
  

  passwordLength();
  passwordUpper();
  passwordLower();
  passwordNumeric();
  passwordSpecChar();

  //create an array for the characters that we can generate from
  var characterArray = [];

  if (criteriaArrays.upperCase === true) {
    characterArray = characterArray.concat(criteriaArrays.upperCaseLetters);
  }
  if (criteriaArrays.lowerCase === true) {
    characterArray = characterArray.concat(criteriaArrays.lowerCaseLetters);
  }
  if (criteriaArrays.numeric === true) {
    characterArray = characterArray.concat(criteriaArrays.numbers);
  }
  if (criteriaArrays.specialCharacters === true) {
    characterArray = characterArray.concat(criteriaArrays.special);
  }
  
  function generatePassword(){

    //create an array
    var passwordArray = [];

    //iterate through the array
   

      //randomly select from true criteria

      //select character based on criteria

    //turn array into string

    return password;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);