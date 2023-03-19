import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-secondary">
        {/* VIDEO SECTION . THIS WILL CONTAIN THE VIDEO */}
        <div className="mx-auto max-w-7xl   py-20 px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <p className="mx-auto text-center mt-5 font-Poppins  max-w-xl text-xl text-white">
              Video will be inserted here
            </p>
          </div>
        </div>
        {/* HERE CONTENT INFORMATION  */}
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:flex lg:justify-between lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl uppercase text-white font-Poppins">
              Quality wigs
            </h2>
            <p className="mt-5 text-xl text-white font-Poppins">
              Your Home of best and affordable wigs
            </p>
            {/* LOGIN AND SING UP BUTTONS  */}
            <div className="flex flex-row space-x-6 ">
              {/* LOGIN BUTTON */}
              <button className="mt-5 bg-white text-gray-700 font-Poppins py-2 px-4 rounded-full  ">
                <span className="p-5">Login</span>
              </button>
              {/* SING UP BUTTON  */}
              <button className="mt-5 bg-Darker  text-white font-Poppins py-2 px-4 rounded-full bg-transparent font-semibold hover:text-white  border border-white">
                <span className="p-6">Sign Up</span>
              </button>
            </div>
          </div>
          {/* OFFERS SECTIONS  */}
          <div className="mt-40 w-full max-w-xs ">
            <h1 className="text-white font-Poppins font-bold">
              All about our offers. <br />
              Direct to your inbox
            </h1>

            <div className="flex items-center border-b border-gray-700  py-2">
              <input
                className="appearance-none text-white font-Poppins bg-transparent border-none w-full
                                mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Enter your email"
                aria-label=" Email Address"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
