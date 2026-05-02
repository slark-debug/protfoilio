'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Advanced Image Classification System',
      description: 'Developed a CNN-based image classification model using TensorFlow achieving 96% accuracy on ImageNet dataset. Implemented data augmentation and transfer learning techniques.',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      github: 'https://github.com/pavankumar/image-classification',
      demo: 'https://demo-link.com'
    },
    {
      title: 'Real-time Sentiment Analysis API',
      description: 'Built a scalable NLP API using BERT for real-time sentiment analysis of social media data. Deployed on AWS with auto-scaling capabilities.',
      tech: ['Python', 'Transformers', 'FastAPI', 'AWS'],
      github: 'https://github.com/pavankumar/sentiment-api',
      demo: 'https://api-demo.com'
    },
    {
      title: 'Predictive Maintenance System',
      description: 'Created an IoT-based predictive maintenance solution using time-series analysis and anomaly detection algorithms, reducing downtime by 40%.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'IoT'],
      github: 'https://github.com/pavankumar/predictive-maintenance',
      demo: 'https://maintenance-demo.com'
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/30">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center text-accent hover:text-green-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2" /> Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center text-accent hover:text-green-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="mr-2" /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects