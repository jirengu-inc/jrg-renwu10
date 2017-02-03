function Barrels($ct) {
      this.$ct = $ct;
      this.baseHeight = 120;
      this.rowList = [];
      this.loadImg();
    }

    Barrels.prototype = {

      loadImg: function() {
        var _this = this;
        var imgUrls = this.getImgUrls(50);
        $.each(imgUrls,function(idx, url){
          var img = new Image();
          img.src = url;
          img.onload = function(){
            var imgInfo = {
              target: $(img),
              width: _this.baseHeight * (img.width/img.height),
              height: _this.baseHeight,
            };
            _this.render(imgInfo);
          }
        });
      },


      render: function(imgInfo){
        var _this = this;
        var rowList = this.rowList,
            rowWidth = 0,
            rowHeight = 0,
            clientWidth = this.$ct.width(),
            lastImgInfo = imgInfo;

        this.rowList.push(imgInfo);

        $.each(rowList,function(idx, imgInfo){
          rowWidth += imgInfo.width;
          if(rowWidth  > clientWidth ){
            rowList.pop();
            rowWidth = rowWidth - lastImgInfo.width;
            rowHeight = clientWidth * _this.baseHeight / rowWidth;

            _this.createRow(rowHeight);
            _this.rowList = [];
            _this.rowList.push(lastImgInfo);
          }
        });
      },

      createRow: function(rowHeight){
        var $rowCt = $('<div class="img-row"></div>');
        var imgFragment = document.createDocumentFragment();
        var rowFragment = document.createDocumentFragment();
        $.each(this.rowList, function(idx, imgInfo){
          var $imgCt = $('<div class="img-box"></div>'),
              $img = imgInfo.target;
              $img.height(rowHeight);
            //  $imgCt.append($img);   
             imgFragment.appendChild($img[0]);       
              //$rowCt.append($imgCt);
             // rowFragment.appendChild($imgCt[0]);
              rowFragment.appendChild(imgFragment);
        });
        $rowCt[0].appendChild(rowFragment);
        this.$ct.append($rowCt);
      },

      getImgUrls: function(num) {
        var color, width, height, urls = [];
        for (var i = 0; i < num; i++) {
          color = Math.random().toString(16).substring(2, 8);
          width = Math.floor(Math.random() * 100 + 50);
          height = Math.floor(Math.random() * 30 + 50);
          urls.push("http://placehold.it/" + width + "x" + height + "/" + color + "/fff");
        }
        return urls;
      }

    }


    var barrels = new Barrels($('.img-preview'));
