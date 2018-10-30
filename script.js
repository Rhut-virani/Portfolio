$(document).ready(function() {
    var better = (screen.width>screen.height) ? screen.width : screen.height;
    for (var i = 1; i <=better; i++) {
        $('.mainpage').append('<a class="floatingText">' + String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33) + '</a>');
    } 
    $(".correctWebsite").on('click', function() {
        $(this).attr('class', 'correctWebsite2 swing')
        $('a').attr('class', 'floatingText swing');
        $( "a:contains('P')" ).first().attr('class', 'floatingText');
        $( "a:contains('r')" ).first().attr('class', 'floatingText');
        $( "a:contains('o')" ).first().attr('class', 'floatingText');
        $( "a:contains('j')" ).first().attr('class', 'floatingText');
        $( "a:contains('e')" ).first().attr('class', 'floatingText');
        $( "a:contains('c')" ).first().attr('class', 'floatingText');
        $( "a:contains('t')" ).first().attr('class', 'floatingText');
        $( "a:contains('s')" ).first().attr('class', 'floatingText');
        $( "a:contains('C')" ).eq(1).attr('class', 'floatingText');
        $( "a:contains('o')" ).eq(1).attr('class', 'floatingText');
        $( "a:contains('n')" ).first().attr('class', 'floatingText');
        $( "a:contains('t')" ).eq(1).attr('class', 'floatingText');
        $( "a:contains('a')" ).first().attr('class', 'floatingText');
        $( "a:contains('c')" ).eq(2).attr('class', 'floatingText');
        $( "a:contains('t')" ).eq(2).attr('class', 'floatingText');

        setTimeout(
            function() {
                $( ".swing" ).remove();
            },
            15000);
    });
});