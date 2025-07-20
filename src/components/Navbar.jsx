import { Link, useLocation  } from "react-router-dom"
import '../App.css'
import { useEffect, useState, useRef } from "react"

import { gsap } from "gsap"
import { motion, AnimatePresence } from "framer-motion"
import MenuNav from "./MenuNav"

const pageData = [
  {page: "Home", path: "/"},
  {page: "Pengenalan", path: "/pengenalan"},
  {page: "Belajar", path: "/belajar"},
  {page: "Quiz", path: "/latihan"},
  {page: "Teks", path: "/teks"},
  {page: "Tentang", path: "/about"},
]

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const location = useLocation()
  const container = useRef()
  const MotionLink = motion(Link)

  useEffect(() => {
    setShowNav(false)
  }, [location.pathname])

  return (
    <div className="nav fixed z-100 flex justify-between w-full overflow-x-hidden" ref={container}>
      

        <div className="flex w-screen h-screen justify-end ">

          {!showNav && showButton && (

            <div>
              <button onClick={() => {
                setShowNav(true)
                setShowButton(false)
              }} 
                
                className="bg-white text-black m-8"
                >Show Navbar</button>
            </div>
          )}
        
        </div>
        <div className="nav-item flex space-x-8">
        
        <AnimatePresence mode="wait" onExitComplete={() => setShowButton(true)}>
          
          {showNav && (

            <motion.div className="flex relative w-screen h-screen ">
              <motion.div 
                  initial={{scaleY: 0}}
                  animate={{scaleY: 1}}
                  exit={{scaleY: 0}}
                  transition={{duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99]}}
                  className="bg-rose-600 inset-0 absolute z-0 w-screen h-screen origin-top opacity-90 overflow-hidden"/>
                <div className="flex w-screen h-screen relative z-10 overflow-hidden">
                  
                  
                    
                      <motion.div 
                      
                      
                          initial={{scaleX: 0}}
                          animate={{scaleX: 1}}
                          exit={{scaleX: 0}}
                          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                          className="m-20">

                        <Link 
                            className='font-medium text-2xl ' to='/'
                            >AREZNZ
                        </Link>
                   
                      </motion.div>
                  
                  
                  <div className="mt-30 ml-30">
                  {pageData.map(({ page, path }, index) => (
                        <motion.div
                            key={path}
                            initial={{ scaleY: 0}}
                            animate={{ scaleY: 1 }}
                            exit={{ scaleY: 0 }}
                            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                            className="font-anton text-[120px] leading-none origin-top"
                        >
                            <MenuNav page={page} path={path} className=""/>
                        </motion.div>
                        ))}
                  </div>
                </div>

                
                <motion.button 
                
                  initial={{scale: 0}}
                  animate={{scale: 1}}
                  exit={{scale: 0}}
                  whileHover={{scale: 1.2}}
                  transition={{duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99]}}
                  onClick={() => setShowNav(false)}
                  className="flex absolute z-10 items-start justify-end text-[100px] top-10 right-30 cursor-pointer origin-center"
                  > X</motion.button>
            </motion.div>

          )}
        </AnimatePresence>
          
        </div>
      
    </div>
  )
}

export default (Navbar)