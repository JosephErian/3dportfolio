import React from 'react';
import Tilt from 'react-tilt';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name,description, tags, image, source_code_link }) => {
  return (
    <a href={source_code_link}>
    <motion.div variants={fadeIn('up','spring', index * 0.5, 0.75)} >
      <Tilt
      className='bg-tertiary p-5 w-full rounded-2xl sm:w-[360px]'
        options={{
          max:45,
          scale:1,
          speed: 450,
        }} 
        >
        <div className='relative w-full h-[230px]'>
          <img className='object-cover w-full h-full rounded-2xl' src={image} alt={name}/>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
            onClick={()=> window.open(source_code_link, '_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt='github' className='w-1/2 h-1/2 object-contain'/>
            </div>
            {/* <h2>{name}</h2>
            <p>{description}</p>  */}
          </div>
        </div>
      </Tilt>
    </motion.div>
  </a>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionSubText}`}>My Creativity</h3>
        <h1 className={`${styles.sectionHeadText}`}>Projects.</h1>
      </motion.div>
      <motion.p variants={fadeIn()} className='text-secondary text-[17px] flex-wrap'>
        Lorem ipsum dolor sit
        amet consectetur adipisicing
        elit. Numquam rem quisquam dignissimos
        aspernatur, quas recusandae earum corrupti
        assumenda, adipisci, quasi enim. Odio fugiat 
        ducimus debitis repellendus voluptates, 
        aspernatur officia omnis.
      </motion.p>
      <div className='flex flex-row flex-wrap gap-14 justify-center'>
          {projects.map((project, index)=>(
            <ProjectCard key={index} className='justify-center' {...project}/>
          
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,'')