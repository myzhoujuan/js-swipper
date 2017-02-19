//点击显示隐藏
function showHide(id,id2){
    $(id).mouseover(function(){
        $(id2).css('display','block');


    }).mouseout(function(){
        $(id2).css('display','none');
    })
}
//点击显示隐藏

$(function(){

//点击显示隐藏 nav部分

    showHide('#mytbwra','#nav_bd1');
    showHide('#mmscjwra','#nav_bd2');
    showHide('#mjzxwra','#nav_bd3');
    showHide('#lxkfwra','#nav_bd4');
    showHide('#wzdhwra','#nav_bd5');

    function showHide(id,id2){
        $(id).mouseover(function(){
            $(id2).css('display','block');
            $(this).find('.menu-pad').addClass('menu-pad-hover');
        }).mouseout(function(){
            $(id2).css('display','none');
            $(this).find('.menu-pad').removeClass('menu-pad-hover');
        })
    }
//点击显示隐藏 nav部分

    //主题市场

var aLiTheme=$('#theme_nav li');
var aDivTheme=$('#theme_nav_cont .ser-flow');
var timer=null;
    function overOut(aPre,aFlow){
        aPre.mouseover(function(){
            clearInterval(timer);
            //aFlow.css('display','none');
            aFlow.removeClass('show');

            aFlow.eq($(this).index()).addClass('show');
        }).mouseout(function(){
            timer=setInterval(function(){
                aFlow.removeClass('show');
            },300)
        })

        aFlow.mouseover(function(){
            clearInterval(timer);
            aFlow.removeClass('show');
            $(this).addClass('show');
        }).mouseout(function(){
            timer=setInterval(function(){
                aFlow.removeClass('show');
            },300)
        })
    }
    overOut(aLiTheme,aDivTheme)
//主题市场
//公告规则
    var aLiTip=$('#notice_id li');
    var aUlTip=$('#notice_box ul');
    aLiTip.mouseover(function(){
        clearInterval(timer);
        aLiTip.removeClass('active selected');
        $(this).addClass('active selected');
        aUlTip.removeClass('show')
        aUlTip.eq($(this).index()).addClass('show');
    }).mouseout(function(){
        timer=setInterval(function(){
            $(this).removeClass('active selected');
            $(this).removeClass('show');
        },300)
    })
    aUlTip.mouseover(function(){
        clearInterval(timer);
        aLiTip.eq($(this).index).addClass('active selected');
        aUlTip.removeClass('show');
        $(this).addClass('show');
    }).mouseout(function(){
        timer=setInterval(function(){
            $(this).removeClass('show');
        },300)
    })
//公告规则
//banner1
    var swiper = new Swiper('#m_banner1 .swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay:3000,
        autoplayDisableOnInteraction:true

    });
//banner1
    //banner2

    var swiper2 = new Swiper('#h1_con .swiper-container', {
        loop: true,
        autoplay:1500,
        autoplayDisableOnInteraction:true,
        direction:'vertical'
    });


    //banner2
//banner2
    var oPre=$('#pre_arrow');
    var oNe=$('#next_arrow');
    var aUlSb=$('#sm_banner')
    var aLiSb=$('#sm_banner li');
    var aLiBtn=$('#circle_btn li');
    var n=0;
    oPre.click(function(){
        n++;
        if(n>aLiSb.length-2){
            n=1;
            aUlSb.css('left',0)
        }
        if(n==aLiSb.length-2){
            $(aLiBtn.eq(0)).addClass('activeBtn');
        }else{
            $(aLiBtn.eq(n)).addClass('activeBtn');
        }
        aLiBtn.eq(n-1).removeClass('activeBtn');
        aUlSb.animate({left:-n*aLiSb.outerWidth()},{duration:500});
    })

//banner2
    var aLiSer=$('.sev-xl');
    var aShowBox=$('.tb-fn-box');
   //.onsel
    $.each('aLiSer',function(i){
        aLiSer.eq(i).mouseover(function(){
            aLiSer.removeClass('onsel');
            $(this).addClass('onsel');
            aShowBox.css('display','block');
        })
    })

    $('.charge-tabs').click(function(){
        aLiSer.removeClass('onsel');
        aShowBox.css('display','none');
    })

$('.close-icon').click(function(){
    $('.tbh-load').css('display','none');
})

    //宝贝 天猫店铺


    //宝贝 天猫店铺
    //热满单品

    var oUlS=$('#sale_box');
    var aItem=oUlS.find('.i-tem');
    var aDn=oUlS.find('.s-dn-con');
    aItem.each(function(i){

        aItem.eq(i).mouseover(function(){

            aDn.eq(i).css('display','block');
        }).mouseout(function(){
            aDn.eq(i).css('display','none');
        })
    })

    //热满单品

//吸丁条

    var oLogo=$('.top-wrap');
    var top=$('.top-wrap').offset().top;

    $(window).scroll(function(){
        if($(document).scrollTop()>top){
            oLogo.addClass('fixed-logo');
        }else{
            oLogo.removeClass('fixed-logo');
        }
    })




})