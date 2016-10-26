$(document).ready(function() {

  $("button#factorial").click(function() {
    var input = parseInt($("#input").val());
    console.log(input);
    output = factorial(input);
    $("#output").append(output);
  });

  $("button#palindrome").click(function() {
    inputString = $("#inputString").val();
    // console.log(inputString);
    outputString = stringToArray(inputString);
    // palindromeTest(inputArray);
  });

  $("#refresh").click(function(){
    location.reload();
  });

});

// factorial machine
var output = 0;

var factorial = function(input){
  var total = 1;

  for (i = input; i>0; i--) {
    console.log(i);
  total = total * i;
  };
  return total;
};

// palindrome test
var outputString = "";
var inputArray = [];
var inputString = "";
var backwardArray = [];
var backwardString = "";
var stringToArray = function(inputString) {
  for (i = 0; i<inputString.length; i++) {
    inputArray.push(inputString[i]);
  };
  for (i = inputArray.length - 1; i >= 0; i--) {
    backwardArray.push(inputArray[i]);
  console.log(backwardArray);
  };
  backwardString = backwardArray.join("");
  if (inputString === backwardString) {
    $("#outputString").text("Your string is a palindrome");
  } else {
    $("#outputString").text("Your string is not a palindrome");
  }
};

// var inputArray = ["a", "b", "c", "d"];
// var temp = "";
// var backwardArray = function(inputArray) {
//   for (i = inputArray.length - 1; i >= 0; i--) {
//     backWard.push(inputArray[i]);
    // temp = inputArray[i];
    // inputArray[i] = inputArray[inputArray.length-(1+i)];
    // inputArray[inputArray.length-(1+i)] = inputArray[i];

    // alert(inputArray);

//   };
//   // console.log(newArray);
// };
// alert(inputArray);
