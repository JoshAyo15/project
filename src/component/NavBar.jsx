import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button2 from "./Button2";

const NavBar = () => {
  return (
    <div className="py-4 w-full bg-amber-100 px-6 flex items-center justify-between">
      <Link to={"/"}>
        <h2 className="font-semibold text-1g">NavBar</h2>
      </Link>
      <Button2 />
      <div className="space-x-4">
        <NavLink
          className={({ isActive }) =>
            isActive ?
            "text-amber-600 font-semibold underline underline-offset-8" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ?
            "text-amber-600 font-semibold underline underline-offset-8" : ""
          }
          to={"/about"}
        >
          About
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ?
            "text-amber-600 font-semibold underline underline-offset-8" : ""
          }
          to={"/products"}
        >
          Products
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ?
            "text-amber-600 font-semibold underline underline-offset-8" : ""
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
