import React from "react";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const logo = require("../assets/logo.png");

function Footer() {
  return (
    <>
      <div className="bg-secondary pt-10">
        <div className="flex flex-col w-[85%] items-start pl-28">
          <img src={logo} className="w-32 h-10 mb-10" alt="logo" />
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <ul className="flex gap-x-6 pt-10 pb-10">
            <li className="text-white font-semibold">Discover</li>
            <li className="text-white font-semibold">Shop</li>
            <li className="text-white font-semibold">Contact</li>
            <li className="text-white font-semibold">Book Appointment</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center pb-10">
          <div className="w-[85%] bg-line h-[0.8px] mb-4"></div>
          <div className="flex justify-between w-[85%]">
            <h2 className="text-white text-xs">
              © 2023 Kuku’s Hair. All rights reserved.
            </h2>
            <div className="flex gap-x-2">
              <AiFillLinkedin color="#98A2B3" />
              <BsFacebook color="98A2B3" />
              <AiOutlineTwitter color="98A2B3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
