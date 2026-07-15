import React, { useContext } from "react";
import { Myshop } from "../context/Mycontext";

const Nav = () => {
  const { setToogle, setTasktoogle } = useContext(Myshop);

  return (
    <nav className="bg-white rounded-2xl shadow-md px-4 py-3">
      <div className="flex items-center justify-between gap-3">

        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold whitespace-nowrap">
          TO-DO
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => setTasktoogle(true)}
            className="text-sm sm:text-base font-medium hover:text-red-800 transition"
          >
            All Tasks
          </button>

          <button
            onClick={() => setTasktoogle(false)}
            className="text-sm sm:text-base font-medium hover:text-red-800 transition"
          >
            Pending
          </button>
        </div>

        {/* Create Button */}
        <button
          onClick={() => setToogle(false)}
          className="bg-red-900 hover:bg-red-800 transition text-white px-3 py-2 rounded-xl text-sm sm:text-base whitespace-nowrap"
        >
          + Create
        </button>

      </div>
    </nav>
  );
};

export default Nav;