module.exports = {
	name: 'Person',
	fields:{
		name:{
			type:'varchar(50)',
			null:false,
		},
		age:{
			type:'tinyint',
			null:false
		},
	},
	references:	{
		gender:{ //example of a lookup table
			hasOne:'gender',
			null:false
		},
		pets:{
			hasMany:'pet',
			dominant:true
		}
	}

}