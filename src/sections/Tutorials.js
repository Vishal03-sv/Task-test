import React from 'react'
import Card from '../components/Card'

const Tutorials = () => {
  return (
    <>
    <div className='container mt-40'>
        <div className='text flex justify-center gap-2 flex-col items-center'>
            <div className='text-[#EF9E48]'>Quality features</div>
            <h1 className='font-bold text-2xl'>Tutorials that people love most</h1>
        </div>
        <div className='mt-8'><Card/></div>
    </div>
    </>
  )
}

export default Tutorials