import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RenderBooks from "./RenderBooks";
import Search from "./Search";
import { useLocation } from "react-router";

function BrowseBooks() {
  const storeBooks = useSelector((store) => store.books.items);

  const [books, setBooks] = useState(storeBooks);
  const url = useLocation().pathname.slice(8);

  useEffect(() => {
    let data = storeBooks.filter(
      (val) => val.category == url && val.category.length == url.length
    );
    url != "all" ? setBooks(data) : setBooks(storeBooks);
  }, [url]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div
            onClick={() => setBooks(storeBooks)}
            className="
            flex justify-center items-center
              cursor-pointer 
              text-xl 
              font-bold 
              text-purple-700 
              border-2 
              border-purple-300 
              px-6 
              py-3 
              rounded-lg 
              hover:bg-purple-600 
              hover:text-white 
              transition-all 
              duration-300 
              ease-in-out 
              transform 
              hover:scale-105 
              hover:shadow-lg
            "
          >
            All {url === "all" ? "" : url.toUpperCase()} Books
          </div>

          <div className="">
            <Search data={storeBooks} setBooks={setBooks} />
          </div>

          <div className="">
            <RenderBooks data={books} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseBooks;
