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
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={exp.date}
        iconStyle={{background: exp.iconBg}}
        icon={
          <div>
            <img src={exp.icon} alt={exp.company_name}/>
          </div>
          }
      >
    <h3 className="vertical-timeline-element-title">{exp.company_name}</h3>
    <h4 className="vertical-timeline-element-subtitle">{exp.points}</h4>
    <p>
      {exp.date}
    </p>
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