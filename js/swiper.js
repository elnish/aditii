// var swiper = new Swiper('.swiper-container', {
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     autoplay: {
//         delay: 1000,
//     }
//   });


  var swiper = new Swiper('.swiper1', {

       spaceBetween: 30,
       pagination: {
         el: '.swiper-pagination',
         clickable: true,
       },
     });




  var swiper2 = new Swiper('.swiper2', {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
