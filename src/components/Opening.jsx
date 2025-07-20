import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import {motion } from "framer-motion"
import Elementhome from "./Elementhome";

const Opening = () => {
  const containerRef = useRef();
  
  const text0Ref = useRef();
  const text1Ref = useRef();
  const text2Ref = useRef();
  const text3Ref = useRef();

  const { innerHeight } = window;
  const isMobile = window.innerWidth < 640;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${innerHeight * 4}`,
          scrub: 1.5,
          pin:true,
          toggleActions: "restart none none reset",
          markers: false,
        },
      });

      tl.fromTo(
        text0Ref.current,
        { opacity: 1, y: isMobile ? 300 : 120, filter: "grayscale(0) blur(0px)" },
        { opacity: 1, y: isMobile ? 250 : 100, duration: 1 }
      ).to(text0Ref.current, {
        opacity: 0,
        duration: 1,
        filter: "grayscale(1) blur(5px)",
      });

      tl.fromTo(
        text1Ref.current,
        { autoAlpha: 0, y: isMobile ? 300 : 100,  filter: "grayscale(1) blur(5px)", scale: 3},
        { autoAlpha: 1, y: isMobile ? 240 : 70,  duration: 2, filter: "none", scale: 1.5}
      ).to(text1Ref.current, {
        opacity: 0,
        scale: 0,
        
        duration: 2,
        filter: "grayscale(1) blur(5px)",
      });

      tl.fromTo(
        text2Ref.current,
        { autoAlpha: 0, y: isMobile ? 110 : 100, filter: "grayscale(1) blur(5px)",  rotate: -5, scale: 3 },
        { autoAlpha: 1, y: isMobile ? 70 : -45, duration: 2, filter: "none",  rotate: 0, scale: 1.5 }
      ).to(text2Ref.current, {
        opacity: 0,
        rotate: 10,
        scale: 0,
        y: isMobile ? 20 : -100,
        duration: 3,
        filter: "grayscale(1) blur(5px)",
      });

      tl.fromTo(
        text3Ref.current,
        { autoAlpha: 0, y: isMobile ? -200 : -100, filter: "grayscale(1) blur(5px)" },
        { autoAlpha: 1, y: isMobile ? -250 : -150, duration: 1, filter: "none" }
      ).to(text3Ref.current, {
        opacity: 1,
        y: isMobile ? -250 : -170,
        duration: 1,
        filter: "grayscale(1) blur(5px)",
      });
      
       
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="relative w-full">

        <div
          ref={containerRef}
          className="relative flex-col w-full h-screen flex items-center z-30 justify-center [perspective:1000px]"
        >
          <h1
            ref={text0Ref}
            className="text-6xl md:text-[30px] text-[30px] md:w-[10%] w-[60%] text-[#fffae2] font-cinzel text-center"
          >
            Scroll <span className="md:text-[20px] text-[20px]">untuk </span> lanjut
          </h1>
          <motion.h1
            ref={text1Ref}
            className="text-glow text-6xl md:text-[90px] text-[#fffae2] font-young text-center"
          >
            .AKSARA BATAK.
          </motion.h1>
          <h1
            ref={text2Ref}
            className="text-6xl text-[#F0EAD6] md:w-[50%] font-young text-center"
          >
            …jejak <span className="text-4xl">yang</span> tertulis <span className="text-4xl">dari</span> lidah para leluhur.
          </h1>
          <h1
            ref={text3Ref}
            className="text-6xl text-[#fffae2] font-young text-center md:w-[40%]"
          >
            Lebih <span className="text-4xl">dari</span> huruf, <span className="text-4xl">ini</span> adalah identitas.
          </h1>
        </div>

        
        <Elementhome/>

      </div>
    </>
  )
}

export default Opening