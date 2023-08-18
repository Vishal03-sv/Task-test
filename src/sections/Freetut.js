import React from 'react'
import '../App.css'
import img1 from '../Asset/Tutorials_section/img1.png'
import img2 from '../Asset/Tutorials_section/img2.png'
import img3 from '../Asset/Tutorials_section/img3.png'
import { FaEye, FaStar } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Freetut = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <>
            <div className='mx-[10.5rem] flex justify-around'>
                <div className='container w-[15rem] my-20'>
                    <Slider {...settings} className='w-[20rem]'>
                        <div className='card'>
                            <div className=''><img src={img1} /></div>
                            <div className='rating'>
                                <div className='stars flex gap-1'><FaStar className='text-[#FFCE1F]' /><FaStar className='text-[#FFCE1F]' /><FaStar className='text-[#FFCE1F]' /><FaStar className='text-[#FFCE1F]' /><FaStar className='text-[#FFCE1F]' /></div>
                                <div className=''>5.0 (392 reviews)</div>
                            </div>
                            <div className='font-bold'>How to work with prototype design with adobe xd featuring tools</div>
                            <div className='flex gap-1 items-center'><FaEye className='' />2,538 students watched</div>
                        </div>
                        <div className='card w-[20rem]'>
                            <div className=''><img src={img2} /></div>
                            <div className='rating flex gap-1 items-center'>
                                <div className='stars flex gap-1'><FaStar className='text-[#FFCE1F]' /><FaStar className='text-[#FFCE1F]' /><FaStar className='text-[#FFCE1F]' /><FaStar className='text-[#FFCE1F]' /><FaStar className='text-[#f9f3db]' /></div>
                                <div className=''>5.0 (392 reviews)</div>
                            </div>
                            <div className='font-bold'>Create multiple artboard by using figma prototyping tools development</div>
                            <div className='flex gap-1 items-center'><FaEye />2,538 students watched</div>
                        </div>
                        <div className='card w-[20rem]'>
                            <div className=''><img src={img3} /></div>
                            <div className='rating flex gap-1 items-center'>
                                <div className='stars flex gap-1'><FaStar className='text-[#FFCE1F]' /><FaStar className='text-[#FFCE1F]' /><FaStar className='text-[#FFCE1F]' /><FaStar className='text-[#FFCE1F]' /><FaStar className='text-[#FFCE1F]' /></div>
                                <div className=''>5.0 (392 reviews)</div>
                            </div>
                            <div className='font-bold'>Convert your web layout theming easily with sketch zeplin extension</div>
                            <div className='flex gap-1 items-center'><FaEye />2,538 students watched</div>
                        </div>
                    </Slider>
                </div>
                <div className='content flex flex-col justify-center items-center'>
                <div className='details w-[25rem]'>
                    <span className='text-[#EF9E48] text-xs'>Free tutorial</span>
                    <h1 className='font-bold text-3xl text-[#0F2137]'>More than  thousand of free tutorial upload every weeks</h1>
                    <p className='py-4'>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
                    <button className='bg-[#FCF2E8] px-4 py-2 font-bold text-[#EF9E48]'>Explore Details</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Freetut