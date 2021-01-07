$(function($){
  if(localStorage.getItem('user')){
    //购物车
if(localStorage.getItem('goods')){
  var num=JSON.parse(localStorage.getItem('goods')).length;
$('.shoppingcart span').text(num);
}
  }
    if(localStorage.getItem('user')){
      var user=JSON.parse(localStorage.getItem('user'));
      $(".prosonal").show().children('span').text(user.username);
      $('.login').hide();
      $('.prosonal').on('mouseenter',function(){
        if($('.pro-center').attr('class')=='pro-center'){
          $('.pro-center').show();
          return;
        }
        $(this).css('backgroundColor','#fff');
        $(`<dl class="pro-center"></dl>`)
        .appendTo($(this))
        .html(`<dt><a href="#">个人中心</a></dt>
        <dd><a href="#">评价晒单</a></dd>
        <dd><a href="#">我的收藏</a></dd>
        <dd class="exit"><a href="#">退出登录</a></dd>`);
        $('.exit').on('click',function(){
          localStorage.removeItem('user');
          window.location.reload();
         window.location.href='/pages/index.html';
          return false;
        })
      //   <dl class="pro-center">
      //   <dt><a href="#">个人中心</a></dt>
      //   <dd><a href="#">评价晒单</a></dd>
      //   <dd><a href="#">我的收藏</a></dd>
      //   <dd class="exit"><a href="#">退出登录</a></li>
      // </dl>
        // $(this).children('dl').show();
      }).on('mouseleave',function(){
        $(this).css('backgroundColor',"#404040");
        $(this).children('dl').hide();
      })
    }
    // var timer=setInterval(function(){
    //    $(".advertising img[display='block']")
    //    .css('display','none')
    //    .siblings('img')
    //    .css('display',"block");
    // },1000)
    $('#advertising .close').on('click',function(){
        $(this).parent().remove();
        // clearInterval(timer);
    })
    //注册显示下拉
    $('li.personal').on('mouseenter',function(){
        if($('.down').attr('falg')){
            $('.down').css('display','block');
            return;
        }
        $.get('../json/prosonal.json',function(data){
            $('<div class="down"></div>').appendTo($('.header'))
            .attr('falg',true);
            $('<ul><ul>').appendTo($('.down'));
            var html ='';
            data.forEach(function(item){
            html+=(`<li><a href="#">
               <img src="${item.images}" alt="">
               <p>${item.text}</p>
              </a></li>`)
            })
            $('.down ul').html(html);
            /////
            $('.personal').on('mouseleave',function(){
              $('.down').css('display',"none");
            });
           $('.down').on('mouseenter',function(){
            $('.down').css('display',"block")
           })
          $('.down').on('mouseleave',function(){
            $('.down').css('display',"none")
          });
        })
    })
    //热门活动显示下拉
    $('li.act').on('mouseenter',function(){
        $.get('../json/activity.json',function(data){
            $('<div class="down-act"></div>').appendTo($('.header'))
        .attr('falg',true);
        $('<ul><ul>').appendTo($('.down-act'));
        var html ='';
        data.forEach(function(item){
            html+=(`<li><a href="#">
               <img src="${item.images}" alt="">
               <p>${item.text}</p>
              </a></li>`)
            })
            $('.down-act ul').html(html);
            $('.act').on('mouseleave',function(){
                $('.down-act').css('display',"none");
              });
            $('.down-act').on('mouseenter',function(){
                $(this).css('display',"block")
               })
             $('.down-act').on('mouseleave',function(){
                $(this).css('display',"none")
              });
        });
    })
});
