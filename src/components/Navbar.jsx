import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <div className="w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto sm:px-4  md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center ">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 sm:p-2 rounded-lg">
                <h1 className="text-l sm:text-4xl font-extrabold text-white tracking-tight">
                  Book Hunt
                </h1>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-4 md:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) => `
                text-purple-700 hover:text-purple-900 
                font-medium transition-colors duration-300
                ${isActive ? "border-b-2 border-purple-600" : ""}
              `}
            >
              Home
            </NavLink>
            <NavLink
              to="/browse/all"
              className={({ isActive }) => `
                text-purple-700 hover:text-purple-900 
                font-medium transition-colors duration-300
                ${isActive ? "border-b-2 border-purple-600" : ""}
              `}
            >
              Browse All Books
            </NavLink>
            <NavLink
              to="/addbook"
              className={({ isActive }) => `
                text-purple-700 hover:text-purple-900 
                font-medium transition-colors duration-300
                ${isActive ? "border-b-2 border-purple-600" : ""}
              `}
            >
              Add Book
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
