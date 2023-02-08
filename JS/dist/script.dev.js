"use strict";

// console.log('You can ignore single and dooble quots like this: \\ \'\\\' \\" \\" ')
// console.log(Boolean(alert('5')))   // Boolean логичксуий тип данных. В него можно помещать только  два значение "правда" "лож"
// console.log(true > false)  // Сравнивать можно исчисляемые типа дынных, а не логичесский объект у которого есть только 2 значения (стр. 4). 
// console.log(true > 5)  // Нельзя сравнивать логический объект с числом. (стр. 5) Так, как правда и число - разные типы данных.
// console.log(true < '5')  // Нельзя сравнивать логический объект со строкой. (стр. 5) Так, как правда и строка - разные типы данных.
// console.log(true < null)  //  Нельзя сравнивать логический объект с пустотой. (стр. 5) Так, как правда и пустота - разные типы данных.
// let access = confirm('Please enter youre data');
// let userName = prompt("Enter your name", 'Unknow');
// alert(`Your name is: ${userName}`)
// let userSurname = prompt("Enter your surname", 'Unknow');
// alert(`Your full name is: ${userName} ${userSurname}`)
// let userData = prompt("How old are your?", 'Unknow');
// alert(`Your full name is: ${userName} ${userSurname}, and you are ${userData}`)
// let userAdmin = confirm('You is admin?');
// alert(`Your full name is: ${userName} ${userSurname}, and you are ${userData}, admin statys ${userAdmin}`)
var mon1 = prompt(" Enter 1 month");
typeof mon1 === "number";
var mon2 = prompt("Enter 2 month");
typeof mon2 === "number";
var hw_1 = +mon1 + +mon2;
alert("Your salary is: ".concat(hw_1, "$"));
var hw_2 = hw_1;
++hw_2;
alert("Your salary is ".concat(hw_1, " +1$ is:").concat(hw_2, "$"));
rez = hw_2 >= 2000;
alert("Will you work next? ".concat(rez));
alert.rez(true)("Will you work next000000000000000?");
alert.rez(false)("Will you work next11111111111111?");