TweenMax.to('.block-1',2,{
    x: '-180',
    y: '-180',
    scale: 2.4,
    ease: Expo.easeInOut
});

TweenMax.to('.block-2',1.6,{
    x: '-180',
    y: '200',
    scale: 1.2,
    ease: Expo.easeInOut
});

TweenMax.to('.block-3',1,{
    x: '180',
    y: '-240',
    scale: 1.6,
    ease: Expo.easeInOut
});

TweenMax.to('.block-4',2,{
    x: '280',
    y: '240',
    scale: .8,
    ease: Expo.easeInOut
});

TweenMax.to('.box', 2.4,{
    y: '-100',
    ease: Expo.easeInOut
});

TweenMax.from('.shape_circle-1', 2.4, {
    scale: 0,
    ease: Expo.easeInOut
});

TweenMax.from('.shape_circle-2', 2.6, {
    scale: 0,
    ease: Expo.easeInOut
})

TweenMax.from('.shape_circle-3', 2.8, {
    scale: 0,
    ease: Expo.easeInOut
});

TweenMax.from('.image', 1.6,{
    scale: 1.5,
    ease: Expo.easeInOut
});

TweenMax.from('nav > div', 1.6,{
    scale: 0,
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut
})

TweenMax.from('.center_logo', 1.6,{
    scale: 0,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});

TweenMax.from('.showreel', 1.6,{
    scale: 0,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom('.site_menu > li', 1, {
    opacity: 0, 
    y: 40,
    ease: Power2.easeInOut
}, .2);