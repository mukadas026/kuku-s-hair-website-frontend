import React from "react";

function Card3({ image }: any) {
  return (
    <>
      <div className="border-[1.3px] w-72 bg-white pb-5">
        <div>
          <img src={image} className="w-72 h-56" alt="wig1" />
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          <h4 className="text-center pt-7">Product Name</h4>
          <p className="text-center text-sm px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card3;
