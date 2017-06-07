var changeStyle= function (elem,attr,value){
            elem.style[attr]=value;
        };
        window.onload=function(){
            var oBtn= document.getElementsByTagName("input");
            var oDiv=document.getElementById("div1");
            var oAtt=["width","height","background","display","display"];
            var oVal=["200px","200px","red","none","block"];
        
            for(var i=0;i<oBtn.length;i++){
                oBtn[i].index=i; //input元素组成的对象组，按照0 ，1，2,3的下标顺序
                oBtn[i].onclick=function(){
                    //this.index ==oBtn.length-1&&(oDiv.style.cssText=""); // 这是两个表达式and 第一个表达式判断下标是不是最后一个
                            //也就是重置选项，如果不是，后面的不会执行，如果是的话，后面的oDiv.style.cssText="" 就执行了，
                            //这里会移除所有的内联样式，原本的是内部样式
                    if(this.index==oBtn.length-1){
                        oDiv.style.cssText="";
                    }
                    changeStyle(oDiv,oAtt[this.index],oVal[this.index])
                }
            }
        
        
        };