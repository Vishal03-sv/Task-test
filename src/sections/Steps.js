import React from 'react'
import arrow from '../Asset/arrow.png'

const Steps = () => {
    return (
        <>
            <div className='container flex justify-around my-16 mx-auto flex-col'>
                <div className='mb-4 flex items-center justify-center flex-col'>
                    <span className='text-[#EF9E48] text-xs'>Whats the function</span>
                    <h1 className='font-bold text-3xl text-[#0F2137]'>Let’s see how it works</h1>
                </div>
                <img src={arrow} className='h-auto  w-[45rem] absolute mx-auto' style={{zIndex:-1,left:"18rem"}}/>
                <div className='flex justify-evenly mx-auto w-[100%] mt-28'>
                      <span className='rounded-[50%] p-3' style={{boxShadow: "0px 14px 20px 0px #4C77AB1A" }}>1</span>
                      <span className='rounded-[50%] p-3' style={{boxShadow: "0px 14px 20px 0px #4C77AB1A"}}>2</span>
                      <span className='rounded-[50%] p-3' style={{boxShadow: "0px 14px 20px 0px #4C77AB1A"}}>3</span>
                      <span className='rounded-[50%] p-3' style={{boxShadow: "0px 14px 20px 0px #4C77AB1A"}}>4</span>
                </div>
                <div className='flex justify-evenly mt-5 mx-auto w-[80%]'>
                    <div className='p-6'>
                        <h5 className='font-semibold'>Set disbursement Instructions</h5>
                        <p className='text-xs pt-5'>Get your blood tests delivered at <br/>home collect a sample from the<br/>your blood tests.</p>
                    </div>
                    <div className='p-6'>
                        <h5 className='font-semibold'>Assembly retrieves funds from your account</h5>
                        <p className='text-xs pt-5'>Get your blood tests delivered at<br/>home collect a sample from the<br/>your blood tests.</p>
                    </div>
                    <div className='p-6'>
                        <h5 className='font-semibold'>Assembly initiates disbursement</h5>
                        <p className='text-xs pt-5'>Get your blood tests delivered at<br/>home collect a sample from the<br/>your blood tests.</p>
                    </div>
                    <div className='p-6 pl-10'>
                        <h5 className='font-semibold'>Customer receives funds payment</h5>
                        <p className='text-xs pt-5'>Get your blood tests delivered at<br/>home collect a sample from the<br/>your blood tests.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps