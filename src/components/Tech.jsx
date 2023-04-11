import React from "react";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {SectioWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";
import {testimonials} from "../constants";
import rania from "../assets/avatar/rania.jpg";

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
    className="bg-black p-10 rounded-3xl xs:w-[400px] w-full">
    <p className="text-white font-black text-[48px]" />
    <img
      src={rania}
      alt={`feedback_by-${name}`}
      className="w-[300px] h-[400px] rounded object-cover m-auto"
    />

    <div className="mt-1">
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-bold text-[26px]">
            <span className="blue-text-gradient">@</span> ا.د/ رنيا عبده الامام
          </p>
          <p className="mt-1 text-secondary text-[18px]">
            وكيل الكلية للدراسات العليا و البحوث سابقا
          </p>
          <p className="text-white font-bold text-[22px] mt-4">ابحاث علمية</p>
          <ul className="text-[#aaa6c3] text-[14px] mt-2 mr-2 list-disc">
            <li>
              تكاملية بعض أساليب الطباعة اليدوية والتطريز كأحد المشروعات الصغيرة
              للتنمية المحلية بسيناء&nbsp;,April 2018
            </li>
            <li className="mt-2">
              البعد الجمالى للإزالة والإفادة منها كمشروع إنتاجى صغير&nbsp;,April
              2017
            </li>
          </ul>
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
          <h2 className={styles.sectionHeadText}> عميد الكلية </h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} justify-evenly  flex flex-wrap gap-7`}>
        <FeedbackCard />
      </div>
    </div>
  );
};

export default SectioWrapper(Feedbacks, "Faculty-members");
