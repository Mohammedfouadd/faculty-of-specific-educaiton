import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mosi,
    college,
    alom
  } from "../assets";
  import rania from '../assets/avatar/639634048489748790546.jpg';
  import noga from '../assets/avatar/nogajpg.jpg';
  import akrm from '../assets/avatar/akram.jpg';

  
  export const navLinks = [
    {
      id: "about",
      title: "About"
    },
    {
      id: "Faculty-members",
      title: "Faculty members"
    },
    {
      id: "contact",
      title: "Contact"
    }
  ];
  
  const services = [
    {
      title: "تكنولوجيا التعليم",
      icon: web
    },
    {
      title: "الأعلام التربوي",
      icon: mobile
    },
    {
      title: "الاقتصاد المنزلي",
      icon: backend
    },
    {
      title: "التربية الفنية",
      icon: creator
    },
    {
      title: "التربية الموسيقيه",
      icon: mosi
    },
    {
      title: "العلوم التربوية والنفسية ",
      icon: alom
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html
    },
    {
      name: "CSS 3",
      icon: css
    },
    {
      name: "JavaScript",
      icon: javascript
    },
    {
      name: "TypeScript",
      icon: typescript
    },
    {
      name: "React JS",
      icon: reactjs
    },
    {
      name: "Redux Toolkit",
      icon: redux
    },
    {
      name: "Tailwind CSS",
      icon: tailwind
    },
    {
      name: "Node JS",
      icon: nodejs
    },
    {
      name: "MongoDB",
      icon: mongodb
    },
    {
      name: "Three JS",
      icon: threejs
    },
    {
      name: "git",
      icon: git
    },
    {
      name: "figma",
      icon: figma
    },
    {
      name: "docker",
      icon: docker
    }
  ];
  
  const experiences = [
    {
      title: "شروط القبول :",
      company_name: "",
      icon: college,
      iconBg: "#383E56",
      date: "",
      points: [
        "تقبل الكلية طلاب الثانوية العامة بشعبيتها الأدبية والعلمية بشرط الحصول على الحد الأدنى من المجموع الذي يحدده مكتب التنسيق كل عام.",
        "كما تقبل الكلية كذلك طلاب الثانوية الصناعية",
        "عدد سنوات الدراسة : اربعة سنوات "
      ]
    },
    {
      title: "شهادات الاتحاق :",
      company_name: "",
      icon: college,
      iconBg: "#E6DEDD",
      date: "",
      clss: "exp",
      points: [
        "ثانوية العامة (أدبي)",
        "ثانوية العامة (علمي رياضة)",
        "ثانوية العامة (علمي علوم)",
        "ثانوية ثناعية",
        "الدبلومه الامريكيه",
        "الدبلومة البريطانية",
        "شهادات المعادله",
      ]
    },
    {
      title: "الدرجات العلمية التي تمنحها الكلية :",
      company_name: "",
      icon: college,
      iconBg: "#383E56",
      date: "",
      points: [
        "البكالوريس",
        "الدبلوم",
        "الماجستير",
        "الدكتوراة",
      ]
    },
    {
      title: "برامج الدبلوم:",
      company_name: "تمنح الكليه درجه الدبلوم في البرامج التاليه:",
      icon: college,
      iconBg: "#E6DEDD",
      date: "",
      clss: "exp",
      points: [
       "الدبلوم الخاص في التربية النوعية",
       "الدبلوم الخاص في المسرح",
       "الدبلوم الخاص في الفنون المسرحيه",
      ]
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "ا.د/  سعيد عبد الغفار العناني",
      designation: " وكيل الكلية للدراسات العليا و البحوث",
      company: "",
      image: rania
    },
    {
      name:
          "ا.د/ نجلاء فاروق الحلبي",
      designation: "وكيل الكليه لشئون التعليم والطلاب",
      company: "",
      image: noga
    },
    {
      testimonial:
        "",
      name: "ا.د/ أكرم محمد عبد اللطيف",
      designation: "وكيل الكليه لشئون خدمه المجتمع وتنميه البيئه",
      company: "",
      image:akrm
    }
  ];
  
  const projects = [
    {
      name: "Kasper",
      description:
        "Web-based platform that allows users to search, book, and manage phone rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient"
        },
        {
          name: "Css",
          color: "green-text-gradient"
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient"
        }
      ],
      image: carrent,
      source_code_link: "https://github.com/Mohammedfouadd/Kasper"
    },
    {
      name: "Fouad",
      description:
        "Demo web application To test capabilities and highlight my talent while talking about games, it is a responsive application with all screens.",
      tags: [
        {
          name: "CSS",
          color: "blue-text-gradient"
        },
        {
          name: "JavaScript",
          color: "green-text-gradient"
        },
        {
          name: "html",
          color: "pink-text-gradient"
        }
      ],
      image: jobit,
      source_code_link: "https://github.com/Mohammedfouadd/third-project"
    },
    {
      name: "Bondi",
      description:
        "Demo web application To test capabilities and highlight my talent while talking about games, it is a responsive application with all screens.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient"
        },
        {
          name: "Javascript",
          color: "green-text-gradient"
        },
        {
          name: "Bootstrab",
          color: "pink-text-gradient"
        }
      ],
      image: tripguide,
      source_code_link: "https://github.com/Mohammedfouadd/bondi"
    }
  ];
  
  export {services, technologies, experiences, testimonials, projects};
  