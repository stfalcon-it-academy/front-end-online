
$(document).ready( () => {
    
  const anchors = document.querySelectorAll('a[href*="#"]')
    
    for (let anchor of anchors){
      
      anchor.addEventListener('click', function (e) {
        
        e.preventDefault()
      
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
    //header slider
    $('.js-main-slider').slick({
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 1000,
    });
    //study slider 
    $('.study-place_sliderFor').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,  
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.study-card_sliderNav'
    });
    $('.study-card_sliderNav').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.study-place_sliderFor',
    });
    // team hover 
    $('.team-member_face').hover( function(){
      $(this).addClass('team-member_faceHover');
      $(this).next(this).addClass('team-member__active');
      }, function() {
        $(this).removeClass('team-member_faceHover');
        $(this).next(this).removeClass('team-member__active');
    });  
    //scroll-UP
    $('#scroll-btn').click( () => {
      $("html, body").animate({
        scrollTop: 0}, 1500);
    })
});
     
     
