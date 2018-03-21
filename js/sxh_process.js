function sxh_porcess(){
/*特效*/
// hover效果
// 限制hover图与原图名字相同并以2结尾
	$(".sxh_process_icnbox").mouseover(function(){
		var iconsrc=$(this).attr("src")
		var index=iconsrc.indexOf(".")
		var hover_iconsrc=iconsrc.replace(iconsrc.slice(index),"2"+iconsrc.slice(index))
		$(this).attr("src",hover_iconsrc)
	}).mouseout(function(){
		var iconsrc=$(this).attr("src")
		var index=iconsrc.indexOf("2.")
		var hover_iconsrc=iconsrc.replace(iconsrc.slice(index),iconsrc.slice(index).slice(1))
		$(this).attr("src",hover_iconsrc)
	})

	
// 刷新时-如果在范围内
	if ($(".sxh_process_box").offset().top-$(window).height()<=$(document).scrollTop()&&$(".sxh_process_box").offset().top+$(".sxh_process_box").height()>=$(document).scrollTop()) {
		setTimeout(function(){

			$(".sxh_process_h_Top>div").each(function(i){
				setTimeout(function(){
					$(".sxh_process_h_Top>div").eq(i).css({
						"transition":"all 0.8s ease",
						"opacity":"1",
						"top": "-1.8rem",
					})
				},600*i)
			})
		},300)
		// 下面的
		setTimeout(function(){
			$(".sxh_process_h_Bottom>div").each(function(i){
				setTimeout(function(){
					$(".sxh_process_h_Bottom>div").eq(i).css({
						"transition":"all 0.8s ease",
						"opacity":"1",
						"top": "0.22rem",
					})
				},600*i)
			})
		},600)
	}
// 滚动的时候
	$(document).scroll(function(){
		var sxh_txflag=0;
		if ($(".sxh_process_box").offset().top-$(window).height()<=$(document).scrollTop()&&$(".sxh_process_box").offset().top+$(".sxh_process_box").height()>=$(document).scrollTop()) {
			if (sxh_txflag==0) {
				var sxh_txflag=1;
				setTimeout(function(){
					$(".sxh_process_h_Top>div").each(function(i){
						setTimeout(function(){
							$(".sxh_process_h_Top>div").eq(i).css({
								"transition":"all 0.8s ease",
								"opacity":"1",
								"top": "-1.8rem",
							})
						},600*i)
					})
				},300)
				// 下面的
				setTimeout(function(){
					$(".sxh_process_h_Bottom>div").each(function(i){
						setTimeout(function(){
							$(".sxh_process_h_Bottom>div").eq(i).css({
								"transition":"all 0.8s ease",
								"opacity":"1",
								"top": "0.22rem",
							})
						},600*i)
					})
				},600)
			}
		}
	})


}
$(function(){
	sxh_porcess()
})
