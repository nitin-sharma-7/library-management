import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import PopularBooks from "./PopularBooks";

function Home() {
  const [show, setShow] = useState(false);
  const books = useSelector((store) => store.books.items);
  const popularBooks = books.filter((val) => val.rating > 4.5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white shadow-xl rounded-2xl p-8 md:p-12 transform transition-all duration-300 hover:scale-[1.01]">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                WELCOME
              </h1>
              <p className="text-lg text-purple-700">to the</p>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-500">
                WORLD of BOOKS
              </h2>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setShow(!show)}
                className="w-full px-6 py-2 bg-purple-600 text-white rounded-lg 
                  hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 
                  transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {show ? "Hide " : "Popular Books"}
              </button>

              {show && (
                <div className="bg-purple-50 p-4 rounded-lg text-sm text-purple-800 shadow-inner">
                  {/* Need To show popular book */}
                  <PopularBooks data={popularBooks} />
                </div>
              )}
            </div>
          </div>

          {/* Categories Section */}
          <div className="bg-purple-100 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold text-purple-800 border-b-2 border-purple-300 pb-2">
              Book Categories
            </h3>
            <div className="space-y-3">
              <NavLink
                to="/browse/sci-fi"
                className="flex items-center space-x-3 text-purple-700 
                  hover:text-purple-900 hover:bg-purple-200 p-2 rounded-lg 
                  transition-all duration-200"
              >
                <i className="fa-solid fa-book text-purple-600"></i>
                <span>Sci-Fi</span>
              </NavLink>
              <NavLink
                to="/browse/fiction"
                className="flex items-center space-x-3 text-purple-700 
                  hover:text-purple-900 hover:bg-purple-200 p-2 rounded-lg 
                  transition-all duration-200"
              >
                <i className="fa-solid fa-book text-purple-600"></i>
                <span>Fiction</span>
              </NavLink>
              <NavLink
                to="/browse/non-fiction"
                className="flex items-center space-x-3 text-purple-700 
                  hover:text-purple-900 hover:bg-purple-200 p-2 rounded-lg 
                  transition-all duration-200"
              >
                <i className="fa-solid fa-book text-purple-600"></i>
                <span>Non-Fiction</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
