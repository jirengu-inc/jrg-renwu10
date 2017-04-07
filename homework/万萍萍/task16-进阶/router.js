
var imgUrls = ['http://fu5.sdo.com/10036/201702/14872391106606.jpg',
'http://fu5.sdo.com/10036/201702/14861757664378.jpg',
'http://fu5.sdo.com/10036/201612/14824921723300.jpg',
'http://fu5.sdo.com/10036/201612/14824920312393.jpg',
'http://fu5.sdo.com/10036/201609/14751358684688.jpg',
'http://img.dfs.sdg-china.com/m/M2OfU4NebAf1iZAbX4.JPG',
'http://img.dfs.sdg-china.com/m/F3FcU4jM2On35C51A4.JPG',
'http://img.dfs.sdg-china.com/m/Ut5K92ANp4d2XxqAw1.JPG',
'http://img.dfs.sdg-china.com/m/1w2eU4kn7Yu11ksaE4.JPG',
'http://img.dfs.sdg-china.com/m/IRlK921oPrI4irafO3.JPG',
'http://fu5.sdo.com/10036/201511/14483555627469.jpg',
'http://fu5.sdo.com/10036/201604/14594820783958.png'];

var news = [{name: '战士',
	desc: '战士是人类中最骁勇善战的勇士，性格坚韧且骄傲。在50年前的围剿黑龙战役中，佣兵联盟的团长巴尔纳召集了疏散在各地的佣兵战士们，组成了最强大的佣兵团，作为冲锋第一线的先头部队，与黑龙进行了决战。',
	img: 'http://static.sdg-china.com/dn/pic/dn_act/2017111xzy/peo1_03.png'},
	{name: '弓箭手',
		desc: '弓箭手是诞生于生命之树的精灵族勇士。在50年前的围剿黑龙战役中，精灵族的英雄内尔文召集了精灵族中最精锐的弓箭手组成了银色新月弓手团，为狙杀敌人作出了重大贡献。',
		img: 'http://static.sdg-china.com/dn/pic/dn_act/2017111xzy/peo2_03.png'},
	{name: '魔法师',
		desc: '魔法师拥有卓越的魔法天赋。从小就离开了父母加入佩奥里斯塔魔法师团，是魔法方面的天才少女。她对自己的才能充满自信，因此眼光较高，有点大小姐的气质。在50年前的围剿黑龙战役中，魔法师以其出色的群体伤害魔法为战斗的胜利做出了贡献。',
		img: 'http://static.sdg-china.com/dn/pic/dn_act/2017111xzy/peo3_03.png'},
	{name: '牧师',
		desc: '牧师是出生于魔法山脊的贵族少年，在家人的劝导下成为了圣职人员。由于出身豪门，非常高傲，自尊心很强，无法忍受对手的嘲笑。在做好事和帮助弱者的正义感方面，他们从来不输于他人。由于荣耀与尊严加入了由特拉玛依领导的神殿骑士団，成为50年前的围剿黑龙战役中最坚实的盾。',
		img: 'http://static.sdg-china.com/dn/pic/dn_act/2017111xzy/peo4_03.png'},
	{name: '学者',
		desc: '阿尔特利亚的未来世界中，由于红龙和黑龙的侵袭，大陆已经接近了毁灭的边缘。为了拯救世界不可挽回的毁灭命运，阿尔特里亚大陆中最大的经济联合体柏林集团将自己研究成功的结晶——高智能克隆体“学者”送回了红龙战争开始时期的现代，想要以此改变人类的命运。',
		img: 'http://static.sdg-china.com/dn/pic/dn_act/2017111xzy/peo5_03.png'},
	{name: '舞娘',
		desc: '舞娘是来自沙漠村落的萨满，擅长通过妖娆的舞蹈与灵魂沟通。她的族人在神秘黑暗剑士的洗劫中惨遭灭门，作为村落中唯一幸存的沙漠子民她只身前往阿尔特里亚大陆，满怀着对灭门仇敌的憎恨，踏上为族人复仇之路。',
		img: 'http://static.sdg-china.com/dn/pic/dn_act/2017111xzy/peo6_03.png'},
	{name: '刺客',
		desc: '曾经平凡的少年，意外的被“未来的自己”附体。来自于另一个时空的他，杀意肆虐、行走于暗影寒廊；而现在的他，温润纯良、谦逊如冬日阳光。因为这突如其来的变故，少年的命运朝着完全不曾预想过的方向前行……刺客，是他的名字；嗜血疯狂，是他在战场上的代名词。',
		img: 'http://static.sdg-china.com/dn/pic/dn_act/2017111xzy/peo7_03.png'},
	{name: '萌骑士',
		desc: '这是个美丽的女孩儿，平时鬼灵精怪，也有点小冒失，偶尔会闯个小祸，却丝毫不影响人们对她的喜爱，大家都亲昵的叫她"漂亮的贵族女孩"。可爱的外表，看似柔弱，但对于有违正义和平的人，她会奋然用她那精湛的枪术予以惩处哦！',
		img: 'http://static.sdg-china.com/dn/pic/dn_act/2017111xzy/peo8_03.png'},
	{name: '兽娘',
		desc: '从陨石坠落的那一刻开始，命运的天盘，便已经往扑朔迷离的方向开始转动了……弱小的少女为了生存而习得了巨大机械指套的使用方法。兽娘以形似猛兽的身法来压制敌人，从她的身上能够迸发出巨大的力量和速度。',
		img: 'http://static.sdg-china.com/dn/pic/dn_act/2017111xzy/peo9_03.png'}];

var index;

console.log('服务器启动~');

/**
 * 发送 GET 请求, 有参数
 */
app.get('/getImgs', function(req, res) {
	console.log(req.query);
	index = req.query.index;

	if(index >= imgUrls.length){
		res.send({note: '已经到底了哦~'});
	}else{
		res.send(imgUrls[index]);
	}
});

var repData = {};
app.get('/getNews', function(req, res) {
	console.log(req.query);
	index = req.query.index;

    console.log("返回==============");
    if(index >= news.length){
        repData.status = -1;
        repData.data = null;
    }else{
        repData.status = 0;
        repData.data = news[index];
    }
    res.send(repData);
    console.log(repData);
});