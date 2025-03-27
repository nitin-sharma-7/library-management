import React from "react";
import { useRouteError } from "react-router";
// import Navbar from "./Navbar";

function ErrorPage() {
  const err = useRouteError();

  return (
    <div className="min-h-screen bg-purple-50 dark:bg-purple-900">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-lg mx-auto bg-white dark:bg-purple-800 shadow-lg rounded-xl p-8">
          <h1 className="text-6xl font-bold text-purple-600 dark:text-purple-300 mb-6">
            {err.status || "Error"}
          </h1>
          <h2 className="text-3xl font-semibold text-purple-700 dark:text-purple-200 mb-4">
            {err.statusText || "Unexpected Error"}
          </h2>
          <p className="text-purple-800 dark:text-purple-100 mb-6">
            {err.error?.message || "An unexpected error occurred"}
          </p>
          <div className="text-xl text-purple-900 dark:text-purple-50 font-medium">
            Sorry for the inconvenience
          </div>
          <div className="mt-8">
            <a
              href="/"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors dark:bg-purple-500 dark:hover:bg-purple-600"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
