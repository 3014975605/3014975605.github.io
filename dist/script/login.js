$(function($){
  $('.btn').on('click',function(){
      var user=$('#username').val();
      var pass=$('#password').val(); 
      if(!user){
          $('.alert-danger').fadeIn(300).children('strong').text('请输入用户名');
          return;
      }else{
        $('.alert-danger').fadeOut(300);
      }
      if(!pass){
        $('.alert-danger').fadeIn(300).children('strong').text('请输入密码');
        return;
    }else{
        $('.alert-danger').fadeOut(300);
    }
      $.get('../json/user.json',function(data){
             var falg=false;
             data.forEach(function(item){
                 if(item.username==user&&item.password==pass){
                     falg=true;
                     //存储数据
                     delete item.password;
                     var users=JSON.stringify(item);
                     localStorage.setItem('user',users);
                     return;
                 }
             });
             if(!falg){
                $('.alert-danger').fadeIn(300).children('strong').text('用户名或密码错误');
                 return;
             }
             $('.alert-danger').fadeIn(300).children('strong').text('登录成功');
             window.location.href="/pages/index.html";
      })
  })
})