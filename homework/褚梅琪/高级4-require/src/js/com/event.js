/**
 * 
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-21 17:43:39
 * @version $Id$
 */

define(function(){

	var EventCenter = (function(){

		var events = {};

		function on(evt, handler){
			events[evt] = events[evt] || []; 


			/**
			 * events = {
			 * 		'text-change': []
			 * 	
			 *  }
			 * 
			 */


			events[evt].push({
				handler: handler
			});

			/**
			 * events = {
			 * 		'text-change': [ { handler: function(data){console.log(data) }    }  ]
			 * 	
			 *  }
			 * 
			 */
		}

		function fire(evt, args){
			if(!events[evt]){
				return;
			}
			for(var i=0; i<events[evt].length; i++){
				events[evt][i].handler(args);
			}
			
		}

		return {
			on: on,
			fire: fire
		}
	})();


	return EventCenter;
});




	// EventCenter.on('text-change', function(data){
	// 	console.log(data);
	// });
	
	// EventCenter.on('text-change', function(data){
	// 	alert(1);
	// });
	

	// EventCenter.fire('text-change', 100);
