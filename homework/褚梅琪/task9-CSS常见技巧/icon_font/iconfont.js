;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-play" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.771803 64.063061c-247.300362 0-447.777303 200.476941-447.777303 447.777303s200.476941 447.777303 447.777303 447.777303S959.550129 759.140727 959.550129 511.840364 759.073188 64.063061 511.771803 64.063061zM511.771803 870.052792c-197.834764 0-358.212428-160.376641-358.212428-358.212428s160.376641-358.212428 358.212428-358.212428S869.984231 314.0056 869.984231 511.840364 709.60759 870.052792 511.771803 870.052792z"  ></path>'+
      ''+
      '<path d="M684.249039 483.677954 452.082352 349.636099c-21.679765-12.516058-48.77896 3.12927-48.77896 28.16241l0 268.083711c0 25.03314 27.099195 40.678468 48.77896 28.16241l232.166687-134.041856C705.928804 527.485693 705.928804 496.194012 684.249039 483.677954z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-qianjin-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M160.776 535.406v0 0 0z"  ></path>'+
      ''+
      '<path d="M872.846 155.311v0c-93.821-93.821-221.318-151.556-363.253-151.556-139.527 2.405-267.027 57.735-358.443 149.15l-2.409 2.405c-93.821 93.819-149.15 221.318-149.15 360.846 0 141.935 57.735 269.433 149.15 360.846 91.414 93.821 218.915 149.15 360.846 149.15 141.935 0 269.433-57.735 360.846-149.15 93.821-91.414 149.149-221.318 149.149-360.846 2.405-139.527-55.329-267.027-146.747-360.846zM815.11 821.674c-76.98 76.98-185.235 127.501-305.517 127.501-238.159 0-433.015-194.858-433.015-433.015 0-120.283 48.114-228.537 127.501-305.517l2.409-2.405c76.98-76.98 185.235-125.093 303.112-125.093 120.283 0 228.537 48.114 305.517 127.501 76.98 76.98 127.498 185.235 127.498 305.517s-48.114 228.537-127.498 305.517z"  ></path>'+
      ''+
      '<path d="M545.679 270.781v0c-9.62-9.624-24.055-9.624-33.679 0-4.811 4.811-7.218 9.624-7.218 16.842v113.064h-245.375c-12.029 0-24.055 12.029-24.055 24.055v185.235c0 12.029 9.62 24.055 24.055 24.055h247.783v113.066c0 14.434 12.029 24.055 24.055 24.055 7.216 0 12.029-2.405 16.842-7.218v0l228.537-228.537c9.624-9.624 9.624-24.055 0-33.679l-230.941-230.941z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tingzhi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 0C229.6 0 0 229.6 0 512s229.6 512 512 512 512-229.6 512-512S794.4 0 512 0zM512 928c-229.6 0-416-186.4-416-416s186.4-416 416-416 416 186.4 416 416S741.6 928 512 928z"  ></path>'+
      ''+
      '<path d="M319.2 318.4l380.8 0 0 384-380.8 0 0-384Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
