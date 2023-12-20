import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const SigninPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-slate-900 text-slate-50 pt-[80px]">
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <label htmlFor="username" className="block my-5">
            Username
            <input
              type="text"
              name="username"
              className="mx-2 p-2 text-slate-900"
              placeholder="Username"
            />
          </label>
          <label htmlFor="password" className="block my-5">
            Password
            <input
              type="password"
              name="password"
              className="mx-2 p-2 text-slate-900"
              placeholder="password"
            />
          </label>
          <p>
            New to IVI?
            <Link to="/moviesApp/signup">
              <button className="border-[1px] py-2 px-4 mx-5 rounded-lg">
                Sign Up
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
