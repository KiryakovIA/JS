console.log('Lesson 2');
console.log('Task 1');
console.log('var a = 1, b = 1, c, d;');
console.log('c = ++a; console.log(c);     	 // 2 Сначала инкремент для а, потом береться значение а');
console.log('d = b++; console.log(d);        // 1 Сначала берется значение b, потом инкремент b');
console.log('c = (2+ ++a); console.log(c);   // 5 Сначала инкремент а, потом береться значение а');
console.log('d = (2+ b++); console.log(d);   // 4 Сначала берется значение b, потом инкремент b');
console.log('console.log(a);                 // 3');
console.log('console.log(b);                 // 3');

console.log('Task 2');
console.log('var a = 2;');
console.log('var x = 1 + (a *= 2);  // x = 5');

console.log('Task 3');
var a = parseInt(prompt('Введите а'));
var b = parseInt(prompt('Введите b'));
if (a >= 0 && b >= 0)
{
	console.log(a - b);
}
else if (a < 0 && b < 0)
{
	console.log(a * b);
}
else if (a < 0 && b >= 0 || a >= 0 && b < 0)
{
	console.log(a + b);
}

console.log('Task 4');
a = parseInt(prompt('Введите число от 0 до 15'));

switch(a)
{
	case 0:
		console.log('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 1:
		console.log('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 2:
		console.log('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 3:
		console.log('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 4:
		console.log('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 5:
		console.log('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 6:
		console.log('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 7:
		console.log('7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 8:
		console.log('8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 9:
		console.log('9, 10, 11, 12, 13, 14, 15');
		break;
	case 10:
		console.log('10, 11, 12, 13, 14, 15');
		break;
	case 11:
		console.log('11, 12, 13, 14, 15');
		break;
	case 12:
		console.log('12, 13, 14, 15');
		break;
	case 13:
		console.log('13, 14, 15');
		break;
	case 14:
		console.log('14, 15');
		break;
	case 15:
		console.log('15');
		break;

	default:
		console.log('Введенное число не в деапазоне м/у 0 и 15');
		break;
}

console.log('Task 5');
a = parseInt(prompt('Введите число a'));
b = parseInt(prompt('Введите число b'));
console.log('a + b = ' + addition(a, b));
console.log('a - b = ' + subtraction(a, b));
console.log('a * b = ' + multiplication(a, b));
console.log('a / b = ' + division(a, b));

console.log('Task 6');
a = parseInt(prompt('Введите число a'));
b = parseInt(prompt('Введите число b'));
var operation = parseInt(prompt('Введите операцию. 1 +; 2 -; 3 *; 4 /.'));
var strOpe = ['+', '-', '*', '/'];
console.log('a ' + strOpe[operation - 1] + ' b = ' +  mathOperation(a, b, operation));

console.log('Task 7');
console.log('null == 0 = ' + (null == 0)); // false


console.log('Task 8');
var val = parseInt(prompt('Введите число val'));
var pow = parseInt(prompt('Введите степень pow'));
console.log('val ^ pow = ' + power(val, pow));


function addition(arg1, arg2)
{
	return arg1 + arg2;
}

function subtraction(arg1, arg2)
{
	return arg1 - arg2;
}

function multiplication(arg1, arg2)
{
	return arg1 * arg2;
}

function division(arg1, arg2)
{
	return arg1 / arg2;
}

function mathOperation(arg1, arg2, operation)
{
	switch(operation)
	{
		case 1:
			return addition(arg1, arg2);
		case 2:
			return subtraction(arg1, arg2);
		case 3:
			return multiplication(arg1, arg2);
		case 4:
			return division(arg1, arg2);
		default:
			return NaN;
	}
}



function power(val, pow)
{
	if (pow > 0)
		return val * power(val, pow - 1)
	else if (pow == 0)
		return 1;
	else
		return NaN;
}

