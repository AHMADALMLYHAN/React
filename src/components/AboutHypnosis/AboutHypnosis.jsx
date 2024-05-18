import React from 'react'
import Hover from './Hover'


const AboutHypnosis = () => {
  return (
    <div className='py-16'>
        <div className="container flex flex-col items-center gap-8">
            <div>
                <h1 className='font-[Lora] text-5xl text-[#004E56] mb-4'>
                    What is hypnosis?
                </h1>
            </div>
            <div>
                <p className='mx-auto w-[90%] text-center font-[Robot]
                text-[#004E56] text-2xl'>
                    Hypnosis is a state of ‘daydreaming’ that allows the unconscious to take over
                    the conscious and use different techniques to unleash its potential.
                </p>
            </div>
            <div className='grid grid-cols-1  gap-8 min-[992px]:grid-cols-3
             mt-8 min-[992px]:gap-16
             items-center '>
                <div>
                    <div >
                        <h1 className='mb-4 text-[#004E56]
                        text-4xl font-[Lora]'>
                            Hypnosis session
                        </h1>
                        <p className='mb-24 text-[#5F949A]
                        text-2xl font-[roboto]'>
                        Hypnosis is a state of 'daydreaming' that 
                        allows the unconscious to take over the conscious 
                        and use different techniques to unleash its potential.
                        </p>
                    </div>
                    <div>
                        <h1 className='mb-4 text-[#004E56]
                        text-4xl font-[Lora]'>
                            Self-hypnosis
                        </h1>
                        <p className='mb-24 text-[#5F949A]
                        text-2xl font-[roboto]'>
                        Self-hypnosis is a way of using your inner strengths 
                        to control your emotions and cope with various situations. 
                        You can learn 
                        simple techniques to relax, motivate, or heal yourself.
                        </p>
                    </div>
                </div>
                <di className="mb-16 mx-auto">
                    <Hover/>
                </di>
                <div>
                    <div>
                        <h1 className='mb-4 text-[#004E56]
                        text-4xl font-[Lora]'>
                            Hypnosis and children
                        </h1>
                        <p className='mb-24 text-[#5F949A]
                        text-2xl font-[roboto]'>
                        Hypnosis is a method that helps children 
                        relax and concentrate. Children are more 
                        receptive to hypnosis than adults, 
                        because they have no fears or prejudices.
                        </p>
                    </div>
                    <div>
                        <h1 className='mb-4 text-[#004E56]
                        text-4xl font-[Lora]'>
                            Hypnosis and pain
                        </h1>
                        <p className='mb-24 text-[#5F949A]
                        text-2xl font-[roboto]'>
                        Hypnosis can help you change how you feel pain 
                        and make it more bearable. You can use self-hypnosis 
                        to relax 
                        your body and mind and improve your well-being.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className='bg-[#6DA4AA] text-[#EEFDFF] py-4 px-12
                font-[Lora] text-2xl rounded-ss-xl rounded-ee-xl border-[1px]
                hover:text-[#6DA4AA] hover:bg-[#EEFDFF] hover:border-[#6DA4AA]
                duration-200 '>
                    Learn More
                </button>
            </div>
        </div>
    </div>
  )
}

export default AboutHypnosis