import {useState} from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants/constants';

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between navbar'>
        <img src={logo} alt="hoobank" className='w-[124px] h-[32px]'/>
        <ul className="list-none sm:flex hidden justify-end items-center">

        </ul>
    </nav>
  )
}

export default Navbar