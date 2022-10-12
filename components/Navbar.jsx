import React, {useState} from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs'; 

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handNav = () => {
        setNav(!nav);
    }

    return (
        <div className='fixed w-full h-20 shadow-xl z-[1000]'>
            <div className='flex xs:justify-end sm:justify-end md:justify-center items-center w-full h-full px-2 2xl:px-16'>
                <div>
                    <ul className='font-myFont font-bold hidden md:flex gap-20'>
                        <Link href='/'>
                            <li className='ml-10 text-base uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-base uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-base uppercase hover:border-b'>Proyects</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-base uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={ handNav } className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500'}>
                    <div className='flex w-full justify-end'>
                        <div onClick={ handNav } className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <div className='py 4 flex flex-col'>
                        <ul className='my-5 uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>About me</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Proyects</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase text-center tracking-widest text-[#5651e5]'> Connect with me </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <FaGithub/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <BsFillPersonLinesFill/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
