import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { links } from './data'
import LangajesSelector from './LangajesSelector';

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const handNav = () => {
        setNav(!nav);
    }

    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 64,
        })
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[1000] bg-[#002336] text-white transition ease-in-out' : 'fixed w-full h-20 z-[1000]'}>
            <div className='flex xs:justify-end sm:justify-end md:justify-center items-center w-full h-full px-2 2xl:px-16'>
                <div>
                    <ul className='font-myFont font-bold hidden md:flex gap-20'>
                        <div>
                            {links.map((link) => {
                                return (
                                    <a className='uppercase mx-20 hover:text-[#09B594]' href={link.url} key={link.id} onClick={handleClick}>
                                        {link.text}
                                    </a>
                                )
                            })}
                        </div>
                    </ul>
                    <div onClick={handNav} className='md:hidden '>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500'}>
                    <div className='flex w-full justify-end'>
                        <div onClick={handNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose className='text-[#002336]' size={25} />
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='my-5 uppercase text-[#002336]'>
                            <div className='flex flex-col justify-center text-center gap-10'>
                                {links.map((link) => {
                                    return (
                                        <a className='uppercase mx-20 hover:text-[#09B594]' href={link.url} key={link.id} onClick={handNav}>
                                            {link.text}
                                        </a>
                                    )
                                })}
                            </div>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase text-center tracking-widest text-[#5651e5]'> Connect with me </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <Link href='https://www.linkedin.com/in/carlos-c%C3%A1ceres-836596137/'>
                                    <div className='text-[#002336] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                        <FaLinkedinIn />
                                    </div>
                                </Link>
                                <a href="mailto:carlosmicro33@gmail.com">
                                    <div className='text-[#002336] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                        <AiOutlineMail />
                                    </div>
                                </a>
                                <Link href='https://github.com/CarlosAC-29'>
                                    <div className='text-[#002336] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                        <FaGithub />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

