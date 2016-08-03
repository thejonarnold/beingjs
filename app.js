var glob = require("glob");
var Database = require("./sql-objects/database.js");
var Table = require("./sql-objects/table.js");


var db = new Database(require("./models/database.js"))

glob("models/tables/**/*.js", null, function(err, files){

	files.forEach(function(f){
		console.log(f);
		db.tables.push(new Table(require("./"+f)))
		
	});

	console.log(JSON.stringify(db));

});
