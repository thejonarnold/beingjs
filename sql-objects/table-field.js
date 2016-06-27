function TableField(data){
	this.name = data.name;
	this.type = data.type;
	this.nullabe = data.nullable;
	this.default = data.default;
	this.identity = data.identity;
}

TableField.prototype.getSql = function(){
	var ret = `${this.name} ${this.type} `;

	if(this.nullabe){
		ret += 'NULL ';
		
	} else {
		ret += 'NOT NULL '
		if(this.default){
			ret += `DEFAULT ${this.default} `
		}  else if(this.identity){
			ret += `IDENTITY(${this.identity[0]}, ${this.identity[1]}) `
		} 
	}
	return ret;

}

module.exports = TableField;