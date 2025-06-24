// components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ setIsOpen, darkMode, setDarkMode }) => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-[#242422db] z-50 p-6 shadow-lg transition-transform duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white font-danScr"> </h2>
        <button onClick={() => setIsOpen(false)} className="text-white text-2xl">✕</button>
      </div>

      <div className="flex flex-col space-y-4 transition-transform duration-300 ">
        <NavLink to="/" className="text-white hover:text-blue-300 cursor-pointer bg-gray-600 p-3" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/Book1" className="text-white hover:text-blue-300 cursor-pointer bg-gray-600 p-3 " onClick={() => setIsOpen(false)}>Book</NavLink>
        <NavLink to="/Quote" className="text-white hover:text-blue-300 cursor-pointer bg-gray-600 p-3 " onClick={() => setIsOpen(false)}>Quotes</NavLink>
        <NavLink to="/About" className="text-white hover:text-blue-300 cursor-pointer bg-gray-600 p-3 " onClick={() => setIsOpen(false)}>About</NavLink>

        <button
          onClick={() => {
            setDarkMode(!darkMode);
            setIsOpen(false);
          }}
          className="mt-4 px-3 py-2 bg-gray-300 dark:bg-gray-700 rounded"
        >
          {darkMode ? "🔆 Light" : "🌙 Dark"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
