//构造函数模式
function People(name, age){
    this.name = name
    this.age = age
}
People.prototype.sayName = function(){
    return this.name
}
var person = new People('winters', 20)
person.sayName()//winters