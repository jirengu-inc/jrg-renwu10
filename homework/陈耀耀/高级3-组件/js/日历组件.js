    function DatePicker($target) {
      //初始化当前日期
      this.init($target);

      //渲染日历模板
      this.render();

      //设置模板里面的数据
      this.setData();

      //绑定事件
      this.bind();
    }

    DatePicker.prototype = {

      init: function($target) {
        this.$target = $target;
        if (this.isValidDate($target.attr('date-init'))) {
          this.date = new Date($target.attr('date-init'));   //当前日期或者指定的要展示的日期
          this.watchDate = new Date($target.attr('date-init'));  //用户在切换月份时所看到的日期,初始为当前日期
        } else {
          this.date = new Date();
          this.watchDate = new Date();
        }

      },

      render: function() {
        var tpl = '<div class="ui-date-picker" style="display:none">'
              +    '<div class="header"><span class="pre caret-left"></span><span class="cur header-date"></span><span class="next caret-right"></span></div>'
              +    '<table class="panel">'
              +      '<thead> <tr> <th>日</th> <th>一</th> <th>二</th> <th>三</th> <th>四</th> <th>五</th> <th>六</th> </tr> </thead>'
              +      '<tbody></tbody>'
              +   '</div>';
        this.$datepicker = $(tpl);
        this.$datepicker.insertAfter(this.$target)
                        .css({
                          'position': 'absolute',
                          'left': this.$target.offset().left,
                          'top': this.$target.offset().top + this.$target.height(true)
                        });
      },


      setData: function() {
        this.$datepicker.find('tbody').html('');

        var firstDay = this.getFirstDay(this.watchDate),
            lastDay = this.getLastDay(this.watchDate);

        var dateArr = [];

        for(var i = firstDay.getDay(); i>0; i--){
          var d = new Date( firstDay.getTime() - i*24*60*60*1000 );
          dateArr.push( {type:'pre', date:d} );
        }

        for(var j = 0; j< lastDay.getDate() - firstDay.getDate() + 1; j++){
          var d = new Date( firstDay.getTime() + j*24*60*60*1000 );
          dateArr.push( {type:'cur', date: d} );
        }

        for(var k = 1; k < 7 - lastDay.getDay(); k++ ){
          var d = new Date( lastDay.getTime() + k*24*60*60*1000 );
          dateArr.push( {type:'next', date: d}  )
        }

        this.$datepicker.find('.header-date').text(this.watchDate.getFullYear()+'年'+(this.watchDate.getMonth()+1)+'月');

        var tpl = '';
        for(var i=0;i<dateArr.length;i++){
          if(i%7 === 0){
            tpl = '<tr>' + tpl;
          }

          tpl += '<td class="';

          if(dateArr[i].type === 'pre'){
            tpl += 'pre-month';
          }else if(dateArr[i].type === 'cur'){
            tpl += 'cur-month';
          }else{
            tpl += 'next-month'
          }

          if(this.getYYMMDD(this.date) === this.getYYMMDD(dateArr[i].date)){
            tpl += ' cur-date';
          }
          tpl += '"';

          tpl += ' data-date="'+ this.getYYMMDD(dateArr[i].date) + '">';
          tpl += this.toFixed( dateArr[i].date.getDate()) + '</td>';


          if(i%7===6){
            tpl = tpl + '</tr>'
          }
        }

        this.$datepicker.find('tbody').html(tpl);
      },

      bind: function() {
        var self = this;
        this.$datepicker.find('.pre').on('click', function(){
          self.watchDate = self.getPreMonth(self.watchDate);
          self.setData();
        });
        this.$datepicker.find('.next').on('click', function(){
          self.watchDate = self.getNextMonth(self.watchDate);
          self.setData();
        });
        this.$datepicker.on('click', '.cur-month', function(){
          self.$target.val($(this).attr('data-date'))
          self.$datepicker.hide();
        });

        this.$target.on('click', function(e){
          e.stopPropagation();
          self.$datepicker.show();
        });

        //下面设置点击页面其他部分隐藏 datepicker
        this.$datepicker.on('click', function(e){
          e.stopPropagation();
        });
        $(window).on('click', function(e){
          self.$datepicker.hide();
        })
      },

      isValidDate: function(dateStr) {
        return new Date(dateStr).toString() !== 'Invalid Date';
      },

      //获取 date 所在月份的第一天的时间对象
      getFirstDay: function(date) {
        var year = date.getFullYear(),
          month = date.getMonth();

        return newDate = new Date(year, month, 1);
      },


      //获取 date 所在月份最后一天的时间对象
      getLastDay: function(date) {
        var year = date.getFullYear(),
          month = date.getMonth();
          month++;

        if (month > 11) {
          month = 0;
          year++;
        }
        var newDate = new Date(year, month, 1);
        return new Date(newDate.getTime() - 1000 * 60 * 60 * 24);
      },


      //获取date 上月1号时间对象
      getPreMonth: function(date){
        var year = date.getFullYear(),
          month = date.getMonth();

        month--;
        if (month < 0) {
          month = 11;
          year--;
        }
        return new Date(year, month, 1);
      },

      //获取date 下月1号时间对象
      getNextMonth: function(date){
        var year = date.getFullYear(),
          month = date.getMonth();

        month++;
        if (month > 11) {
          month = 0;
          year++;
        }
        return new Date(year, month, 1);
      },


      getYYMMDD: function(date){
        var yy = date.getFullYear(),
            mm = date.getMonth()+1
        return date.getFullYear() + "/" + this.toFixed(date.getMonth() + 1) + "/" + this.toFixed(date.getDate());
      },

      //eg:  1 -> "01"  11 -> "11"
      toFixed: function(n){
        return (n+'').length === 1 ? ('0'+ n+'') : (n+'');
      }


    }



  // 创建对象的方式
  // $('.date-ipt').each(function(){
  //   new DatePicker($(this));
  // })




    //变成 jquery 插件
    $.fn.datePicker = function() {
        this.each(function(){
          new DatePicker($(this));
        });
    };

    $('.date-ipt').datePicker();