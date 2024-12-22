'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Competency({ title, description }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-[#A9331E] mb-2">{title}</h3>
      <p className="text-[#EE7F01]">{description}</p>
    </motion.div>
  )
}

