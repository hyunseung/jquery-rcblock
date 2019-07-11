	/*
 * rightClickBlock! jQuery Plugin
 * author Yoon  (yhs6119@gmail.com)
 *
 * version 0.0.1 [Nov. 2016]
 *
 * @changelog
 * v 0.0.1
 *
 */

(function($) {
	$.fn.rightClickBlock = function(op) {
		var  defaultset = {style:{display:'inline-block',position:'absolute','z-index':'110'}};
		var option={
			msg:"이 디자인은 <span class='em'>만지작</span>의 소중한 자산입니다.",
			style:{padding:'7px 10px',background:'#000',color:'#c3c3c3','font-size':'0.68em','border-radius':'5px'},
			em:{color:'#fff','font-weight': 'bold'},
			deley:2000
		}
		
		$.extend(true, option, op);
		$.extend(true, option,defaultset);
		
	   this.unbind('contextmenu.imgblock').bind('contextmenu.imgblock',function(e){
			e.preventDefault();
			var  timer={}, x=e.pageX,y=e.pageY;
			var $img=$(this);
			var  $body=$("body");
			if($("p.toolTipCtrl").length==0){    
				$body.append('<p class="toolTipCtrl" />');
				$("p.toolTipCtrl").html(option.msg).css(option.style).hide();
				$("p.toolTipCtrl .em").css(option.em);
			}
						
			if ( timer ) clearTimeout( timer );
			$("p.toolTipCtrl").css({
				'top':y,
				'left':x
			});
			$("p.toolTipCtrl").stop(true,true).show().unbind('contextmenu.block').bind('contextmenu.block',function(e){
				e.preventDefault();
			});
			timer = setTimeout( function(){
				$("p.toolTipCtrl").fadeOut(300,function(){
					$(this).remove();
				});
			}, option.deley );
			
		});
	};
})(jQuery);