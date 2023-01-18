import React from 'react'
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin, BsArrowUp } from "react-icons/bs";;

function Footer() {
  return (
    <div className="w-full h-full md:w-10/12 py-20 mx-auto bg-transparent space-y-5">
        <div className='flex justify-center items-center space-x-6'>
            <div className='p-2 border border-stake-700 rounded-md'><BsFacebook className='text-gray-300 cursor-pointer' size={18} /></div>
            <div className='p-2 border border-stake-700 rounded-md'><BsLinkedin className='text-gray-300 cursor-pointer' size={18} /></div>
            <div className='p-2 border border-stake-700 rounded-md'><BsTwitter className='text-gray-300 cursor-pointer' size={18} /></div>
            <div className='p-2 border border-stake-700 rounded-md'><BsYoutube className='text-gray-300 cursor-pointer' size={18} /></div>
        </div>
        <div className='flex justify-center items-center space-x-6 text-gray-300'>
            <div className='p-2 cursor-pointer'>Home</div>
            <div className='p-2 cursor-pointer'>Stake</div>
            <div className='p-2 cursor-pointer'>Tiers</div>
            <div className='p-2 cursor-pointer'>Contact</div>
        </div>
        <div className='flex justify-center items-center space-x-6 text-gray-300'>
            <p className='text-center text-gray-300 text-sm'>©2022 CrytiVest</p>
        </div>
        <div className='flex justify-center items-center space-x-6 text-white'>
            <div className='cursor-pointer p-2 border border-stake-700 rounded-md hover:bg-stake-700'>
                <BsArrowUp onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});  }} className='text-white' size={20} />
            </div>
        </div>
    </div>
  )
}

export default Footer