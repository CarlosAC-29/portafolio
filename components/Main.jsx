import React, { useRef, useState, useEffect } from 'react'
import imageMain from '../public/images/Me.png';
import Image from 'next/image';
import Link from 'next/link';
import dropDown from './dropDown';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaFileDownload } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';





export default function Main() {


    const [isOpen, setOpen] = useState(false)
    const menuRefEs = useRef();
    const menuRefEn = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRefEs.current.contains(e.target)) {
                setOpen(false)
                console.log(menuRefEs.current)
            }

        }

        document.addEventListener("mousedown", handler)
    })






    return (
        <div id='home' className='w-full flex items-center justify-center text-center py-[8rem] relative'>
            <div className='font-myFont max-w-[1240px] w-full h-full mx-auto md:flex gap-20 justify-center items-center px-10 '>
                <div className='w-full text-center md:text-left'>
                    <p className='uppercase text-5xl font-bold tracking-widest text-[#09B594]'>HELLO WORLD</p>
                    <h1 className='text-4xl py-4 text-gray-700'>My name is <span className='text-[#00659C]'>Carlos</span></h1>
                    <p className='text-lg md:text-2xl py-4 text-gray-700'>I&#39;m a software developer based in Cali, Colombia🌎, who is passionate about developing new technologies that may improve people&#39;s day-to-day lives. At this time, I&#39;m a system engineering student at the Universidad del Valle.</p>
                    <h1 className='text-4xl py-10 font-semibold text-[#00659C]'>A freelancer software developer</h1>
                    <div className='hidden md:flex items-start justify-between max-w-[300px]'>
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
                        <Link href='#contact'>
                            <div className='bg-white text-[#0077B6] rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer  hover:scale-x-105 hover:bg-[#0077B6] hover:text-white ease-in duration-200'>
                                <BsFillPersonLinesFill size={20} />
                            </div>
                        </Link>

                    </div>
                    <div className='grid justify-center md:justify-start items-center pb-32 md:py-0 relative ease-out'>
                        <div className='mt-8'>
                            <button onClick={() => setOpen(!isOpen)} className='bg-[#09B594] p-3 w-38 flex justify-center gap-1 '><FaFileDownload size={20} /> Download CV</button>
                        </div>
                        <div ref={menuRefEs} className={isOpen ? 'm-auto mt-2 md:m-2 w-28 py-2 uppercase text-sm bg-white rounded-lg shadow-2xl absolute left-0 right-0 md:left-1 top-[5rem]' : 'hidden ease-out'}>
                            <a
                                download='Carlos_Caceres_CV'
                                href='CV.pdf'
                                className='block px-4 py-2 cursor-pointer text-[#089C7E] hover:bg-[#089C7E] hover:text-white ease-in duration-75'>English</a>
                            <a

                                download='Carlos_Caceres'
                                href='hojadevida.pdf'
                                className='block px-4 py-2 cursor-pointer text-[#089C7E] hover:bg-[#089C7E] hover:text-white ease-in duration-75'

                            >
                                Español
                            </a>
                        </div>
                    </div>

                    {/* <div className='py-10 flex justify-center md:justify-start'>
                        <a download='Carlos_Caceres' href='hojadevida.pdf'>
                            <button className='bg-[#09B594] p-3 w-[100%] flex justify-center gap-1 transition-all hover:scale-110'><FaFileDownload size={20}/> Download CV</button>
                        </a>
                    </div> */}
                </div>
                <div className='w-full items-center'>

                    <div className='w-full object-cover'>
                        <Image src={imageMain} alt='Image of Carlos Caceres' />
                    </div>
                </div>
            </div>

        </div>
    )
}
