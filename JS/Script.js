/*console.log('Lesson 1');
var tC = prompt('tC:');
var tF = (9 / 5) * parseInt(tC) + 32;
console.log('tF: ' + tF);
var admin;
var name = 'Василий';
admin = name;
console.log(admin);
console.log(1000 + '108');*/

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
var a = 1;
var b = -5;

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

a = Math.floor((Math.random() * 16));
console.log('a = ' + a);

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
}


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
		case 'addition':
			return addition(arg1, arg2);
		case 'subtraction':
			return subtraction(arg1, arg2);
		case 'multiplication':
			return multiplication(arg1, arg2);
		case 'division':
			return division(arg1, arg2);
	}
}

console.log(null == 0); // false

console.log(power(3, 4)); // 

function power(val, pow)
{
	if (pow > 0)
		return val * power(val, pow - 1)
	else if (pow == 0)
		return 1;
	else
		return NaN;
}

