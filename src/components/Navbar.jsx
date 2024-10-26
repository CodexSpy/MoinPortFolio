import React from 'react';
import logo from '../assets/CodeSpyLOGO.webp';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdOutlineDarkMode } from 'react-icons/md';  // Dark mode icon
import { CiLight } from 'react-icons/ci';  // Light mode icon
import { motion } from 'framer-motion';

const iconHoverEffect = {
  hover: {
    scale: 1.2,
    color: '#7dd0ba',
    transition: {
      duration: 0.3,
    },
  },
};

const Navbar = ({ onThemeToggle, isDarkTheme }) => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-24 rounded-full' src={logo} alt="logo" />
      </div>
      <div className='flex items-center gap-4 text-2xl ml-4'>
        <motion.a
          href="https://linkedin.com/in/moin-khan-0335b4245"
          whileHover="hover"
          variants={iconHoverEffect}
          className='text-blue-500'
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/CodexSpy"
          whileHover="hover"
          variants={iconHoverEffect}
          className='text-slate-200'
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://leetcode.com/u/kmoin9985/"
          whileHover="hover"
          variants={iconHoverEffect}
          className='text-orange-300'
        >
          <SiLeetcode />
        </motion.a>

        <button onClick={onThemeToggle} className='p-2 '>
          {isDarkTheme ? (
            <CiLight className='text-2xl text-gray-200' />
          ) : (
            <MdOutlineDarkMode className='text-2xl text-gray-800' /> 
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
