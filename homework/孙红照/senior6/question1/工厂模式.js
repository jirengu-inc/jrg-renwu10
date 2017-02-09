// 工厂模式
function crearePerson(opts){
	var person = {
		name: opts.name||"ReedSun"
	};
	person.sayName =  function(){
		alert(this.name);
	}
	return person;
}


var p1 = crearePerson({name:"ReedSun"});
var p2 = crearePerson({name:"jirengu"});
p1.sayName();
p2.sayName();