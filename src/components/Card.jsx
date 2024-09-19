import React from 'react'

export default function Card() {
  return (
    <div className='w-full pb-10 md:mb-[90px] '>
        <div className='lg:container h-full m-auto px-6 gap-7'>
        <div className='flex flex-wrap gap-5 w-fit m-auto justify-center'>
        <CardDetails img={"assets/single.png"} title={"Web Development"}/>
        <CardDetails img={"assets/double.png"} title={"Digital Marketing"}/>
        <CardDetails img={"assets/triple.png"} title={"App Development"}/>
        </div>
        </div>
    </div>
  )
}

function CardDetails({img, title}){
    return(
        <div className='bg-[#fcfcfc] w-[360px] h-[480px] mt-[70px] rounded duration-700 group hover:scale-105 hover:bg-[#fafafa] cursor-pointer shadow-xl'>
            <div className='h-24'>
                <img className='w-24 m-auto' src={img} alt="" />
            </div>
            <div className='text-center'>
                <h1 className='text-3xl font-medium'>{title}</h1>
                <h2 className='text-4xl font-bold mt-4'>$149</h2>
            </div>
            <div className='text-center text-[17px] pt-8 px-9'>
                <p className='border border-t-0 border-s-0 border-e-0 border-b-2 py-2'>Lorem ipsum dolor sit.</p>
                <p className='border border-t-0 border-s-0 border-e-0 border-b-2 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className='border border-t-0 border-s-0 border-e-0 border-b-2 py-2'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="mt-1 flex pt-6">
                <button className="bg-[#02C789] text-white hover:bg-black-600 active:bg-black-700 focus:outline-none focus:ring rounded focus:ring-black-300 py-2 px-8 m-auto duration-700 group-hover:bg-black">
                  Notify Me
                </button>
              </div>
        </div>
    )
}