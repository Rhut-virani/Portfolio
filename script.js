/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-console */
/* eslint-disable max-len */
const devicenumber = $(window).innerWidth() + $(window).innerHeight(),
    devicewidth = $(window).innerWidth(),
    allActiveTimelines = [],
    $home = $('.home'),
    $slide = $('.pi-div'),
    $activeSection = $('.active'),
    $indi = $('.indication'),
    $ptLeft = $('.p-t-Left'),
    $ptRight = $('.p-t-Right'),
    $allcontainer = $('.projectContainer, .contactContainer, .skillsContainer, .aboutContainer'),
    better = $(window).width() < $(window).height() ? $(window).width() : $(window).height(),
    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    stringArray = [
        ['Projects', 'gotoLeft'],
        ['Contact', 'gotoRight'],
        ['about', 'gotodown'],
        ['skills', 'gotoup'],
    ];

let strokenumber;
if (isSafari) {
    strokenumber = 1000;
} else {
    strokenumber = -1000;
}

// preparation before the any page animation starts
first = () => {
    const svgContainer = $('#logo-svg'),
        svgUrl = './assets/logo/logo-bw.svg',
        // eslint-disable-next-line no-unused-vars
        svg = svgContainer.load(svgUrl);

    TweenLite.set('.resizing', { autoAlpha: 1 });
    TweenLite.set($allcontainer, { pointerEvents: 'none' });
    TweenLite.set('.brand-container', { autoAlpha: 0 });
    TweenLite.set($home.not($activeSection), { autoAlpha: 0 });
    TweenLite.set($slide.not($activeSection), { autoAlpha: 0 });
    TweenLite.set($('.indication.active'), { color: '#ffd000' });
    TweenLite.set('.html5, .html5body, .bs1, .bs2, .bs3', {
        autoAlpha: 0,
        color: '#ffd000',
        margin: '0.5%',
    });
    TweenLite.set('.sun', { autoAlpha: 0 });
    TweenLite.set('.pageIndicator > div', { autoAlpha: 0, xPercent: -10 });
    TweenLite.set('.projectPageContainer', { autoAlpha: 0, yPercent: -2 });
    TweenLite.set('.titleContainer, .imgContainer, .textContent', {
        autoAlpha: 0,
    });
};

// first function to set all specific variable to their desired state.
first();

$(document).ready(() => {
    const url = [
        './assets/aboutImages/1.jpg',
        './assets/aboutImages/2.jpg',
        './assets/aboutImages/3.jpg',
        './assets/aboutImages/4.jpg',
        './assets/aboutImages/5.jpg',
        './assets/aboutImages/6.jpg',
        './assets/p1.jpg',
        './assets/p2.jpg',
        './assets/p4.jpg',
        './assets/p7.jpg',
    ];
    // eslint-disable-next-line prefer-const
    // eslint-disable-next-line no-restricted-syntax
    for (const k in url) {
        new Image(500, 500).src = url[k];
    }

    // eslint-disable-next-line no-unused-vars
    const svg2 = $('.resizingHelper').load('./assets/logo/logo-bw-l.svg');
    let resizepage = new TimelineMax({ paused: true });

    function loading() {
        let whattoshow, whatnottoshow, isyoyo, rtimes, tweentoadd;
        if (
            !!window.orientation &&
            $(window).width() > $(window).height() &&
            $(window).width() < 900
        ) {
            whattoshow = '.landscapeOnly';
            whatnottoshow = '.allrest';
            rtimes = -1;
            isyoyo = true;
            tweentoadd = TweenLite.to('.resizing', 0.25, { autoAlpha: 1 });
        } else {
            whattoshow = '.allrest';
            whatnottoshow = '.landscapeOnly';
            rtimes = 0;
            isyoyo = false;
            tweentoadd = TweenLite.to('.resizing', 0.25, { autoAlpha: 0 }, '-=4');
        }
        resizepage.progress(0).invalidate();
        resizepage.clear();
        resizepage.kill();
        resizepage = new TimelineMax({ paused: true })
            .repeat(rtimes)
            .yoyo(isyoyo)
            .set(whatnottoshow, { autoAlpha: 0 })
            .set(whattoshow, { autoAlpha: 1 })
            .fromTo(
                '#l-back-R',
                4,
                { strokeDashoffset: strokenumber },
                { strokeDashoffset: 0, ease: Power2.easeOut },
            )
            .fromTo(
                '#l-front-R',
                4,
                { strokeDashoffset: strokenumber },
                { strokeDashoffset: 0, ease: Power2.easeOut },
                '-=4',
            )
            .fromTo(
                '#l-front-D',
                2,
                { strokeDashoffset: strokenumber },
                { strokeDashoffset: 0 },
                '-=2',
            )
            .add(tweentoadd);

        resizepage.play(0.2).timeScale(4);
    }

    setTimeout(() => {
        $('body').show();
        loading();
    }, 1);

    $(window).resize(() => {
        loading();
        setTimeout(() => {
            if (
                $(window).width() + $(window).height() !== devicenumber &&
                devicewidth !== $(window).width()
            ) {
                window.location.reload();
            }
        }, 1);
    });

    for (let i = 1; i <= better; i++) {
        $('.mainpage').append(
            `<a class="floatingText"> ${String.fromCharCode(
                Math.floor(Math.random() * (126 - 33)) + 33,
            )} </a>`,
        );
    }

    swing = () => {
        const st = new TimelineMax({ paused: true })
            .to('.buttonContainer', 0.5, { className: '+=swing', autoAlpha: 0 })
            .staggerTo('.swing', 0.005, { autoAlpha: 0, ease: Power2.easeOut }, 0.005, 0)
            .staggerTo('.floatingmainText', 0.005, { color: '#ffd000' }, 0.001, 0)
            .to('.gotoLeft', 0.2, { x: '-500', autoAlpha: 0 }, '-=1')
            .to('.gotoRight', 0.2, { x: '500', autoAlpha: 0 }, '-=1')
            .to('.gotoup', 0.2, { y: '-500', autoAlpha: 0 }, '-=1')
            .to('.gotodown', 0.2, { y: '500', autoAlpha: 0 }, '-=1')
            .staggerFrom(
                '.project > span',
                0.3,
                {
                    yPercent: '100',
                    ease: Back.easeOut.config(1.7),
                    opacity: 0,
                    rotation: '270deg',
                },
                0.1,
                '-=0.5',
            )
            .set('.brand-container', { autoAlpha: 1 })
            .call(removeClass)
            .staggerFrom(
                '.contact > span',
                0.3,
                {
                    yPercent: '100',
                    ease: Back.easeOut.config(1.7),
                    opacity: 0,
                    rotation: '270deg',
                },
                0.1,
                '-=0.5',
            )
            .staggerFrom(
                '.skills > span',
                0.3,
                {
                    yPercent: '-100',
                    ease: Back.easeOut.config(1.7),
                    opacity: 0,
                    rotation: '270deg',
                },
                0.1,
                '-=0.5',
            )
            .staggerFrom(
                '.about > span',
                0.3,
                {
                    yPercent: '100',
                    ease: Back.easeOut.config(1.7),
                    opacity: 0,
                    rotation: '270deg',
                },
                0.1,
                '-=0.5',
            );

        st.play().timeScale(1.5);
    };

    function removeClass() {
        const lt12 = new TimelineMax({ paused: true })
            .fromTo(
                '#back-R',
                4,
                { strokeDashoffset: strokenumber },
                { strokeDashoffset: 0, ease: Power2.easeOut },
            )
            .fromTo(
                '#front-R',
                4,
                { strokeDashoffset: strokenumber },
                { strokeDashoffset: 0, ease: Power2.easeOut },
                0,
            )
            .fromTo(
                '#front-D',
                1.5,
                { strokeDashoffset: strokenumber },
                { strokeDashoffset: 0 },
                '-=1.5',
            )
            .call(bannerAnimation)
            .to('.logo-png', 1, { opacity: 1 })
            .to('.main-logo-pr', 1, { opacity: 1 }, '-=1')
            .to('path', 0.25, { scale: 0.99 }, '-=1')
            .set($allcontainer, { pointerEvents: 'all' });

        lt12.play().timeScale(1.5);

        setTimeout(() => {
            $('.swing').remove();
            $('.projectContainer > div > span ').attr('class', 'widerText');
            $('.contactContainer > div > span ').attr('class', 'widerText');
            $('.skillsContainer > div > span ').attr('class', 'widerText2');
            $('.aboutContainer > div > span ').attr('class', 'widerText2');
            $('.project, .contact, .skills, .about').attr('class', ' ');
            $('.floatingmainText').remove();
        }, 2000);
    }

    function bannerAnimation() {
        // eslint-disable-next-line no-unused-vars
        const bt = new TimelineMax({ onComplete: bannerInfinite })
            .to('.mainpage-text1', 3, { text: { value: 'Hey,' } })
            .fromTo(
                '.mainpage-text1',
                0.5,
                { borderRightColor: '#ffd00020' },
                {
                    borderRightColor: '#ffd000',
                    repeat: 5,
                    ease: SteppedEase.config(37),
                },
                '-=3',
            )
            .set('.mainpage-text1', { borderRight: 'none' })
            .to('.mainpage-text2', 5, { text: { value: 'I am Rhut Virani,' } }, '-=1')
            .fromTo(
                '.mainpage-text2',
                0.5,
                { borderRightColor: '#ffd00020' },
                {
                    borderRightColor: '#ffd000',
                    repeat: 10,
                    ease: SteppedEase.config(37),
                },
                '-=5',
            )
            .set('.mainpage-text2', { borderRight: 'none' });
    }

    function bannerInfinite() {
        // eslint-disable-next-line no-unused-vars
        const btInfinite = new TimelineMax({ repeat: -1, repeatDelay: 0 })
            .to('.mainpage-text3', 3, {
                text: { value: 'Full Stack Web Developer' },
            })
            .to('.mainpage-text3', 0.5, { text: { value: ' ' } }, '+=0.5')
            .to('.mainpage-text3', 3, { text: { value: 'Based In Toronto' } })
            .to('.mainpage-text3', 0.5, { text: { value: ' ' } }, '+=0.5')
            .to('.mainpage-text3', 3, {
                text: { value: 'Former Public Health Dentist' },
            })
            .to('.mainpage-text3', 0.5, { text: { value: ' ' } }, '+=0.5')
            .to('.mainpage-text3', 3, { text: { value: 'Always a Coder' } })
            .to('.mainpage-text3', 0.5, { text: { value: ' ' } }, '+=0.5')
            .fromTo(
                '.mainpage-text3',
                0.5,
                { borderRightColor: '#ffd00020' },
                {
                    borderRightColor: '#ffd000',
                    repeat: 34,
                    ease: SteppedEase.config(37),
                },
                0,
            );
    }

    // website launch button and aniimation function
    // selecting text with specific letter and
    // giving it a specific class so they can be animated afterwards
    const btn = new TimelineMax({ paused: true }).fromTo(
        '.buttonAnimationHelper',
        0.5,
        { y: '-110%', autoAlpha: 1 },
        { yPercent: 0, autoAlpha: 1, ease: Power4.easeOut },
    );

    $('.buttonContainer').mouseenter(() => {
        btn.play();
    });
    $('.buttonContainer').mouseleave(() => {
        btn.reverse(0);
    });

    $('.buttonContainer').on('click', () => {
        // $(this).attr('class', 'correctWebsite2 swing')
        $('a.floatingText').attr('class', 'floatingText swing');
        stringArray.forEach((element) => {
            element[0].split('').forEach((e) => {
                $(`a.floatingText:contains(${e})`)
                    .first()
                    .attr('class', `floatingmainText ${element[1]}`);
            });
        });
        $('.waitForClass').attr('class', 'project');
        $('.waitForClass2').attr('class', 'contact');
        $('.waitForClass3').attr('class', 'about');
        $('.waitForClass4').attr('class', 'skills');

        swing();
    });

    $('.logo-wrapper').mousemove((e) => {
        const posX = -(e.clientX / $(window).width() - 0.5);
        const posY = -(e.clientY / $(window).height() - 0.5);
        TweenMax.to($('.logo-wrapper'), 0.7, {
            xPercent: 20 * posX,
            yPercent: 20 * posY,
            ease: Power1.easeOut,
        });
    });

    // button and functions for each sections
    // <#########################################------PROJECT - LEFT SECTION--------################################################################>
    // <#########################################------PROJECT - LEFT SECTION--------################################################################>
    // <#########################################------PROJECT - LEFT SECTION--------################################################################>

    // project button and left section transition timeline

    let detailsPage = false;
    let currentJ = 1;

    const tp = new TimelineMax({ paused: true })
        .set('div#leftSectionContainer , .projectTransitionHelper', {
            display: 'block',
        })
        .to('div.projectContainer', 0.1, { color: 'black', zIndex: 203 })
        .to('.main-logo-pr', 0.25, { opacity: 0 })
        .fromTo(
            '.projectTransitionHelper',
            0.75,
            { xPercent: '-100%', autoAlpha: 1 },
            { xPercent: '0' },
        )
        .to('div.projectContainer', 0.75, { left: '', right: 0 }, '-=0.25')
        .fromTo(
            'div#leftSectionContainer',
            0.55,
            { xPercent: '-100%', autoAlpha: 1 },
            { xPercent: '0' },
        )
        .to('div.projectContainer', 0.1, { color: '#ffd000' }, '-=0.25')
        .to('div.projectContainer', 0.1, { backgroundColor: '#0f1214' })
        .to('.main-logo-pr', 0.25, { opacity: 1 })
        .staggerTo('.pageIndicator > div', 0.25, { autoAlpha: 1, xPercent: 0 }, 0.1)
        .to('.projectPageContainer', 1, { autoAlpha: 1, yPercent: 0 })
        .to('div.projectContainer', 0.5, { boxShadow: '-5px 0px 25px -15px #ffd000' }, '#pause');

    $('div.projectContainer').click(() => {
        // var t1 = new TimelineMax();
        if (!tp.isActive()) {
            $('div#leftSectionContainer').toggleClass('gotoright');
            if ($('div#leftSectionContainer').hasClass('gotoright')) {
                tp.play().timeScale(1.5);
            } else {
                tp.reverse(0).timeScale(3);
                run = () => {
                    const thumbImg = $(`.thumbimg${currentJ}`),
                        projectImg = $(`.projectImg${currentJ}`),
                        heading =
                            currentJ === 1
                                ? $(`.heading${currentJ}, .fa-vr-cardboard`)
                                : $(`.heading${currentJ}`),
                        imgtext1 = $(
                            `.detail${currentJ}> .imgContainer > .pitext > .project-i-text-1 > div`,
                        ),
                        imgtext2 = $(
                            `.detail${currentJ}> .imgContainer > .pitext > .project-i-text-2 > div`,
                        ),
                        detailsH1 = $(`.detail${currentJ} > .titleContainer > .title`),
                        textContent = $(`.detail${currentJ} > .textContent`),
                        exlinks = $(`ex-links${currentJ} > a`),
                        backbutton = $(`.backbutton${currentJ}`);
                    imgcontainer = $(`.detail${currentJ} > .imgContainer`);
                    titlecontainer = $(`.detail${currentJ} > .titleContainer`);

                    detail(
                        thumbImg,
                        projectImg,
                        detailsH1,
                        textContent,
                        detailsPage,
                        heading,
                        exlinks,
                        imgtext1,
                        imgtext2,
                        imgcontainer,
                        titlecontainer,
                        backbutton,
                    ).reverse('#rev');
                    detailsPage = false;
                };
                setTimeout(() => {
                    run();
                }, 1000);
            }
        }
    });

    // scroll function that handles the scrolling animation between projects

    function scroll(sectionIn, sectionfade, indicatorIn, indicatorfade, headingfade, headingIn) {
        const tl = new TimelineMax({ paused: true })
            .to($ptLeft, 0.3, { ease: Power4.easeOut, xPercent: '51%' })
            .to(indicatorfade, 0.1, {
                className: '-=active',
                color: '#f4f4f4',
                scale: 1,
            })
            .to(indicatorIn, 0.1, { className: '+=active', color: '#ffd000', scale: 1.2 }, '-=0.25')
            .to($ptRight, 0.3, { ease: Power4.easeOut, xPercent: '-51%' })
            .fromTo(headingfade, 0.2, { autoAlpha: 1 }, { className: '-=active', autoAlpha: 0 })
            .set(sectionfade, { className: '-=active', autoAlpha: 0 })
            .set(sectionIn, { className: '+=active', autoAlpha: 1 })
            .to($ptRight, 0.4, { ease: Power4.easeIn, xPercent: '51%' })
            .to($ptLeft, 0.4, { ease: Power4.easeIn, xPercent: '-51%' }, '-=0.4')
            .fromTo(headingIn, 0.2, { autoAlpha: 0 }, { className: '+=active', autoAlpha: 1 });
        tl.play();
    }

    scrolling = (e) => {
        // checking if the previous tween is finished or the detainls page is open or not
        if (scroll.isTweening || detailsPage) {
            return;
        }

        // scroll up if the deltaY value is poistive
        if (e.originalEvent.deltaY > 0) {
            const sectionIn =
                    $('.home.active').next($home).length === 0
                        ? $('.home.active').prevAll($home).last()
                        : $('.home.active').next($home),
                sectionfade = $('.home.active'),
                headingIn = $(sectionIn).children().children('.heading'),
                headingfade = $('.heading.active'),
                indicatorIn =
                    $('.indication.active').next($indi).length === 0
                        ? $('.indication.active').prevAll($indi).last()
                        : $('.indication.active').next($indi),
                indicatorfade = $('.indication.active');
            scroll(sectionIn, sectionfade, indicatorIn, indicatorfade, headingfade, headingIn);
        } else if (e.originalEvent.deltaY < 0) {
            // scroll up if the deltaY value is negative
            const sectionIn =
                    $('.home.active').prev($home).length === 0
                        ? $('.home.active').nextAll($home).last()
                        : $('.home.active').prev($home),
                sectionfade = $('.home.active'),
                headingIn = $(sectionIn).children().children('.heading'),
                headingfade = $('.heading.active'),
                indicatorIn =
                    $('.indication.active').prev($indi).length === 0
                        ? $('.indication.active').nextAll($indi).last()
                        : $('.indication.active').prev($indi),
                indicatorfade = $('.indication.active');
            scroll(sectionIn, sectionfade, indicatorIn, indicatorfade, headingfade, headingIn);
        }
    };

    //  function that listens on mousewheel triggers and bounces extra scrolls within 200ms
    // eslint-disable-next-line quote-props
    $('.container').on('wheel', _.debounce(scrolling, 200, { leading: true, trailing: false }));
    // $('.container').on('swipedown', (e) => { console.log(e); });

    // eslint-disable-next-line arrow-body-style
    const clickIndi = (l) => {
        return (e) => {
            const sectionIn = $(`.home.section${l}`),
                sectionfade = $('.home.active'),
                headingIn = $(sectionIn).children().children('.heading'),
                headingfade = $('.heading.active'),
                indicatorIn = $(e.currentTarget),
                indicatorfade = $('.indication.active');
            scroll(sectionIn, sectionfade, indicatorIn, indicatorfade, headingfade, headingIn);
        };
    };
    for (let l = 1; l < 9; l += 1) {
        $(`.indicator${l}`).click(clickIndi(l));
    }

    // Project Detail function thats reveals details of each project and disables the scrolling while user is inside the details page
    const dl = new TimelineMax({ paused: true });

    detail = (
        thumbImg,
        projectImg,
        detailsH1,
        textContent,
        _detailsPage,
        heading,
        exlinks,
        imgtext1,
        imgtext2,
        imgcontainer,
        titlecontainer,
        backbutton,
    ) => {
        dl.progress(0).clear(); // get rid of tween in previous version of timeline
        dl.invalidate();
        dl.kill();
        dl.to($indi, 0.25, { xPercent: '-100%', autoAlpha: 0 })
            .to(heading, 0.25, { autoAlpha: 0 })
            .set(imgcontainer, { autoAlpha: 1 })
            .set(titlecontainer, { autoAlpha: 1 })
            .fromTo(
                thumbImg,
                0.1,
                { autoAlpha: 1 },
                { ease: Back.easeOut.config(1.7), autoAlpha: 0 },
            )
            .fromTo(
                detailsH1,
                0.25,
                { yPercent: '-10%', autoAlpha: 0 },
                { yPercent: '0', autoAlpha: 1 },
            )
            .fromTo(
                projectImg,
                0.25,
                { autoAlpha: 0 },
                { ease: Back.easeIn.config(1.7), autoAlpha: 1 },
                '-=0.25',
            )
            .fromTo(exlinks, 0.25, { autoAlpha: 0 }, { autoAlpha: 1 }, '-=0.25')
            .fromTo(
                imgtext1,
                0.25,
                { yPercent: '-10', autoAlpha: 0 },
                { yPercent: 0, autoAlpha: 1 },
                '-=0.25',
            )
            .fromTo(
                imgtext2,
                0.25,
                { yPercent: '-10', autoAlpha: 0 },
                { yPercent: 0, autoAlpha: 1 },
                '-=0.25',
            )
            .fromTo(textContent, 0.25, { autoAlpha: 0 }, { autoAlpha: 1 }, '-=0.25')
            .fromTo(
                backbutton,
                0.25,
                { autoAlpha: 0, rotation: 90 },
                { autoAlpha: 1, rotation: 0 },
                '#rev',
            )
            .fromTo(projectImg, 0.5, { xPercent: '1' }, { xPercent: '0', ease: Power1.easeOut })
            .fromTo(projectImg, 1, { xPercent: '1' }, { xPercent: '0', ease: Power1.easeOut })
            .fromTo(projectImg, 1, { xPercent: '1' }, { xPercent: '0', ease: Power1.easeOut })
            .fromTo(projectImg, 1, { xPercent: '1' }, { xPercent: '0', ease: Power1.easeOut });
        return dl;
    };

    const clickImg = (j) => () => {
        currentJ = j;
        const thumbImg = $(`.thumbimg${j}`),
            projectImg = $(`.projectImg${j}`),
            imgcontainer = $(`.detail${j} > .imgContainer`),
            titlecontainer = $(`.detail${j} > .titleContainer`),
            imgtext1 = $(`.detail${j} > .imgContainer > .pitext > .project-i-text-1 > div`),
            imgtext2 = $(`.detail${j} > .imgContainer > .pitext > .project-i-text-2 > div`),
            heading = j === 1 ? $(`.heading${j}, .fa-vr-cardboard`) : $(`.heading${j}`),
            detailsH1 = $(`.detail${j} > .titleContainer > .title`),
            textContent = $(`.detail${j} > .textContent`),
            exlinks = $(`.ex-links${j} > a`),
            backbutton = $(`.backbutton${j}`);

        detail(
            thumbImg,
            projectImg,
            detailsH1,
            textContent,
            detailsPage,
            heading,
            exlinks,
            imgtext1,
            imgtext2,
            imgcontainer,
            titlecontainer,
            backbutton,
        ).play();
        detailsPage = true;
    };

    const backclick = (j) => () => {
        const thumbImg = $(`.thumbimg${j}`),
            projectImg = $(`.projectImg${j}`),
            imgcontainer = $(`.detail${j} > .imgContainer`),
            titlecontainer = $(`.detail${j} > .titleContainer`),
            imgtext1 = $(`.detail${j} > .imgContainer > .pitext > .project-i-text-1 > div`),
            imgtext2 = $(`.detail${j} > .imgContainer > .pitext > .project-i-text-2 > div`),
            heading = j === 1 ? $(`.heading${j}, .fa-vr-cardboard`) : $(`.heading${j}`),
            detailsH1 = $(`.detail${j} > .titleContainer > .title`),
            textContent = $(`.detail${j} > .textContent`),
            exlinks = $(`.ex-links${j} > a`),
            backbutton = $(`.backbutton${j}`);

        detail(
            thumbImg,
            projectImg,
            detailsH1,
            textContent,
            detailsPage,
            heading,
            exlinks,
            imgtext1,
            imgtext2,
            imgcontainer,
            titlecontainer,
            backbutton,
        ).reverse('#rev');
        detailsPage = false;
    };

    for (let j = 1; j < 9; j += 1) {
        $(`.thumbimg${j}`).click(clickImg(j));
        $(`.backbutton${j}`).click(backclick(j));
    }

    const project1text = [
        [],
        [
            ['Immersive', 'Environment'],
            ['Vr', 'Experiance'],
            ['Visual', 'Clues'],
            ['Fun ', 'Trivia'],
        ],
        [
            ['2 Player ', 'Game '],
            ['Vibrant', 'Colors'],
            ['Engaging &', 'Fun'],
            ['Scores &', 'Timers'],
            ['Simple &', 'Easy'],
        ],
        [
            ['Search', 'sitters'],
            ['Join as', 'dog sitter'],
            ['compare', 'sitters'],
        ],
        [
            ['Find', 'Tatto contests'],
            ['Create', 'contest'],
            ['Instant ', 'messaging'],
            ['Submit', 'design'],
        ],
        [
            ['Search', 'Movies'],
            ['Additional', 'Info'],
            ['View', 'Cast'],
            ['Get', 'Details'],
        ],
        [
            ['G.O.T', 'Countdown'],
            ['House', 'Themes'],
            ['Your Fav.', 'Quotes'],
        ],
        [
            ['Search', 'Twitter-Memes'],
            ['Download', 'Images'],
        ],
        [
            ['Choose', 'Device'],
            ['Song', 'Info'],
            ['Play', 'Music'],
        ],
    ];

    function slideshow(nextslide, prevslide, length, j, imgtext1, imgtext2) {
        const text1 = project1text[j][length][0];
        const text2 = project1text[j][length][1];
        // console.log(text1, text2, project1text);
        const tni = new TimelineMax({ paused: true })
            .to(imgtext1, 0.3, { yPercent: '-100' })
            .to(imgtext2, 0.3, { yPercent: '-100' }, 0)
            .set(imgtext1, { text: text1 })
            .set(imgtext2, { text: text2 })
            .fromTo(
                prevslide,
                0.3,
                { xPercent: 0 },
                { xPercent: '-120', zIndex: 0, ease: Power3.easeInOut },
            )
            .fromTo(
                nextslide,
                0.3,
                { xPercent: 120, zIndex: 1, autoAlpha: 1 },
                { xPercent: 0, className: '+=active', ease: Power3.easeInOut },
            )
            .set(prevslide, { autoAlpha: 0, className: '-=active', scale: 1 })
            .to(imgtext1, 0.3, { yPercent: 0 })
            .to(imgtext2, 0.3, { yPercent: 0 }, '-=0.3');

        tni.play();
    }
    function slideshowbutton(j) {
        const nextslide =
            $(`.pi${j}-div.active`).next(`.pi${j}-div`).length === 0
                ? $(`.pi${j}-div.active`).prevAll(`.pi${j}-div`).last()
                : $(`.pi${j}-div.active`).next(`.pi${j}-div`);
        const prevslide = $(`.pi${j}-div.active`);
        // eslint-disable-next-line prefer-destructuring
        const length = $(`.pi${j}-div.active`).nextAll(`.pi${j}-div`).length;
        imgtext1 = $(`.detail${j}> .imgContainer > .pitext > .project-i-text-1 > div`);
        imgtext2 = $(`.detail${j}> .imgContainer > .pitext > .project-i-text-2 > div`);
        slideshow(nextslide, prevslide, length, j, imgtext1, imgtext2);
    }

    for (let j = 1; j < 9; j += 1) {
        $(`.pi${j}-div`).click(() => {
            slideshowbutton(j);
        });
    }

    $('.projectImg').mousemove((e) => {
        const posX = e.clientX / $(window).width() - 0.5;
        const posY = e.clientY / $(window).height() - 0.5;

        TweenMax.to($('.projectImg'), 0.5, {
            rotationY: 5 * posX,
            rotationX: 5 * posY,
            ease: Power1.easeOut,
            transformPerspective: 900,
            transformOrigin: 'center',
        });
    });

    // <#####################################################------CONTACT - RIGHT SECTION--------##################################################################>
    // <#####################################################------CONTACT - RIGHT SECTION--------##################################################################>
    // <#####################################################------CONTACT - RIGHT SECTION--------##################################################################>

    // contact button and right section

    const tc = new TimelineMax({
        paused: true,
        // onComplete: contactText,
        // onCompleteParams:[false],
        onReverseComplete: contactText,
        onReverseCompleteParams: [true],
    })
        .set('div#rightSectionContainer , .contactTransitionHelper', {
            display: 'block',
        })
        .to('div.contactContainer', 0.1, { color: 'black', zIndex: 203 })
        .fromTo(
            '.contactTransitionHelper',
            0.75,
            { xPercent: '101', autoAlpha: 1 },
            { xPercent: '0' },
        )
        .fromTo(
            'div.contactContainer',
            0.55,
            { left: () => '', right: 0 },
            { left: () => 0, right: '' },
        )
        .fromTo(
            'div#rightSectionContainer',
            0.75,
            { xPercent: '100', autoAlpha: 1 },
            { xPercent: '0' },
        )
        .to('div.contactContainer', 0.1, { color: '#ffd000' }, '-=0.25')
        .to('div.contactContainer', 0.1, { backgroundColor: '#0f1214' })
        .to('.main-logo-co', 0.25, { opacity: 1 })
        .fromTo('.contactPageContainer', 0.5, { autoAlpha: 0 }, { autoAlpha: 1 }, '-=0.5')
        .call(contactText, [false], '-=0.5');

    $('div.contactContainer').click(() => {
        if (!tc.isActive()) {
            $('div#rightSectionContainer').toggleClass('gotoleft');
            if ($('div#rightSectionContainer').hasClass('gotoleft')) {
                tc.play().timeScale(1.5);
            } else {
                tc.reverse().timeScale(3);
            }
        }
    });

    const tcp = new TimelineMax({ paused: true })
        .fromTo(
            '.greetings',
            0.5,
            { autoAlpha: 0, yPercent: '-10' },
            { autoAlpha: 1, yPercent: '0' },
        )
        .fromTo('.email', 0.5, { autoAlpha: 0, yPercent: '-10' }, { autoAlpha: 1, yPercent: '0' })
        .fromTo('.links', 0.5, { autoAlpha: 0, yPercent: '-10' }, { autoAlpha: 1, yPercent: '0' });

    function contactText(isreversed) {
        // if any of the skills have class active meaning they are running so value will be true

        if (isreversed) {
            tcp.reverse(0).timeScale(2);
        } else {
            tcp.play();
        }
    }

    // <#########################################------SKILLS - TOP SECTION--------################################################################>
    // <#########################################------SKILLS - TOP SECTION--------################################################################>
    // <#########################################------SKILLS - TOP SECTION--------################################################################>

    // Skills button and top section transition which also calls the oncomplete skillstext function

    let locals,
        randomText = ' ',
        r = 0,
        numberofR;
    if ($(window).width() < 600) {
        numberofR = 10;
    } else {
        numberofR = 20;
    }
    while (r < numberofR) {
        randomText += 'X O X O X O X O X O';
        r += 1;
    }

    let currentTime = moment().format('hh:mm:ss a');
    setInterval(() => {
        currentTime = moment().format('hh:mm:ss a');
    }, 1000);
    const currentMonth = moment().format('MMMM');
    const currentDay = moment().format('dddd');
    const currentDate = moment().format('Do');
    const currentYear = moment().format('YYYY');
    // var timeZone = moment().format('Z');
    let wishes;
    let wishanimation;

    if (moment().format('k') >= 12 && moment().format('k') < 17) {
        wishes = 'Good AfterNoon';
        wishanimation = '.sunaf';
    } else if (moment().format('k') >= 5 && moment().format('k') < 12) {
        wishes = 'Good Morning';
        wishanimation = '.sunrise';
    } else {
        wishes = 'Good Evening';
        wishanimation = '.moon';
    }

    let isSkillRunning;
    let skillRunning;

    skillsText = (isreversed) => {
        // if any of the skills have class active meaning they are running so value will be true
        isSkillRunning = $('.allskills').hasClass('active');

        if (isreversed) {
            tsp.progress(0);

            // checking if any skills globes are open or not , if open reverse them as well
            if (isSkillRunning) {
                skillRunning.reverse(0.1);

                //  removing '.active' so that if anytime the skill is not open and user goes back reverse doesnt run unnecessarily,     as revere is dependant
                //  on the presence of active
                $('.allskills').removeClass('active');
            }
        } else {
            tsp.play();
        }
    };
    const ts = new TimelineMax({
        paused: true,
        onComplete: skillsText,
        onCompleteParams: [false],
        onReverseComplete: skillsText,
        onReverseCompleteParams: [true],
    })
        .set('div#topSectionContainer , .skillsTransitionHelper', {
            display: 'block',
        })
        .to('div.skillsContainer', 0.1, { color: 'black', zIndex: 203 })
        .fromTo(
            '.skillsTransitionHelper',
            0.75,
            { yPercent: '-100', autoAlpha: 1 },
            { yPercent: '0' },
        )
        .to('div.skillsContainer', 0.55, { bottom: 0, top: '' })
        .fromTo(
            'div#topSectionContainer',
            0.75,
            { yPercent: '-100', autoAlpha: 1 },
            { yPercent: '0' },
        )
        .to('div.skillsContainer', 0.1, { color: '#ffd000' }, '-=0.25')
        .to('div.skillsContainer', 0.1, { backgroundColor: '#0f1214' })
        .to('.main-logo-sk', 0.25, { opacity: 1 })
        .fromTo('.skillsGrid1', 0.3, { autoAlpha: 0 }, { autoAlpha: 1 })
        .fromTo('.skillsContent', 0.5, { y: '10%', autoAlpha: 0 }, { y: '0%', autoAlpha: 1 })
        .staggerFromTo(
            '.allskills',
            0.4,
            { autoAlpha: 0, y: '-50%' },
            {
                autoAlpha: 1,
                y: '0%',
                ease: Back.easeOut.config(2),
            },
            0.1,
            '-=0.5',
        )
        .fromTo(
            '.allskills',
            0.2,
            { boxShadow: 'none' },
            {
                boxShadow: '0 5px 14px #1f1f1f, 0 2px 9px #eaeaea',
                ease: Power2.easeOut,
            },
        );

    // animation as soon as the skills page loads
    // text content and the skill displaying globes
    const tsp = new TimelineMax({ paused: true })
        .staggerFromTo(
            '.skillName1',
            0.3,
            { yPercent: '-40', autoAlpha: 0 },
            { yPercent: '0', autoAlpha: 1 },
            0.05,
        )
        .staggerTo('.skillName1', 0.3, { yPercent: '40', autoAlpha: 0 }, 0.05)
        .staggerFromTo(
            '.skillName2',
            0.3,
            { yPercent: '-40', autoAlpha: 0 },
            { yPercent: '0', autoAlpha: 1 },
            0.05,
        )
        .staggerTo('.skillName2', 0.3, { yPercent: '40', autoAlpha: 0 }, 0.05)
        .staggerFromTo(
            '.skillName3',
            0.3,
            { yPercent: '-40', autoAlpha: 0 },
            { yPercent: '0', autoAlpha: 1 },
            0.05,
        )
        .staggerTo('.skillName3', 0.3, { yPercent: '40', autoAlpha: 0 }, 0.05)
        .staggerFromTo(
            '.skillName4',
            0.3,
            { yPercent: '-40', autoAlpha: 0 },
            { yPercent: '0', autoAlpha: 1 },
            0.05,
        );

    $('div.skillsContainer').click(() => {
        if (!ts.isActive()) {
            $('div#topSectionContainer').toggleClass('godown');

            if ($('div#topSectionContainer').hasClass('godown')) {
                ts.play().timeScale(1.5);
            } else {
                ts.reverse().timeScale(3);
            }
        }
    });
    const scrollDiv = $('.allSkillsContainer');
    let clientWidth;
    // var clientWidth1 = $(window).width();
    // var nophone = scrollDiv.innerWidth();
    // var phone = scrollDiv.width();
    // var scrollWidth = scrollDiv.get(0).scrollWidth;
    getclientwidth = () => {
        if ($(window).width() < $(window).height() && $(window).width() < 600) {
            clientWidth = scrollDiv.width() + (scrollDiv.outerWidth() - scrollDiv.width()) / 6;
            return clientWidth;
        }
        clientWidth = scrollDiv.innerWidth();
        return clientWidth;
    };

    $('.leftarrow').click(() => {
        leftPos = scrollDiv.scrollLeft();
        $('.allSkillsContainer').animate({ scrollLeft: `-=${getclientwidth()}` }, 400);
    });

    $('.rightarrow').click(() => {
        leftPos = scrollDiv.scrollLeft();
        $('.allSkillsContainer').animate({ scrollLeft: `+=${getclientwidth()}` }, 400);
    });

    // Skills names animation

    // HTML5 skill
    let s1 = new TimelineMax({ paused: true });
    gets1Timeline = () => {
        s1.progress(0).clear(); // get rid of tween in previous version of timeline
        s1.set('.html5body', { xPercent: -50 })
            .set('.html5', { xPercent: -50 })
            .fromTo(
                '.bs1',
                0.1,
                { text: { value: '<i>< h2 ></i>' } },
                { text: { value: '<i>< h2 ></i>' } },
            )
            .fromTo(
                '.bs3',
                0.1,
                { text: { value: '<i>< p ></i>' } },
                { text: { value: '<i>< p ></i>' } },
            )
            .fromTo('.skills1', 0.5, { scale: 1 }, { ease: Power4.easeIn, scale: 1.1, zIndex: 100 })
            .set($('.allskills').not('.skills1'), { pointerEvents: 'none' })
            .fromTo(
                $('.allskills').not('.skills1'),
                0.1,
                { filter: 'blur(0rem)' },
                { filter: 'blur(0.3rem)' },
                '-=0.25',
            )
            .fromTo('.nonhtml5', 0.5, { margin: '0% 0% 0% 0%' }, { margin: '0% 0 0 10%' })
            .to('.html5body', 0.5, { autoAlpha: 1, xPercent: 0 }, '-=0.25')
            .to('.html5', 0.5, { autoAlpha: 1, xPercent: 0, marginLeft: '5%' }, '-=0.25');
        return s1;
    };

    $('.skills1').click(() => {
        $('.skills1').toggleClass('active');
        if ($('.skills1').hasClass('active')) {
            s1 = gets1Timeline().play().timeScale(1);
            skillRunning = s1;
        } else {
            s1.reverse().timeScale(2);
        }
    });

    // CSS3 skills
    let s2 = new TimelineMax({ paused: true });
    gets2Timeline = () => {
        s2.progress(0).clear(); // get rid of tween in previous version of timeline
        s2.fromTo('.skills2', 0.5, { scale: 1 }, { ease: Power4.easeIn, scale: 1.1, zIndex: 100 })
            .set($('.allskills').not('.skills2'), { pointerEvents: 'none' })
            .fromTo(
                $('.allskills').not('.skills2'),
                0.1,
                { filter: 'blur(0rem)' },
                { filter: 'blur(0.3rem)' },
                '-=0.25',
            )
            .fromTo(
                '.cssh2',
                0.25,
                { letterSpacing: 'auto', color: '#f4f4f4' },
                { letterSpacing: '0.5rem', fontWeight: '900', color: 'EF476F' },
            )
            .to('.cssh2', 0.25, { color: '#7DDF64' })
            .to('.cssh2', 0.25, { color: '#FF7733' })
            .to('.cssh2', 0.25, { color: '#FFED66' })
            .to('.cssh2', 0.25, { color: '#26FFE6' })
            .fromTo(
                '.css1',
                0.25,
                { fontWeight: '200' },
                { fontFamily: 'Lato', fontStyle: 'italic', color: '#D6F599' },
            )
            .fromTo(
                '.css2',
                0.25,
                { fontWeight: '200' },
                {
                    fontFamily: 'Dancing Script',
                    fontWeight: '900',
                    color: '#0298CC',
                },
            )
            .fromTo(
                '.css3',
                0.25,
                { fontWeight: '200' },
                { textDecorationLine: 'line-through', color: '#5D2E8C' },
            )
            .fromTo(
                '.css4',
                0.25,
                { fontWeight: '200' },
                {
                    fontFamily: 'Dancing Script',
                    textDecorationLine: 'underline',
                    fontSize: '2rem',
                    color: '#436436',
                },
            );

        return s2;
    };

    $('.skills2').click(() => {
        $('.skills2').toggleClass('active');
        if ($('.skills2').hasClass('active')) {
            s2 = gets2Timeline().play().timeScale(1);
            skillRunning = s2;
        } else {
            s2.reverse().timeScale(2);
        }
    });

    // --------------------JS Skill--------------------------------
    //-------------------------------------------------------------
    let s3 = new TimelineMax({ paused: true });
    gets3Timeline = () => {
        s3.progress(0).clear(); // get rid of tween in previous version of timeline
        s3.fromTo('.skills3', 0.5, { scale: 1 }, { ease: Power4.easeIn, scale: 1.1, zIndex: 100 })
            .set($('.allskills').not('.skills3'), { pointerEvents: 'none' })
            .fromTo(
                $('.allskills').not('.skills3'),
                0.1,
                { filter: 'blur(0rem)' },
                { filter: 'blur(0.3rem)' },
                '-=0.25',
            )
            .to('.cssh2', 0.1, { autoAlpha: 0 })
            .to('.nonhtml5', 0.25, { margin: '-10% 0 0 0' })
            .to(
                '.css1, .css2, .css3, .css4',
                3,
                {
                    text: {
                        value: randomText,
                        oldClass: 'css1',
                        newClass: 'js1',
                    },
                    ease: Power1.easeIn,
                },
                '#line1',
            )
            .to(
                '.css4js',
                1.5,
                {
                    text: { value: `${wishes} `, newClass: 'jsbig' },
                    ease: Power1.easeOut,
                },
                '#line2',
            )
            .to('.css4js', 0.5, { text: '', ease: Power1.easeOut })
            .to(wishanimation, 1.5, { autoAlpha: 1 }, '-=0.5')
            .to(wishanimation, 1.5, { autoAlpha: 0 })
            .to(
                '.css4js',
                1.5,
                {
                    text: {
                        value: `  The Time is  ${currentTime} `,
                        oldClass: 'css4j',
                        newClass: 'jsbig',
                    },
                    ease: Power1.easeOut,
                },
                '#line3',
            )
            .to(
                '.css4js',
                1.5,
                {
                    text: {
                        value: `  Its   ${currentDay}  `,
                        newClass: 'jsbig',
                    },
                    ease: Power1.easeIn,
                },
                '#line4',
            )
            .to('.css4js', 1.5, {
                text: { value: `  The   ${currentDate} `, newClass: 'jsbig' },
                ease: Power1.easeIn,
            })
            .to('.css4js', 1.5, {
                text: { value: ` of ${currentMonth}  `, newClass: 'jsbig' },
                ease: Power1.easeIn,
            })
            .to('.css4js', 1.5, {
                text: { value: ` ${currentYear}`, newClass: 'jsbig' },
                ease: Power1.easeIn,
            })
            .to('.css4js', 1.5, { text: '', ease: Power1.easeIn });
        return s3;
    };

    $('.skills3').click(() => {
        $('.skills3').toggleClass('active');
        if ($('.skills3').hasClass('active')) {
            s3 = gets3Timeline().play().timeScale(1);
            skillRunning = s3;
        } else {
            s3.reverse('#line2').timeScale(2); // ------------ starts in reverse at #line2 at 2x speed
        }
    });

    let s4 = new TimelineMax({ paused: true });
    gets4Timeline = () => {
        s4.progress(0).clear(); // --------get rid of tween in previous version of timeline
        s4.fromTo('.skills4', 0.5, { scale: 1 }, { ease: Power4.easeIn, scale: 1.1, zIndex: 100 })
            .set($('.allskills').not('.skills4'), { pointerEvents: 'none' })
            .set('.cssh2', { autoAlpha: 0 })
            .to('.nonhtml5', 0.25, { margin: '-7% 0 0 0' })
            .fromTo(
                $('.allskills').not('.skills4'),
                0.1,
                { filter: 'blur(0rem)' },
                { filter: 'blur(0.3rem)' },
                '-=0.25',
            )
            .set('.cssh2', {
                text: {
                    value: ' import  <span class="reacth1">  React, { Component }  </span>  from  <span class="reacth1">  "react" </span>; <br>  import  <span class="reacth1">  SkillsContent </span> from <span class="reacth1">" ./SkillsContent " </span>; ',
                },
                ease: Power1.easeOut,
            })
            .to('.cssh2', 0.5, { autoAlpha: 1 })
            .set('.css1, .css2 ,.css3 ,.css4', { autoAlpha: 0 })
            .set('.css1, .css2, .css3, .css4', { text: '   <br>', ease: Power1.easeIn }, '-=1')
            .set('.css1', {
                text: {
                    value: ' render() { <br>  return ( <br> <span class="react2"> < div className = "skillsContentGrid" > </span> <br> ',
                },
                ease: Power1.easeIn,
            })
            .to('.css1', 0.5, { autoAlpha: 1 })
            .set('.css4js', {
                text: {
                    value: '<span class="react3"> < <b>SkillsContent</b> content = { this.state.currentContent } /> </span>',
                    oldClass: 'css4js',
                    newClass: 'react1',
                },
                ease: Power1.easeIn,
            })
            .to('.css4js', 0.5, { autoAlpha: 1 })
            .set('.css2', {
                text: {
                    value: ' <span class="react2"> <br> < / div > </span> <br>',
                },
                ease: Power1.easeIn,
            })
            .to('.css2', 0.5, { autoAlpha: 1 })
            .set('.css3', {
                text: { value: ' <span class="react2"> )  </span> <br>' },
                ease: Power1.easeIn,
            })
            .to('.css3', 0.5, { autoAlpha: 1 })
            .set('.css4', { text: { value: ' } <br>' }, ease: Power1.easeIn })
            .to('.css4', 0.5, { autoAlpha: 1 });
        return s4;
    };

    $('.skills4').click(() => {
        $('.skills4').toggleClass('active');
        if ($('.skills4').hasClass('active')) {
            s4 = gets4Timeline().play().timeScale(1);
            skillRunning = s4;
        } else {
            s4.reverse(0).timeScale(3); // starts in reverse at 1.5x speed
        }
    });

    let s5 = new TimelineMax({ paused: true });
    gets5Timeline = () => {
        s5.progress(0).clear(); // get rid of tween in previous version of timeline
        s5.fromTo('.skills5', 0.5, { scale: 1 }, { ease: Power4.easeIn, scale: 1.1, zIndex: 100 })
            .set($('.allskills').not('.skills5'), { pointerEvents: 'none' })
            .fromTo(
                $('.allskills').not('.skills5'),
                0.1,
                { filter: 'blur(0rem)' },
                { filter: 'blur(0.3rem)' },
                '-=0.25',
            )
            .to('.cssh2', 1, { text: 'nodeExample.js', ease: Power1.easeOut })
            .to('.css1, .css2, .css3, .css4', 0.25, {
                autoAlpha: 0,
                ease: Power1.easeIn,
            })
            .to(
                '.css1, .css2, .css3, .css4',
                0.1,
                { text: { value: ' ' }, ease: Power1.easeIn },
                '#line1',
            )
            .to('.css4n', 2, {
                text: { value: ' npm init' },
                ease: Power1.easeIn,
            })
            .to('.css4n', 2, {
                text: { value: ' npm install lodash --save' },
                ease: Power1.easeIn,
            })
            .to('.css4n', 2, {
                text: { value: ' npm install moment --save ' },
                ease: Power1.easeIn,
            })
            .to('.css4n', 2, {
                text: { value: ' console.log (moment().format("hh:mm:ss"))' },
                ease: Power1.easeIn,
            })
            .to('.css4n', 2, {
                text: { value: ' console.log (_.camelCase("why-so-serious")' },
                ease: Power1.easeIn,
            })
            .to('.css4n', 2, {
                text: { value: ' $ node nodeExample.js' },
                ease: Power1.easeIn,
            });
        return s5;
    };

    $('.skills5').click(() => {
        $('.skills5').toggleClass('active');
        if ($('.skills5').hasClass('active')) {
            s5 = gets5Timeline().play().timeScale(1);
            skillRunning = s5;
            setTimeout(() => {
                // eslint-disable-next-line no-console
                console.log('Node server:-');
                console.log(currentTime);
                console.log('WhySoSerious');
            }, 7000);
        } else {
            s5.reverse('#line1'); // starts in reverse at 1.5x speed
        }
    });

    // BootStrap skill
    let s6 = new TimelineMax({ paused: true });
    gets6Timeline = () => {
        s6.progress(0).clear(); // get rid of tween in previous version of timeline
        s6.set('.html5body', { xPercent: -100 })
            .set('.html5', { xPercent: -100 })
            .fromTo('.skills6', 0.5, { scale: 1 }, { ease: Power4.easeIn, scale: 1.1, zIndex: 100 })
            .set($('.allskills').not('.skills6'), { pointerEvents: 'none' })
            .fromTo(
                $('.allskills').not('.skills6'),
                0.1,
                { filter: 'blur(0rem)' },
                { filter: 'blur(0.3rem)' },
                '-=0.25',
            )
            // .fromTo('.nonhtml5', 0.5, {margin:'0% 0% 0% 0%'}, {margin:'0 0 0 10%'})
            .to('.nonhtml5', 0.5, { margin: '2% 0 0 10%' })
            .to('.bs1', 0.01, {
                text: {
                    value: '<i>< h2 class = "text-center font-weight-bold" ></i>',
                },
            })
            // .to('.bs2', 0.01, {text: {value:'<i>< / h2 ></i>'}})
            .to('.bs3', 0.01, {
                text: { value: '<i>< p class = "border border-warning" ></i>' },
            })
            .fromTo('.html5body', 0.5, { xPercent: -100 }, { autoAlpha: 1, xPercent: 0 })
            .fromTo(
                '.html5',
                0.5,
                { xPercent: -100 },
                { autoAlpha: 1, xPercent: 0, marginLeft: '5%' },
            )
            .to('.cssh2', 0.5, { autoAlpha: 0 })
            .to('.cssh2', 0.1, { textAlign: 'center', fontWeight: '900' })
            .to('.cssh2', 0.5, { autoAlpha: 1 })
            .to('.bs4', 0.5, { border: '1px solid #ffd000' });

        return s6;
    };

    $('.skills6').click(() => {
        $('.skills6').toggleClass('active');
        if ($('.skills6').hasClass('active')) {
            s6 = gets6Timeline().play().timeScale(1);
            skillRunning = s6;
        } else {
            s6.reverse().timeScale(5);
        }
    });
    // Mongo skill
    const s7 = new TimelineMax({ paused: true });
    gets7Timeline = () => {
        s7.progress(0).clear(); // get rid of tween in previous version of timeline
        s7.fromTo('.skills7', 0.5, { scale: 1 }, { ease: Power4.easeIn, scale: 1.1, zIndex: 100 })
            .set($('.allskills').not('.skills7'), { pointerEvents: 'none' })
            .fromTo(
                $('.allskills').not('.skills7'),
                0.1,
                { filter: 'blur(0rem)' },
                { filter: 'blur(0.3rem)' },
                '-=0.25',
            )
            .to('.css1, .css2, .css3, .css4', 0.25, {
                autoAlpha: 0,
                ease: Power1.easeIn,
            })
            .to(
                '.css1, .css2, .css3, .css4',
                0.1,
                { text: { value: ' ' }, ease: Power1.easeIn },
                '#line1',
            )
            .to('.css4n', 2, {
                text: { value: 'Just for Fun' },
                ease: Power1.easeIn,
            })
            .to(
                '.css4n',
                2,
                {
                    text: { value: 'Storing your Time of Visit on database' },
                    ease: Power1.easeIn,
                },
                '+=2',
            )
            .to(
                '.css4n',
                2,
                {
                    text: { value: 'Look at console for details' },
                    ease: Power1.easeIn,
                },
                '+=2',
            );
        return s7;
    };

    $('.skills7').click(() => {
        $('.skills7').toggleClass('active');
        if ($('.skills7').hasClass('active')) {
            s8 = gets7Timeline().play().timeScale(1);
            skillRunning = s7;
            locals = JSON.parse(localStorage.getItem('times')) || [];
            locals.push(moment().format('h:mm:ss a, Do MMMM YYYY'));
            localStorage.setItem('times', JSON.stringify(locals));
            console.log(
                `Not a database its just localStorage, you have clicked Mongo ${locals.length} times on :`,
            );
            // eslint-disable-next-line no-restricted-syntax
            for (const k in locals) {
                console.log(`${k}. ${locals[k]}`);
            }
        } else {
            s7.reverse().timeScale(5);
        }
    });

    // Express skill
    let s8 = new TimelineMax({ paused: true });
    gets8Timeline = () => {
        s8.progress(0).clear(); // get rid of tween in previous version of timeline
        s8.fromTo('.skills8', 0.5, { scale: 1 }, { ease: Power4.easeIn, scale: 1.1, zIndex: 100 })
            .set($('.allskills').not('.skills8'), { pointerEvents: 'none' })
            .fromTo(
                $('.allskills').not('.skills8'),
                0.1,
                { filter: 'blur(0rem)' },
                { filter: 'blur(0.3rem)' },
                '-=0.25',
            )
            .to('.css1, .css2, .css3, .css4', 0.25, {
                autoAlpha: 0,
                ease: Power1.easeIn,
            })
            .to(
                '.css1, .css2, .css3, .css4',
                0.1,
                { text: { value: ' ' }, ease: Power1.easeIn },
                '#line1',
            )
            .to('.css4n', 2, {
                text: { value: 'Server is Running' },
                ease: Power1.easeIn,
            })
            .to(
                '.css4n',
                2,
                {
                    text: { value: 'Someone is Listening on Port 8080' },
                    ease: Power1.easeIn,
                },
                '+=2',
            )
            .to(
                '.css4n',
                2,
                {
                    text: { value: 'Lets hope they are friendly ;)' },
                    ease: Power1.easeIn,
                },
                '+=2',
            );
        return s8;
    };

    $('.skills8').click(() => {
        $('.skills8').toggleClass('active');
        if ($('.skills8').hasClass('active')) {
            s8 = gets8Timeline().play().timeScale(1);
            skillRunning = s8;
        } else {
            s8.reverse().timeScale(5);
        }
    });

    // <#############################################------ABOUT - BOTTOM SECTION--------################################################################>
    // <#############################################------ABOUT - BOTTOM SECTION--------################################################################>
    // <#############################################------ABOUT - BOTTOM SECTION--------################################################################>

    // about button and bottom section
    const scrollAboutSpan1 = $('.aboutContent > p > span.span1');
    const ta = new TimelineMax({
        paused: true,
        onComplete: aboutText,
        onCompleteParams: [false],
        onReverseComplete: aboutText,
        onReverseCompleteParams: [true],
    })
        .set('div#bottomSectionContainer , .aboutTransitionHelper', {
            display: 'block',
        })
        .set('.backgroundWrapper', { backgroundColor: '#0f1214' })
        .to('div.aboutContainer', 0.1, { color: 'black', zIndex: 203 })
        .fromTo(
            '.aboutTransitionHelper',
            0.75,
            { yPercent: '101', autoAlpha: 1 },
            { yPercent: '0' },
        )
        .fromTo(
            'div.aboutContainer',
            0.55,
            { top: () => '', bottom: 0 },
            { top: () => 0, bottom: '' },
        )
        .fromTo(
            'div#bottomSectionContainer',
            0.75,
            { yPercent: '100', autoAlpha: 1 },
            { yPercent: '0' },
        )
        .to('div.aboutContainer', 0.1, { color: '#ffd000' }, '-=0.25')
        .to('div.aboutContainer', 0.1, { backgroundColor: '#0f1214' })
        .to('.main-logo-ab', 0.25, { opacity: 1 })
        .fromTo(
            '.aboutImg-container > img',
            1,
            { yPercent: '-150' },
            { yPercent: '0', ease: Power1.easeOut },
        )
        .staggerFromTo(
            '.about-img-text > p',
            0.8,
            { yPercent: '-200', autoAlpha: 0 },
            { yPercent: '0', autoAlpha: 1, ease: Power1.easeOut },
            -0.4,
        )
        .to('.backgroundWrapper', 1, { autoAlpha: 0 })
        .set('.backgroundWrapper', { backgroundColor: 'none' })
        .fromTo('.aboutContent > p', 0.2, { autoAlpha: 0 }, { autoAlpha: 1 });

    $('div.aboutContainer').click(() => {
        if (!ta.isActive()) {
            $('div#bottomSectionContainer').toggleClass('goup');
            if ($('div#bottomSectionContainer').hasClass('goup')) {
                ta.play().timeScale(2);
            } else {
                ta.reverse().timeScale(4);
                setTimeout(() => {
                    tap.progress(0);
                }, 1000);
            }
        }
    });

    const tap = new TimelineMax({ paused: true, repeat: -1 })

        .staggerFromTo(
            scrollAboutSpan1,
            1,
            { autoAlpha: 0, x: '-50%', y: '40%' },
            { autoAlpha: 1, y: '0%' },
            3,
            '#span1',
        )
        .staggerTo(scrollAboutSpan1, 0.5, { autoAlpha: 0, y: '-20%' }, 3, '#span1+=2.8')

        .set('.backgroundWrapper', { backgroundImage: 'url(./assets/aboutImages/2.jpg)' }, '-=1')
        .to('.backgroundWrapper', 0.5, { autoAlpha: 1 })
        .fromTo(
            '.aboutContent > p > span.span2',
            1,
            { autoAlpha: 0, xPercent: '-50%', yPercent: '40' },
            { autoAlpha: 1, yPercent: '0' },
        )
        .to('.aboutContent > p > span.span2', 0.5, { autoAlpha: 0, yPercent: '-20' }, '+=1')

        .set('.aboutWrapper', { backgroundImage: 'url(./assets/aboutImages/3.jpg)' }, '-=1')
        .to('.backgroundWrapper', 0.5, { autoAlpha: 0 })
        .fromTo(
            '.aboutContent > p > span.span3',
            1,
            { autoAlpha: 0, xPercent: '-50%', yPercent: '40' },
            { autoAlpha: 1, yPercent: '0' },
        )
        .to('.aboutContent > p > span.span3', 0.5, { autoAlpha: 0, yPercent: '-20' }, '+=1')

        .set('.backgroundWrapper', { backgroundImage: 'url(./assets/aboutImages/4.jpg)' }, '-=1')
        .to('.backgroundWrapper', 0.5, { autoAlpha: 1 })
        .fromTo(
            '.aboutContent > p > span.span4',
            1,
            { autoAlpha: 0, xPercent: '-50%', yPercent: '40' },
            { autoAlpha: 1, yPercent: '0' },
        )
        .to('.aboutContent > p > span.span4', 0.5, { autoAlpha: 0, yPercent: '-20' }, '+=1')

        .set('.aboutWrapper', { backgroundImage: 'url(./assets/aboutImages/5.jpg)' }, '-=1')
        .to('.backgroundWrapper', 0.5, { autoAlpha: 0 })
        .fromTo(
            '.aboutContent > p > span.span5',
            1,
            { autoAlpha: 0, xPercent: '-50%', yPercent: '40' },
            { autoAlpha: 1, yPercent: '0' },
        )
        .to('.aboutContent > p > span.span5', 0.5, { autoAlpha: 0, yPercent: '-20' }, '+=1')

        .set('.backgroundWrapper', { backgroundImage: 'url(./assets/aboutImages/6.jpg)' }, '-=1')
        .to('.backgroundWrapper', 0.5, { autoAlpha: 1 })
        .fromTo(
            '.aboutContent > p > span.span6',
            1,
            { autoAlpha: 0, xPercent: '-50%', yPercent: '40' },
            { autoAlpha: 1, yPercent: '0' },
        )
        .to('.aboutContent > p > span.span6', 0.5, { autoAlpha: 0, yPercent: '-20' }, '+=1')

        .set('.aboutWrapper', { backgroundImage: 'none' }, '-=1')
        .to('.backgroundWrapper', 0.5, { autoAlpha: 0 })
        .set('.backgroundWrapper', {
            backgroundImage: 'none',
            backgroundColor: '#0f1214',
        })
        .to('.backgroundWrapper', 0.5, { autoAlpha: 1 }, '-=0.5')
        .fromTo(
            '.aboutContent > p > span.span7',
            1,
            { autoAlpha: 0, xPercent: '-50%', yPercent: '40' },
            { autoAlpha: 1, yPercent: '0' },
        )
        .to('.aboutContent > p > span.span7', 0.5, { autoAlpha: 0, yPercent: '-20' }, '+=1')

        .set('.aboutWrapper', { backgroundImage: 'url(./assets/aboutImages/1.jpg)' }, '+=1')
        .to('.backgroundWrapper', 0.5, { autoAlpha: 0 });

    function aboutText(isreversed) {
        // if any of the skills have class active meaning they are running so value will be true
        if (isreversed) {
            tap.reverse(1).timeScale(2);
        } else {
            allActiveTimelines.push(tap);
            tap.play().timeScale(1.5);
        }
    }
});
