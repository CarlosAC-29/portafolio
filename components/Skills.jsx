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


export default function Skills() {
  return (
    <div id='skills' className='w-full p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center text-center'>
            <div className='w-full bg-[#002336] text-center py-3 mb-10 rounded-lg'>
            <p className='font-myFont font-bold text-4xl tracking-widest uppercase text-[#09B594]'>Skills</p>
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
            </div>
        </div>

    </div>
  )
}
