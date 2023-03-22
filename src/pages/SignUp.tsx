import React from "react";
import Navbar from "../components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <Navbar show={false} />
      <div
        className="bg-loginbg h-full pb-24
      "
      >
        <div className="flex justify-center items-center pt-6">
          <div className="flex flex-col justify-center items-center bg-white shadow-sm shadow-black sm:w-[90%] md:w-[40%] pb-24 h-[650px]">
            <div className="pt-10">
              <h1 className="text-4xl text-logintext font-bold text-center pt-2">
                Sign up
              </h1>
              <p className="text-loginptext text-center pt-2">
                Kindly provide your details to continue{" "}
              </p>
            </div>
            <div className="mt-10 flex flex-col justify-center items-center gap-y-6">
              <input
                type="text"
                placeholder="First name"
                className="border-[1px] px-4 h-10 sm:w-80 md:w-96"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border-[1px] px-4 h-10 sm:w-80 md:w-96"
              />
              <input
                type="email"
                placeholder="Email address"
                className="border-[1px] px-4 h-10 sm:w-80 md:w-96"
              />
              <input
                type="password"
                placeholder="Password"
                className="border-[1px] px-4 h-10 sm:w-80 md:w-96"
              />
              <div>
                <button className="rounded-lg text-white font-bold bg-primary p-2 sm:w-80 md:w-96">
                  Sign up
                </button>
              </div>
              <div>
                <button className="flex items-center justify-center gap-x-2 rounded-lg text-primary bg-white border-[1px] font-bold border-primary p-2 sm:w-80 md:w-96">
                  <FcGoogle />
                  Sign up with Google
                </button>
              </div>
              <div className="flex justify-center items-center gap-x-1">
                <p className="text-sm">
                  Already have an account?{" "}
                  <Link to="/signin">
                    <span className="text-primary underline">Sign in</span>
                  </Link>
                </p>
              </div>
              <div className="h-[0.5px] sm:w-80 md:w-96 bg-line"></div>
              <div className="">
              <p className="text-xs text-center">By contiuing, you agree to KUKU's HAIR <span className="text-primary text-xs">terms</span> and <span className="text-xs text-primary">conditions</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
