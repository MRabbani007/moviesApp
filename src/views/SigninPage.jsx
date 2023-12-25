import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// Imported Components
import Navbar from "../components/Navbar";

const SigninPage = () => {
  // const { MongoClient, ServerApiVersion } = require("mongodb");
  // const uri =
  //   "mongodb+srv://mrabbani:<password>@cluster0.kd2kpju.mongodb.net/?retryWrites=true&w=majority";

  // // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  // const client = new MongoClient(uri, {
  //   serverApi: {
  //     version: ServerApiVersion.v1,
  //     strict: true,
  //     deprecationErrors: true,
  //   },
  // });

  // async function run() {
  //   try {
  //     // Connect the client to the server	(optional starting in v4.7)
  //     await client.connect();
  //     // Send a ping to confirm a successful connection
  //     await client.db("admin").command({ ping: 1 });
  //     console.log(
  //       "Pinged your deployment. You successfully connected to MongoDB!"
  //     );
  //   } finally {
  //     // Ensures that the client will close when you finish/error
  //     await client.close();
  //   }
  // }
  // run().catch(console.dir);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const [backendData, setBackendData] = useState([{}]);

  const fetchUsers = async () => {
    try {
      let response = await axios({
        method: "post",
        url: "http://localhost:8000/api",
        data: {
          user: email,
          password: password,
        },
      });
      console.log(response.data);
      // await axios
      //   .post("http://localhost:8000/signin/", { email, password })
      //   .then((res) => {
      //     console.log(res);
      //     if (res.data === "exist") {
      //       history("/moviesApp/myivi", { state: { id: email } });
      //     } else if (res.data === "noexist") {
      //       alert("user not logged in");
      //     }
      //   })
      //   .catch((e) => {
      //     alert("wrong details");
      //     console.log(e);
      //   });
    } catch (error) {}
  };

  const pingServer = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api");
      setBackendData(response.data);
      console.log("ping", response.data);
    } catch (error) {
      console.log("fetcherror:", error);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (email != "" && password != "") {
      fetchUsers();
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-slate-900 text-slate-50 pt-[80px]">
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <form action="" className="">
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
                  setEmail(e.target.value);
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
            <div className="flex justify-center items-center my-2">
              <button
                type="submit"
                onClick={submit}
                className="border-[1px] py-2 px-4 mx-5 rounded-lg block"
              >
                Sign In
              </button>
            </div>
          </form>
          <p>
            New to IVI?
            {/* <Link to="/moviesApp/signup"></Link> */}
            <button
              className="border-[1px] py-2 px-4 mx-5 rounded-lg"
              onClick={() => pingServer()}
            >
              Sign Up
            </button>
          </p>
          {/* {backendData.users && typeof backendData.users === "undefined" ? (
            <p>Loading...</p>
          ) : (
            backendData.users.map((user) => {
              return <p>{user}</p>;
            })
          )} */}
        </div>
      </div>
    </>
  );
};

export default SigninPage;
