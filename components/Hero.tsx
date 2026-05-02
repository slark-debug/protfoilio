'use client'

import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Pavan Kumar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          AI/ML Engineer & Data Scientist specializing in machine learning, deep learning, and scalable AI solutions
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#about"
          className="inline-block bg-accent hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Explore My Work
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <FaArrowDown className="mx-auto text-2xl animate-bounce text-accent" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero