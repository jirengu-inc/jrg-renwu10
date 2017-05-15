//工厂模式
function createPeople(opts){
	var people = {
		name: opts.name || 'winters',
	  sayName: function(){
			console.log(this.name)
		}
	}
	return people
}
var p1 = createPeople({name: 'hunger'})
var p2 = createPeople({name: 'jirengu'})