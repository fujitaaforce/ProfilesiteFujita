$(function(){
	$('.page__character__img1').slick({
			autoplay:true,
			autoplaySpeed:4000,
			dots:true,
	});
});
$(function(){
	$('.page__hobby__img1').mouseover(function(i){
			$('.hobby__img1__text').delay(i*300).animate({
					'left' : 420,
					'opacity' : 1,
					},500);
	});
	$('.page__hobby__img1').mouseout(function(i){
		$('.hobby__img1__text').delay(i*300).animate({
				'left' : 520,
				'opacity' : 0,
				},500);
	});
});
$(function(){
	$('.page__hobby__img2').mouseover(function(i){
			$('.hobby__img2__text').delay(i*300).animate({
					'left' : 500,
					'opacity' : 1,
					},500);
	});
	$('.page__hobby__img2').mouseout(function(i){
		$('.hobby__img2__text').delay(i*300).animate({
				'left' : 400,
				'opacity' : 0,
				},500);
	});
});
$(function(){
	$('.page__hobby__img3').mouseover(function(i){
			$('.hobby__img3__text').delay(i*300).animate({
					'left' : 420,
					'opacity' : 1,
					},500);
	});
	$('.page__hobby__img3').mouseout(function(i){
		$('.hobby__img3__text').delay(i*300).animate({
				'left' : 520,
				'opacity' : 0,
				},500);
	});
});
$(function(){
	$('.page__hobby__img4').mouseover(function(i){
			$('.hobby__img4__text').delay(i*300).animate({
					'left' : 500,
					'opacity' : 1,
					},500);
	});
	$('.page__hobby__img4').mouseout(function(i){
		$('.hobby__img4__text').delay(i*300).animate({
				'left' : 400,
				'opacity' : 0,
				},500);
	});
});