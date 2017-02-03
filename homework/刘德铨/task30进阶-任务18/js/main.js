
var water = (function(){

    function render(){
        var nodeWidth = $('.item').outerWidth(true),
            colNum = parseInt($(window).width()/nodeWidth),
            colSumHeight = [];

        for(var i = 0; i < colNum; i++){
            colSumHeight.push(0);
        }

        $('.item').each(function(){
            var $cur = $(this); 
            /*Math.min.apply(null, colSumHeight);*/
            var idx = 0,
                minSumHeight = colSumHeight[0];

            for(var i = 0; i < colSumHeight.length; i++){
                if(colSumHeight[i] < minSumHeight){
                    idx = i;
                    minSumHeight = colSumHeight[i];
                }
            }

            $cur.css({
                left: nodeWidth * idx,
                top: minSumHeight
            })

            colSumHeight[idx] += $cur.outerHeight(true);
        }); 
    }
    render();

    $(window).on('resize', function(){
        render();
    })

    return {
        init: render
    }
})()

water.init();



