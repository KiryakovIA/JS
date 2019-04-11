console.log('Задача 1');

var result = [];
var num = 0;
while(num <= 100)
{
	if(isSimple(num))
		result.push(num);
	num++;
}

function isSimple(x) {
	if (x < 2)
		return false;
	for (var i = 2; i < x; i++)
	{
		if ((x % i) === 0)
			return false;
	}
	return true;
}

console.log('Простые числа от 0 до 100: ' + result);

console.log('Задача 2 и Задача 3');

var mass1 = ['Яблоки', 'Груши', 'Бананы'];
var mass2 = [150, 200, 135];
console.log('Итоговая стоимость - ' + countBasketPrice(mass2) + 'руб.');

function countBasketPrice(mass) {
	var result = 0;
	for (var i = 0; i < mass.length; i++ )
		result += mass[i];
	return result;
}

console.log('Задача 4');
for (var i = 0; i <= 9; console.log(i++)){}

console.log('Задача 5');
for (var i = 0; i < 20; i++)
{
	var row = '';
	for (var k = 0; k <= i; k++) 
		row +="x";
	console.log(row);
}

