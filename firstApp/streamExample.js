var fs=require('fs');

var readStream=fs.createReadStream(__dirname+'/readme.txt','UTF8');
var writeStream=fs.createWriteStream(__dirname+'/stuff/writeme.txt','UTF8')

readStream.pipe(writeStream);