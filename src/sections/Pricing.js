import React from 'react'


const Pricing = () => {
    return (
        <>
            <div className='container flex justify-around my-16 mx-auto flex-col'>
                <div className='mb-4 flex items-center justify-center flex-col'>
                    <span className='text-[#EF9E48] text-xs'>Pricing Plan</span>
                    <h1 className='font-bold text-3xl text-[#0F2137]'>Choose your pricing policy</h1>
                </div>
                <div className='bg-[#F7F8FB] p-1 flex self-center w-[13%] items-center justify-center text-xs'><span className='p-1 rounded-md' style={{ boxShadow: "0px 3px 3.799999952316284px 0px #264E761A" }}>Monthly Plan</span><span className='p-1'>Annual Plan</span></div>
                <div className='plans flex justify-around gap-5 items-center'>
                    <div className='free p-4 flex flex-col gap-3 rounded-lg w-[20rem]'>
                        <span className='font-semibold'>Free Plan</span>
                        <p className='pt-1 text-xs'>For Small teams or office</p>
                        <ul className='list-none text-sm'>
                            <li className='my-4'><span className='bg-[#3FDBB1] px-2 py-1 mr-2 text-white rounded-[50%]'>✓</span>Ultimate access to all course, exercises and assessments</li>
                            <li className='my-4'><span className='bg-[#3FDBB1] px-2 py-1 mr-2 text-white rounded-[50%]'>✓</span>Free acess for all kind of exercise corrections with downloads.</li>
                            <li className='my-4'><span className='bg-[#3FDBB1] px-2 py-1 mr-2 text-white rounded-[50%]'>✓</span>Total assessment corrections with free download access system</li>
                            <li className='my-4 text-[#606770]'><span className='bg-slate-400 px-2 py-1 mr-2 text-white rounded-[50%]'>✕</span>Unlimited download of courses on the mobile app contents</li>
                            <li className='my-4 text-[#606770]'><span className='bg-slate-400 px-2 py-1 mr-2 text-white rounded-[50%]'>✕</span>Download and print courses and exercises in PDF</li>
                        </ul>
                    </div>
                    <div className='paid p-4 flex flex-col gap-3 rounded-lg border-[#3FDBB1] border-2 w-[20rem]' >
                        <div className='text-white text-xs bg-[#EF9E48] p-2 my-2 w-24 rounded-lg'>Recommended</div>
                        <div className='flex justify-between'>
                        <div>
                        <span className='font-semibold'>Premium</span>
                        <p className='pt-1 text-xs'>For startup enterprise</p>
                        </div>
                        <div className='flex flex-col'>
                        <span>Starting From</span><span className='text-[#3FDBB1] font-bold'>49.99/mo</span>
                        </div>
                        </div>
                        <ul className='list-none text-sm'>
                            <li className='my-4'><span className='bg-[#3FDBB1] px-2 py-1 mr-2 text-white rounded-[50%]'>✓</span>Ultimate access to all course, exercises and assessments</li>
                            <li className='my-4'><span className='bg-[#3FDBB1] px-2 py-1 mr-2 text-white rounded-[50%]'>✓</span>Free acess for all kind of exercise corrections with downloads.</li>
                            <li className='my-4'><span className='bg-[#3FDBB1] px-2 py-1 mr-2 text-white rounded-[50%]'>✓</span>Total assessment corrections with free download access system</li>
                            <li className='my-4'><span className='bg-[#3FDBB1] px-2 py-1 mr-2 text-white rounded-[50%]'>✓</span>Unlimited download of courses on the mobile app contents</li>
                            <li className='my-4'><span className='bg-[#3FDBB1] px-2 py-1 mr-2 text-white rounded-[50%]'>✓</span>Download and print courses and exercises in PDF</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing