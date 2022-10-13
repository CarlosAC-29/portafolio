import React from 'react'
import imageMain from '../public/images/Me.png';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Main() {
    return (
        <div className='w-full flex items-center justify-center text-center py-[7rem]'>
            <div className='font-myFont max-w-[1240px] w-full h-full mx-auto md:flex gap-20 justify-center items-center px-10'>
                <div className='w-full text-center md:text-left'>
                    <p className='uppercase text-5xl font-bold tracking-widest text-gray-700'>HELLO WORLD</p>
                    <h1 className='text-4xl py-4 text-gray-700'>My name is <span className='text-[#0077B6]'>Carlos</span></h1>
                    <p className='text-lg md:text-2xl tex py-4 text-gray-700'>I&#39;m a software developer based in Cali, Colombia🌎, who is passionate about developing new technologies that may improve people&#39;s day-to-day lives. At this time, I&#39;m a system engineering student at the Universidad del Valle.</p>
                    <h1 className='text-4xl py-10 font-semibold text-[#0077B6]'>A freelancer software developer</h1>
                    <div className='hidden md:flex items-start justify-between max-w-[300px]'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 hover:bg-[#39D08A] first-letter:ease-in duration-200'>
                            <FaLinkedinIn size={20} color='#0077B6' />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 hover:bg-[#39D08A] ease-in duration-200'>
                            <FaGithub size={20} color='#0077B6' />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 hover:bg-[#39D08A] ease-in duration-200'>
                            <AiOutlineMail size={20} color='#0077B6' />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-x-105 hover:bg-[#39D08A] ease-in duration-200'>
                            <BsFillPersonLinesFill size={20} color='#0077B6' />
                        </div>
                    </div>
                </div>
                <div className='w-full items-center'>

                    <div className='w-full'>
                        <Image src={imageMain} alt='Image of Carlos Caceres' />
                    </div>
                </div>
            </div>
        </div>
    )
}
