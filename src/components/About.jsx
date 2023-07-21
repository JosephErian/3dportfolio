import React from 'react';
import { services } from '../constants';
import { styles } from '../styles';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import {SectionWrapper} from '../hoc/'
import {textVariant, fadeIn} from '../utils/motion'

export const ServiceCard = ({title, icon, index}) =>{
  return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div 
              variants={fadeIn('right','spring', 0.5 * index, 0.75)}
              className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly'
              >
                <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
                <h2 className='text-white text-[20px] text-center'>{title}</h2>
              </div>
            </motion.div>
          </Tilt>
  )
}


const About = () => {
  return (
    <div className={`mt-10`}>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionSubText}`}>Introduction</h3>
        <h1 className={`${styles.sectionHeadText}`}>Overview.</h1>
      </motion.div>
      <motion.p variants={fadeIn('','',0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Hello Boys Im gonna show you the hell of  a night in my club
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 flex-row w-full'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))} 
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')