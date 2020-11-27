
gsap.from('.logo', { duration: 1, opacity: 0, delay:0.2  })
gsap.from('.menu-item', { duration: 1, opacity: 0, delay:0.3  })
gsap.from('.image-into', { duration: 1.2, opacity: 0, x: '100%',  ease: "power4.inOut"})
gsap.from('.title-top', { duration: 1.2, opacity: 0, y: '-5%',  ease: "power4.inOut"})
gsap.from('.content-button', { duration: 1.2, opacity: 0, y:'100%',  ease: "power4.inOut"})

gsap.set(".menu", { yPercent: 0});

gsap.to(".menu", {
    yPercent: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".site-content",
    // markers:true,
      scrub: 1
    }, 
  });
gsap.from('.circle-play', { duration: 1, opacity: 0, delay:0.5  })
gsap.from('.cicle-text', { duration: 1, opacity: 0, delay:0.5  })

gsap.set(".image-into", { yPercent: -10});
gsap.to(".image-into", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: ".slider",
      scrub: 1
    }, 
  });
gsap.set(".title-top", { yPercent: -30});
gsap.to(".title-top", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
    trigger: ".slider",
    scrub: 2
    }, 
});
gsap.set(".content-button", { yPercent: -30});
gsap.to(".content-button", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
    trigger: ".slider",
    scrub: 1
    }, 
});

gsap.set(".circle-play", { yPercent: -5});
gsap.to(".circle-play", {
    yPercent: 5,
    ease: "none",
    scrollTrigger: {
      trigger: ".menu",
      scrub: 1
    }, 
  });










gsap.set(".sliding-text-1", { yPercent: 25, x:-700, });
gsap.to(".sliding-text-1", {
  yPercent: -5,
  x: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".content-images",
    scrub: 1,
  }, 
});
gsap.set(".sliding-text-2", { yPercent: 25, x:0, });
gsap.to(".sliding-text-2", {
  yPercent: -5,
  x:-500,
  ease: "none",
  scrollTrigger: {
    trigger: ".content-images",
    scrub: 2,
  }, 
});
gsap.set(".sliding-text-3", { yPercent: 25, x:-1000, });
gsap.to(".sliding-text-3", {
  yPercent: -5,
  x: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".content-images",
    scrub: 3,
  }, 
});






  

/* ------Burrowing Owl Sequence------  
gsap.from('.rudder', { duration: 1, opacity: 0, delay:1.4  })

gsap.set(".menu", { yPercent: 200});

gsap.to(".menu", {
    yPercent: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".site-content",
    // markers:true,
      scrub: 1
    }, 
  });

gsap.set(".text-slide", { yPercent: 30});

gsap.to(".text-slide", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".site-content",
    // markers:true,
      scrub: 1
    }, 
  });

  gsap.set(".divider-color", { yPercent: 30});

  gsap.to(".divider-color", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".content-images",
      // markers:true,
        scrub: 1
      }, 
    });

 
gsap.set(".getintouch-title", { xPercent: 100, });
gsap.to(".getintouch-title", {
    xPercent: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".experience",
      scrub: 1,
    }, 
  });

gsap.set(".rudder", { yPercent: 25, rotation:-90, });
gsap.set(".image-slider", { yPercent: -20});
gsap.set(".content-images", { yPercent: 5});

gsap.to(".rudder", {
  yPercent: -5,
  rotation: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".content-images",
    scrub: 1,
  }, 
});

gsap.to(".image-slider", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".content-images",
    scrub: 1
  }, 
});


gsap.to(".content-images", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".content-images",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});
*/


