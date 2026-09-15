//perform crud operations on files using fs module
const fs=require('fs');
fs.writeFile('student.txt','name: Sanvi Yadav\nroll no: 250320\nbranch:CSE\nsemester: 3rd',error=>{
    if(error)throw error;
    console.log('file created and content written');
})

fs.readFile('student.txt','utf8',(error,data)=>{
    if(error)throw error;
    console.log(data);
});

fs.appendFile('student.txt','\nsubject: FSD\nmarks: 45/50\nattendance:83%',error=>{
    if(error)throw error;
    console.log('file content added');
});

fs.readFile('student.txt','utf8',(error,data)=>{
    if(error)throw error;
    //displaying updated data
    console.log(data);
});
