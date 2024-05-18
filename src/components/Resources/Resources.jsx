import React from 'react'


const Resources = () => {
  return (
    <div className='bg-[#004E56] py-24'>
        <div className=''>
            <div className='grid grid-cols-4 gap-8'>
                <div className="flex flex-col gap-12 w-[45%] ">
                    <h1 className='text-[#EEFDFF] font-[lora] text-5xl'>
                        Resources
                    </h1>
                    <p className='text-[#EEFDFF] font-[Roboto] text-xl'>
                    social workers and hypnotherapists who are certified and 
                    trained in hypnosis and other brief therapies. They are also 
                    members of recognized professional associations or orders. 
                    They provide individual and family 
                    interventions, as well as video consultations via Skype2
                    </p>
                    <button className='text-2xl bg-[#6DA4AA]
                    text-[#EEFDFF] mx-auto py-4 px-10 rounded-ss-xl
                    rounded-ee-xl hover:border-[1px] hover:bg-[#004E56]
                    hover:text-[#6DA4AA] duration-600 hover:border-[#6DA4AA] ml-0'>
                        Learn More
                    </button>
                </div>
                <div className=''>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resources