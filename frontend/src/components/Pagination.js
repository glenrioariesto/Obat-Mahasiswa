import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevPage = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className={`px-4 py-2 mr-2 bg-gray-200 text-gray-600 rounded ${
          isFirstPage ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
        }`}
        onClick={handlePrevPage}
        disabled={isFirstPage}
      >
        Previous
      </button>
      <span className="px-4 py-2 bg-blue-500 text-white rounded">
        {currentPage}
      </span>
      <button
        className={`px-4 py-2 ml-2 bg-gray-200 text-gray-600 rounded ${
          isLastPage ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
        }`}
        onClick={handleNextPage}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
