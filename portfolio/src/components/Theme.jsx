import React from 'react';

function Theme() {
  return (
    <div className="theme-container absolute top-0 right-0 h-5/6 w-[30vw] bg-yellw">
      <div className="theme-switch mx-4 my-8 flex items-center space-x-4 ">
        <button className="theme-toggle w-16 h-7 bg-violet-400 dark:bg-g-700 rounded-full flex items-center p-1">
          <div className="theme-indicator w-4 h-4 bg-yellow-300 rounded-full"></div>
        </button>
        <p className="text-indigo-600  font-semibold text-lg">DARK MODE</p>
      </div>
    </div>

  );
}

export default Theme;
