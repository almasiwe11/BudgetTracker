/* eslint-disable react/prop-types */
import { useState } from "react";
import Track from "../Track/Track";
import { parseJSON, isSameMonth, isSameYear } from "date-fns";
import { usePagination } from "../../../customHooks/usePagination";
import Pagination from "../../Pagination/Pagination";

const MonthTracker = ({
  trackList,
  setTrackList,
  filterTracker,
  selectedDay,
}) => {
  const [filter, setFilter] = useState("All");
  let filteredData;
  let thisPeriod;

  if (!filterTracker) {
    thisPeriod = trackList.filter((track) =>
      isSameMonth(selectedDay, parseJSON(track.selectedDay))
    );
  } else {
    const { expenditure, period } = filterTracker;

    if (period === "This Year") {
      thisPeriod = trackList.filter((track) =>
        isSameYear(selectedDay, parseJSON(track.selectedDay))
      );
    } else if (period === "Selected Month") {
      thisPeriod = trackList.filter((track) =>
        isSameMonth(selectedDay, parseJSON(track.selectedDay))
      );
    } else if (period === "All Time") {
      thisPeriod = trackList;
    }

    if (expenditure === "Owing") {
      filteredData = thisPeriod.filter(
        (track) => track.spent === expenditure || track.gained === "Return"
      );
    } else if (filterTracker) {
      filteredData = thisPeriod.filter((track) => track.spent === expenditure);
    }
  }

  if (!filterTracker) {
    if (filter === "Spent") {
      filteredData = thisPeriod.filter((track) => track.type === "loss");
    } else if (filter === "Gained") {
      filteredData = thisPeriod.filter((track) => track.type === "gain");
    } else {
      filteredData = thisPeriod;
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
      {thisPeriod.length > 0 && !filterTracker && (
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
