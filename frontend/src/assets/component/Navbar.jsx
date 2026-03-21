import React from 'react'

function Navbar() {
  return (
    <div className='style={{ fontFamily: "Inter, sans-serif" }}'>
<div className='flex justify-between p-[20px] font-poppins text-[18px] backdrop:backdrop-blur-2xl bg-white/30'>
    <div>
        <h1 className='text-white'>EMS</h1>
</div>
        <nav>
            <ul className='flex gap-7 text-white'>
                <li><a href="/">Home</a></li>
                <li><a href="/properties">Properties</a></li>
                <li><a href="/tenants">Tenants</a></li>
                <li><a href="/payments">Payments</a></li>
            </ul>
        </nav>

        <div className='flex gap-5 text-white'>
            <a href="#">sign in</a>
            <button
            className='cursor-pointer
         bg-gradient-to-l from-purple-400 via-purple-600 to-purple-900 p-[3px] pl-[10px] rounded-2xl
            '
            >Get started</button>
        </div>
</div>
    </div>
  )
}

export default Navbar