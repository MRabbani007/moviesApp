import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";
// import { MongoClient } from "mongodb";

const MyIVIPage = () => {
  // const mongoClient = new MongoClient(
  //   `mongodb+srv://mnrabbani:<kztDSuHPEELfHBk4>@myivi.xhjrir2.mongodb.net/users/?retryWrites=true&w=majority`,
  //   {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   }
  // );

  // const fetchUsers = async () => {
  //   data = await mongoClient.db().collection("users").find().toArray();
  //   console.log("!!!", data);
  // };
  useEffect(() => {
    // fetchUsers();
  }, []);

  const location = useLocation();
  console.log(location);
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-slate-900 pt-[80px]">
        <h1 className="text-slate-50">
          hello {location.state && location.state.id}
        </h1>
      </div>
    </>
  );
};

export default MyIVIPage;
