import React from 'react'
import HeroImg from "../../assest/hero.png"
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div>
        <div>
            <div className="container py-12">
                <div className="grid grid-cols-1 gap-20 items-center lg:grid-cols-2">
                    <div className='lg:order-1 order-2 max-[991px]:text-center
                    space-y-8'>
                        <h1 className='font-[lora] text-6xl'>
                            Hypnosis helps <br/> 
                            <span className='text-[#6DA4AA]'>
                                change habits.
                            </span>
                        </h1>
                        <p className='text-[#5F949A] text-xl'>
                        Hypnosis is a state of altered consciousness that makes a person more suggestible and less aware. Hypnosis can be used for various purposes, such as therapy, entertainment, education, or self-improvement. Hypnosis is induced by a hypnotist or by a self-hypnosis technique.
                        </p>
                        <div className='flex items-center gap-8 flex-col min-[992px]:flex-row'>
                            <button className='text-xl bg-[#6DA4AA] py-4 px-8 rounded-ss-xl
                                text-[#EEFDFF] rounded-ee-xl hover:bg-[#EEFDFF] border-[1px]
                                hover:border-[#6DA4AA] hover:text-[#6DA4AA] duration-200'>
                                Book Session
                            </button>
                            <div className='flex gap-1 items-center group transition-all
                            duration-900 cursor-pointer'>
                                <IoIosArrowForward  className='text-3xl text-[#6DA4AA]
                                rounded-full border-[#6DA4AA] border-[1px]
                                p-1 group-hover:bg-[#004E56] group-hover:text-white '/>
                                <span className='text-[#6DA4AA] text-xl
                                group-hover:text-[#004E56]'>
                                Learn More
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='lg:order-2 order-1 mx-auto'>
                        <img src={HeroImg}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero