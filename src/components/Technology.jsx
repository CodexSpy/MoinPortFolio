import React from 'react'
import { SiPandas} from 'react-icons/si'; 
import { RiJavaLine } from "react-icons/ri";
import {SiNumpy} from 'react-icons/si';
import {SiMysql} from 'react-icons/si';
import {SiMongodb } from 'react-icons/si';
import { RiReactjsLine } from "react-icons/ri";
import { motion} from 'framer-motion'

const icons = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    rotate: [0, 15, -15, 0],  // Adds a slight rotation animation
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});


const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration: 1.5 }} className='my-20 text-center text-4xl'>Technologies I'm Familiar With</motion.h1>
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x: -100}} transition={{duration: 1.5}} className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div variants={icons(2.5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiJavaLine className="text-7xl text-red-500" />
        </motion.div>
        <motion.div variants={icons(3)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPandas className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div variants={icons(3.5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiNumpy className="text-7xl text-indigo-600" />
        </motion.div>
        <motion.div variants={icons(4)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMysql className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div variants={icons(4.5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div variants={icons(5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className="text-7xl text-cyan-500" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technology
