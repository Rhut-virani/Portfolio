$(document).ready(function() {
    var better = (screen.width>screen.height) ? screen.width : screen.height;
    for (var i = 1; i <=better; i++) {
        $('.mainpage').append('<a class="floatingText">' + String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33) + '</a>');
    } 
});