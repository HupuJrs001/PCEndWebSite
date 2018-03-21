$(function(){
	var hhh=$(window).height();
	$('.ym-net-container').css('display','block')
	$('.ym-net-eror').on('click',function(){
		$('.ym-net-container').css('display','none')
	})
	
	$(window).resize(function(){
		var hhh=$(window).height();
		$('.ym-net-container').css('display','block')
		$('.ym-net-eror').on('click',function(){
			$('.ym-net-container').css('display','none')
		})
	})

	// navlist动画
	$("#nav_list").find("a").on({
		click:function(){
			$(this).parent().siblings().find("span").css({
				"width": "0%",
				"background":"transparent"
			});
			$(this).next().css("background", "#ffffff");
			$(this).next().stop().animate({width: "100%"}, 500)
		},
		mouseover:function(){
			$(this).css("color", "#C0C0C0")
		},
		mouseout:function(){
			$(this).css("color", "")
		}
	})
	$(window).scroll(function(){
		if($(this).scrollTop() >= 200){
			$(".nav").css("background", "rgba(0,0,0,0.5)");
			$(".nav").css({
				"paddingBottom": "0.2rem"
			});     
		}else{
			$(".nav").css("background", "");
			$(".nav").css({
				"paddingBottom": "0"
			});
		}
	})
})
