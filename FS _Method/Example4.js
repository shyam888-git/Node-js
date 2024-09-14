const fs=require('fs');
const path='text_files/shyam.tsx';
const today=new Date();
const dateTimeStr=today.toLocaleDateString() +" "+ today.toLocaleTimeString();
fs.writeFileSync(path, dateTimeStr);
console.log("file saved!");