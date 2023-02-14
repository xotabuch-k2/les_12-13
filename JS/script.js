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
///////////////////////////////////////////////////
// let mon1 = prompt(" Enter 1 month", );
// typeof mon1 === "number";
// let mon2 = prompt("Enter 2 month", );
// typeof mon2 === "number";
// let hw_1 = +mon1 + +mon2;
// alert(`Your salary is: ${hw_1}$`);
// let hw_2 = hw_1;
// ++hw_2;
// alert(`Your salary is ${hw_1} +1$ is:${hw_2}$`);
// rez = (hw_2>=2000);
// alert(`Will you work next? ${rez}`)
// alert(rez && "I\'m ready to work" || !rez && "I\'m out");
///////////////////////////////////////////////////




/////1HW///////////////////////////////////////////
// let age = prompt(" Enter your age", );
// if (age<17) {
//     confirm("Do you stadu at school?")
// } else if (age>17 && age<25) {
//     confirm("Do you stadu at university?")
// } else if (age>=25 && age<60) {
//     confirm("Do you have a jobe?")
// } else (confirm("What are you doing?"))
/////2HW///////////////////////////////////////////
// let style = prompt(" Enter CSS Display style: \n1-block; \n2-flex; \n3-grid; \n4-inline; \n5-none.")
// switch (style) {
//     case style="block":
//         alert('Display: block');
//         break;
//     case style='flex':
//         alert('Display: flex');
//         break;
//     case style='grid':
//         alert('Display: grid');
//         break;
//     case style='inline':
//         alert('Display: inline');
//         break;
//     case style='none':
//         alert('Display: none');
//         break;
//     default:
//         alert('Set \'display: inline-block;\'');
// }
/////3HW///////////////////////////////////////////
// let data = prompt ("Enter number");
// let Mdata=+data;
// console.log (Mdata===!NaN);
// if (Mdata===!NaN) {
//     let rezalt=Mdata*12;
//     console.log(rezalt);
//     alert(Rezalt ADD: ${Mdata});
// } else {
//     alert(Rezalt: ${Mdata});
// }


let data = +prompt ("Enter number");
while (data!=typeof "number") {
    console.log(data);
    data = +prompt ("Enter number");
}
let rez = data*12;
alert(rez);