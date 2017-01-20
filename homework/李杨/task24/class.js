function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('\\b' + cls + '\\b'));
}

function addClass(ele, cls) {
  if (ele.length && ele.length > 0) {
    for (var i = 0; i < ele.length; i++) {
      singleAddClass(ele[i], cls);
    }
  } else {
    singleAddClass(ele, cls);
  }
}

function removeClass(ele, cls) {
  if (ele.length && ele.length > 0) {
    for (var i = 0; i < ele.length; i++) {
      singleRemoveClass(ele[i], cls);
    }
  } else {
    singleRemoveClass(ele, cls);
  }
}

function singleAddClass(ele, cls) {
  if (hasClass(ele, cls)) return;
  ele.className += ' ' + cls;
}

function singleRemoveClass(ele, cls) {
  ele.className = ele.className.replace(new RegExp('\\b' + cls + '\\b', 'g'), '');
}