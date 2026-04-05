import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-indigo-600 tracking-tight cursor-pointer">
          EternaPix
        </div>
        <div className="flex items-center gap-3">
          <button
            id="login"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Log in
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors">
            Join
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Upload
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
