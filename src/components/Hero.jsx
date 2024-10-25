import React from 'react'
import TypingEffect from 'react-typing-effect';
import { HERO_CONTENT } from '../constants'
import ProfilePic from '../assets/WorkKitty.jpg'
import { motion } from "framer-motion"

const container=(delay) => ({
  hidden: {x: -100, opacity:0},
  visible:{
    x:0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay}
  }
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 variants={container(0.5)} initial='hidden' animate='visible' className='pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Moin Khan</motion.h1>

                <motion.div variants={container(0.75)} initial='hidden' animate='visible' className="my-6">
      <TypingEffect
        text={['Data Analyst', 'SQL Geek', 'Front-End Developer', 'Java Enthusiast']}
        speed={100}
        eraseSpeed={50}
        eraseDelay={1500}
        typingDelay={400}
        className='bg-gradient-to-r from-cyan-300 via-slate-300 to bg-indigo-500 bg-clip-text text-3xl tracking-tight text-transparent'
      />
    </motion.div>

<motion.p variants={container(0.9)} initial='hidden' animate='visible' className='my-2 max-w-xl py-6 px-4 font-light tracking-tight text-xl text-white bg-white/20 backdrop-blur-lg rounded-lg border border-white/30 shadow-lg'>
  {HERO_CONTENT}
</motion.p>

                </div></div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration: 1, delay: 1.2}} className='w-80 h-80 rounded-full   mt-28' src={ProfilePic} alt="Moin khan" />
                </div>
                </div>
        </div>
      
    </div>
  )
}

export default Hero
