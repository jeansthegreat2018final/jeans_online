//removes decimal
Math.floor(1.5846);
//DOM manipulator: css selector is passed. 
//method selects the first element searched.
document.querySelector('.button');
//set only plain text
document.querySelector('.button').textContent = 'button';
// set html can be achieved by ....
var object = document.querySelector('.button');
object.innerHTML = '<span>button</span>';
//use get element by ids
document.getElementById('dice-1').style.display = 'block';
//set the attribute
object.src = 'dice-' + 1 + '.png';
//css styling and css property
object.style.display = 'none';
//event listener
object.addEventListener('click',   //callback function
	function() {
		console.log(this);
	});
//toggle class name
object.classList.add('winner');
object.classList.remove('active');
object.classList.toggle('classname');
// Undefined, 0, null or "" are COERCED to false
// Anything else is COERCED to true
if(input){}
//call function by reference
document.querySelector('.btn-new')
	.addEventListener('click', init);
function init() {}