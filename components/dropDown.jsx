import React, { useRef, useState, useEffect } from 'react'
import { TbLanguage } from 'react-icons/tb';
const Dropdown = () => {
	const [isOpen, setOpen] = useState(false)
	const menuRefEs = useRef();
	useEffect(() => {
		let handler = (e) => {
			if (!menuRefEs.current.contains(e.target)) {
				setOpen(false)
				//console.log(menuRefEs.current)
			}

		}

		document.addEventListener("mousedown", handler)
	})



	return (
		<div className='mx-2 flex justify-center lg:justify-start items-center pb-32 lg:py-0 relative ease-out'>
			<div className='flex bg-[#002336] items-center'>
				
				<a onClick={() => setOpen(!isOpen)} className='bg-[#002336] p-2 uppercase'>Lang</a>
				<TbLanguage color='#fff' size={30}/>
			</div>
			<div ref={menuRefEs} className={isOpen ? 'm-auto mt-2 lg:m-2 w-12 py-2 uppercase text-sm bg-white rounded-lg shadow-2xl absolute left-0 right-0 lg:left-0 top-[2rem]'
				: 'hidden ease-out'}>
				<a
					download='Carlos_Caceres_CV'
					href='CV.pdf'
					className='block text-center py-2 cursor-pointer text-[#089C7E] hover:bg-[#089C7E] hover:text-white ease-in duration-75'>Es</a>
				<a

					download='Carlos_Caceres'
					href='hojadevida.pdf'
					className='block text-center py-2 cursor-pointer text-[#089C7E] hover:bg-[#089C7E] hover:text-white ease-in duration-75'

				>
					EN
				</a>
			</div>
		</div>
	);
};

export default Dropdown;
