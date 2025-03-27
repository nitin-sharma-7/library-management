import React from "react";
import { Link, useLocation } from "react-router";

function BookDetails() {
  const data = useLocation().state;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Link
          to={`/browse/${data.category}`}
          className="
            
            mb-6 
            text-purple-700 
            hover:text-purple-900 
            font-medium 
            transition-colors 
            duration-300 
            inline-flex 
            items-center 
            space-x-2
          "
        >
          <span>Browse {data.category.toUpperCase()} Books</span>
        </Link>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="p-6 md:p-8 space-y-6">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 mb-2">
                {data.bookTitle}
              </h1>
              <p className="text-xl text-purple-600 font-semibold">
                by {data.author}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h2 className="text-sm font-bold text-purple-700 mb-2">
                    Category
                  </h2>
                  <p className="text-purple-900 capitalize">{data.category}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h2 className="text-sm font-bold text-purple-700 mb-2">
                    Rating
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-700">({data.rating}/5)</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h2 className="text-sm font-bold text-purple-700 mb-2">
                  About the Book
                </h2>
                <p className="text-purple-900 text-sm leading-relaxed">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
