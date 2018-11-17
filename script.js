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



    // declaring variables
    var $home = $('.home'),
        $activeSection = $('.active'),
        $container = $('.container'),
        $indi = $('.indication'),
        $indicator1 = $('.indicator1'),
        $indicator2 = $('.indicator2'),
        $indicator3 = $('.indicator3'),
        $ptLeft = $('.p-t-Left'),
        $ptRight = $('.p-t-Right');

    // lets do the preparation before the animation starts 
    function first(){ 
        TweenLite.set($home.not($activeSection), {autoAlpha:0});
        TweenLite.set($indi.not($activeSection), {autoAlpha:0.5, scale:0.5, x:'-10%'})
    }
    //running the first function
    first();


    var detailsPage = false;
    function scroll(sectionIn, sectionfade, indicatorIn, indicatorfade){
        var tl = new TimelineMax ({paused:true})
            .to(indicatorfade, 0.25, {className: '-=active',opacity:0.5, scale: 0.5, x:'-10%'})
            .to(indicatorIn, 0.25, {className: '+=active', opacity:1, scale: 1, x:'0%'})
            .to($ptLeft,0.75,{ease: Back.easeOut.config(1.7) , xPercent:'51%'})
            .to($ptRight,0.75,{ease: Back.easeOut.config(1.7), xPercent:'-51%'})
            .set(sectionfade,{className: '-=active', autoAlpha:0})
            .set(sectionIn, {className: '+=active',autoAlpha:1})
            .to($ptRight,0.75,{ease: Back.easeIn.config(1.7), xPercent:'51%'})
            .to($ptLeft,0.75,{ease: Back.easeIn.config(1.7), xPercent:'-51%'}, '-=0.75');
        tl.play();
    }

    $(".container").on('wheel', _.debounce(scrolling, 200, {"leading":true,"trailing":false}));

    function scrolling(e) {

            // checking if the previous tween is finished or the detainls page is open or not
            if(scroll.isTweening || detailsPage){
                return;
            }
            // scroll up if the deltaY value is poistive
            if(e.originalEvent.deltaY > 0){
                var sectionIn = $('.home.active').next($home).length === 0 ? $('.home.active').prevAll($home).last() : $('.home.active').next($home),
                    sectionfade =$('.home.active'),
                    indicatorIn= $('.indication.active').next($indi).length === 0 ? $('.indication.active').prevAll($indi).last() : $('.indication.active').next($indi),
                    indicatorfade= $('.indication.active');
                scroll(sectionIn, sectionfade, indicatorIn, indicatorfade);
            }
            else if(e.originalEvent.deltaY < 0 ){
                var sectionIn = $('.home.active').prev($home).length === 0 ? $('.home.active').nextAll($home).last() : $('.home.active').prev($home),
                sectionfade =$('.home.active'),
                indicatorIn= $('.indication.active').prev($indi).length === 0 ? $('.indication.active').nextAll($indi).last() : $('.indication.active').prev($indi),
                indicatorfade= $('.indication.active');
                scroll(sectionIn, sectionfade, indicatorIn, indicatorfade);
            } 
        }
        // var sectionIn = '',
        //     sectionfade = '',
        //     indicatorIn=  '',
        //     indicatorfade= '';
        var clickIndi = function (i){ 
            return function(){
            var sectionIn = $('.home.section' + i),
                sectionfade =$('.home.active'),
                indicatorIn= $(this),
                indicatorfade= $('.indication.active');
            scroll(sectionIn, sectionfade, indicatorIn, indicatorfade);
        }}
        for(let i=1; i<4;i+=1){
            $('.indicator'+ i).click(clickIndi(i));
        }



    
    // Project Detail function
    detail = (thumbImg, projectImg, detailsH1, textContent) => { 
    let detail = new TimelineMax({paused:true})
         .to(thumbImg, 0.5, {scale:0.50,ease: Back.easeOut.config(1.7), xPercent:"-10%", autoAlpha:0})
         .from(projectImg, 0.5, {ease: Back.easeIn.config(1.7),scale:0, autoAlpha:0},0)
         .from(detailsH1, 0.5, {xPercent:'-100%', opacity:0})
         .from(textContent, 0.5, {xPercent:'100%', opacity:0})
         .from(backbutton, 0.25, {left:'-50', rotation:180})
        detail.restart();
    };
    var clickImg = function(j){
        return function(){
            var thumbImg = $('.thumbimg' + j);
                projectImg = $('.pi' + j);
                detailsH1 = $('.detail' + j +'> .imgContainer > h1')
                textContent =  $('.detail' + j +' > .textContent')
                backbutton =  $('.detail' + j +' > .imgContainer > .backbutton' + j);

            detail(thumbImg, projectImg, detailsH1, textContent);
            detailsPage = true;
        }
    };
    lessdetail = (thumbImg, projectImg, detailsH1, textContent) => { 
        let click = new TimelineMax({paused:true})
            .to(backbutton, 0.25, {left:'-50', rotation:180})
            .to(textContent, 0.5, {xPercent:'100%', opacity:0})
            .to(detailsH1, 0.5, {xPercent:'-100%', opacity:0})
            .to(projectImg, 0.5, {ease: Back.easeIn.config(1.7),scale:0, autoAlpha:0})
            .to(thumbImg, 0.5, {scale:1,ease: Back.easeOut.config(1.7), xPercent:"0", autoAlpha:1}, '-=0.25');
        click.restart();
        };
    var backclick = function(j){
        return function(){
            var thumbImg = $('.thumbimg' + j);
                projectImg = $('.pi' + j);
                detailsH1 = $('.detail' + j +'> .imgContainer > h1')
                textContent =  $('.detail' + j +' > .textContent')
                backbutton =  $('.detail' + j +' > .imgContainer > .backbutton' + j);

            lessdetail(thumbImg, projectImg, detailsH1, textContent);
            detailsPage = false;
        }
    };    

    for(let j=1; j<4;j+=1){
        $('.thumbimg' + j).click(clickImg(j));
        $('.backbutton'+ j).click(backclick(j));

    }

});

