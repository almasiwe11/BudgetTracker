/* eslint-disable react/prop-types */
import { useState } from "react";
import Track from "../Track/Track";
import { parseJSON } from "date-fns";
import { usePagination } from "../../../customHooks/usePagination";
import Pagination from "../../Pagination/Pagination";

const MonthTracker = ({ trackList, setTrackList, filterTracker }) => {
  const [filter, setFilter] = useState("All");
  let filteredData;

  if (filterTracker === "Owing") {
    filteredData = trackList.filter(
      (track) => track.spent === filterTracker || track.gained === "Return"
    );
  } else if (filterTracker) {
    filteredData = trackList.filter((track) => track.spent === filterTracker);
  }

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

  const itemsPerPage = 18;
  const { currentPage, totalPages, handleNext, handlePrev, displayedItems } =
    usePagination(sortedData, itemsPerPage);

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
