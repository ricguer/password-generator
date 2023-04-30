                                                                /* ============== GIVEN ASSIGNMENT CODE =============== */
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password  == undefined)
  {
    userCanceledPasswordGen();
  }
  else
  {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


                                                                /* ================== CHALLENGE CODE ================== */
const  MINIMUM_PASSWORD_LENGTH  =  8;                           /* Minimum Password Length                              */
const  MAXIMUM_PASSWORD_LENGTH  =  128;                         /* Maximum Password Length                              */
const  LOWERCASE_LETTERS        = "abcdefghijklmnopqrstuvwxyz";
const  UPPERCASE_LETTERS        = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const  NUMERIC_CHARACTERS       = "0123456789";
const  SPECIAL_CHARACTERS       = "!@#$%^&*()_+";


function userCanceledPasswordGen() 
{
  let passwordText = document.querySelector("#password");

  passwordText.value = "Password generation has been canceled. Press the \"" + 
                        generateBtn.textContent + "\" button to generate a new password.";
}

/**
 * This function generates a password given certain
 * requirements.
 * 
 * @returns The password generated following user criteria.
 */
function generatePassword() 
{
  let passwordLength;
  let includeLowercase;
  let includeUpperCase;
  let includeNumeric;
  let includeSpecialChars;
  let validCharacters  =  "";
  let newPassword      =  "";

  passwordLength       =  specifyPasswordLength();              /* Have user choose a length for thier password           */

  if (passwordLength  == undefined)
  {
    return;
  }

  includeLowercase     =  specifyLowerCase();                   /* Have user specify whether to include lowercase letters */

  if (includeLowercase  ==  true)
  {
    validCharacters += LOWERCASE_LETTERS;
  }
  else if (includeLowercase  ==  undefined)
  {
    return;
  }

  includeUpperCase    =  specifyUpperCase();                   /* Have user specify whether to include uppercase letters */

  if (includeUpperCase  ==  true)
  {
    validCharacters += UPPERCASE_LETTERS;
  }
  else if (includeUpperCase  ==  undefined)
  {
    return;
  }
  
  includeNumeric       =  specifyNumeric();                     /* Have user specify whether to include numeric chars     */

  if (includeNumeric  ==  true)
  {
    validCharacters += NUMERIC_CHARACTERS;
  }
  else if (includeNumeric  ==  undefined)
  {
    return;
  }

  includeSpecialChars  =  specifySpecialChars();                /* Have user specify whether to include special chars     */

  if (includeSpecialChars  ==  true)
  {
    validCharacters += SPECIAL_CHARACTERS;
  }
  else if (includeSpecialChars  ==  undefined)
  {
    return;
  }

  console.log(includeLowercase);
  console.log(includeUpperCase);
  console.log(includeNumeric);
  console.log(includeSpecialChars);
  console.log(validCharacters);

  for (let index = 0; index < passwordLength; index++) 
  {
    console.log(validCharacters.charAt(Math.floor(Math.random() * validCharacters.length)));
    newPassword += validCharacters.charAt(Math.floor(Math.random() * validCharacters.length));
  }

  console.log(newPassword);

  return newPassword;
}


/**
 * This function asks the user for a password length in 
 * accordance with the given criteria.
 * 
 * @returns {number} A valid length for the generated 
 *                   password.
 */
function specifyPasswordLength() 
{
  let passwordLength;

  do 
  { 
                                                                /* Prompt user to input length of generated password    */
    passwordLength = prompt("Specify length of password (must be at least 8 characters and no more than 128 characters):");

    if (passwordLength  ==  undefined)                          /* Check whether user answered or closed the prompt     */
    {
      return;                                                   /* Return if user left the prompt unanswered            */
    }

                                                                /* Check whether password length met criteria           */
    if ((passwordLength  <=  MINIMUM_PASSWORD_LENGTH)  ||
        (passwordLength  >=  MAXIMUM_PASSWORD_LENGTH)) 
    {
                                                                /* Alert user: password length did not meet criteria    */
      alert("Password did not meet the requirements. Must be at least 8 characters and no more than 128 characters.");
    }
    else
    {
      return passwordLength;
    }

  } while (passwordLength  !=  undefined);

  return passwordLength;
}


/**
 * This function asks the user whether lowercase letters
 * should be included in the new password.
 * 
 * @returns User's choice as to whether include lowercase 
 *          letters in generated password.
 */
function specifyLowerCase() 
{
  let includeLowercase;
  let userChoice;

  do
  {
    includeLowercase = prompt("Include lowercase letters? (y or n)");

    if (includeLowercase  ==  undefined)
    {
      return;
    }

    userChoice = charInclusionInputValidation(includeLowercase);

  } while (userChoice  == undefined);

  return userChoice;
}


/**
 * This function asks the user whether uppercase letters
 * should be included in the new password.
 * 
 * @returns User's choice as to whether include uppercase 
 *          letters in generated password.
 */
function specifyUpperCase() 
{
  let includeUppercase;
  let userChoice;

  do
  {
    includeUppercase = prompt("Include uppercase letters? (y or n)");

    if (includeUppercase  ==  undefined)
    {
      return;
    }

    userChoice = charInclusionInputValidation(includeUppercase);

  } while (userChoice  ==  undefined);

  return userChoice;
}


/**
 * This function asks the user whether numeric characters
 * should be included in the new password.
 * 
 * @returns User's choice as to whether include numeric 
 *          characters in generated password.
 */
function specifyNumeric() 
{
  let includeNumeric;
  let userChoice;

  do
  {
    includeNumeric = prompt("Include numeric characters? (y or n)");

    if (includeNumeric  ==  undefined)
    {
      return;
    }

    userChoice = charInclusionInputValidation(includeNumeric);

  } while (userChoice  ==  undefined);

  return userChoice;
}


/**
 * This function asks the user whether special characters
 * should be included in the new password.
 * 
 * @returns User's choice as to whether include special 
 *          characters in generated password.
 */
function specifySpecialChars() 
{
  let includeSpecial;
  let userChoice;

  do
  {
    includeSpecial = prompt("Include special characters? (y or n)");

    if (includeSpecial  ==  undefined)
    {
      return;
    }

    userChoice  =  charInclusionInputValidation(includeSpecial);

  } while (userChoice  ==  undefined);

  return userChoice;
}


/**
 * This function will return the user's choice as a
 * boolean. If the user did not answer in an
 * appropriate manner, the user's choice will be
 * taken as an undefined answer.
 * 
 * @param {string} userInput 
 * @returns User's choice to allow a character set.
 */
function charInclusionInputValidation(userInput) 
{
  if ((userInput.toLowerCase()  !=  "y") &&
      (userInput.toLowerCase()  !=  "n"))
  {
    alert("Must answer either \"y\" or \"n\".");
    return undefined;
  }
  else if (userInput.toLowerCase()  ==  "y")
  {
    return true;
  }
  else
  {
    return false;
  }
}
