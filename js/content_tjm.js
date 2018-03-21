// 控制选项
$(function(){
	$('.con_tjm').on('click',function(){
		var arr=$(".content_tjm")
		var arra=$(".con_tjm a")
		var arrdiv = $(".line_tjm")
	    var num = $(this).index()
	    for(var i=0;i<arr.length;i++){
	    	if(i!=num){
	    	 arr[i].style.display="none";
	    	 arra[i].style.color="black";
	    	 arrdiv[i].style.display = "none"
	    	}else{
	    		arr[num].style.display="block";
	            arra[i].style.color="#1e9ae9";
	            arrdiv[i].style.display = "block"
	    	}   
	    }
      })
	$('.dotBox_tjm1').on('click',function(){
         $(this).css("background","#313131").siblings().css("background","#fff")
         var abb = $(".contentPic1_tjm")
         var nummer1 = $(this).index()
         for (var j = 0; j<abb.length; j++) {
         	if (j!=nummer1) {
         		abb[j].style.zIndex = '0'
         		abb[j].style.display = 'none'
         	}else{
         		abb[j].style.zIndex = '1'
         		abb[j].style.display = "block"
         	}
         }
	})
	$('.dotBox_tjm2').on('click',function(){
         $(this).css("background","#313131").siblings().css("background","#fff")
         var acc = $(".contentPic2_tjm")
         var nummer2 = $(this).index()
         for (var k = 0; k<acc.length; k++) {
         	if (k!=nummer2) {
         		acc[k].style.zIndex = '0'
         		acc[k].style.display = 'none'
         	}else{
         		acc[k].style.zIndex = '1'
         		acc[k].style.display = "block"
         	}
         }
	})
	$('.dotBox_tjm4').on('click',function(){
         $(this).css("background","#313131").siblings().css("background","#fff")
         var add = $(".contentPic4_tjm")
         var nummer4 = $(this).index()
         for (var l = 0; l<add.length; l++) {
         	if (l!=nummer4) {
         		add[l].style.zIndex = '0'
         		add[l].style.display = 'none'
         	}else{
         		add[l].style.zIndex = '1'
         		add[l].style.display = "block"
         	}
         }
	})

    })
//选中效果