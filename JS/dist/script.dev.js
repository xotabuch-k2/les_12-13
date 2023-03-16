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
// data= Number(data);
// while (isNaN(data)) {
//     data = prompt ("Enter number");
// }
// if (data>=0) {
//     alert(data*12);
// }
// while (data<0) {
//     data = prompt ("Enter number");
// }
/////4HW///////////////////////////////////////////
// let data4 = +prompt ("Enter number");
// for (let i = 2; i <= data4; i++) {
//     if (i % 2 == 0) {
//       console.log( i );
//     }
//   }
///////////////////////////////////////////////////
/////1HW///////////////////////////////////////////
// maxNumber(a=+prompt('Enter A'),b=+prompt('Enter B'));
// function maxNumber(a,b) {
//     if (a>b) {
//         c1='a';
//         return c1;
//     }
//     else if (a<b) {
//         c1='b';
//         return c1;
//     }
//     else{
//         c1='a=b';
//         return c1;
//     }
// }
// alert(`maxNumber(${c1})`)
/////2HW///////////////////////////////////////////
// revers(c=+prompt('Enter Number'));
// function revers(c) {
//     if(c === "0") {
//         ca = c * (1);
//       }
//       ca = c * (-1);
//       return ca;
// }
// alert(`revers ${ca}`);
/////3HW///////////////////////////////////////////
// three(number=+prompt('Enter number'), count=+prompt('Enter count'))
//     function three(number, count){
//     rez = +number + 3*+count;
//     return rez;
// };
// alert(`three(${number}, ${count}, result: ${rez})`);
/////4HW///////////////////////////////////////////
// let KmM;
// let KmCm;
// getMetric(metric=prompt('Metric (m or cm)'), km=prompt('km'),m=0 ,cm=0)
// function getMetric(metric, km) {
//     if (metric==="cm") {
//         KmToCm(km);
//     } 
//     else if (metric==="m") {
//         KmToM(km);
//     } 
//     else{
//         alert ('Error enter metric');
//     }
// }
//     function KmToM(km) {
//         KmM = +km*1000;
//         if (KmM==undefined) {
//                 KmM = 0;
//             } else if (KmCm==undefined) {
//                 KmCm = 0;
//             }
//         console.log(KmM);
//         return KmM;
//     }
//     function KmToCm(km) {
//         KmCm= +km*100000;
//         if (KmM==undefined) {
//             KmM = 0;
//         } else if (KmCm==undefined) {
//             KmCm = 0;
//         }
//         console.log(KmCm);
//         return KmCm;
//     }
// alert(`getMetric( ${metric} metric, ${km}km, ${KmM}m, ${KmCm}cm)`);
///////////////////////////////////////////////////
/////1HW///////////////////////////////////////////
// let car={
//     model:`model`,
//     year: 2006,
//     color: 'black',
//     signal: function () {
//         alert('fa! fa!')
//     }
// }
// car.color='red';
// car.type='electric'
// console.log(car);
// console.log(car.signal);
/////2HW 1 вариант///////////////////////////////////////////
// let salaries1 = {
//     frontend: 12000,
//     backend: 10000,
//     designer: 8000,
//       // buh:12345,
//     dayPay() {
//       alert("We must pay salary an Tuesday");
//     },
//     total() {
//         let rez = 0;
//       for (let key in salaries1) {
//         if (salaries1[key] > 0) {
//             rez += salaries1[key];
//           }
//       }
//       return console.log(rez);
//     },
//   };
//   salaries1.total();
/////2HW 2 вариант///////////////////////////////////////////
//   const salaries2 = {
//     fronted: 12000,
//     backend: 10000,
//     designer: 8000,
//     // buh:12345,
// }
// function total(salaries2) {
//     let rez=0;
//         for (const key in salaries2) {
//          rez+=salaries2[key];
//         }
//     return rez;
// }   
// console.log(total(salaries2));
/////3-4HW///////////////////////////////////////////
// function laptop(brand,system,cost) {
//     this.brand = brand,
//     this.system = system,
//     this.cost = cost,
//     this [Symbol.toPrimitive] = function (hint) {
//         switch (hint) {
//             case `string`: return this.brand;
//             case `string`: return this.system;
//             case `number`: return this.cost;
//             case `default`: 
//             return this.brand+this.system+this.cost;
//         }
//     }
// }
// let dell = new laptop(`Dell `, `windows `, 800);
// let apple = new laptop(` Apple `, `MAC OS `, 1700);
// console.log(dell);
// console.log(apple);
///4HW///////////////////////////////////////////
// let group = {};
// group[dell] = dell+`//`+apple;
// console.log(group);
// console.log(String(dell));
// console.log(+apple);
// console.log(dell+` //`+apple+` //`);
///////////////////////////////////////////////////
/////1HW///////////////////////////////////////////
// let name = [`Mike`,`Nikola`,`Tom`]
// console.log(name);
// name.splice(1,1, `Alex`);
// console.log(name);
// name.length=1;
// console.log(name.length);
/////2HW///////////////////////////////////////////
///Не имел представление по каким параметрам сравнивать, 
// по этому сравнил и по числу елементов и по сумме елементов.
// let Amass = [5,3,-4,25,32,-16,6];
// let Bmass = [21,-30,9,5,12,-19,5,25];
// let Asum = Amass.reduce((a,b)=>a+b);
// console.log(Asum);
// let Bsum = Bmass.reduce((a,b)=>a+b);
// console.log(Bsum);
// let Arez;
// for (let i = 0; i < Amass.length; i++) {
//     Arez=i;}
// let Brez;
// for (let i = 0; i < Bmass.length; i++) {
//     Brez=i;}
// if (Arez>Brez) {
//     console.log(`a>b (index)`);
// }
// else if (Arez<Brez) {
//     console.log(`a<b (index)`);
// }
// else{
//     console.log(`a=b (index)`);
// }
// // 
// if (Asum>Bsum) {
//     console.log(`a>b (sum elem)`);
// }
// else if (Asum<Bsum) {
//     console.log(`a<b (sum elem)`);
// }
// else{
//     console.log(`a=b (sum elem)`);
// }
/////3HW///////////////////////////////////////////
// let phrase = `I am learning JavaScript right now`;
// phrase = phrase.split(` `);
// console.log(phrase);
/////4HW///////////////////////////////////////////
// let A = [5,3,8,5,3,2,1,2];
// let B = [];
// A.forEach(function(element) {
//   if (!B.includes(element)) {
//     B.push(element);
//   }
// });
// console.log(B);
/////5HW///////////////////////////////////////////
// let users = [
//     {id: 1, age:17,},
//     {id: 2, age:18,},
//     {id: 3, age:19,},
//     {id: 4, age:21,},
//     {id: 5, age:17,},
//     {id: 6, age:20,},
//     {id: 7, age:25,},];
//     users = users.filter(users => 18<users.age || 21<users.age).map(user => user.id);
//     console.log(`id ${users}`);
///////////////////////////////////////////////////
/////1HW///////////////////////////////////////////
// const array = [1,2,3,4,5,6,7,8,9,10]
// function sumArr(array){
//         if (array.length===1) {
//             return array[0];
//         } else{
//             return array[0]+ sumArr(array.slice(1));
//         }
// }
// // //-----------------------------------------------------------------------------
// function sumArr1(array) {
//     return array.length === 1? array[0] : array[0] + sumArr1(array.slice(1))
// }
// console.log(sumArr(array));
// console.log(sumArr1(array))
/////2HW///////////////////////////////////////////
// let employees2 = [1, 2, [3, 4, [5, [1, 2, [3, 4, [[1, 2, [3, 4, [5, 6]], 7, [8, 9]], 6]], 7, [8, [1, 2, [3, 4, [5, 6]], 7, [8, 9]]]]]], 7, [[[3, 4, [5, 6]], 2, [[1, 2, [3, 4, [5, [1, 2, [3, 4, [5, 6]], 7, [[1, 2, [3, 4, [5, 6]], 7, [8, 9]], 9]]]], 7, [8, 9]], 4, [5, 6]], 7, [8, 9]], 9]];
// function deepCount(employees2) {
//     let count=0;
//     for (let i = 0; i < employees2.length; i++) {
//         if (Array.isArray(employees2[i])) {
//             count++;
//             count+=deepCount(employees2[i]);
//         }else{
//             count++;
//         }
//     }
//     return count;
// }
// console.log(deepCount(employees2));
//-----------------------------------------------------------------------------
// function deepCount1(employees2) {
//     let count=0;
//     for (let i = 0; i < employees2.length; i++) {
//         count+=deepCount1(employees2[i]) + 1
//     }
//     return count;
// }
// console.log(deepCount1(employees2));
/////3HW///////////////////////////////////////////
// const employees = {
//     development: {
//         backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
//         frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
//     },
//     sales: {
//         marketing: {
//             internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
//             promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
//         },
//         sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
//     },
//     designer: [{name: 'Kate', salary: 1800}]
// }
// function sumSallary(obj){
//     let sum = 0;
//     for(let key in obj){
//         if (Array.isArray(obj[key])){
//             obj[key].forEach(employee => sum += employee.salary);
//         } else {
//             sum+=sumSallary(obj[key]);
//         }
//     }
//     return sum;
// }
// console.log(sumSallary(employees));
/////4HW///////////////////////////////////////////
// let arr41=[2,15,7,3,];
// let arr42=[9,3,17,12,4,8,];
// let arr43=[6,11,16,15,11];
// function biggest (Array) {
//    return Math.max.apply(null,Array);
// }
// console.log(biggest(arr41));
// console.log(biggest(arr42));
// console.log(biggest(arr43));
///////////////////////////////////////////////////
/////1HW///////////////////////////////////////////
// class User{
//     constructor(name,login,age){
//         this.name=name;
//         this.login=login;
//         this.age=age;
//     }
//     getName(isAdmin){
//         if (isAdmin) {
//             return this.name || this.login;
//         }
//         else{
//             return 'No Access';
//         }
//     }
//     changeName(name, password) {
//         if (password === 123) {
//         this.name = name;
//         console.log("Name changed");
//         } 
//         else {
//         console.log("Permission denied");
//         }
//     }
// }
// let user1=new User('Mike','MK_18', 18);
// let user2=new User('','NGR',22);
// console.log(user1.login);
// console.log(user1.age);
// console.log(user2.login);
// console.log(user2.age);
/////2HW///////////////////////////////////////////
// console.log(user1.getName(true));
// console.log(user2.getName(true));
// console.log(user2.getName(false));
/////3HW///////////////////////////////////////////
// user1.changeName("Bill", 123);
// console.log(user1.name);
/////4HW///////////////////////////////////////////
// class Admin extends User {
//     #isAdmin = true;
//     getUserName(user) {
//         console.log(user.name);
//     }
// }
// const admin1 = new Admin('John', 'JN_23', 25);
// console.log(admin1);
// admin1.getUserName(user1);
/////5HW///////////////////////////////////////////
// class User5 {
//     #phone;
//     constructor(name, phone) {
//       this.name = name;
//       const phoneFormat = /^\d{3}-\d{3}-\d{2}-\d{2}$/;
//       if (!phoneFormat.test(phone)) {
//         throw new Error("Invalid phone format");
//       }
//       this.#phone = phone;
//     }
//     getPhone(isAdmin) {
//         if (isAdmin) {
//           return this.#phone;
//         } else {
//           const phoneParts = this.#phone.split('-');
//           for (let i = 1; i < phoneParts.length - 1; i++) {
//             phoneParts[i] = '***';
//           }
//           return phoneParts.join('-');
//         }
//       }
// }
//   let user51 = new User5("Mike", "067-888-89-88");
//   let user52 = new User5("Tom", "099-888-88-99");
//   console.log(user51.getPhone(false));
//   console.log(user52.getPhone(false));
//   console.log(user51.getPhone(true));
//   console.log(user52.getPhone(true));
///////////////////////////////////////////////////
/////1HW///////////////////////////////////////////
// const user = {};
// user.name = 'Name';
// user.age = 123;
// Object.defineProperty(user, 'name', {
//     writable: false,
//     enumerable: true,
//     configurable: true
// });
// Object.defineProperty(user, 'age',{
//     writable: false,
//     enumerable: true,
//     configurable: true,
// })
// user.id = 'id123';
// Object.defineProperty(user, 'id',{
//     writable: false,
//     enumerable: true,
//     configurable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// console.log(Object.getOwnPropertyDescriptor(user, 'age'));
// console.log(Object.getOwnPropertyDescriptor(user, 'id'));
/////2HW///////////////////////////////////////////
// let dataBase={
//     dbName:'user',
//     dbType: 'MySQL'
// }
// let configurateDB={
//     token:'123',
//     passward: '567',
//     user: 'admin'
// }
// Object.freeze(dataBase);
// Object.seal(configurateDB);
/////3HW///////////////////////////////////////////
// let salaries={
//     frontend: 2000,
//     backend: 1500,
//     design: 1000
// }
// Object.defineProperty(salaries, 'sum', {
//     get() {
//       let sum = 0;
//       for (let salary in this) {
//         if (typeof this[salary] === 'number') {
//           sum += this[salary];
//         }
//       }
//       return sum;
//     },
//     enumerable: false
// });
// Object.defineProperty(salaries, 'setSalaries', {
//     set(salaryList) {
//       for (let item of salaryList) {
//         let [position, salary] = item.split(':');
//         position = position.trim();
//         salary = parseInt(salary.trim());
//         if (isNaN(salary)) {
//           console.log(`Invalid salary format for position '${position}'`);
//         } else {
//           salaries[position] = salary;
//         }
//       }
//     }, enumerable: false
// });
//   console.log(salaries.sum); // 4500
//   salaries.setSalaries = ['hr: 2500', 'manager: 3000'];
//   console.log(salaries.hr); // 2500
//   console.log(salaries.manager); // 3000
//   console.log(salaries.sum); // 10000
/////4HW///////////////////////////////////////////
// let obj={
//     name: 'Mike',
//     surname: 'Davis',
//     age: 25,
// }
// Object.defineProperty(obj, 'userInfo', {
//     get() {
//         return Object.entries(this)
//             .map(([key, value]) => `${key}: ${value}`)
//             .join('\n');
//     },
// });
// console.log(obj.userInfo);
///////////////////////////////////////////////////
/////1HW///////////////////////////////////////////
// let car ={
//   type: `electric`,
//   wheels: 4,
// }
// let sportCar={
//   doors:2
// }
// Object.getPrototypeOf(sportCar,car)
// let passengerCar = Object.create(car);
// passengerCar.doors = 4;
// let toyCar = Object.create(car);
// toyCar.type = "toy";
/////2HW///////////////////////////////////////////
// let employees = {
//   wallet: {},
//   pay(munth, sum) {
//     this.wallet[munth] = sum;
//   }
// };
// let frontedDeveloper = {
//   name: 'Mike',
//   pay(munth, sum) {
//     employees.pay.call(this, munth, sum);
//   }
// };
// let backendDeveloper = {
//   name: 'Bob',
//   pay(munth, sum) {
//     employees.pay.call(this, munth, sum);
//   }
// };
// backendDeveloper.pay('june', 1500);
// console.log(backendDeveloper.wallet.june); // 1500
// frontedDeveloper.pay('june', 1000);
// console.log(frontedDeveloper.wallet.june); // 1000
/////3HW///////////////////////////////////////////
// function User(name,age){
//   this.name=name,
//   this.age=age
// }
// let user_1=new User(`Mike`, 18);
// let user_2=new User(`Bob`,25);
/////4HW///////////////////////////////////////////
// function UserType(name){
//   for (let i = 0; i < name.length; i++) {
//     this[i]=name[i];
//     if (i+1==name.length) {
//       Object.defineProperty(this, `length`,{
//         enumerable:true,
//         writable:false,
//         configurable:true,
//         value: i=1
//       })
//     }
//   }
// }
//////////////////////////////////////
// function UserType(name) {
//   let arr = new Array(name.length);
//   for (let i = 0; i < name.length; i++) {
//     arr[i] = name[i];
//   }
//   Object.setPrototypeOf(arr, UserType.prototype);
//   return arr;
// }
// UserType.prototype = Object.create(Array.prototype);
// UserType.prototype.constructor = UserType;
// let admins = new UserType(["Mike", "Bob", "Nikola"]);
// console.log(admins.join(";")); // Mike;Bob;Nikola
///////////////////////////////////////////////////
/////1HW///////////////////////////////////////////
// function count(expression){
//   function getValues(expression){
//       let values=[+expression[0],expression[1],+expression[2]]
//       return values;
//   }
//       let values = getValues(expression);
//       switch (values[1]) {
//           case '+':
//           return  showResult(sum(values));
//           case '-':
//           return  showResult(subtract(values));
//           case '*':
//           return  showResult(multiply(values));
//           case '/':
//           return showResult(divide(values))
//       }
//       function showResult(value){
//           return value
//       }
//   }
//   function sum(values) {
//           return values[0] + values[2];
//       }
//   function subtract(values) {
//       return values[0] - values[2];
//   }
//   function multiply(values) {
//       return values[0] * values[2];
//   }
//   function divide(values) {
//       return values[0] / values[2];
//   }
/////2HW///////////////////////////////////////////
//   function count(expression){
//     function getValues(expression){
//         let values = [...expression]
//         return values;
//     }
//         let values = getValues(expression);
//         switch (values[1]) {
//             case '+':
//             return  showResult(sum(values));
//             case '-':
//             return  showResult(subtract(values));
//             case '*':
//             return  showResult(multiply(values));
//             case '/':
//                 try {
//                     return showResult(divide(values));
//                 } catch (error) {
//                     console.log(error);
//                     return 0;
//                 }
//         }
//         function showResult(value){
//             return value
//         }
//     }
//     function sum(values) {
//             return +values[0] + +values[2];
//         }
//     function subtract(values) {
//         return values[0] - values[2];
//     }
//     function multiply(values) {
//         return values[0] * values[2];
//     }
//     function divide(values) {
//         if (values[0] === '0'|| values[2] === '0') {
//             throw new Error("Can't divide by 0");
//         }
//         return values[0] / values[2];   
//     }
// console.log(count('5+2')); 
// console.log(count('6/0'));
// console.log(count('0/6'));
/////3HW///////////////////////////////////////////
// function sum(values) {
//   return parseInt(values[0]) + parseInt(values[2]);
// }
// function subtract(values) {
//   return parseInt(values[0]) - parseInt(values[2]);
// }
// function multiply(values) {
//   return parseInt(values[0]) * parseInt(values[2]);
// }
// function divide(values) {
//   return parseInt(values[0]) / parseInt(values[2]);
// }
// console.log(count(5 * 2));
// console.log(count("5 * 2"));
/////4HW///////////////////////////////////////////
// function MakeUsers(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let user = new MakeUsers();
// user.name = prompt("Enter your name:");
// user.age = prompt("Enter your age:");
// user.age = +user.age;
// function showMovie(user) {
//   try {
//     if (user.age === 0) {
//       throw new Error();
//     }
//     if (user.age >= 18) {
//       console.log("You can watch this movie");
//     } else {
//       console.log("Sorry, you are too young");
//     }
//   } catch (error) {
//     let userAge = prompt("Enter your age, please");
//     if (userAge !== '0') {
//       user.age = +userAge;
//       showMovie(user);
//     } else {
//       showMovie(user);
//     }
//   }
// }
// showMovie(user);
///////////////////////////////////////////////////
/////1HW///////////////////////////////////////////
// const domH2 = document.querySelector('.dom h2'); 
// domH2.textContent = "Dom method description"; 
/////2HW///////////////////////////////////////////
// const ukrLinks = document.querySelectorAll('a[href*="/ua/"]');
// //або
// const ukrLinks1 = document.querySelectorAll('a[href^="site.ua/ua/"]');
/////3HW///////////////////////////////////////////
// const ul = document.getElementById("ul");
// const newElements = `
//   <li id="null">0</li>
//   <li id="second">2</li>
//   <li id="fourth">4</li>
// `;
// ul.insertAdjacentHTML("beforebegin", newElements);
/////4HW///////////////////////////////////////////
// const link = document.getElementById('link');
// const h1 = document.querySelector('h1');
// link.appendChild(h1);
///////////////////////////////////////////////////
/////1HW///////////////////////////////////////////
var url = 'https://jsonplaceholder.typicode.com/todos/';

function filterByTitle(data) {
  return data.filter(function (item) {
    return item.title.startsWith('a');
  });
}

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error('Ошибка получения данных'));
      }
    };

    xhr.onerror = function () {
      reject(new Error('Ошибка получения данных'));
    };

    xhr.send();
  });
}

fetchData(url).then(function (data) {
  return filterByTitle(data);
}).then(function (filteredData) {
  console.log(filteredData);
})["catch"](function (error) {
  console.error(error);
}); /////2HW///////////////////////////////////////////