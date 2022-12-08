import React from 'react'
import Logo from '../img/logo.png'
import {MdShoppingCart} from 'react-icons/md'

const Header = () => {
  return (
    <div>
        <header className='fixed z-50 w-screen p-6 px-16 bg-primary'>

            {/* desktop & tablet */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                
                {/* logo + brand */}
                <div className='flex items-center gap-3'>
                    <img src={Logo} alt="logo" className='w-8 object-cover' />
                    <p className='text-xl text-headingColor font-bold'>
                        City
                    </p>
                </div>

                {/* menu items */}
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        <li className='text-lg text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Home</li>
                        <li className='text-lg text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Menu</li>
                        <li className='text-lg text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>About Us</li>
                        <li className='text-lg text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Service</li>
                    </ul>

                    {/* cart */}
                    <div className='relative flex items-center justify-center '>
                        <MdShoppingCart className='text-textColor text-2xl cursor-pointer' />
                        <div className='absolute -top-2 -right-2 flex items-center justify-center rounded-full bg-cartNumBg w-4 h-4'>
                            <p className='text-xs text-white font-semibold'>
                                2
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            {/* mobile */}
            <div>

            </div>
        </header>
    </div>
  )
}

export default Header