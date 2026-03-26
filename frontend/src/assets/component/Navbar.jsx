import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Hamburger from 'hamburger-react'
function Navbar() {

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Payments', path: '/payment' },
]

    
  return (
    <div className='style={{ fontFamily: "Inter, sans-serif" }}'>
<div className='flex justify-between p-[20px] font-poppins text-[18px] backdrop:backdrop-blur-2xl bg-white/30 fixed w-full z-10'>
    <div>
        <h1 className='text-white pt-[10px]'>EMS  <br />     <spam className='md:hidden'> <Hamburger/></spam></h1>
</div>
        <nav>
       
            <ul className='flex gap-7 text-white pt-[10px] hidden md:flex'>
                {navLinks.map((link) => (
                    <li key={link.name}>
                       <NavLink to={link.path} className={({ isActive }) => isActive ? 'border-b-2 border-purple-400' : ''}> 
                            {link.name}
                        </NavLink>

                    </li>
                ))}
            </ul>
        </nav>

        <div className='flex gap-5 text-white'>
            <a href="/login" className='pt-[10px]'>sign in</a>
            <button
            className='cursor-pointer
         bg-gradient-to-l from-purple-400 via-purple-600 to-purple-900 p-[3px] pl-[10px] rounded-2xl h-[50px]
            '
            ><Link to="/register">Get started</Link></button>
        </div>
</div>
    </div>
  )
}

export default Navbar