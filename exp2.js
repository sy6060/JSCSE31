//fisrtly import the fs (file system) module in your program
const fs=require('fs');  //making object of fs module
//create file and also write some content in that file
fs.writeFile('student.txt','hello,this file is for students',(err)=> {
    if(err) 
        throw err; 
    console.log('file created and content written')
});
//now reading file content using readFile method
fs.readFile('student.txt','utf8',(err,data)=> {
    if(err) 
        throw err;
    console.log(data);
});
//update file content using appendFile method
//it will only add new content to the existing file content
fs.appendFile('student.txt','\nfile of CSE 3rd sem',(err)=> {
    if(err) 
        throw err;
    console.log('file content updated');
});
//finally delete the file using unlink method
fs.unlink('student.txt',(err)=> {
    if(err) 
        throw err;
    console.log('file deleted successfully');
});