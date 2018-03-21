$(function(){
    // var flags = true;
    var  isShow = true;
    // 页面载入时获取轮播图的大小
    var widths = parseInt($(".header_carousel").css("width").split("").slice(0, -2).join(""));
    $(".hd_carousel_list").css("width", widths * 4 + "px")
    $(".header_carouselItem").css("width", widths + "px")

    //滚动条
    $("html, body").animate({scrollTop: 0});
    //页面载入时nav的白色横线动画
    $(".navIndex").stop().animate({width: "100%"}, 500)
    if($("html, body").scrollTop() >= 1000){
        $(".nav").css({"background":"rgba(0, 0, 0, 0.5)","paddingBottom": "0.2rem"})
    }
   
    
    //动态获取轮播图的大小
    $(window).resize(function(){
        var widths = parseInt($(".header_carousel").css("width").split("").slice(0, -2).join(""));
        $(".hd_carousel_list").css("width", widths * 4 + "px")
        $(".header_carouselItem").css("width", widths + "px")
    })
    var nums = 1;
    // navlist动画
    $("#nav_list").find("a").on({
        click:function(){
            if($(this).attr("href") == "#home"){
                $(".nav").css("background", "");
                $(".nav").stop().animate({
                    paddingBottom: "0"
                }, 400);
            }else{
                $(".nav").css("background", "rgba(0,0,0,0.5)");
                $(".nav").stop().animate({  
                    paddingBottom: "0.2rem"
                }, 400);
            }
            
            $(this).parent().siblings().find("span").css({
                "width": "0%",
                "background":"transparent"
            });
            $(this).next().css("background", "#ffffff");
            $(this).next().stop().animate({width: "100%"}, 400)
            // //锚点链接
            if(!($(this).attr("href") == "javascript:;")){
                var tops = $($(this).attr("href")).offset().top
                $("html, body").animate({scrollTop: tops}, 400, function(){
                })
            } 
        },
        mouseover:function(){
            $(this).css("color", "#C0C0C0")
        },
        mouseout:function(){
            $(this).css("color", "")
        }
    })

    //轮播-点击
    $(".btns").click(function(){
        console.log($(this).index())
        var widths = parseInt($(".header_carousel").css("width").split("").slice(0, -2).join(""));
        var lefts = $(this).index() * widths;

        $(this).css("background", "#ffffff").siblings().css("background", "#626362");
        $(".hd_carousel_list").stop().animate({
            left: -lefts + "px"
        }, 500)
        nums = $(this).index();
    })
    // 轮播-定时器
    var carousel = setInterval(function(){
        var widths = parseInt($(".header_carousel").css("width").split("").slice(0, -2).join(""));
        $(".btns").eq(nums).css("background", "#ffffff").siblings().css("background", "#626262");
        if(nums == 3){
            $(".hd_carousel_list").stop().animate({
                left: -widths * nums + "px"
            }, 500, function(){
                $(".hd_carousel_list").css("left", "0")
                $("#wordArea").addClass(" animated bounceInLeft")
                $("#circleLoop").addClass(" animated bounceInDown")
            })
            nums = 0;
            $(".btns").eq(nums).css("background", "#ffffff").siblings().css("background", "#626262");
            $(".btns").eq(nums).css("background", "#ffffff")
        }else{
            $("#wordArea").removeClass(" animated bounceInLeft")
            $("#circleLoop").removeClass(" animated bounceInDown")
            $(".hd_carousel_list").stop().animate({
                left: -widths * nums + "px"
            }, 500)
            
        }
        nums ++;
    }, 2500)

    //光标移动在轮播范围停止轮播
    // $(".hd_carousel_list").on({
    //     mouseover:function(){
    //         clearInterval(carousel)
    //     },
    //     mouseout:function(){
    //         clearInterval(carousel)
    //         carousel = setInterval(function(){
    //             var widths = parseInt($(".header_carousel").css("width").split("").slice(0, -2).join(""));
    //             $(".btns").eq(nums).css("background", "#ffffff").siblings().css("background", "#626262");
    //             if(nums == 3){
    //                 $(".hd_carousel_list").stop().animate({
    //                     left: -widths * nums + "px"
    //                 }, 500, function(){
    //                     $(".hd_carousel_list").css("left", "0")
    //                     $("#wordArea").addClass(" animated bounceInLeft")
    //                     $("#circleLoop").addClass(" animated bounceInDown")
    //                 })
    //                 nums = 0;
    //                 $(".btns").eq(nums).css("background", "#ffffff").siblings().css("background", "#626262");
    //                 $(".btns").eq(nums).css("background", "#ffffff")
    //             }else{
    //                 $("#wordArea").removeClass(" animated bounceInLeft")
    //                 $("#circleLoop").removeClass(" animated bounceInDown")
    //                 $(".hd_carousel_list").stop().animate({
    //                     left: -widths * nums + "px"
    //                 }, 500)
    //             }
    //             nums ++;
    //             console.log(nums)
    //         }, 1550)
    //     }
    // })

    
    var divList = ["home","box-server", "diy", "services", "aboutUs", "team", "hezuo", "phones"]
    $(window).scroll(function(){
        // //关联nav效果
        // if($(this).scrollTop() >= 1200){
        //     $(".nav").css("background", "rgba(0,0,0,0.5)");
        //     $(".nav").css({
        //         "paddingBottom": "0.2rem"
        //     });
            
        // }else{
        //     $(".nav").css("background", "");
        //     $(".nav").css({
        //         "paddingBottom": "0"
        //     });
        // }
        //关联返回顶部
        if($(this).scrollTop() >= $("#home").height() - 300){
            if(isShow){
                $("#sideBar").stop().animate({"right": "0.2rem"}, 400)
                $(".nav").css("background", "rgba(0,0,0,0.5)").stop().animate({"paddingBottom": "0.2rem"}, 400)
                isShow = false;
            }  
        }else{
            if(!isShow){
                $("#sideBar").stop().animate({"right": "-0.8rem"}, 400)
                $(".nav").css("background", "").stop().animate({"paddingBottom": ""}, 400)
                isShow = true;
            }
            
        }
        


        // _this = this;
        //关联各个模块
        // if(flags){
        //     console.log($("#phones").offset().top)
        //     $.each(divList, function(index, name){
        //         if($(_this).scrollTop() >= $("#" + name).offset().top && $(_this).scrollTop() <= $("#" + name).offset().top + $("#" + name).outerHeight()){
        //              $("#" + name + "_s").parent().siblings().find("span").css({
        //                  "width": "0%",
        //                  "background":"transparent"
        //              });
        //              $("#" + name + "_s").css("background", "#ffffff");
        //              $("#" + name + "_s").stop().animate({width: "100%"}, 200)
        //          }
        //     })
        // }
        
    })
    // 返回顶部
    $("#returnTop").click(function(){
        flags = false;
        $(".navIndex").parent().siblings().find("span").css({
            "width": "0%",
            "background":"transparent"
        });
        $(".navIndex").css("background", "#ffffff");
        $(".navIndex").stop().animate({
            width: "100%"
        }, 500)
        $("html, body").animate({scrollTop: 0}, 500)
    })

    // 移入侧边栏
    $("#sideBar").find(".contactBox").on({
        mouseover:function(){
            $(this).css("color", "#ffffff").children(".contactInfomation").css("display", "block").stop().animate({"left": "-1.51rem"}, 200)
        },
        mouseout:function(){
            $(this).css("color", "#000000").children(".contactInfomation").stop().animate({"left": "0.9rem"}, 200)
        }
    })
})