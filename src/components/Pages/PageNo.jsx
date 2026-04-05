import { MoveLeft, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
const PageNo = ({ currentPage }) => {
  const maxPages = 40;
  return (
    <div className="w-full flex justify-center gap-2 mt-4 items-center">
      {currentPage > 1 ? (
        <Link
          className="bg-gray-100 px-4 py-2 rounded-lg active:scale-95 hover:bg-gray-200 transition-colors cursor-pointer select-none flex items-center justify-center"
          to={currentPage === 2 ? "/" : `/page/${currentPage - 1}`}
        >
          <MoveLeft color="#4F39F6" />
        </Link>
      ) : (
        <div className="px-4 py-2 opacity-50 cursor-not-allowed">
          <MoveLeft color="#9CA3AF" />
        </div>
      )}
      <span className="font-medium text-gray-700">Page {currentPage}</span>
      {currentPage < maxPages ? (
        <Link
          className="bg-gray-100 px-4 py-2 rounded-lg active:scale-95 hover:bg-gray-200 transition-colors cursor-pointer select-none flex items-center justify-center"
          to={`/page/${currentPage + 1}`}
        >
          <MoveRight color="#4F39F6" />
        </Link>
      ) : (
        <div className="px-4 py-2 opacity-50 cursor-not-allowed">
          <MoveRight color="#4F39F6" />
        </div>
      )}
    </div>
  );
};

export default PageNo;
