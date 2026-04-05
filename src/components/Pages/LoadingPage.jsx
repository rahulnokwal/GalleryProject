import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-400px)] ">
      <p className="text-gray-500 animate-pulse">Loading images...</p>
    </div>
  );
};

export default LoadingPage;
