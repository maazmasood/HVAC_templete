'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PopQuestion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-8">
      <motion.button
        className="bg-[#EE7F01] text-white px-4 py-2 rounded-full shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 p-4 bg-white rounded-lg shadow-lg"
          >
            <p className="text-[#A9331E]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

