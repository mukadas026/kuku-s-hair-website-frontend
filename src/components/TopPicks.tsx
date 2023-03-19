import React from "react";
import Card from "../components/Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const wig1 = require("../assets/wig1.jpg");
const wig2 = require("../assets/wig2.jpg");
const wig3 = require("../assets/wig3.jpg");
const wig4 = require("../assets/wig4.jpg");

function TopPicks() {
  return (
    <>
      <div className="flex justify-center flex-col pb-12">
        <div className="bg-tertiary w-[85%] py-4 text-2xl flex justify-center mx-auto items-center">
          <h3 className="text-center font-bold ">Our Top Picks</h3>
        </div>
        <div className="flex gap-x-6 justify-center items-center mt-4">
          <div className="flex h-10 w-10 p-3 rounded-full bg-white">
            <AiOutlineLeft color="#FC6DC1" />
          </div>
          <Card image={wig1} />
          <Card image={wig2} />
          <Card image={wig3} />
          <Card image={wig4} />
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

export default TopPicks;
