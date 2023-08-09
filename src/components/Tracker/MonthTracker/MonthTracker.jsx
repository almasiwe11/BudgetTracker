import React from "react";
import Track from "../Track/Track";
import { compareAsc, parseJSON, isSameMonth } from "date-fns";
const MonthTracker = ({ trackList }) => {
  // const selectedMonth =
  const sortedDates = trackList.sort((a, b) => {
    const dateA = parseJSON(a.selectedDay);
    const dateB = parseJSON(b.selectedDay);
    return dateA - dateB;
  });

  return (
    <div className="monthTracker">
      {sortedDates.map((track) => (
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
        />
      ))}
    </div>
  );
};

export default MonthTracker;
