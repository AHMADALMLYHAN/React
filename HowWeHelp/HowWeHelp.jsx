import React from 'react'
import Img1 from "../../assest/card1.png"
import Img2 from "../../assest/card2.png"
import Img3 from "../../assest/card3.png"
import { IoIosArrowForward } from "react-icons/io";


const Card = [
    {
        id:1,
        img:Img1,
        name:"Motivation",
        description:`Self-confidence, Mental preparation 
        (studies, sport, employment), concentration.`,
    },
    {
        id:2,
        img:Img2,
        name:"Addictions",
        description:`Cigarette, 
        Alcohol,  Drugs, Gambling (electronic or random).`,
    },
    {
        id:3,
        img:Img3,
        name:"Pain perception",
        description:`Pain perception is how we feel and understand pain, 
        which depends on our body,and emotions.`,
    }
]

const HowWeHelp = () => {
  return (
    <div className='pb-28 mb-32'>
        <div className="container">
            <div className='relative'>
                <div className='max-[991px]:text-center'>
                    <div>
                        <h1 className='text-[#004E56] text-5xl
                        font-[loro]'>
                            How we help
                        </h1>
                    </div>
                    <div className='flex justify-between gap-24 items-center'>
                        <div className='w-[60%] max-[992px]:w-[100%]'>
                            <p className='text-[#5F949A] text-[1.125rem]
                            font-[roboto] my-8'>
                            We can help you with hypnosis to quit smoking, 
                            lose weight, or cope with any issue. We have the 
                            skills and the experience to tailor a hypnosis session for you.
                            </p>
                        </div>
                        <div className='max-[991px]:absolute bottom-[-115px] left-[50%] -translate-x-1/2'>
                            <button className='text-2xl bg-[#6DA4AA] py-4 px-8 rounded-ss-xl
                                        text-white rounded-ee-xl hover:bg-white border-[1px]
                                        hover:border-[#6DA4AA] hover:text-[#6DA4AA] duration-200
                                        max-[992px]:px-24'>
                                        View all
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 min-[992px]:grid-cols-3
                 gap-16 py-8'>
                    {
                        Card.map((data) => (
                            <div className='bg-[#6DA4AA]/90 pt-8 pb-16 space-y-8 px-4
                            rounded-lg relative h-[115%]'>
                                <img src={data.img} alt=''/>
                                <h1 className='text-[#004E56] text-[1.75rem]
                                font-[lora] font-semibold '>
                                    {data.name}
                                </h1>
                                <p >
                                    {data.description}
                                </p>
                                <div className='flex gap-3 items-center group cursor-pointer pt-8 absolute bottom-6 font-semibold'>
                                    <IoIosArrowForward className='text-3xl text-[#004E56]
                                    rounded-full border-[#004E56]/90 border-[1px]
                                    p-1 group-hover:scale-120 group-hover:bg-[#EEFDFF]
                                    group-hover:border-[#EEFDFF] duration-300 transition-all
                                    group-hover:text-[#6DA4AA]/90'/>
                                    <span className='text-[#004E56]  text-xl duration-300
                                     group-hover:text-[#EEFDFF] group-hover:scale-125'>
                                        View
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    </div>
  )
}

export default HowWeHelp