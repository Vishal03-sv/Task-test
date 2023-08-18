import React from 'react'
import '../App.css'
import img1 from '../Asset/Tutorials_section/img1.png'
import img2 from '../Asset/Tutorials_section/img2.png'
import img3 from '../Asset/Tutorials_section/img3.png'
import { FaEye, FaStar } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Card = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
      };
  return (
    <>
    <Slider {...settings} className='card-container'> 
        <div className='card'>
            <div className=''><img src={img1}/></div>
            <div className='rating'>
                <div className='stars flex gap-1'><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/></div>
                <div className=''>5.0 (392 reviews)</div>
            </div>
            <div className='font-bold'>How to work with prototype design with adobe xd featuring tools</div>
            <div className='flex gap-1 items-center'><FaEye className=''/>2,538 students watched</div>
        </div>
        <div className='card w-[20rem]'>
            <div className=''><img src={img2}/></div>
            <div className='rating flex gap-1 items-center'>
                <div className='stars flex gap-1'><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#f9f3db]'/></div>
                <div className=''>5.0 (392 reviews)</div>
            </div>
            <div className='font-bold'>Create multiple artboard by using figma prototyping tools development</div>
            <div className='flex gap-1 items-center'><FaEye/>2,538 students watched</div>
        </div>
        <div className='card w-[20rem]'>
            <div className=''><img src={img3}/></div>
            <div className='rating flex gap-1 items-center'>
                <div className='stars flex gap-1'><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/></div>
                <div className=''>5.0 (392 reviews)</div>
            </div>
            <div className='font-bold'>Convert your web layout theming easily with sketch zeplin extension</div>
            <div className='flex gap-1 items-center'><FaEye/>2,538 students watched</div>
        </div> 
        <div className='card w-[20rem]'>
            <div className=''><img src={img3}/></div>
            <div className='rating flex gap-1 items-center'>
                <div className='stars flex gap-1'><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/></div>
                <div className=''>5.0 (392 reviews)</div>
            </div>
            <div className='font-bold'>Convert your web layout theming easily with sketch zeplin extension</div>
            <div className='flex gap-1 items-center'><FaEye/>2,538 students watched</div>
        </div>
         <div className='card w-[20rem]'>
            <div className=''><img src={img3}/></div>
            <div className='rating flex gap-1 items-center'>
                <div className='stars flex gap-1'><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/></div>
                <div className=''>5.0 (392 reviews)</div>
            </div>
            <div className='font-bold'>Convert your web layout theming easily with sketch zeplin extension</div>
            <div className='flex gap-1 items-center'><FaEye/>2,538 students watched</div>
        </div>
        <div className='card w-[20rem]'>
            <div className=''><img src={img3}/></div>
            <div className='rating flex gap-1 items-center'>
                <div className='stars flex gap-1'><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/><FaStar className='text-[#FFCE1F]'/></div>
                <div className=''>5.0 (392 reviews)</div>
            </div>
            <div className='font-bold'>Convert your web layout theming easily with sketch zeplin extension</div>
            <div className='flex gap-1 items-center'><FaEye/>2,538 students watched</div>
        </div>
    </Slider>
    </>
  )
}

export default Card