//primitives- string, number, boolean, undefined,  null
//reference types- object, array, function
"hello".length;
new String("hello") //behind the scene create a string object 
//and uses length property

//object is created by using the constructor of the object
typeof obj //object

new Number(10);
typeof num; //object
tyoeof 10; //number

//wrapper object around primitives
/*****************************************************************/
var obj = new Object(); //creates a object and assigns to variable
//no helpful, as nothing here states that obj is real world [person]
person = new Object();
person.firstName = "john"; //property named firstName with value john
//function creation, property that contains [[function object]]
person.sayHi = function(){
	return "hi there";
};
/*****************************************************************/
var per = {}; //calls object constructor
var perSon ={
	firstName: "johnny",
	lastName: "Doe",
	sayHi: function(){
		return "hi there";
	}
}; //using object literal notation as opposed to using old notation
//performance is better. structure include organized.
/*****************************************************************/
//interface/signature to provide multiple object creation
//so all objects which has all the mentioned properties from interface
//we can say, objects have implemented the interface
var jai ={
	firstName: "jai",
	lastName: "ri",
	sayHi: function(){	//object implemented from person interface
		return "hi there";
	}
};
var emp ={
	firstName: "emp",
	lastName: "ex",
	property: "assign",	//now we have emp interface that builds upon person intrf
	sayHi: function(){
		return "hi there";
	}
};
/*****************************************************************/
//javascript provides function to create objects [because of code duplicate in intrf]
var createPerson = function(firstName, lastName){
	return {
			firstName:firstName,
			lastName:lastName,
			sayHi: function(){	
					return "hi there";
				}
		};
};
var jo = createPerson("jo","do");
var jol = createPerson("jol","doll");
/*****************************************************************/







