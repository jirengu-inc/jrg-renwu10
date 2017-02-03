// 发布订阅模式

var EventCenter =(function(){
	// 事件池
	var events = {};
	
	// 事件挂载
	function on(evt, handler){
	events[evt] = events[evt] || [];
	events[evt].push({
		handler:handler
	});
	}

	// 事件触发
	function fire(evt, args){
		if(!events[evt]){
			return;
		}
		for(var i=0;i<events[evt].length;i++){
			events[evt][i].handler(args);
		}
	}

	//  事件移除
	function off(evt){
		delete events[evt]
	}
	return {
		on: on,
		fire: fire,
		off: off
	}
})();


// 调用
EventCenter.on("my_event", function(data){
	console.log("my_event被监控");
})
EventCenter.on("my_event2", function(data){
	console.log("my_event2被监控");
})
EventCenter.fire("my_event");