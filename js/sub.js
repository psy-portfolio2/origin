$(function () {
    var con1 = $(".cont1").offset().top;
    var con1_1 = $(".cont1").height();
    var cont1 = con1 - con1_1;

    console.log("aa", cont1, con1_1)
    var con2 = $(".cont2").offset().top;
    var con2_2 = $(".cont2").height();
    var cont2 = con2 - con2_2;
    console.log("bb", cont2, con2_2)

    var con3 = $(".cont3").offset().top;
    var con3_3 = $(".cont2").height();
    var cont3 = con3 - con3_3;

    console.log(con1, con2, con3);
    //    
    var videoSize = 2;

    //width가 767이 됐을 때
    var w = $(window).outerWidth();
    //하단 언어설정 버튼 클릭 횟수 체크
    var lNum = 0;

    $(window).resize(function () {
        w = $(window).outerWidth();

        if (w > 767 && videosNum >= 2 && videosNum < 2 && videoSize == 2) {
            $(".videobanner").css("margin-left", "-100%");
            videosNum = 1;
        }
        if (w > 767 && videosNum >= 3 && videoSize == 2) {
            $(".videobanner").css("margin-left", "-200%");
            videosNum = 2;
            console.log(videosNum);
        }
        if (w < 767 && videosNum == 1 && videoSize == 4) {
            $(".videobanner").css("margin-left", "-100%");
            videosNum = 1;
        }
        if (w < 767 && videosNum == 2 && videoSize == 4) {
            $(".videobanner").css("margin-left", "-300%");
            videosNum = 3;
        }
        $(".videoBtn>li").eq(videosNum).addClass("active").siblings().removeClass("active");

        if (w <= 767) {
            videoSize = 4;
            lNum = 0;
        } else {
            videoSize = 2;
        }
        if (w <= 1024) {
            //모바일에서 보이지 않아야 하는 것들
            $(".mainSub").css("display", "none");
            $(".subBg").css("display", "none");
            $(".mainBg").css("display", "none");
            $(".mainSub").css("height", "auto");
            //모바일 nav 닫기버튼 보여주기
            if ($(".m_close").hasClass("on")) {
                $(".m_close").stop().fadeIn(0);
            }
            //서치가 보여져있을 때 리사이즈되어도 보이게
            if ($(".search").hasClass("on")) {
                $(".search").css({
                    "top": "70px",
                    "right": 0
                })
            } else {
                $(".search").css({
                    "top": "70px",
                    "right": "-80vw"
                })
            }
            //하단 언어설정 숨겨주기
            if ($(".languageSub").hasClass("active")) {
                $(".languageSub").css("display", "none").removeClass("active");
                $("footer button").removeClass("active");
            }
            $(".cont1 .text, .cont2 .text, .cont3 .text").css("opacity", "1");
        } else {
            if ($(".m_close").hasClass("on")) {
                $(".m_close").stop().fadeOut(0);
            }
            //서치
            $(".search").css({
                "top": "14px",
                "right": 0
            })
        }
    })

    if (w <= 767) {
        videoSize = 4;
        lNum = 0;
    } else {
        videoSize = 2;
    }
    if (w <= 800) {
        //모바일에서 보이지 않아야 하는 것들
        $(".mainSub").css("display", "none");
        $(".subBg").css("display", "none");
        $(".mainBg").css("display", "none");
        $(".mainSub").css("height", "auto");
        //모바일 nav 닫기버튼 보여주기
        if ($(".m_close").hasClass("on")) {
            $(".m_close").stop().fadeIn(0);
        }
        //하단 언어설정 숨겨주기
        if ($(".languageSub").hasClass("active")) {
            $(".languageSub").css("display", "none").removeClass("active");
            $("footer button").removeClass("active");
        }
        $(".cont1 .text, .cont2 .text, .cont3 .text").css("opacity", "1");
    } else {
        if ($(".m_close").hasClass("on")) {
            $(".m_close").stop().fadeOut(0);
        }
    }

    //pc
    //nav>li에 마우스를 올렸을 때 이벤트
    $("#nav>li").on("mouseover", function () {
        var nNum = $(this).index();
        if (w > 1024) {
            console.log(w);
            if (nNum <= 1) {
                //메뉴보이기
                $(this).find(".mainSub").stop().slideDown(200);
                $(".mainBg").stop().slideDown(200);
            }
        }
    })
    $("#nav>li").on("mouseleave", function () {
        //메뉴숨기기
        if (w > 1024) {
            $(this).find(".mainSub").slideUp(200);
            $(".mainBg").stop().slideUp(200);
        }
    })

    //모든PC게임 sub 페이지
    $(".gameSub>li").mouseenter(function () {
        var nNum = $(this).index();
        if (w > 1024) {
            if (nNum <= 0) {
                $(this).find(".allGame").slideDown(200);
                $(".subBg").stop().slideDown(200);
            }
        }
    })
    $(".gameSub>li").mouseleave(function () {
        //메뉴숨기기
        if (w > 1024) {
            $(this).find(".allGame").slideUp(200);
            $(".subBg").stop().slideUp(200);
        }
    })

    //mobile
    //모바일에서 nav>li를 클릭했을 때
    $("#nav>li>a").on("click", function () {
        console.log(w);
        if (w <= 1024) {
            $(this).siblings(".mainSub").stop().slideToggle(200);
        }
    })
    //모바일에서 메뉴버튼과 닫기버튼
    $(".hamBtn").click(function () {
        $(".headBottom, .search").stop().animate({
            "right": 0
        }, 500);
        $(".m_subBg").stop().fadeIn(300);
        $(".m_close").stop().fadeIn(300).addClass("on");
        $(".search").addClass("on");
    })
    $(".m_close").click(function () {
        $(".headBottom, .search").stop().animate({
            "right": -80 + "vw"
        }, 500);
        $(this).stop().fadeOut(300);
        $(this).removeClass("on");
        $(".m_subBg").stop().fadeOut(300);
        $(".search").removeClass("on");
    })






    //video

    var videoNum = 0;

    $(".videobanner>li").click(function (e) {
        e.preventDefault();
        videoNum = $(this).index();
        $(".playVideo").fadeIn(500);
        $(".videoBg").fadeIn(500);
        $(".playVideo>div").eq(videoNum).fadeIn(500).siblings().css("display", "none");
    })
    $(".closeBtn").click(function (e) {
        e.preventDefault();
        $(".videoBg").fadeOut(500);
        $(".playVideo").fadeOut(500);
        $(".playVideo>div").fadeOut(500);
    })

    //videobanner

    var videosNum = 0;
    $(".videoBtn>li").click(function (e) {
        e.preventDefault();
        videosNum = $(this).index();
        moveVideobanner();
        console.log(videosNum);
    })

    function moveVideobanner() {
        $(".videobanner").stop().animate({
            "margin-left": -videosNum * 100 + "%"
        }, 500);
        $(".videoBtn>li").eq(videosNum).addClass("active").siblings().removeClass("active");
    }

    $(".videobanner").on("swipeleft", function () {
        console.log("left" + w, videosNum);
        if (w <= 767 && videosNum == 4) {
            videosNum = videoSize;
        } else {
            videosNum++;
            moveVideobanner();
        }

    })
    $(".videobanner").on("swiperight", function () {
        console.log("right" + w, videosNum);
        if (w <= 767 && videosNum == 0) {
            videosNum = 0;
        } else {
            videosNum--;
            moveVideobanner();
        }
    })

    //cont

    //스크롤 이벤트가 발생하면 스크롤의 위치값 찾기



    $(window).scroll(function () {
        var sTop = $(this).scrollTop();
        console.log(sTop, w);
        //w = $(window).width();
        if (w > 767) {
            if (sTop >= cont1) {
                $(".cont1 .text").stop().animate({
                    "opacity": 1
                }, 400)
            } else {
                $(".cont1 .text").stop().animate({
                    "opacity": 0
                }, 400)
            }
            if (sTop >= cont2) {
                $(".cont2 .text").stop().animate({
                    "opacity": 1
                }, 400)
            } else {
                $(".cont2 .text").stop().animate({
                    "opacity": 0
                }, 400)
            }
            if (sTop >= cont3) {
                $(".cont3 .text").stop().animate({
                    "opacity": 1
                }, 400)
            } else {
                $(".cont3 .text").stop().animate({
                    "opacity": 0
                }, 400)
            }
        } else {
            $(".cont1 .text, .cont2 .text, .cont3 .text").css("opacity", "1");
        }
    })








    //for게임


    //buybtn shadow
    $(".list>li").mouseover(function () {
        if (w > 767) {
            $(this).find(".buyBtn").stop().fadeIn(300);
            $(this).css("box-shadow", "0 0 5px #000");
        } else {
            $(".buyBtn").css("display", "none");
        }
    })
    $(".list>li").mouseleave(function () {
        $(this).find(".buyBtn").stop().fadeOut(300);
        $(this).css("box-shadow", "0 0 4px #666");
    })

    //wish

    $(".wish").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
    })





    //language

    $("footer button").click(function (e) {
        e.preventDefault();
        lNum++;
        if (lNum % 2 == 1) {
            $(".languageSub").css("display", "block");
            $(this).addClass("active");
            $(".languageSub").addClass("active");
        } else {
            $(".languageSub").css("display", "none");
            $(this).removeClass("active");
            $(".languageSub").removeClass("active");
            $(".languageSub>li").removeClass("active");
        }
    })

    $(".languageSub>li").click(function (e) {
        e.preventDefault();
        var sLanguage = $(this).index();
        console.log(sLanguage);
        $(".languageSub>li").eq(sLanguage).addClass("active").siblings().removeClass("active");
    })



    $(".ui-loader").hide();

})
