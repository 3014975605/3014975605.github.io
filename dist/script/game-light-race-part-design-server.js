function lazyload(){
  $('.lazy').lazyload({
    effect:'fadeIn',
    threshold :180 
  });
}
$(function($){
$.get('../json/game.json',function(data){
  var html='';
  data.forEach(function(item){
    html+=`<li><div class="picture">
<a href="#">
 <img class='lazy' data-original="${item.image}" alt="">
</a>
</div>
<h3>   ${item.title}   </h3>
<p>${item.content}</p>
<div class="price">
<span>${item.price}</span>&nbsp;&nbsp;
<ins>${item.proprice}</ins>
</div></li>`
  });
  $('.game-show').html(html);
lazyload();
})
    // $.get('../json/game.json',function(data){
       
    //  }) 
     
//light
$.get('../json/light.json',function(data){
  var html='';
  data.forEach(function(item){
html+=`<li><div class="picture">
<a href="#">
 <img class='lazy' data-original="${item.image}" alt="">
</a>
</div>
<h3>   ${item.title}   </h3>
<p>${item.content}</p>
<div class="price">
<span>${item.price}</span>&nbsp;&nbsp;
<ins>${item.proprice}</ins>
</div></li>`
  });
$('.light-show').html(html); 
lazyload();
})
//race
$.get('../json/race.json',function(data){
  var html='';
  data.forEach(function(item){
html+=`<li><div class="picture">
<a href="#">
 <img class='lazy' data-original="${item.image}" alt="">
</a>
</div>
<h3>   ${item.title}   </h3>
<p>${item.content}</p>
<div class="price">
<span>${item.price}</span>&nbsp;&nbsp;
<ins>${item.proprice}</ins>
</div></li>`
  });
$('.race-show').html(html); 
lazyload();
});
//parts
$.get('../json/parts.json',function(data){
  var html='';
  data.forEach(function(item){
html+=`<li><div class="picture">
<a href="#">
 <img class='lazy' data-original="${item.image}" alt="">
</a>
</div>
<h3>   ${item.title}   </h3>
<p>${item.content}</p>
<div class="price">
<span>${item.price}</span>&nbsp;&nbsp;
<ins>${item.proprice}</ins>
</div></li>`
  });
$('.parts-show').html(html); 
lazyload();
})
//design
$.get('../json/design.json',function(data){
  var html='';
  data.forEach(function(item){
html+=`<li><div class="picture">
<a href="#">
 <img class='lazy' data-original="${item.image}" alt="">
</a>
</div>
<h3>   ${item.title}   </h3>
<p>${item.content}</p>
<div class="price">
<span>${item.price}</span>&nbsp;&nbsp;
<ins>${item.proprice}</ins>
</div></li>`
  });
$('.design-show').html(html); 
lazyload();
});
//server
$.get('../json/server.json',function(data){
  var html='';
  data.forEach(function(item){
html+=`<li><div class="picture">
<a href="#">
 <img class='lazy' data-original="${item.image}" alt="">
</a>
</div>
<h3>   ${item.title}   </h3>
<p>${item.content}</p>
<div class="price">
<span>${item.price}</span>&nbsp;&nbsp;
<ins>${item.proprice}</ins>
</div></li>`
  });
$('.server-show').html(html); 
lazyload();
})
});


