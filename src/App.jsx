import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Belajar from './pages/Belajar';
import Home from './pages/Home';
import Pengenalan from './pages/Pengenalan';
import Teks from './pages/Teks';
import Latihan from './pages/Latihan';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion';

import './App.css'


function AppWrapper() {

const location = useLocation()

  return (
    <>
    <Navbar />
      <AnimatePresence mode='wait'>
        <motion.div 
          key={location.pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >

            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/pengenalan" element={<Pengenalan />} />
              <Route path="/belajar" element={<Belajar />} />
              <Route path="/latihan" element={<Latihan />} />
              <Route path="/teks" element={<Teks />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </motion.div>
      </AnimatePresence>
    
    
    </>
  )
}

function App() {
 

  return (
    <>
      <Router>
        <AppWrapper/>
      </Router>
    </>
  )
}

export default App
