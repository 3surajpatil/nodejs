var util=require('util');
const EventEmitter = require('events');


class Person extends EventEmitter{    
    constructor(name){
        super();
        this.name=name;
    }
};


var suraj=new Person('suraj');
var supath=new Person('supath');
var pankaj =new Person('pankaj');
var shahrukh=new Person('shahrukh');

var personArr=[suraj,supath,pankaj,shahrukh];

personArr.forEach(function(person){
person.on('speak',function(mssg){
console.log(`${person.name} : ${mssg}`);    
});
});

suraj.emit('speak','hi there...!');
supath.emit('speak', 'chalo niche...!');
shahrukh.emit('speak','nahi upar chalte hain');


