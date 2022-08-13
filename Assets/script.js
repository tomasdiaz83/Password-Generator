// Assignment Code
var generateBtn = document.querySelector("#generate");

var criteriaArrays = {
  upperCaseLetters : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',],
  lowerCaseLetters : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numbers : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  special : [' ', ' ! ', ' " ', ' # ', ' $ ', ' % ', ' & ', " ' ", ' ( ', ' ) ', ' * ', ' + ', ' , ', ' - ', ' . ', ' / ', ' : ', ' ; ', ' < ', ' = ', ' > ', ' ? ', ' @ ', ' [ ', ' \ ', ' ] ', ' ^ ', ' _ ', ' ` ',' { ', ' } ', ' ~ ',]
}

//object with passwordCriteria
var passwordCriteria = {
  upperCase : true,
  lowerCase : true,
  numeric : true,
  specialCharacters : true,
  length : 8
}

// Write password to the #password input
function writePassword() {

  function passwordLength() {
    var i = window.prompt("How long will your password be (8-128)?");

    if (i >= 8 && length <=128){
      passwordCriteria.length = i;
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
      passwordCriteria.upperCase = true;
    }
    else if (i == "no" || i == "n") {
      passwordCriteria.upperCase = false;
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
      passwordCriteria.lowerCase = true;
    }
    else if (i == "no" || i == "n") {
      passwordCriteria.lowerCase = false;
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
      passwordCriteria.numeric = true;
    }
    else if (i == "no" || i == "n") {
      passwordCriteria.numeric = false;
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
        passwordCriteria.specialCharacters = true;
      }
      else if (i == "no" || i == "n") {
        passwordCriteria.specialCharacters = false;
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

  //fill up characterArray
  for (var x in passwordCriteria){
    for (var y in criteriaArrays){
      characterArray = characterArray.concat(criteriaArrays[x]);
      // if (passwordCriteria[x] && x === y){
      //   characterArray = characterArray.concat(criteriaArrays[x]);
      // }
    }
  }

  console.log(characterArray);
  // if (passwordCriteria.upperCase){
  //   criteriaArray.concat(upperCaseLetters);
  // }
  // if (passwordCriteria.lowerCase){
  //   criteriaArray.concat(lowerCaseLetters);
  
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