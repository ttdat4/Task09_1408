// Function slick slider
// var json = [
//     { "img_url": "assets/img/banner1.png" },
//     { "img_url": "assets/img/banner2.png" },
//     { "img_url": "assets/img/banner3.png" }
//   ];
//   $.each(json, function () {
//     var image = this["img_url"];
//     console.log(image);
//     $(".c-mainvisual").append(`
//          <div class="c-mainvisual" style="background:url(${image}) no-repeat center; backgroud-size:cover"></div>
//     `);
//   });
  $(document).ready(function(){
    $('.c-mainvisual').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 2000,
        fade: true,
        dots: false,
        cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        swipe: false
      });
  });


  $( ".c-mainvisual__scrolltexta" ).click(function() {
    
      $("#c-about").animate({scrollTop:0}, 2000, "linear",function(){});
      
  });


// Function click button open menu
const $menu = $('.c-menu')
$('.c-header__btnopen').click( function() {
    $menu.show(2000);
    $('.c-header__btnopen').fadeOut(2000);
    $('.c-header__btnclose').fadeIn(2000);
});
$('.c-header__btnclose').click( function() {
    $menu.hide(2000);
    $('.c-header__btnopen').fadeIn(2000);
    $('.c-header__btnclose').fadeOut(2000);
});