var express=require('express');
var bodyParser = require('body-parser');

var app=express();

app.set('view engine','ejs');
app.use('/styles',express.static('styles'));
app.use(bodyParser.urlencoded({ extended: false }));

// here we are creating parser middleware..
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 

/*
we can set different directory as view directory with below.
app.set('views', __dirname+'/view');
*/

app.get('/',function(req,res){

    res.render('index');
});

var data={age: 29, job: 'ninja', hobbies: ['sleeping','eating','running']};

app.get('/profile/:name',function(req,res){    
    res.render('profile',{person: req.params.name, data: data});    
});

app.get('/contact',function(req,res){    
    res.render('contact',{qs:req.query});
});

app.get('/contact',function(req,res){        
    res.render('contact',{qs:req.query});
});


//registering urlencodedParser here.
app.post('/contact',urlencodedParser,function(req,res){   
    
    res.render('contact-success',{data:req.body});    
});


app.listen(9090,'127.0.0.1');