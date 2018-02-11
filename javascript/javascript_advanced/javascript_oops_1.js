var testing = (function(){
	var x = 23;
	var add = function(a){
		return x+a;
	}
	return {
		publicTest: function(b){
			console.log(add(b));
		}
	}
})();
testing.publicTest(7);
//because of closures, inner fx has access to outer fx
//[module pattern]

//separation of concern means each part should only 
//be interested in doing its thing independently
/* budgetCntrl, uiController independent, no interaction 
but data sharing happen by argument */
var controller = (function(arg1){
	arg1.publicTest(7);
})(testing);
/************************************************************/
//
document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                //enter key is pressed
            }
        });
document.querySelector('css-selector').value,
/************************************************************/
var DOMstrings = {
        inputType: '.add__type'
}
return {
getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, 
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
}
// returns object  { type:'value', description:'desc-val' }
/************************************************************/
var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

var data ={
	allItems: {
		allExpenses : []
		allIncomes: []
	},
	total: {
		exp: 0,
		inc: 0
	}
}
//data structure
var exp = new Expense(1,"exp",10);
data.allItems['allExpenses'].push(exp);
/************************************************************/
html = '<div class="item clearfix" id="inc-%id%"></div>';
// Replace the placeholder text with the actual data
newHtml = html.replace('%id%', 1);
// Insert the HTML into the DOM
document.querySelector('div').insertAdjacentHTML('beforeend', newHtml);
//DOM manipulation
/************************************************************/
 clearFields: function() {
	 //returns list, convert it into array
    fields = document.querySelectorAll('div' + ', ' + 'p');
    fieldsArr = Array.prototype.slice.call(fields);
    fieldsArr.forEach(function(current, index, array) {
         current.value = ""; //clear the current processing element value
        });
    fieldsArr[0].focus();
        },
}
/************************************************************/
if (input.description !== "" && !isNaN(input.value) && input.value > 0){}
//check empty, number of input fields

//create a new array
/*ids = list.map(function(current) {
                return current.id;
            });*/
//remove an element from DOM
deleteListItem: function(selectorID) {
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        }
/************************************************************/
//create our own node list for each function
	nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
	nodeListForEach(fields, function(current, index) {    
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });	
/************************************************************/			
now = new Date();
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
month = now.getMonth();
year = now.getFullYear();
textContent = months[month] + ' ' + year;
