//单例模式
//构造函数的实例只有一个，可以节约内存
//一般是通过闭包存储内部实例，通过接口访问内部实例
var People = (function(){
	var instance
	function init(){
		//定义私有方法和属性
		var name = 'winters'
		return {
			//定义公有方法和属性
			getName: function(){
				return name
			}
		}
	}
	return {
		createPeople: function(){
			if(!instance){
				instance = init()
			}
			return instance
		}
	}
})()
var person = People.createPeople()
var person2 = People.createPeople()
person === person2//true