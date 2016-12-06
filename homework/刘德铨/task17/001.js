/*----------------------1-----------------------*/
function getInfo(name, age, sex){
        console.log('name:',name);
        console.log('age:', age);
        console.log('sex:', sex);
        console.log(arguments);
        arguments[0] = 'valley';
        console.log('name', name);
    }
 
    getInfo('hunger', 28, '男');
    getInfo('hunger', 28);
    getInfo('男');


/*
    name: hunger
    age: 28
    sex: 男
    ['hunger', 28, '男']
    name valley
    name: hunger
    age: 28
    sex: undefined
    ['hunger', 28]
    name valley
    name: 男
    age: undefined
    sex: undefined
    ['男']
    name valley
*/

/*----------------------2-----------------------*/
 function sumOfSquares(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        sum +=  Math.pow(arguments[i],2);
    }
    console.log(sum);  
}
   sumOfSquares(2,3,4);   // 29
   sumOfSquares(1,3);   // 10


/*----------------------3-----------------------*/
console.log(a);
var a = 1;
console.log(b);

/*
    undefined                  
    //Js解析时读到var a，提升变量，执行时a为未定义，输出undefined
    Uncaught ReferenceError: b is not defined
    //Js解析时没有读到var b，执行时b为不存在，输出Uncaught ReferenceError: b is not defined
*/

/*----------------------4-----------------------*/
    sayName('world');
    sayAge(10);
    function sayName(name){
        console.log('hello ', name);
    }
    var sayAge = function(age){
        console.log(age);
    };

/*
    hello world
    //Js解析时读到function sayName(name)，提升函数
    执行sayName('world')时，输出hello world
    Uncaught TypeError: sayAge is not a function
    //Js解析时读到var sayAge，执行sayAge(10)时
    function sayAge不存在，输出Uncaught TypeError: sayAge is not a function
*/

/*----------------------5-----------------------*/
 function fn(){}
    var fn = 3;
    console.log(fn);

/*
    3
    //Js解析时先读到function fn()，再读到var fn
    function fn()被var fn覆盖，执行var fn = 3时fn = 3，输出3
*/



/*----------------------6-----------------------*/
    function fn(fn2){
       console.log(fn2);
       var fn2 = 3;
       console.log(fn2);
       console.log(fn);
       function fn2(){
            console.log('fnnn2');
        }
     }
    fn(10);

/*
    function fn2(){
            console.log('fnnn2');
    }
    //Js解析时读到function fn(fn2)，var fn2，function fn2()
      执行fn(10)时，function fn存在
      执行console.log(fn2)时
      var fn2存在但fn2为undefined
      function fn2存在且函数体非空
      var fn2无法覆盖function fn2
      输出function fn2(){
            console.log('fnnn2');
      }
    3
    //执行var fn2 = 3时，fn2 = 3
      执行console.log(fn2)时
      var fn2存在且fn2为3
      function fn2存在且函数体非空
      var fn2覆盖function fn2
      输出3
    function fn(fn2){
       console.log(fn2);
       var fn2 = 3;
       console.log(fn2);
       console.log(fn);
       function fn2(){
            console.log('fnnn2');
        }
     }
     //
     执行console.log(fn)时，function fn存在且函数体非空
      输出function fn(fn2){
       console.log(fn2);
       var fn2 = 3;
       console.log(fn2);
       console.log(fn);
       function fn2(){
            console.log('fnnn2');
        }
      }
*/


/*----------------------7-----------------------*/
    var fn = 1;
    function fn(fn){
         console.log(fn);
    }
    console.log(fn(fn));

/*
    Uncaught TypeError:fn is not a function
    //Js解析时读到var fn,function fn(fn)
    执行var fn = 1时，var fn覆盖function fn(fn)，fn = 1
    执行console.log(fn(fn))时，function fn(fn)不存在
    输出Uncaught TypeError:fn is not a function
*/

/*----------------------8-----------------------*/
   console.log(j);
    console.log(i);
    for(var i=0; i<10; i++){
        var j = 100;
    }
    console.log(i);
    console.log(j);

/*
    undefined
    undefined
    10
    100
    //Js解析时读到var i,var j
    执行第一句console.log(j)时，j为undefined，输出undefined
    执行第一句console.log(i)时，i为undefined，输出undefined
    执行for循环时，i = 10，j = 100
    执行第二句console.log(i)时，i = 10，输出10
    执行第二句console.log(j)时，j = 10，输出100
*/

/*----------------------9-----------------------*/
    fn();
    var i = 10;
    var fn = 20;
    console.log(i);
    function fn(){
        console.log(i);
        var i = 99;
        fn2();
        console.log(i);
        function fn2(){
            i = 100;
        }
    }
/*
    undefined
    100
    10
    //Js解析时读到var i,var fn，function fn()，function fn2()
    执行fn()时
    var fn存在但fn为undefined
    function fn存在且函数体非空
    var fn无法覆盖function fn
    执行第二句console.log(i)时，i为undefined，输出undefined
    执行var i = 99时，i = 99
    执行fn2()时，function fn2存在，i = 100
    执行第三句console.log(i)时，i = 100，输出100
    fn()执行完
    执行var i = 10时，i = 10
    执行var fn = 10时
    var fn存在且fn为10
    function fn存在且函数体非空
    var fn覆盖function fn
    fn = 10
   执行第一句console.log(i)时，i = 10，输出10
    
*/

/*----------------------10-----------------------*/
    var say = 0;
    (function say(n){
        console.log(n);
        if(n<3) return;
        say(n-1);
    }( 10 ));
    console.log(say);

/*
    10
    9
    8
    7
    6
    5
    4
    3
    2
    0
    //Js解析时读到var say,function say(n)
    执行var say = 0时，say = 0
    执行立即执行函数时
    n = 10，执行console.log(n)，输出10
    经过if语句判断，递归调用say函数
    依次继续输出9,8,7,6,5,4,3,2
    执行console.log(say)时，say = 0
    输出0
*/



