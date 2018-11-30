$(document).ready(function() {

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
    better = (screen.width>screen.height) ? screen.width : screen.height;


    // lets do the preparation before the any page animation starts 
    function first(){ 
        TweenLite.set($home.not($activeSection), {autoAlpha:0});
        TweenLite.set($indi.not($activeSection), {autoAlpha:0.5, scale:0.5, x:'-10%'});
        TweenLite.set($('.indication.active'), {color:'#ffd000'});
        TweenLite.set($allContent, {autoAlpha:0});
        TweenLite.set('.html5, .html5body, .bs1, .bs2, .bs3', {autoAlpha:0, color:'#ffd000', margin: '0.5%'});
        TweenLite.set('.sun', {autoAlpha:0, yPercent: 200});


    }
    //running the first function to set all specific variable to their desired state.
    first();




    for (var i = 1; i <= better; i++) {
        $('.mainpage').append('<a class="floatingText">' + String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33) + '</a>');
    } 

    // website launch button and aniimation function 
    // selecting text with specific letter and giving it a specific class so they can be animated afterwards

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
            }, 7000);

        setTimeout(
            function() {
                $( ".floatingmainText" ).remove();
            }, 7000);
    });


    
// button and functions for each sections



// <#########################################------PROJECT - LEFT SECTION--------################################################################>
// <#########################################------PROJECT - LEFT SECTION--------################################################################>
// <#########################################------PROJECT - LEFT SECTION--------################################################################>


// project button and left section transition timeline

    var detailsPage = false;

    var tp = new TimelineMax({paused:true})
        .to('div.projectContainer', 0.1, {color:'black', zIndex:203})
        .fromTo('.projectTransitionHelper', 1.5, {xPercent:'-100%', autoAlpha:1}, {xPercent:'0'})
        .to('div.projectContainer', 1, {left:"", right:0})
        .fromTo('div#leftSectionContainer', 1.5, {xPercent:'-100%', autoAlpha:1}, {xPercent:'0'})
        .to('div.projectContainer', 0.1, {color:'#ffd000'}, "-=0.25");

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

    // scroll function that handles the scrolling animation between projects

    function scroll(sectionIn, sectionfade, indicatorIn, indicatorfade){
        var tl = new TimelineMax ({paused:true})
            .to(indicatorfade, 0.25, {className: '-=active',opacity:0.5, scale: 0.5, x:'-10%', color:'#f4f4f4'})
            .to(indicatorIn, 0.25, {className: '+=active', opacity:1, scale: 1, x:'0%', color:'#ffd000'})
            .to($ptLeft,0.75,{ease: Back.easeOut.config(1.7) , xPercent:'51%'})
            .to($ptRight,0.75,{ease: Back.easeOut.config(1.7), xPercent:'-51%'})
            .set(sectionfade,{className: '-=active', autoAlpha:0})
            .set(sectionIn, {className: '+=active',autoAlpha:1})
            .to($ptRight,0.75,{ease: Back.easeIn.config(1.7), xPercent:'51%'})
            .to($ptLeft,0.75,{ease: Back.easeIn.config(1.7), xPercent:'-51%'}, '-=0.75');
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
                indicatorIn= $('.indication.active').next($indi).length === 0 ? $('.indication.active').prevAll($indi).last() : $('.indication.active').next($indi),
                indicatorfade= $('.indication.active');
            scroll(sectionIn, sectionfade, indicatorIn, indicatorfade);
        }

    // scroll up if the deltaY value is negative
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



    // Project Detail function thats reveals details of each project and disables the scrolling while user is inside the details page
    var dl = new TimelineMax({paused:true});

    detail = (thumbImg, projectImg, detailsH1, textContent, detailsPage) => {
        dl.progress(0).clear();//get rid of tween in previous version of t

        dl
            .fromTo(thumbImg, 0.5, {scale:1,ease: Back.easeOut.config(1.7), xPercent:"0", autoAlpha:1}, {scale:0.50,ease: Back.easeOut.config(1.7), xPercent:"-10%", autoAlpha:0})
            .fromTo(projectImg, 0.5, {ease: Back.easeIn.config(1.7),scale:0, autoAlpha:0}, {ease: Back.easeIn.config(1.7),scale:1, autoAlpha:1},0)
            .fromTo(detailsH1, 0.5, {xPercent:'-100%', opacity:0},{xPercent:'0', opacity:1})
            .fromTo(textContent, 0.5, {xPercent:'100%', opacity:0}, {xPercent:'0', opacity:1})
            .fromTo(backbutton, 0.25, {left:'-50', rotation:180}, {left:'3%', rotation:0});
            
        return dl
        };
        
    var clickImg = function(j){
        return function(){
            var thumbImg = $('.thumbimg' + j);
                projectImg = $('.pi' + j);
                detailsH1 = $('.detail' + j +'> .imgContainer > h1')
                textContent =  $('.detail' + j +' > .textContent')
                backbutton =  $('.detail' + j +' > .imgContainer > .backbutton' + j);
            
            
            detail(thumbImg, projectImg, detailsH1, textContent, detailsPage).play();
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

            detail(thumbImg, projectImg, detailsH1, textContent, detailsPage).reverse(0);
            detailsPage = false;

        }
    };    

    for(let j=1; j<5;j+=1){
        $('.thumbimg' + j).click(clickImg(j));
        $('.backbutton'+ j).click(backclick(j));
    }












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
        .to('div.contactContainer', 0.1, {color:'black', zIndex:203})
        .fromTo('.contactTransitionHelper', 1.5, {xPercent:'100', autoAlpha:1}, {xPercent:'0'})
        .to('div.contactContainer', 1, {left:0, right:''})
        .fromTo('div#rightSectionContainer', 1.5, {xPercent:'100', autoAlpha:1}, {xPercent:'0'})
        .to('div.contactContainer', 0.1, {color:'#ffd000'},"-=0.25")
        .from('.contactPageContainer', 1 , {borderRadius:'50%', width:'2vw', height:'2vw', top:'50vh', left:'50vw'})
        .from('.contactPageContainer', 1 , {autoAlpha:0})


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
        //  isSkillRunning = ($('.allskills').hasClass('active')) ? true : false; 
        
         if(isreversed){
           tcp.reverse(0).timeScale(2);
 
             // checking if any skills globes are open or not , if open reverse them as well
        //    if(isSkillRunning){ 
        //      skillRunning.reverse(0.9);
 
        //      // removing '.active' so that if anytime the skill is not open and user goes back reverse doesnt run unnecessarily, as revere is dependant                                        //  on the presence of active 
        //      $('.allskills').removeClass('active'); 
        //    }
         }
         else{
           tcp.play();
         }
    }

















// <#########################################------SKILLS - TOP SECTION--------################################################################>
// <#########################################------SKILLS - TOP SECTION--------################################################################>
// <#########################################------SKILLS - TOP SECTION--------################################################################>



    // Skills button and top section transition which also calls the oncomplete skillstext function 
    
    var randomText = " ";
        r = 0;
        while(r< 20){
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
        .fromTo('.skillsTransitionHelper', 1.5, {yPercent:'-100', autoAlpha:1}, {yPercent:'0'})
        .to('div.skillsContainer', 1, {bottom:0, top:''})
        .fromTo('div#topSectionContainer', 1.5, {yPercent:'-100', autoAlpha:1}, {yPercent:'0'})
        .to('div.skillsContainer', 0.1, {color:'#ffd000'},"-=0.25")
        .from('.skillsContent', 0.5, {y:'10%', autoAlpha:0})
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
            ts.reverse();
        }
    })






    // Skills names animation 

    // HTML5 skill
    var s1 = new TimelineMax({paused:true})
        .fromTo('.skills1', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.2, zIndex: 100,})
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
        .fromTo('.skills2', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.2, zIndex: 100,})
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
        .fromTo('.skills3', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.2, zIndex: 100,})
        .fromTo($('.allskills').not('.skills3'), 0.1,{filter:'blur(0rem)'}, {filter:'blur(0.3rem)'}, '-=0.25')
        .to('.css1, .css2, .css3, .css4', 3, {text:{value: randomText, oldClass:"css1", newClass:"js1"}, ease: Power1.easeIn},'#line1')
        .to('.css4js', 1.5, {text: {value : ' ' + wishes + ' ', newClass:'jsbig'}, ease: Power1.easeOut}, '#line2')
        .to('.css4js', 0.5, {text: '', ease: Power1.easeOut})
        .to(wishanimation, 0.1, {autoAlpha:1}, '-=0.5')
        .to(wishanimation, 1.5, {yPercent: 0}, '-=0.5')
        .to(wishanimation, 1.5, {autoAlpha:0}, '+=1')
        .to('.css4js', 1.5, {text: {value : "  The Time is  " + currentTime + " " , newClass:'jsbig'}, ease: Power1.easeOut}, '#line3')
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
            s3.reverse('#line2').timeScale(2); // starts in reverse at #line2
        }

    });

    var s4 = new TimelineMax({paused:true});
        s4.progress(0).clear();//get rid of tween in previous version of timeline
        s4
        .fromTo('.skills4', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.2, zIndex: 100,})
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
    .fromTo('.skills5', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.2, zIndex: 100,})
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
    .fromTo('.skills6', 0.5, {scale:1}, {ease: Power4.easeIn, scale:1.2, zIndex: 100,})
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
        s6.play();
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
    var ta = new TimelineMax({paused:true})
        .to('div.aboutContainer', 0.1, {color:'black', zIndex:203})
        .fromTo('.aboutTransitionHelper', 1.5,  {yPercent:'100%', autoAlpha:1}, {yPercent:'0'})
        .to('div.aboutContainer', 1, {top:0, bottom:''})
        .fromTo('div#bottomSectionContainer', 1.5, {yPercent:'100%', autoAlpha:1}, {yPercent:'0'})
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

});





