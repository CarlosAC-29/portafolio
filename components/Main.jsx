import React, { useRef, useState, useEffect } from 'react'
import imageMain from '../public/images/Me.png';
import Image from 'next/image';
import Link from 'next/link';
import dropDown from './dropDown';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaFileDownload } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from 'next/router';




export default function Main() {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;

    const [isOpen, setOpen] = useState(false)
    const menuRefEs = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRefEs.current.contains(e.target)) {
                setOpen(false)
                //console.log(menuRefEs.current)
            }

        }

        document.addEventListener("mousedown", handler)
    })






    return (
        <div id='home' className='w-full flex items-center justify-center text-center py-[8rem] relative'>
            <div className='font-myFont max-w-[1240px] w-full h-full mx-auto lg:flex gap-20 justify-center items-center px-10 '>
                <div className='w-full text-center lg:text-left'>
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

                        <div className=''>

                            <button
                                    
                                    onClick={() => setOpen(!isOpen)}
                                    class="mt-8 px-5 py-2.5 relative rounded-2xl group overflow-hidden font-medium bg-[#09B594] text-[#fff] inline-block focus:bg-[#002336]">
                                    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#002336] group-hover:h-full opacity-90"></span>
                                    <span class=" flex gap-3 relative group-hover:text-white uppercase font-bold"><FaFileDownload size={20} color='#fff' /> {t.main.button_cv}</span>
                                </button>

                        </div>
                        <div ref={menuRefEs} className={isOpen ? 'm-auto mt-2 lg:m-2 w-28 py-2 uppercase text-sm bg-white rounded-lg shadow-2xl absolute left-0 right-0 lg:left-1 top-[5rem]' : 'hidden ease-out'}>
                            <a
                                download='Carlos_Caceres_CV'
                                href='CV.pdf'
                                className='block px-4 py-2 cursor-pointer text-[#089C7E] hover:bg-[#089C7E] hover:text-white ease-in duration-75'>{t.main.OptionEn}</a>
                            <a

                                download='Carlos_Caceres'
                                href='hojadevida.pdf'
                                className='block px-4 py-2 cursor-pointer text-[#089C7E] hover:bg-[#089C7E] hover:text-white ease-in duration-75'

                            >
                                {t.main.OptionEs}
                            </a>
                        </div>
                    </div>
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
