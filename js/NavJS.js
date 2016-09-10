// window.onload=function () {
// 	var iLi = document.getElementsByTagName('li');
// 	for (var i = 0; i < iLi.length; i++) {
// 		iLi[i].onmouseover=function(){
// 			this.className='lihover';
// 		}
// 		iLi[i].onmouseout=function(){
// 			this.className='';
// 		}
// 	}

// }
$(function(){
	$("li").each(function (index,element) {
		$(this).mouseover(function () {
			$(this).addClass('lihover')
		})
		$(this).mouseout(function () {
			$(this).removeClass("lihover")
		})
	})

})