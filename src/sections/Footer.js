import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='container flex justify-evenly items-center my-24'>
        <div className='about flex flex-col gap-4'>
            <h3 className='font-bold m-4'>About Us</h3>
            <span className=''>Support Center</span>
            <span className=''>Customer Support</span>
            <span className=''>About Us</span>
            <span className=''>Copyright</span>
            <span className=''>Popular Campaign</span>
        </div>
        <div className='info flex flex-col gap-4'>
            <h3 className='font-bold m-4'>Our Information</h3>
            <span className=''>Return Policy </span>
            <span className=''>Privacy Policy</span>
            <span className=''>Terms & Conditions</span>
            <span className=''>Site Map</span>
            <span className=''>Store Hours</span>
        </div>
        <div className='account flex flex-col gap-4'>
            <h3 className='font-bold m-4'>My Account</h3>
            <span className=''>Press inquiries</span>
            <span className=''>Social media </span>
            <span className=''>directories</span>
            <span className=''>Images & B-roll</span>
            <span className=''>Permissions</span>
        </div>
        <div className='policy flex flex-col gap-4'>
            <h3 className='font-bold m-4'>Policy</h3>
            <span className=''>SApplication security</span>
            <span className=''>Software principles</span>
            <span className=''>Unwanted software policy</span>
            <span className=''>Responsible supply chain</span>
        </div>
    </div>
    </>
  )
}

export default Footer