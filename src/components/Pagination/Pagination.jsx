import React, { useState, useEffect } from "react";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

const Pagination = ({ currentPage, handlePrev, handleNext, totalPages }) => {
  let showPrev = false;
  if (currentPage > 1) showPrev = true;
  let showNext = true;
  if (currentPage === totalPages) showNext = false;

  return (
    <div>
      {totalPages > 1 && (
        <div className="trackerPages">
          {showPrev && (
            <AiFillLeftCircle className="arrow" onClick={handlePrev}>
              Prev
            </AiFillLeftCircle>
          )}
          <span>{currentPage}</span>
          {showNext && (
            <AiFillRightCircle className="arrow" onClick={handleNext}>
              Next
            </AiFillRightCircle>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;
