import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ContactImage from '../public/images/contact.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { MdOutlineContactPhone } from 'react-icons/md';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import Swal from 'sweetalert2'


export default function Contact(props) {

    const [verified, setVerified] = useState(false)

    useEffect(() => {
        formSubmitted(verified)
    }, [verified])

    const onSubmit = async (values, actions) => {
        setVerified(true)
        console.log(verified)
        console.log(values)
        console.log(actions)
        //EmailJs Section
        emailjs.send('service_ifianwe', 'template_p48t27s', values, 'JuTCPJD8FaqSMXMVo').then(() => { console.log('email sent'); });
        await new Promise((resolve) => setTimeout(resolve, 1000))
        actions.resetForm()
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            email: '',
            message: ''
        },
        validationSchema: basicSchema,
        onSubmit,

    })

    const formSubmitted = () => {
        console.log(verified)
        if (verified == true) {
            Swal.fire({
                text: "I'll be in touch with you as soon as posible 👍",
                icon: 'success',
                iconColor: '#09B594',
                confirmButtonColor: '#09B594',
                confirmButtonText: 'ok'
              })
              
        }
        setVerified(false)
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

                            <form onSubmit={formik.handleSubmit} >
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2 '>
                                    <div className='flex flex-col'>
                                        <label
                                            className='uppercase font-myFont font-bold text-sm py-2 text-[#002336]'>name</label>
                                        <input
                                            className={formik.errors.name && formik.touched.name ? 'border-2 rounded-lg p-3 flex border-red-600' : 'border-2 rounded-lg p-3 flex border-gray-300'}
                                            type='text'
                                            id='name'
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.name && formik.touched.name &&
                                            <p className='text-red-600 text-sm'>
                                                {formik.errors.name}
                                            </p>}
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase font-myFont font-bold text-sm py-2 text-[#002336]'>number</label>
                                        <input
                                            className={formik.errors.number && formik.touched.number ? 'border-2 rounded-lg p-3 flex border-red-600' : 'border-2 rounded-lg p-3 flex border-gray-300'}
                                            maxlength='10'
                                            type='text'
                                            name='number'
                                            value={formik.values.number}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}

                                        />
                                        {formik.errors.number && formik.touched.number &&
                                            <p className='text-red-600 text-sm'>
                                                {formik.errors.number}
                                            </p>}
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase font-myFont font-bold text-sm py-2 text-[#002336]'>email</label>
                                    <input
                                        className={formik.errors.email && formik.touched.email ? 'border-2 rounded-lg p-3 flex border-red-600' : 'border-2 rounded-lg p-3 flex border-gray-300'}
                                        type='text'
                                        name='email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.email && formik.touched.email &&
                                        <p className='text-red-600 text-sm'>
                                            {formik.errors.email}
                                        </p>}
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase font-myFont font-bold text-sm py-2 text-[#002336]'>message</label>
                                    <textarea
                                        className={formik.errors.message && formik.touched.message ? 'border-2 rounded-lg p-3 flex border-red-600' : 'border-2 rounded-lg p-3 flex border-gray-300'}
                                        type='text'
                                        rows='8'
                                        name='message'
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.message && formik.touched.message &&
                                        <p className='text-red-600 text-sm'>
                                            {formik.errors.message}
                                        </p>}
                                </div>
                                <button
                                    type='submit'
                                    onClick={() => formSubmitted()}
                                    className='w-full p-4  mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#09B594] to-[#089C7E] text-white'>
                                    Send Message</button>

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
