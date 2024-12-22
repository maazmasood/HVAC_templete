'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ACWave() {
  return (
    <svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none">
      <motion.path
        d="M0,50 C250,0 750,100 1000,50 L1000,100 L0,100 Z"
        fill="#EE7F01"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
    </svg>
  )
}

