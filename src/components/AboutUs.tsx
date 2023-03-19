import React from "react";
const wig5 = require("../assets/wig5.jpg");

function AboutUs() {
  return (
    <>
      <div className="bg-about flex justify-center pt-6 pb-10">
        <div className="flex-1 flex flex-col ">
          <h1 className="text-4xl font-bold mb-6 text-center">ABOUT US</h1>

          <div className="flex justify-center">
            <h3 className="text-2xl">What Makes Us Different?</h3>
          </div>
          <div className="flex justify-center flex-col pl-32">
            <p className="text-center w-[90%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p className="text-center w-[90%] pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p className="text-center w-[90%] pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src={wig5} alt="wig5" className="w-[450px] h-[350px]" />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
