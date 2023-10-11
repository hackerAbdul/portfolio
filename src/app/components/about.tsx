"use client"

import React, { useEffect } from 'react'
import SectionHeadings from './section-headings'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useCurrentSectionContext } from '../../../context/active-section'


function About() {

  const { ref, inView } = useInView({
    threshold: 0.75
  });

  const { setCurrentSection } = useCurrentSectionContext()

  useEffect(() =>{
    if (inView){
      setCurrentSection("About")
    }
  }, [inView, setCurrentSection])
  

  return (
    <motion.section id='about' className='scroll-mt-28' initial={{ opacity: 0, y: 100}}
    ref={ref}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.175}}>
      <SectionHeadings
        subtitle='Who am I'
      />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </motion.section>
  )
}

export default About