//模块模式
var People = (function(){
	var name = 'winters'
	function sayName(){
		console.log(name)
	}
	return {
		name: name,
		sayName: sayName
	}
})()
People.name
People.sayName()