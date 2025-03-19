import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import React from 'react';

const Contact = () => {
  return (
    <div >
      <div className="mt-[900px] max-w-[1200px] mx-auto text-white">
        <h1 className="text-4xl font-normal ">Contact</h1>

        <p className="text-xl max-w-3xl leading-relaxed mt-8">
          Im currently looking to join a cross-functional team that values improving peoples lives
          through accessible design, or have a project in mind? Lets connect.
        </p>

        <p className="text-xl mt-12">shahzadkhan123@gmail.com</p>

        <div className="flex space-x-3 mt-5">
          <a
            href={`https://wa.me/+923495262735?text=Are You Open To Work?`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="w-8 h-8 rounded" icon={faWhatsapp} style={{ color: "#25D366" }} />
          </a>

          <a
  href="https://www.linkedin.com/in/shahzad-khan-78a7161a4/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FontAwesomeIcon className="w-8 h-8 rounded-full" icon={faLinkedin} style={{ color: "#0A66C2" }} />
</a>







        </div>
      </div>
    </div>
  );
};

export default Contact;