requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['jquery', 'app/Carousel', 'app/Gotop', 'app/Exposure', 'app/WaterFall'],
    function($, Carousel, GoTop, Exposure,WaterFall) {
        Carousel.init($('.carousel'));

        new GoTop;

        Exposure.init($('img, .about li'), function ($node) {
            showImg($node)
        });
        function showImg($img){
            var imgUrl = $img.attr('data-src');
            $img.attr('src', imgUrl);
        }

        new WaterFall($('.items'));

        //jQuery, canvas and the app/sub module are all
            //loaded and can be used here now.
    });