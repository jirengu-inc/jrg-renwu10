;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-iconfonttingzhi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.154014 0c-282.66615 0-511.847009 229.172493-511.847009 511.826038 0 282.653545 229.18086 511.826038 511.847009 511.826038s511.844963-229.172493 511.844963-511.826038C1023.998977 229.172493 794.820164 0 512.154014 0zM512.154014 927.685397c-229.6823 0-415.875375-186.187493-415.875375-415.859359S282.471714 95.966679 512.154014 95.966679c229.67923 0 415.874352 186.187493 415.874352 415.859359S741.834268 927.685397 512.154014 927.685397z"  ></path>'+
      ''+
      '<path d="M319.10553 318.519404l380.507441 0 0 383.870808-380.507441 0 0-383.870808Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-bofang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.583314 9.142857c-277.736229 0-502.857143 225.1392-502.857143 502.857143 0 277.736229 225.120914 502.857143 502.857143 502.857143s502.857143-225.120914 502.857143-502.857143C1015.440457 234.282057 790.319543 9.142857 512.583314 9.142857L512.583314 9.142857zM512.583314 943.019886C274.9056 943.019886 81.563429 749.677714 81.563429 512c0-237.661257 193.342171-431.019886 431.019886-431.019886S943.6032 274.338743 943.6032 512C943.6032 749.677714 750.262857 943.019886 512.583314 943.019886L512.583314 943.019886z"  ></path>'+
      ''+
      '<path d="M420.677486 743.149714c-2.770286 0-5.5424-0.6656-8.1024-1.963886-6.0672-3.051886-9.856-9.259886-9.856-15.994514L402.719086 314.671543c0-6.6816 3.717486-12.820114 9.645714-15.9232 5.893486-3.086629 13.083429-2.631314 18.554514 1.175771l287.3472 199.899429c4.770743 3.3152 7.647086 8.735086 7.7184 14.520686 0.069486 5.807543-2.666057 11.278629-7.332571 14.716343L431.305143 739.642514C428.149029 741.957486 424.429714 743.149714 420.677486 743.149714z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiangyoujiantouyuan" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128c-211.744443 0-384 172.255557-384 384s172.255557 384 384 384 384-172.255557 384-384S723.744443 128 512 128zM732.959548 501.152426c-0.032684-0.127295-0.192662-0.25631-0.25631-0.383604-1.536138-3.615858-3.648542-7.071738-6.591802-10.047682-0.032684-0.032684-0.063647-0.032684-0.096331-0.063647-0.032684-0.032684-0.032684-0.063647-0.063647-0.096331l-158.911974-159.359226c-12.480043-12.480043-32.704421-12.576374-45.248112-0.063647-12.512727 12.480043-12.54369 32.735385-0.063647 45.248112l103.328907 103.616181L320 480.00258c-17.664722 0-31.99914 14.336138-31.99914 32.00086s14.336138 32.00086 31.99914 32.00086l306.752748 0-106.112189 104.959656c-12.576374 12.447359-12.672705 32.671738-0.25631 45.248112 6.239161 6.335493 14.496116 9.504099 22.751351 9.504099 8.12794 0 16.25588-3.103239 22.496761-9.247789l160.25545-158.495686C735.328262 526.592447 737.72794 512.767209 732.959548 501.152426z"  ></path>'+
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
