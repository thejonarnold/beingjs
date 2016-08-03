function Database(params){
	this.server = params.server;
	this.database = params.database;

	this.tables = [];
}

module.exports = Database;