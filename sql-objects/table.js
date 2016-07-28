var TableField = require('./table-field');
var _ = require('lodash');

function Table(params){
	this.name = params.name;
	this.fields = [];
	this.references = [];

	for(var field in params.fields){
		var x = params.fields[field];
		x.name = field;
		this.fields.push(new TableField(x));
	}
	
}


module.exports = Table;