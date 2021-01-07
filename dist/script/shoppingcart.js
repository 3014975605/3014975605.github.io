$(function($){
    if(!localStorage.getItem('user')){
        window.location.href='/pages/login.html';
        return;
    }
    var goods=JSON.parse(localStorage.getItem('goods'));
    if(!goods){
        $('.prompt').show();
        return;
    }
    var html='';
    goods.forEach(function(item){
          html+=`<div class="good">
          <ul>
              <li>
                  <input type="checkbox" name="" id="">
              </li>
              <li>
                  <img src="${item.image}" alt="">
                  <p>${item.message}</p>

              </li>
              <li>
                  ${item.price}
              </li>
              <li>
              <div class='num'>
               <span style="border-right: 0;" class='minus'>-</span>
               <i>${item.num}</i>
               <span style="border-left: 0;" class='plus'>+</span>
              </div>
              </li>
              <li>￥0</li>
              <li>${item.score}</li>
              <li class='tt'>${item.total}</li>
              <li>
                  <span class="close" code='${item.code}'>X</span>
              </li>
          </ul>
      </div>` 
    });
    $('.message').html(html);
    //////
    $('.minus').on('click',function(){
        var that=$(this);
        var num=$(this).next('i').text();
        num--;
        $(this).next('i').text(num);
        var goods=JSON.parse(localStorage.getItem('goods'));
        var code=$(this).parent().parent().siblings('li:last').children('span').attr('code');
        var total=parseInt($('.total ul li:eq(2) span').text().slice(1));//合计的总数
        if(num<=0){
            goods.forEach(function(item,index){
                if(code==item.code){
                  goods.splice(index,1);
                  total=$(this).parent().parent().siblings('li').eq(0).children('input').prop('checked')?(total-item.price):total;
                  $('.total ul li:eq(2) span').text('￥'+total);
                  return;
                }
            },$(this));
            if(goods.length==0){
                console.log($('.prompt'))
                $('.prompt').show();
                localStorage.removeItem('goods');
                $(this).parent().parent().parent().parent().remove();
                return;
            }
            goods=JSON.stringify(goods);
            localStorage.setItem('goods',goods);
            $(this).parent().parent().parent().parent().remove();
            return;
        }
        goods.forEach(function(item){
              if(code==item.code){
                  item.num=num;
                  item.total=num*item.price;
                  that.parent().parent().parent().children('li').eq(6).text(item.total);
                  //合计的总数
                  total=$(this).parent().parent().siblings('li').eq(0).children('input').prop('checked')?(total-item.price):total;
                  $('.total ul li:eq(2) span').text('￥'+total);
                  return;
              }
        },$(this));
        goods=JSON.stringify(goods);
        localStorage.setItem('goods',goods);
      });
      //加
      $('.plus').on('click',function(){
          var that=$(this);
          var num=$(this).prev('i').text();
          num++;
        //   $('.total ul li:eq(2) span').text("￥"+total);
          $(this).prev('i').text(num);
          var goods=JSON.parse(localStorage.getItem('goods'));
          var code=$(this).parent().parent().siblings('li:last').children('span').attr('code');
          goods.forEach(function(item){
            if(code==item.code){
                item.num=num;
                item.total=num*item.price;
                that.parent().parent().parent().children('li').eq(6).text(item.total);
                   //合计的总数
                var total=parseInt($('.total ul li:eq(2) span').text().slice(1));
                total=$(this).parent().parent().siblings('li').eq(0).children('input').prop('checked')?(total+item.price):total;
                console.log(this.parent().parent().siblings('li').eq(0).children('input').prop('checked'))
                console.log(total)
                $('.total ul li:eq(2) span').text('￥'+total);
                return;
            }
      },$(this));
      goods=JSON.stringify(goods);
      localStorage.setItem('goods',goods);
      });
      ////
      $('.close').on('click',function(){
        var goods=JSON.parse(localStorage.getItem('goods'));
        var code=$(this).attr('code');
        goods.forEach(function(item,index){
            if(code==item.code){
              goods.splice(index,1);
              return;
            }
        });
        console.log(goods)
        console.log(code)
        if(goods.length==0){
            $('.prompt').show();
            localStorage.removeItem('goods');
            $(this).parent().parent().parent().remove();
            return;
        }
        goods=JSON.stringify(goods);
        localStorage.setItem('goods',goods);
          $(this).parent().parent().parent().remove();
      });
      //全选功能实现
      $('.title ul li:eq(0) input').on('click',function(){
         $('.good input').prop('checked',$(this).prop('checked'));
         //商品全部选中
         if($(this).prop('checked')){
            $('.total ul li:eq(1) span:eq(1)').text($('.good').length);
            var total=0;
           $('.good ul li.tt').each(function(){
               total+=parseInt($(this).text());
           });
           console.log(total);
           $('.total ul li:eq(2) span').text("￥"+total);
         }else{
            $('.total ul li:eq(1) span:eq(1)').text(0);
            $('.total ul li:eq(2) span').text("￥"+0);
         }
      });
      $('.good input').on('click',function(){
        $('.total ul li:eq(1) span:eq(1)').text($('.good input:checked').length);
          var total=0;
          if($('.good input').length!=$(".good input:checked").length){
              $('.title ul li:eq(0) input').prop('checked',false);
            $('.good input:checked').parent().siblings('li.tt').each(function(){
                total+=parseInt($(this).text());
            });
            $('.total ul li:eq(2) span').text("￥"+total);
            return;
          }
          $('.good ul li.tt').each(function(){
              total+=parseInt($(this).text());
          });
          console.log(total);
          $('.total ul li:eq(2) span').text("￥"+total);
          $('.title ul li:eq(0) input').prop('checked',true);
      });
      //设置total部分
      var  text=$('.good').length;
      $('.total ul li:eq(1) span:eq(0)').text(text);
      //
});