import React from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";

const logo = require("../assets/logo.png");

interface NavProp {
  show: boolean;
}

function Navbar({ show }: NavProp) {

  return (
    <>
      <nav className={show === true ? "flex justify-around mb-1 items-center py-2" : "flex items-center py-4 px-28  border-2 h-[70px]"}>
        <div>
          <img src={logo} className="h-12 w-18 " alt="logo" />
        </div>
        {show === true ? (
          <>
            <div>
              <ul className="flex gap-x-12">
                <li className="">DISCOVER</li>
                <li className="">SHOP</li>
                <li className="">CONTACT</li>
              </ul>
            </div>
            <div>
              <button className="text-white bg-primary px-3 h-10 rounded-lg">
                Book Appointment
              </button>
            </div>
            <div className="flex gap-x-6">
              <div className="border-[0.5px] w-8 h-8 p-1 border-primary  rounded-full">
                <CiSearch size={23} color="#FC6DC1" />
              </div>
              <div className="pt-1">
                <AiOutlineShoppingCart size={23} color="#FC6DC1" />
              </div>
              <div className="flex border-[0.5px] border-primary w-12 h-7 p-1">
                <CiUser size={23} color="#FC6DC1" />
                <MdExpandMore size={23} color="#FC6DC1" />
              </div>
            </div>
          </>
        ) : null}
      </nav>
    </>
  );
}

export default Navbar;
