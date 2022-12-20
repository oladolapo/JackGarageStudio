 
  // Working with jQuery - Day 06
  // NOTE: Make sure the students add jQuery file in the .js folder and link it with the HTML file
  let index = 0;
  const totalWorkItems = $(".work-item").length; 

  $(document).ready(function () {

    // nav toggle while shrinking the webpage (Getting the Burger menu when size is minimized)
    $(".nav-toggle").click(function(){
      $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
      if($(window).width() < 768){
         $(".header .nav").slideToggle();
      }
    })

    // Make the header fixed  
    $(window).scroll(function(){
      if($(this).scrollTop() > 100){
        $(".header").addClass("fixed");
      }
      else{
        $(".header").removeClass("fixed");
      }
    })
    
  	// Set lightbox img max height after clicking
  	const wHeight = $(window).height();
  	$(".lightbox-img").css("max-height",wHeight+"px");

  	// Lightbox Slideshow Code 
  	$(".work-item-inner").click(function(){
  		index = $(this).parent(".work-item").index();
  		$(".lightbox").addClass("open");
  		lightboxSlideShow();
  	})
  	$(".lightbox .prev").click(function(){
       if(index == 0){
       	 index = totalWorkItems-1;
       }
       else{
       	index--;
       }
       lightboxSlideShow();
  	})
  	$(".lightbox .next").click(function(){
  		if(index == totalWorkItems-1){
  			index = 0
  		}
  		else{
  			index++;
  		}
  		lightboxSlideShow();
  	})

  	// Closing the lightbox on Click
  	$(".lightbox-close").click(function(){
  		$(".lightbox").removeClass("open");
  	})

  	// Close lightbox when clicked outside of img-box 
     $(".lightbox").click(function(event){
       if($(event.target).hasClass("lightbox")){
       	 $(this).removeClass("open");
       }
     })
  })

  function lightboxSlideShow(){
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();
    $(".lightbox-img").attr("src",imgSrc);
    $(".lightbox-category").html(category)
    $(".lightbox-counter").html(totalWorkItems + "/" + (index+1));
  }


