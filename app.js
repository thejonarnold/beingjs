function Animal(name){
	this.name = name;
}

Animal.prototype.speak = function(){
	console.log('hello my name is ' + this.name);
}



Cat.prototype = new Animal();
function Cat(name){
	console.log('here');
	Animal.call(this,name);
}

Cat.prototype.speak = function(){
	console.log('meow');
	Animal.prototype.speak.call(this);
}

var steven = new Cat("Steven");
steven.speak();

