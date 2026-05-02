'use client'

import { motion } from 'framer-motion'
import { FaPython, FaReact, FaDatabase, FaBrain, FaChartLine, FaCloud } from 'react-icons/fa'

const About = () => {
  const skills = [
    { icon: FaPython, name: 'Python', color: 'text-yellow-400' },
    { icon: FaBrain, name: 'Machine Learning', color: 'text-purple-400' },
    { icon: FaChartLine, name: 'Data Science', color: 'text-blue-400' },
    { icon: FaReact, name: 'React', color: 'text-cyan-400' },
    { icon: FaDatabase, name: 'Databases', color: 'text-green-400' },
    { icon: FaCloud, name: 'Cloud Computing', color: 'text-orange-400' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate AI/ML engineer with over 5 years of experience in developing cutting-edge machine learning solutions.
              Expertise spans from computer vision and natural language processing to scalable AI system architecture.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in transforming complex data into actionable insights, building robust ML pipelines,
              and deploying models that drive real-world impact across various industries.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300"
              >
                <skill.icon className={`text-4xl ${skill.color} mx-auto mb-2`} />
                <p className="text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About