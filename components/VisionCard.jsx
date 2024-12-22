'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function VisionCard({ icon: Icon, title, description }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-2 border-[#EE7F01]"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Icon size={48} className="text-[#A9331E] mb-4" />
      <h3 className="text-xl font-semibold text-[#EE7F01] mb-2">{title}</h3>
      <p className="text-[#A9331E]">{description}</p>
    </motion.div>
  )
}

