import React from 'react'
import Image from 'next/image';
import Cardexp from './Cardexp'
import univalle from '../public/images/univalle.jpg'
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import worker from '../public/images/worker.json'
import Lottie from 'lottie-react';

export default function Experience() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;
    return (
        <div id='experience' className='w-full bg-[#002336]'>
            <div className='max-w-[1300px] mx-auto px-2 py-24'>
                <motion.div className='w-full text-center rounded-lg'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -40 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <p className='font-myFont font-bold text-[3rem] tracking-widest uppercase text-[#09B594]'>{t.experience.title}</p>
                </motion.div>
                <motion.div className=' flex flex-grow flex-col md:flex-row justify-center items-center gap-0'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                >
                    {/* <Cardexp
                        charge={t.experience.card1.charge}
                        tasks={t.experience.card1.taksMessage}
                        company={t.experience.card1.company}
                        date={t.experience.card1.date}
                        location={t.experience.card1.location}
                        logo={univalle}
                    />
                    <Cardexp
                        charge={t.experience.card2.charge}
                        tasks={t.experience.card2.taksMessage}
                        company={t.experience.card2.company}
                        date={t.experience.card2.date}
                        location={t.experience.card2.location}
                        logo={univalle}
                    /> */}
                    <div className="p-[2em] w-[90%] md:w-[40%]">
                        <Lottie animationData={worker} />
                    </div>

                    <div className="p-[2em] w-[90%] md:w-[60%] ml-8 my-12 bg-[#002336] rounded-xl ">
                        <div className='mb-10'>
                            <h4 className="py-2 text-[#09B594] -white font-bold">{t.experience.card4.charge} || <span>{t.experience.card4.date}</span></h4>
                            <p className="text-base leading-7 text-white font-semibold space-y-4">{t.experience.card4.location}</p>
                            <p className="text-base leading-7 text-white font-semibold space-y-4">{t.experience.card4.company}</p>
                            <p className="text-sm leading-7 text-slate-300 space-y-4">{t.experience.card4.taksMessage}</p>
                        </div>
                        <div className='mb-10'>
                            <h4 className="py-2 text-[#09B594] -white font-bold">{t.experience.card3.charge} || <span>{t.experience.card3.date}</span></h4>
                            <p className="text-base leading-7 text-white font-semibold space-y-4">{t.experience.card3.location}</p>
                            <p className="text-base leading-7 text-white font-semibold space-y-4">{t.experience.card3.company}</p>
                            <p className="text-sm leading-7 text-slate-300 space-y-4">{t.experience.card3.taksMessage}</p>
                        </div>
                        <div className='mb-10'>
                            <h4 className="py-2 text-[#09B594] font-bold">{t.experience.card2.charge} || <span>{t.experience.card2.date}</span></h4>
                            <p className="text-base leading-7 text-white font-semibold space-y-4">{t.experience.card2.location}</p>
                            <p className="text-base leading-7 text-white font-semibold space-y-4">{t.experience.card2.company}</p>
                            <p className=" text-sm leading-7 text-slate-300 space-y-4">{t.experience.card2.taksMessage}</p>
                        </div>
                        <div className=''>
                            <h4 className="py-2 text-[#09B594] -white font-bold">{t.experience.card1.charge} || <span>{t.experience.card1.date}</span></h4>
                            <p className="text-base leading-7 text-white font-semibold space-y-4">{t.experience.card1.location}</p>
                            <p className="text-base leading-7 text-white font-semibold space-y-4">{t.experience.card1.company}</p>
                            <p className="text-sm leading-7 text-slate-300 space-y-4">{t.experience.card1.taksMessage}</p>
                        </div>

                    </div>

                    {/* <div class="p-[2em] w-[90%] md:w-[90%] h-[20em] m-12 bg-[#002336] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 "> */}
                    {/* <figure class="w-10 h-10 p-2 bg-blue-800 rounded-md">
                            <svg fill="#FFFFFF" height="24" width="24">
                                <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
                            </svg>
                        </figure> */}
                    {/* <h4 class="py-2 text-[#09B594] font-bold text-center">{t.experience.card2.charge}</h4>
                        <h4 class="py-2 text-white text-center">{t.experience.card2.date}</h4>
                        <p class="text-base leading-7 text-white font-semibold space-y-4 text-center">{t.experience.card2.location}</p>
                        <p class="text-base leading-7 text-white font-semibold space-y-4 text-center">{t.experience.card2.company}</p>
                        <p class=" max-w-md text-sm leading-7 text-slate-300 space-y-4 text-center">{t.experience.card2.taksMessage}</p>

                    </div> */}

                    {/* <div class=" p-[2em] w-[90%] md:w-[90%] h-[20em] m-12 bg-[#002336] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 ">
                        <h4 class="py-2 text-[#09B594] -white font-bold text-center">{t.experience.card1.charge}</h4>
                        <h4 class="py-2 text-white text-center">{t.experience.card1.date}</h4>
                        <p class="text-base leading-7 text-white font-semibold space-y-4 text-center">{t.experience.card1.location}</p>
                        <p class="text-base leading-7 text-white font-semibold space-y-4 text-center">{t.experience.card1.company}</p>
                        <p class="text-sm leading-7 text-slate-300 space-y-4 text-center">{t.experience.card1.taksMessage}</p>

                    </div> */}


                </motion.div>

            </div>
        </div>
    )
}
