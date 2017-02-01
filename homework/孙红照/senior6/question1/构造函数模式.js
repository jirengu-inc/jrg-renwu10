// 构造函数模式
function Person(name, age){
	this.name = name;
	this.age = age;
}
Person.prototype.sayName = function(){
	 alert(this.name);
}


// 调用
var student = new Person("ReedSun", 22);
student.sayName();