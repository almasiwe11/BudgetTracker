import React, { useState } from "react";
import Track from "../Track/Track";
import { parseJSON, isSameMonth } from "date-fns";

import NextPage from "../../NextPage/NextPage";

const MonthTracker = ({ trackList, setTrackList, filterTracker }) => {
  /*   .filter((track) =>
            isSameMonth(selectedDay, parseJSON(track.selectedDay))
          ) */
  const [filter, setFilter] = useState("All");
  let sortedData;

  if (filterTracker === "Owing") {
    sortedData = trackList.filter(
      (track) => track.spent === filterTracker || track.gained === "Return"
    );
  } else if (filterTracker) {
    sortedData = trackList.filter((track) => track.spent === filterTracker);
  }

  if (!filterTracker) {
    if (filter === "Spent") {
      sortedData = trackList.filter((track) => track.type === "loss");
    } else if (filter === "Gained") {
      sortedData = trackList.filter((track) => track.type === "gain");
    } else {
      sortedData = trackList;
    }
  }

  sortedData = sortedData.sort((a, b) => {
    const dateA = parseJSON(a.selectedDay);
    const dateB = parseJSON(b.selectedDay);
    return dateA - dateB;
  });

  const [displayedItems, setDisplayedItems] = useState(sortedData);

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
      <NextPage
        array={sortedData}
        itemsPerPage={20}
        setDisplayedItems={setDisplayedItems}
      />
    </div>
  );
};

export default MonthTracker;
