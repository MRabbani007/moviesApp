import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ACTIONS } from "../data/utils";
import { fetchUser } from "../data/userFunctions";

const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [backendData, setBackendData] = useState([{}]);

  const handleSignUp = async () => {
    try {
      let response = await fetchUser({
        type: ACTIONS.SIGN_UP,
        userName: userName,
        password: password,
      });
      if (response === "registered") {
        navigate("/moviesApp/signin", { state: { user: userName } });
      } else {
        alert(response);
      }
    } catch (error) {
      console.log("Error: Signup");
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (userName != "" && password != "") {
      handleSignUp();
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-slate-900 text-slate-50 pt-[80px]">
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <form action="" className="w-[300px]">
            <div className="flex justify-between items-center">
              <label htmlFor="email" className="block my-5">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="mx-2 p-2 w-[200px] text-slate-900"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="username" className="block my-5">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="mx-2 p-2 w-[200px] text-slate-900"
                placeholder="Username"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block my-5">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="mx-2 p-2 w-[200px] text-slate-900"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="border-[1px] py-2 px-4 mx-5 rounded-lg"
                onClick={submit}
              >
                SignUp
              </button>
            </div>
          </form>
          <div>
            Already have an account?
            <Link to={"/moviesApp/signin/"}>
              <button className="border-[1px] py-2 px-4 mx-5 rounded-lg">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
