'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaCertificate } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      type: 'experience',
      title: 'Senior AI/ML Engineer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of AI-powered analytics platform. Architected ML pipelines processing 1M+ data points daily. Mentored junior engineers and collaborated with cross-functional teams.',
      achievements: ['Increased model accuracy by 25%', 'Reduced processing time by 40%', 'Led team of 5 engineers']
    },
    {
      type: 'experience',
      title: 'Machine Learning Engineer',
      company: 'DataCorp Solutions',
      period: '2020 - 2022',
      description: 'Developed and deployed computer vision models for automated quality inspection. Implemented MLOps practices and CI/CD pipelines for ML models.',
      achievements: ['Deployed 10+ production models', 'Improved inspection accuracy to 98%', 'Reduced manual inspection costs by 60%']
    },
    {
      type: 'certification',
      title: 'AWS Certified Machine Learning - Specialty',
      issuer: 'Amazon Web Services',
      period: '2023',
      description: 'Advanced certification demonstrating expertise in building, training, and deploying ML models on AWS.'
    },
    {
      type: 'certification',
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      period: '2022',
      description: 'Professional certification validating skills in TensorFlow development and deployment.'
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Experience & Certifications
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.type === 'experience' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${item.type === 'experience' ? 'bg-accent' : 'bg-blue-600'}`}>
                  {item.type === 'experience' ? <FaBriefcase className="text-white" /> : <FaCertificate className="text-white" />}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-accent font-medium mb-2">
                    {item.company || item.issuer} | {item.period}
                  </p>
                  <p className="text-gray-300 mb-3">{item.description}</p>
                  {item.achievements && (
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience