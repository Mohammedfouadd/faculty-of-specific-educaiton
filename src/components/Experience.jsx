import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectioWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
       
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full' >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[100%] h-[100%] rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold' dir="rtl">{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
          dir="rtl"
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2' dir="rtl">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={` text-white-100 text-[16px] sm:text-[18px] pl-1 tracking-wider`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="">
        <p className={`${styles.sectionSubText} text-center`}>
          شروط القبول و شهادات الالتحاق
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
         الدراجات العلميه
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col text-[25px]  '>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectioWrapper(Experience, "work");