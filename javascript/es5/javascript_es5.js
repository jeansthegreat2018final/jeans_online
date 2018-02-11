// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);
// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller'; //error attempt to change const var
console.log(name6);
/**************************************************/
// ES5
function driversLicence5(passedTest) {   
    if (passedTest) {					//function scoped
        var firstName = 'John';
        var yearOfBirth = 1990;
    }    
    console.log(firstName + ', born in ' + yearOfBirth + 
	', is now officially allowed to drive a car.');
}
driversLicence5(true);
// ES6
function driversLicence6(passedTest) {   
    let firstName;						//block scoped
    const yearOfBirth = 1990;  
    if (passedTest) {
        firstName = 'John';
    }   
    console.log(firstName + ', born in ' + yearOfBirth + 
	', is now officially allowed to drive a car.');
}
driversLicence6(true);
console.log(nameVal); //error of variable undefined
/**************************************************/
let i = 23;	//block scoped
for (let i = 0; i < 5; i++) {
    console.log(i);	//5
}
console.log(i);	//23
/////////////////////////////////////////////////////
// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
console.log(a + b);	//error not defined
console.log(c);
// ES5
(function() {
    var c = 3;
})();
console.log(c);		//similar error
/**************************************************/
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}
// ES5
console.log('This is ' + firstName + ' ' + lastName 
+ '. He was born in ' + yearOfBirth + '. Today, he is ' 
+ calcAge(yearOfBirth) + ' years old.');
// ES6
console.log('This is ${firstName} ${lastName}. He was born in 
${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} 
years old.');
//template literals is shown above

const n = '${firstName} ${lastName}';
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log('${firstName} '.repeat(5));
/**************************************************/
//Arrow functions
const years = [1990, 1965, 1982, 1937];
// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);
// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => 'Age element ${index + 1}: ${2016 - el}.');
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return 'Age element ${index + 1}: ${age}.'
});
console.log(ages6);
/**************************************************/
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {   
       var self = this; 
			document.querySelector('.green')
					.addEventListener('click', function() {
            var str = 'This is box number ' + self.position 
					+ ' and it is ' + self.color;
        });
    }
}
box5.clickMe();
// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green')
		.addEventListener('click', () => {
            var str = 'This is box number ' 
			+ this.position + ' and it is ' 
			+ this.color;
            alert(str);
        });
    }
}
box6.clickMe();
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green')
		.addEventListener('click', () => {
            var str = 'This is box number ' + this.position +
			' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();
/*****************************************************************/
function Person(name) {
    this.name = name;
}																																																																																																																																																																																																																																																																																																																																																																
// ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
       return this.name + ' is friends with ' + el; 
    }.bind(this));    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
// ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => '${this.name} is friends with ${el}');
    console.log(arr);
}
new Person('Mike').myFriends6(friends);
/////////////////////////////////////////////////////////////////
//De-structuring
// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];
// ES6
const [name, age] = ['John', 26]; //de structuring data structure
console.log(name); 
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj; //variables need not match
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}
const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
/////////////////////////////////