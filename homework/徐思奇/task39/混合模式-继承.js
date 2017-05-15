//混合模式-继承
function People(name, age){
	this.name = name
	this.age = age
}
People.prototype.sayName = function(){
	console.log(this.name)
}

function Man(name, age, score){
	People.call(this, name, age)
	this.score = score
}
Man.prototype = Object.create(People.prototype)
Man.prototype.sayScore = function(){
	console.log(this.score)
}

var man = new Man('winters', 20, 100)
man.sayName()
man.sayScore()