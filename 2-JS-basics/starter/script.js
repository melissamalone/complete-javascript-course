/*
Lecture about variables and datatypes

*/
/*
var firstName = 'Melissa';
console.log(firstName);

var lastName = 'Malone';
var age = 22;

var fullAge = true;
console.log (fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable Naming Rules

var a3years = 3;
*/

/*************
Variable mutation and type coercion
*/
// Type coercion
var firstName = 'Melissa';
var age = '22';

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'student';
 var isMarried = false; 

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);

//Variable Mutation
age = 'twenty two';
job = 'driver'; 

//Pop up with below text
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);
// the input from this pop up with give the text in the console, and save it as what the variable was defined as 
var lastName = prompt('What is her last Name?');
console.log(firstName + ' ' + lastName);
console.log (lastName);














