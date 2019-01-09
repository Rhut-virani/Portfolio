    
    // declaring variables
    var 
    devicenumber = $(window).innerWidth() + $(window).innerHeight(),    
    allActiveTimelines = [],
    lt12,
    $contentActive;
    $home = $('.home'),
    $heading = $('.heading'),
    $slide = $('.pi-div')
    $activeSection = $('.active'),
    $container = $('.container'),
    $indi = $('.indication'),
    $indicator1 = $('.indicator1'),
    $indicator2 = $('.indicator2'),
    $indicator3 = $('.indicator3'),
    $ptLeft = $('.p-t-Left'),
    $ptRight = $('.p-t-Right');
    $allContent = $('#leftSectionContainer, .projectTransitionHelper, #rightSectionContainer, .contactTransitionHelper, #topSectionContainer, .skillsTransitionHelper, #bottomSectionContainer, .aboutTransitionHelper, .projectPageContainer, .contactPageContainer, .aboutPageContainer, .skillsPageContainer');
    $allcontainer= $('.projectContainer, .contactContainer, .skillsContainer, .aboutContainer')
    // better = (screen.width>screen.height) ? screen.width : screen.height;
    better = 600;


    // lets do the preparation before the any page animation starts 
    function first(){
        $('body').hide();
        TweenLite.set('.resizing', {autoAlpha:1})
        TweenLite.set($allcontainer, {pointerEvents:'none'});
        TweenLite.set('.brand-container', {autoAlpha:0});
        TweenLite.set($home.not($activeSection), {autoAlpha:0});
        TweenLite.set($slide.not($activeSection), {autoAlpha:0});
        TweenLite.set($('.indication.active'), {color:'#ffd000'});
        TweenLite.set('.html5, .html5body, .bs1, .bs2, .bs3', {autoAlpha:0, color:'#ffd000', margin: '0.5%'});
        TweenLite.set('.sun', {autoAlpha:0});
        TweenLite.set('.pageIndicator > div', {autoAlpha:0, xPercent: -10});
        TweenLite.set('.projectPageContainer', {autoAlpha:0, yPercent: -2});

        var svgContainer = $("#logo-svg");
        var svgUrl = "./assets/logo/logo-bw.svg";
        var svg = svgContainer.load(svgUrl);
    }

    //running the first function to set all specific variable to their desired state.
    first();


    
$(document).ready(function() {



        var svg2 = $('.resizingHelper').load("./assets/logo/logo-bw-l.svg");
        var resizepage = new TimelineMax({paused:true});

        function loading(){
            var whattoshow,
                whatnottoshow,
                isyoyo,
                rtimes,
                tweentoadd;

            if(window.orientation === 90 && $(window).width() < 900){
                whattoshow = '.landscapeOnly';
                whatnottoshow = '.allrest';
                rtimes = -1;
                isyoyo = true;
                tweentoadd = TweenLite.to('.resizing',0.25, {autoAlpha:1});
            }
            else{
                whattoshow = '.allrest';
                whatnottoshow = '.landscapeOnly';
                rtimes = 0;
                isyoyo = false;
                tweentoadd = TweenLite.to('.resizing',0.25, {autoAlpha:0}, "-=4");
            }
            // resizepage.pause(0);
            resizepage.progress(0).invalidate();
            resizepage.clear();
            resizepage.kill();
            console.log(resizepage);
            resizepage = new TimelineMax({paused:true})
                .repeat(rtimes)
                .yoyo(isyoyo)
                .set(whatnottoshow, {autoAlpha:0})
                .to(whattoshow, 0.25,{autoAlpha:1})
                .fromTo('#l-back-R',  4 , {strokeDashoffset: -1000}, {strokeDashoffset: 0, ease: Power2.easeOut})
                .fromTo('#l-front-R', 4 , {strokeDashoffset: -1000}, {strokeDashoffset: 0, ease: Power2.easeOut}, "-=4")
                .fromTo('#l-front-D', 2 , {strokeDashoffset: -1000}, {strokeDashoffset: 0}, '-=2')
                .add(tweentoadd);


            resizepage.play().timeScale(1);
        }

        setTimeout(() => {
            $('body').show();
            loading();            
        }, 1);
    
        $( window ).resize(function() {
                loading();
                setTimeout(() => {
                    if(($(window).width() + $(window).height()) !== devicenumber){
                        window.location.reload()
                    }
                }, 1);
        });   
















    for (var i = 1; i <= better; i++) {
        $('.mainpage').append('<a class="floatingText">' + String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33) + '</a>');
    } 

    swing = () =>{
        var st = new TimelineMax({ onComplete: removeClass})
            .to('.buttonContainer', 0.5, {className:'+=swing',autoAlpha:0})
            .staggerTo('.swing', 0.005, {autoAlpha:0, ease: Power2.easeOut,}, 0.005, 0)
            .staggerTo('.floatingmainText', 0.01, {color:'#ffd000'}, 0.01 ,0)
            .to('.gotoLeft', 0.5, {x:'-500', autoAlpha:0}, '-=1.5')
            .to('.gotoRight',0.5, {x: '500', autoAlpha:0}, '-=1.5')
            .to('.gotoup',   0.5, {y:'-500', autoAlpha:0}, '-=1.5')
            .to('.gotodown', 0.5, {y: '500', autoAlpha:0}, '-=1.5')
            .staggerFrom('.project > span' ,0.5, {yPercent: '100', ease: Back.easeOut.config(1.7), opacity:0, rotation:'270deg'} ,0.1, '-=0.5')
            .staggerFrom('.contact > span' ,0.5, {yPercent: '100', ease: Back.easeOut.config(1.7), opacity:0, rotation:'270deg'} ,0.1, '-=0.5')
            .staggerFrom('.skills > span'  ,0.5, {yPercent:'-100', ease: Back.easeOut.config(1.7), opacity:0, rotation:'270deg'} ,0.1, '-=0.5')
            .staggerFrom('.about > span'   ,0.5, {yPercent: '100', ease: Back.easeOut.config(1.7), opacity:0, rotation:'270deg'} ,0.1, '-=0.5')
            .set('.brand-container', {autoAlpha:1})
            .set($allcontainer, {pointerEvents:'all'});

        st.play().timeScale(1);
        }
    
    function removeClass() {
        $( ".swing" ).remove();
        $(".projectContainer > div > span ").attr('class','widerText');
        $(".contactContainer > div > span ").attr('class','widerText');
        $(".skillsContainer > div > span ").attr('class','widerText2');
        $(".aboutContainer > div > span ").attr('class','widerText2');
        $('.project, .contact, .skills, .about').attr('class', ' ');
        $( ".floatingmainText" ).remove();

        var lt12 = new TimelineMax({paused:true, onComplete:bannerAnimation})
        .to('#back-R',  5 , {strokeDashoffset: 0, ease: Power2.easeOut})
        .to('#front-R', 5 , {strokeDashoffset: 0, ease: Power2.easeOut}, 0)
        .to('#front-D', 2 , {strokeDashoffset: 0}, '-=2')
        .to('.logo-png', 2 , {opacity:1})
        .to('path', 0.25, {scale:0.99}, '-=1')
        .to('.main-logo-pr', 1, {opacity:1}, '-=1')


        lt12.play().timeScale(1);
    }


    function bannerAnimation (){
        var bt = new TimelineMax({onComplete:bannerInfinite})
        .to('.mainpage-text1', 3, {text: {value:'Hey,'}})
        .fromTo('.mainpage-text1', 0.5, {borderRightColor: "#ffd00020"}, {borderRightColor: "#ffd000",repeat:5,ease:  SteppedEase.config(37)}, '-=3')
        .set('.mainpage-text1', {borderRight: 'none'}) 
        .to('.mainpage-text2', 5, {text: {value:'I am Rhut Virani,'}})          
        .fromTo('.mainpage-text2', 0.5, {borderRightColor: "#ffd00020"}, {borderRightColor: "#ffd000",repeat:10,ease:  SteppedEase.config(37)}, '-=5')
        .set('.mainpage-text2', {borderRight: 'none'});
    }

    function bannerInfinite(){
        var btInfinite = new TimelineMax({repeat:-1})
        .to('.mainpage-text3', 5, {text: {value:'Full Stack Web Developer'}})
        .to('.mainpage-text3', 1, {text: {value:' '}})
        .to('.mainpage-text3', 5, {text: {value:'Based In Toronto'}})
        .to('.mainpage-text3', 1, {text: {value:' '}})
        .to('.mainpage-text3', 5, {text: {value:'Former Public Health Dentist'}})
        .to('.mainpage-text3', 1, {text: {value:' '}})
        .to('.mainpage-text3', 3, {text: {value:'Always a Coder'}})
        .to('.mainpage-text3', 1, {text: {value:' '}})
        .fromTo('.mainpage-text3', 0.5, {borderRightColor: "#ffd00020"}, {borderRightColor: "#ffd000",repeat:50, ease:  SteppedEase.config(37)}, 0);
    }


    // website launch button and aniimation function 
    // selecting text with specific letter and giving it a specific class so they can be animated afterwards
    var btn = new TimelineMax({paused:true})
        .fromTo('.buttonAnimationHelper', 0.5, {y:'-110%', autoAlpha:1},{yPercent:0,  autoAlpha:1, ease: Power4.easeOut})

    $(".buttonContainer").mouseenter( function() {
        btn.play();
    })
    $(".buttonContainer").mouseleave( function() {
        btn.reverse(0);
    })

    $(".buttonContainer").on('click', function() {

        // $(this).attr('class', 'correctWebsite2 swing')
        $('a.floatingText').attr('class', 'floatingText swing');
        $( "a:contains('P')" ).first().attr('class', 'floatingText floatingmainText gotoLeft');
        $( "a:contains('r')" ).first().attr('class', 'floatingText floatingmainText gotoLeft');
        $( "a:contains('o')" ).first().attr('class', 'floatingText floatingmainText gotoLeft');
        $( "a:contains('j')" ).first().attr('class', 'floatingText floatingmainText gotoLeft');
        $( "a:contains('e')" ).first().attr('class', 'floatingText floatingmainText gotoLeft');
        $( "a:contains('c')" ).first().attr('class', 'floatingText floatingmainText gotoLeft');
        $( "a:contains('t')" ).first().attr('class', 'floatingText floatingmainText gotoLeft');
        $( "a:contains('s')" ).first().attr('class', 'floatingText floatingmainText gotoLeft');
        $( "a:contains('C')" ).eq(1).attr('class',   'floatingText floatingmainText gotoRight');
        $( "a:contains('o')" ).eq(1).attr('class',   'floatingText floatingmainText gotoRight');
        $( "a:contains('n')" ).first().attr('class', 'floatingText floatingmainText gotoRight');
        $( "a:contains('t')" ).eq(1).attr('class',   'floatingText floatingmainText gotoRight');
        $( "a:contains('a')" ).first().attr('class', 'floatingText floatingmainText gotoRight');
        $( "a:contains('c')" ).eq(2).attr('class',   'floatingText floatingmainText gotoRight');
        $( "a:contains('t')" ).eq(2).attr('class',   'floatingText floatingmainText gotoRight');
        $( "a:contains('a')" ).eq(1).attr('class',   'floatingText floatingmainText gotodown');
        $( "a:contains('b')" ).eq(1).attr('class',   'floatingText floatingmainText gotodown');
        $( "a:contains('o')" ).eq(2).attr('class',   'floatingText floatingmainText gotodown');
        $( "a:contains('u')" ).first().attr('class', 'floatingText floatingmainText gotodown');
        $( "a:contains('t')" ).eq(3).attr('class',   'floatingText floatingmainText gotodown');
        $( "a:contains('s')" ).eq(1).attr('class',   'floatingText floatingmainText gotoup');
        $( "a:contains('k')" ).first().attr('class', 'floatingText floatingmainText gotoup');
        $( "a:contains('i')" ).first().attr('class', 'floatingText floatingmainText gotoup');
        $( "a:contains('l')" ).first().attr('class', 'floatingText floatingmainText gotoup');
        $( "a:contains('l')" ).eq(1).attr('class',   'floatingText floatingmainText gotoup');
        $( "a:contains('s')" ).eq(2).attr('class',   'floatingText floatingmainText gotoup');
        $(".waitForClass").attr('class','project');
        $(".waitForClass2").attr('class','contact');
        $(".waitForClass3").attr('class','about');
        $(".waitForClass4").attr('class','skills');
        
        swing();
    });


    $('.logo-wrapper').mousemove(function(e){
        var posX = -((e.clientX/$(window).width())-0.5);
        var posY = -((e.clientY/$(window).height())-0.5);

        TweenMax.to($('.logo-wrapper'),0.7, {xPercent:20*posX, yPercent:20*posY, ease:Power1.easeOut})        
    })
















    
// button and functions for each sections



// <#########################################------PROJECT - LEFT SECTION--------################################################################>
// <#########################################------PROJECT - LEFT SECTION--------################################################################>
// <#########################################------PROJECT - LEFT SECTION--------################################################################>


// project button and left section transition timeline

    var detailsPage = false;
    var currentJ;

    var tp = new TimelineMax({paused:true})
        .set('div.projectContainer', {color:'black', zIndex:203})
        .to('.main-logo-pr',0.25, {opacity:0})
        .fromTo('.projectTransitionHelper', 0.75, {xPercent:'-100%', autoAlpha:1}, {xPercent:'0'})
        .to('div.projectContainer', 0.75, {left:"", right:0}, '-=0.25')
        .fromTo('div#leftSectionContainer', 0.55, {xPercent:'-100%', autoAlpha:1}, {xPercent:'0'})
        .to('div.projectContainer', 0.1, {color:'#ffd000'})
        .to('.main-logo-pr',0.25, {opacity:1})
        .staggerTo('.pageIndicator > div', 0.25 , {autoAlpha:1, xPercent: 0}, 0.1 )
        .to('.projectPageContainer', 1, {autoAlpha:1, yPercent:0})
        .to('div.projectContainer',0.50, {boxShadow: '-5px 0px 25px -15px #ffd000'});


    $('div.projectContainer').click(function(){
        var t1 = new TimelineMax();
        $("div#leftSectionContainer").toggleClass("gotoright");
        if($("div#leftSectionContainer").hasClass("gotoright")){
            tp.play().timeScale(1);
        }
        else{
            tp.reverse(0).timeScale(2);
            // backclick(currentJ);
        }

    })

    // scroll function that handles the scrolling animation between projects

    function scroll(sectionIn, sectionfade, indicatorIn, indicatorfade, headingfade, headingIn){
        var tl = new TimelineMax ({paused:true})
            .to($ptLeft,         0.5,  {ease: Power4.easeOut , xPercent:'51%'})
            .to(indicatorfade,   0.10, {className: '-=active', color:'#f4f4f4', scale:1})
            .to(indicatorIn,     0.10, {className: '+=active', color:'#ffd000', scale:1.2}, '-=0.25')
            .to($ptRight,        0.5,  {ease: Power4.easeOut, xPercent:'-51%'})
            .fromTo(headingfade, 0.25, {autoAlpha:1}, {className: '-=active',autoAlpha:0})
            .set(sectionfade,          {className: '-=active', autoAlpha:0})
            .set(sectionIn,            {className: '+=active',autoAlpha:1})
            .to($ptRight,        0.75, {ease: Power4.easeIn, xPercent:'51%'})
            .to($ptLeft,         0.75, {ease: Power4.easeIn, xPercent:'-51%'}, '-=0.75')
            .fromTo(headingIn,   0.25, {autoAlpha:0}, {className: '+=active',autoAlpha:1});
        tl.play();
    }

    //function that listens on mousewheel triggers and bounces extra scrolls within 200ms
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
                headingIn = $(sectionIn).children().children('.heading'),
                headingfade = $('.heading.active'),
                indicatorIn= $('.indication.active').next($indi).length === 0 ? $('.indication.active').prevAll($indi).last() : $('.indication.active').next($indi),
                indicatorfade= $('.indication.active');
            scroll(sectionIn, sectionfade, indicatorIn, indicatorfade, headingfade, headingIn);
        }

    // scroll up if the deltaY value is negative
        else if(e.originalEvent.deltaY < 0 ){
            var sectionIn = $('.home.active').prev($home).length === 0 ? $('.home.active').nextAll($home).last() : $('.home.active').prev($home),
                sectionfade =$('.home.active'),
                headingIn = $(sectionIn).children().children('.heading'),
                headingfade = $('.heading.active'),
                indicatorIn= $('.indication.active').prev($indi).length === 0 ? $('.indication.active').nextAll($indi).last() : $('.indication.active').prev($indi),
                indicatorfade= $('.indication.active');
            scroll(sectionIn, sectionfade, indicatorIn, indicatorfade, headingfade, headingIn);
        } 
    }

    var clickIndi = function (i){ 
        return function(){
        var sectionIn = $('.home.section' + i),
            sectionfade =$('.home.active'),
            headingIn = $(sectionIn).children().children('.heading'),
            headingfade = $('.heading.active'),
            indicatorIn= $(this),
            indicatorfade= $('.indication.active');
        scroll(sectionIn, sectionfade, indicatorIn, indicatorfade, headingfade, headingIn);
    }}
    for(let i=1; i<5;i+=1){
        $('.indicator'+ i).click(clickIndi(i));
    }



    // Project Detail function thats reveals details of each project and disables the scrolling while user is inside the details page
    var dl = new TimelineMax({paused:true});

    detail = (thumbImg, projectImg, detailsH1, textContent, detailsPage, heading, exlinks, imgtext1, imgtext2) => {
        dl.progress(0).clear();//get rid of tween in previous version of timeline
        dl.invalidate();
        dl.kill();
        dl  .to($indi, 0.25, {xPercent:'-100%', autoAlpha:0})
            .to(heading, 0.25, {autoAlpha:0})
            .fromTo(thumbImg, 0.1,   {autoAlpha:1}, {ease: Back.easeOut.config(1.7), autoAlpha:0})
            .fromTo(detailsH1, 0.25,   {yPercent:'-10%', autoAlpha:0},{yPercent:'0', autoAlpha:1})
            .fromTo(projectImg, 0.25,  {autoAlpha:0}, {ease: Back.easeIn.config(1.7), autoAlpha:1}, '-=0.25')
            .fromTo(exlinks, 0.25, {autoAlpha:0},{autoAlpha:1}, '-=0.25')
            .fromTo(imgtext1, 0.25, {yPercent:'-10', autoAlpha:0},{yPercent:0, autoAlpha:1}, '-=0.25')
            .fromTo(imgtext2, 0.25, {yPercent:'-10', autoAlpha:0},{yPercent:0, autoAlpha:1}, '-=0.25')
            .fromTo(textContent, 0.25, {autoAlpha:0}, {autoAlpha:1}, '-=0.25')
            .fromTo(backbutton, 0.25, {autoAlpha:0, rotation:90}, {autoAlpha:1, rotation:0}, "#rev")
            .fromTo(projectImg, 0.5,  {xPercent:"1"},{xPercent:'0', ease: Power1.easeOut})
            .fromTo(projectImg, 1,  {xPercent:"1"},  {xPercent:'0', ease: Power1.easeOut})
            .fromTo(projectImg, 1,  {xPercent:"1"},  {xPercent:'0', ease: Power1.easeOut})
            .fromTo(projectImg, 1,  {xPercent:"1"}, {xPercent: '0' , ease: Power1.easeOut})




        return dl
        };
        
    var clickImg = function(j){
        return function(){
            currentJ = j;
            var thumbImg = $('.thumbimg' + j);
                projectImg = $('.projectImg' + j);
                imgtext1 = $('.detail' + j + '> .imgContainer > .pitext > .project-i-text-1 > ');
                imgtext2 = $('.detail' + j + '> .imgContainer > .pitext > .project-i-text-2 > ');
                heading= (j === 1)? $('.heading' + j + ', .fa-vr-cardboard') :$('.heading' + j);
                detailsH1 = $('.detail' + j +'> .titleContainer > .title');
                textContent =  $('.detail' + j +' > .textContent');
                exlinks= $('.ex-links' + j + '> a');
                backbutton =  $('.backbutton' + j);

            
            detail(thumbImg, projectImg, detailsH1, textContent, detailsPage, heading, exlinks, imgtext1, imgtext2).play();
            detailsPage = true;
        }
    };

    var backclick = function(j){
        return function(){
            var thumbImg = $('.thumbimg' + j);
                projectImg = $('.projectImg' + j);
                heading= (j === 1)? $('.heading' + j + ', .fa-vr-cardboard') : $('.heading' + j);
                imgtext1 = $('.detail' + j + '> .imgContainer > .pitext > .project-i-text-1 > div');
                imgtext2 = $('.detail' + j + '> .imgContainer > .pitext > .project-i-text-2 > div');
                detailsH1 = $('.detail' + j +'> .titleContainer > .title')
                textContent =  $('.detail' + j +' > .textContent')
                exlinks= $('.ex-links' + j + '> a');
                backbutton =  $('.backbutton' + j);

            detail(thumbImg, projectImg, detailsH1, textContent, detailsPage, heading, exlinks, imgtext1, imgtext2).reverse("#rev");
            detailsPage = false;

        }
    };    

    for(let j=1; j<5;j+=1){
        $('.thumbimg' + j).click(clickImg(j));
        $('.backbutton'+ j).click(backclick(j));
    }

    var project1text = [[],
                        [['Immersive', 'Environment'],['Vr', 'Experiance'],['Visual', 'Clues'],['Fun ', 'Trivia']],
                        [['2 Player ','Game '],[' ',' '],['Vibrant','Colors'],['Engaging &','Fun'],['Scores &','Timers'],['Simple &','Easy']],
                        [[' ',' '],[' ',' '],[' ',' '],[' ',' ']],
                        [[' ',' '],[' ',' '],[' ',' '],[' ',' ']]];


    function slideshow (nextslide, prevslide, length, j, imgtext1, imgtext2){
        console.log(j , length);
        let text1 = project1text[j][length][0];
        let text2 = project1text[j][length][1];
        console.log(text1, text2, project1text);
        var tni = new TimelineMax({paused:true})
        .to(imgtext1, 0.5,{yPercent:'-100'})
        .to(imgtext2, 0.5,{yPercent:'-100'}, 0)
        .set(imgtext1, {text: text1})
        .set(imgtext2, {text: text2})
        .fromTo(prevslide, 0.5, {xPercent:0},{xPercent:'-120', zIndex:0, ease: Power3.easeInOut})
        .fromTo(nextslide, 0.5, {xPercent:120,zIndex:1, autoAlpha:1},{xPercent:0, className:'+=active', ease: Power3.easeInOut})
        .set(prevslide,{autoAlpha:0, className:'-=active', scale:1} )
        .to(imgtext1, 0.5,{yPercent:0})
        .to(imgtext2, 0.5,{yPercent:0}, '-=0.5');

        tni.play();
    }
    function slideshowbutton(j){
        let nextslide = $('.pi'+ j + '-div.active').next('.pi'+ j + '-div').length === 0 ? $('.pi'+ j + '-div.active').prevAll('.pi'+ j + '-div').last() :  $('.pi'+ j + '-div.active').next('.pi'+ j + '-div')  ;
        let prevslide = $('.pi'+ j + '-div.active');
        let length = $('.pi'+ j + '-div.active').nextAll('.pi'+ j + '-div').length;
        imgtext1 = $('.detail' + j + '> .imgContainer > .pitext > .project-i-text-1 > div');
        imgtext2 = $('.detail' + j + '> .imgContainer > .pitext > .project-i-text-2 > div');
        slideshow(nextslide, prevslide, length, j, imgtext1, imgtext2);
    }

    for(let j=1; j<5;j+=1){    
    $('.pi' + j + '-div').click(function(){
        slideshowbutton(j)
    });
    };

    $('.projectImg').mousemove(function(e){
        var posX = (e.clientX/$(window).width())-0.5;
        var posY = (e.clientY/$(window).height())-0.5;

        TweenMax.to($('.projectImg'),0.5, {rotationY:5*posX, rotationX:5*posY, ease:Power1.easeOut, transformPerspective: 900, transformOrigin:'center'})        
    })











// <#####################################################------CONTACT - RIGHT SECTION--------##################################################################>
// <#####################################################------CONTACT - RIGHT SECTION--------##################################################################>
// <#####################################################------CONTACT - RIGHT SECTION--------##################################################################>




    // contact button and right section 

    var tc = new TimelineMax({
        paused:true,
        onComplete: contactText, 
        onCompleteParams:[false], 
        onReverseComplete: contactText,
        onReverseCompleteParams:[true]
    })
        // .set()
        .to('div.contactContainer', 0.1, {color:'black', zIndex:203})
        .fromTo('.contactTransitionHelper', 0.75, {xPercent:'101', autoAlpha:1}, {xPercent:'0'})
        .fromTo('div.contactContainer', 0.55,{left:function(){return ''}, right:0}, {left:function(){return 0}, right:''})
        .fromTo('div#rightSectionContainer', 0.75, {xPercent:'100', autoAlpha:1}, {xPercent:'0'})
        .to('div.contactContainer', 0.1, {color:'#ffd000'},"-=0.25")
        .to('.main-logo-co',0.25, {opacity:1})
        // .fromto('.contactPageContainer', 1 , {borderRadius:'50%', width:'2vw', height:'2vw', top:'50vh', left:'50vw'})
        .fromTo('.contactPageContainer', 1 , {autoAlpha:0}, {autoAlpha:1});


    $('div.contactContainer').click(function(){
        $("div#rightSectionContainer").toggleClass("gotoleft");
        if($("div#rightSectionContainer").hasClass("gotoleft")){
            tc.play();
        }
        else{
            tc.reverse().timeScale(2);
        }
    })

    var tcp = new TimelineMax({paused:true})
        .fromTo('.greetings', 1, {autoAlpha:0, yPercent:'-10'}, {autoAlpha:1, yPercent:'0'})
        .fromTo('.email', 1, {autoAlpha:0, yPercent:'-10'}, {autoAlpha:1, yPercent:'0'})
        .fromTo('.links', 1, {autoAlpha:0, yPercent:'-10'}, {autoAlpha:1, yPercent:'0'})


        function contactText (isreversed) {
         /// if any of the skills have class active meaning they are running so value will be true
        
         if(isreversed){
           tcp.reverse(0).timeScale(2);
         }
         else{
           tcp.play();
         }
    }













// <#########################################------SKILLS - TOP SECTION--------################################################################>
// <#########################################------SKILLS - TOP SECTION--------################################################################>
// <#########################################------SKILLS - TOP SECTION--------################################################################>






    // Skills button and top section transition which also calls the oncomplete skillstext function 
    
    var randomText = " ",
        r = 0,
        numberofR;
        if($(window).width() < 600 ){
            numberofR = 10
        }
        else{
            numberofR = 20
        }
        while(r< numberofR){
            randomText += "X O X O X O X O X O";
            r++;
        }

    var currentTime = moment().format('hh:mm:ss a');;
    setInterval(() => {
        currentTime = moment().format('hh:mm:ss a');
      }, 1000)
    var currentMonth= moment().format('MMMM');
    var currentDay= moment().format('dddd');
    var currentDate= moment().format('Do');
    var currentYear= moment().format('YYYY');

    var timeZone= moment().format('Z');
    var wishes;
    var wishanimation;

    if (moment().format('k') >= 12 && moment().format('k') < 17 ){
        wishes= 'Good AfterNoon';
        wishanimation= '.sunaf';
    }
    else if (moment().format('k') >= 5 && moment().format('k') < 12 ){
        wishes= 'Good Morning';
        wishanimation= '.sunrise';
    }
    else{
        wishes= 'Good Evening';
        wishanimation= '.moon';
    }


    var isSkillRunning;
    var skillRunning;
    
    var ts = new TimelineMax({
            paused:true, 
            onComplete: skillsText, 
            onCompleteParams:[false], 
            onReverseComplete: skillsText,
            onReverseCompleteParams:[true]})
        .to('div.skillsContainer', 0.1, {color:'black', zIndex:203})
        .fromTo('.skillsTransitionHelper', 0.75, {yPercent:'-100', autoAlpha:1}, {yPercent:'0'})
        .to('div.skillsContainer', 0.55, {bottom:0, top:''})
        .fromTo('div#topSectionContainer', 0.75, {yPercent:'-100', autoAlpha:1}, {yPercent:'0'})
        .to('div.skillsContainer', 0.1, {color:'#ffd000'},"-=0.25")
        .to('.main-logo-sk',0.25, {opacity:1})
        .fromTo('.skillsContent', 0.5, {y:'10%', autoAlpha:0}, {y:'0%', autoAlpha:1})
        .staggerFromTo('.allskills', 0.5,{sclae:0, autoAlpha:0, y:'-50%'}, {scale: 1, autoAlpha:1,y:"0%", ease: Back.easeOut.config(2)}, 0.1, '-=0.5')
        .fromTo('.allskills', 0.2,{boxShadow:'none'}, {boxShadow: '0 5px 14px #1f1f1f, 0 2px 9px #eaeaea', ease: Power2.easeOut});


    // animation as soon as the skills page loads
    // text content and the skill displaying globes
    var tsp = new TimelineMax({paused:true})
        .staggerFromTo('.skillName1', 0.5, {yPercent:'-40', autoAlpha:0},{yPercent:'0', autoAlpha:1}, 0.05)
        .staggerTo('.skillName1', 0.5, {yPercent:'40', autoAlpha:0}, 0.05)
        .staggerFromTo('.skillName2', 0.5, {yPercent:'-40', autoAlpha:0},{yPercent:'0', autoAlpha:1}, 0.05)
        .staggerTo('.skillName2', 0.5, {yPercent:'40', autoAlpha:0}, 0.05)
        .staggerFromTo('.skillName3', 0.5, {yPercent:'-40', autoAlpha:0},{yPercent:'0', autoAlpha:1}, 0.05)
        .staggerTo('.skillName3', 0.5, {yPercent:'40', autoAlpha:0}, 0.05)
        .staggerFromTo('.skillName4', 0.5, {yPercent:'-40', autoAlpha:0},{yPercent:'0', autoAlpha:1}, 0.05);

    function skillsText(isreversed){

        /// if any of the skills have class active meaning they are running so value will be true
        isSkillRunning = ($('.allskills').hasClass('active')) ? true : false; 
        
        if(isreversed){
          tsp.reverse(0);

            // checking if any skills globes are open or not , if open reverse them as well
          if(isSkillRunning){ 
            skillRunning.reverse(0.9);

            // removing '.active' so that if anytime the skill is not open and user goes back reverse doesnt run unnecessarily, as revere is dependant                                        //  on the presence of active 
            $('.allskills').removeClass('active'); 
          }
        }
        else{
          tsp.play();
        }
    }
    
    $('div.skillsContainer').click(function(){
        $("div#topSectionContainer").toggleClass("godown");

        if($("div#topSectionContainer").hasClass("godown")){
            ts.play();
        }
        else{
            ts.reverse().timeScale(2);
        }
    })
    var scrollDiv =  $('.allSkillsContainer');
    var clientWidth;
    var clientWidth1 = $(window).width();
    var nophone = scrollDiv.innerWidth();
    var phone = scrollDiv.width();
    var scrollWidth = scrollDiv.get(0).scrollWidth;
    if(window.orientation === 0 && $(window).width() < 600){
        clientWidth = phone
    }
    else{
        clientWidth = nophone;
    }
    console.log(clientWidth);
    console.log(clientWidth1);
    $('.leftarrow').click(function(){
        leftPos = scrollDiv.scrollLeft();
        // $('.allSkillsContainer').animate( { scrollLeft:  ('-=' + clientWidth)}, 500);
        $('.allSkillsContainer').animate( { scrollLeft:  ('-=' + clientWidth)}, 400);
        console.log('left arrow clicked');
    })

    $('.rightarrow').click(function(){
        leftPos = scrollDiv.scrollLeft();
        // $('.allSkillsContainer').animate( { scrollLeft: '+=' + clientWidth}, 500);
        $('.allSkillsContainer').animate( { scrollLeft: '+=' + clientWidth}, 400);
        console.log('right arrow clicked');
    })

    // Skills names animation 

    // HTML5 skill
    var s1 = new TimelineMax({paused:true})
        .fromTo('.skills1', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.1, zIndex: 100,})
        .fromTo($('.allskills').not('.skills1'), 0.1,{filter:'blur(0rem)'}, {filter:'blur(0.3rem)'}, '-=0.25' )
        .fromTo('.nonhtml5', 0.5, {margin:'-5% 0% 0% 0%'}, {margin:'0 0 0 10%'})
        .fromTo('.html5body', 0.5, {xPercent:-100},{autoAlpha:1, xPercent:0}, '-=0.25')
        .fromTo('.html5', 0.5, {xPercent:-100},{autoAlpha:1, xPercent:0, marginLeft: '5%'}, '-=0.25')

    $('.skills1').click(function(){
    $('.skills1').toggleClass('active');
        if($('.skills1').hasClass('active')){
        s1.play();
        skillRunning = s1;
        }
        else{
        s1.reverse().timeScale(2);
        }
    });

    // CSS3 skills
    var s2 = new TimelineMax({paused:true})
        .fromTo('.skills2', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.1, zIndex: 100,})
        .fromTo($('.allskills').not('.skills2'), 0.1,{filter:'blur(0rem)'}, {filter:'blur(0.3rem)'}, '-=0.25' )
        .fromTo('.cssh2', 0.25, {letterSpacing: 'auto', fontWeight:'200', color:'#f4f4f4',}, {letterSpacing: '1rem', fontWeight:'900',                       color:'EF476F'})
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
            skillRunning = s2;
        }
        else{
            s2.reverse().timeScale(2);
        }
    });
    

    // --------------------JS Skill--------------------------------
    //-------------------------------------------------------------
    var s3 = new TimelineMax({paused:true});
    function getNewTimeline(){
        s3.progress(0).clear();//get rid of tween in previous version of timeline
    
        s3
        .fromTo('.skills3', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.1, zIndex: 100,})
        .fromTo($('.allskills').not('.skills3'), 0.1,{filter:'blur(0rem)'}, {filter:'blur(0.3rem)'}, '-=0.25')
        .to('.css1, .css2, .css3, .css4', 3, {text:{value: randomText, oldClass:"css1", newClass:"js1"}, ease: Power1.easeIn},'#line1')
        .to('.css4js', 1.5, {text: {value : ' ' + wishes + ' ', newClass:'jsbig'}, ease: Power1.easeOut}, '#line2')
        .to('.css4js', 0.5, {text: '', ease: Power1.easeOut})
        .to(wishanimation, 1.5, {autoAlpha:1}, '-=0.5')
        .to(wishanimation, 1.5, {autoAlpha:0})
        .to('.css4js', 1.5, {text: {value : "  The Time is  " + currentTime + " " ,oldClass:'css4j', newClass:'jsbig'}, ease: Power1.easeOut}, '#line3')
        .to('.css4js', 1.5, {text: {value : "  Its   " + currentDay + "  " , newClass:'jsbig'}, ease: Power1.easeIn}, '#line4')
        .to('.css4js', 1.5, {text: {value : "  The   " + currentDate + " " , newClass:'jsbig'}, ease: Power1.easeIn})
        .to('.css4js', 1.5, {text: {value : " of " + currentMonth + "  " , newClass:'jsbig'}, ease: Power1.easeIn})
        .to('.css4js', 1.5, {text: {value : "    " + currentYear + "  " , newClass:'jsbig'}, ease: Power1.easeIn})
        .to('.css4js', 1.5, {text: '', ease: Power1.easeIn});
        return s3;
      }
        
    $('.skills3').click(function(){
        $('.skills3').toggleClass('active');
        if($('.skills3').hasClass('active')){
            s3 = getNewTimeline().play().timeScale(1);
            skillRunning = s3;
        }
        else{
            s3.reverse('#line2').timeScale(2); //------------ starts in reverse at #line2 at 2x speed
        }

    });

    var s4 = new TimelineMax({paused:true});
        s4.progress(0).clear();  // --------get rid of tween in previous version of timeline
        s4
        .fromTo('.skills4', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.1, zIndex: 100,})
        .fromTo($('.allskills').not('.skills4'), 0.1,{filter:'blur(0rem)'}, {filter:'blur(0.3rem)'}, '-=0.25')
        .to('.cssh2', 3, {text:{value: ' import  <span class="reacth1">  React, { Component }  </span>  from  <span class="reacth1">  "react" </span>; </br>  import  <span                                      class="reacth1">  SkillsContent  </span> from <span class="reacth1">"  ./SkillsContent  " </span>; '}, 
                                        ease: Power1.easeOut})
        .to('.css1, .css2, .css3, .css4', 1, {text: '   </br>', ease: Power1.easeIn}, '-=1')
        .to('.css1', 1, {text:{value: ' render() { </br> </br>  return ( </br> <span class="react2"> < div className = "skillsContentGrid" > </span> </br> '},  
                                ease: Power1.easeIn})
        .to('.css4js', 1.5, {text:{value: '<span class="react3"> < <b>SkillsContent</b> content = { this.state.currentContent } /> </span>', 
                                             oldClass:"css4js",
                                             newClass:"react1"},
                                             ease: Power1.easeIn})
        .to('.css2', 0.5, {text:{value: ' <span class="react2"> </br> < / div > </span> </br>'}, ease: Power1.easeIn})
        .to('.css3', 0.5, {text:{value: ' <span class="react2"> )  </span> </br>'}, ease: Power1.easeIn})
        .to('.css4', 0.5, {text:{value: ' } </br>'}, ease: Power1.easeIn})

        
    $('.skills4').click(function(){
        $('.skills4').toggleClass('active');
        if($('.skills4').hasClass('active')){
            s4.play().timeScale(1);
            skillRunning = s4;
        }
        else{
            s4.reverse(0).timeScale(1.5); // starts in reverse at 1.5x speed
        }

    });

    var s5 = new TimelineMax({paused:true});
    s5.progress(0).clear();//get rid of tween in previous version of timeline
    s5
    .fromTo('.skills5', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.1, zIndex: 100,})
    .fromTo($('.allskills').not('.skills5'), 0.1,{filter:'blur(0rem)'}, {filter:'blur(0.3rem)'}, '-=0.25')
    .to('.cssh2', 1, {text: 'nodeExample.js', ease: Power1.easeOut})
    .to('.css1, .css2, .css3, .css4', 0.25, {autoAlpha:0, ease: Power1.easeIn})
    .to('.css1, .css2, .css3, .css4', 0.1, {text:{value: ' '}, ease: Power1.easeIn}, "#line1")
    .to('.css4n', 2, {text:{value: ' npm init'}, ease: Power1.easeIn})
    .to('.css4n', 2, {text:{value: ' npm install lodash --save'}, ease: Power1.easeIn})
    .to('.css4n', 2, {text:{value: ' npm install moment --save '}, ease: Power1.easeIn})
    .to('.css4n', 2, {text:{value: ' console.log(moment().format("hh:mm:ss"))'}, ease: Power1.easeIn})
    .to('.css4n', 2, {text:{value: ' console.log(_.camelCase("why-so-serious")'}, ease: Power1.easeIn})
    .to('.css4n', 2, {text:{value: ' $ node nodeExample.js'}, ease: Power1.easeIn});

    
    $('.skills5').click(function(){
        $('.skills5').toggleClass('active');
        if($('.skills5').hasClass('active')){
            console.log('react is active')
            s5.play().timeScale(1);
            skillRunning = s5;
            setTimeout(() => {
                console.log(currentTime);
                console.log("WhySoSerious");
            }, 7000);
        }
        else{
            s5.reverse('#line1'); // starts in reverse at 1.5x speed
        }

    });

    // BootStrap skill
    var s6 = new TimelineMax({paused:true})
    .fromTo('.skills6', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.1, zIndex: 100,})
    .fromTo($('.allskills').not('.skills6'), 0.1,{filter:'blur(0rem)'}, {filter:'blur(0.3rem)'}, '-=0.25' )
    .fromTo('.nonhtml5', 0.5, {margin:'-5% 0% 0% 0%'}, {margin:'0 0 0 10%'})
    .to('.bs1', 0.1, {text: '<i>< h2 class = "text-center font-weight-bold" ></i>'})
    .to('.bs2', 0.1, {text: '<i>< / h2 ></i>'})
    .to('.bs3', 0.1,{text: '<i>< p class = "border border-warning" ></i>'} )
    .fromTo('.html5body', 0.5, {xPercent:-100},{autoAlpha:1, xPercent:0})
    .fromTo('.html5', 0.5, {xPercent:-100},{autoAlpha:1, xPercent:0, marginLeft: '5%'})
    .to('.cssh2', 0.5, {autoAlpha: 0})
    .to('.cssh2', 0.1, {textAlign:'center', fontWeight: '900'})
    .to('.cssh2', 0.5, {autoAlpha:1})
    .to('.bs4', 0.5 , {border: '1px solid #ffd000'});



    $('.skills6').click(function(){
    $('.skills6').toggleClass('active');
        if($('.skills6').hasClass('active')){
        s6.play().timeScale(1);
        skillRunning = s6;
        }
        else{
        s6.reverse().timeScale(2);
        }
    });












// <#############################################------ABOUT - BOTTOM SECTION--------################################################################>
// <#############################################------ABOUT - BOTTOM SECTION--------################################################################>
// <#############################################------ABOUT - BOTTOM SECTION--------################################################################>





    // about button and bottom section 
     var scroll_about_span1 = $('.aboutContent > p > span.span1'); 
    var ta = new TimelineMax({
                paused:true,
                onComplete: aboutText, 
                onCompleteParams:[false], 
                onReverseComplete: aboutText,
                onReverseCompleteParams:[true]
            })
        .set(".backgroundWrapper", {backgroundColor:'#0f1214'})
        .to('div.aboutContainer', 0.1, {color:'black', zIndex:203})
        .fromTo('.aboutTransitionHelper', 0.75,  {yPercent:'101', autoAlpha:1}, {yPercent:'0'})
        .fromTo('div.aboutContainer', 0.55, {top: function(){return ''}, bottom: 0},{top:function(){return 0}, bottom:''})
        .fromTo('div#bottomSectionContainer', 0.75, {yPercent:'100', autoAlpha:1}, {yPercent:'0'})
        .to('div.aboutContainer', 0.1, {color:'#ffd000'},"-=0.25")
        .to('.main-logo-ab',0.25, {opacity:1})
        .fromTo('.aboutImg-container > img',  1, {yPercent:'-150'},{yPercent:'0', ease: Power1.easeOut})
        .staggerFromTo('.about-img-text > p', 1, {yPercent:'-200', autoAlpha:0}, {yPercent:'0', autoAlpha:1, ease: Power1.easeOut} , -0.5)
        .to(".backgroundWrapper", 1,{autoAlpha:0})
        .set(".backgroundWrapper", {backgroundColor:'none'});        



    $('div.aboutContainer').click(function(){
        $("div#bottomSectionContainer").toggleClass("goup");
        if($("div#bottomSectionContainer").hasClass("goup")){
            ta.play().timeScale(1);
        }
        else{
            tap.reverse(0.99).timeScale(10);
            ta.reverse().timeScale(2);
        }
    });

    var tap = new TimelineMax({paused:true, repeat:-1})
        
        .staggerFromTo(scroll_about_span1, 1 , {autoAlpha:0, x:'-50%', y:'40%'},  {autoAlpha:1, y:'0%'}, 3,"#span1")
        .staggerTo(scroll_about_span1, 0.5,  {autoAlpha:0, y:'-20%'}, 3, "#span1+=2.8")

        .set(".backgroundWrapper", {backgroundImage:'url(./assets/aboutImages/2.jpg)'})
        .fromTo('.aboutContent > p > span.span2', 1 , {autoAlpha:0, xPercent:'-50%', yPercent:'40'},  {autoAlpha:1, yPercent:'0'})
        .to(".backgroundWrapper", 0.5, {autoAlpha:1}, '-=1')
        .to('.aboutContent > p > span.span2', 0.5,  {autoAlpha:0, yPercent:'-20'}, "+=1")

        .set(".aboutWrapper", {backgroundImage:'url(./assets/aboutImages/3.jpg)'})
        .fromTo('.aboutContent > p > span.span3', 1 , {autoAlpha:0, xPercent:'-50%', yPercent:'40'},  {autoAlpha:1, yPercent:'0'})
        .to(".backgroundWrapper", 0.5, {autoAlpha:0}, '-=1')
        .to('.aboutContent > p > span.span3', 0.5,  {autoAlpha:0, yPercent:'-20'}, "+=1")

        .set(".backgroundWrapper", {backgroundImage:'url(./assets/aboutImages/4.jpg)'})
        .fromTo('.aboutContent > p > span.span4', 1 , {autoAlpha:0, xPercent:'-50%', yPercent:'40'},  {autoAlpha:1, yPercent:'0'})
        .to(".backgroundWrapper", 0.5, {autoAlpha:1}, '-=1')        
        .to('.aboutContent > p > span.span4', 0.5,  {autoAlpha:0, yPercent:'-20'}, "+=1")

        .set(".aboutWrapper", {backgroundImage:'url(./assets/aboutImages/5.jpg)'})
        .fromTo('.aboutContent > p > span.span5', 1 , {autoAlpha:0, xPercent:'-50%', yPercent:'40'},  {autoAlpha:1, yPercent:'0'})
        .to(".backgroundWrapper", 0.5, {autoAlpha:0}, '-=1')
        .to('.aboutContent > p > span.span5', 0.5,  {autoAlpha:0, yPercent:'-20'}, "+=1")

        .set(".backgroundWrapper", {backgroundImage:'url(./assets/aboutImages/6.jpg)'})
        .fromTo('.aboutContent > p > span.span6', 1 , {autoAlpha:0, xPercent:'-50%', yPercent:'40'},  {autoAlpha:1, yPercent:'0'})
        .to(".backgroundWrapper", 0.5, {autoAlpha:1}, '-=1')
        .to('.aboutContent > p > span.span6', 0.5,  {autoAlpha:0, yPercent:'-20'}, "+=1")

        .set(".aboutWrapper", {backgroundImage:'url(./assets/aboutImages/7.jpg)'})        
        .fromTo('.aboutContent > p > span.span7', 1 , {autoAlpha:0, xPercent:'-50%', yPercent:'40'},  {autoAlpha:1, yPercent:'0'})
        .to(".backgroundWrapper", 0.5, {autoAlpha:0}, '-=1')
        .to('.aboutContent > p > span.span7', 0.5,  {autoAlpha:0, yPercent:'-20'}, "+=1")
        
        .set(".aboutWrapper", {backgroundImage:'url(./assets/aboutImages/1.jpg)'})
        .to(".backgroundWrapper", 0.5, {autoAlpha:0})



        
        function aboutText (isreversed) {
                /// if any of the skills have class active meaning they are running so value will be true
         if(isreversed){
           tap.reverse(1).timeScale(2);

         }
         else{
           allActiveTimelines.push(tap);
           tap.play().timeScale(1);
         }
    }
});





