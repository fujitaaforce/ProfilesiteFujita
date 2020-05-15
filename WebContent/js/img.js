$(function(){
// 設定
var $width =540; // 横幅
var $height =320; // 高さ
var $interval = 3000; // 切り替わりの間隔（ミリ秒）
var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
$("#page__about ul li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
$("#page__about ul li").hide().css({"position":"absolute","top":0,"left":0});
$("#page__about ul li:first").addClass("active").show();
setInterval(function(){
var $active = $("#page__about ul li.active");
var $next = $active.next("li").length?$active.next("li"):$("#page__about ul li:first");
$active.fadeOut($fade_speed).removeClass("active");
$next.fadeIn($fade_speed).addClass("active");
},$interval);
});

$(function(){
	// 設定
	var $width =540; // 横幅
	var $height =320; // 高さ
	var $interval = 3000; // 切り替わりの間隔（ミリ秒）
	var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
	$("#page__skill ul li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
	$("#page__skill ul li").hide().css({"position":"absolute","top":0,"left":0});
	$("#page__skill ul li:first").addClass("active").show();
	setInterval(function(){
	var $active = $("#page__skill ul li.active");
	var $next = $active.next("li").length?$active.next("li"):$("#page__skill ul li:first");
	$active.fadeOut($fade_speed).removeClass("active");
	$next.fadeIn($fade_speed).addClass("active");
	},$interval);
	});

$(function() {
   setInterval( "slideSwitch()", 3000 );
});

$(function(){
		$('.page__character__img1').slick({
				autoplay:true,
				autoplaySpeed:4000,
				dots:true,
		});
});

