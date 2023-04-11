import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectioWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) => {

  return (
    <Tilt className="xs:w-[250px] w-full m-auto">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          optios={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px]
          py-5 px-6 min-h-[280px] flex flex-col
          items-center justify-evenly"
        >
          <img src={icon} alt={title} 
          className=" object-contain rounded-[20px] " />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>

        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.dev variants={textVariant()}>
      
      <h2 className={styles.heroHeadText}>
      نبذة تاريخية
      </h2>
    </motion.dev>
    <motion.p variants={fadeIn("", '', 0.1, 1)}
    className="mt-4 text-white  md:text-[23px] md:font-bold max-w-3xl    m-auto  md:leading-10 bg-tertiary p-8 rounded-md  "
      dir='rtl'
    >
    <li className='mt-2'>
    أنشئت الكلية بالقرار الوزاري 454 فى 25 مايو 1989 وكانت تابعة لوزارة التعليم العالي ، بلائحة أولى عام 1989 ( مرفق) ، بدأت بأربع أقسام ذات شعب دراسية هى : التربية الفنية ، والتربية الموسيقية ، والاقتصاد المنزلي ، وتكنولوجيا التعليم ، وقسم خامس دون شعبة : قسم العلوم التربوية والنفسية .
      
    </li>
    <li className='mt-5'>وفى عام 95-96 تم تشعيب تكنولوجيا التعليم إلى شعبتين : تكنولوجيا عامة ، وحاسب آلى .</li>
    <li className='mt-5'>وفى عام 91-92 أضيف قسم الإعلام التربوي بشعبتين هما : الصحافة والمسرح .
صدرت اللائحة الثانية للكلية فى ظل وزارة التعليم العالي  لائحة الفصلين الدراسيين بالقرار الوزارى رقم 150 بتاريخ 19-2-1990 ( مرفق) .</li>
    <li className='mt-5'>صدرت الائحة الثالثة عام 1995 للعمل بالفصلين الدراسيين بدلا من العمل بالفصل الدراسى الواحد .</li>
    <li className='mt-5'>وتم ضم الكلية بالقرار الجمهورى رقم 329 فى 8/10/1998 إلى الجامعة نص على الأقسام الخمس والشعب السبع وقسم العلوم التربوية والنفسية كقسم سادس وتعمل الكلية حاليا بالائحة الرابعة الصادرة بالقرار الوزارى 1085 بتاريخ 26/7/2000 .
</li>
    
    </motion.p>
    <motion.dev variants={textVariant()}>
     
      <h2 className={`${styles.heroHeadText} text-center mt-20`}>
    اقسام الكلية
      </h2>
    </motion.dev>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}
                                            
export default SectioWrapper( About, "about" )                                                    
