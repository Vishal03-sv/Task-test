import React from 'react'
import '../App.css'
import logo from '../Asset/Heroitems/logo.png'

const Navbar = () => {
    return (
        <>
            <div className='nav container flex justify-evenly  items-center py-2'>
                <div className='logo flex gap-1'>
                    <img src={logo} alt='logo' className='' /><span className='font-extrabold text-[#02073E] text-lg'>LANDGURU</span>
                </div>
                <div className='menus flex'>
                    <ul className='flex list-none gap-3' >
                        <li className=''>Home</li>
                        <li className='flex'>Adversite<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                        </li>
                        <li className='flex'>Supports<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                        </li>
                        <li className=''>Contact</li>
                    </ul>
                </div>
                <button className='bg-[#FCF2E8] px-4 py-2 font-bold text-[#EF9E48]'>TRY FOR FREE</button>
            </div>
        </>
    )
}

export default Navbar