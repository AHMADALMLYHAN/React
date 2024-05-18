import React from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import WhySocial from './components/WhySocial/WhySocial'
import HowWeHelp from './components/HowWeHelp/HowWeHelp'
import AboutHypnosis from './components/AboutHypnosis/AboutHypnosis'
import Resources from './components/Resources/Resources'

const App = () => {
  return (
    <div className='overflow-hidden bg-[#EEFDFF]'>
      <Hero/>
      <About/>
      <WhySocial/>
      <HowWeHelp/>
      <AboutHypnosis/>
      <Resources/>
    </div>
  )
}

export default App