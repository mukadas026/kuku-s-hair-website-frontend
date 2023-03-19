import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card2 from "./Card2";
const wig6 = require("../assets/wig6.jpg");

function RProducts() {
  return (
    <>
      <div className="flex justify-center flex-col pb-12">
        <div className="bg-tertiary w-[85%] py-4 text-2xl flex justify-center mx-auto items-center">
          <h3 className="text-center font-bold ">Our Recent Products</h3>
        </div>
        <div className="flex gap-x-6 justify-center items-center mt-4">
          <div className="flex h-10 w-10 p-3 rounded-full bg-white">
            <AiOutlineLeft color="#FC6DC1" />
          </div>
          <Card2 image={wig6} />
          <Card2 image={wig6} />
          <Card2 image={wig6} />
          <Card2 image={wig6} />
          <div className="flex h-10 w-10 p-3 rounded-full bg-white">
            <AiOutlineRight color="#FC6DC1" />
          </div>
        </div>
        <div className="flex justify-center mt-10 gap-x-2">
            <div className="h-2 w-2 rounded-full bg-gray-500"></div>
            <div className="h-2 w-2 rounded-full bg-gray-400"></div>
            <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </>
  );
}

export default RProducts;
