// This is still a repeating myself program. I am not yet to the DRY
// stage but I am getting there!
// Also a ton of this code is my practice and credit is due to Team Treehouse, so thanks!

// The Mad Libs game!


console.log("Begin");
var questions = 3;
var questionsLeft = " [" + questions + " questions left]"
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
var questionsLeft = " [" + questions + " questions left]"
var verb = prompt('Please type a verb' + questionsLeft);
questions -= 1;
var questionsLeft = " [" + questions + " questions left]"
var noun = prompt('Please type a noun' + questionsLeft);
alert('All done. Ready for the message?');
var sentence = "<h2>There once was a " + adjective;
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';
document.write(sentence);
console.log("End");



// ANOTHER COOL GAME WHERE YOU ASK FOR A NUMBER AND A SECOND ONE AND GIVE A RANDOM NUMBER IN BETWEEN THEM


var input1 = prompt("Please type a starting number");
var bottomNumber = parseInt(input1);
var input = prompt("Please type a number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + "</p>";
document.write(message);



// This is here is the first example of my if else statements
//But basically it's kinda like a guessing number game


var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt("Try again. The number I'm thinking of is more than " + guess);
   if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
  }
} else if (parseInt(guess) > randomNumber) {
  var guessLess = prompt("Try again. The I am thinking of is less than " + guess);
}
  if (parseInt(guessLess) === randomNumber) {
    correctGuess = true;
}
if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

// This is the golden crown conditional stage
// quiz begins, no answers correct

// starts at 0
var correct = 0;

// ask questions
var answer1 = prompt("Name a programming language that's also a gem");
if ( answer1.toUpperCase() === 'RUBY' ) {
 correct += 1;
}
var answer2 = prompt("Name a programming language that's also a snake");
if ( answer2.toUpperCase() === 'PYTHON' ) {
 correct += 1;
}
var answer3 = prompt("What language do you use to style web pages?");
if ( answer3.toUpperCase() === 'CSS' ) {
 correct += 1;
}
var answer4 = prompt("What language do you use to build the structure of web pages?");
if ( answer4.toUpperCase() === 'HTML' ) {
 correct += 1;
}
var answer5 = prompt("What language do you use to add interactivity to a web page?");
if ( answer5.toUpperCase() === 'JAVASCRIPT' ) {
 correct += 1;
}

// output results
document.write("<p>You got " + correct + " out of 5 questions correct.<p>");

// output rank
// also trying to see about using > or < symbols
if ( correct === 5 ) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if (correct >= 3) {
  document.write("<p><strong>You earned a silver crown.</strong></p>");
} else if (correct >= 2) {
  document.write("<p><strong>You earned a bronze crown.</strong></p>");
} else {
  document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}


// More conditional

// declare program variables
var num1
var num2
var message
// announce the program
alert("Let's do some math!");

// collect numeric input
num1 = prompt("Please type a number");
num1 = parseFloat(num1);
num2 = prompt("Please type another number");
num2 = parseFloat(num2);
  if ( num2 === 0) {
    alert("The second number is 0. You can't divide by zero. Reload and try again.");
}
  if ( isNaN(num1) || isNaN(num2)) {
    alert("At least one of the values you typed is not a number. Reload and try again.");
}
// build an HTML message
message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);

// write message to web page
document.write(message);
