///task 1

import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const book = 'The Wind in the Willows (introductory fragment).txt'

const readStream = fs.createReadStream(path.join(__dirname, '/files', book), { highWaterMark: 1024 })
console.log(readStream.readableHighWaterMark);

readStream.on('data', (chunk)=>{
    console.log('-Introductory fragmrnt, copying is prohibited!-');
    console.log(chunk.toString());
})

process.stdin.on("data", data => {
    data = data.toString().toUpperCase()
    process.stdout.write(data + "\n")
})

///task 2-3
const ask = (question) => {
    return new Promise((resolve, reject) => {
      process.stdout.write(question);
  
      process.stdin.once('data', (data) => {
        const answer = data.toString().trim().toLowerCase();
        if (['y', 'yes'].includes(answer)) {
          resolve('YES');
        } else if (['n', 'no'].includes(answer)) {
          resolve('NO');
        } else {
          reject(new Error('Invalid answer. Please enter Y/y/yes or N/n/no.'));
        }
      });
    });
  };
  
  (async () => {
    try {
      const useScss = await ask('Do you want to use SCSS? ');
      const useEslint = await ask('Do you want to use ESLint? ');
  
      console.log('Use SCSS:', useScss);
      console.log('Use ESLint:', useEslint);
  
      process.exit();
    } catch (error) {
      process.stderr.write(error.message);
      process.exit(1);
    }
  })();


