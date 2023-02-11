import React from 'react'
import Image from 'next/image'
import studyImg from '../public/images/studies.svg'

export default function Education() {
    return (
        <div id='education' className=' w-full'>
            <div className='max-w-[1240px] mx-auto px-2 mb-40'>
                <div className='w-full bg-[#002336] text-center py-3 mb-10 rounded-lg'>
                    <p className='font-myFont font-bold text-4xl tracking-widest uppercase text-[#09B594]'>Education</p>
                </div>
                <div className=' flex flex-wrap justify-center items-center gap-10'>
                    <div className='md:w-[35%] md:h-60 w-[90%] bg-white p-5 text-center rounded-xl shadow-xl flex flex-col justify-center hover:scale-105 ease-in duration-300'>
                            <Image src={studyImg} width={200} height={60} alt=''/>
                            <p className='text-[#24a48b] text-xl mb-2'>Systems Engineer</p>
                            <p className='text-lg'><span>Institution : </span>Univerisdad del Valle, Cali, Colombia</p>
                            <p>6th Semester</p>
                    </div>
                    <div className='md:w-[35%] md:h-60 w-[95%] bg-white p-5 text-center rounded-xl shadow-xl  flex flex-col justify-center gap-2 hover:scale-105 ease-in duration-300'>
                            <Image src={studyImg} width={200} height={60} alt=''/>
                            <p className='text-[#24a48b] text-xl mb-2'>Software Development Technician</p>
                            <p className='text-lg'><span>Institution : </span>SENA, Cali, Colombia</p>
                            <p>ago.2016 - jul.2018</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
