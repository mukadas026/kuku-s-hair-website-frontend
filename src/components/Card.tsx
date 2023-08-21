import React from "react";

function Card({ image }: any) {
  return (
    <>
      <div className="border-[1.3px] w-64 bg-white">
        <div>
          <img src={image} className="w-64 h-60" alt="wig1" />
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          <p className="text-center font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex justify-center gap-x-2">
            <p className="text-center line-through">₵2,300</p>
            <p className="text-center text-tertiary">₵2,300</p>
          </div>
          <button className="text-white w-28 mx-auto mb-5 bg-tertiary p-2 rounded-lg">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
