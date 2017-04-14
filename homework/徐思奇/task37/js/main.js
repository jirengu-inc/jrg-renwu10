//引用路径配置
requirejs.config({
	baseUrl: './js',//此处索引：index.html位置为起始目录
	paths: {
		'jquery': 'lib/jquery-3.2.1.min'
	}
})

//加载入口模块
requirejs(['app/index'])
