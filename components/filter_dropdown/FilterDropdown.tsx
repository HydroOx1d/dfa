import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import styles from '../products_filter/productFilter.module.css'

type Props = {
    value: string 
    options: Array<{
        value: string
    }>
    clickHandleOption(option: string): void
    propartyName: string
}

export default function FilterDropdown({options, clickHandleOption, value, propartyName}: Props) {


  return (
    <div className='flex-column mx-1'>
        <p className='text-sm text-darkGray mb-1.5'>{propartyName}:</p>
        <Menu as="div" className="relative inline-block text-left w-40">
          <div>
            <Menu.Button className={`inline-flex w-full justify-between  text-darkGray ring-1 ring-inset ring-darkGray bg-lightGray ${styles.general}`}>
              {value}
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
            <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md w-40 p-2.5 ring-white h-48 overflow-y-auto">
              <div className="py-1">
    
                {
                    options.map((el, index) => (
                        <Menu.Item key={index} className='w-full'>
                            <button
                                onClick={() => clickHandleOption(el.value)}
                                className='text-darkGray block px-4 py-2 text-sm hover:bg-lightGray hover:text-orange duration-200'
                            >
                                {el.value}
                            </button>
                        </Menu.Item>
                    ))
                }
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
    </div>
   
  )
}
