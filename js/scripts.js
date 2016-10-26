$(document).ready(function() {
//factorial jQuery
  $("button#factorial").click(function() {
    var input = parseInt($("#input").val());
    console.log(input);
    output = factorial(input);
    $("#output").append(output);
  });
  //palidrome test jQuery

  $("button#palindrome").click(function() {
    inputString = $("#inputString").val();
    createBackwardString(inputString);
    outputString = palindromeTest(inputString, backwardString);
    $("#outputString").text(outputString);
  });
//palindrom builder jQuery
  $("button#palindromeBuilder").click(function() {
    inputString = $("#inputString").val();
    createBackwardString(inputString);
    outputString = makePalindrome(inputString, backwardString);
    $("#outputString").text(newPalindrome);
  });

//refresh jQuery
  $("#refresh").click(function(){
    location.reload();
  });

});

// factorial logic
var factorial = function(input){
  var total = 1;

  for (i = input; i>0; i--) {
    total *= i;
  };
  return total;
};

//create backwardString for palindrome functions

var createBackwardString = function(inputString) {
  backwardString = "";

  for (i = inputString.length - 1; i >= 0; i--) {
  backwardString += inputString[i];
  };
};

// palindrome tester

var palindromeTest = function(inputString, backwardString) {
  if (inputString === backwardString) {
  return "Your string is a palindrome";
}
else {
  return "Your string is not a palindrome";
}
};

//palindrome builder
var makePalindrome = function(inputString, backwardString) {
   newPalindrome = inputString + backwardString;
};
