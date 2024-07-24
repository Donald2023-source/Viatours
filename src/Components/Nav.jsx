import { useContext, useState } from 'react'
import logo from '../assets/png/logo-light.svg.png'
import { GeneralContext } from '../context/context';
import { FaBars } from 'react-icons/fa';
const Nav = ({isActive}) => {

  const navLinkStyle = () => {
    return {
      color: isActive ? '1AA47B' : '',
  };
  };
  const {
    nav, toggleNav
  } = useContext(GeneralContext)
  return (
    <>
    <div className='flex items-center lg:block'>
      
      <FaBars className='lg:hidden cursor-pointer' onClick={toggleNav} size={25} color='white'/>
     <nav className='flex items-center py-3 justify-between'>
      <div className='flex justify-around items-center w-[60%]'>
        <img className='lg:h-7 lg:w-fit w-full lg:px-0 px-3' src={logo} alt="" />
            <div>
              <ul className={nav? 'flex flex-grow lg:flex-row lg:top-0 lg:w-fit w-full top-14 lg:bg-transparent bg-[#ffffffca] h-[90%] lg:relative left-0 fixed rounded-md flex-col lg:gap-20 gap-10'  : 'hidden lg:flex gap-20' }>
                <li className='lg:text-white lg:px-0 px-2 mt-1 lg:mt-0 cursor-pointer'>Home</li>
                <li className='lg:text-white lg:px-0 px-2 mt-1 lg:mt-0 cursor-pointer'>Tour</li>
                <li className='lg:text-white lg:px-0 px-2 mt-1 lg:mt-0 cursor-pointer'>Destination</li>
                <li className='lg:text-white lg:px-0 px-2 mt-1 lg:mt-0 cursor-pointer'>Contact</li>
                <li className='lg:text-white lg:px-0 px-2 mt-1 lg:mt-0 cursor-pointer'>Support</li>
                <li className='lg:text-white lg:px-0 px-2 mt-1 lg:mt-0 cursor-pointer lg:hidden'>Sign Up</li>
              </ul>
             </div>
             </div> 

          <span className='flex w-[25%] gap-10 justify-end px-4 items-center text-white'>
            <h2 className='lg:block hidden'>USD</h2>
            <button className='lg:block hidden'>Sign Up</button>
            <button className='border p-1 lg:relative absolute right-0 px-3 rounded-xl'>Login</button>
          </span>
     </nav>
    </div>
    </>
  )
}
export default Nav