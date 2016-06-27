var fs = require('fs');
var Table = require('./sql-objects/table');

fs.readdir('./models',function(err,files){
	//console.log(files);
	files.forEach(function(file){
		var fullPath = './models/'+file;
		var data = require(fullPath);
		var table = new Table(data);
		console.log(table.getSql());
		
	});
});