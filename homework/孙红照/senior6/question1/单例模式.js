// 单例模式
// 构造函数的实例只有一个 可以节约内存
// 一般是通过闭包存储内部实例，通过接口访问内部实例。

var People = (function(){
	var instance;
	function init() {
		this.a = 1;
		this.b = 2;
	}
	return {
		createPeople: function(){
			if(!instance){
				instance = init();
			}
			return instance;
		}
	}
})();


var obj1 = People.createPeople();
var obj2 = People.createPeople();
obj1 === obj2 // true