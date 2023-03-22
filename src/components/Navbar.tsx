import React, {  } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";

const logo = require("../assets/logo.png");

interface NavProp {
  show: boolean;
}

// search icon

function Navbar({ show }: NavProp) {
  function setModalOpen(arg0: boolean) {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <nav
        className={
          show === true
            ? "flex justify-around mb-1 items-center py-2"
            : "flex items-center py-4 px-28 border-2 h-[70px]"
        }
      >
        <div>
          <img src={logo} className="h-12 w-18 " alt="logo" />
        </div>
        {show === true ? (
          <>
            <div>
              <ul className="flex gap-x-12">
                <Link to="/">
                  {" "}
                  <li className="hover:text-primary">DISCOVER</li>
                </Link>
                <Link to="/shop">
                  <li className="hover:text-primary">SHOP</li>
                </Link>
                <Link to="/contact">
                  {" "}
                  <li className="hover:text-primary">CONTACT</li>
                </Link>
              </ul>
            </div>
            <div>
              <button className="text-white bg-primary px-3 h-10 rounded-lg">
                Book Appointment
              </button>
            </div>
            <div className="flex gap-x-6">
              <button onClick={() => setModalOpen(true)}>
                <div className="border-[0.5px] w-8 h-8 p-1 border-primary  rounded-full">
                  <CiSearch size={23} color="#FC6DC1" />
                </div>
              </button>
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

      {/*  MODAL  COMPONENT  */}
      <SearchModal
        modalOpen={setModalOpen}
        ModalCose={() => setModalOpen(false)}
      />
    </>
  );
}

export default Navbar;
