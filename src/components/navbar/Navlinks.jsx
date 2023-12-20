import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <>
      <Link
        to="/"
        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      >
        Marketplace
      </Link>
      <Link
        to="/"
        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      >
        Resources
      </Link>
      <Link
        to="/signup"
        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      >
        About
      </Link>
    </>
  );
};

export default Navlinks;
