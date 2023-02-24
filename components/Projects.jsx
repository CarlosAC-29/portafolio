import React from 'react'
import MrLocksmith from '../public/images/MrLocksmith.jpg';
import Mkaly from '../public/images/Mkaly.jpg';
import TaskList from '../public/images/tasklist.jpg'
import ProjectItem from './ProjectItem';
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from 'next/router';


export default function Proyects() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;
  return (
    <div id='projects' className=' w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-40'>
        <div className='w-full bg-[#002336] text-center py-3 mb-10 rounded-lg'>
          <p className='font-myFont font-bold text-4xl tracking-widest uppercase text-[#09B594]'>{t.proyects.title}</p>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            imageIcon={MrLocksmith}
            title='Mr Locksmith Website'
            technologies='ReactJS,Sass'
            linkProject='https://mrlocksmithutah.com/'
            linkGit='https://github.com/CarlosAC-29/Mr.Locksmith' />

          <ProjectItem
            imageIcon={Mkaly}
            title='Mkaly'
            technologies='NextJS ,DJango,Tailwind,MaterialUI'
            linkProject='https://mkaly.vercel.app/'
            linkGit='https://github.com/andrew921as/Mkaly' />

          <ProjectItem
            imageIcon={TaskList}
            title='Task list'
            technologies='PostgresSQL,Express,React,NodeJS'
            linkProject='https://task-list-bay-eight.vercel.app/'
            linkGit='https://github.com/CarlosAC-29/TaskList' />
        </div>
      </div>
    </div>
  )
}
