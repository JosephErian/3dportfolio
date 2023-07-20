import React from 'react'
import { styles } from '../styles'
import ComputersCanvas from './canvas/Computers'

const Hero = () => {
  return (
    <section className='mx-auto relative w-full h-screen'>
      <div className={`${styles.paddingX} absolute mx-auto inset-0 top-[120px] flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div >
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Joe Erian</span></h1>
          <h2 className={`${styles.heroSubText} mt-2 text-white-100`}>Full Stack Web Developer <br className='sm:block hidden '/> Graphic Designer</h2>
        </div>
      </div>
        <ComputersCanvas />
    </section>
  )
}

export default Hero