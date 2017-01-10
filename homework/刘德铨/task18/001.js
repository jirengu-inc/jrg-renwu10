/*----------------------1-----------------------*/
var A = [1,2,3,4,5];
A.push(6,7);
console.log(A);  //[1, 2, 3, 4, 5, 6, 7]

var A = [1,2,3,4,5];
A.pop();
console.log(A);  //[1, 2, 3, 4]

var A = [1,2,3,4,5];
A.shift();
console.log(A);  //[2, 3, 4, 5]

var A = [1,2,3,4,5];
A.unshift(-2,-1,0);
console.log(A); //[-2, -1, 0, 1, 2, 3, 4, 5]

var A = [1,2,3,4,5];
console.log(A.join('-'));  //1-2-3-4-5
console.log(A);            //[1, 2, 3, 4, 5]



var A = 'Hello World!';
console.log(A.split('0'));  //["Hello World!"]
console.log(A);              //Hello World!

var A = 'Hello World!';
console.log(A.split(''));  //["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"]
console.log(A);             //Hello World!

var A = 'Hello World!';
console.log(A.split('lo'));  //["Hel", " World!"]
console.log(A);            //Hello World!    


/*----------------------2-----------------------*/
/*push*/
var A = [1,2,3,4,5];
A.splice(A.length, 0, 6, 7); 
console.log(A);             //[1, 2, 3, 4, 5, 6, 7]

/*pop*/
var A = [1,2,3,4,5];
A.splice(A.length - 1 , 1);
console.log(A);            //[1, 2, 3, 4]

/*shift*/
var A = [1,2,3,4,5];
A.splice(0, 1);
console.log(A);             //[2, 3, 4, 5]

/*unshift*/
var A = [1,2,3,4,5];
A.splice(0, 0, -1, 0); 
console.log(A);             //[-1, 0, 1, 2, 3, 4, 5]

var A = [1,2,3,4,5];
A.splice(1, 0, -1, 0); 
console.log(A); 


/*----------------------3-----------------------*/
var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装']
};
function getTpl(data){
//todo...
    var product = new Array();
    product[0] = '<dl class="product">';
    product[1] = '<dt>' + data.name + '</dt>';
    for(var i = 0; i < data.styles.length; i++){
        product[2 + i] = '<dd>' + data.styles[i] + '</dd>';
    }
    product[2 + data.styles.length] = '</dl>';
    return product.join('');
};
var result = getTpl(prod);  //result为下面的字符串
console.log(result);

/*<dl class="product"><dt>女装</dt><dd>短款</dd><dd>冬季</dd><dd>春装</dd></dl>*/


/*----------------------4-----------------------*/


var arr = [ "test", 2, 1.5, false ];
find(arr, "test"); // 0
find(arr, 2); // 1
find(arr, 0); // -1

function find(arr, item){
    var j = -1
    for(var i = 0; i < arr.length; i++ ){
        if(item === arr[i]){
            j = i;
        }
    }
    console.log(j);
}

/*----------------------5-----------------------*/

arr = ["a", "b", 1, 3, 5, "b", 2];
newarr = filterNumeric(arr);  //   [1,3,5,2]
console.log(newarr);

function filterNumeric(arr){
    var newarr = new Array();
    for(var i = 0; i < arr.length; i++ ){
        if(typeof arr[i] == 'number'){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}


/*----------------------6-----------------------*/


var obj = {
  className: 'open menu'
}
addClass(obj, 'new') // obj.className='open menu new'
console.log(obj.className);
addClass(obj, 'open')  // 因为open已经存在，所以不会再次添加open
console.log(obj.className);
addClass(obj, 'me') // me不存在，所以 obj.className变为'open menu new me'console.log(obj.className)  // "open menu new me"
console.log(obj.className);

removeClass(obj, 'open') // 去掉obj.className里面的 open，变成'menu new me'
console.log(obj.className);
removeClass(obj, 'blabla')  // 因为blabla不存在，所以此操作无任何影响
console.log(obj.className);


/*方法1*/
function addClass(obj, Name){
    var i = obj.className.indexOf(Name + ' ');
    if(i == -1){
        obj.className += ' ' + Name ;
    }
}

function removeClass(obj, Name){
    var i = obj.className.indexOf(Name + ' ');
    var j = Name.length;
    var lstr = new String();
    var rstr = new String();
    if(i != -1){
        if(i != 0){
            lstr = obj.className.substring(0, i-1); 
        }       
        rstr = obj.className.substring(i + j + 1);
        obj.className = lstr + rstr;
    }
}

/*方法2*/
function addClass(obj, Name){
    var name = new Array();
    name = obj.className.split(' ');
    for(var i = 0; i < name.length; i ++) {
        if( Name == name[i]){
            return;
        }
    }
    obj.className += ' ' + Name ;
}


function removeClass(obj, Name){
    var name = new Array();
    name = obj.className.split(' ');
    for(var i = 0; i < name.length; i++) {
        if(Name == name[i]){
            name.splice(i,1);
            i--;
        }
    }
    obj.className = '';
    for(var i = 0; i < name.length - 1; i++){
        obj.className += name[i] + ' ';
    }
    obj.className += name[i];
}


/*----------------------7-----------------------*/

console.log(camelize("background-color"));//backgroundColor
console.log(camelize("list-style-image"));//listStyleImage



function camelize(str){
    var strarr = new Array();
    strarr = str.split('-');
    for(var i = 1; i < strarr.length; i++){
        strarr[i] = strarr[i].substring(0,1).toUpperCase() 
        + strarr[i].substring(1);
    }
    return strarr.join('');
}


/*----------------------8-----------------------*/
arr = ["a", "b"];
arr.push( function () {
    alert(console.log('hello hunger valley'));
} );
arr[arr.length-1]() ;

//输出hello hunger valley
//弹出undefined
/*
console.log命令打印出hello hunger valley
console.log返回值就是undefined，所以alert(console.log())弹出undefined
*/

/*----------------------9-----------------------*/

console.log(isPalindrome('abcdcba'));  //是回文
console.log(isPalindrome('abcdefg'));  //不是回文


function isPalindrome(str){
    for(var i = 0, j = str.length - 1; i < str.length, j >= 0; i++, j--){
        if(!(str[i] == str[j])){
            return '不是回文';
        }
    }
    return '是回文';
}





/*----------------------10-----------------------*/

var john = { name: "John Smith", age: 23 }
var mary = { name: "Mary Key", age: 18 }
var bob = { name: "Bob-small", age: 6 }
var people = [ john, mary, bob ];
ageSort(people); // [ bob, mary, john ]

function ageSort(arr){
   arr.sort(
    function(a,b){
        return a.age-b.age;
    }
  );
    for(var i = 0; i < arr.length; i++){
      console.log(arr[i].name);
    }
}


/*----------------------11-----------------------*/


function isNumeric (el){
    return typeof el === 'number';
}
arr = ["a",3,4,true, -1, 2, "b"]
 
arr = filter(arr, isNumeric) ; // arr = [3,4,-1, 2],  过滤出数字
console.log(arr);
arr = filter(arr, function(val) {
    return  typeof val === "number" && val > 0
});  
// arr = [3,4,2] 过滤出大于0的整数
console.log(arr);

function filter(arr,func){
    for(var i = 0; i< arr.length; i++){
        if(!func(arr[i])){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}



/*----------------------12-----------------------*/

console.log(ucFirst("hunger")); // "Hunger"

function ucFirst(str){
    var strarr = str.split('');
    strarr[0] = strarr[0].toUpperCase();
    str = '';
    for(var i = 0; i < strarr.length; i++){
        str += strarr[i];
    }
    return str;
}


/*----------------------13-----------------------*/


console.log(truncate("hello, this is hunger valley,", 10)); 
// "hello, thi...";
console.log(truncate("hello world", 20)); // "hello world"


function truncate(str, maxlength){
    if(maxlength < str.length){
        return str = str.substring(0,maxlength) + '...';
    }
    else {
        return str;
    } 
}

/*----------------------14-----------------------*/
random(10,50);
function random(min,max){
    var num = Math.floor(Math.random() * (max - min)) + min;
    console.log(num);
}


/*----------------------15-----------------------*/
random(10,50);
function random(min,max){
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(num);
}


/*----------------------16-----------------------*/

random(5,3,50);
function random(len,min,max){
    var arr = [];
    for(var i = 0; i < len; i++){
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(arr);
}


/*----------------------17-----------------------*/

function getRandStr(len){
   var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
       randStr = '';
    for(var i = 0; i < len; i++){
        randStr += str[Math.floor(Math.random() * str.length)];
    }
    console.log(randStr);
}
var str = getRandStr(10);
































