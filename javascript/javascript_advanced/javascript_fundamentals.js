//container to store data, [data types] are 
//number, string, boolean, undefined(no value) , null
//[dynamic typing], not required to declare type in code.
//javascript on the [fly converts], type conversion.
var name = 'superman';
console.log(name);
console.log(name + 100);
//javascript: [prompt window and alert window]
lastName = prompt('What is the last name?');
alert('his name? ' + lastName + '.');
//javascript: operators
var now = 2016, age = 29;
var birthYear = now - age;
birthYear++;
birthYear += 29;
console.log(birthYear);
//javascript: conditional statements
var isMarried = 'yes';
if (isMarried === 'yes') {
    console.log(lastName + ' is married!');
} else {
    console.log(lastName + ' will hopefully marry soon :)');
}
//[type conversion] will happen when 23=='23' but not below case
if (23 === "23")
    console.log('Something to print...');
var job = 'teacher';
job = prompt('What does john do?');
switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}
//operators of logic statements
//[AND &&, OR || and not !]

//input into Functions and output is out.
function yearsUntilRetirement(name, year) {
    var age = 2016 - year;
    var retirement = 65 - age;
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
}
yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
// Statements and expressions
/* function statements doesnot produce some value
function someFun(par) {
    //code
}
function expression produce some value
var someFun = function(par) {
    //code
} */
// Arrays is collection of data
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);
console.log(names[2]);
names[1] = 'Ben';
console.log(names);
//different data types
var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');//adds at end
john.unshift('Mr.');//adds at begin
john.pop();
john.shift();
console.log(john);
if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.');
}
//Objects
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};
console.log(john.lastName);
console.log(john['lastName']);
//variable container
var xyz = 'job';
console.log(john[xyz]);
//updation
john.lastName = 'Miller';
john['job'] = 'programmer';
console.log(john);
//different way of creation of object
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;
console.log(jane);
//object methods
var john = {
    yearOfBirth:1988,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    } //function expression
};
console.log(john.calculateAge());
console.log(john.family[1]);
//creating property inside method
var mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};
mike.calculateAge();
console.log(mike);
//loops
for (var i = 0; i < 10; i++) {
    console.log(i);
}
/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}
// break and continue
for (var i = 1; i <= 5; i++) {
    console.log(i);   
    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }   
    console.log(i);
}