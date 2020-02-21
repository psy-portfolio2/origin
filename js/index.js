$(function () {
    //width 800
    var w = $(window).width();
    //topgame 배너 버튼 갯수
    var topSize = 2;
    //하단 언어설정 버튼 클릭 횟수 체크
    var lNum = 0;

    $(window).resize(function () {
        w = $(window).width();
        console.log(w);
        //        console.log("topNum: 버튼순서" + topNum);
        //        console.log("topSize : 버튼갯수" + topSize);

        if (w > 800 && topNum >= 3 && topNum < 6) {
            $(".topGameInfo").css("margin-left", "-100%");
            topNum = 1;
        }
        if (w > 800 && topNum >= 6 && topNum < 9) {
            $(".topGameInfo").css("margin-left", "-200%");
            topNum = 2;
        }
        if (w < 800 && topNum == 1 && topSize == 8) {
            $(".topGameInfo").css("margin-left", "-300%");
            topNum = 3; //???
        }
        if (w < 800 && topNum == 2 && topSize == 8) {
            $(".topGameInfo").css("margin-left", "-600%");
            topNum = 6;
        }
        $(".topCbtn>li").eq(topNum).addClass("active").siblings().removeClass("active");
        if (w <= 767) {
            topSize = 8;
            lNum = 0;
        } else {
            topSize = 2;
        }
        if (w <= 1024) {
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
        } else {
            //모바일 nav 닫기버튼 보여주기
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
        //topgame 배너 버튼 갯수
        topSize = 8;
        lNum = 0;
    } else {
        //topgame 배너 버튼 갯수
        topSize = 2;
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
        //하단 언어설정 숨겨주기
        if ($(".languageSub").hasClass("active")) {
            $(".languageSub").css("display", "none").removeClass("active");
            $("footer button").removeClass("active");
        }
    } else {
        //열려있는 서브메뉴들 숨겨주기
        $(this).find(".mainSub").slideUp(200);
        $(".mainBg").stop().slideUp(200);
        $(this).find(".allGame").slideUp(200);
        $(".subBg").stop().slideUp(200);
        //모바일 nav 닫기버튼 숨겨주기
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




    //visual

    //몇번째 배너인지 체크
    var sNum = 0;

    //cbtn 버튼 저장
    var cBtn = $(".v_cBtn>li");


    //배너 복사
    var obj = $(".banner>li").clone();
    $(".banner").append(obj);


    //cbtn클릭 배너이동
    cBtn.on("click", function () {
        //선택된 버튼 몇번째인지
        sNum = $(this).index();
        moveBanner();
    })


    function moveBanner() {
        $(".banner").stop().animate({
            "margin-left": -sNum * 100 + "%"
        }, 500);

        if (sNum == 3) {
            cBtn.eq(0).addClass("active").siblings().removeClass("active");
        }
        cBtn.eq(sNum).addClass("active").siblings().removeClass("active");
    }


    //rightBtn
    $(".aBtnR").click(function () {
        if (sNum == 3) {
            sNum = 0;
            $(".banner").css("margin-left", 0);
        }
        sNum++;
        moveBanner();
    })
    //스와이프
    $("#visual").on("swipeleft",function(){
        $(".aBtnR").trigger("click");
    })

    //leftBtn
    $(".aBtnL").on("click", function () {
        if (sNum == 0) {
            sNum = 3;
            $(".banner").css("margin-left", -sNum * 100 + "%")
        }
        sNum--;
        moveBanner();
    })
    //스와이프
    $("#visual").on("swiperight",function(){
        $(".aBtnL").trigger("click");
    })

    //5초마다 배너 이동
    var timer = setInterval(function () {
        $(".aBtnR").trigger("click");
    }, 5000)

    $("#visual").mouseover(function () {
        clearInterval(timer);
    })

    $("#visual").mouseleave(function () {
        timer = setInterval(function () {
            $(".aBtnR").trigger("click");
        }, 5000)
    })




    //신규게임

    $(".newGameMenu>li").mouseover(function () {
        $(this).find("div").stop().fadeIn(300);
        $(this).find(".gTitle").stop().fadeOut(300);
    })
    $(".newGameMenu>li").mouseleave(function () {
        $(this).find(".gTitle").stop().fadeIn(300);
        $(this).find("div").stop().fadeOut(300);
    })




    //top게임


    //buybtn shadow
    $(".topGameInfo>li").mouseover(function () {
        if (w > 800) {
            $(this).find(".buyBtn").stop().fadeIn(300);
            $(this).css("box-shadow", "0 0 5px #000");
        } else {
            $(".buyBtn").css("display", "none");
        }
    })
    $(".topGameInfo>li").mouseleave(function () {
        $(this).find(".buyBtn").stop().fadeOut(300);
        $(this).css("box-shadow", "0 0 4px #666");
    })

    //wish

    $(".wish").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
    })


    //rightbtn

    var topNum = 0;

    $(".topRBtn").click(function (e) {
        e.preventDefault();
        topNum++;
        console.log(topNum, topSize)
        if (topNum > topSize) {
            topNum = topSize;
            return
        }
        moveTopBanner();
    })
    $(".topGameInfo").on("swiperight",function(){
        $(".topLBtn").trigger("click");
    })
    
    $(".topLBtn").click(function (e) {
        e.preventDefault();
        topNum--;
        if (topNum < 0) {
            topNum = 0;
            return
        }
        moveTopBanner();
    })
    $(".topGameInfo").on("swipeleft",function(){
        $(".topRBtn").trigger("click");
        console.log("aa");
    })


    $(".topCbtn>li").click(function (e) {
        e.preventDefault();
        topNum = $(this).index();
        moveTopBanner();
    })


    function moveTopBanner() {
        $(".topGameInfo").stop().animate({
            "margin-left": -topNum * 100 + "%"
        }, 500)
        $(".topCbtn>li").eq(topNum).addClass("active").siblings().removeClass("active");
        console.log("topNum: 버튼순서" + topNum);
        console.log("topSize : 버튼갯수" + topSize);
    }





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
