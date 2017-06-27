window.onload=function(){
	var oLi=document.getElementById("calendar").getElementsByTagName("li");
	var oMsg=document.getElementById("msg");
	var oP=oMsg.getElementsByTagName("p")[0];
	var oStrong=oMsg.getElementsByTagName("strong")[0];
	var oArray=[
		"爆竹声中一岁除，春风送暖入屠苏",
		"草长莺飞二月天，拂堤杨柳醉春烟",
		"故人西辞黄鹤楼，烟花三月下扬州",
		"人间四月芳菲尽，山寺桃花始盛开",
		"五月榴花照眼明，枝间时见子初成",
		"毕竟西湖六月中,风光不与四时同",
		"七月坐凉宵，金波满丽谯",
		"八月湖水平,涵虚混太清",
		"九月西风兴，月冷霜华凝 ",
		"十月风霜欺客枕，五更鼓角满江天",
		"十一月中长至夜，三千里外远行人",
		"吹灯窗更明，月照一天雪"
	];

		for(var i =0;i<oLi.length;i++){
			oLi[i].index=i;
			oLi[i].onmouseover=function(){
				for(var n=0;n<oLi.length;n++)oLi[n].className="";
				this.className="current";
			    oP.innerHTML=oArray[this.index];
			    oStrong.innerHTML=this.index+1;
			}
		}
}
