$(function () {


    //width가 767이 됐을 때
    var w = $(window).outerWidth();

    //하단 언어설정 버튼 클릭 횟수 체크
    var lNum = 0;

    $(window).resize(function () {
        w = $(window).outerWidth();
        console.log($(window).innerWidth(), $(window).outerWidth(), $(window).width());
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
            lNum = 0;
        } else {
            //닫기버튼
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
        lNum = 0;
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
    //1024에서 nav>li를 클릭했을 때
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
