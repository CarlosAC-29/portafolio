import React from 'react'
import Cardexp from './Cardexp'
import univalle from '../public/images/univalle.jpg'

export default function Experience() {
    return (
        <div id='experience' className=' w-full'>
            <div className='max-w-[1240px] mx-auto px-2 mb-40'>
                <div className='w-full bg-[#002336] text-center py-3 mb-10 rounded-lg'>
                    <p className='font-myFont font-bold text-4xl tracking-widest uppercase text-[#09B594]'>Experience</p>
                </div>
                <div className=' flex justify-start items-center'>
                    <Cardexp 
                    charge='WEBSITE ADMINISTRATOR'
                    company='Universidad del Valle'
                    date='Inicio : sept. 2022 - actualidad'
                    location='Cali, Valle del Cauca, Colombia · Híbrido'
                    logo={univalle}
                    />
                </div>

            </div>
        </div>
    )
}
