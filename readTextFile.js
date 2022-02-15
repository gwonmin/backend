const fs = require('fs');
console.log('프로그램 시작...');
let data = fs.readFileSync("./news.txt");
lockableData = data.toString(); 
console.log(lockableData);
console.log('------------------------------');
console.log(lockableData.slice(0,100));