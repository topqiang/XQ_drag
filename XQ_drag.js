;(function ($) {
	var drops=[];
	var drags=[];
	$.fn.XQ_drag=function (options) {
		$(this).each(function(){
		var self=$(this);
//		self.attr({"draggable":"true"});
		var width=$(this).width();
		var height=$(this).height();
		self.css({'position':'relative','cursor':'move'});
		self.on('mousedown',function (e) {
			self.startx=e.clientX;
			self.starty=e.clientY;
			$(document.body).bind('mousemove',function (ev) {
				var chax=ev.clientX-self.startx;
				var chay=ev.clientY-self.starty;
				self.css({'top':chay+'px','left':chax+'px','z-index':999});
			});
			console.log("鼠标移动事件已绑定");
		});
		self.on('mouseup',function () {
			console.log("鼠标移开");
			$(document.body).unbind('mousemove');
			var top=self.offset().top;
			var left=self.offset().left;
			for (var index in drops) {
//				console.log(drops[index]);
				var ph=drops[index].top+drops[index].height;
				var pw=drops[index].left+drops[index].width;
				if(top+height/2>drops[index].top && left+width/2>drops[index].left && left+width/2<pw && top+height/2<ph){
					drops[index].ele[0].appendChild(self[0]);
					self.css({'top':'0px','left':'0px','z-index':1});
					return;
//					console.log("true");
				}
//				drops[index];
			}
			self.css({'top':'0px','left':'0px','z-index':1});
			console.log("鼠标移动事件已解除");
		});
//		self.on('mouseleave',function () {
//			$(this).unbind('mousemove');
//			self.css({'top':'0px','left':'0px','z-index':1});
//			console.log("鼠标移动事件已解除");
//		});
		});
	}
	$.fn.XQ_drop=function () {
		$(this).each(function () {
			var self=$(this);
			var height=self.height();
			var width=self.width();
			var left=self.offset().left;
			var top=self.offset().top;
			drops.push({"ele":self,"height":height,"width":width,"left":left,"top":top});
//			console.log("self"+height+" "+width+" "+left+" "+top);
		})
	}
})(jQuery)
$(function  () {
	$("[xq_drag='true']").XQ_drag();
	$("[xq_drop='true']").XQ_drop();
});
