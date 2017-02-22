function DatePicker($target) {
    this.init($target);
    this.render();
    this.setDate();
    this.bind();
}


DatePicker.prototype.init = function($target) {
    this.$target = $target;
    this.date = new Date();
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();

}


DatePicker.prototype.bind = function() {
    this.preMonth();
    this.nextMonth();
    this.dateClick();
    this.showDatepicker();
    this.hideDatepicker();
}

DatePicker.prototype.render = function() {
    var tpl = '<div class="calender">' +
        '<header>' +
        '<span class="pre caret-left"></span>' +
        '<span class="next caret-right"></span>' +
        '<span class="header-date"></span>' +
        '</header>' +
        '<table class="panel">' +
        '<thead>' +
        '<tr>' +
        '<th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '</tbody>' +
        '</table>' +
        '</div>';
    this.$datepicker = $(tpl);
    this.$datepicker.insertAfter(this.$target)
        .css({
            "position": "absolute",
            "left": this.$target.offset().left,
            "top": this.$target.offset().top + this.$target.height(true),
            "display": "none"
        });
}




DatePicker.prototype.setDate = function() {
    this.watchDay = [];
    this.$datepicker.find('tbody').html('');
    $('.calender tbody').html('');

    var html = '';
    // var year = date.getFullYear(),
    //     month = date.getMonth();
    var dateStr = this.year + '年' + (this.month + 1) + '月';
    this.$datepicker.find('header .header-date').text(dateStr);
    var curDate = new Date();
    var curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth(),
        today = curDate.getDate();
    var days = this.fullDays(this.date);
    var preDate = this.getPreDate(this.date),
        nextDate = this.getNextDate(this.date);
    var preDays = this.fullDays(preDate);
    var day = new Date(this.year, this.month, 1).getDay(),
        nextDay = new Date(nextDate.getFullYear(), nextDate.getMonth(), 1).getDay();
    for (var i = day; i > 0; i--) {
        var preHtml = '<td class="pre-month">' + (preDays - i + 1) + '</td>';
        this.watchDay.push(preHtml)
    }

    for (var i = 0; i < days; i++) {
        if (curYear == this.year && curMonth == this.month && today == (i + 1)) {
            if (i < 9) {
                curHtml = '<td class="cur-month cur-day">' + '0' + (i + 1) + '</td>';
            } else {
                curHtml = '<td class="cur-month cur-day">' + (i + 1) + '</td>';
            }

        } else {
            if (i < 9) {
                curHtml = '<td class="cur-month">' + '0' + (i + 1) + '</td>';
            } else {
                curHtml = '<td class="cur-month">' + (i + 1) + '</td>';
            }
        }

        this.watchDay.push(curHtml);
    }
    var nextMonthDay = 1;
    for (var i = nextDay; i < 7; i++) {
        var nextHtml = '<td class="next-month">' + '0' + (nextMonthDay) + '</td>'
        this.watchDay.push(nextHtml);
        nextMonthDay++;
    }
    for (var i = 0; i < this.watchDay.length; i++) {
        if (i < 35) {
            if (i === 0) {
                html += '<tr>';
            };
            if (i !== 0 && i % 7 === 0) {
                html += '</tr><tr>';
            };
            html += this.watchDay[i];
            if (i === 34) {
                html += '</tr>';
            }
        }
    }
    this.$datepicker.find('tbody').append(html);
}


DatePicker.prototype.preMonth = function() {
    var _this = this;
    this.$datepicker.find('.pre').click(function(e) {
        e.stopPropagation();
        _this.date = _this.getPreDate(_this.date);
        _this.year = _this.date.getFullYear();
        _this.month = _this.date.getMonth();
        _this.setDate();
    })

}


DatePicker.prototype.nextMonth = function() {
    var _this = this;
    this.$datepicker.find('.next').click(function(e) {
        e.stopPropagation();
        _this.date = _this.getNextDate(_this.date);
        _this.year = _this.date.getFullYear();
        _this.month = _this.date.getMonth();
        _this.setDate();
    })

}

DatePicker.prototype.showDatepicker = function() {
    var _this = this;
    this.$target.on('click', function(e) {
        e.stopPropagation();
        _this.$datepicker.show();
    })
}


DatePicker.prototype.hideDatepicker = function() {
    var _this = this;
    $(window).on('click', function() {
        _this.$datepicker.hide();
    })
}

// 点击选择时间
DatePicker.prototype.dateClick = function() {
    var _this = this;
    this.$datepicker.on('click', function(e) {
        e.stopPropagation();
    });
    this.$datepicker.on('click', '.cur-month', function(e) {
        e.stopPropagation();
        var day = $(this).text();
        var dateStr = _this.year + '/' + (_this.month + 1) + '/' + day;
        _this.$target.val(dateStr);
        _this.$datepicker.hide();
    });
}




DatePicker.prototype.fullDays = function(date) {
    var curYear = date.getFullYear(),
        curMonth = date.getMonth();
    var tpl;
    if (curMonth === 11) {
        var month = 0,
            year = curYear + 1;
        var days = (new Date(year, month, 1).getTime() - new Date(curYear, curMonth, 1).getTime()) / (1000 * 60 * 60 * 24);
    } else {
        var month = curMonth + 1,
            year = curYear;
        var days = (new Date(year, month, 1).getTime() - new Date(curYear, curMonth, 1).getTime()) / (1000 * 60 * 60 * 24);
    }
    return days;
}



// 获取date上月1号时间对象
DatePicker.prototype.getPreDate = function(date) {
    var month = date.getMonth(),
        year = date.getFullYear();
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    return (new Date(year, month, 1));
}


//  获取下个月1号时间对象

DatePicker.prototype.getNextDate = function(date) {
    var month = date.getMonth(),
        year = date.getFullYear();
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    return (new Date(year, month, 1));
}



// setData(date);

// 创建对象的方式

//new DatePicker($('input'));


// 变成插件；
$.fn.datePicker = function() {
    this.each(function() {
        new DatePicker($(this));
    });
};
