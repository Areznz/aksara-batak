import { gsap } from "gsap"
import { motion, AnimatePresence } from "framer-motion"

import { Link } from "react-router-dom";

const MenuNav = ({page, path}) => {

  const MotionLink = motion(Link);
  
  return (
    <>
        <MotionLink to={path}>{page}</MotionLink>
    </>
  )
}

export default MenuNav