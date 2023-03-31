// export function totalSalary(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//     total += arr[i].salary;
//     }
//     return total;
// }
// import {ArrEmp} from "./emoloyees.js";
// console.log(totalSalary(ArrEmp));
//-------------------------------------------
// export function departmentsQuantity(arr) {
//     const departments = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (!departments.includes(arr[i].department)) {
//         departments.push(arr[i].department);
//       }
//     }
//     return departments.length;
// }
// console.log(departmentsQuantity(ArrEmp));
//---------------------------------------------
// export function departmentsSalary(arr) {
//     const departments = {};
//     for (let emp of arr) {
//       const { department, salary } = emp;
//       if (departments[department]) {
//         departments[department] += salary;
//       } else {
//         departments[department] = salary;
//       }
//     }
//     return departments;
// }
// console.log(departmentsSalary(ArrEmp));
//---------------------------------------------
// export const employeesMethods = {
//     totalSalary: function(arr) {
//         let total = 0;
//         for (let i = 0; i < arr.length; i++) {
//         total += arr[i].salary;
//         }
//         return total;    },
//     departmentsQuantity: function(arr) {
//         const departments = [];
//         for (let i = 0; i < arr.length; i++) {
//           if (!departments.includes(arr[i].department)) {
//             departments.push(arr[i].department);
//           }}
//         return departments.length;    },
//     departmentsSalary: function(arr) {
//         const departments = {};
//         for (let emp of arr) {
//           const { department, salary } = emp;
//           if (departments[department]) {
//             departments[department] += salary;
//           } else {
//             departments[department] = salary;
//           }
//         }
//         return departments;
//     }
//   };