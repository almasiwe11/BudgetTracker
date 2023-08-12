import { useState } from "react";

export function usePagination(array, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(array.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = array.slice(startIndex, endIndex);

  function handlePrev() {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  }

  function handleNext() {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  }

  return {
    handlePrev,
    handleNext,
    currentPage,
    displayedItems,
    totalPages,
  };
}
