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
        .fromTo('.projectTransitionHelper', 1.5, {xPercent:'-100%', autoAlpha:1}, {xPercent:'0'})
        .to('div.projectContainer', 1, {left:"", right:0})
        .fromTo('div#leftSectionContainer', 1.5, {xPercent:'-100%', autoAlpha:1}, {xPercent:'0'})
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
        .fromTo('.contactTransitionHelper', 1.5, {xPercent:'100', autoAlpha:1}, {xPercent:'0'})
        .to('div.contactContainer', 1, {left:0, right:''})
        .fromTo('div#rightSectionContainer', 1.5, {xPercent:'100', autoAlpha:1}, {xPercent:'0'})
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
    var ts = new TimelineMax({paused:true, onComplete: skillsText})
        .to('div.skillsContainer', 0.1, {color:'black', zIndex:203})
        .fromTo('.skillsTransitionHelper', 1.5, {yPercent:'-100', autoAlpha:1}, {yPercent:'0'})
        .to('div.skillsContainer', 1, {bottom:0, top:''})
        .fromTo('div#topSectionContainer', 1.5, {yPercent:'-100', autoAlpha:1}, {yPercent:'0'})
        .to('div.skillsContainer', 0.1, {color:'#ffd000'},"-=0.25")
        .from('.skillsContent', 0.5, {y:'10%', autoAlpha:0})
        .staggerFromTo('.allskills', 0.5,{sclae:0, autoAlpha:0, y:'-50%'}, {scale: 1, autoAlpha:1,y:"0%", ease: Back.easeOut.config(2)}, 0.1, '-=0.5')
        .fromTo('.allskills', 0.2,{boxShadow:'none'}, {boxShadow: '0 5px 14px #1f1f1f, 0 2px 9px #eaeaea', ease: Power2.easeOut});

    var tsp = new TimelineMax({paused:true})
        .staggerFromTo('.skillName1', 0.5, {yPercent:'-40', autoAlpha:0},{yPercent:'0', autoAlpha:1}, 0.05)
        .staggerTo('.skillName1', 0.5, {yPercent:'40', autoAlpha:0}, 0.05)
        .staggerFromTo('.skillName2', 0.5, {yPercent:'-40', autoAlpha:0},{yPercent:'0', autoAlpha:1}, 0.05)
        .staggerTo('.skillName2', 0.5, {yPercent:'40', autoAlpha:0}, 0.05)
        .staggerFromTo('.skillName3', 0.5, {yPercent:'-40', autoAlpha:0},{yPercent:'0', autoAlpha:1}, 0.05)
        .staggerTo('.skillName3', 0.5, {yPercent:'40', autoAlpha:0}, 0.05)
        .staggerFromTo('.skillName4', 0.5, {yPercent:'-40', autoAlpha:0},{yPercent:'0', autoAlpha:1}, 0.05);

    function skillsText(){
        tsp.play();
    }

    
    $('div.skillsContainer').click(function(){
        $("div#topSectionContainer").toggleClass("godown");

        if($("div#topSectionContainer").hasClass("godown")){
            ts.play();
        }
        else{
            ts.reverse();
        }
    })


    // Skills names animation 

    // function skillsNHTML(skill){
        var blur = $('.allskills').not('.skills1');
        var s1 = new TimelineMax({paused:true})
            .fromTo('.skills1', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.2, zIndex: 100,})
            .fromTo(blur, 0.1,{filter:'blur(0rem)'}, {filter:'blur(0.3rem)'}, '-=0.25' )
            .fromTo('.nonhtml5', 0.5, {margin:'-5% 0'}, {margin:'0 0 0 10%'})
            .fromTo('.html5', 0.5, {xPercent:-100},{autoAlpha:1, xPercent:0}, '-=0.25');

        $('.skills1').click(function(){
        $('.skills1').toggleClass('active');
            if($('.skills1').hasClass('active')){
            s1.play();
            }
            else{
            s1.reverse();
            }
        });

        var blur2 = $('.allskills').not('.skills2');
        var s2 = new TimelineMax({paused:true})
            .fromTo('.skills2', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.2, zIndex: 100,})
            .fromTo(blur2, 0.1,{filter:'blur(0rem)'}, {filter:'blur(0.3rem)'}, '-=0.25' )
            .fromTo('.cssh2', 0.25, {letterSpacing: 'auto', fontWeight:'200', color:'#f4f4f4',}, {letterSpacing: '1rem', fontWeight:'900', color:'EF476F'})
            .to('.cssh2', 0.25, {color:'#7DDF64'})
            .to('.cssh2', 0.25, {color:'#FF7733'})
            .to('.cssh2', 0.25, {color:'#FFED66'})
            .to('.cssh2', 0.25, {color:'#26FFE6'})
            .fromTo('.css1', 0.25, {fontWeight:'200'},{fontFamily: 'Lato', fontStyle: 'italic', color:'#D6F599'})
            .fromTo('.css2', 0.25,{fontWeight:'200'}, {fontFamily: 'Dancing Script', fontWeight:'900', color:'#0298CC'})
            .fromTo('.css3', 0.25, {fontWeight:'200'}, {textDecorationLine: 'line-through', color:'#5D2E8C'})
            .fromTo('.css4', 0.25, {fontWeight:'200'}, {fontFamily: 'Dancing Script', textDecorationLine: 'underline', fontSize:'2rem', color:'#436436'});

        $('.skills2').click(function(){
            $('.skills2').toggleClass('active');
            if($('.skills2').hasClass('active')){
            s2.play();
            }
            else{
            s2.reverse();
            }
        });
    
    // }
    // var skillsClick= function(j){
    //     return function(){
    //         $('.skills' + j).toggleClass('active');
    //         var skill = $('.skills' + j);
    //         skillsHTML(skill);
    //     }
    // }
    // $('.skills' + j).click(function(){
    //     $('.skills' + j).toggleClass('active');
    // for(let j=1; j<9;j+=1){
    //     $('.skills' + j).click(skillsClick(j));
    // }




    // about button and bottom section 
    var ta = new TimelineMax({paused:true})
        .to('div.aboutContainer', 0.1, {color:'black', zIndex:203})
        .fromTo('.aboutTransitionHelper', 1.5,  {yPercent:'100%', autoAlpha:1}, {yPercent:'0'})
        .to('div.aboutContainer', 1, {top:0, bottom:''})
        .fromTo('div#bottomSectionContainer', 1.5, {yPercent:'100%', autoAlpha:1}, {y:'0'})
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
        $allContent = $('#project, .projectTransitionHelper, #contact, .contactTransitionHelper, #skills, .skillsTransitionHelper, #about, .aboutTransitionHelper');


    // lets do the preparation before the animation starts 
    function first(){ 
        TweenLite.set($home.not($activeSection), {autoAlpha:0});
        TweenLite.set($indi.not($activeSection), {autoAlpha:0.5, scale:0.5, x:'-10%'});
        TweenLite.set($allContent, {autoAlpha:0});
        TweenLite.set('.html5', {autoAlpha:0, color:'#ffd000'});
        TweenLite.set('.nonhtml5', {margin:'-5% 0'});

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

        var clickIndi = function (i){ 
            return function(){
            var sectionIn = $('.home.section' + i),
                sectionfade =$('.home.active'),
                indicatorIn= $(this),
                indicatorfade= $('.indication.active');
            scroll(sectionIn, sectionfade, indicatorIn, indicatorfade);
        }}
        for(let i=1; i<5;i+=1){
            $('.indicator'+ i).click(clickIndi(i));
        }

    // Project Detail function
    detail = (thumbImg, projectImg, detailsH1, textContent, detailsPage) => { 
        var dl = new TimelineMax({paused:true});
            dl
                .fromTo(thumbImg, 0.5, {scale:1,ease: Back.easeOut.config(1.7), xPercent:"0", autoAlpha:1}, {scale:0.50,ease: Back.easeOut.config(1.7), xPercent:"-10%", autoAlpha:0})
                .fromTo(projectImg, 0.5, {ease: Back.easeIn.config(1.7),scale:0, autoAlpha:0}, {ease: Back.easeIn.config(1.7),scale:1, autoAlpha:1},0)
                .fromTo(detailsH1, 0.5, {xPercent:'-100%', opacity:0},{xPercent:'0', opacity:1})
                .fromTo(textContent, 0.5, {xPercent:'100%', opacity:0}, {xPercent:'0', opacity:1})
                .fromTo(backbutton, 0.25, {left:'-50', rotation:180}, {left:'3%', rotation:0});

            if(detailsPage){
                dl.reverse(0);
            }
            else if(!detailsPage){
                dl.restart();
            };
        };

    var clickImg = function(j){
        return function(){
            var thumbImg = $('.thumbimg' + j);
                projectImg = $('.pi' + j);
                detailsH1 = $('.detail' + j +'> .imgContainer > h1')
                textContent =  $('.detail' + j +' > .textContent')
                backbutton =  $('.detail' + j +' > .imgContainer > .backbutton' + j);
            
            detail(thumbImg, projectImg, detailsH1, textContent, detailsPage);
            detailsPage = true;
        }
    };

    var backclick = function(j){
        return function(){
            var thumbImg = $('.thumbimg' + j);
                projectImg = $('.pi' + j);
                detailsH1 = $('.detail' + j +'> .imgContainer > h1')
                textContent =  $('.detail' + j +' > .textContent')
                backbutton =  $('.detail' + j +' > .imgContainer > .backbutton' + j);

            detail(thumbImg, projectImg, detailsH1, textContent, detailsPage);
            detailsPage = false;

        }
    };    

    for(let j=1; j<5;j+=1){
        $('.thumbimg' + j).click(clickImg(j));
        $('.backbutton'+ j).click(backclick(j));
    }


    

});

