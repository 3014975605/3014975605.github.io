
$(function($){
   //鼠标进入事件
   $('.sidebar>ul>li').on('mouseenter',function(){
      var falg=$(this).attr('href');
      var falg2=$(this).attr('href2');
       if(!falg){
            return;
       }
       if($('div#submenu').attr('flag3')){
        $('#submenu').show();
        $('.bigImg').show();
        return;
       }
       $("<div id='submenu' flag3='dv'></div>").html('<ul></ul>').appendTo($('.sidebar'));
          (async function(){
              await new Promise((resolve)=>{
                $.get(falg,function(data){
                var html='';
                data.forEach(function(item){
                    var str='<a><img src="" alt=""></a>';
                for(var key in item){
                    str+=`<a>${item[key]}</a>`;
                }
                html+=`<li>
                ${str}     
                </li>`
                });
               $('#submenu ul').html(html);
               resolve();
              })
            })
              await new Promise((resolve)=>{
                 $.get(falg2,function(data){
               data.forEach(function(item,index){
                 $('#submenu ul li a img').eq(index).attr('src',item.image);
                 $(`<div class='bigImg'><div>`).html(`<img src="https://static.asus.com.cn/store/20201223/10444297101579.jpg" alt="">`)
                 .appendTo($('.sidebar'));
               })
                 });
                 $('.sidebar>ul>li').on('mouseleave',function(){
                     $('#submenu').hide();
                     $('.bigImg').hide();
                 })
                 $('#submenu').on('mouseenter',function(){
                  $(this).show();
                 });
                 $('#submenu').on('mouseleave',function(){
                  $(this).hide();
                  $('.bigImg').hide();
                 });
                 $('.bigImg').on('mouseenter',function(){
                    $(this).show();
                 }).on('mouseleave',function(){
                    $(this).hide();
                 })
              });
          })();
})
});
