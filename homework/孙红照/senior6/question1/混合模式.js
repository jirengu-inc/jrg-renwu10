// 混合模式
// 就是在原有的对象上面增加、覆盖对象的行为。
var Person = function(name, age){
	this.name = name;
	this.age = age;
};
Person.prototype.sayName = function(){
	alert(this.name);
}
var Student = function(name, age, score) {
	Person.call(this, name, age);
	this.score = score;
}
function inherit(superClass, slefClass){
	var _prototype = Object.create(superClass.prototype);
	_prototype.constructor = slefClass;
	slefClass.prototype = _prototype;
}
inherit(Person, Student);
Student.prototype.sayScore = function(){
	alert(this.score);
}


//调用
var student = new Student("ReedSun", 22, 100);
student.sayName();
student.sayScore();