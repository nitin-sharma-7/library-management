import React from "react";
import { Link } from "react-router";

function RenderBooks({ data }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4 ">
      {data.map((val) => (
        <div
          key={crypto.randomUUID()}
          className="
            bg-white 
            rounded-xl 
            shadow-lg 
            hover:shadow-xl 
            transition-all 
            duration-300 
            transform 
            hover:-translate-y-2 
            border 
            border-purple-200 
            overflow-hidden
          "
        >
          <div className="p-4 space-y-3">
            <div className="text-center">
              <h3 className="text-lg font-bold text-purple-800 truncate">
                {val.bookTitle}
              </h3>
              <p className="text-sm text-purple-600 mt-1">by {val.author}</p>
            </div>

            <Link
              to={`/bokdetails/${val.bookTitle}`}
              state={val}
              className="
                block 
                w-full 
                text-center 
                bg-purple-600 
                text-white 
                py-2 
                rounded-md 
                hover:bg-purple-700 
                transition-colors 
                duration-300
              "
            >
              Book Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RenderBooks;
