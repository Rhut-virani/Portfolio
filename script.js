$(document).ready(function() {
    var better = (screen.width>screen.height) ? screen.width : screen.height;
    for (var i = 1; i <=better; i++) {
        $('.mainpage').append('<a class="floatingText">' + String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33) + '</a>');
    } 


// website launch button and functions
    $(".buttonContainer").on('click', function() {
        $(this).attr('class', 'correctWebsite2 swing')
        $('a.floatingText').attr('class', 'floatingText swing');
        $( "a.floatingText:contains('P')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a.floatingText:contains('r')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a.floatingText:contains('o')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a.floatingText:contains('j')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a.floatingText:contains('e')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a.floatingText:contains('c')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a.floatingText:contains('t')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a.floatingText:contains('s')" ).first().attr('class', 'floatingmainText gotoLeft');
        $( "a.floatingText:contains('C')" ).eq(1).attr('class', 'floatingmainText gotoRight');
        $( "a.floatingText:contains('o')" ).eq(1).attr('class', 'floatingmainText gotoRight');
        $( "a.floatingText:contains('n')" ).first().attr('class', 'floatingmainText gotoRight');
        $( "a.floatingText:contains('t')" ).eq(1).attr('class', 'floatingmainText gotoRight');
        $( "a.floatingText:contains('a')" ).first().attr('class',  'floatingmainText gotoRight');
        $( "a.floatingText:contains('c')" ).eq(2).attr('class', 'floatingmainText gotoRight ');
        $( "a.floatingText:contains('t')" ).eq(2).attr('class', 'floatingmainText gotoRight ');
        $( "a.floatingText:contains('a')" ).eq(1).attr('class',  'floatingmainText gotodown');
        $( "a.floatingText:contains('b')" ).eq(1).attr('class',  'floatingmainText gotodown');
        $( "a.floatingText:contains('o')" ).eq(2).attr('class',  'floatingmainText gotodown');
        $( "a.floatingText:contains('u')" ).first().attr('class',  'floatingmainText gotodown');
        $( "a.floatingText:contains('t')" ).eq(3).attr('class',  'floatingmainText gotodown');
        $( "a.floatingText:contains('s')" ).eq(1).attr('class',  'floatingmainText gotoup');
        $( "a.floatingText:contains('k')" ).first().attr('class',  'floatingmainText gotoup');
        $( "a.floatingText:contains('i')" ).first().attr('class',  'floatingmainText gotoup');
        $( "a.floatingText:contains('l')" ).first().attr('class',  'floatingmainText gotoup');
        $( "a.floatingText:contains('l')" ).eq(1).attr('class',  'floatingmainText gotoup');
        $( "a.floatingText:contains('s')" ).eq(2).attr('class',  'floatingmainText gotoup');

        $(".waitForClass").attr('class','projectNav');
        $(".waitForClass2").attr('class','contactNav');
        $(".waitForClass3").attr('class','aboutNav');
        $(".waitForClass4").attr('class','skillsNav');

        setTimeout(
            function() {
                $( ".swing" ).remove();
                $(".projectContainer > div > span ").attr('class','widerText');
                $(".contactContainer > div > span ").attr('class','widerText');
                $(".skillsContainer > div > span ").attr('class','widerText2');
                $(".aboutContainer > div > span ").attr('class','widerText2');
                $('.projectNav, .contactNav, .skillsNav, .aboutNav').attr('class', ' ');
            },
            7000);
        
        setTimeout(
            function() {
                $( ".floatingmainText" ).remove();
            },
            7000);
    });

    // declaring variables for section transitions

    var section = '',
        prevSection = '',
        $home = $('.home'),
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
        TweenLite.set($indi.not($activeSection), {autoAlpha:0.5, scale:0.5, x:'-10%'})
        TweenLite.set($indi.not($activeSection), {autoAlpha:0.5, scale:0.5, x:'-10%'});;
        TweenLite.set($allContent, {autoAlpha:0});

    }
    
    // running the first function
    first();


    // Navigation using Hashchange values
    function locationHashChanged(e) {
        e.preventDefault();
        prevSection = section;
        section = location.hash.substring(1);
        if(section === 'project' || prevSection === 'project' && section === ""){
            scrollToProject(e);
        }
        else if(section === 'contact' || prevSection === 'contact' && section === ""){
            scrollToContact(e);
        }
        else if(section === 'about' || prevSection === 'about' && section === ""){
            scrollToAbout(e);
        }
        else if(section === 'skills' || prevSection === 'skills' && section === ""){
            scrollToSkills(e);
        }
    };

    window.onhashchange = locationHashChanged;



    // button and functions for each sections





    // project button and left section 
    var tp = new TimelineMax({paused:true})
        .to('div.projectContainer', 0.1, {color:'black', zIndex:203})
        .fromTo('.projectTransitionHelper', 1.5, {xPercent:'-100%', autoAlpha:1}, {xPercent:'0'})
        .to('div.projectContainer', 1, {left:"", right:0})
        .fromTo('div#project', 1.5, {xPercent:'-100%', autoAlpha:1}, {xPercent:'0'})
        .to('div.projectContainer', 0.1, {color:'white'}, "-=0.25");

    // contact button and right section 
    var tc = new TimelineMax({paused:true})
        .to('div.contactContainer', 0.1, {color:'black', zIndex:203})
        .fromTo('.contactTransitionHelper', 1.5, {xPercent:'100%', autoAlpha:1}, {xPercent:'0'})
        .to('div.contactContainer', 1, {left:0, right:''})
        .fromTo('div#contact', 1.5, {xPercent:'100%', autoAlpha:1}, {xPercent:'0'})
        .to('div.contactContainer', 0.1, {color:'white'},"-=0.25");

    // Skills button and top section 
    var ts = new TimelineMax({paused:true})
        .to('div.skillsContainer', 0.1, {color:'black', zIndex:203})
        .fromTo('.skillsTransitionHelper', 1.5, {yPercent:'-100%', autoAlpha:1}, {yPercent:'0'})
        .to('div.skillsContainer', 1, {bottom:0, top:''})
        .fromTo('div#skills', 1.5, {yPercent:'-100%', autoAlpha:1}, {yPercent:'0'})
        .to('div.skillsContainer', 0.1, {color:'white'},"-=0.25");

    // about button and bottom section 
    var ta = new TimelineMax({paused:true})
        .to('div.aboutContainer', 0.1, {color:'black', zIndex:203})
        .fromTo('.aboutTransitionHelper', 1.5,  {yPercent:'100%', autoAlpha:1}, {yPercent:'0'})
        .to('div.aboutContainer', 1, {top:0, bottom:''})
        .fromTo('div#about', 1.5, {yPercent:'100%', autoAlpha:1}, {y:'0'})
        .to('div.aboutContainer', 0.1, {color:'white'},"-=0.25");


    function scrollToProject(e){
        $("div#project").toggleClass("gotoright");
        if($("div#project").hasClass("gotoright")){
            tp.play();
            $('div.projectContainer').parent().attr('href','#');
        }
        else{
            tp.reverse();
            $('div.projectContainer').parent().attr('href','#project')
        }
    }
    function scrollToContact(e){
        $("div#contact").toggleClass("gotoleft");
        if($("div#contact").hasClass("gotoleft")){
            tc.play();
            $('div.contactContainer').parent().attr('href','#');
        }
        else{
            tc.reverse();
            $('div.contactContainer').parent().attr('href','#contact');

        }
    }
    function scrollToSkills(e){
        $("div#skills").toggleClass("godown");
        if($("div#skills").hasClass("godown")){
            ts.play();
            $('div.skillsContainer').parent().attr('href','#');            
        }
        else{
            ts.reverse();
            $('div.skillsContainer').parent().attr('href','#skills');            
        }
    }
    function scrollToAbout(e){
        $("div#about").toggleClass("goup");
        if($("div#about").hasClass("goup")){
            ta.play();
            $('div.aboutContainer').parent().attr('href','#');
        }
        else{
            ta.reverse();
            $('div.aboutContainer').parent().attr('href','#about');
        }
    };








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
    // lessdetail = (thumbImg, projectImg, detailsH1, textContent) => { 
    //     let click = new TimelineMax({paused:true})
    //         .to(backbutton, 0.25, {left:'-50', rotation:180})
    //         .to(textContent, 0.5, {xPercent:'100%', opacity:0})
    //         .to(detailsH1, 0.5, {xPercent:'-100%', opacity:0})
    //         .to(projectImg, 0.5, {ease: Back.easeIn.config(1.7),scale:0, autoAlpha:0})
    //         .to(thumbImg, 0.5, {scale:1,ease: Back.easeOut.config(1.7), xPercent:"0", autoAlpha:1}, '-=0.25');
    //         click.restart();
    //     };
    var backclick = function(j){
        return function(){
            var thumbImg = $('.thumbimg' + j);
                projectImg = $('.pi' + j);
                detailsH1 = $('.detail' + j +'> .imgContainer > h1')
                textContent =  $('.detail' + j +' > .textContent')
                backbutton =  $('.detail' + j +' > .imgContainer > .backbutton' + j);

            // lessdetail(thumbImg, projectImg, detailsH1, textContent);
            detail(thumbImg, projectImg, detailsH1, textContent, detailsPage);
            detailsPage = false;

        }
    };    

    for(let j=1; j<5;j+=1){
        $('.thumbimg' + j).click(clickImg(j)); // -------todo------------------convert this 2 function to a single function call with a boolean  
        $('.backbutton'+ j).click(backclick(j)); // ------todo--------------------and an if statement in clickImg or backclick function
    }

});

