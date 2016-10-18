$(document).ready(function() {

	
	// ВЫравнивание блоков по высоте
	$(".dark-item h3").equalHeights(); 
	$(".team-wrap img").equalHeights(); 
	$(".fact .fact-content span").equalHeights(); 
	////animate
	$(".sect p").animated("zoomIn");
	$(".sect .icon-wrap .fa").animated("slideInDown");
	$(".sect-dark h3").animated("slideInDown");
	$(".sect-dark .qote").animated("slideInUp");
	$(".sect-dark i").animated("zoomIn");
	$(".team-item").animated("bounceInLeft");
	$(".product-item-cont span").animated("bounceInUp");
	$(".product-item-cont h3").animated("bounceInLeft");
	$(".product-item-img").animated("bounceInRight");

	$(".loader_inner").fadeOut();
	$(".loader").delay(200).fadeOut("slow");

	$(".main-head .head-contenr h1").animated("fadeInDown");
	$(".main-head .head-contenr p").animated("fadeInUp");
	$(".main-head .head-contenr .buttons").animated("bounceInRight");
	$(".main-head .top-line .logo").animated("bounceInLeft");
	$(".main-head .top-line .top-mnu").animated("bounceInRight");

}); 

$(function(){

	/////toggle mnu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".top-mnu").slideToggle();
		return false;
	});

	////mnu-filtr
	$('#Container').mixItUp();

	//Слайдер
	var owl = $(".slider");

	owl.owlCarousel({
		loop: true,
		items: 3, // 10 выше пунктов ширина 1000px браузера
		itemsDesktop: [ 1000 , 4], // 5 элементов между 1000px и 901px
		itemsDesktopSmall: [ 900,3 ], // betweem 900px и 601px
		itemsTablet: [ 600, 2 ], // 2 элементов между 600 и 0
		itemsMobile: false,
		itemClass: "slide-wrap",
		nav: "true",
		navText: "",
		autoPlay : true,
		slideSpeed : 200,	
   });

	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	});

	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel');
	});

	//плавный скрол в хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


/////////input///////////
//Load animation if fields containing data on page load
	$(".input").each(function() { 
		if ($(this).val() != "") {
			$(this).parent().addClass("animation");
		}
	});

//Add animation when input is focused
$(".input").focus(function(){
	$(this).parent().addClass("animation animation-color");
});

//Remove animation(s) when input is no longer focused
$(".input").focusout(function(){
	if($(this).val() === "")
		$(this).parent().removeClass("animation");
	$(this).parent().removeClass("animation-color");
})



}); 
