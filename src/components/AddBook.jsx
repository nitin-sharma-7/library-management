import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/bookSlice";
import { useNavigate } from "react-router";

function AddBook() {
  const [book, setBook] = useState({
    author: "",
    bookTitle: "",
    category: "",
    description: "",
    rating: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleClick(e) {
    e.preventDefault();
    if (
      book.author !== "" &&
      book.bookTitle !== "" &&
      book.rating !== "" &&
      book.category !== "" &&
      book.description !== ""
    ) {
      navigate(`/browse/${book.category}`);
      dispatch(addItem(book));
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
            Add a New Book
          </h2>
          <p className="mt-2 text-sm text-purple-600">
            Share your favorite book with our community
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleClick}>
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Author Input */}
            <div className="mb-4">
              <label
                htmlFor="author"
                className="block text-sm font-medium text-purple-700 mb-2"
              >
                Author
              </label>
              <input
                id="author"
                name="author"
                type="text"
                required
                value={book.author}
                onChange={handleChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-purple-300 
                  placeholder-purple-500 text-purple-900 focus:outline-none focus:ring-purple-500 
                  focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Book Author"
              />
            </div>

            {/* Book Title Input */}
            <div className="mb-4">
              <label
                htmlFor="bookTitle"
                className="block text-sm font-medium text-purple-700 mb-2"
              >
                Book Title
              </label>
              <input
                id="bookTitle"
                name="bookTitle"
                type="text"
                required
                value={book.bookTitle}
                onChange={handleChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-purple-300 
                  placeholder-purple-500 text-purple-900 focus:outline-none focus:ring-purple-500 
                  focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Book Title"
              />
            </div>

            {/* Category Select */}
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-purple-700 mb-2"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                value={book.category}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-purple-300 bg-white rounded-md shadow-sm 
                  focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              >
                <option value="">Select a Category</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
              </select>
            </div>

            {/* Description Input */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-purple-700 mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={book.description}
                onChange={handleChange}
                rows={3}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-purple-300 
                  placeholder-purple-500 text-purple-900 focus:outline-none focus:ring-purple-500 
                  focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Brief book description"
              />
            </div>

            {/* Rating Input */}
            <div className="mb-4">
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-purple-700 mb-2"
              >
                Rating (1-5)
              </label>
              <input
                id="rating"
                name="rating"
                type="number"
                min="1"
                max="5"
                required
                value={book.rating}
                onChange={handleChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-purple-300 
                  placeholder-purple-500 text-purple-900 focus:outline-none focus:ring-purple-500 
                  focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Book Rating"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent 
                text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 
                transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
