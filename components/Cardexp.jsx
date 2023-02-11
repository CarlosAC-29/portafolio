import React from 'react'
import Image from 'next/image'


export default function Cardexp({charge, company, date, location, logo}) {
    return (
        <div className=' bg-[#ffffff] flex justify-center items-center gap-16 p-6 rounded-2xl  shadow-xl shadow-gray-400 hover:scale-105 ease-in duration-300'>
            <div className='flex flex-col gap-1  text-gray-700'>
                <div className='flex flex-col mb-2 text-md md:text-xl font-semibold'>
                    <p className='uppercase text-[#24a48b]'> {charge} </p>
                </div>
                <div className='flex flex-col mb-2 text-base md:text-base'>
                    <p className=''>{company}</p>
                </div>
                <div className='flex flex-col mb-2 text-base'>
                    <p className=''>{date}</p>
                    <p className=''>{location}</p>
                </div>
            </div>
            <div className='max-w-[100px] mx-h-[150px]'>
                <Image src={logo} layout='intrinsic' alt='' width={210} height={330} />
            </div>
        </div>
    )
}
