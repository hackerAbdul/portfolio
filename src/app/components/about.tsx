"use client"

import React from 'react'
import SectionHeadings from './section-headings'
import { motion } from "framer-motion"

function About() {
  return (
    <motion.section id='about' className='scroll-mt-28' initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.175}}>
      <SectionHeadings
        subtitle='Who am I'
      />
    </motion.section>
  )
}

export default About