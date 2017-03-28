/**
 * Created by edward on 2017/3/19.
 */
;$(function(){
        const $ul = $('ul'),
            $a = $('a')
        let num = 3;

        $ul.on('mouseenter','li',function(){
            $(this).addClass('hover');
        }).on('mouseleave','li',function(){
        $(this).removeClass('hover');
        })

        $a.on('click',function(e){
            e.preventDefault();
            if($(this).data('isLoading'))
                return;

            $(this).data('isLoading',true)
                .text('正在加载中')

            $.ajax({
                url:'/user',
                dataType:'json',
                type:'get',
                data:{
                    start:num,
                },
                success:function(data){
                    success(data);
                },
                error:function(){
                    error();
                }
            })
        })

        function success(data){
            $a.data('isLoading','false')
                .text('加载更多')
            if(data.status == 1){
                appendData(data.content)
                num += 3
            }else{
                alert('获取数据失败')
            }
        }

        function error(){
            $a.data('isLoading','false')
                .text('加载更多')
            alert('系统错误')
        }

        function appendData(data){
            $ul.append(data);
        }
    }
)



