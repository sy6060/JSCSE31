//finally delete the file using unlink method
fs.unlink('student.txt',(err)=> {
    if(err) 
        throw err;
    console.log('file deleted successfully');
});