"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';
import { BsArrowDown, BsLinkedin } from "react-icons/bs"
import { FaGithubSquare } from 'react-icons/fa';

function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 '>
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }} transition={{ type: "tween", duration: 0.2}}>
                    <Image src='https://media.licdn.com/dms/image/C4D03AQEHWxSdWgEI-A/profile-displayphoto-shrink_800_800/0/1573082689813?e=1701907200&v=beta&t=AbzUmt0UTMYy6zDrDP7pxsL1IuBAGWdX9fcn5pvxfYk' 
                    alt='me' width="192" height="192" quality="95" priority={true}
                    className='h-24 w-24 rounded-full
                    border-[0.35rem] border-white object-cover shadow-xl'/>
                </motion.div>
                

                <motion.span 
                className='absolute bottom-0 right-0 text-3xl'
                initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }} 
                transition={{ 
                    type: "spring", 
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7
                }}>👋</motion.span>
            </div>
            
        </div>

        <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>

            <span className="font-bold">Software Engineer</span> building products{" "} with{" "}
            <span className="font-bold">efficiency & scalibility</span> at the forefront.

        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium' 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay:0.1
            }}>
            <Link href="#contact" className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
            outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact me below <BsArrowDown/></Link>
            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-900 active:scale-105 transition hover:text-gray-50'>
                <BsLinkedin/>
            </a>
            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none hover:scale-110 hover:bg-gray-900 active:scale-105 transition hover:text-gray-50'>
                <FaGithubSquare/>
            </a>
        </motion.div>
    </section>
  )
}

export default Intro