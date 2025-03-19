import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from 'react';

const Project = () => {
  return (
    <div className="mt-40 h-[900px] w-full max-w-[1200px] mx-auto text-white">
      <div className="relative heading">
       <div className='absolute top-24 left-0'>
       <p className="text-sm text-[hsl(271,59%,83%)]">Personal Project</p>
       <p className="text-3xl text-[hsl(226,17%,96%)]">Project Name</p>
       </div>

        <img
          src="projectGradient.png"
          alt="gradient"
          className="absolute left-[390px] h-[350px] "
        />

        <div className="absolute  top-36 z-50 w-[620px] h-[140px] flex items-center rounded-2xl mt-10 bg-[hsl(271,24%,46%)] ">
          <p className="px-4 text-[hsl(226,17%,96%)]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio tempora amet alias illum sed id aliquam, labore nobis error fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem earum totam velit commodi eaque eum deserunt dignissimos sapiente repellat?
          </p>
        </div>

        <div className="absolute top-24 rounded-2xl right-0 w-1/2 h-[280px] z-10 border-t-4 border-purple-900 shadow-lg overflow-hidden">
        <img src="profile.jpg" alt="project1Image"  className='w-[520px] mx-auto h-[280px]'/>
        </div>
      </div>

      <div className="relative heading top-96">
        <div className='absolute top-28 right-0 text-right'>
          <p className="text-sm text-[hsl(271,59%,83%)]">Featured Project</p>
          <p className="text-3xl text-[hsl(226,17%,96%)]">Example Project</p>
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
          <img src="profile.jpg" alt="" className='w-[520px] mx-auto h-[280px]'/>
        </div>

      </div>

      <div className="relative heading top-[130vh]">
        <div className='absolute top-28 left-0'>
          <p className="text-sm text-[hsl(271,59%,83%)]">Open Source Project</p>
          <p className="text-3xl text-[hsl(226,17%,96%)]">DevHub</p>
        </div>

        <img
          src="projectGradient.png"
          alt="project3Image"
          className="absolute left-[390px] h-[350px] "
        />

        <div className="absolute top-36 z-50 w-[620px] h-[140px] flex items-center rounded-2xl mt-10 bg-[hsl(271,24%,46%)] p-4">
          <p className="text-[hsl(226,17%,96%)] flex-1">
            DevHub is a platform for developers to share code snippets, collaborate on projects, and discover trending open-source repositories. It provides seamless integration with GitHub and offers advanced search functionality.
          </p>
        
        </div>

        <div className="absolute top-24 rounded-2xl right-0 w-1/2 h-[280px] z-10 border-t-4 border-purple-900 shadow-lg overflow-hidden">
          <img src="profile.jpg" alt="project3Image" className='w-[520px] mx-auto h-[280px]'/>
        </div>
      </div>

      <div className="relative heading top-[200vh]">
        <div className='absolute top-28 right-0 text-right'>
          <p className="text-sm text-[hsl(271,59%,83%)]">Startup Project</p>
          <p className="text-3xl text-[hsl(226,17%,96%)]">TaskFlow</p>
        </div>

        <img
          src="projectGradient.png"
          alt="project4Image"
          className="absolute right-[390px] h-[350px] "
        />

        <div className="absolute top-36 right-0 z-50 w-[620px] h-[140px] flex items-center rounded-2xl mt-10 bg-[hsl(271,24%,46%)] p-4">
          <p className="text-[hsl(226,17%,96%)] flex-1">
            TaskFlow is a modern task management application designed for teams and individuals. It features real-time collaboration, task prioritization, and progress tracking with a sleek and intuitive UI.
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
          <img src="profile.jpg" alt="project4Image" className='w-[520px] mx-auto h-[280px]'/>
        </div>
      </div>


      
    </div>
  );
};

export default Project;
