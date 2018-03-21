$(function(){
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
    //初始化pic列表
    var picList = [];
    var picLen = 14
    for(var i = 0; i < picLen; i ++){
        picList.push("people" + i + ".jpg")
    }
    //给左侧小头像赋初始值
    for(var j = 0; j <= picList.length - 1; j ++){
        $(".smallLIst" + j).css("background", "url(./images/"+picList[j]+")")
    }
    var indexs = 0;
    // 列表关联
   $(".smallLIst").on({
       click:function(){
            indexs = $(this).index()
            manHeadPort()
       }
   })
    //    按钮关联
   $("#btnLeft").on({
       click:function(){
            indexs --;
            if(indexs <= 0){
                indexs = 0;
            }
            manHeadPort()

            $("#btnRight").css({"borderColor": "", "color": ""})
            $(this).css({
                "borderColor": "#1e9ae9",
                "color": "#1e9ae9"
            })
       }
   })
   
   $("#btnRight").on({
       click:function(){
            indexs ++;
            if(indexs > picList.length - 1){
                indexs = picList.length - 1
            }
            manHeadPort()

            $("#btnLeft").css({"borderColor": "", "color": ""})
            $(this).css({
                "borderColor": "#1e9ae9",
                "color": "#1e9ae9"
            })
       } 
   })


   function manHeadPort(){
    $(".names").html($(".smallLIst").eq(indexs).find(".masking").text())

    $(".smallLIst").find(".masking").removeClass("zindexs")
    $(".smallLIst").eq(indexs).find(".masking").addClass("zindexs")

    var images = $(".smallLIst").eq(indexs).css("background").split("/")[10].split(")")[0].slice(0,-1);
    var srcs = $(".smallLIst").eq(indexs).css("background").split("/")[9] + "/" + images;
    $(".manHeadPort").find("img").attr("src", srcs)
   }
})