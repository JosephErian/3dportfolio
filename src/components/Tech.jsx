import React from 'react'
import BallCanvas from './canvas/Ball'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import {technologies} from '../constants/'

const Tech = () => {
  return (
      <motion.div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((tech)=>(
          <div key={tech.name}>
            <BallCanvas icon={tech.icon}/>
          </div>
          ))}
      </motion.div>
  )
}

export default SectionWrapper(Tech, '')