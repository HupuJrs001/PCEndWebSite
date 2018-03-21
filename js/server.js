$(document).ready(function(){

	var  picmove=function(){$('.server-pic img').each(function(i,obj){
		
      var top=parseInt($(obj).css('top')) //获取每个图像的top值；
       $(this).animate({top:'+=.3rem'},'slow').animate({top:'-=.3rem'},'slow')
        
	 })}
	var  spicmove=function(){$('.server-spic').each(function(i,obj){
		
      var top=parseInt($(obj).css('top')) //获取每个图像的top值；
       $(this).animate({top:'+=.3rem'},'slow').animate({top:'-=.3rem'},'slow')
      
	 })}
	var  wordmove=function(){$('.server-word').each(function(i,obj){
		
      var top=parseInt($(obj).css('top')) //获取每个图像的top值；
       $(this).animate({top:'+=.3rem'},'slow').animate({top:'-=.3rem'},'slow')
        
	 })}
	timer1=setInterval(spicmove,1000)
	timer2=setInterval(picmove,1000)
	timer3=setInterval(wordmove,1000)
	
	

	
})