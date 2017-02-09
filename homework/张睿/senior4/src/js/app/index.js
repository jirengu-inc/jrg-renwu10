define(['jquery', 'com/gotop', 'com/carousel', 'com/exposure', 'com/addmore'], function($, GoTop, Carousel, Exposure, Addmore) {

  new GoTop();

  Carousel.init($('.carousel'));

  new Exposure($('.exposure'));

  new Addmore($('.portfolio'));
});
