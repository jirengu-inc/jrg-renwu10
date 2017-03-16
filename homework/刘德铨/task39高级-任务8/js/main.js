
var widthPer = (function(){
    var event = {};
    function on(evt, handler){
         event[evt] = event[evt] || [];
         event[evt].push({
            handler: handler
         });
    }

    function trigger(evt,args) {
        if(!event[evt]) {
            return;
        }
        for(var i = 0; i < event[evt].length; i++) {
            event[evt][i].handler(args);
        }
    }

    return {
        on: on,
        trigger: trigger    
    }
})();

widthPer.on('width', function(){
    var col = document.querySelectorAll("[class*='col-']");
    var colWid = [];
    Array.prototype.slice.call(col).forEach(function(col){
        colWid.push((col.clientWidth/document.body.offsetWidth)
            .toFixed(2) * 100 + '%')
        
    });
    var contents = document.querySelectorAll('.content');
        [].slice.call(contents).forEach(function(con,idx){
            con.innerText = colWid[idx];
        })

})

widthPer.trigger('width');
window.addEventListener('resize', function(){
    widthPer.trigger('width');
})
