// Assignment Code

//!   Below is a list of all the variables that are used in the javascript code, to make all of the commands like alert, confirm, and prompts.
var lowerCase;
var upperCase;
var numbers;
var specialChar;
var passwordLength;
var generateLc;
var generateUc;
var generateNum;
var generateSc;
var randomNumber;
var confirmNum;
var confirmUc;
var confirmLc;
var confirmSc;
var randomUc;
var randomLc;
var randomSc;
var chars;

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//var randomPassword = confirm("generate a random password?");

//var letters = prompt("What letters do you want to use?");

//! first function is for asking questions to the person who arrives at the web page.
function askQuestion(){
 if( confirm("Do you want to generate a random password?")){
   makePassword();
 } else{
   alert("Goodbye");
 }
}
askQuestion();

//! this should create a string element of lower case letters to  be chosen from, so that they can then be inputted into the password.//
//TODO this function isnt working and, the read out says that it cant read the string. spend some time trying to figure this out, it will help with the other letter requests for the password as well.
function generateLc(length){
  //chars = 'abcdefghijklmnopqrstuvwxyz'();
  //var random_string = '';
  //if(length > 0){
   // for(var i=0; i < length; i++){
   //   random_string += chars.charAt(Math.floor(Math.random() * Math.floor(chars.length)));
   // }
  //}
}


//! this function generates the Upper case letters for the password.
function generateUc(){
  //randomUc = chars.charAt(Math.floor(Math.random()* 26) + 1);
  //console.log(randomUc)
}

//! This number function will create a random whole number to be inserted as part of the password.
function generateNum(){
  randomNumber = Math.floor((Math.random() * 150) +1);
  console.log(randomNumber);

}
//! function is for generating the special characters for the password if the person wants them included.
function generateSc(){

}


//! This function is to help develop the password, that is generated based off of all of the specifications from the client. The confirm statements will help walk the person through the necessary steps for building their new password. When they select something they will continue to make more selections, and when they dont they will recieve an alert.
function makePassword(){
  if(confirm("do you want to include lowercase letters?")){
    generateLc();
    console.log ("your lower case letter is:" + randomLc);
  } else{
    alert("pshh...who needs lowercase letters")
  }
  
  if( confirm("do you want to include upper case letters?")){
    generateUc();
    console.log ("your random uppercase letter is:" + randomUc);
  } else{
    alert("pshh...who needs upper case letters")
  }
  
  if( confirm("do you want to include numbers in your password?")){
    generateNum();
    console.log ("your random number is:" + randomNumber);
  } else{
    alert("pshh...who needs numbers")
  }
  if( confirm("do you want any special characters in your password?")){
    generateSc();
    console.log ("your random special character is:" + randomSc);
  } else{
    alert("pshh...who needs those special characters")
  }
  alert("your password is:" + randomLc + randomUc + randomNumber + randomSc);
      //confirmNum = confirm("your random number is:" + randomNumber); (may work later, keep for now.)
}