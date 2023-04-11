import React from "react";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {SectioWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";
import {testimonials} from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image
}) =>
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black p-10 rounded-3xl xs:w-[320px] w-full">
    <p className="text-white font-black text-[48px]"></p>
    <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-[300px] h-[300px] rounded object-cover m-auto"
        />

    <div className="mt-1">
    

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-bold text-[26px]">
            <span className="blue-text-gradient"></span> {name}
          </p>
          <p className="mt-1 text-secondary text-[16px]">
            {designation} {company}
          </p>
          <p className="text-white tracking-wider text-[30px] text-center mt-1">
        {testimonial}
      </p>
        </div>
        
      
      </div>
    </div>
  </motion.div>;

const Feedbacks = () => {
  return (
    <div
      className={`mt-12 bg-black-100 rounded-[20px] max-w-fit m-auto `}
      dir="rtl">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}> وكلاء الكلية</h2>

        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} justify-evenly  flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) =>
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        )}
      </div>
    </div>
  );
};

export default SectioWrapper(Feedbacks, "");
