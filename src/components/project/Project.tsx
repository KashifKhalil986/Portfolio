import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = () => {
  return (
    <div id="projects" className="mt-20 mb-10 h-[900px] w-full max-w-[1200px] mx-auto text-white">
      <h2 className="text-4xl font-medium text-white">Projects</h2>
      <div className="relative heading">
       <div className='absolute top-24 left-0'>
       <p className="text-sm text-[hsl(271,59%,83%)]">Company Project</p>
       <p className="text-3xl text-[hsl(226,17%,96%)]">Baladi Express Website</p>
       </div>

        <img
          src="projectGradient.png"
          alt="gradient"
          className="absolute left-[390px] h-[350px] "
        />

        <div className="absolute  top-36 z-50 w-[620px] h-[140px] flex items-center rounded-2xl mt-10 bg-[hsl(271,24%,46%)] ">
          <p className="px-4 text-[hsl(226,17%,96%)]">
          Baladi Express is a Qatar-based eCommerce platform offering a wide range of grocery items with fast and reliable delivery. From fresh produce to household essentials, Baladi Express ensures a seamless online shopping experience for customers across Qatar.</p>
        </div>

        <div className="absolute top-24 rounded-2xl right-0 w-1/2 h-[280px] z-10 border-t-4 border-purple-900 shadow-lg overflow-hidden">
        <img src="baladi.jpg" alt="project1Image"  className='w-[510px] mx-auto h-[270px] rounded-2xl mt-2'/>
        </div>
      </div>

      <div className="relative heading top-[350px]">
        <div className='absolute top-28 right-0 text-right'>
          <p className="text-sm text-[hsl(271,59%,83%)]">Company Project</p>
          <p className="text-3xl text-[hsl(226,17%,96%)]">Vehicle Management System</p>
        </div>

        <img
          src="projectGradient.png"
          alt="project2Image"
          className="absolute right-[390px] h-[350px] "
        />

<div className="absolute top-36 right-0 z-50 w-[620px] h-[140px] flex items-center rounded-2xl mt-10 bg-[hsl(271,24%,46%)] p-4">
  <p className="text-[hsl(226,17%,96%)] flex-1">
    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
  </p>
 
</div>


        <div className="absolute top-24 rounded-2xl left-0 w-1/2 h-[280px] z-10 border-t-4 border-purple-900 shadow-lg overflow-hidden">
          <img src="carmanagement.jpg" alt="" className='w-[510px] mx-auto h-[270px] mt-2 rounded-2xl'/>
        </div>

      </div>

      <div className="relative heading top-[120vh]">
        <div className='absolute top-28 left-0'>
          <p className="text-sm text-[hsl(271,59%,83%)]">Personal Project</p>
          <p className="text-3xl text-[hsl(226,17%,96%)]">Saas Admin Dashboard</p>
        </div>

        <img
          src="projectGradient.png"
          alt="project3Image"
          className="absolute left-[390px] h-[350px] "
        />

        <div className="absolute top-36 z-50 w-[620px] h-[140px] flex items-center rounded-2xl mt-10 bg-[hsl(271,24%,46%)] p-4">
          <p className="text-[hsl(226,17%,96%)] flex-1">
          The SaaS Admin Dashboard is a scalable web platform for managing users, orders, products, reports and etc. Built with React, Redux, Tailwind CSS, and Vite, it ensures a fast experience. Key features include user authentication, role management, company handling, order tracking, notifications (FCM), socket io, analytics, localization, theming, and dark mode         
          </p>
        
        </div>

        <div className="absolute top-24 rounded-2xl right-0 w-1/2 h-[280px] z-10 border-t-4 border-purple-900 shadow-lg overflow-hidden">
          <img src="saasadmin.png" alt="project3Image" className='w-[510px] mx-auto h-[250px] rounded-2xl mt-2'/>

        </div>
      </div>

      <div className="relative heading top-[180vh]">
        <div className='absolute top-28 right-0 text-right'>
          <p className="text-sm text-[hsl(271,59%,83%)]">Personal Project</p>
          <p className="text-3xl text-[hsl(226,17%,96%)]">Saas User Website</p>
        </div>

        <img
          src="projectGradient.png"
          alt="project4Image"
          className="absolute right-[390px] h-[350px] "
        />

        <div className="absolute top-36 right-0 z-50 w-[620px] h-[140px] flex items-center rounded-2xl mt-10 bg-[hsl(271,24%,46%)] p-4">
          <p className="text-[hsl(226,17%,96%)] flex-1">
          A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
          </p>
          <a
            href="https://github.com/shahzad11khan"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-40 left-16 border-2 p-2 rounded-2xl flex items-center gap-2 text-white bg-[hsl(271,24%,46%)] hover:bg-purple-500"
          >
            More Projects
            <FontAwesomeIcon className="w-5 h-5" icon={faGithub} style={{ color: "#ffffff" }} />
          </a>
        </div>

        <div className="absolute top-24 rounded-2xl left-0 w-1/2 h-[280px] z-10 border-t-4 border-purple-900 shadow-lg overflow-hidden">
          <img src="saasuser.png" alt="project4Image" className='w-[510px] mx-auto h-[270px] rounded-2xl mt-2'/>
        </div>
      </div>


      
    </div>
  );
};

export default Project;
