;(function ($) {
	var drops=[];
	var drags=[];
	$.fn.XQ_drag=function (options) {
		$(this).each(function(){
		var self=$(this);
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
		});
		self.on('mouseup',function () {
			$(document.body).unbind('mousemove');
			var top=self.offset().top;
			var left=self.offset().left;
			for (var index in drops) {
				var ph=drops[index].top+drops[index].height;
				var pw=drops[index].left+drops[index].width;
				if(top+height/2>drops[index].top && left+width/2>drops[index].left && left+width/2<pw && top+height/2<ph){
					drops[index].ele[0].appendChild(self[0]);
					self.css({'top':'0px','left':'0px','z-index':1});
					return;
				}
			}
			self.css({'top':'0px','left':'0px','z-index':1});
		});
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
		});
	}
	$.fn.extend({
		getDropData:function(){
			var datas=[];
			var objs=$(this).find("[xq_drag='true']");
			objs.each(function(){
				datas.push($(this).attr("id"));
			});
			return datas;
		}
	});
})(jQuery)
$(function  () {
	$("[xq_drag='true']").XQ_drag();
	$("[xq_drop='true']").XQ_drop();
});
