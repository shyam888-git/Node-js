//it is used for asynchronous approach.
const fs=require('fs');
fs.access('text_files/message.txt',(error)=>{
    if(error){
        console.log('file not exists')
    }
    else{
        console.log('file exists');
    }
});

console.log("bye");