function PrimaryKey(data){
	this.sourceData = data;

	this.name = data.name;
	this.columns = data.columns; 
}

module.exports = PrimaryKey;