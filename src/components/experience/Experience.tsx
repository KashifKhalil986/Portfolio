import React from 'react'
import ExperienceCard from '../utils/ExperienceCard'

interface ExperienceItem {
  id: number;
  img: string;
  company: string;
  description: string;
  heading:string;
}

const Experience = () => {
  const experienceData: ExperienceItem[] = [
    {
      id: 1,
      img: "baladi.svg",
      heading:"Web Developer",
      company: "Baladi Express",
      description: "Web Developer at Baladi Express, a Qatari eCommerce grocery platform. Focused on feature development, maintenance, and performance optimization for a seamless user experience"

    },
    {
      id: 2,
      img: "navttc.webp",
      company: "EB NAVTTC Program",
      heading:"Web Development Trainer",
      description: "As a Web Development Trainer, I focus on imparting Industry Relevant Skill to my students.My responsibilities include, Ensuring NAVTTC guidelines are followed in course implementation"
    },
    {
      id: 3,
      img: "encoderbytes.webp",
      heading:"Full Stack Web Developer",
      company: "Encoderbytes Pvt. Ltd",
      description: "As a Full Stack Web Developer, I primarily focus on backend development using Node.js and Express.js My key responsibilities include Backend Development,Server Side application ,Operational Management"
    },
    {
      id: 4,
      img: "eblearninglab.webp",
      company: "EB Learning Lab",
      heading:"Web Development Trainer",
      description: "As a Trainer, I focus on imparting Industry Relevant Skill to my students. My responsibilities include, Maintaining a productive class environment,Make sure that all the students are on the same page"
    },
    {
      id: 5,
      img: "string.jpg",
      heading:"Mern Stack Web Developer",
      company: "String Technologies",
      description: "Assigned to build a full-stack freelance web project using the MERN stack.Commended for successfully implementing the CIR project, earning an outstanding achievement award."
    },
   
   
  ]
  return (
    <div id='experience' className='mt-20 w-full max-w-[1200px] mx-auto'>
      <h2 className="text-4xl font-medium text-white mb-10">Work Experience</h2>
      <div className="flex flex-wrap justify-between gap-3 ">
        {experienceData.map((item) => (
          <div key={item.id} className="w-full md:w-[49%]">
            <ExperienceCard
              img={item.img}
              companyName={item.company}
              heading={item.heading}
              description={item.description}
            />
          </div>
        ))}
      </div>
      
      
    </div>
  )
}

export default Experience