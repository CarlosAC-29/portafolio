import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ContactImage from '../public/images/contact.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { MdOutlineContactPhone } from 'react-icons/md';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import Modal from '../components/Modal'
import { data } from 'autoprefixer';


export default function Contact(props) {

    const [showModal, setShowModal] = useState(false);
    const [isError, setIsError] = useState(0);
    const [statName, setStatName] = useState(0);
    const [nameField, setNameField] = useState('');
    const [statNumber, setStatNumber] = useState(0);
    const [numberField, setNumberField] = useState('');
    const [statEmail, setStatEmail] = useState(0);
    const [emailField, setEmailField] = useState('');
    const [statMessage, setStatMessage] = useState(0);
    const [messageField, setMessageField] = useState('');


    const validation = (name, number, email, message) => {
        if (!name) {
            setStatName(1)
        } else {
            setStatName(0)
        }

        if (!number) {
            setStatNumber(1)
        } else {
            setStatNumber(0)
        }

        if (!email) {
            setStatEmail(1)
        } else {
            setStatEmail(0)
        }

        if (!message) {
            setStatMessage(1)
        } else {
            setStatMessage(0)
        }

        if(!(statName) && !(statNumber) && !(statEmail) && !(statMessage)){
            setIsError(0)
        }else{
            setIsError(1)
        }


    }

    // const [data, setData] = useState({
    //     name: '', nameValido: false,
    //     number: '', numberValido: false,
    //     email: '', emailValido: false,
    //     message: '', messageValido: false,
    // });


    const handleSubmit = (e) => {
        e.preventDefault();
        validation(nameField, numberField, emailField, messageField);
        if(isError == 0){
            sendEmail(e);
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })

    }

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_ifianwe', 'template_p48t27s', event.target, 'JuTCPJD8FaqSMXMVo')
            .then(response => console.log(response)).catch(error => console.log(error));
    }

    return (
        <div id='contact' className='w-full lg:h-full'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <div className='w-full flex justify-center text-center gap-5 py-3 mb-10 rounded-lg bg-[#09B594]'>
                    <MdOutlineContactPhone className='text-4xl md:text-5xl text-[#002336]' />
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

                            <form onSubmit={handleSubmit}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2 '>
                                    <div className='flex flex-col'>
                                        {statName == 1 ?
                                            <label className='uppercase font-myFont font-bold text-sm py-2 text-red-600'>Name - Campo vacio</label>
                                            :
                                            <label className='uppercase font-myFont font-bold text-sm py-2 text-[#002336]'>Name</label>
                                        }
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'
                                            onChange={e => setNameField(e.target.value)}
                                            value={nameField}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        {statNumber == 1 ?
                                            <label className='uppercase font-myFont font-bold text-sm py-2 text-red-600'>Number - Campo vacio</label>
                                            :
                                            <label className='uppercase font-myFont font-bold text-sm py-2 text-[#002336]'>Number</label>
                                        }
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='number'
                                            onChange={e => setNumberField(e.target.value)}
                                            value={numberField}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    {statEmail == 1 ?
                                        <label className='uppercase font-myFont font-bold text-sm py-2 text-red-600'>Email - Campo vacio</label>
                                        :
                                        <label className='uppercase font-myFont font-bold text-sm py-2 text-[#002336]'>Email</label>
                                    }
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email'
                                        onChange={e => setEmailField(e.target.value)}
                                        value={emailField}
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    {statMessage == 1 ?
                                        <label className='uppercase font-myFont font-bold text-sm py-2 text-red-600'>Message - Campo vacio</label>
                                        :
                                        <label className='uppercase font-myFont font-bold text-sm py-2 text-[#002336]'>Message</label>
                                    }
                                    <textarea
                                        className='border-2 rounded-lg p-3 flex border-gray-300' type='text' rows='8' name='message'
                                        onChange={e => setMessageField(e.target.value)}
                                        value={messageField}
                                    />
                                </div>
                                <button onClick={() => setShowModal(true)} className='w-full p-4  mt-4'>Send Message</button>
                                {isError == 0? <Modal visible={showModal} setVisible={setShowModal} /> : ''}
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
