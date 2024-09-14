const fs=require('fs');
const path='text_file/message.txt';
const today=new Date();
const dateTime=today.toLocaleDateString() + " " + today.toLocaleTimeString();
fs.writeFile(path,dateTime,(error)=>{
    if(error){
        console.log('writing failed');
    }
    else {
        console.log('file is saved')
    }
});

console.log("bye!");