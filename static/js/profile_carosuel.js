$('.recipes-owl').owlCarousel({
  loop:false,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:2,
          slideBy:2,
      },
      720:{
          items:3,
          slideBy:3,
      },
      1140:{
          items:4,
          slideBy:4,
      },
  }
})