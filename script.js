TweenMax.fromTo('#kepalaheri', 0.8, {rotation: -1, transformOrigin: '100% 100%', repeat: -1, yoyo: true}, {rotation: 1, transformOrigin: '100% 100%', repeat: -1, yoyo: true});
TweenMax.fromTo('#kepaladewi', 0.6, {rotation: -3, transformOrigin: '100% 100%', repeat: -1, yoyo: true}, {rotation: 1, transformOrigin: '100% 100%', repeat: -1, yoyo: true});
TweenMax.fromTo('#bunga1', 0.6, {rotation: -3, transformOrigin: '100% 100%', repeat: -1, yoyo: true}, {rotation: 3, transformOrigin: '100% 100%', repeat: -1, yoyo: true});
TweenMax.fromTo('#bunga2', 0.7, {rotation: -3, transformOrigin: '100% 100%', repeat: -1, yoyo: true}, {rotation: 3, transformOrigin: '100% 100%', repeat: -1, yoyo: true});
TweenMax.fromTo('#bunga3', 0.4, {rotation: -3, transformOrigin: '100% 100%', repeat: -1, yoyo: true}, {rotation: 3, transformOrigin: '100% 100%', repeat: -1, yoyo: true});
TweenMax.fromTo('#bunga4', 0.3, {rotation: -3, transformOrigin: '100% 100%', repeat: -1, yoyo: true}, {rotation: 3, transformOrigin: '100% 100%', repeat: -1, yoyo: true});
TweenMax.fromTo('#bunga5', 0.5, {rotation: -3, transformOrigin: '100% 100%', repeat: -1, yoyo: true}, {rotation: 3, transformOrigin: '100% 100%', repeat: -1, yoyo: true});
TweenMax.fromTo('#kakikiridewi', 0.5, {rotation: -5, transformOrigin: '100% 100%', repeat: -1, yoyo: true}, {rotation: 5, transformOrigin: '100% 100%', repeat: -1, yoyo: true});
TweenMax.fromTo('#kakikanandewi', 0.6, {rotation: -5, transformOrigin: '100% 100%', repeat: -1, yoyo: true}, {rotation: 5, transformOrigin: '100% 100%', repeat: -1, yoyo: true});
TweenMax.fromTo('#kakikananheri', 0.5, {rotation: -3, transformOrigin: '100% 100%', repeat: -1, yoyo: true}, {rotation: 6, transformOrigin: '100% 100%', repeat: -1, yoyo: true});
TweenMax.fromTo('#kakikiriheri', 0.4, {rotation: -3, transformOrigin: '100% 100%', repeat: -1, yoyo: true}, {rotation: 6, transformOrigin: '100% 100%', repeat: -1, yoyo: true});

var katakata = {
  slides: document.querySelectorAll('#dialog'),
  list: document.querySelector('#cerita'),
  duration: 1,
  lineHeight: 104
}

var vSlide = gsap.timeline({
  paused: true,
  repeat: -1
});

katakata.slides.forEach(function(slide, i) {
  let label = "slide" + i;
  vSlide.add(label);
  
  vSlide.to(katakata.list, {
    duration: katakata.duration,
    y: i * -1 * katakata.lineHeight
  }, label);

 vSlide.to({}, {duration: 3});
})

vSlide.play();

