var TableField = require('./table-field');
var _ = require('lodash');

function Table(data){
	this.name = data.name;
	this.fields = [];

	this.fields.push(new TableField({
		name: 'id',
		type: 'uniqueidentifier', 
		nullable: false,
		default: 'NewSequentialGuid()'
	}));

	for(var field in data.fields){
		var x = data.fields[field];
		x.name = field;
		this.fields.push(new TableField(x));
	}




}

Table.prototype.getSql = function(){
	var ret = `CREATE TABLE ${this.name}( \n`
	ret += _.map(this.fields,function(f){return f.getSql();}).join(',\n');

	ret += ')'
	return ret;
}

module.exports = Table;