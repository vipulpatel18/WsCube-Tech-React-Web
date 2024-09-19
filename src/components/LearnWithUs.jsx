import React from 'react'
import { ReactTyped } from "react-typed";

export default function LearnWithUs() {
  return (
    <div>
        <div className="w-full bg-mycolor h-screen ">
            <div className='xl:container pt-[160px] h-full  m-auto'>
              <div className='p-10'>
                <h3 className='text-2xl md:text-3xl text-center font-bold pb-5'>Learn With Us</h3>
                <h1 className='text-5xl md:text-7xl text-white text-center font-bold pb-5'>Grow With Us</h1>
                <div className='text-2xl md:text-5xl text-white text-center font-bold '>Learn   
                <ReactTyped className='ps-2' strings={["  Web Development","Digital Marketing" , "Ethical Hacking"]} typeSpeed={80} loop={true} backSpeed={40} />
                </div>
                <div className="mt-9 flex">
                <button className="bg-black text-white hover:bg-black-600 active:bg-black-700 focus:outline-none focus:ring rounded focus:ring-black-300 py-2 px-8 m-auto"> Save changes </button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
