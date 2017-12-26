//Write a function isEven() which takes a single numeric argument and returns true is the number is even, and false otherwise

function isEven(num) {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

//Write a function factorial() which takes a single numeric argument and returns the factorial of that number

function factorial(num) {
	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 2; i <= num; i++) {
		result = result *= i;
	}
//return the result variable
return result;
}

//Write a function which takes a single kebab-cased string argument and returns the snake_cased version
function kebabToSnake(str) {
	//replace all "-" with "_"
	//return str
	var newStr = str.replace( /-/g, "_");
	return newStr;
}
