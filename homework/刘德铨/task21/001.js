/*----------------------1-----------------------*/

console.log(trim('  wer79_ 43LH@#  []   ')); //'wer79_ 43LH@#  []'

function trim(str) {
    return str.replace(/^\s+|\s+$/, '');
}


/*----------------------2-----------------------*/

var el = {
    className : 'one-first two three'
}

console.log(hasClass(el,'one'));            //false
console.log(hasClass(el,'one-first'));      //true
console.log(hasClass(el,'two'));            //true
console.log(hasClass(el,'three'));          //true
console.log(addClass(el,'four'));           //one-first two three four
console.log(removeClass(el,'three'));       //one-first two four
console.log(removeClass(el,'one-first'));   //two four
console.log(removeClass(el,'four'));        //two



function hasClass(el, cls){
    var reg = new RegExp('(^|\\s)' + cls + '(\\s|$)');
    return reg.test(el.className);
}

function addClass(el, cls){
    if(!hasClass(el,cls)){
        return el.className += ' ' + cls;  
    }
}

function removeClass(el, cls){
    if(hasClass(el, cls)){
        var reg = new RegExp(cls + '(\\s|$)');
        return el.className = el.className.replace( reg, '');
    }
}

/*----------------------3-----------------------*/

console.log(isEmail('aa100aa@gmail.cn')); 
console.log(isEmail('100@yeah.net')); 
console.log(isEmail('100@163.com'));  
console.log(isEmail('100@hao123.com'));  
console.log(isEmail('100@qq.com'));     
console.log(isEmail('100@hao123.comcom'));     
console.log(isEmail('@qq.com'));     
console.log(isEmail('100@qqcom'));
console.log(isEmail('100@qq.'));
console.log(isEmail('100qq.com'));


function isEmail(str){
    return /^\w+[@][A-z0-9]+\.(com|cn|net)$/.test(str);
}



/*----------------------4-----------------------*/


console.log(isPhoneNum('13123456789'));
console.log(isPhoneNum('14123456789'));
console.log(isPhoneNum('15123456789'));
console.log(isPhoneNum('18123456789'));
console.log(isPhoneNum('181 3456789'));
console.log(isPhoneNum('181a3456789'));
console.log(isPhoneNum('181@3456789'));



function isPhoneNum(str){
    return /^(13|14|15|18)[0-9]{9}$/.test(str);
}

/*----------------------5-----------------------*/

console.log(isValidUsername('12345'));
console.log(isValidUsername('123456'));
console.log(isValidUsername('12345678900123456789'));
console.log(isValidUsername('1234abcdeffedcba6789'));
console.log(isValidUsername('1234_bcdeffedcb_6789'));
console.log(isValidUsername('1234abcde  edcba6789'));
console.log(isValidUsername('1234abcdeffedcba6789000'));
console.log(isValidUsername('@#$1234abcdeffedcba6789'));
console.log(isValidUsername('123456@11.com'));


function isValidUsername(str){
    return /^\w{6,20}$/.test(str);
}



/*----------------------6-----------------------*/


console.log(isValidPassword('1234a'));
console.log(isValidPassword('1234A'));
console.log(isValidPassword('1234_'));
console.log(isValidPassword('abcd_'));
console.log(isValidPassword('Abcd_'));
console.log(isValidPassword('Abc1_'));
console.log(isValidPassword('123456'));
console.log(isValidPassword('abcdef'));
console.log(isValidPassword('ABCDEF'));
console.log(isValidPassword('______'));
console.log(isValidPassword('_bcdefghijklmnopqrst000'));
console.log(isValidPassword('@@@1234567890012345678a'));
console.log(isValidPassword('12345a'));
console.log(isValidPassword('12345_'));
console.log(isValidPassword('12345A'));
console.log(isValidPassword('123456Aa_'));
console.log(isValidPassword('123456Aa'));
console.log(isValidPassword('123456A_'));
console.log(isValidPassword('123456a_'));
console.log(isValidPassword('ABCDEFa_'));
console.log(isValidPassword('1234567890012345678A'));
console.log(isValidPassword('ABCDEFGHIJKLMNOPQ_'));
console.log(isValidPassword('Abcdefghijklmnopqrst'));
console.log(isValidPassword('_bcdefghijklmnopqrst'));





function isValidPassword(str){
    if (/^\w{6,20}$/.test(str)) {
        return !/(^[A-Z]{6,20}$)|(^[0-9]{6,20}$)|(^[a-z]{6,20}$)|(^[_]{6,20}$)/.test(str);
    }
    else {
        return false;
    }
}


/*----------------------7-----------------------*/

//var re = /#[0-9a-fA-F]{6}/g;
var re = /#[0-9a-f]{6}/ig;

 
var subj = "color: #121212; background-color: #AA00ef; width: 12px; bad-colors: f#fddee #fd2 "
 

alert( subj.match(re) )  // #121212,#AA00ef




/*----------------------8-----------------------*/

var str = 'hello  "hunger" , hello "world"';
var pat =  /".*"/g;
str.match(pat); //[""hunger" , hello "world""]



var str = 'hello  "hunger" , hello "world"';
var pat =  /".*"?/g;
str.match(pat);  //["hunger" ,"world"]


/*----------------------9-----------------------*/


//贪婪模式
str = '.. <!-- My -- comment \n test >--> ..  <!----> .. '
//re = /<!--[^>]*-->/g
re = /<!--(.(?!<!--)|\n)*-->/g
str.match(re) // '<!-- My -- comment \n test -->', '<!---->'




//非贪婪模式
str = '.. <!-- My -- comment \n test --> ..  <!----> .. '
//re = /<!--[^]*?-->/g
re = /<!--(.|\n)*?-->/g
str.match(re) 
// '<!-- My -- comment \n test -->', '<!---->'



/*----------------------10-----------------------*/

//贪婪模式
//var re = /<[^>]+>/g
//var re = /<[^<]+>/g
var re = /<(.(?!<))+>/g 


var str = '<> <a href="/"> <input type="radio" checked> <b>'
str.match(re) // '<a href="/">', '<input type="radio" checked>', '<b>'




//非贪婪模式
var re = /<[A-z].*?>/g
 
var str = '<> <a href="/"> <input type="radio" checked> <b>'
str.match(re) // '<a href="/">', '<input type="radio" checked>', '<b>'


