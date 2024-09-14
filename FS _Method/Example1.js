const fs=require('fs');
const file =fs.existsSync('text_file/message.txt');
if(file){
    console.log('file exists')
}
else{
    console.log('file not exists');
}