import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



function Hero() {
  return (
    <div className='relative flex min-h-screen'>
      <div className="theme-container absolute top-0 right-0 h-[100vh] w-[32vw] bg-yellw ">
        <div className="theme-switch mx-8 my-8 flex items-center space-x-4 ">
          <button className="theme-toggle w-16 h-7 bg-violet-400 dark:bg-g-700 rounded-full flex items-center p-1">
            <div className="theme-indicator w-4 h-4 bg-yellow-300 rounded-full"></div>
          </button>
          <p className="text-indigo-600  font-semibold text-lg">DARK MODE</p>
        </div>
      </div>

      <div className="introduce relative h-[100vh]  w-[68vw] bg-indigo-600">
        <div className="language-theme-switch flex justify-end my-8 mx-8  ">
          <button className="language-toggle text-lg font-medium text-gray-700 dark:text-gray-300">
            <span className="text-yellw font-semibold ">TÜRKÇE</span><span className='text-white font-semibold '>'YE GEÇ</span>
          </button>
        </div>
        <div className='introduce-container ps-52  max-w-screen-md '>
          <h2 className="text-yellw font-semibold text-4xl  ">ceren</h2>

          <div className='mt-44 space-y-8'>
            <h1 className="text-yellw font-semibold text-6xl ">I am a Frontend Developer...</h1>
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

        </div>

      </div >
    </div>
  );
}

export default Hero;
