$('.carousel').carousel({
  interval: 2000
});

$(".about").mouseenter(function(){
    $(".about").fadeTo( "slow" , 0.5);
});

$(".about").mouseleave(function(){
    $(".about").fadeTo( "slow" , 1);
});
$(window).scroll(function () {
	$("h2").fadeIn(400);
});

$(".nav li>a").on("click", function(){
   $(".nav").find("li").addClass("active").removeClass("active");
   $(this).parent().addClass("active");
});