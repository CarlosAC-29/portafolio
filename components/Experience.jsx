import React from 'react'
import Cardexp from './Cardexp'
import univalle from '../public/images/univalle.jpg'
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from 'next/router';
import { motion } from "framer-motion";

export default function Experience() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;
    return (
        <div id='experience' className='  w-full'>
            <div className='max-w-[1300px] mx-auto px-2 mb-20'>
                <motion.div className='w-full  text-center py-3 mb-10 rounded-lg'
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
                <motion.div className=' flex justify-center items-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                >
                    <Cardexp
                        charge={t.experience.card1.charge}
                        tasks={t.experience.card1.taksMessage}
                        company={t.experience.card1.company}
                        date={t.experience.card1.date}
                        location={t.experience.card1.location}
                        logo={univalle}
                    />
                </motion.div>

            </div>
        </div>
    )
}
