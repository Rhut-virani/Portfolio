$(document).ready(function() {
    var better = (screen.width>screen.height) ? screen.width : screen.height;
    for (var i = 1; i <=better; i++) {
        $('.mainpage').append('<a class="floatingText">' + String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33) + '</a>');
    } 
// website launch button and functions
    $(".buttonContainer").on('click', function() {
        $(this).attr('class', 'correctWebsite2 swing')
        $('a.floatingText').attr('class', 'floatingText swing');
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
        setTimeout(
            function() {
                $( ".swing" ).remove();
                $(".projectContainer > div > span ").attr('class','widerText');
                $(".contactContainer > div > span ").attr('class','widerText');
                $(".skillsContainer > div > span ").attr('class','widerText2');
                $(".aboutContainer > div > span ").attr('class','widerText2');
                $('.project, .contact, .skills, .about').attr('class', ' ');
            },
            7000);
        setTimeout(
            function() {
                $( ".floatingmainText" ).remove();
            },
            15000);
    });

    
// button and functions for each sections

    // project button and left section 
    var tp = new TimelineMax({paused:true})
        .to('div.projectContainer', 0.1, {color:'black', zIndex:203})
        .to('.projectTransitionHelper', 1.5, {xPercent:100})
        .to('div.projectContainer', 1, {left:"", right:0})
        .to('div#leftSectionContainer', 1.5, {xPercent:100, opacity:1})
        .to('div.projectContainer', 0.1, {color:'white'}, "-=0.25")

    $('div.projectContainer').click(function(){
        var t1 = new TimelineMax();
        $("div#leftSectionContainer").toggleClass("gotoright");
        if($("div#leftSectionContainer").hasClass("gotoright")){
            tp.play();
        }
        else{
            tp.reverse();
        }
    })

    // contact button and right section 

    var tc = new TimelineMax({paused:true})
        .to('div.contactContainer', 0.1, {color:'black', zIndex:203})
        .to('.contactTransitionHelper', 1.5, {xPercent:-200})
        .to('div.contactContainer', 1, {left:0, right:''})
        .to('div#rightSectionContainer', 1.5, {xPercent:-200, opacity:1})
        .to('div.contactContainer', 0.1, {color:'white'},"-=0.25");

    $('div.contactContainer').click(function(){
        $("div#rightSectionContainer").toggleClass("gotoleft");
        if($("div#rightSectionContainer").hasClass("gotoleft")){
            tc.play();
        }
        else{
            tc.reverse();
        }
    })

    // Skills button and top section 
    var ts = new TimelineMax({paused:true})
        .to('div.skillsContainer', 0.1, {color:'black', zIndex:203})
        .to('.skillsTransitionHelper', 1.5, {yPercent:100})
        .to('div.skillsContainer', 1, {bottom:0, top:''})
        .to('div#topSectionContainer', 1.5, {yPercent:100, opacity:1})
        .to('div.skillsContainer', 0.1, {color:'white'},"-=0.25");

    $('div.skillsContainer').click(function(){
        $("div#topSectionContainer").toggleClass("godown");

        if($("div#topSectionContainer").hasClass("godown")){
            ts.play();
        }
        else{
            ts.reverse();
        }
    })

    // about button and bottom section 
    var ta = new TimelineMax({paused:true})
        .to('div.aboutContainer', 0.1, {color:'black', zIndex:203})
        .to('.aboutTransitionHelper', 1.5, {yPercent:-100})
        .to('div.aboutContainer', 1, {top:0, bottom:''})
        .to('div#bottomSectionContainer', 1.5, {yPercent:-100, opacity:1})
        .to('div.aboutContainer', 0.1, {color:'white'},"-=0.25");

    $('div.aboutContainer').click(function(){
        $("div#bottomSectionContainer").toggleClass("goup");
        if($("div#bottomSectionContainer").hasClass("goup")){
            ta.play();
        }
        else{
            ta.reverse();
        }
    });

    var scrollTo2 = new TimelineMax({paused:true})
        .to('.indicator2', 0.25, {opacity:1, scale: 2})
        .to('.indicator3, .indicator1', 0.25, {opacity:0.5, scale: 1})
        .to('.p-t-Left',0.75,{ease: Back.easeOut.config(1.7) , xPercent:'51%'})
        .to('.p-t-Right',0.75,{ease: Back.easeOut.config(1.7), xPercent:'-51%'})
        .set('.col1, .col3',{autoAlpha:0})
        .set('.col2', {autoAlpha:1}, '#reverse')
        .to('.indicator2', 1, {opacity:1, scale: 2})
        .to('.p-t-Right',0.75,{ease: Back.easeIn.config(1.7), xPercent:'51%'})
        .to('.p-t-Left',0.75,{ease: Back.easeIn.config(1.7), xPercent:'-51%'}, '-=0.75');

    var scrollTo3 = new TimelineMax({paused:true})
        .to('.indicator3', 0.25, {opacity:1, scale: 2})
        .to('.indicator2, .indicator1', 0.25, {opacity:0.5, scale: 1})
        .to('.p-t-Left',0.75,{ease: Back.easeOut.config(1.7) , xPercent:'51%'})
        .to('.p-t-Right',0.75,{ease: Back.easeOut.config(1.7), xPercent:'-51%'})
        .set('.col2, .col1',{autoAlpha:0})
        .set('.col3', {autoAlpha:1}, '#reverse')
        .to('.p-t-Right',0.75,{ease: Back.easeIn.config(1.7), xPercent:'51%'})
        .to('.p-t-Left',0.75,{ease: Back.easeIn.config(1.7), xPercent:'-51%'}, '-=0.75');

    var scrollTo1 = new TimelineMax({paused:true})
        .to('.indicator1', 0.25, {opacity:1, scale: 2})
        .to('.indicator2, .indicator3', 0.25, {opacity:0.5, scale: 1})
        .to('.p-t-Left',0.75,{ease: Back.easeOut.config(1.7) , xPercent:'51%'})
        .to('.p-t-Right',0.75,{ease: Back.easeOut.config(1.7), xPercent:'-51%'})
        .set('.col1', {autoAlpha:1}, '#reverse')
        .set('.col2, .col3',{autoAlpha:0})
        .to('.p-t-Right',0.75,{ease: Back.easeIn.config(1.7), xPercent:'51%'})
        .to('.p-t-Left',0.75,{ease: Back.easeIn.config(1.7), xPercent:'-51%'}, '-=0.75');

    var detailsPage = false;
    
    function scrolling(e) {
        if(scrollTo1.isTweening || scrollTo2.isTweening || scrollTo3.isTweening || detailsPage){
            return;
        }

        if(e.originalEvent.deltaY > 0){
            if($('.col1').css('opacity') == 1){
                scrollTo2.play(0);
                return;
            }
            else if($('.col2').css('opacity') == 1){
                scrollTo3.play(0);
                return;
            }
            else if($('.col3').css('opacity') == 1){   
                scrollTo1.play(0);
                return;
            }
        }
        else if(e.originalEvent.deltaY < 0 ){
            if($('.col1').css('opacity') == 1){
                scrollTo3.play(1);
                return;
            }
            else if($('.col2').css('opacity') == 1){
                scrollTo1.play('#reverse');
                return;
            }
            else if($('.col3').css('opacity') == 1){   
                scrollTo2.play('#reverse');
                return;
            }
        } 
    }

    $(".container").on('wheel', _.debounce(scrolling, 200, {"leading":true,"trailing":false}));
    
    // firstproject
    var project1 = new TimelineMax({paused:true})
         .to('.thumbImg', 0.5, {scale:0.50,ease: Back.easeOut.config(1.7), xPercent:"-10%", autoAlpha:0})
         .from('.firstProjectImg', 0.5, {ease: Back.easeIn.config(1.7),scale:0, autoAlpha:0},0)
         .from('.imgContainer h1', 0.5, {xPercent:'-100%', opacity:0})
         .from('.textContent', 0.5, {xPercent:'100%', opacity:0})
         .from('.backbutton', 0.25, {left:'-50', rotation:180});

    $('.firstProjectContainer > .thumbImg').click(function(){
        project1.play();
        detailsPage = true;
    });
    $('.backbutton').click(function(){
        project1.reverse();
        detailsPage = false;

    })

});

