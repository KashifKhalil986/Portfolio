"use client";

import { Link } from "react-scroll";
import Image from 'next/image';
const Navbar: React.FC = () => {
  return (
    <nav className="bg-[rgba(35,12,48,1)] p-4 shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="hero"
          smooth={true}
          duration={800}
          className="flex items-center cursor-pointer hover:text-gray-300"
        >
          <Image src="/logo.png" alt="logo" width="30" height="24" className="ml-4" />
        </Link>


        {/* Navigation Links */}
        <ul className="flex space-x-8 text-white font-medium gap-14 ml-32">
          <li>
            <Link to="hero" smooth={true} duration={800} className="cursor-pointer hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={800} className="cursor-pointer hover:text-gray-300">
              Experience
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={800} className="cursor-pointer hover:text-gray-300">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
