import React, { useState, useEffect } from 'react';
import BallCanvas from './canvas/Ball';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { technologies } from '../constants/';

const Tech = () => {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase the currentTechIndex to load the next technology
      setCurrentTechIndex((prevIndex) => prevIndex + 1);
    }, 1000); // Delay of 1 second between each technology (adjust as needed)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Slice the technologies array to get the ones to be rendered up to the currentTechIndex
  const technologiesToRender = technologies.slice(0, currentTechIndex + 1);

  return (
    <motion.div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologiesToRender.map((tech) => (
        <div key={tech.name} className='w-28 h-28'>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Tech, '');
