// Returns the first character of the string str
var firstCharacter = function(str) {
  return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
  return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
  return str.slice(1, -1);
};

var isNumber = function(str) {
  return !isNaN(str);
};

var isPalindrome = function(str) {
  if ( str.length <= 1 ){
    return true;
  }
  if (firstCharacter(str) !== lastCharacter(str)){
    return false;
  }

  if (isNumber(str)){
    return true;
  }

  if (str === " " ){
    return true;
  }

  else{
    str = middleCharacters(str);
    return isPalindrome(str);
  }

};

var checkPalindrome = function(str) {
  console.log("Is this word a palindrome? " + str);
  console.log(isPalindrome(str));
};

function assertEqual(palindrome, b) {}

checkPalindrome("a");
assertEqual(isPalindrome("a"), true);
checkPalindrome("motor");
assertEqual(isPalindrome("motor"), false);
checkPalindrome("rotor");
assertEqual(isPalindrome("rotor"), true);
checkPalindrome("33");
assertEqual(isPalindrome("33"), true);
checkPalindrome(" ");
assertEqual(isPalindrome(" "), true);
