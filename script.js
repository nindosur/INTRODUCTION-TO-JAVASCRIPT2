//1
alert(`Привет, ${prompt("Как вас зовут?")} !`)

//2
const currentYear = 2023;
const userBirthYear = prompt('Введите свой год рождения');
const userCurrentAge = currentYear - userBirthYear;
alert(`Ваш возраст ${userCurrentAge} лет`);

//3
alert (prompt('Введите длину стороны квадрата') ** 2)

//4
function calculateArea(myRadius) {
    return (myRadius * myRadius * Math.PI);
}
function MyArea() {
    var area = calculateArea(myRadius);
    alert('Площадь круга ' + area);
}
var myRadius = parseFloat(prompt("Введите радиус окружности", 0));
MyArea(myRadius);

//5
let l = +prompt('Введите расстояние в км между городами');
let time = +prompt('Введите время за которое вы хотите добраться');
alert('Вам нужно двигаться со скоростью ' + l/time + ' км/ч') ;

//6
const KURS_DOLLAR_EURO = 0.93453;
const dollarsQuantity = prompt(' Введите сумму в $'); 
alert('Сумма равняется ' + dollarsQuantity * KURS_DOLLAR_EURO + ' евро');

//7
const flashValue = prompt(' Введите объем флешки в ГБ');
const mbValue = flashValue * 1024;
alert(`На флешку размером ${flashValue} ГБ вместится ` + (mbValue / 820).toFixed(2) + ' файлов размером 820 МБ');

//8
const oneChocolateCost = prompt(' Введите стоимость одной шоколадки');
const amountOfMoney = prompt(' Введите сумму денег для покупки');
const chocolatebarsQuantity = Math.floor(amountOfMoney / oneChocolateCost);
const balanceAfterPurchase = amountOfMoney - chocolatebarsQuantity * oneChocolateCost;
alert(`На сумму ${amountOfMoney} можно купить ${chocolatebarsQuantity} шоколадок, сдача составит ${balanceAfterPurchase}.`);

//9
const number = prompt('Введите трех значное число ');
const lastCharacter = number % 10;
const number2 = Math.floor(number / 10);
secondCharacter = number2 % 10;
firstCharacter = Math.floor(number2 / 10);
console.log(lastCharacter, secondCharacter, firstCharacter);
alert(`${lastCharacter}${secondCharacter}${firstCharacter}`);

//10
function isEven() {
    let integer = +prompt('Введите число', '');
    return (integer % 2 == 0) ? alert(`${integer} число четное`) : alert(`${integer} число нечетное`);
    };

isEven();