import React from 'react'
import Hamburger from 'hamburger-react'
import {
  
   useState } from 'react'
import { Link } from 'react-router-dom';
function HamburgerComponent(){
    const [open, setOpen] = useState(false);
  return (
    <div className=' text-purple-200 md:hidden leading-[40px] '>
     <Hamburger
     size={24}
     toggled={open}
     toggle={setOpen}
     />
    {open && <div className= ' '>
        <ul className='p-[10px]  text-amber-50  md:hidden '>
        <li className='active:text-purple-300'><Link to='/'>Home</Link></li>
         <li className='active:text-purple-300'><Link to='/properties'>Properties</Link></li>
          <li className='active:text-purple-300'><Link to='/about'>About</Link></li>
           <li className='active:text-purple-300'><Link to='/payment'>Payments</Link></li>
            {/* <li><Link to='/try'>FAQs</Link></li> */}
        </ul>
        </div>}
    </div>
  )
}

export default HamburgerComponent