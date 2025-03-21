import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

const Hero = () => {
  return (
    <div id='hero' className="mx-auto max-w-[1200px] ">
      <div className="mt-10 flex ">
        <div className="relative">
          <div className=" bg-[url('/Gradient.png')] h-64 w-64 rounded-3xl bg-cover bg-center flex items-center justify-center">
            <Image className="w-48 h-48 rounded-full" src="/profile.jpg" alt="Profile" />

          </div>
          <div className="absolute top-5 left-48">
            <Image src="/Arrow.png" alt="" />
          </div>
          <div className="absolute top-5 left-64 w-max">
            <p className='text-white'>Hello I Am <span className='text-purple-600'> Shahzad Khan</span></p>

          </div>
          <div className="absolute top-24 left-64 w-max">
            <p className='text-white text-sm'>A developer who  <span className='block font-semibold text-2xl'> builds seamless <span className='absolute top-3.5 right-9 text-sm w-[135px]'><Image src="/Ellipse5.png" alt="" /></span> <span className='text-purple-600 text-xl'>experiences </span> <span className='text-white'>...</span> </span>

              <span className='text-xs py-1 block'>because performance, design, and logic should all work in harmony</span></p>

          </div>
          <div className="text-white absolute top-44 left-64 flex gap-2 mt-3">
            <a
              href={`https://wa.me/+923495262735?text=Are hello`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="w-8 h-8 rounded" icon={faWhatsapp} style={{ color: "#25D366" }} />
            </a>

            <a
  href="mailto:shahzadkhan311666@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FontAwesomeIcon className="w-8 h-8" icon={faEnvelope} style={{ color: "#ffffff" }} />
</a>


            <a
              href="https://www.linkedin.com/in/shahzad-khan-78a7161a4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="w-8 h-8 rounded-full" icon={faLinkedin} style={{ color: "#0A66C2" }} />
            </a>
             <a
                        href="https://github.com/shahzad11khan"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                     
                        <FontAwesomeIcon className="w-8 h-8" icon={faGithub} style={{ color: "#ffffff" }} />
                      </a>
          </div>
        </div>


      </div>
      <div className='mt-5 text-white text-4xl '>
        Full Stack Developer
        <span className='text-sm block'>  
  Working remotely at <span className='underline'>
    <a href="https://baladiexpress.com/" target='_blank'>Baladi Express</a>
  </span> as part of <span className='underline'>
    <a href="https://encoderbytes.com/" target='_blank'>Encoder Bytes</a>
  </span>.
</span>
      </div>

      <div className="w-1/2 mt-10 text-white">
        Software Developer with over 3 years of experience, proficient in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React
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