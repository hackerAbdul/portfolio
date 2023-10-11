"use client"

import React, { useRef, useEffect } from 'react'
import SectionHeadings from './section-headings'
import { projectsData } from '../lib/data'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useCurrentSectionContext } from '../../../context/active-section'

function Projects() {

    const { ref, inView } = useInView({
        threshold: 0.5
      });

    const { setCurrentSection } = useCurrentSectionContext()

    useEffect(() =>{
        if (inView){
        setCurrentSection("Projects")
        }
    }, [inView, setCurrentSection])

  return (
    <section ref={ref} id='projects' className='scroll-mt-28'>
        <SectionHeadings 
            subtitle='Projects'
        />
        
        <div>
            {projectsData.map((project, index) =>(
                <Project 
                    key={index}
                    {...project}
                />
            ))}
        </div>
    </section>
  )
}

type ProjectProp = (typeof projectsData)[number]

function Project({
    title, 
    description, 
    tags } : ProjectProp){

        const ref = useRef<HTMLDivElement>(null)
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["0 1", "1.33 1"]
        })
        const transform = useTransform(scrollYProgress, [0,1], [0.7, 1])
        const opacity = useTransform(scrollYProgress, [0,1], [0.6, 1])

    return (
        <motion.div ref={ref} style={{scale: transform, opacity:opacity}} className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] rounded-lg mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition'>
            <div className='py-4 px-5 sm:pl-10 pb-8 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>{tags.map((tag, index) =>(
                    <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem]
                    uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
                ))}</ul>
            </div>
        </motion.div>
    )
}

export default Projects