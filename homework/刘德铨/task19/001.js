/*----------------------1-----------------------*/

var str = getIntv("2017-01-27");
console.log(str);   


function getIntv(str){
    var d = new Date(Date.parse(str) - Date.now())/1000;
    var day = Math.floor(d/60/60/24);
    var hour = Math.floor((d - day*24*60*60)/60/60);
    var minute = Math.floor((d - day*24*60*60 - hour*60*60)/60);
    var second = Math.floor((d - day*24*60*60 - hour*60*60 - minute*60));
    return "距除夕还有 " + day + " 天 " + hour + " 小时 " + minute + " 分 " + second + " 秒 " ; 
}


/*----------------------2-----------------------*/

var str = getChsDate('2015-01-08');
console.log(str);  // 二零一五年一月八日

function getChsDate(str){
    var date = new Date(str);
    console.log(date);
    var year = date.getFullYear() + '';
    var month = date.getMonth() + 1 + '';
    var day = date.getDate() + '';
    var cnNumber = ['零','一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','二十一','二十二','二十三','二十四','二十五','二十六','二十七','二十八','二十九','三十','三十一'];
    Year = '';
    for(var i = 0; i < year.length; i++){
        Year += cnNumber[year[i]];
    }
    return Year + '年' + cnNumber[month] + '月' + cnNumber[day] + '日';
}

/*----------------------3-----------------------*/

var lastWeek =  getLastNDays(7); // ‘2016-12-23’
console.log(lastWeek);
var lastMonth = getLastNDays(30); //'2016-11-30'
console.log(lastMonth);


function getLastNDays(day){
    var date = new Date(Date.now() - day*24*60*60*1000);
    var year = date.getFullYear() + '';
    var month = date.getMonth() + 1 + '';
    var days = date.getDate() + '';
    var time = [year,month,days];
    return time.join('-')
}


/*----------------------4-----------------------*/
var Runtime = (function(){
    //code here ...
    var startDate,endDate;
    var obj = {
        start: function(){
              //code here ...， 当前时间
              startDate = Date.now();  
        },
        end: function(){
             //code here ...  结束时间
             endDate = Date.now();
        },
        get: function(){
             //code here ...  获取执行时间
             return (endDate - startDate)/1000 + 's'; 
        }
    };
return obj;
}()
);
Runtime.start();
//todo somethint
for(var i = 0; i < 10000; i++){
    console.log(1);
}
Runtime.end();
console.log(  Runtime.get() ); //1.052s


/*----------------------5-----------------------*/
console.log(stairs(20));
function stairs(num){
    if(num === 1){
        return 1;
    }
    if(num === 2){
        return 2;
    }
    if(num > 2){
        return stairs(num - 1) + stairs(num - 2);
    } 
}




/*----------------------6-----------------------*/

/*方法1*/
var obj1 = {
    "name": 'Tom',
    "age": 20,
    "sex": '男',
    "single": true,
    "address": null,
    "work": undefined,
    "array": [1, 2, {"X": 3, "Y": 4}, [5, 6]],
    "object": {
        "a": 1,
        "b": 2,
        "c": {
            "d": 4,
            "e": 5
        },
        "f": [6, 7]
    }
}

var obj2 = deepCopy(obj1);

function deepCopy(oldObj) {
    var newObj = {};
    for(var i in oldObj){      
        if(typeof oldObj[i] === 'object'){
            if(oldObj[i] === null){
                newObj[i] = null;
                continue;
            } 
            newObj[i] = oldObj[i] instanceof Array ? [] : {};
            newObj[i] = deepCopy(oldObj[i]);
        }
        else {
            newObj[i] = oldObj[i];
        }
    } 
    return newObj;
}

console.log(obj1);
console.log(obj2);


obj1.array[2].X += 1;  

console.log(obj1.array[2].X);   //4
console.log(obj2.array[2].X);   //3



/*方法2*/
var obj1 = {
    "name": 'Tom',
    "age": 20,
    "sex": '男',
    "single": true,
    "address": null,
    "work": undefined,
    "array": [1, 2, {"X": 3, "Y": 4}, [5, 6]],
    "object": {
        "a": 1,
        "b": 2,
        "c": {
            "d": 4,
            "e": 5
        },
        "f": [6, 7]
    }
}
var obj2 = JSON.parse( JSON.stringify(obj1));

console.log(obj1);
console.log(obj2);


obj1.array[2].X += 1;  

console.log(obj1.array[2].X);   //4
console.log(obj2.array[2].X);   //3







