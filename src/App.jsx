import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import image1 from "./assets/vector.png"

import React from 'react'

export default function 
() {
  return (
    <div className='bg-black'>
  <div className="flex justify-center items-center  min-h-screen bg-black">
      <div className="text-center">
        <div className='w-[352px] h-[223px] border rounded-[20px] border-[#191919] bg-[#101010]'>
        <h1 className='text-white'>my stack</h1>
        <h1 className='text-white'> tech arsenal</h1>
      
        <div className='flex flex-row'>
          
        <div className=' justify-between mx-[14px] items-center w-[118px] h-[44px] bg-[#191919] border  flex border-[#242424]  rounded-[7px] '>
        <div className=' mx-[4px]  items-center flex justify-center w-[34px] h-[33px] bg-[#282828] rounded-[7px]'>
        <img src={image1} alt="" />
        </div>
          <div className='mr-[24px]'>
             <h2 className='text-white'>Figma</h2>
           </div>
        </div>
        
        <div className=' justify-between mx-[14px] items-center w-[118px] h-[44px] bg-[#191919] border  flex border-[#242424]  rounded-[7px] '>
        <div className=' mx-[4px]  items-center flex justify-center w-[34px] h-[33px] bg-[#282828] rounded-[7px]'>
        <img src={image1} alt="" />
        </div>
          <div className='mr-[24px]'>
             <h2 className='text-white'>Figma</h2>
           </div>
        </div>
        </div>
        <div className='flex flex-row'>
          
          <div className=' justify-between mx-[14px] items-center w-[118px] h-[44px] bg-[#191919] border  flex border-[#242424]  rounded-[7px] '>
          <div className=' mx-[4px]  items-center flex justify-center w-[34px] h-[33px] bg-[#282828] rounded-[7px]'>
          <img src={image1} alt="" />
          </div>
            <div className='mr-[24px]'>
               <h2 className='text-white'>Figma</h2>
             </div>
          </div>
          
          <div className=' justify-between mx-[14px] items-center w-[118px] h-[44px] bg-[#191919] border  flex border-[#242424]  rounded-[7px] '>
          <div className=' mx-[4px]  items-center flex justify-center w-[34px] h-[33px] bg-[#282828] rounded-[7px]'>
          <img src={image1} alt="" />
          </div>
            <div className='mr-[24px]'>
               <h2 className='text-white'>Figma</h2>
             </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
