import React, { useState } from 'react'
import './Review.css';

import Header from '../components/header';
import ReviewCard from './ReviewCard';
const Review = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  const employeeReviews = [
    { id: 1, 
      name: 'Vijaya kumar. G' ,
    company:"HCL Technologies Pvt Ltd",
    description:"Zuppa is a great concern where we can learn many things while working. I had the chance to explore many new technologies in cross functional streams. While working there I can speak out my own thoughts, there is no restrictions to showcase our thoughts and talents. The trust they show towards the employee is Zuppa's top quality. The project I have worked during the tenure with Zuppa is progressing my career towards the next level. They had set the platform for me to learn and explore many things. My colleagues were turned as my best friends so there is no chance for internal politics, I have not seen any such kind of incidents in that company.",
    rating:"⭐⭐⭐⭐⭐"  
  },
    { id: 2, 
      name: 'Manikandan V' ,
    company:"System Software Engineer American mega trends India",
    description:" I take this opportunity to thank each and everyone who gave me an opportunity to work with zuppa. I had an amazing experience as an embedded developer and product lead for almost 3 years. The people here are very friendly and I could learn so many things. Being my first company, I had an amazing transition from my college to work. The atmosphere at the company was very people friendly and also I got opportunities to travel places to meet clients. Everyday was a new day with lots of learning’s. Overall I had a great experience to kick start my career in life ",
     rating:"⭐⭐⭐⭐⭐"  
  },
    { id: 3, 
      name: 'Joseph A' ,
    company:"Senior software design engineerVisteon Technical and Services Pvt Ltd",
    description:"Zuppa has truly been a wonderful company starting out. The CEO cherish about each individual, welcomes ingenuity and lead the way by example. I've worked in R&D team, where I learned to incorporate scientific approach to the development of business model. The management woke the tech-savvy in me. They help me to feel comfortable in my position. Zuppa allows it's team to support everyone get acquainted with the overall job feel. They treat you like a person, not an employee. It gave me the opportunity for both lateral and upward career development. I learnt every possible things from the team to enhance my knowledge. Its my greatest pleasure in writing this. I genuinely express my gratitude to the CEO, CTO and the entire management.",
    rating:"⭐⭐⭐⭐⭐"  
  },
    { id: 4, 
      name: 'Thiruvengadam' ,
    company:"Lead Engineer HCL",
    description:"Zuppa is a place I got opportunities to work on new technologies so that I was able to keep myself updated. Management gives lots of opportunities to learn , explore and build many new skills . My career growth is because of what I learnt at ZUPPA.",
    rating:"⭐⭐⭐⭐⭐"  
   },
    { id: 5, 
      name: 'Praveen Kumar' ,
    company:"Lead Engineer HCL",
    description:"It is MSME company which serves as an OEM for products related to automotive and aerospace techonolgy with professional and innovative ideas to meet the market. It has it's own Production, R&D and Tech support team which are powered by young passionate minds. They work on the motto of Made in India. ",
    rating:"⭐⭐⭐⭐⭐"  
  },
    { id: 6, 
      name: 'Sabitha T' ,
    company:"Technical lead HCL Technologies Ltd",
    description:" When I joined Zuppa 9 years back as trainee after my degree from small town college with no job skills or experience but with lot of enthusiasm to learn. The management gave me lot of opportunities and support to learn many skills like PCB design, component sourcing , SMD soldering, production process , etc . They also supported not only me but also many other graduates from small towns of Tamilnadu to learn all types of technical skills including coding by which today myself and others have got positions of Lead engineers in many MNC companies. The management supported me in my hard times personally also . Thanks",
    rating:"⭐⭐⭐⭐⭐"    },
    { id: 7, 
      name: 'T.saravanakumar' ,
    company:"Embedded software Engineer Pricol limited",
   description:" I had a great work experience with zuppa team. i have learned many things from zuppa.good organization. Thank you.",
   rating:"⭐⭐⭐⭐⭐"  
  },

    { id: 8, 
      name: 'Sriram S' ,
    company:"Senior Software Engineer Bosch Global Software Technologies",
    description:" I've worked for over 2 years and every day is a new experience and new skill learned. I felt very happy worked with Zuppa Geo Navigation Technologies. The culture is very positive and transparent and company open to adapt new ideas and suggestions",
    rating:"⭐⭐⭐⭐⭐"  
  },
    { id: 9, 
      name: 'Niyaskhan' ,
    company:"Design Engineer Tata Autocomp Technical Center",
   description:"I joined as a software developer and I have worked for nearly one year but learned things seems not like one year of experience. It is good place to work as well as learn which will give a great growth in you life. Every opportunity that you given me, made me to learn and gave more knowledge and experience. The management that supported me in all my hard times both official and personal The people in there is more supportive to complete the work .I would be thankful to them for ever",
   rating:"⭐⭐⭐⭐⭐"  
  },
    { id: 10, 
      name: 'Bhuvaneshwari K',
    company:"Operations Manager (e - Commerce) Deejay Enterprises",
  description:" Zuppa is my first company after studies. Through out my 7 years tenure with Zuppa, they gave me wonderfull opportunity in multiple areas to develop my skills. Initially I was joined in Stocks dept then I was appointed as a Admin Assistant. They have given me the opportunity to explore my self and to develop my career growth along with the development of the company. Work culture at Zuppa is great that you can't see in some other companies. The company is supported me in every aspect interms of career as well as personal. I really enjoyed working there at Zuppa."  ,
  rating:"⭐⭐⭐⭐⭐"  
  },
    { id: 11, 
      name: 'G.S.JAYARAMAN' ,
    company:"ACCOUNTANT RAMCO",
    description:" My role as accountant at Zuppa geo navigation technologies Pvt Ltd was a huge learning experience for me where I joined as a fresher and relieved with lots of work experience and knowledge. I saw this not as an opportunity but as a learning platform. I was given freedom to learn and tackle new things. On the hole my take away from Zuppa is nothing but knowledge , confidence , work ethics and perfection. I believe in only practical work and experience lead the young to maturity which zuppa helped me to become ",
    rating:"⭐⭐⭐⭐⭐"  
   },
    { id: 12, 
      name: 'M Sathya Raghul' ,
    company:"Technical Engineer EMIOTICO",
    description:"Zuppa Laid a very good platform to enhance my technical skills. Zuppa-Evergreen source for Innovation.",
    rating:"⭐⭐⭐⭐⭐"   
  },
 
  ];
  return (
<>
<Header/>
<div className='review-container'>
  {
  employeeReviews.map((list ) => (
  <div key={list.id}>
  <ReviewCard list = {list}/>
  </div>
  ))}
</div>
</>
  )
}

export default Review