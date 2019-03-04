var http=require('http');
var fs=require('fs');

class Person{

    constructor(id,name,contact){
        this.id=id;
        this.name=name;
        this.contact=contact;
    }
}


var server=http.createServer((req,res)=>{

    console.log('getting request at '+req.url);
    if(req.url==='/'){
        res.writeHead(200,'text/html');
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
   else if(req.url==='/persons')
    {
        res.writeHead(200, {'Content-Type':'application/json'});
        var p1=new Person(1,'suraj','8999611265');
        var p2=new Person(2,'supath','8198736749');
        var p3=new Person(3,'shahrukh','1876485042');

        var persons=[p1,p2,p3];

        res.end(JSON.stringify(persons));
    }
    else{
        res.writeHead(404, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }    
      
});


server.listen(9090,'127.0.0.1');

console.log('server listening...!');