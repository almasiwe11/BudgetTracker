import React, { useState, useEffect } from "react";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

const NextPage = ({
  array,
  itemsPerPage,
  setDisplayedItems,
  addBudget = false,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(array.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    setDisplayedItems(array.slice(startIndex, endIndex));

    if (addBudget) setCurrentPage(totalPages);
  }, [currentPage, array]);

  function handlePrev() {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  }

  function handleNext() {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  }

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

export default NextPage;
