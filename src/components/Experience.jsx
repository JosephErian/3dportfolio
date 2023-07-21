import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import {styles} from '../styles';
import {experiences} from '../constants';
import {SectionWrapper} from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({exp}) => {
  return(
    <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #232631' }}
        date={exp.date}
        iconStyle={{background: exp.iconBg}}
        icon={
          <div>
            <img src={exp.icon} alt={exp.company_name} className='object-contain'/>
          </div>
          }
      >
        <h3 className={`${styles.heroSubText}`}>{exp.company_name}</h3>
        <ul className='mt-5 list-disc ml-5 space-y-2'>{exp.points.map((point,index)=> (
          <li key={`exp-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}</ul>
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionSubText}`}>WHAT I HAVE DONE SO FAR</h3>
        <h1 className={`${styles.sectionHeadText}`}>Work Experience.</h1>
      </motion.div>
      <VerticalTimeline>
        {experiences.map((exp,index)=>(
          <ExperienceCard key={index} exp={exp}/>
        ))}
          
      </VerticalTimeline>
    </div>
  )
}

export default SectionWrapper(Experience,'work')