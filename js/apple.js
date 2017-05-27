/**
 * Created by zn on 2016/4/24.
 */
$(function(){
  $(window).on('resize',function () {
    var smallWidth = $(window).width();
    if(smallWidth>768){
      $(".liaojie").children('.openlist').hide();
    }
    else{
      $(".liaojie").children('.openlist').show();
    }
  })
    var displays=$('.one a:first');
    var boxs=$('.box');
    displays.click(function(){
        boxs.slideToggle("slow");
    });
//下部下啦列表
    var item=$('.liaojie');
    item.click(function(){
      $(this).next('div').toggleClass('none').toggleClass('show');
      $(this).children('.openlist').toggleClass('active');
    });
  var close=$('.ron');
  var open=$('.sear')
  $(open).click(function(){
    $('.search-box').css({
      display:'block'
    })
    setTimeout(function(){
      $('.suoyin a:nth-child(1)').addClass('positions')
      $('.suoyin a:nth-child(2)').addClass('positions')
      $('.suoyin a:nth-child(3)').addClass('positions')
      $('.suoyin a:nth-child(4)').addClass('positions')
    })
    $('ul li').not($('.icon')).css({
      display:'none'
    })
    $(close).css({
      display:'block'
    })
    $(document.body).css({
      background:'#eee'
    })
  })
  $(close).click(function(){
    $('.search-box').css({
      display:'none'
    })
    $('ul li').css({
      display:'inline-block'
    })
    $(this).css({
      display:'none'
    })
    $('.suoyin a:nth-child(1)').removeClass('positions')
    $('.suoyin a:nth-child(2)').removeClass('positions')
    $('.suoyin a:nth-child(3)').removeClass('positions')
    $('.suoyin a:nth-child(4)').removeClass('positions')
  })

// 小屏
  $('.mind').click(function(){
    var ht=$(window).height();
    $('.min-nav .shop').removeClass('inshop');
    $(".mind span:nth-child(1)").toggleClass('active')
    $(".mind span:nth-child(2)").toggleClass('active1')
    $('.min-nav .shop').toggleClass('goshop')
    var nowClass = $('.min-nav .shop').attr('class')
    console.log(nowClass);
    if (nowClass == 'iconfont bcon shop fr-mr')
      $('.min-nav .shop').toggleClass('inshop')
    setTimeout(function(){
      var h=$(window).height()
      $('.nav-sy').toggleClass('nav-syh')
      $('.nav-sy').height(h - 15)
      setTimeout(function(){
        $('.nav-sy li:nth-child(1)').toggleClass('positions')
        $('.nav-sy li:nth-child(2)').toggleClass('positions')
        $('.nav-sy li:nth-child(3)').toggleClass('positions')
        $('.nav-sy li:nth-child(4)').toggleClass('positions')
        $('.nav-sy li:nth-child(5)').toggleClass('positions')
        $('.nav-sy li:nth-child(6)').toggleClass('positions')
        $('.nav-sy li:nth-child(7)').toggleClass('positions')
      })
    })
  })


  //轮播
  var bannerW=$('.banner li').width();
  var now=0;
 var next=0;
 $('.banner li').eq(0).css({left:0});
  var t=setInterval(wheel,3000);
      function wheel(){
     $('.banner li').stop(true,true)
      next++;
      if(next==$('.banner li').length){
      next=0;
      }
    $('.banner li').eq(next).css({left:bannerW})
     $('.banner li').eq(now).animate({left:-bannerW});
     $('.banner li').eq(next).animate({left:0});
     $(".bt li").eq(now).removeClass("test");
     $(".bt li").eq(next).addClass("test");
    /*  \$(".btnBox li").removeClass("style_s").eq(next).addClass("style_s");*/
      now=next;
   }


//停止时间函数
      $(".bannerBox").hover(function(){
        clearInterval(t)
      },function(){
        t=setInterval(wheel,2000);
      }) 


//下边按钮
    $(".bt li").click(function(){
       $('.banner li').stop(true,true)
      var index=$(this).index();
      if(now==index){
        return;
      }
      if(now<index){
      $('.banner li').eq(index).css({left:bannerW});
       $('.banner li').eq(now).animate({left:-bannerW});
          }

        if(now>index){
        $('.banner li').eq(index).css({left:-bannerW});
        $('.banner li').eq(now).animate({left:bannerW})
      }

       $('.banner li').eq(index).animate({left:0});
       next=now=index;

  })


//左右按钮
  
   $('.lbtn').click(function(){
     $('.banner li').stop(true,true)
    next--;
    if(next<0){
      next=$('.banner li').length-1;
    }
     $('.banner li').eq(next).css({left:-bannerW});
     $('.banner li').eq(now).animate({left:bannerW});
     $('.banner li').eq(next).animate({left:0});
   // $(".btnBox li").eq(now).removeClass("style_s");
  //  $(".btnBox li").eq(next).addClass("style_s");
      now=next

   })

  $('.rbtn').click(function(){
    wheel();
  })
});
