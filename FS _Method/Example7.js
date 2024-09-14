const fs=require('fs');
const path='text_file/ram.txt';
let today=new Date();
let dateTimeStr='Welcome to next js \n ';
dateTimeStr+=today.toLocaleDateString() + " " + today.toLocaleTimeString();
try{
    fs.writeFileSync(path,dateTimeStr);
    console.log("file saved");
}
catch(err){
 console.log("file not saved");
}

console.log('bye');