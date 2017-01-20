/*----------------------1-----------------------*/
//方法1
var fnArr = [];
for (var i = 0; i < 10; i ++) {
    (function(){
        var n = i;
        fnArr[i] =   function(){
            return n;
        }
    })();
}
console.log( fnArr[3]() ); //3

//方法2
var fnArr = [];
for (var i = 0; i < 10; i ++) {
    fnArr[i] = ( function(){
        var n = i;
        return function(){
            return n;
        }
    })();
}
console.log( fnArr[3]() );  //3

//方法3
var fnArr = [];
for (var i = 0; i < 10; i ++) {
    (function(i){
        fnArr[i] =   function(){
            return i;
        }
    })(i);
}
console.log( fnArr[3]() ); //3

//方法4
var fnArr = [];
for (var i = 0; i < 10; i ++) {
    fnArr[i] = ( function(i){
        return function(){
            return i;
        }
    })(i);
}
console.log( fnArr[3]() );  //3

/*----------------------2-----------------------*/

var Car = (function (spe){
    var speed;
    function setSpeed(spe){
        speed = spe;
    }
    function getSpeed(){
        console.log(speed) ;
    }
    function accelerate(){
        speed += 10;
    }
    function decelerate(){
        speed -= 10;
    }
    function getStatus(){
        //speed > 0 ? console.log('running'):console.log('stop');
        console.log(speed > 0 ? 'running' : 'stop');
    }
    return {
        'setSpeed' : setSpeed,
        'getSpeed' : getSpeed,
        'accelerate' : accelerate,
        'decelerate' : decelerate,
        'getStatus' : getStatus
    }
})();




Car.setSpeed(30);
Car.getSpeed(); //30
Car.accelerate();
Car.getSpeed(); //40;
Car.decelerate();
Car.decelerate();
Car.getSpeed(); //20
Car.getStatus(); // 'running';
Car.decelerate();
Car.decelerate();
Car.getStatus();  //'stop';
//Car.speed;  //error



/*----------------------3-----------------------*/

//无参数
var i = 1;
function fun(){
    console.log(i++);
}
var interval = setInterval(fun,3000);


var i = 1;
function fun(){
    console.log(i++);
}

newSetInterval(fun,3000);
function newSetInterval(fun,time){ 
    interval = setTimeout(function(){
        fun();
        newSetInterval(fun,time);
    },time);
}

clearTimeout(interval);


//有参数
var i = 1;
function fun(str, arg){
    console.log( str + (arg + i++));
}
var interval = setInterval(fun, 3000, '次数:', 100);


var i = 1;
function fun(str, arg){
    console.log(str + (arg + i++));
}

newSetInterval(fun, 3000, '次数:', 100);
function newSetInterval(fun, time, str, arg){ 
    interval = setTimeout(function(){
        fun(str, arg);
        newSetInterval(fun, time, str, arg);
    },time);
}


clearTimeout(interval);



/*----------------------4-----------------------*/


(function getmin(){
    var time = 0;
    var str = '测试输出1000次1：';
    var i = 1;
    var num = 1000;
    var start = Date.now();
    newSetInterval(str,time,i,num);
    function newSetInterval(str,time,i,num){
        interval = setTimeout(function(){
            console.log(str + 1);
            if(i  == num){
                clearTimeout(interval);
                var end = Date.now();
                console.log((end - start)/num + 'ms');
            }      
            else{
                i++;
                newSetInterval(str,time,i,num);    
            }      
        },time);   
    };   
} )();


/*----------------------5-----------------------*/


var a = 1;
setTimeout(function(){
    a = 2;
    console.log(a);     
}, 0);
var a ;
console.log(a);         
a = 3;
console.log(a);         



//前置
var a ;
var a ;

a = 1;
console.log(a);         //1. 输出1
a = 3;
console.log(a);         //2. 输出3
setTimeout(function(){
    a = 2;
    console.log(a);     //3. 间隔一段时间再执行，输出2
}, 0);


/*----------------------6-----------------------*/
var flag = true;
setTimeout(function(){
    flag = false;
},0)
while(flag){}
console.log(flag);

//前置
var flag

flag = true;
while(flag){}          //陷入死循环，什么都不输出
console.log(flag);
setTimeout(function(){
    flag = false;
},0)


/*----------------------7-----------------------*/

for(var i=0;i<5;i++){
    setTimeout(function(){
         console.log('delayer:' + i );
    }, 0);
    console.log(i);
}



//方法1
for(var i=0;i<5;i++){
    (function(){
        console.log(i);
        var n = i; 
        setTimeout(function(){ 
        console.log('delayer:' + n );
       }, 0);  
    })();  
}

//方法2
for(var i=0;i<5;i++){
    (function(i){
        console.log(i);
        setTimeout(function(){ 
        console.log('delayer:' + i );
       }, 0);  
    })(i);  
}






//方法3
for(var i=0;i<5;i++){
    setTimeout((function(){
        var n = i;
        console.log(i);
        return function(){
            console.log('delayer:' + n );
        }     
    })(), 0);
}


//方法4
for(var i=0;i<5;i++){
    setTimeout((function(i){
        console.log(i);
        return function(){
            console.log('delayer:' + i );
        }     
    })(i), 0);
}


