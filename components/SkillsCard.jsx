import React from 'react'
import Image from 'next/image'

export default function SkillsCard({image, title}) {
  return (
    <div className='w-[30%] md:w-auto p-6 my-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
            <Image 
            src={image} 
            width='64px' 
            height='64px' 
            alt='/' 
            />
        </div>
        <div className='hidden md:flex flex-col items-center justify-center'>
            <h3>{title}</h3>
        </div>
    </div>
</div>
  )
}
