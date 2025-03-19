import React from 'react'

interface experienceCardProps {
    img :string;
    companyName:string;
    description :string;
}

const ExperienceCard: React.FC<experienceCardProps> = ({ img, companyName, description }) => {  return (
    <div className="relative w-full max-w-xl rounded-xl  border border-t-4 border-t-purple-900 p-6 shadow-lg overflow-hidden">

    <div className="flex items-center gap-6">
      <div className="relative">
        <img src={img} alt="" />
      </div>
      
      <div className="flex-1">
        <h2 className="text-white text-2xl font-bold mb-1">{companyName}</h2>
        <p className="text-purple-200 text-sm mb-4">
         {description}
        </p>
        {/* <button className="bg-transparent text-white px-6 py-2 border border-purple-400 rounded-md hover:bg-purple-800 transition-colors text-sm font-medium">
          LEARN MORE
        </button> */}
      </div>
    </div>
  </div>
  )
}

export default ExperienceCard


