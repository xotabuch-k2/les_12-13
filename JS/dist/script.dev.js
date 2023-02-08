"use strict";

console.log('You can ignore single and dooble quots like this: \\ \'\\\' \\" \\" ');
console.log(Boolean(alert('5'))); // Boolean логичксуий тип данных. В него можно помещать только  два значение "правда" "лож"

console.log(true > false); // Сравнивать можно исчисляемые типа дынных, а не логичесский объект у которого есть только 2 значения (стр. 4). 

console.log(true > 5); // Нельзя сравнивать логический объект с числом. (стр. 5) Так, как правда и число - разные типы данных.

console.log(true < '5'); // Нельзя сравнивать логический объект со строкой. (стр. 5) Так, как правда и строка - разные типы данных.

console.log(true < null); //  Нельзя сравнивать логический объект с пустотой. (стр. 5) Так, как правда и пустота - разные типы данных.

var access = confirm('Please enter youre data');
var userName = prompt("Enter your name", 'Unknow');
alert("Your name is: ".concat(userName));
var userSurname = prompt("Enter your surname", 'Unknow');
alert("Your full name is: ".concat(userName, " ").concat(userSurname));
var userData = prompt("How old are your?", 'Unknow');
alert("Your full name is: ".concat(userName, " ").concat(userSurname, ", and you are ").concat(userData));
var userAdmin = confirm('You is admin?');
alert("Your full name is: ".concat(userName, " ").concat(userSurname, ", and you are ").concat(userData, ", admin statys ").concat(userAdmin));