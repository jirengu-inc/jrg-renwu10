import $ from 'jquery'
import carousel from './app/carousel'
import gotop from './app/gotop'
import loadmore from './app/loadmore'

carousel.init($('.carousel'))
gotop.init($('body'), 500)
loadmore.init($('.waterfall-ct'), $('.loadmore'))