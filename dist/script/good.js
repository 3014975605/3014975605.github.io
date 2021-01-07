$(function($){
    $('.small').on('mouseenter',function(){
        $('.mask').show();
        $('.big').show();
    })
    .on('mouseleave',function(){
        $('.mask').hide();
        $('.big').hide();
    })
    .on('mousemove',function(e){
        var x=e.pageX-$('.small').offset().left-$('.mask').width()/2;
        var y=e.pageY-$('.small').offset().top-$('.mask').height()/2;
        //设置mask的边界
        x=x<0?0:x;
        x=x>$('.small').width()-$('.mask').width()?$('.small').width()-$('.mask').width():x;
        y=y<0?0:y;
        y=y>$('.small').height()-$('.mask').height()?$('.small').height()-$('.mask').height():y;
        $('.mask').css({'left':x+'px','top':y+'px'});
        // mask小图的移动距离除以大图的的移动距离=mask的最大移动距离除以大图的最大移动距离
        var bigX=x*($('.big img').width()-$('.big').width())/($('.small').width()-$('.mask').width());
        var bigY=y*($('.big img').height()-$('.big').height())/($('.small').height()-$('.mask').height());
        $('.big img').css('marginLeft',-bigX+'px');
        $('.big img').css('marginTop',-bigY+'px');
    })
    //
    $('.shopcart').on('click',function(){
        $('.mk').show();
        $('.log').show();
        //点击加入购物车后
        //获取选中商品数量
        var num=parseInt($('.num-main i').text());
        var price=parseInt($('.price').text().slice(1));
       var total=num*price;
       $('.log p span').eq(1).text(num);
       $('.log p span').eq(2).text('￥'+total);
       var image=$('.small img').attr('src');
       var mess=$('.title').text();
       var code=$('.title').attr('code');
       console.log(image,mess,code)
       //将数据储存
       var message={
           code:code,
           image:image,
           message:mess,
           price:price,
           num:num,
           total:total,
           score:6499,
       };
       var goods=[];
       if(localStorage.getItem('goods')){
       goods=JSON.parse(localStorage.getItem('goods'));
       var falg=true;
           goods.forEach(function(item,index){
               if(message.code==item.code){
                   message.num=message.num+item.num;
                   message.total=message.total+item.total;
                   goods.splice(index,1,message);
                   goods=JSON.stringify(goods);
                   localStorage.setItem('goods',goods);
                   falg=false;
                   return;
               }
           });
          if(falg){
               //此时goods里面没有这个商品
           goods.push(message);
           goods=JSON.stringify(goods);
           localStorage.setItem('goods',goods);
          }          
       }else{
          goods.push(message);
          goods=JSON.stringify(goods);
          localStorage.setItem('goods',goods);
       }
        return false;
    });
    $('.log .close').on('click',function(){
        $('.mk').hide();
        $('.log').hide();
        return false;
    });
    $('.num-main span:eq(0)').on('click',function(){
      var num=$(this).next('i').text();
      num--;
      num=num<=0?1:num;
      $(this).next('i').text(num);
    });
    $('.num-main span:eq(1)').on('click',function(){
        var num=$(this).prev('i').text();
        num++;
        $(this).prev('i').text(num);
    });
})