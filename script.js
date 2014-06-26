$(document).ready(function()
{
	var animateTime_ms = 700;
	var fadeTime_ms = 500;

	//hover transparency
	$(".banner").hover(function()
	{
		$(".banner .fader").fadeTo(fadeTime_ms, 0.3);
		$(".bannertext").stop().animate({left: "75%"}, animateTime_ms);

	}, function()
	{
		$(".banner .fader").fadeTo(fadeTime_ms, 0.2);
		$(".bannertext").stop().animate({left: "-75%"}, animateTime_ms);

	});



});