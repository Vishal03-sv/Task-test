import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';


const QuAns = () => {
    const faq = [
        {
            "question": "App installation failed, how to update system information?",
            "answer": "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information"
        },
        {
            "question": "How to contact with riders emergency ?",
            "answer": "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information"
        },
        {
            "question": "Website reponse taking time, how to improve?",
            "answer": "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information"
        },
        {
            "question": "New update fixed all bug and issues",
            "answer": "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information."
        }
    ];
    return (
        <>
            <div className='container  flex flex-col mb-4'>
                <div className='mb-6 flex items-center justify-center flex-col'>
                    <span className='text-[#EF9E48] text-xs'>Frequent Question</span>
                    <h1 className='font-bold text-3xl text-[#0F2137]'>Do you have any question</h1>
                </div>
                <div className="flex flex-col mx-[10.5rem] gap-2">{
                    faq.map((item, index) => {
                        return (
                            <Accordion question={item.question} answer={item.answer} key={index} />
                        )
                    })
                }</div>
            </div>
        </>
    )
}

export default QuAns



const Accordion = ({ question, answer }) => {

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
        <div className="">
            <div className="heading flex gap-4 w-[55rem] mb-3 select-none  cursor-pointer text-1 font-bold border-b-[1px] py-2 border-gray-200" onClick={toggleAccordion}><span className='rounded-[50%] bg-[#3FDBB1] text-white text-center p-1'>{!isopen ? "+":"-"}</span>
                {question} 
            </div>
            <div style={accordionStyle} className={`${isopen ? '' : 'hidden'} text-1`}>
                {answer}
            </div>
        </div>
    );
};
