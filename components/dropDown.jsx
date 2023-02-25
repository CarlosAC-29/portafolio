import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { TbLanguage } from 'react-icons/tb';
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from "next/router"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;

  const changeLog = (e) => {
    // console.log(e.target.value);
    router.push(router.pathname, router.pathname, {
      locale: e.target.value
    })
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center uppercase bg-inherit px-4 py-2  hover:text-[#09B594]">
        {t.navbar.lang}
          <TbLanguage size={25} style={{ marginLeft: '10px' }} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute block text-center right-9 z-10  w-[50%] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={changeLog}
                  value='en'
                  className={classNames(
                    active ? 'w-[100%] uppercase block p-2 cursor-pointer text-[#089C7E] hover:bg-[#089C7E] hover:text-white ease-in duration-75' : 'text-gray-700',
                    'w-[100%]  px-4 py-2 text-sm'
                  )}
                >
                  EN
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={changeLog}
                value='es'
                className={classNames(
                  active ? 'w-[100%] uppercase block p-2 cursor-pointer text-[#089C7E] hover:bg-[#089C7E] hover:text-white ease-in duration-75' : 'text-gray-700',
                  'w-[100%]  px-4 py-2 text-sm'
                )}
                >
                  ES
                </button>
              )}
            </Menu.Item>


          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
