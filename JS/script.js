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
let car={
    model:`model`,
    year: 2006,
    color: 'black',
    signal: function () {
        alert('fa! fa!')
    }
}
car.color='red';
car.type='electric'
console.log(car);
console.log(car.signal);
/////2HW 1 вариант///////////////////////////////////////////
let salaries1 = {
    frontend: 12000,
    backend: 10000,
    designer: 8000,
      // buh:12345,
    dayPay() {
      alert("We must pay salary an Tuesday");
    },
    total() {
        let rez = 0;
      for (let key in salaries1) {
        if (salaries1[key] > 0) {
            rez += salaries1[key];
          }
      }
      return console.log(rez);
    },
  };
  salaries1.total();
/////2HW 2 вариант///////////////////////////////////////////
  const salaries2 = {
    fronted: 12000,
    backend: 10000,
    designer: 8000,
    // buh:12345,
}
function total(salaries2) {
    let rez=0;
        for (const key in salaries2) {
         rez+=salaries2[key];
        }
    return rez;
}   
console.log(total(salaries2));
/////3-4HW///////////////////////////////////////////
function laptop(brand,system,cost) {
    this.brand = brand,
    this.system = system,
    this.cost = cost,
    this [Symbol.toPrimitive] = function (hint) {
        switch (hint) {
            case `string`: return this.brand;
            case `string`: return this.system;
            case `number`: return this.cost;
            case `default`: 
            return this.brand+this.system+this.cost;
        }
    }
}
let dell = new laptop(`Dell `, `windows `, 800);
let apple = new laptop(` Apple `, `MAC OS `, 1700);
console.log(dell);
console.log(apple);
///4HW///////////////////////////////////////////
let group = {};
group[dell] = dell+`//`+apple;
console.log(group);
console.log(String(dell));
console.log(+apple);
console.log(dell+` //`+apple+` //`);
///////////////////////////////////////////////////