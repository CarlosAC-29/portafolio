import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import colombia from '../public/images/colombia.png';

export default function Footer() {
    return (
        <div className='w-full md:h-[220px] h-screen py-10 bg-[#002336]'>
            <div className='flex flex-col md:flex-row text-center md:justify-around justify-center gap-10'>
                <div>
                    <p className='text-[#09B594] pb-1 text-[1.2rem]'>Socials</p>
                    <div className='flex gap-10 justify-center'>
                        <Link href='https://www.linkedin.com/in/carlos-c%C3%A1ceres-836596137/'>
                            <FaLinkedinIn size={30} color={'#fff'} className='cursor-pointer' />
                        </Link>
                        <Link href='https://github.com/CarlosAC-29'>
                            <FaGithub size={30} color={'#fff'} className='cursor-pointer' />
                        </Link>
                    </div>
                </div>
                <div>
                    <p className='text-[#09B594] pb-1 text-[1.2rem]'>Email</p>
                    <div className='flex gap-2 justify-center'>
                        <AiOutlineMail size={25} color='#fff' />
                        <a className='group-hover:text-cyan-500 text-white hover:underline' href="mailto:carlosmicro33@gmail.com">carlosmicro33@gmail.com</a>
                    </div>
                </div>
                <div>
                    <p className='text-[#09B594] pb-1 text-[1.2rem]'>Nationality</p>
                    <div className='flex justify-center gap-2'>
                        <Image src={colombia} alt='colombia image'/>
                        <p className='text-white'>Colombian</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-center pt-11 text-gray-400 text-sm pb-8 ">
                <span>© 2020 Appy. All rights reserved.</span>
                <span>Terms · Privacy Policy</span>
            </div>
        </div>
    )
}
