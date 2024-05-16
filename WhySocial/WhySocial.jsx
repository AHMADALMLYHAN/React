import React, { useState } from 'react'
import Image from "../../assest/Image.png"
import { IoIosArrowDown } from "react-icons/io";

const Accordin = [
    {
        id:1,
        qusetion:"What are the session prices?",
        answer:`The primary mission of the Social Hypnosis 
        Clinic is to facilitate access to hypnosis 
        and its multiple benefits to as many people 
        as possible. Thanks to a flexible pricing 
        structure, inspired by the Buddhist practice 
        of Dana, everyone contributes to the operation
        of the Clinic according to their means, in order 
        to ensure the viability and availability of services 
        for the community.`
    },
    {
        id:2,
        qusetion:"What are the multiple benefits of hypnosis according to the Clinic?",
        answer:`The Clinic's secondary mission is to promote 
        hypnosis as a tool for personal development, 
        well-being and overall health. Indeed, 
        everyone can benefit from hypnosis to escape 
        from situations of dependence, phobias, stress, 
        or to regain balance and inner peace.`
    }
]

const WhySocial = () => {
    const [accordingOpen,setAccordingOpen] = useState(false)

    const accordinToggle = (index) => {
        if(accordingOpen === index){
            setAccordingOpen(null)
        }else{
            setAccordingOpen(index)
        }}
  return (
    <div className='my-16'>
        <div className="container py-24">
            <div className="grid grid-cols-1 min-[992px]:grid-cols-2 gap-16">
                <div className='order-2 min-[992px]:order-1 flex flex-col gap-4
                mt-8'>
                    <h1 className='text-5xl text-[#004E56] mb-8'>
                        Why “Social”
                    </h1>
                    <p className='text-[#6DA4AA] text-2xl my-8'>
                    The Social Hypnosis Clinic 
                    offers hypnosis services at 
                    flexible prices and aims to 
                    promote hypnosis as a means 
                    of well-being and health. 
                    It is aimed at all those 
                    who want to free themselves 
                    from their difficulties and 
                    find inner harmony.
                    </p>
                    <div className='h-[50%]'>
                        {
                            Accordin.map((data , index) => (
                                <div key={data.id}>
                                    <div className='flex justify-between items-center'>
                                        <h1 className='text-[#004E56] text-3xl'>
                                            {data.qusetion}
                                        </h1>
                                        <button  onClick={() => accordinToggle(index)}>
                                             <IoIosArrowDown  className={`text-5xl text-[#6DA4AA] p-1 duration-200
                                                rounded-full border-[#6DA4AA] border-[1px] ${accordingOpen === index ?
                                                "bg-[#ADD1D4] text-white rotate-[-180deg] border-none duration-300": "hover:bg-[#ADD1D4] hover:text-white"  
                                            }`}/>
                                        </button>
                                    </div>
                                    <div className='transition-all duration-500'>
                                        <p className={`mt-4 text-[#5F949A] text-xl max-h-0 
                                            ${accordingOpen === index ? "block max-h-full " : "hidden"}`}>
                                            {data.answer}
                                        </p>
                                    </div>
                                    <div className='w-full h-[1px] bg-[#ADD1D4]
                                    my-4'></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='order-1 min-[992px]:order-2 mx-auto'>
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhySocial