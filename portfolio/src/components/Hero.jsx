import React from 'react';
import Language from './Language';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <div>
      <div className="introduce absolute  h-5/6  space-x-6 w-[70vw] bg-indigo-600">

        <div className=" my-8 mx-7 ">
          <Language />
          <h2 className="text-yellw font-semibold text-4xl ps-52 ">ceren</h2>
        </div>
        <div className='introduce-container my-28 ps-52 space-y-6 max-w-screen-md '>
          <h1 className="text-yellw font-semibold text-6xl">I am a Frontend Developer...</h1>
          <p className="text-white text-2xl">
            ... who likes to craft solid and scalable frontend products with great user experiences.
          </p>

          <div className="introduce-buttons flex space-x-4 ">
            <div className="github-button flex items-center ">
              <button
                id="github"
                type="button"
                onClick=""
                className="bg-white text-xl text-indigo-700 font-medium px-4 py-2 rounded shadow hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" className="mr-2" />
                Github
              </button>
            </div>
            <div className="linkedin-button flex items-center space-x-2">
              <button
                id="linkedin"
                type="button"
                onClick=""
                className="bg-white text-xl text-indigo-700 font-medium px-4 py-2 rounded shadow hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="mr-2" />
                Linkedin
              </button>
            </div>
          </div>
        </div>

      </div >
    </div>
  );
}

export default Hero;
