//页面中添加事件的四种方法
//1.直接写在HTML标签中：<div onclick="alert('直接写在HTML中')"> </div>
//2.定义一个函数，复制给html：<div onclick="clk()"></div>  <script> function clk(){ alert('定义函数')} </script>
//3.使用element.onXXXX: <div id='ID'></id> <script> $('#ID').onclick=function(){ alert('使用ele.onXXX')} </script>
//4.使用addEventListener()和attachEvent().
//  el.addEvenListener(type,fn,useCapture)  //*为el元素添加type事件，调用fn回调函数，是否启用事件捕获，默认false。
											//*可以为元素添加多个handler，支持事件冒泡和事件捕获
//	el.attachEvent('on'+type,fn)  IE6/7/8专有，不支持事件捕获

E = {
	//*添加事件，if...else语句解决浏览器兼容问题
	add:function (el,type,fn) {
		if(el.addEventListener){
			el.addEventListener(type,fn,false);//
		}
		else{
			el['e'+fn] = function () { //['e'+fn]是一个key，
				//使用call，解决IE6/7/8中this指向了window而非document的问题。并将事件对象作为第一个参数
				fn.call(el, window.event) 
			}
			el.attachEvent('on'+type,el['e'+fn])
		}
	}
	//*删除事件
	remove:function (el,type,fn) {
		if (el.removeEventListener) {
			el.removeEventListener(type,fn,false);
		} else {
			el.detachEvent(type,fn);
		}
	}
}