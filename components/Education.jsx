import React from 'react'
import Image from 'next/image'
import studyImg from '../public/images/studies.svg'
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from 'next/router';
import { FaCalendarAlt, FaUniversity } from 'react-icons/fa'
import { motion } from "framer-motion";

export default function Education() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;
    return (
        <div id='education' className=' w-full'>
            <div className='max-w-[1300px] mx-auto px-2 mb-40'>
                <motion.div className='w-full bg-[#002336] text-center py-3 mb-10 rounded-lg'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -40 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <p className='font-myFont font-bold text-4xl tracking-widest uppercase text-[#09B594]'>{t.education.title}</p>
                </motion.div>

                <div className='flex justify-center items-center'>

                    <ol class="relative md:left-[12%] border-l-2 border-[#09B594] ">
                        <li
                            class="mb-10 ml-4 "
                        >

                            <div class="absolute w-3 h-3 bg-[#09B594] rounded-full mt-1.5 -left-1.5 border border-[#002336]"></div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: -40 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <time class="mb-1 text-base font-normal leading-none text-gray-400 ">Ago.2016 - Jul.2018</time>
                                <h3 class="text-xl font-semibold text-gray-900 ">{t.education.carda2.title_card}</h3>
                                <p class="mb-4 text-base font-normal text-gray-500">{t.education.carda2.Institution}</p>
                            </motion.div>
                        </li>
                        <li class="mb-10 ml-4 ">
                            <div className='relative lg:right-80 lg:text-right'>
                                <div class="relative top-5 w-3 h-3 bg-[#09B594] rounded-full mt-1.5 -left-[1.5rem] lg:left-[18.5rem] border border-[#002336]"></div>
                                <motion.div
                                    className='lg:relative right-10'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 60 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <time class="mb-1 text-base font-normal leading-none text-gray-400 ">{t.education.carda1.time}</time>
                                    <h3 class="text-xl font-semibold text-gray-900 ">{t.education.carda1.title_card}</h3>
                                    <p class="text-base font-normal text-gray-500 ">{t.education.carda1.Institution}</p>
                                </motion.div>
                            </div>
                        </li>

                    </ol>

                </div>
            </div>
        </div>
    )
}
