import React from "react";

const Pagination = ({ totalUsers, perPage, setCurrentPage, currentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalUsers / perPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "selected" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
