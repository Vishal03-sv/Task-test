import React from 'react'
import '../App.css'
import { FaArrowDown } from 'react-icons/fa'

const Details = () => {
    return (
        <>
            <div className='container flex justify-around my-16 mx-auto'>
                <div className='boxes flex gap-10 justify-center items-center'>
                    <div className='box1 mt-20'>
                        <div className='box'>
                            <h1 className='font-bold text-3xl text-[#EF9E48]'>80K+</h1>
                            <span className='font-extralight text-sm'>We have more than students</span>
                        </div>
                        <div className='box'>
                            <h1 className='font-bold text-3xl text-[#FA578E]'>90+</h1>
                            <span className='font-extralight text-sm'>Daily updated blog post maintain</span>
                        </div>
                    </div>
                    <div className='box2'>
                        <div className='box'>
                            <h1 className='font-bold text-3xl text-[#FF753A]'>150</h1>
                            <span className='font-extralight text-sm'>Free online tutorials videos avaialble</span>
                        </div>
                        <div className='box'>
                            <h1 className='font-bold text-3xl text-[#E682FF]'>&3M</h1>
                            <span className='font-extralight text-sm'>Job posted everydays with  qualification</span>
                        </div>
                    </div>
                </div>
                <div className='details w-[25rem] mt-[7rem]'>
                    <span className='text-[#EF9E48] text-xs'>Core features</span>
                    <h1 className='font-bold text-3xl text-[#0F2137]'>Smart Jackpots that you may love this anytime & anywhere</h1>
                    <p className='py-4'>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
                    <button className='bg-[#FCF2E8] px-4 py-2 font-bold text-[#EF9E48]'>Explore Details</button>
                </div>
            </div>
            <div className='flex justify-center'>
                    <a href='#Course' className='scroll-smooth'>
                <div className='bg-slate-500 w-10 h-10 p-3 flex justify-center text-center items-center'>
                    <FaArrowDown className='text-white scroll-smooth'/></div></a>
                </div>
        </>
    )
}

export default Details