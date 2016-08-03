function TableField(params){
	this.name = params.name;
	this.type = params.type;
	this.nullabe = params.nullable;
	this.default = params.default;
}

module.exports = TableField;