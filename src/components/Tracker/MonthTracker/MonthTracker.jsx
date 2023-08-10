import React from "react";
import Track from "../Track/Track";
import { compareAsc, parseJSON, isSameMonth } from "date-fns";
const MonthTracker = ({ trackList, setTrackList, filterTracker }) => {
  console.log(filterTracker);
  let sortedData;
  if (filterTracker) {
    sortedData = trackList.filter((track) => track.spent === filterTracker);
  } else {
    sortedData = trackList.sort((a, b) => {
      const dateA = parseJSON(a.selectedDay);
      const dateB = parseJSON(b.selectedDay);
      return dateA - dateB;
    });
  }

  return (
    <div>
      {sortedData.map((track) => (
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
    </div>
  );
};

export default MonthTracker;
