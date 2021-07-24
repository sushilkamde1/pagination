import React from "react";

const Pagination = ({ totalpages, handleClick }) => {
  const pages = [...Array(totalpages).keys()].map((num) => num + 1);
  return (
    <div className="container text-center">
      {pages.map((num) => (
        <button
          className="btn btn-success btn-sm m-1"
          key={num}
          onClick={() => handleClick(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
