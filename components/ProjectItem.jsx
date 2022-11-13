import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectItem({imageIcon, linkProject, title, technologies}) {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-5 group transition-all ease-in hover:bg-gradient-to-r from-[#06755F] to-[#089C7E] '>
    <Image className='rounded-xl group-hover:opacity-10' src={imageIcon} alt='/'/>
    <div className='hidden group-hover:block absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]' >
      <h3 className='text-[1.6rem] text-white font-bold tracking-wider text-center'>{title}</h3>
      <p className='pb-4 pt-2 text-white'>{technologies}</p>
      <Link href={linkProject}>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer transition-all ease-out duration-200 hover:scale-125'>More Info</p>
      </Link>
    </div>
</div>
  )
}
