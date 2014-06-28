//manage name size when window resizes
function manageNameSize()
{
	$('.myname').css('font-size',($(window).width()*0.08)+'px');    
}

$(document).ready(function()
{
/////////////////////////////////////////////////////
//   ABOUT ME
/////////////////////////////////////////////////////
    var animateTime_ms = 700;
    var fadeTime_ms = 500;
    var underscoreToggle = 1;
    var textShiftSpeed_ms = 200;

    ///////////////////////////////////////////////
    //things to do right off the bat
    manageNameSize();
    
    ///////////////////////////////////////////////
    //navbar effects
    $(".link").hover(function()
    {
        $(this).css("border-top", "2px solid #4c9dff");
    }, function()
    {
        $(this).css("border-top", "none");
    });
    
    
    ///////////////////////////////////////////////
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
    
    ///////////////////////////////////////////////
    //change size of name when window is resized
    $(window).resize(function()
    {
        manageNameSize();
    });

    ///////////////////////////////////////////////
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
    
    ///////////////////////////////////////////////
    //shift text
    $('.zoomable').hover(function()
    {
        $(this).stop().animate({left: "0.3%"}, textShiftSpeed_ms);
        $(this).fadeTo(75, 1);
    }, function()
    {
        $(this).stop().animate({left: "-0.3%"}, textShiftSpeed_ms);
        $(this).fadeTo(75, 0.75);
    });
    
    ///////////////////////////////////////////////
    //trigger quote when you scroll far enough
    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 900;             // set to whatever you want it to be

        if(y_scroll_pos > scroll_pos_test) {
            $('.quote').fadeTo(1200, 1);
        }
        
        if(y_scroll_pos > scroll_pos_test + 30)
        {
            $('.credit').fadeTo(1200, 1);
        }
    });
    
    ///////////////////////////////////////////////
    //fade effect for social media links    
    $('.social-link').hover(function()
    {
        $(this).stop().fadeTo(200, 1);
    }, function()
    {
        $(this).stop().fadeTo(200, 0.7);
    });
                        
});
