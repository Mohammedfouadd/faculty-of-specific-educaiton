import React from "react";
import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBuildingColumns,
  faFax,
  faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";
import avtar from "../assets/avatar/639634048489748790546.jpg";
import hasna from "../assets/avatar/hasnaa.jpg";
import aya from "../assets/avatar/aya.jpg";
import maisa from "../assets/avatar/maisa.jpg";
import dina from "../assets/avatar/dina.jpg";
import hoda from "../assets/avatar/hoda.jpg";

const Works = () => {
  return (
    <div dir="rtl">
      <div className="TESTIMONIALS">
        <h1 className="text-white text-center font-bold text-[48px] mb-20">
          رؤساء الاقسام
        </h1>
        <div className="containers">
          <div className="box">
            <img src={avtar} alt="rrt" />

            <h4 className="flex">
              <h3>ا.د &nbsp; </h3> سعيد عبد الغفار العناني
            </h4>
            <span className="tit">رئيس قسم التربية الفنية</span>
            <div className="rate">
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
            </div>
            <div className="flex text-white gap-2 mt-2">
              <i className="text-cyan-500">
                <FontAwesomeIcon icon={faBuildingColumns} />
              </i>
              <h2 className="font-bold ">الدرجة الوظيفية : استاذ</h2>
            </div>
            <h3 className="font-bold text-[25px] text-white-100 mt-4">
              الابحاث العلمية
            </h3>
            <ul className="text-[#aaa6c3] text-[14px] mt-2 mr-2">
              <li>
                تصور مقترح لمعمل تعليمى لتشكيل الخزف يوائم متطلبات ضمان الجودة
                والاعتماد &nbsp;,April 2009
              </li>
              <li className="mt-2">
                التوظيف الجمالى لشبابيك القلل فى المنتجات الخزفية &nbsp;,April
                2006
              </li>
              <li className="mt-2">
                فاعلية تدريس وحدة تعليمية في الخزف في تنمية بعض القدرات الفنية
                التشكيلية لدى طلاب التربية الفنية &nbsp;,April 2006
              </li>
            </ul>
          </div>

          <div className="box">
            <img src={hasna} alt="" />
            <h4 className="flex">
              {" "}<h3>ا.د &nbsp; </h3>حسناء عبد العاطي الطباخ
            </h4>
            <span className="tit">رئيسة قسم تكنولوجيا التعليم</span>
            <div className="rate">
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
            </div>
            <div className="flex text-white gap-2 mt-2">
              <i className="text-cyan-500">
                <FontAwesomeIcon icon={faBuildingColumns} />
              </i>
              <h2 className="font-bold ">الدرجة الوظيفية : استاذ</h2>
            </div>
            <h3 className="font-bold text-[25px] text-white-100 mt-4">
              الابحاث العلمية
            </h3>
            <ul className="text-[#aaa6c3] text-[14px] mt-2 mr-2">
              <li>
                تصميم استراتيجية لتقصى الويب قائمة على مستويات مختلفة من
                السقالات وأثرها على كفاءة العروض التقديمية لدى طلاب الفرقة
                الرابعة شعبة معلم حاسب آلى.&nbsp;,September 2015
              </li>
              <li className="mt-2">
                أثر اختلاف أنماط الشبكات الاجتماعية في بيئات التدريب الافتراضية
                القائمة على إستراتيجية التعلم التشاركى على تنمية مهارات التقويم
                الالكترونيلدى طلاب الدراسات العليا.&nbsp;,December 2014
              </li>
            </ul>
          </div>

          <div className="box">
            <img src={aya} alt="" />
            <h4 className="flex">
              {" "}<h3>ا.د &nbsp; </h3>ايه محمد فوزى الششتاوى
            </h4>
            <span className="tit">رئيسة قسم الاقتصاد المنزلي</span>
            <div className="rate">
              <i className="text-cyan-500">
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
            </div>
            <div className="flex text-white gap-2 mt-2">
              <i className="text-cyan-500">
                <FontAwesomeIcon icon={faBuildingColumns} />
              </i>
              <h2 className="font-bold">الدرجة الوظيفية : استاذ</h2>
            </div>
            <h3 className="font-bold text-[25px] text-white-100 mt-4">
              الابحاث العلمية
            </h3>
            <ul className="text-[#aaa6c3] text-[14px] mt-2 mr-2">
              <li>
                استخدام البروبوليس فى معالجة أقمشة الملابس القطنية لمقاومة
                الأشعة فوق البنفسجية ونمو البكتريا.&nbsp;,April 2017
              </li>
              <li className="mt-2">
                • تأثير بعض الأساليب التنفيذية على الخواص الوظيفية لأقمشة
                المفروشات المنزلية&nbsp;,June 2016
              </li>
            </ul>
          </div>

          <div className="box">
            <img src={maisa} alt="rrt" />

            <h4 className="flex">
              <h3>ا.د &nbsp; </h3> مايسه علي زيدان{" "}
            </h4>
            <span className="tit">رئيسة قسم الاعلام التربوي </span>
            <div className="rate">
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
            </div>
            <div className="flex text-white gap-2 mt-2">
              <i className="text-cyan-500">
                <FontAwesomeIcon icon={faBuildingColumns} />
              </i>
              <h2 className="font-bold ">الدرجة الوظيفية : استاذ</h2>
            </div>
            <h3 className="font-bold text-[25px] text-white-100 mt-4">
              اللقاءات العلمية
            </h3>
            <ul className="text-[#aaa6c3] text-[14px] mt-2 mr-2">
              <li>
                <span>
                  قضايا التعليم فى ظل الالفية الثالثة -الواقع والمأمول{" "}
                </span>
                <span>جامعة المنوفية - جمهورية مصر العربية </span>
                <span>من Mar 25, 2014 إلى Mar 26, 2014 </span>
              </li>
              <li className="mt-2">
                <strong>المتطلبات التربوية فى مصر بعد25 يناير </strong>
                <span>جامعة المنوفية - جمهورية مصر العربية </span>
                <span>من Sep 10, 2012 إلى Sep 11, 2012 </span>
              </li>
            </ul>
          </div>
          <div className="box">
            <img src={dina} alt="rrt" />

            <h4 className="flex">
              <h3>ا.د &nbsp; </h3> دينا عادل احمد المحلاوي {" "}
            </h4>
            <span className="tit">رئيسة قسم التربية الموسيقية</span>
            <div className="rate">
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
            </div>
            <div className="flex text-white gap-2 mt-2">
              <i className="text-cyan-500">
                <FontAwesomeIcon icon={faBuildingColumns} />
              </i>
              <h2 className="font-bold ">الدرجة الوظيفية : استاذ</h2>
            </div>
            <h3 className="font-bold text-[25px] text-white-100 mt-4">
              الابحاث العلمية
            </h3>
            <ul className="text-[#aaa6c3] text-[14px] mt-2 mr-2">
              <li>
                الأغنية الوطنية المواكبة لثورة شباب 25 يناير &nbsp;,March 2011
              </li>
              <li className="mt-2">
                أسلوب صياغة محمد علي سليمان لمؤلفاته الموسيقية &nbsp;,February
                2011
              </li>
              <li className="mt-2">
                طريقة مقترحة لتدريس غناء المقامات من خلال ألحان الأغاني العربية
                &nbsp;,May 2010
              </li>
            </ul>
          </div>
          <div className="box">
            <img src={hoda} alt="rrt" />

            <h4 className="flex">
              <h3>ا.د &nbsp; </h3> محمود أحمد الوكيل{" "}
            </h4>
            <span className="tit">رئيس قسم العلوم التربوية و النفسية</span>
            <div className="rate">
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
            </div>
            <div className="flex text-white gap-2 mt-2">
              <i className="text-cyan-500">
                <FontAwesomeIcon icon={faBuildingColumns} />
              </i>
              <h2 className="font-bold ">الدرجة الوظيفية : استاذ مساعد</h2>
            </div>
            <h3 className="font-bold text-[25px] text-white-100 mt-4">
              المؤهلات العلمية
            </h3>
            <ul className="text-[#aaa6c3] text-[14px] mt-2 mr-2">
              <li>
                الدكتوراه (جامعة فيلادلفيا) - (جامعة فيلادلفيا) - عام 2014
              </li>
              <li className="mt-2">
                الماجستير ( مناهج وطرق تدريس) - (جامعة طنطا) - عام 2006
              </li>
              <li className="mt-2">
                بكالوريوس (التربيه الموسيقيه) - (جامعة طنطا) - بتقدير جيد جدا مع
                مرتبة الشرف - عام 2000
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
