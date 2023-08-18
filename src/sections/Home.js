import React from 'react'
import { FaStar, FaSearch } from "react-icons/fa";
import Navbar from '../components/Navbar'
import '../App.css'
import google from '../Asset/Heroitems/google.png'
import paypal from '../Asset/Heroitems/paypal.png'
import dropbox from '../Asset/Heroitems/Dropbox_logo_2017.png'
import pattern from "../Asset/Heroitems/pattern.png"
import Video from '../components/Video';


const Home = () => {
  return (
    <>

      <div className='container scroll-smooth'>
        <Navbar />
        <div className='home h-[100vh] w-[55rem] absolute z-[-10]'>
          <div className='mt-24 ml-[10.5rem]'>
            <div className='star  flex text-[#02073E] items-center gap-1'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-[#02073E33]' /><span>Trused by over 4,332 students</span>
            </div>
            <h1 className='heading text-[#02073E] mt-4 text-5xl font-bold'>Learn Design <br />with Nia Matos</h1>
            <p>Get your blood tests delivered at let home collect sample <br />from the victory of the managments that supplies best <br />design system guidelines ever.</p>
            <div class="relative mr-6 my-2 mt-4 flex  ">
              <input type="search" className="bg-purple-white w-[400px] h-[70px] shadow rounded border-0 p-3" placeholder="Search Course Name" />
                <FaSearch className='right-0 absolute pin-r pin-m mt-[1.8rem] w-full mr-0 text-purple-lighter text-center'/>
            </div>
            <div className='flex gap-2 mt-6'>
              <span>Sponsored by:</span>
              <img src={paypal}/>
              <img src={google}/>
              <img src={dropbox}/>
            </div>
          </div>
        </div>
        <div className=' flex ml-[43rem] mt-20 h-[25rem] w-[25rem]'>
          <Video/>
          <div className='pattern h-[30rem] w-[40rem]'><img src={pattern}/></div>
        </div>
      </div>
    </>
  )
}

export default Home