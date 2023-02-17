import React from 'react'
import Image from 'next/image'
import studyImg from '../public/images/studies.svg'
import en from '../lang/en.json'
import es from '../lang/es.json'
import {useRouter} from 'next/router';

export default function Education() {
    const router = useRouter();
	const {locale} = router;
	const t = locale === 'en' ? en : es;
    return (
        <div id='education' className=' w-full'>
            <div className='max-w-[1240px] mx-auto px-2 mb-40'>
                <div className='w-full bg-[#002336] text-center py-3 mb-10 rounded-lg'>
                    <p className='font-myFont font-bold text-4xl tracking-widest uppercase text-[#09B594]'>{t.education.title}</p>
                </div>
                <div className=' flex flex-wrap justify-center items-center gap-10'>
                    <div className='md:w-[35%] md:h-60 w-[90%] bg-white p-5 text-center rounded-xl shadow-xl flex flex-col justify-center hover:scale-105 ease-in duration-300'>
                            <Image src={studyImg} width={200} height={60} alt=''/>
                            <p className='text-[#24a48b] text-xl mb-2'>{t.education.carda1.title_card}</p>
                            <p className='text-lg'>{t.education.carda1.Institution}</p>
                            <p>{t.education.carda1.time}</p>
                    </div>
                    <div className='md:w-[35%] md:h-60 w-[95%] bg-white p-5 text-center rounded-xl shadow-xl  flex flex-col justify-center gap-2 hover:scale-105 ease-in duration-300'>
                            <Image src={studyImg} width={200} height={60} alt=''/>
                            <p className='text-[#24a48b] text-xl mb-2'>{t.education.carda2.title_card}</p>
                            <p className='text-lg'>{t.education.carda2.Institution}</p>
                            <p>ago.2016 - jul.2018</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
