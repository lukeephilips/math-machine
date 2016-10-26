$(document).ready(function() {
//factorial jQuery
  $("button#factorial").click(function() {
    var input = parseInt($("#input").val());
    output = factorial(input);
    $("#output").text(output);
  });

  //prime tester jQuery
    $("button#prime").click(function() {
      var input = parseInt($("#input").val());
      output = prime(input);
      $("#output").text(output);
    });

  //palindrome test jQuery

  $("button#palindrome").click(function() {
    inputString = $("#inputString").val();
    createBackwardString(inputString);
    outputString = palindromeTest(inputString, backwardString);
    $("#outputString").text(outputString);
  });
//palindrome builder jQuery
  $("button#palindromeBuilder").click(function() {
    inputString = $("#inputString").val();
    createBackwardString(inputString);
    outputString = makePalindrome(inputString, backwardString);
    $("#outputString").text(newPalindrome);
  });

//refresh jQuery
  $(".refresh").click(function(){
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

// prime logic
var prime = function(input) {
  isPrime = true;
  for (i = 2; i < input; i++) {
    var remainder = input % i;
    if (remainder === 0) {
      isPrime = false;
      return "Not Prime"
    }
  }

  return "Prime";
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
