import React, { Fragment } from 'react';
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi';
import { Popover, Transition, Menu } from '@headlessui/react';
import classNames from 'classnames';

const Header = () => {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200 '>

      <div className='relative '>
        <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
        <input type='text' placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4 ' />
      </div>

      <div className='flex items-center gap-2 mr-2'>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(open && 'bg-gray-100','p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100')} >
                <HiOutlineChatAlt fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'> 
                  <div className='bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5'> 
                    <strong className='text-gray-700 font-medium '>Messages</strong>   
                    <div className='mt-2 py-1'> This is a panel </div>
                  </div> 
                </Popover.Panel>
              </Transition>
            </>)}
        </Popover>    

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(open && 'bg-gray-100','p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100')} >
                <HiOutlineBell fontSize={24}/>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'> 
                  <div className='bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5'> 
                    <strong className='text-gray-700 font-medium '>Notifications</strong>   
                    <div className='mt-2 py-1'> This is notification panel </div>
                  </div> 
                </Popover.Panel>
              </Transition>
            </>)}
        </Popover>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
              <span className='sr-only'>Open user menu </span>
              <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center' style={{backgroundImage:'url("https://source.unsplash.com/80x80?face")'}}>
                <span className='sr-only'>Hugh Jackson</span>
              </div>
            </Menu.Button>
          </div>
          <Menu.Items>
            {/* Menu items here */}
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
