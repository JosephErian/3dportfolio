import React from 'react';
import Tilt from 'react-tilt';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, live } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name,description, tags, image, source_code_link, live_code_link }) => {
  return (
    //The start of the projectCard
    <motion.div variants={fadeIn('up','spring', index * 0.5, 0.75)} >
      {/*The props of the tilt*/}
      <Tilt
      className='bg-tertiary p-5 w-full rounded-2xl sm:w-[360px]'
        options={{
          max:45,
          scale:1,
          speed: 450,
        }} 
        >
          {/* onClick={()=> window.open(source_code_link, '_blank')} */}
          {/*The props of the image object and others*/} 
        <div className='relative w-full h-[230px]' >
          <a href={source_code_link} target="_blank" rel="noopener" className='cursor-pointer'>
            <img className='object-cover w-full h-full rounded-2xl' src={image} alt={name}/>
          </a>
        </div>
        <div className='mt-5'>
          <div className='flex flex-row justify-between items-center'>
            <h2 className='text-white font-bold text-[24px]'>{name}</h2>
            <div onClick={()=> window.open(live_code_link, '_blank')} className='cursor-pointer font-bold text-[14px] underline text-red-600 border-red-600'>LIVE</div>
          </div>
            <p className='text-secondary text-[14px]'>{description}</p> 
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map(tag =>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
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
      <div className='flex flex-row flex-wrap gap-8 justify-center mt-5'>
          {projects.map((project, index)=>(
            <ProjectCard key={index} {...project}/>
          
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,'')