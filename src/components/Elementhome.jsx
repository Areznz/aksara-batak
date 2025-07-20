import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import {motion } from "framer-motion"
import overlay22 from '../assets/overlay22.png'


const Elementhome = () => {

  const containerBg1 = useRef()
  const containerBg2 = useRef()
  const containerBg3 = useRef()
  const containerBg4 = useRef()
  const containerBg5 = useRef()
  const textBg1 = useRef() 
  const textBg2 = useRef() 
  const bg1 = useRef()
  const bg2 = useRef()
  const bg3 = useRef()
  const { innerHeight } = window;
  const isMobile = window.innerWidth < 640;

  useEffect(() => {
    const ctx = gsap.context(() => {

        gsap.fromTo(
        bg1.current,
        {
          x: isMobile ? 30 : 450,
          width: "0px", // nilai awal
        },
        {
          x: isMobile ? -200 : -800,
          width: isMobile ? "350px" : "500px", // nilai akhir
          duration: 3,
          scrollTrigger: {
            trigger: containerBg1.current,
            start: "top top",
            end: `+=${innerHeight * 6}`,
            scrub: 1,
            pin: true,
            markers: false,
          },
        }
      );
      
  gsap.fromTo(
  bg2.current,
  {
    x: -290,
    width: "0px",
  },
  {
    x: 970,
    width: "500px",
    duration: 3,
    scrollTrigger: {
      trigger: containerBg2.current,
      start: "top top",
      end: `+=${innerHeight * 6}`,
      scrub: 1,
      pin: true,
      markers: false,
    },
  }
);

  gsap.fromTo(bg3.current, 
    {
      scale: 0,
    },
    {
      scale: 10,
       delay: 1,
      duration: 30,
      scrollTrigger: {
        trigger: containerBg3.current,
        start: "top top",
        end: `+=${innerHeight * 6}`,
        scrub: 2,
        pin: true,
        markers: false,
      }
    }
  )
  
  gsap.fromTo(textBg1.current, 
    {
      x:-100,
      scale: 2,
      y:-100,
      
    },
    {
      
      x:1000,
      scale: 2,
      y:-100,
       delay: 1,
      duration: 30,
      scrollTrigger: {
        trigger: containerBg4.current,
        start: "top top",
        end: `+=${innerHeight * 6}`,
        scrub: 1,
        pin: true,
        markers: false,
      }
    }
  )
  
  gsap.fromTo(textBg2.current, 
    {
      x:100,
      scale: 2,
      
    },
    {
      x:-1000,
      scale: 2,
      
       delay: 1,
      duration: 30,
      scrollTrigger: {
        trigger: containerBg5.current,
        start: "top top",
        end: `+=${innerHeight * 6}`,
        scrub: 2,
        pin: true,
        markers: false,
      }
    }
  )
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
        <div className="fixed top-0 left-0 w-full h-screen  z-0 flex">
          <div ref={containerBg5} className="flex items-start w-screen h-screen">
            <div ref={textBg2} className="w-[100%]"><h1 className="text-[120px] opacity-25 bg-gradient-to-br from-[#eaa28b] via-[#eb965e] to-[#3a0d05]  bg-clip-text text-transparent leading-none">ᯘᯮᯂᯮᯖᯉ᯲ᯉᯉ᯲ᯐᯬᯔ᯲ᯅᯤᯇᯪᯂ᯲᯾</h1></div>
          </div>
        </div>
        <div className="fixed top-0 left-0 w-full h-screen  z-0 flex">
          <div ref={containerBg4} className="flex items-end  w-screen h-screen">
            <div ref={textBg1} className="w-[100%]"><h1 className="text-[120px] opacity-25 bg-gradient-to-br from-[#eaa28b] via-[#eb965e] to-[#3a0d05]  bg-clip-text text-transparent leading-none">ᯘᯮᯂᯮᯖᯉ᯲ᯉᯉ᯲ᯐᯬᯔ᯲ᯅᯤᯇᯪᯂ᯲᯾</h1></div>
          </div>
        </div>
        <div className="fixed top-0 left-0 w-full h-screen  z-0 flex">
          <div ref={containerBg3} className="flex items-center justify-center w-screen h-screen ">
            <div ref={bg3} className="w-24 h-24  rounded-full  blur-sm opacity-0 bg-gradient-to-br from-[#eaa28b] via-[#c54331] to-[#3a0d05] "></div>
          </div>
        </div>

        <div className="fixed top-0 left-0 w-full h-screen  z-10 flex">
          <div ref={containerBg1} className="flex items-center justify-center w-screen h-screen ">
            <div ref={bg1} className="md:w-[0px] md:h-[960px] w-[100px] h-[960px] bg-gradient-to-br from-[#ffebde] via-[#bd2318] to-[#200101] overflow-hidden">
                <img src={overlay22} alt="" className=" h-full w-full" />
                </div>
          </div>
          <div ref={containerBg2} className="flex items-center justify-center w-screen h-screen ">
            <div ref={bg2} className="md:w-[0px] md:h-[960px] w-[100px] h-[960px] bg-gradient-to-br from-[#ffebde] via-[#bd2318] to-[#200101]">
                <img src={overlay22} alt="" className=" h-full w-full" />
            </div>
          </div>
        </div>
    </>
  )
}

export default Elementhome