define(['jquery', 'com/waterfall'], function($, Waterfall) {

  function Addmore($node) {
    this.list = $node.find('.portfolio-wrap');
    this.getData();
    this.click($node);
  }
  Addmore.prototype = {
    getData: function() {
      var that = this;
      $.ajax({
        url: './php/getData.php',
        dataType: 'json',
        type: 'get',
        data: {
          num: 6
        }
      }).done(function(ret) {
        that.place(ret);
      }).fail(function() {
        console.log('error');
      });
    },
    click: function($node) {
      var that = this;
      $node.find('#load').on('click', function() {
        that.getData();
      });
    },
    place: function(ret) {
      var $nodes = this.renderData(ret),
          deferreds = [];
      $nodes.find('img').each(function() {
        var defer = $.Deferred();
        $(this).load(function() {
          defer.resolve();
        });
        deferreds.push(defer);
      });
      $.when.apply(null, deferreds).done(function() {
        new Waterfall($('.portfolio'));
      });
    },
    renderData: function(data) {
      var str = '';
      for(var i = 0; i < data.length; i++) {
        str += '<li class="item">';
        str += '  <a class="portfolio-link" href="javascript:void(0)">';
        str += '   <div class="portfolio-hover"><i class="fa fa-plus"></i></div>';
        str += '   <img src="' + data[i].img_url + '" alt="roundicons">';
        str += '  </a>';
        str += '  <div class="portfolio-desp">';
        str += '  <h3>' + data[i].short_name + '</h3>';
        str += '  <p class="text-muted">' + data[i].short_intro + '</p>';
        str += '  </div>';
        str += '</li>';
      }
      var $nodes = $(str);
      this.list.append($nodes);
      return $nodes;
    }
  };

  return Addmore;
});
