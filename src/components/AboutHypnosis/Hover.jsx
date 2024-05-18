import React, { useState } from 'react'
import Hover1 from "../../assest/Hover1.png"
import Hover2 from "../../assest/Hover2.png"

const Hover = () => {
    const [theme, setTheme] = useState("light")
  return (
    <div className='duration-500 delay-500 transition-all'> 
            {theme === "dark" ? (
            <img src={Hover2} className=' w-[40rem]' onMouseLeave={() => setTheme("light")} />
        ) : (
            <img src={Hover1} className=' w-[40rem]' onMouseEnter={() => setTheme("dark")} />
)}
            </div>
  )
}

export default Hover