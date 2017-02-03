// 模块模式
var student = (function(){
	var name = "ReedSun";
	function sayName(){
		alert(name);
	}
	return {
		name: name,
		sayName: sayName
	}
})()


// 调用
student.sayName();