$(function(){
			$('.mod-tab .tabs li').on('click',function(){
				var $cur = $(this);
				var idx = $cur.index();
				$cur.siblings().removeClass('active');
				$cur.addClass('active');
				
				$cur.parents('.mod-tab').find('.panel').removeClass('active');
				$cur.parents('.mod-tab').find('.panel').eq(idx).addClass('active');
			});

			$('.mod-tab .prod').on('mouseenter',function(){
				$(this).addClass('hover');
			});
			$('.mod-tab .prod').on('mouseleave',function(){
				$(this).removeClass('hover');
			})
		})