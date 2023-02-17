import React from 'react'
import Cardexp from './Cardexp'
import univalle from '../public/images/univalle.jpg'
import en from '../lang/en.json'
import es from '../lang/es.json'
import {useRouter} from 'next/router';

export default function Experience() {
    const router = useRouter();
	const {locale} = router;
	const t = locale === 'en' ? en : es;
    return (
        <div id='experience' className=' w-full'>
            <div className='max-w-[1240px] mx-auto px-2 mb-40'>
                <div className='w-full bg-[#002336] text-center py-3 mb-10 rounded-lg'>
                    <p className='font-myFont font-bold text-4xl tracking-widest uppercase text-[#09B594]'>{t.experience.title}</p>
                </div>
                <div className=' flex justify-start items-center'>
                    <Cardexp 
                    charge={t.experience.card1.charge}
                    company={t.experience.card1.company}
                    date={t.experience.card1.date}
                    location={t.experience.card1.location}
                    logo={univalle}
                    />
                </div>

            </div>
        </div>
    )
}
