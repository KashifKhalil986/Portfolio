import React from 'react'
import ExperienceCard from '../utils/ExperienceCard'

interface ExperienceItem {
  id: number;
  img: string;
  company: string;
  description: string;
}

const Experience = () => {
  const experienceData: ExperienceItem[] = [
    {
      id: 1,
      img: "company1.png",
      company: "Tech Innovators",
      description: "Leading the way in AI and cloud computing with cutting-edge solutions."
    },
    {
      id: 2,
      img: "company2.png",
      company: "Green Energy Corp",
      description: "Committed to sustainable and renewable energy sources for a greener future."
    },
    {
      id: 3,
      img: "company3.png",
      company: "FinTech Solutions",
      description: "Revolutionizing digital payments and financial security with blockchain technology."
    },
    {
      id: 4,
      img: "company4.png",
      company: "FinTech Solutions",
      description: "Revolutionizing digital payments and financial security with blockchain technology."
    },
  ]
  return (
    <div className='mt-20 w-full max-w-[1200px] mx-auto'>
      <h2 className="text-4xl font-medium text-white mb-10">Work Experience</h2>
      <div className="flex flex-wrap justify-between gap-3 ">
        {experienceData.map((item) => (
          <div key={item.id} className="w-full md:w-[49%]">
            <ExperienceCard
              img={item.img}
              companyName={item.company}
              description={item.description}
            />
          </div>
        ))}
      </div>
      
      
    </div>
  )
}

export default Experience
