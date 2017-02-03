/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
// app.get('/hello', function(req, res) {
// 	res.send({
// 		status: 0,
// 		msg: "hello 饥人谷"
// 	});
// });


/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/hello', function(req, res) {
	console.log(req.query); 
	var bigData = [ 
							 {"img_url":"http://cdn.sinacloud.net/maggie/%E5%AE%9E%E6%88%9815/waterfall/dabai-t.jpg",
							 "short_name":"Fly To The Sky",
							 "short_intro":"和魔法师们空中飞行"},

							 {"img_url":"http://cdn.sinacloud.net/maggie/实战15/waterfall/dabaif-t.jpg",
							 "short_name":"The Snow Queen",
							 "short_intro":"魔法城堡里最伟大的女王"},

							 {"img_url":"http://cdn.sinacloud.net/maggie/%E5%AE%9E%E6%88%9815/waterfall/dude.jpg",
							 "short_name":"Play In The Snow",
							 "short_intro":"雪地探险，奇妙无限"
							 },

							 {"img_url":"http://cdn.sinacloud.net/maggie/实战15/waterfall/fly.jpg",
							 "short_name":"Be Kind To Everyone",
							 "short_intro":"离别的不舍，不要忘记我"
							 },

							 {"img_url":"http://cdn.sinacloud.net/maggie/实战15/waterfall/frosen.jpg",
							 "short_name":"Live On Your Own",
							 "short_intro":"成功蜕变，成为最伟大的自己"
							 },

							 {"img_url":"http://cdn.sinacloud.net/maggie/实战15/waterfall/hug.jpg",
							 "short_name":"Game With The Family",
							 "short_intro":"魔法家族守卫之战"
							 },

							 {"img_url":"http://cdn.sinacloud.net/maggie/实战15/waterfall/kid-t.jpg",
							 "short_name":"Fly To The Sky",
							 "short_intro":"和魔法师们空中飞行"},

							 {"img_url":"http://cdn.sinacloud.net/maggie/实战15/waterfall/mouse.jpg",
							 "short_name":"The Snow Queen",
							 "short_intro":"魔法城堡里最伟大的女王"},

							 {"img_url":"http://cdn.sinacloud.net/maggie/实战15/waterfall/panda.jpg",
							 "short_name":"Play In The Snow",
							 "short_intro":"雪地探险，奇妙无限"
							 },

							 {"img_url":"http://cdn.sinacloud.net/maggie/实战15/waterfall/papa-t.jpg",
							 "short_name":"Be Kind To Everyone",
							 "short_intro":"离别的不舍，不要忘记我"
							 },

							 {"img_url":"http://cdn.sinacloud.net/maggie/实战15/waterfall/play.jpg",
							 "short_name":"Live On Your Own",
							 "short_intro":"成功蜕变，成为最伟大的自己"
							 },

							 {"img_url":"http://cdn.sinacloud.net/maggie/实战15/waterfall/snow.jpg",
							 "short_name":"Game With The Family",
							 "short_intro":"魔法家族守卫之战"
							 }
            ];
	var	mesData = [];
	var curPage = req.query.curPage,
			perPageCount = req.query.perPageCount;

	for(var i =0;i<perPageCount;i++){
	  	mesData[i] = bigData[parseInt( Math.random()*bigData.length )];
	  }
	 console.log(mesData);
	res.send({ "status":{"code":"0"},
					     "data": mesData
				    });
});


/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */
// app.post('/comment', function(req, res) {
// 	console.log(req.body.comment); // "这是评论内容"
// 	res.send({
// 		status: 0,
// 		data: {
// 			cid: 100,
// 			comment: "这是评论内容"
// 		}
// 	});
// });



/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
// app.get('/user', function(req, res) {
// 	res.render('user.ejs', {
// 		username: '饥人谷'
// 	});
// });