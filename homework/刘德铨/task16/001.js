/*----------------------1-----------------------*/
function isNumber(el){
    // todo ...
    if(typeof el == 'number') {
        return true;
    }
    else {
        return false;
    }
}
function isString(el){
    //todo ...
    if(typeof el == 'string') {
        return true;
    }
    else {
        return false;
    }
}
function isBoolean(el){
    //todo ...
    if(typeof el == 'boolean' ) {
        return true;
    }
    else {
        return false;
    }
}
function isFunction(el){
    //todo ...
    if(typeof el == 'function') {
        return true;
    }
    else {
        return false;
    }
}

var a = 2,
    b = "jirengu",
    c = false;
alert( isNumber(a) );  //true
alert( isString(a) );  //false
alert( isString(b) );  //true
alert( isBoolean(c) ); //true
alert( isFunction(a)); //false
alert( isFunction( isNumber ) ); //true

/*----------------------2-----------------------*/
console.log(1+1);             //2
console.log("2"+"4");         //24
console.log(2+"4");           //24
console.log(+new Date());     //1480868797549
console.log(+"4");            //4

console.log("2"+"41");         //241
console.log(2+"41");           //241
console.log("23"+"4");         //234
console.log(23+"4");           //234
console.log("2"+"04");         //204
console.log(2+"04");           //204
console.log("02"+"4");         //024
console.log(02+"4");           //24
console.log("2"+"x4");         //2x4
console.log(2+"4x");           //24x
console.log(new Date());  //Mon Dec 04 2016 23:29:13 GMT+0800 (中国标准时间)
console.log(+"4x");          //NaN
console.log(0 +"4x");       //04x
console.log(+new Date());             //1480927485889
console.log(new Date().valueOf());    //1480927485889

/*----------------------3-----------------------*/
var a = 1;
a+++a;

typeof a+2;  
//"number2" 先执行typeof a，得到"number",再+2,变成字符串连接


/*----------------------4-----------------------*/

var arr = [3,4,5]
// todo..// 输出 9, 16, 25 
console.log(Math.pow(arr[0],2) + ',' + Math.pow(arr[1],2) 
    + ',' + Math.pow(arr[2],2));


/*----------------------5-----------------------*/
var obj = {
  name: 'hunger',
  sex: 'male',
  age: 28
}
//todo ...// 输出 name: hunger, sex: male, age:28
for(var i in obj) {
    console.log (i + ':' + obj[i]);
}

/*----------------------6-----------------------*/
console.log(a);
var a = 1;
console.log(a);
console.log(b);

/*
    undefined    //console.log(a); a，有声明，未定义，输出undefined
    1            //var a = 1;console.log(a);  定义a = 1，输出1
    Uncaught ReferenceError: b is not defined(…)(anonymous function) @ VM182:4
    console.log(b); b未声明，输出Uncaught ReferenceError
*/

console.log(a);

/*
    VM177:1 Uncaught ReferenceError: a is not defined(…)(anonymous function) @ VM177:1
*/

console.log(a);
var a = 1;

/*
    undefined
*/

console.log(a);
var a = 1;
console.log(a);

/*
    undefined
    1
*/









































