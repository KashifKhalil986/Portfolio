import React from 'react';

const Hero = () => {
  return (
<div className="mx-auto max-w-[1200px]">
<div className="mt-10 flex ">
      <div className="relative">
        <div className=" bg-[url('/Gradient.png')] h-64 w-64 rounded-3xl bg-cover bg-center flex items-center justify-center">
          <img className="w-48 h-48 rounded-full" src="/profile.jpg" alt="Profile" />

        </div>
        <div className="absolute top-0 left-36">
          <img src="/Arrow.png" alt="" />
        </div>
        <div className="absolute top-5 left-60 w-max">
          <p className='text-white'>Hello I Am <span className='text-purple-600'> Shahzad Khan</span></p>

        </div>
        <div className="absolute top-24 left-64 w-max">
          <p className='text-white text-sm'>A developer who  <span className='block font-semibold text-2xl'> builds seamless <span className='absolute top-3.5 right-9 text-sm w-[135px]'><img src="/Ellipse5.png" alt="" /></span> <span className='text-purple-600 text-xl'>experiences </span> <span className='text-white'>...</span> </span> 

            <span className='text-xs block'>because performance, design, and logic should all work in harmony</span></p>

        </div>
      </div>


    </div>
    <div className='mt-5 text-white text-4xl '>
       I Am a Full Stack Developer. 
       <span className='text-sm block'> Currently I Am working at <span className='underline'><a href="https://www.encoderbytes.com/" target='_blank'>Encoder Bytes</a></span></span>
      </div>

      <div className="w-1/2 mt-10 text-white">
      Software Developer with over 2 years of experience, proficient in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React
JS, Next JS, Node JS, Express JS and MongoDB. Detail-oriented, quick learner, and eager to contribute to cutting-edge
web experiences. Ready to collaborate in crafting appealing, responsive websites with a talented team.     
       </div>
       <div className="mt-8">
       <a
          href="shahzadCVJs .pdf"
          target="_blank"
          rel="noopener noreferrer"
          className=" border-2 p-4 rounded-2xl   text-white bg-[hsl(271,24%,46%)] hover:bg-purple-500"
        >
      Download Cv
      
        </a>
       </div>
   </div>
   
  );
};

export default Hero;
