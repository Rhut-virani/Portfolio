$(document).ready(function() {
    var better = (screen.width>screen.height) ? screen.width : screen.height;
    for (var i = 1; i <=better; i++) {
        $('.mainpage').append('<a class="floatingText">' + String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33) + '</a>');
    } 
    $(".correctWebsite").on('click', function() {
        $(this).attr('class', 'correctWebsite2 swing')
        $('a').attr('class', 'floatingText swing');
        $( "a:contains('P')" ).first().attr('class', 'floatingmainText gotoPosition');
        $( "a:contains('r')" ).first().attr('class', 'floatingmainText gotoPosition');
        $( "a:contains('o')" ).first().attr('class', 'floatingmainText gotoPosition');
        $( "a:contains('j')" ).first().attr('class', 'floatingmainText gotoPosition');
        $( "a:contains('e')" ).first().attr('class', 'floatingmainText gotoPosition');
        $( "a:contains('c')" ).first().attr('class', 'floatingmainText gotoPosition');
        $( "a:contains('t')" ).first().attr('class', 'floatingmainText gotoPosition');
        $( "a:contains('s')" ).first().attr('class', 'floatingmainText gotoPosition');
        $( "a:contains('C')" ).eq(1).attr('class', 'floatingmainText gotoPosition');
        $( "a:contains('o')" ).eq(1).attr('class', 'floatingmainText gotoPosition');
        $( "a:contains('n')" ).first().attr('class', 'floatingmainText gotoPosition');
        $( "a:contains('t')" ).eq(1).attr('class', 'floatingmainText gotoPosition');
        $( "a:contains('a')" ).first().attr('class',  'floatingmainText gotoPosition');
        $( "a:contains('c')" ).eq(2).attr('class', 'floatingmainText gotoPosition ');
        $( "a:contains('t')" ).eq(2).attr('class', 'floatingmainText gotoPosition ');
        $(".waitForClass").attr('class','project');
        $(".waitForClass2").attr('class','contact');
        setTimeout(
            function() {
                $( ".swing" ).remove();
            },
            10000);
        setTimeout(
            function() {
                $( ".floatingmainText" ).remove();
            },
            15000);
    });
});