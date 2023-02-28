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
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <p className='font-myFont font-bold text-4xl tracking-widest uppercase text-[#09B594]'>{t.education.title}</p>
                </motion.div>
                {/* <div className=' flex flex-wrap justify-center items-center gap-10'>
                    <div className='md:w-[35%] md:h-60 w-[90%]  p-5 text-center rounded-xl flex flex-col justify-center gap-2 hover:scale-105 ease-in duration-300'>
                            <Image src={studyImg} width={200} height={60} alt=''/>
                            <p className='text-[#24a48b] text-xl mb-2'>{t.education.carda1.title_card}</p>
                            <p className='text-lg flex justify-center items-center gap-2'> {t.education.carda1.Institution}</p>
                            <p className='flex justify-center items-center gap-2'><FaCalendarAlt color='#002336' /> {t.education.carda1.time}</p>
                    </div>
                    <div className='md:w-[35%] md:h-60 w-[95%] text-center rounded-xl  flex flex-col justify-center gap-2 hover:scale-105 ease-in duration-300'>
                            <Image src={studyImg} width={200} height={60} alt=''/>
                            <p className='text-[#24a48b] text-xl mb-2'>{t.education.carda2.title_card}</p>
                            <p className='text-lg'>{t.education.carda2.Institution}</p>
                            <p className='flex justify-center items-center gap-2'><FaCalendarAlt color='#002336' /> ago.2016 - jul.2018</p>
                    </div>
                </div> */}
                <div className='flex justify-center items-center'>

                    <ol class="relative md:left-[12%] border-l-2 border-[#09B594] dark:border-gray-700">
                        <li
                            class="mb-10 ml-4 "
                        >

                            <div class="absolute w-3 h-3 bg-[#09B594] rounded-full mt-1.5 -left-1.5 border border-[#002336] dark:border-gray-900 dark:bg-gray-700"></div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: -100 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <time class="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-500">Ago.2016 - Jul.2018</time>
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{t.education.carda2.title_card}</h3>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{t.education.carda2.Institution}</p>
                            </motion.div>
                        </li>
                        <li class="mb-10 ml-4 ">
                            <div className='relative lg:right-80 lg:text-right'>
                                <div class="relative top-5 w-3 h-3 bg-[#09B594] rounded-full mt-1.5 -left-[1.5rem] lg:left-[18.5rem] border border-[#002336] dark:border-gray-900 dark:bg-gray-700"></div>
                                <motion.div
                                    className='lg:relative right-10'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 100 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <time class="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-500">{t.education.carda1.time}</time>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{t.education.carda1.title_card}</h3>
                                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">{t.education.carda1.Institution}</p>
                                </motion.div>
                            </div>
                        </li>

                    </ol>
                    {/* <div class="">
                        <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

                            <div class="relative text-gray-700 antialiased text-sm font-semibold">


                                <div class="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>


                                <div class="mt-6 sm:mt-0 sm:mb-12">
                                    <div class="flex flex-col sm:flex-row items-center">
                                        <div class="flex justify-start w-full mx-auto items-center">
                                            <div class="w-full sm:w-1/2 sm:pr-8">
                                                <div class="p-4 bg-white rounded shadow">
                                                    Now this is a story all about how,
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>


                                <div class="mt-6 sm:mt-0 sm:mb-12">
                                    <div class="flex flex-col sm:flex-row items-center">
                                        <div class="flex justify-end items-center">
                                            <div class="w-full sm:w-1/2 sm:pl-8">
                                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t.education.carda1.time}</time>
                                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{t.education.carda1.title_card}</h3>
                                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">{t.education.carda1.Institution}</p>
                                            </div>
                                        </div>
                                        <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}
