import { gsap } from "gsap";
/*------------------------------
Register plugins
------------------------------*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


/*------------------------------
Init ScrollSmoother
------------------------------*/
const scrollerSmoother = ScrollSmoother.create({
  content: '#content',
  wrapper: '#wrapper',
  smooth: true,
  effects: false,
  normalizeScroll: true
})

const tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.accordions',
      pin: true,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      ease: 'linear',
    }
})

tl.to('.accordion .text', {
  height: 0,
  paddingBottom: 0,
  opacity: 0,
  stagger: .5,
})
tl.to('.accordion', {
  marginBottom: -15,
  stagger: .5,
}, '<')
