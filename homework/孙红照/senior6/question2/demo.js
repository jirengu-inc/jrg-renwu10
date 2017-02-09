var Event = (function(){
	var event = {};
	function on(evt, handler){
		event[evt] = event[evt] || [];
		event[evt].push({
			handler: handler
		})
	}
	function fire(evt, args){
		if (!event[evt]) {
			return
		}
		for (var i=0;i<event[evt].length;i++){
			event[evt][i].handler(args);
		}
	}
	function off(evt){
		event[evt] = [];
		console.log(event);
	}
	return {
		on:on,
		fire:fire,
		off:off
	}
})()


//调用
Event.on('change', function(val){
    console.log('change...  now val is ' + val);  
});
Event.fire('change', '饥人谷');  //change...  now val is 饥人谷
Event.off('changer');
Event.fire('change', '饥人谷');  //无输出