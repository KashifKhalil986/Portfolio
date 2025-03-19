
const Navbar = () => {
    return (
      <nav className="bg-[rgba(35,12,48,1)] p-4 shadow sticky">
        <div className="container mx-auto flex items-center justify-evenly">
          {/* Left: Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/justLogo.svg"
              alt="logo"
              width="30"
              height="24"
              className="ml-4"
            />
          </a>
  
          <ul className="flex space-x-8 text-white font-medium gap-14 ml-32">
            <li>
              <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Projects</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
          {/* <div className="flex-grow"></div> */}
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  