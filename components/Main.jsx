import React, { useRef, useState, useEffect } from 'react'
import imageMain from '../public/images/Me.png';
import Image from 'next/image';
import Link from 'next/link';
import DropDownCV from './DropdownCV';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaFileDownload } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { motion } from "framer-motion"
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from 'next/router';




export default function Main() {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;

    const [isOpen, setOpen] = useState(false)
    const menuRefEs = useRef();
    // useEffect(() => {
    //     let handler = (e) => {
    //         if (!menuRefEs.current.contains(e.target)) {
    //             setOpen(false)
    //             //console.log(menuRefEs.current)
    //         }

    //     }

    //     document.addEventListener("mousedown", handler)
    // })






    return (
        <div id='home' className='w-full flex items-center justify-center text-center py-[8rem] relative'>
            <div className='mt-2 font-myFont max-w-[1240px] w-full h-full mx-auto lg:flex gap-20 justify-center items-center px-10 '>
                <motion.div initial={{x:-200}} animate={{ x: 0 }}  className='w-full text-center lg:text-left'>
                    <p className='uppercase text-5xl font-bold tracking-widest text-[#09B594]'>{t.main.title}</p>
                    <h1 className='text-4xl py-4 text-gray-700'>{t.main.subtitle} <span className='text-[#00659C]'>Carlos</span></h1>
                    <p className='text-lg md:text-2xl py-4 text-gray-700'>{t.main.Intro}</p>
                    <h1 className='text-4xl py-10 font-semibold text-[#00659C]'>{t.main.message}</h1>
                    <div className='hidden lg:flex items-start justify-between max-w-[300px]'>
                        <Link href='https://www.linkedin.com/in/carlos-c%C3%A1ceres-836596137/'>
                            <div className='bg-white text-[#0077B6] rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer  hover:scale-x-105 hover:bg-[#0077B6] hover:text-white ease-in duration-200'>
                                <FaLinkedinIn size={20} />
                            </div>
                        </Link>
                        <Link href='https://github.com/CarlosAC-29'>
                            <div className='bg-white text-[#0077B6] rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer  hover:scale-x-105 hover:bg-[#0077B6] hover:text-white ease-in duration-200'>
                                <FaGithub size={20} />
                            </div>
                        </Link>
                        <a href="mailto:carlosmicro33@gmail.com">
                            <div className='bg-white text-[#0077B6] rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer  hover:scale-x-105 hover:bg-[#0077B6] hover:text-white ease-in duration-200'>
                                <AiOutlineMail size={20} />
                            </div>
                        </a>
                        {/* <Link href='#contact'>
                            <div className='bg-white text-[#0077B6] rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer  hover:scale-x-105 hover:bg-[#0077B6] hover:text-white ease-in duration-200'>
                                <BsFillPersonLinesFill size={20} />
                            </div>
                        </Link> */}

                    </div>
                    <div className='grid justify-center lg:justify-start items-center pb-32 lg:py-0 relative ease-out'>
                        <DropDownCV />
                    </div>
                </motion.div>
                <div className='w-full items-center relative'>                      
                    <div className='w-[95%] h-[90%] object-cover z-1 overflow-hidden rounded-xl'>
                        <Image src={imageMain} alt='Image of Carlos Caceres' />
                    </div>
                </div>
            </div>

        </div>
    )
}
