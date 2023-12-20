import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <>
      <Link
        to="/"
        className="group hover:bg-[#EFEFEF] relative px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      >
        Marketplace
        <div className="w-0 absolute left-[50%] bottom-0 group-hover:left-0 h-[2px] group-hover:w-full transition-all group-hover:bg-primary"></div>
      </Link>
      <Link
        to="/"
        className="group hover:bg-[#EFEFEF] relative px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      >
        Resources
        <div className="w-0 absolute left-[50%] bottom-0 group-hover:left-0 h-[2px] group-hover:w-full transition-all group-hover:bg-primary"></div>
      </Link>
      <Link
        to="/"
        className="group hover:bg-[#EFEFEF] relative px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      >
        About
        <div className="w-0 absolute left-[50%] bottom-0 group-hover:left-0 h-[2px] group-hover:w-full transition-all group-hover:bg-primary"></div>
      </Link>
    </>
  );
};

export default Navlinks;
