$(document).ready(function() {
    var better = (screen.width>screen.height) ? screen.width : screen.height;
    for (var i = 1; i <=better; i++) {
        $('.mainpage').append('<a class="floatingText">' + String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33) + '</a>');
    } 
// website launch button and functions
    $(".buttonContainer").on('click', function() {
        $(this).attr('class', 'correctWebsite2 swing')
        $('a').attr('class', 'floatingText swing');
        $( "a:contains('P')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a:contains('r')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a:contains('o')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a:contains('j')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a:contains('e')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a:contains('c')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a:contains('t')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a:contains('s')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a:contains('C')" ).eq(1).attr('class', 'floatingmainText gotoRight');
        $( "a:contains('o')" ).eq(1).attr('class', 'floatingmainText gotoRight');
        $( "a:contains('n')" ).first().attr('class', 'floatingmainText gotoRight');
        $( "a:contains('t')" ).eq(1).attr('class', 'floatingmainText gotoRight');
        $( "a:contains('a')" ).first().attr('class',  'floatingmainText gotoRight');
        $( "a:contains('c')" ).eq(2).attr('class', 'floatingmainText gotoRight ');
        $( "a:contains('t')" ).eq(2).attr('class', 'floatingmainText gotoRight ');
        $( "a:contains('a')" ).eq(1).attr('class',  'floatingmainText gotodown');
        $( "a:contains('b')" ).eq(1).attr('class',  'floatingmainText gotodown');
        $( "a:contains('o')" ).eq(2).attr('class',  'floatingmainText gotodown');
        $( "a:contains('u')" ).first().attr('class',  'floatingmainText gotodown');
        $( "a:contains('t')" ).eq(3).attr('class',  'floatingmainText gotodown');
        $( "a:contains('s')" ).eq(1).attr('class',  'floatingmainText gotoup');
        $( "a:contains('k')" ).first().attr('class',  'floatingmainText gotoup');
        $( "a:contains('i')" ).first().attr('class',  'floatingmainText gotoup');
        $( "a:contains('l')" ).first().attr('class',  'floatingmainText gotoup');
        $( "a:contains('l')" ).eq(1).attr('class',  'floatingmainText gotoup');
        $( "a:contains('s')" ).eq(2).attr('class',  'floatingmainText gotoup');

        $(".waitForClass").attr('class','project');
        $(".waitForClass2").attr('class','contact');
        $(".waitForClass3").attr('class','about');
        $(".waitForClass4").attr('class','skills');
        $(".nameContainer").attr('class','nameContainer removeName');

        setTimeout(
            function() {
                $( ".swing" ).remove();
                $('.project, .contact, .skills, .about').attr('class', ' ');
                $(".projectContainer > div > span ").attr('class','widerText');
                $(".contactContainer > div > span ").attr('class','widerText');
                $(".skillsContainer > div > span ").attr('class','widerText2');
                $(".aboutContainer > div > span ").attr('class','widerText2');
            },
            7000);
        setTimeout(
            function() {
                $( ".floatingmainText" ).remove();
            },
            15000);
    });
// button and functions for each sections

    $('div.projectContainer').click(function(){
        if($("div#leftSectionContainer").hasClass("gotoright")){
            $("div#leftSectionContainer").removeClass("gotoright");
            $("div#leftSectionContainer").addClass('gobacktoleft');
            console.log('came inside if loop');
        }
        else{
            $("div#leftSectionContainer").removeClass("gobacktoleft");
            $("div#leftSectionContainer").addClass("gotoright");
            console.log('came inside else loop');
        }
    })

});