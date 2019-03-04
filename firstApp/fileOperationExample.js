var fs=require('fs')

fs.readFile('./readme.txt','UTF8',(err,data)=>{
    if(err) throw err;    
    writeDataToFile(data);   
});

function writeDataToFile(data){
    
    fs.writeFile('./stuff/writeme.txt',data,(err)=>{
    if(err) throw err;          
    });

}

