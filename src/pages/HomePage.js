import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HomePage;
