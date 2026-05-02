'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const contacts = [
    { icon: FaEnvelope, label: 'Email', href: 'mailto:pavan@example.com', text: 'pavan@example.com' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/pavankumar', text: 'linkedin.com/in/pavankumar' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/pavankumar', text: 'github.com/pavankumar' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/pavankumar', text: '@pavankumar' },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8"
        >
          Let us Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          I am always interested in new opportunities and collaborations.
          Feel free to reach out for AI/ML projects, consulting, or just to say hello!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-accent group"
            >
              <contact.icon className="text-3xl text-accent mx-auto mb-3 group-hover:text-green-400 transition-colors duration-300" />
              <h3 className="font-semibold text-white mb-1">{contact.label}</h3>
              <p className="text-gray-300 text-sm">{contact.text}</p>
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-gray-400"
        >
          <p>&copy; 2024 Pavan Kumar. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact