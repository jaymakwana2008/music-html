
$('.banner .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1, 
   autoplayTimeout: 3000,
      autoplay:true,
      autoplayHoverPause: true,
})
$('.badge-section .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay:1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        640:{
            items:2,
            
        },
        1000:{
            items:3,
         
            loop:false
        }
    }
})
  new Mmenu(document.querySelector("#menu"));

            document.addEventListener("click", function (evnt) {
                var anchor = evnt.target.closest('a[href="#/"]');
                if (anchor) {
                    //alert("Thank you for clicking, but that's a demo link.");
                    evnt.preventDefault();
                }
            });