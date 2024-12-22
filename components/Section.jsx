'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'

const Section = React.forwardRef(({ id, children, direction }, ref) => {
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center p-8"
    >
      <motion.div
        initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </section>
  )
})

Section.displayName = 'Section'

export default Section

