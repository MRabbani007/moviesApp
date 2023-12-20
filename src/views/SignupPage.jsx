import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-slate-900 text-slate-50 pt-[80px]">
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <label htmlFor="email" className="block my-5">
            Email
            <input
              type="text"
              name="email"
              className="mx-2 p-2 text-slate-900"
              placeholder="Email"
            />
          </label>
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
            Already have an account?
            <Link to={"/moviesApp/signin/"}>
              <button className="border-[1px] py-2 px-4 mx-5 rounded-lg">
                Sign In
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
