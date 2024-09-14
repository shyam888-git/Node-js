const fs=require('fs');
const path='text_file/message.txt';
const content ='some content';


fs.writeFile(path, content, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file written successfully");
    }
})
