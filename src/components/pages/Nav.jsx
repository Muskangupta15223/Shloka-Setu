// components/Nav.jsx
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <nav className="bg-[#242422db] p-6 shadow-xl flex justify-between items-center">
        <h2 className="text-3xl font-bold font-danScr text-white">Shloka Setu </h2>

        {/* Desktop Links */}
        <div className="hidden text-[21px] sm:flex space-x-7 items-center">
          <NavLink to="/" className="text-gray-200 hover:text-blue-300">Home</NavLink>
          <NavLink to="/Book1" className="text-gray-200 hover:text-blue-300">Book</NavLink>
          <NavLink to="/Quote" className="text-gray-200 hover:text-blue-300">Quotes</NavLink>
          <NavLink to="/About" className="text-gray-200 hover:text-blue-300">About</NavLink>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {darkMode ? "🔆" : "🌙"}
          </button>
        </div>

        {/* Hamburger - Mobile Only */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Sidebar Overlay - Mobile Only */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40">
          <Sidebar
            setIsOpen={setIsOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>
      )}
    </>
  );
};

export default Nav;
