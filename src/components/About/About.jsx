import React from 'react'
import AboutImg from "../../assest/AboutImg.png"

const About = () => {
  return (
    <div>
        <div className='bg-[#004E56] py-24'>
            <div className="conatiner">
                <div className='flex flex-col text-center gap-6'>
                    <div>
                        <img src={AboutImg} alt="" className='mx-auto' />
                    </div>
                    <p className='font-[500] text-[#EEFDFF]
                    text-3xl  font-[Lora] w-[80%] mx-auto tracking-wider'>
                    The Social Hypnosis Clinic of Quebec 
                    is a center <br/> specializing in the use of 
                    hypnosis to help people overcome their 
                    personal, professional or relational difficulties. The clinic team is made up of qualified and experienced professionals who offer personalized services 
                    adapted to the needs of each client.
                    </p>
                    <button className='text-2xl bg-[#6DA4AA]
                    text-[#EEFDFF] mx-auto py-4 px-6 rounded-ss-xl
                    rounded-ee-xl hover:border-[1px] hover:bg-[#004E56]
                    hover:text-[#6DA4AA] duration-200 hover:border-[#6DA4AA]'>
                        Book Session
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About