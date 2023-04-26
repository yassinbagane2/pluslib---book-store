import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
