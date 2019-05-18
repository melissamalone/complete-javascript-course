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
/* Type coercion
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
//alert(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);
// the input from this pop up with give the text in the console, and save it as what the variable was defined as 
//var lastName = prompt('What is her last Name?');
/*console.log(firstName + ' ' + lastName);
console.log (lastName); */

//Basic Operators- functions written in a special way in javascript
/* var
yearMelissa = 2018 - 22;
now = 2018
ageMelissa = 22
ageKevin = 25


console.log (yearMelissa);   
var yearKevin = now - 24
console.log (yearKevin);
console.log(now + 2);

//Logic operators
var kevinOlder = ageKevin < ageMelissa;
console.log(kevinOlder);

//typeof operator
console.log(typeof kevinOlder);
console.log(typeof now);
var x;
console.log(typeof x);
console.log(typeof 'Melissa is a hoe'); */

//Operator precedence
/*
var now = 2019;
var yearMelissa = 1996;
var fullAge = 21;
//multiple operators
var isFullAge = now - yearMelissa >= fullAge; //true
console.log(isFullAge);
//grouping
var ageMelissa = now - yearMelissa;
var ageKevin = 25;
var average = (ageMelissa + ageKevin) / 2;
console.log(average);

//multiple assignments
var x, y;
x = y = (3 +5) * 4 - 6; // x + 26
console.log(x, y);

var b;
var a = (b)
console.log(a);

//more operators
x = x * 2; //same as below
x *=2
console.log(x);
/* x = x + 1 
x += 1 same as below 
x++
console.log(x);
*/
// Coding Challenge 1!!
/*
var
massMelissa = 100;
var massKevin = 300;
var heightMelissa = 1.5;
var heightKevin = 2;

var bmiMelissa = massMelissa / (heightMelissa * heightMelissa);
var bmiKevin = massKevin / (heightKevin * heightKevin); 
console.log (bmiMelissa);
console.log(bmiKevin);
var greaterBmi = bmiKevin > bmiMelissa;
console.log(greaterBmi);
console.log('Is Kevin\'s BMI greater than Melissa\'s? ' + greaterBmi);

if (bmiMelissa > bmiKevin) {
    console.log ('Melissa\'s BMI is higher than Kevin\'s')
} else {
     console.log ('Kevin\'s BMI is higher than Melissa\'s')
}
*/

/*If/Else Statements
var firstName = 'Melissa';
var civilStatus = 'single';
//if this is true, it will log this to console
if (civilStatus === 'married') {
    console.log(firstName + ' is married! ');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = false

if (isMarried) {
    console.log(firstName + ' is married! ');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
*/

//Boolean Logic
/*
var firstName = 'Melissa'
var age = 26

if (age < 13) {
    console.log(firstName + ' is a girl.');
} else if (age >= 13 && age < 20 ) {
    console.log(firstName + ' is a teenager.');
} else if (age > 20 && age < 30) {
    console.log (firstName + ' is a young woman.')
}
else {
    console.log (firstName + ' is a woman.');
}
*/

//Ternary Operators and Switch Statements
//allows us to write an if/else statement all in one line
/*
var firstName = 'Melissa';
var age = 22;
//Ternary operator
age >= 21 ? console.log(firstName + ' drinks wine.') : console.log(firstName + ' drinks juice.');
*/
/*var drink = age >= 21 ? 'wine' : 'juice';
console.log(drink);

if (age >= 21) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
console.log(drink);
*/

//switch statement
/*
var job = 'dancer';
switch (job) {
    case 'dancer':
    case 'performer':
        console.log(firstName + ' dances at halftime.');
        break;
    case 'driver':
        console.log(firstName + 'drives an uber.');
        break;
    case 'designer':
        console.log(firstName + ' creates cool websites.');
        break;
    default: 
        console.log(firstName + ' does something else.')
}


var age = 22;
switch(true){
    case age < 13:
        console.log(firstName + ' is a girl.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age > 20 && age < 30:
        console.log(firstName + ' is a young woman.')
        break;
    default:
        console.log(firstName + ' is a woman.')
}





*/
//Truthy and Falsy values and equality operators-how they come out in an if/else statement

// falsy values = undefined, null, 0, '', NaN (not a number)
//truthy values: NOT falsy
/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined.')
} else {
    console.log('Variable has not been defined.')
}

//Equality operators
if (height === '23') {
    console.log('The == operator does type coercion! ');
} */
//converts the variable- the string is the same as the number entered above




/***** Coding Challenge 2!! *****/

//Melissa's scores: 89, 120, 103
//Kevin's scores: 116, 94, 123
/*
var mAverage = (89 + 120 + 103) / 3;
var kAverage = (116 + 94 + 123) / 3;
if (mAverage > kAverage) {
    console.log('Melissa has the higher average of  ' + mAverage);
} else if (kAverage > mAverage) {
    console.log('Kevin has the higher average of ' + kAverage);
} else if (mAverage = kAverage) {
    console.log('There is a tie between Melissa and Kevin with an average of ' + mAverage);
}    


var maryAverage = (97 + 134 + 105) / 3;
if (mAverage > kAverage && mAverage > maryAverage) {
    console.log('Melissa has the higher average of  ' + mAverage);
} else if (kAverage > mAverage && kAverage > maryAverage) {
    console.log('Kevin has the higher average of ' + kAverage);
}   else if (maryAverage > mAverage && maryAverage > kAverage) {
    console.log('Mary is the winner with an average of ' + maryAverage);
    }
*/

/*
var mScore = (89 + 120 + 103) / 3;
var kScore = (116 + 94 + 123) / 3;
var maryScore = (97 + 134 + 105) / 3;

switch (mScore) {
    case mScore > kScore && mScore > maryScore:
        console.log('Melissa is the winner with ' + mScore + ' points.');
        break;
    case mScore < kScore && mScore < maryScore:
        console.log('Kevin is the winner with ' + kScore + ' points.');
    default:
        console.log('Mary is the winner with ' + maryScore + ' points.');
        
}
*/





//Functions
//parameter is birthYear
//title of function is calculateAge
/*
function calculateAge(birthYear) {
    return 2019 - birthYear;
} 
 
var ageMelissa = calculateAge(1996);
var ageKevin = calculateAge(1993);
var ageDawn = calculateAge(1969);

console.log(ageMelissa, ageDawn, ageKevin);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
console.log(firstName + ' is already retired.')
    }
    
}
//below is calling the function, using the title and entering the variables that match the parameters you wanted to use
yearsUntilRetirement(1996, 'Melissa');
yearsUntilRetirement(1940, 'Phillip');
yearsUntilRetirement(1993, 'Kevin');
*/



/***********************************
//Function Statements and Expressions
*/

//Function Declaration
/*
function whatDoYouDo (job,firstname) {
    
}
*/
//Function expression
//pieces of code that return a value
/*
var whatDoYouDo = function(job, firstName) {
switch(job) {
    case 'teacher':
            return firstName + ' teaches kids how to code.';
        //when we return the value, it finishes the function so we don't need to break
    case 'driver':
            return firstName + ' drives a limo. ';
    case 'designer':
            return firstName + ' makes pretty pictures.';
    default:
            return firstName + ' does something else.';
}
}

console.log(whatDoYouDo('driver', 'Melissa'));
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('retired', 'Kevin'));

//Function statements do not produce a value
*/









/*****************
Arrays
*/
//collections of variables that you will define, zero based (starts with 0)
//initialize new array
/*
var names = ['Melissa', 'Kevin', 'Jane'];
var years = new Array(1996, 1993, 1950);

console.log(names.length);
//shows us how many variables in the collections
console.log(names[0]);

//mutate array data
names[2] = 'Ben';
console.log(names);

names[names.length] = 'Mary';
//adds this new variable as the last one in the list, position 3 in this case
console.log(names);

//Different data types
var melissa = ['Melissa', 'Malone', 1996, 'clerk', false];

melissa.push('pink');
//adds new variable to list of "melissa"
melissa.unshift('Miss');
//adds to beginning of list
melissa.pop()
//removes last item from list
melissa.shift()
//removes first item from list
console.log(melissa);

console.log(melissa.indexOf(1996));
//returns position of specified variable in the list, useful to test if element is in array or not

var isDesigner = melissa.indexOf('designer') === -1 ? 'Melissa is NOT a designer' : 'Melissa IS a designer';
//this works because when you ask the position of a variable that is not in the collection, it comes back with -1. So when we ask for a variable that isn't in there and if its equal to -1 in the above function, we get the first result
console.log(isDesigner);
*/









/***************************
Coding Challenge 3!
*/
var billOne = 124
var billTwo = 48
var billThree = 268


//or
/*
function tipCalculator(bill, tipPercent) {
    return bill * tipPercent; }

var  tipOne = tip(billOne, .15);
 var tipTwo = tip(billTwo, .2);
 var tipThree = tip(billThree, .1);
         
var tips = [tipOne, tipTwo, tipThree];

console.log (tips);

function total(bill,tip) {
    return bill + tip;
}

var totalOne = 124 + tip(124, .15)
var totalTwo = 48 + tip(48,.2)
var totalThree = 268 + tip(268, .1)

var totals = [totalOne, totalTwo, totalThree];


console.log(totals);
*/

function tipCalculator(bill) {
var percentage;
    if (bill < 50) {
percentage = .2;
    } else if (bill >= 50 && bill < 200) {
percentage = .15;
    } else  {
        percentage = .1;
    }
return percentage * bill;
}

console.log(tipCalculator(124));
var tips = [tipCalculator(124), tipCalculator(48), tipCalculator(268)]

console.log(tips);
var bills = [124, 48, 268];
var finalBills = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(finalBills);
    



/*
function calculateAge(birthYear) {
    return 2019 - birthYear;
} 
 
var ageMelissa = calculateAge(1996);
var ageKevin = calculateAge(1993);
var ageDawn = calculateAge(1969);

console.log(ageMelissa, ageDawn, ageKevin);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
console.log(firstName + ' is already retired.')
    }
*/























