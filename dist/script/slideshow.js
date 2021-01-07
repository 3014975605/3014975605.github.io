     
var mySwiper = new Swiper ('.swiper-container', {
  direction:'horizontal',
  loop: true,
  autoplay:3000,
  pagination : '.swiper-pagination',
  paginationClickable :true,
  prevButton:'.swiper-button-prev',
nextButton:'.swiper-button-next',
paginationElement : 'li', 
}) ;
var mySwiper1 = new Swiper ('.swiper-container1', {
  direction:'vertical',
  loop: true,
  autoplay:3000,
})              