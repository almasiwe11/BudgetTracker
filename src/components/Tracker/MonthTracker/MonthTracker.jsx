import React, { useState } from "react";
import Track from "../Track/Track";
import { parseJSON, isSameMonth } from "date-fns";

import Pagination from "../../Pagination/Pagination";

const MonthTracker = ({ trackList, setTrackList, filterTracker }) => {
  /*    */

  console.log(filterTracker);
  const [filter, setFilter] = useState("All");
  let filteredData;

  if (filterTracker === "Owing") {
    filteredData = trackList.filter(
      (track) => track.spent === filterTracker || track.gained === "Return"
    );
  } else if (filterTracker) {
    filteredData = trackList.filter((track) => track.spent === filterTracker);
  }

  console.log(filteredData);

  if (!filterTracker) {
    if (filter === "Spent") {
      filteredData = trackList.filter((track) => track.type === "loss");
    } else if (filter === "Gained") {
      filteredData = trackList.filter((track) => track.type === "gain");
    } else {
      filteredData = trackList;
    }
  }

  const sortedData = filteredData.sort((a, b) => {
    const dateA = parseJSON(a.selectedDay);
    const dateB = parseJSON(b.selectedDay);
    return dateA - dateB;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = sortedData.slice(startIndex, endIndex);

  function handlePrev() {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  }

  function handleNext() {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  }

  return (
    <div>
      {trackList.length > 0 && !filterTracker && (
        <select
          name="filter"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="Spent">Spent</option>
          <option value="Gained">Gained</option>
          <option value="All">All</option>
        </select>
      )}

      {displayedItems.map((track) => (
        <Track
          key={track.id}
          spent={track.spent}
          gained={track.gained}
          description={track.description}
          toWho={track.toWho}
          amount={track.amount}
          type={track.type}
          trackList={trackList}
          id={track.id}
          disabled={true}
          selectedDay={track.selectedDay}
          showDate={true}
          setTrackList={setTrackList}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        handlePrev={handlePrev}
        handleNext={handleNext}
        totalPages={totalPages}
      />
    </div>
  );
};

export default MonthTracker;
