/* javascript: all code run inside a environment called execution context
- box, container storing variables. [[code is evaluated/executed here]]
default: global execution context
	can consider global object - in browser the window object, 
	and code thats not inside any fx
ex. lastname is === window.lastname [property] */
// functions calls get brand new execution context and removed on return from fx
function calculateAge(year) {	//global e-context
    console.log(2016 - year);
}
calculateAge(1965);		//global e-context on top fx's e-context
	//{.....console.log(2016 - year); //runs inside fx's e-context so on

/* E-Context Object	[properties are 
VO(variable object containing fx declaration, parameter),
Scope Chain contains current VO, and all VO's of parents,
'this' variable]

Creation phase
	E-Context Object properties created.
execution phase
	code of the fx that generated current e-context is ran line by line
*/

// function is used before declaring, 
//hoisting - in creation phase of global e-context
//the fx is already available. only for fx statements not fx expression
foo();
function foo() {
    var age = 65;
    console.log(age);
}
//in hoisting- variables declaration are done but for set undefined
//same for fx expression. there are set to undefined
console.log(age);
//age --'undefined';
//global execution context and local execution context
temp = 'global'
function fx() {
    var temp = 'local';
    console.log(temp); //local
}
console.log(temp); //global

//Scoping is not by conditional, logical statements like loops
// Example to show the difference between 
//execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(c); //c-undefined
    console.log(a+d);//a,d access
}
*/

console.log(this); //window object

calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this); //window object. this fx is attached to global obj
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);  //object -john
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this); //window [when regular fx is called window]
        }
        innerFunction();
    }
}
john.calculateAge();

mike= {}
mike.method = john.calculateAge;
//method borrowing
