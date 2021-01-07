var falg=true;
$(document).on('scroll',function(){
    // console.log($(this).scrollTop())
// console.log(falg)
    if(!falg){
        return;
    }
    var scrollTop=$(this).scrollTop();
   if(scrollTop>=800&&scrollTop<=6038){
       $('.leap').css('display','block');
   }else{
       $('.leap').css('display','none');
   }

   //设置span颜色
   if(scrollTop>=1486&&scrollTop<1700){
        // $('.leap li:eq(1) a').trigger("mouseleave");
       if($('.leap li:eq(1) span').attr('class')){
           return;
       }
       $('.leap li:eq(1) span').addClass('action')
       .parent().parent().siblings('li').find('span').removeClass('action');
       $('.leap li:eq(1) a').trigger('mouseenter');
       //反向
       $('.leap li:eq(2)').trigger('mouseleave');
   };
   if((scrollTop>=1700&&scrollTop<1988)){
    // $('.leap li:eq(2)').trigger('mouseleave');
   if($('.leap li:eq(2) span').attr('class')){
       return;
   }
   $('.leap li:eq(2) span').addClass('action')
   .parent().parent().siblings('li').find('span').removeClass('action');
   $('.leap li:eq(1) a').trigger("mouseleave");
   $('.leap li:eq(2)').trigger('mouseenter');
   //反向
   $('.leap li:eq(3)').trigger('mouseleave');
}
   if((scrollTop>=1988&&scrollTop<2670)){
        // $('.leap li:eq(2)').trigger('mouseleave');
       if($('.leap li:eq(3) span').attr('class')){
           return;
       }
       $('.leap li:eq(3) span').addClass('action')
       .parent().parent().siblings('li').find('span').removeClass('action');
       $('.leap li:eq(2) a').trigger("mouseleave");
       $('.leap li:eq(3)').trigger('mouseenter');
       //反向
       $('.leap li:eq(4)').trigger('mouseleave');
   }
   if(scrollTop>=2670&&scrollTop<3352){
        // $('.leap li:eq(3)').trigger('mouseleave');
    if($('.leap li:eq(4) span').attr('class')){
        return;
    }
    $('.leap li:eq(4) span').addClass('action')
    .parent().parent().siblings('li').find('span').removeClass('action');
    $('.leap li:eq(3)').trigger('mouseleave');
    $('.leap li:eq(4)').trigger('mouseenter');
    //反向
    $('.leap li:eq(5)').trigger('mouseleave');
   }
   if(scrollTop>=3352&&scrollTop<4034){
        // $('.leap li:eq(4)').trigger('mouseleave');
    if($('.leap li:eq(5) span').attr('class')){
        return;
    }
    $('.leap li:eq(5) span').addClass('action')
    .parent().parent().siblings('li').find('span').removeClass('action');
    $('.leap li:eq(4)').trigger('mouseleave');
    $('.leap li:eq(5)').trigger('mouseenter');
    //反向
    $('.leap li:eq(6)').trigger('mouseleave');
   }
   if(scrollTop>=4034&&scrollTop<4716){
        // $('.leap li:eq(5)').trigger('mouseleave');
    if($('.leap li:eq(6) span').attr('class')){
        return;
    }
    $('.leap li:eq(6) span').addClass('action')
    .parent().parent().siblings('li').find('span').removeClass('action');
    $('.leap li:eq(5)').trigger('mouseleave');
    $('.leap li:eq(6)').trigger('mouseenter');
    //反向
    $('.leap li:eq(7)').trigger('mouseleave');
   }
   if(scrollTop>=4716&&scrollTop<5398){
    if($('.leap li:eq(7) span').attr('class')){
        // $('.leap li:eq(6)').trigger('mouseleave');
        return;
    }
    $('.leap li:eq(7) span').addClass('action')
    .parent().parent().siblings('li').find('span').removeClass('action');
    $('.leap li:eq(6)').trigger('mouseleave');
    $('.leap li:eq(7)').trigger('mouseenter');
    //反向
    $('.leap li:eq(8)').trigger('mouseleave');
   }
   if(scrollTop>=5398&&scrollTop<5813){
    if($('.leap li:eq(8) span').attr('class')){
        // $('.leap li:eq(7)').trigger('mouseleave');
        return;
    }
    $('.leap li:eq(8) span').addClass('action')
    .parent().parent().siblings('li').find('span').removeClass('action');
    $('.leap li:eq(7)').trigger('mouseleave');
    $('.leap li:eq(8)').trigger('mouseenter');
     //反向
     $('.leap li:eq(9)').trigger('mouseleave');
   }
   if(scrollTop>=5813&&scrollTop<6238){
    if($('.leap li:eq(9) span').attr('class')){
        // $('.leap li:eq(8)').trigger('mouseleave');
        return;
    }
    $('.leap li:eq(9) span').addClass('action')
    .parent().parent().siblings('li').find('span').removeClass('action');
    $('.leap li:eq(8)').trigger('mouseleave');
    $('.leap li:eq(9)').trigger('mouseenter');
     //反向
     $('.leap li:eq(10)').trigger('mouseleave');
   }
   if(scrollTop>=6238){
    if($('.leap li:eq(10) span').attr('class')){
        // $('.leap li:eq(9)').trigger('mouseleave');
        return;
    }
    $('.leap li:eq(10) span').addClass('action')
    .parent().parent().siblings('li').find('span').removeClass('action');
    $('.leap li:eq(9)').trigger('mouseleave');
    $('.leap li:eq(10)').trigger('mouseenter');
   }
   //设置right-leap
   if(scrollTop>=600){
       $('.right-leap').css('display','block');
   }else{
    $('.right-leap').css('display','none');
   }
});
$('.leap').on('click','a',function(event){
    falg=false;
    $(this).attr('click',true).parent().siblings('li').children('a').attr('click',false);
    var id=$(this).attr("href");
    var place=$(id).offset().top;
    $(this).children('span').addClass('action')
    .parent().parent().siblings('li')
    .find('span').removeClass('action');
    event.stopPropagation()
    $('.leap li:eq(1) a').trigger('mouseleave')
        $(this).parent().trigger('mouseenter').siblings('li').trigger('mouseleave');
    $('html,body').animate({scrollTop:place},300,function(){
        falg=true;
    });
})
$('.leap li:first a').on('mouseenter',function(event){
    if(!falg){
        return;
    }
    $(this).css('opacity',1);
    event.stopPropagation()
}).on('mouseleave',function(event){
    if(!falg){
        return;
    }
    $(this).css('opacity',0)
    event.stopPropagation()
});
$('.leap li:eq(1) a').on('mouseenter',function(event){
    if(!falg){
        return;
    }
    $(this).css('opacity',1);
    event.stopPropagation()
}).on('mouseleave',function(event){
    if(!falg){
        return;
    }
    $(this).css('opacity',0);
    event.stopPropagation()
})
$('.leap li').on('mouseenter',function(event){
    if(!falg){
        return;
    };
    $(".leap li a[click='true']").parent().siblings('li').children('a').attr('click',false);
    // $(this).children('a').attr('click','');
    // if(!$(this).find('span').attr('text')){
        var value=$(this).attr('data1');
        // var text=$(this).find('span').text();
        // $(this).find('span').attr('text',text);
    // }
    $(this).children('a').css('height','60px');
     $(this).find('span').text(value);
     event.stopPropagation();
}).on('mouseleave',function(event){
    // if(!falg){
    //     return;
    // }
    if($(this).children('a').attr('click')=="true"){//点击事件的时候阻止
        $(this).children('a').attr('click','false');
        return;
    }
    var text=$(this).attr('text');
    $(this).find('span').text(text);
   event.stopPropagation()
});
//最后一个li
$('.leap li:last').on('mouseenter',function(){
    if(!falg){
        return;
    }
    $(this).children('a').css('display','block');
}).on('mouseleave',function(){
    if(!falg){
        return;
    }
    $(this).children('a').css('display','none');
})
$('.subject').on('click',function(){
    if(!falg){
        return;
    }
    return false;
})
// setInterval(function(){
//     $('.leap li:eq(2)').trigger('mouseenter');
//     $('.leap li:eq(3)').trigger('mouseenter');
//     $('.leap li:eq(2)').trigger('mouseleave');
//     $('.leap li:eq(3)').trigger('mouseleave');
// },2000)


//riht-leap
$('.right-leap li').on('mouseenter',function(){
    $(this).children('img').eq(0)
    .css('display','none')
    .next('img').css('display','block');
    $(this).children('p').css('color','#00a8ff');
}).on('mouseleave',function(){
    $(this).children('img').eq(0)
    .css('display','block')
    .next('img').css('display','none');
    $(this).children('p').css('color','#808080');
});
$('.right-leap li').eq(1).on('mouseenter',function(){
    if($('.hotline').attr('class')=='hotline'){
        $('.hotline').fadeIn('fast',function(){
            $('.hotline').animate({'left':'-162px'},500);
        })
        return;
    }
    $(`<div class='hotline'><div>`).html(
    `<div><p>笔记本服务热线</p>
    <p class="f_time" style='color='#b2b2b2'>400-600-6655</p>
  </div>
  <div>
    <p>ROG产品服务热线</p>
    <p class="f_time">400-616-6655</p>
  </div>
  <div>
    <p>DIY产品服务热线</p>
    <p class="f_time">400-620-6655</p>
  </div>
  <div>
    <p class="f_time">服务时间：24小时<br> （周一至周日）</p>
  </div>`).appendTo($(this));
  $('.hotline').animate({'left':'-162px'},500);
}).on('mouseleave',function(){
    $('.hotline')
    .css('display','none')
    .css('left','-182px')
})

$('.right-leap li').eq(3).on('mouseenter',function(){
    if($('.pa12').attr('class')=='pd12'){
        $('.pa12').fadeIn('fast',function(){
            $('.pd12').animate({'left':'-180px'},500);
        })
        return;
    };
    $(`<div class='pd12'><div>`).html(
        `<a class="#" data-type="preSale">
        <p>售前咨询，获取更多优惠</p>
        <p class="f_time">9:00-24:00</p>
    </a>
    <a href="javascript:;" class="jump_kefu2">
        <p>订单售后，华硕商城购买</p>
        <p class="f_time">9:00-24:00</p>
    </a>
    <a href="#" class="jump_kefu" data-type="tech">
        <p>官网咨询技术</p>
        <p class="f_time">9:00-24:00</p>
    </a>`
    ).appendTo($(this));
    $('.pd12').animate({'left':'-180px'},500);
}).on('mouseleave',function(){
    $('.pd12')
    .css('display','none')
    .css('left','-200px')
});
//返回顶部
$('.right-leap>li:last').on('click',function(){
    $('body,html').animate({scrollTop:0},300)
})
