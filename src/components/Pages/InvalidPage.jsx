import React from "react";
import { Link } from "react-router-dom";
const InvalidPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-400px)] gap-4">
      <h2 className="text-2xl font-bold text-gray-800">Invalid Page URL</h2>
      <p className="text-gray-500">
        The page you are looking for does not exist.
      </p>
      <Link
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        to="/"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default InvalidPage;
