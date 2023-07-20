import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import {navLinks} from '../constants/index.js' 
import { logo, menu, close} from '../assets';


const Navbar = () => {
  const [active,setActive] = useState('');
  const [toggle,setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to= '/'
          className='flex justify-start items-center '
          onClick={()=>{
            setActive('');
            window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt='logo' className='w-5 h-8 object-contain'/>
          <p className='text-[18px] flex text-white font-bold cursor-pointer'>oe Erian &nbsp;<span className='sm:block hidden'>| Web Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=>setToggle(!toggle)}
          />
         <div className={`${toggle ? 'flex' : 'hidden'} rounded-xl p-6 bg-[#915eff] opacity-90 absolute top-20 right-0 mx-4 my-2 min-w-[140px]`}>
         <ul className='list-none flex items-start justify-end flex-col gap-4'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-black"
              } hover:text-white text-[18px] font-medium cursor-pointer font-poppins`}
              onClick={() => {
                setActive(nav.title);
                setToggle(!toggle)
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
         </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar