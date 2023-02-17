import React from 'react'
import SkillsCard from './SkillsCard';
import html from '../public/images/html.png';
import CssIcon from '../public/images/css.png'
import JavaScriptIcon from '../public/images/javascript.png';
import ReactIcon from '../public/images/react.png';
import NodeJSIcon from '../public/images/node.png';
import tailwindIcon from '../public/images/tailwind.png';
import gitIcon from '../public/images/git.png';
import postgresIcon from '../public/images/postgre.png';
import javaIcon from '../public/images/java.png';
import NextJsIcon from '../public/images/nextjs.png';
import cIcon from '../public/images/c-.png';
import pyIcon from '../public/images/python.png'
import en from '../lang/en.json'
import es from '../lang/es.json'
import {useRouter} from 'next/router';


export default function Skills() {
  const router = useRouter();
	const {locale} = router;
	const t = locale === 'en' ? en : es;
  return (
    <div id='skills' className='w-full p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center text-center'>
            <div className='w-full bg-[#002336] text-center py-3 mb-10 rounded-lg'>
            <p className='font-myFont font-bold text-4xl tracking-widest uppercase text-[#09B594]'>{t.skills.title}</p>
            </div>
            <div className='flex flex-wrap justify-around gap-2'>

                <SkillsCard image={html} title='HTML'/>
                <SkillsCard image={CssIcon} title='CSS'/>
                <SkillsCard image={JavaScriptIcon} title='JavaScript'/>
                <SkillsCard image={ReactIcon} title='REACT'/>
                <SkillsCard image={NextJsIcon} title='NextJs'/>
                <SkillsCard image={NodeJSIcon} title='NODE'/>
                <SkillsCard image={tailwindIcon} title='TAILWIND'/>
                <SkillsCard image={gitIcon} title='git'/>
                <SkillsCard image={postgresIcon} title='PostgreSQL'/>
                <SkillsCard image={javaIcon} title='JAVA'/>
                <SkillsCard image={cIcon} title='C++'/>
                <SkillsCard image={pyIcon} title='Python'/>
            </div>
        </div>

    </div>
  )
}
