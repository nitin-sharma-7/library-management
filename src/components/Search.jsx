import React, { useState } from "react";

function Search({ data, setBooks }) {
  // data array of objects
  const [name, setName] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setName("");

    const searchedBooks = data.filter(
      (val) =>
        val.author.toLowerCase().includes(name.trim().toLowerCase()) ||
        val.bookTitle.toLowerCase().includes(name.trim().toLowerCase())
    );

    searchedBooks.length ? setBooks(searchedBooks) : alert("no book found");

    //need a popup to render
  }
  return (
    <div>
      <form action="/" className="border-purple-500 border-2">
        <input
          placeholder="Enter to search book"
          className="p-1 hover:bg-purple-300  transition-all duration-400"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="  hover:font-bold p hover:text-purple-200 hover:bg-purple-900 transition-all duration-300 p-1"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
