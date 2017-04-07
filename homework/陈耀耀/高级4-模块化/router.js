/**
 * Created by yaoyao on 2017/2/22.
 */
app.get('/water', function(req, res) {
    console.log(req.query);
    var bigData = [
        {"img-src":"imgs/luba.png",
            "p_name":"路霸"},

        {"img-src":"imgs/anna.png",
            "p_name":"安娜"},
        {"img-src":"imgs/asan.png",
            "p_name":"阿三"},
        {"img-src":"imgs/dj.png",
            "p_name":"DJ"},
        {"img-src":"imgs/dva.png",
            "p_name":"D.VA"},
        {"img-src":"imgs/faji.png",
            "p_name":"法鸡"},
        {"img-src":"imgs/heiyin.png",
            "p_name":"黑影"},
        {"img-src":"imgs/jiqiren.png",
            "p_name":"机器人"},
        {"img-src":"imgs/ju.png",
            "p_name":"狙"},
        {"img-src":"imgs/kuangshu.png",
            "p_name":"狂鼠"},
        {"img-src":"imgs/liekong.png",
            "p_name":"裂空"},
        {"img-src":"imgs/maomei.png",
            "p_name":"毛妹"},
        {"img-src":"imgs/sishen.png",
            "p_name":"死神"},
        {"img-src":"imgs/tianshi.png",
            "p_name":"天使"},
        {"img-src":"imgs/tuobiang.png",
            "p_name":"托比昂"},
        {"img-src":"imgs/xiaomei.png",
            "p_name":"小美"},
        {"img-src":"imgs/xingxing.png",
            "p_name":"猩猩"},
    ];
    var	mesData = [];
    var curPage = req.query.curPage,
        perPageCount = req.query.perPageCount;

    for(var i =0;i<perPageCount;i++){
        mesData[i] = bigData[parseInt( Math.random()*bigData.length )];
    }
    console.log(mesData);
    res.send({
        "status":0,
        "data": mesData
    });
});
