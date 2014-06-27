//manage name size when window resizes
function manageNameSize()
{
	$('.myname').css('font-size',($(window).width()*0.08)+'px');
}

$(document).ready(function()
{
	var animateTime_ms = 700;
	var fadeTime_ms = 500;
	var underscoreToggle = 1;

	//things to do right off the bat
	manageNameSize();

	//hover transparency
	$(".banner").hover(function()
	{
		$(".banner .fader").stop().fadeTo(fadeTime_ms, 0.3);
		$(".bannertext").stop().animate({left: "85%"}, animateTime_ms);
		$(".selfpic").stop().fadeTo(800, 1);
		$(".myname").stop().fadeTo(fadeTime_ms, 0);


	}, function()
	{
		$(".banner .fader").stop().fadeTo(fadeTime_ms, 0.2);
		$(".bannertext").stop().animate({left: "-85%"}, animateTime_ms);
		$(".selfpic").stop().fadeTo(300, 0);
		$(".myname").stop().fadeTo(fadeTime_ms, 1);

	});

	$(window).resize(function()
	{
		manageNameSize();
	});

	//make underscore flash
	setInterval(function() 
	{
		if(underscoreToggle == 0)
		{
			underscoreToggle = 1;
			$(".myname").text('Jake Demian_');
		}
		else
		{
			underscoreToggle = 0;
			$(".myname").text('Jake Demian ');
		}
	}, 500);
	
    $('.zoomable').hover(function()
    {
        $(this).animate({left: "+=1%"}, 75);
    }, function()
    {
        $(this).animate({left: "-=1%"}, 75);
    });
                        
});