import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ContactImage from '../public/images/contact.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { MdOutlineContactPhone } from 'react-icons/md';
import Link from 'next/link';
import emailjs from '@emailjs/browser';


export default function Contact() {




    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_ifianwe', 'template_p48t27s', event.target, 'JuTCPJD8FaqSMXMVo')
            .then(response => console.log(response)).catch(error => console.log(error));
    }

    return (
        <div id='contact' className='w-full lg:h-full'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <div className='w-full flex justify-center text-center gap-5 py-3 mb-10 rounded-lg bg-[#09B594]'>
                    <MdOutlineContactPhone className='text-4xl md:text-5xl text-[#002336]'/>
                    <p className='font-myFont font-bold text-4xl md:text-5xl tracking-widest  text-[#002336]'>Contact me</p>
                </div>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span-2 w-full bg-[#c8cdd0] shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image src={ContactImage} alt='Contact' />
                            </div>
                            <div>
                                <h2 className='py-1 font-myFont font-bold text-4xl text-[#002336]'>Carlos Cáceres</h2>
                                <p className='font-myFont text-lg font-semibold text-[#0077B6]'>Systems engineering student</p>
                                <p className='font-myFont py-4 font-medium text-xl'>I am available for freelance or part-time positions. Contact me and I would be more than happy in to talking with you</p>
                            </div>
                            <div>
                                <p className='font-myFont text-lg font-semibold text-[#0077B6] pb-4'>Connect with me</p>
                                <div className='flex items-start justify-between max-w-[300px]'>
                                    <div className='flex text-center gap-4'>
                                        <AiOutlineMail size={28} color='#0077B6' />
                                        <a className='group-hover:text-cyan-500 hover:underline' href="mailto:carlosmicro33@gmail.com">carlosmicro33@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 bg-[#d0d3d5]'>
                        <div className='p-4'>

                            <form onSubmit={sendEmail}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2 '>
                                    <div className='flex flex-col'>
                                        <label className='font-myFont font-bold text-sm py-2 text-[#002336]'>Name</label>
                                        <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='user_name' 
                                        required
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm font-bold  py-2 text-[#002336]'>Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='user_number'
                                        required
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 font-bold text-[#002336]'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='user_email' 
                                    required
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 font-bold text-[#002336]'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='user_subject' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 font-bold text-[#002336]'>Mesagge</label>
                                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300' type='text' rows='8' name='user_message' 
                                    required
                                    />
                                </div>
                                <button className='w-full p-4  mt-4'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center py-12'>
                    <Link href='/'>
                        <a>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 hover:bg-[#39D08A] first-letter:ease-in duration-200'>
                                <HiOutlineChevronDoubleUp className='text-[#002336]' size={30} />
                            </div>
                        </a>
                    </Link>
                </div>
            </div>

        </div>
    )
}
