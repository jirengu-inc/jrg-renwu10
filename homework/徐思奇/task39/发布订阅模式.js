//发布订阅模式
var EventCenter = (function(){
	var events = {}
	function on(evt, handler){
		events[evt] = events[evt] || [] //初始为空，得到空数组，即 events['my_events'] = []
		events[evt].push({
			handler: handler//加入handler方法
		})
 	}

	 function fire(evt, args){
		 if(!events[evt]){
			 return
		 }
		 for(var i=0; i < events[evt].length; i++){
			 events[evt][i].handler(args)
		 }
	 }
	 return{
		 on: on,
		 fire: fire
	 }
})()

EventCenter.on('my_event', function(data){
	console.log('my_event received...')
})
EventCenter.fire('my_event')