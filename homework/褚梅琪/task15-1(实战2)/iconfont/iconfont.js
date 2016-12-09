;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-choose" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M21.376 292.864 512 829.248 1002.688 292.864Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-huojian" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M941.979 148.772c-2.428 78.961-19.472 154.859-47.926 228.39-34.044 87.982-83.842 165.41-153.644 229.387-5.665 5.188-7.439 10.751-6.69 18.068 2.415 23.668 4.351 47.384 6.788 71.047 5.684 55.195-13.646 100.36-58.144 132.417-47.724 34.382-97.376 66.115-146.635 98.317-31.041 20.295-69.194 1.876-72.651-34.939-3.968-42.284-7.088-84.652-10.031-127.019-1.47-21.202-0.898-21.389-21.423-24.094-54.513-7.191-97.171-33.053-126.462-80.019-15.069-24.164-22.54-50.893-25.161-78.963-0.786-8.421-4.177-10.573-12.117-11.013-44.098-2.438-88.193-5.048-132.235-8.375-36.627-2.769-55.21-41.394-35.575-73.638 13.801-22.658 28.477-44.782 42.719-67.168 15.34-24.108 30.578-48.281 45.956-72.361 28.141-44.066 68.712-67.87 120.642-68.287 29.736-0.238 59.533 5.006 89.251 8.206 5.633 0.608 9.619-0.164 13.506-4.51 69.006-77.128 154.402-129.185 251.086-164.016 54.649-19.686 110.883-32.538 168.581-38.49 29.077-2.999 58.369-4.102 87.422 1.283 15.831 2.933 16.64 3.583 19.078 19.045C940.749 117.495 942.686 133.028 941.979 148.772L941.979 148.772zM804.201 343.528c0.83-67.446-55.036-125.459-121.428-126.556-68.973-1.139-128.684 48.997-130.326 127.29-1.377 65.3 57.775 124.439 123.779 124.906C746.534 469.665 803.327 413.902 804.201 343.528L804.201 343.528zM215.187 628.598c13.057 0.178 20.286 5.937 24.964 19.271 18.348 52.258 51.729 91.912 100.132 118.776 10.681 5.927 21.933 10.737 33.564 14.704 20.913 7.131 25.684 27.5 10.166 43.173-22.971 23.197-46.19 46.139-69.161 69.325-7.593 7.669-15.949 11.294-26.639 7.326-10.85-4.033-16.085-12.07-16.632-23.308-0.346-7.125-0.169-14.274-0.337-21.412-0.309-13.115-0.431-13.222-12.501-9.227-25.811 8.553-51.589 17.184-77.395 25.737-7.611 2.521-15.246 3.569-22.69-0.646-10.914-6.181-15.032-17.231-10.639-30.827 8.571-26.512 17.572-52.889 26.334-79.341 3.804-11.476 3.57-11.729-8.823-11.92-7.481-0.117-14.971 0.01-22.437-0.351-10.873-0.523-18.62-5.792-22.648-16.085-3.931-10.034-1.418-18.769 5.923-26.156 23.968-24.113 48.042-48.123 72.108-72.147C203.267 630.709 208.956 628 215.187 628.598L215.187 628.598zM215.187 628.598"  ></path>'+
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
