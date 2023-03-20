import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Login() {
  //changing document title
  useEffect(() => {
    document.title = "Login";
  });

  return (
    <>
      <Navbar show={false} />
      <div
        className="bg-loginbg h-full pb-24
      "
      >
        <div className="flex justify-center items-center pt-12">
          <div className="flex flex-col justify-center items-center bg-white w-[40%] pb-24">
            <div className="pt-10">
              <h1 className="text-4xl text-logintext font-bold text-center">
                Welcome !
              </h1>
              <p className="text-loginptext text-center">
                Kindly sign in to your account to continue{" "}
              </p>
            </div>
            <div className="mt-16 flex flex-col justify-center gap-y-6">
              <input
                type="email"
                placeholder="Email address"
                className="border-[1px] px-4 h-10 w-96"
              />
              <input
                type="password"
                placeholder="Password"
                className="border-[1px] px-4 h-10 w-96"
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-x-1">
                  <input type="checkbox" name="remember-me" />
                  <label htmlFor="remember-me" className="text-xs text-primary">
                    remember me
                  </label>
                </div>
                <div>
                  <p className="text-xs text-primary">Forgot your password?</p>
                </div>
              </div>
              <div>
                <button className="rounded-lg text-white font-bold bg-primary p-2 w-96">
                  Sign in
                </button>
              </div>
              <div>
                <button className="flex items-center justify-center gap-x-2 rounded-lg text-primary bg-white border-[1px] font-bold border-primary p-2 w-96">
                  <FcGoogle />
                  Sign in with Google
                </button>
              </div>
              <div className="flex justify-center items-center gap-x-1">
                <p className="text-sm">
                  Don't have an account yet?{" "}
                  <Link to="/signup">
                    <span className="text-primary underline">Sign Up</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
