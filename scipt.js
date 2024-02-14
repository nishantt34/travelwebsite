gsap.from(".nlink",{
stagger: .1,
y: 10 ,
duration: 3,
ease: Power3,
opacity: 0
})

gsap.to(".fleftelem",{
    scrollTrigger:{
        trigger:"#fimages",
        pin: true,
        start:"top top",
        end:"bottom bottom",
        endTrigger: ".last",
        scrub: 1    
    },
     y: "-300%" , 
     ease: Power1
  }) 


  let sections=document.querySelectorAll(".fleftelem");
  
  Shery.imageEffect(".images", {
    style: 1,
    config: {onMouse:{value:1}} ,
    slideStyle: (setScroll) => {
        sections.forEach(function (section ,index){
            ScrollTrigger.create({
                trigger: section,
                start:"top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress + index)
                },
            });
        });
    
    },
  });


Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .6,
  });
  Shery.makeMagnet(".magnet" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.hoverWithMediaCircle(".video" ,{videos: ["./1.mp4","./2.mp4", "./1.mp4"]
  });

 