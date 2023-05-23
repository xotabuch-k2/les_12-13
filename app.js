import { promises, Stats } from 'fs';

const INuserss = [
  {name:'Mike', age: 25},
  {name:'Bob', age: 32},
  {name:'Nikola', age: 17}
    ]
    
const newData = [
  { name: 'Anna', age: 24 },
  { name: 'Tom', age: 21 },
];

const isExist = async (fileEnd) => {
  try {
    await promises.stat(fileEnd, Stats);
    return true;
  } catch (error) {
    return false;
  }
};

(async () => {
  const fileEnd = 'D:\\Stady\\data.json';

  if (await isExist(fileEnd)) {
    const data = await promises.readFile(fileEnd, { encoding: 'utf-8' });
    const users = JSON.parse(data);
    users.users.push(...INuserss);
    users.users.push(...newData);

    const finData = JSON.stringify(users);
    await promises.writeFile(fileEnd, finData, { encoding: 'utf-8' });

    console.log('Data saved to data.json');
  } else {
    console.log('File does not exist.');
  }
})();