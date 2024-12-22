'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedWord({ children }) {
  const letters = Array.from(children)
  
  return (
    <span className="inline-block">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </span>
  )
}

