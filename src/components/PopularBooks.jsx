import React from "react";
import { Link } from "react-router";

function PopularBooks({ data }) {
  return (
    <>
      <div className="flex flex-col gap-1 bg-purple-50 p-4 rounded-lg ">
        {data.map((val) => {
          return (
            <div
              key={crypto.randomUUID()}
              className="flex justify-between items-center p-2 bg-white border border-purple-200 rounded-md mb-2  "
            >
              <span className="text-purple-800  font-medium">
                {val.bookTitle}
              </span>
              <Link
                to={`/bokdetails/${val.bookTitle}`}
                state={val}
                className="text-purple-600 hover:bg-purple-300 hover:text-purple-100  border-purple-950  transition-all duration-400 hover:p-[2px]  font-semibold"
              >
                details
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PopularBooks;
