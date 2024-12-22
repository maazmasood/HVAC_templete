'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-2 border-[#A9331E]"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Icon size={48} className="text-[#EE7F01] mb-4" />
      <h3 className="text-xl font-semibold text-[#A9331E] mb-2">{title}</h3>
      <p className="text-[#EE7F01]">{description}</p>
    </motion.div>
  )
}

