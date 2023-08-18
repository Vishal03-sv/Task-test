import React from 'react'
import { useState } from 'react';
import { FaAngleDown, FaPlay, FaStar } from 'react-icons/fa'

const Courses = () => {
    const detailsArray = [
        {
            button: <FaPlay />,
            "heading": "Professional graphic design tutorial full course with exercise file",
            "body": "Learn essential communication skills to express your needs, listen actively, and resolve conflicts constructively. We'll provide practical tools to enhance your connection and understanding."
        },
        {
            button: <FaPlay />,
            "heading": "Professional graphic design tutorial full course with exercise file",
            "body": "Discover techniques to deepen emotional intimacy and create a safe space for vulnerability. Explore ways to nurture trust, express love, and foster a strong emotional bond with your partner."
        },
        {
            button: <FaPlay />,
            "heading": "Professional graphic design tutorial full course with exercise file",
            "body": "Gain insights into the dynamics that influence your relationship. We'll explore topics such as power dynamics, roles, and expectations, helping you develop a healthy balance and mutual respect."
        },
        {
            button: <FaPlay />,
            "heading": "Professional graphic design tutorial full course with exercise file",
            "body": "Learn strategies to navigate challenges and disagreements effectively. We'll provide tools to address differences, manage stress, and work together as a team to overcome obstacles."
        }
    ];
    return (
        <>
            <div id='Course' className='container scroll-smooth flex items-center justify-center flex-col my-20'>
                <div className='mb-4 flex items-center justify-center flex-col'>
                    <span className='text-[#EF9E48] text-xs'>Core features</span>
                    <h1 className='font-bold text-3xl text-[#0F2137]'>Popular Designing Courses</h1>
                </div>
                {detailsArray.map((item,index)=>{return (
                <Accordion heading={item.heading} body={item.body} key={index}/>
              )})
            }
            </div>
        </>
    )
}

export default Courses



const Accordion = ({ heading, body }) => {
    const [isopen, setisopen] = useState(false);

    const toggleAccordion = () => {
        setisopen((prev) => !prev);
    };

    const accordionStyle = {
        maxHeight: isopen ? "1000px" : "0px",
        opacity: isopen ? "1" : "0",
        transition: "max-height 0.5s ease-out, opacity 0.5s ease-out",
    };

    return (
        <div className="w-full">
            <div className='flex gap-4 my-4 h-20 mx-[10.5rem] justify-around cursor-pointer' onClick={toggleAccordion}>
                    <div className='btn flex px-4 py-4 self-center rounded-[50%] items-center bg-[#FCF2E8] text-[#EF9E48] '><FaPlay /></div>
                    <div className='content flex flex-col'>
                        <div className='rating h-  flex text-[#FFCE1F]'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        <h1 className='font-bold text-xl text-[#0F2137]'>{heading}</h1>
                        <div className='text-xs'>Get your tutorials delivered at let home collect sample from the victory of the managments.</div>
                    </div>
                    <div className='g-btn flex items-center'><button className='p-4 text-white bg-[#3FDBB1]'>7 video classes | 4 hrs</button><span><FaAngleDown /></span></div>
                </div>
            <div style={accordionStyle} className={`${isopen ? '' : 'hidden'} text-1 mx-[10.5rem]`}>
                {body}
            </div>
        </div>
    );
};
