const fs=require('fs');
const result=fs.existsSync('text_file/message.txt');
console.log('file exists', result);
console.log('bye');