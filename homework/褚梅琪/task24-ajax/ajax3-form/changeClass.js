function hasClass(el,cls){
	var reg = new RegExp( '\\b'+cls+'\\b' );
	return reg.test(el.className);
}

function singleAddClass(el,cls){
	if( !hasClass(el,cls) ){
		el.className += ' '+cls;
	}
}

function addClass(el,cls){
	if( el.length && el.length>0){
		for(var i=0;i<el.length;i++){
			singleAddClass(el[i],cls);
		}
	}else{
			singleAddClass(el,cls);
		}
}

function singleRemoveClass(el,cls){
	if( hasClass( el,cls ) ){
		el.className = el.className.replace(cls,'').replace(/\s{2,}/g,' ');
	}
}

function removeClass(el,cls){
	if(el.length && el.length>0){
		for(var i=0;i<el.length;i++){
			singleRemoveClass(el[i],cls);
		}
	}else{
			singleRemoveClass(el,cls);
		}
}