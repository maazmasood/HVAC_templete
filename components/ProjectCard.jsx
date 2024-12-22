'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProjectCard({ title, description, image }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Image src={image} alt={title} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#A9331E] mb-2">{title}</h3>
        <p className="text-[#EE7F01]">{description}</p>
      </div>
    </motion.div>
  )
}

