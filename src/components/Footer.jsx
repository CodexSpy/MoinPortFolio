import React from 'react'
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-600 text-white  fixed bottom-0 left-0 w-full flex items-center justify-center" style={{ height: '40px' }}>
    <p className="text-sm flex items-center text-slate-300">
      Created By Moin with ❤️ 
      <span className=" text-sm  ml-2">
        <FaCopyright />
      </span>
    </p>
  </div>
  )
}

export default Footer