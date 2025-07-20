import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Opening from "../components/Opening";
import Background from "../components/Background";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const container2Ref = useRef();
  const section2Ref = useRef();
  const { innerHeight } = window;
  const isMobile = window.innerWidth < 640;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        container2Ref.current,
        { scale: 0.8, y: 60 ,filter: "blur(5px)", borderRadius: "200px" },
        {
          scale: 1,
          y: 0,
          
          duration: 1,
          borderRadius: "0px",
          filter: "blur(0px)",
          
          scrollTrigger: {
            trigger: section2Ref.current, // Gunakan wrapper section
            start: "top 60%",            // Saat section mulai masuk viewport
            end: "top top",
            scrub: 1.5,
            markers: false,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className=" bg-gradient-to-br from-[#ffebde] via-[#bd2318] to-[#200101] overflow-x-hidden w-full">

      
        <Background/>
        <Opening className="z-0 inset-0"/>
      

      
      <div ref={section2Ref} className="relative z-10">
        <div
          ref={container2Ref}
          className="flex-col w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#ffebde] via-[#bd2318] to-[#3a0606]  text-white text-5xl font-cinzel text-center"
        >
          <h1>Selamat Datang di...</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
