import React from 'react'
import { CONTACT } from '../constants'
import {motion} from 'framer-motion'
import { LuMapPin } from "react-icons/lu";

const addressLink= "https://www.google.com/maps/search/?api=1&query=Kings+Colony,+Nawab+Saheb+Kunta,+Hyderabad,+Telangana+500052";

const Contact = () => {
  return (
    <div className=' border-b border-neutral-900 pb-20'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration: 1.5 }} className='my-10 text-4xl text-center'>Get In Touch!</motion.h1>
        <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration: 1.5 }} className='text-center tracking-tighter'>
        <p className='my-4 flex justify-center items-center'>
          {CONTACT.address}
          <span className='ml-2'>
            <a 
              href={addressLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='text-green-300'
            >
              <LuMapPin className="text-2xl" />
            </a>
          </span>
        </p>
            <a href={`mailto:${CONTACT.email}`} className='my-4 border-b'>{CONTACT.email}</a>
        </motion.div>
      
    </div>
  )
}

export default Contact
