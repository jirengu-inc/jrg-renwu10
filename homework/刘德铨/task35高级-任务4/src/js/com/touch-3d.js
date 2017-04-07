
define( function(){
    var touchThreeD = (function(){
        function tounchThreeDim($target){
            this.$target = $target;
            this.$photos = $target.find('.album-photo');
            this.bind();
        }

        tounchThreeDim.prototype = {
            bind: function(){
                this.$photos.on('mousemove', this.setThreeDim)
                this.$photos.on('mouseleave', this.cancelThreeDim)
            },

            setThreeDim: function(e){       
                var offset = $(this).offset(),
                    x = e.pageX - offset.left,
                    y = e.pageY - offset.top,
                    centerX = $(this).outerWidth() / 2,
                    centerY = $(this).outerHeight() / 2,
                    deltaX = x - centerX,
                    deltaY = y - centerY,
                    percentX = deltaX / centerX,
                    percentY = deltaY / centerY,
                    deg = 10;
                $(this).css({
                    transform: 'rotateX(' + -percentY * deg + 'deg)'
                      + ' ' +  'rotateY(' + percentX * deg + 'deg)'    
                })

            },

            cancelThreeDim: function(){
                $(this).css({
                    transform: ''
                })
            }
        }

        return {
            threeD: function($target){
                $target.each(function(idx, node){
                    new tounchThreeDim($(node));
                })
            }
        }
    })();

    return touchThreeD;
})


