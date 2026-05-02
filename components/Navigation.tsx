'use client'

import { motion } from 'framer-motion'
import { FaBars } from 'react-icons/fa'

const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-gray-800 bg-opacity-90 backdrop-blur-sm z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-accent">PK</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero" className="hover:text-accent transition-colors duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-accent transition-colors duration-300">About</a></li>
          <li><a href="#projects" className="hover:text-accent transition-colors duration-300">Projects</a></li>
          <li><a href="#experience" className="hover:text-accent transition-colors duration-300">Experience</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors duration-300">Contact</a></li>
        </ul>
        <FaBars className="md:hidden text-xl cursor-pointer" />
      </div>
    </motion.nav>
  )
}

export default Navigation