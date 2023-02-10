import React from 'react'
import MrLocksmith from '../public/images/MrLocksmith.jpg';
import Mkaly from '../public/images/Mkaly.jpg';
import ProjectItem from './ProjectItem';


export default function Proyects() {
  return (
    <div id='projects' className=' w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-40'>
        <div className='w-full bg-[#002336] text-center py-3 mb-10 rounded-lg'>
          <p className='font-myFont font-bold text-4xl tracking-widest uppercase text-[#09B594]'>Projects</p>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem imageIcon={MrLocksmith} title='Mr Locksmith Website' technologies='ReactJS,Sass' linkProject='https://mrlocksmithutah.com/' />
          <ProjectItem imageIcon={Mkaly} title='Mkaly' technologies='NextJS ,DJango,Tailwind,MaterialUI' linkProject='https://mkaly.vercel.app/' />
        </div>
      </div>
    </div>
  )
}
