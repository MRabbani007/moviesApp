import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// Imported Components
import Navbar from "../components/Navbar";
import { fetchUser } from "../data/userFunctions";
import { ACTIONS, saveUser } from "../data/utils";

const SigninPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const [backendData, setBackendData] = useState("");

  const handleSignIn = async () => {
    try {
      let response = await fetchUser({
        type: ACTIONS.SIGN_IN,
        userName: userName,
        password: password,
      });
      if (response === "accepted") {
        saveUser(userName);
        navigate("/moviesApp/myivi", { state: { user: userName } });
      } else {
        setBackendData(response.data);
      }
    } catch (error) {}
  };

  const submit = (e) => {
    e.preventDefault();
    // TODO: add validation
    if (userName != "" && password != "") {
      handleSignIn();
    }
  };

  const handleMessage = () => {
    setBackendData("");
  };

  useEffect(() => {
    if (location.state) {
      setUser(location.state.user);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-slate-900 text-slate-50 pt-[80px]">
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <form action="" className="" onSubmit={submit}>
            <div className="flex justify-between items-center my-2">
              <label htmlFor="username" className="inline">
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
            <div className="flex justify-between items-center my-2">
              <label htmlFor="password" className="inline">
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
            <div className="flex flex-col justify-center items-center my-2">
              {backendData ? (
                <p className="text-red-700 py-1 px-4 mx-5 my-2 rounded-lg">
                  <span
                    className="mx-2 p-1 border-[1px] border-red-700 rounded-lg"
                    onClick={handleMessage}
                  >
                    X
                  </span>{" "}
                  {backendData}
                </p>
              ) : (
                ""
              )}
              <button
                type="submit"
                className="border-[1px] py-2 px-4 ml-[70px] w-[100px] rounded-lg"
              >
                Sign In
              </button>
            </div>
            <div className="flex justify-evenly items-center">
              <label className="inline">New to IVI?</label>
              <Link to="/moviesApp/signup" className="w-[200px] inline-block">
                <div className="border-[1px] py-2 px-4 w-[100px] ml-[38px] rounded-lg inline-block">
                  Sign Up
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
