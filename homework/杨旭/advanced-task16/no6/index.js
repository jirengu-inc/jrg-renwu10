/**
 * 1.判断加载框的位置，如果加载框可见则发送ajax请求请求数据，不可见不发
 * 2.判断数据长度，若请求回来的数据为空，则不发送请求
 * 3.若正在请求数据，则不发送ajax请求
 * 4.请求发送成功后，加载数据
 */

var isNewsArrive = true
    ,isNewsEmpty = false
    ,pageIndex = 0

getNews()

function checkNews(){
    if(isShow('.load-moew') && !isNewsEmpty && isNewsArrive){
        getNews()
    }
}

function getNews(){
    isNewsArrive = false
    $.ajax({
        type:'get',
        data:{
            page:pageIndex
        },
        success:function(data){
            pageIndex++
            appendHtml(data.message)
            checkNews()
        },
        error:function(){
            alert('error')
        }
    })
}

function isShow($node){
    var windowHeight = $(window).height(),
        scrollTop = $(window).scrollTop(),
        offsetTop = $(node).offset().top,
        nodeHeight = $(node).height()
    if(windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight){
        return true
    }else{
        return false
    }
}

    function appendHtml(news){
      if(news.length === 0){
        //$('.load-more').remove();
        isNewsEmpty = true;
        $('.container').append('<p>没有更多数据了~</p>')
        return;
      }
      var htmls = '';
      $.each(news, function(){
        htmls += '<li class="item">';
        htmls += '<a href="' + this.link + '">';
        htmls += '<div class="thumb"> <img src="' + this.img +'"></div>';
        htmls += '<h2>'+this.title+'</h2>';
        htmls += '<p>'+this.brif+'</p>';
        htmls += '</a></li>';
      })

      $('.news').append(htmls);
    }