import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Inputs from "./Inputs/Inputs";
import { format, isSameDay, parseJSON, isSameMonth } from "date-fns";
import Track from "./Track/Track";
import GainLoss from "./GainLoss/GainLoss";
import DayByDay from "./DayByDay/DayByDay";
import MonthTracker from "./MonthTracker/MonthTracker";
const Tracker = ({
  selectedDay,
  trackList,
  setTrackList,
  filterTracker,
  trackEntireMonth,
  setTrackEntireMonth,
}) => {
  const [addBudget, setAddBudget] = useState(false);

  let selectedDate;
  if (trackEntireMonth) {
    selectedDate = format(selectedDay, "MMMM y");
  } else {
    selectedDate = format(selectedDay, "do LLLL");
  }
  useEffect(() => {
    const fromStorage = JSON.parse(localStorage.getItem("trackList")) || [];
    setTrackList(fromStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("trackList", JSON.stringify(trackList));
  }, [trackList]);

  const selectedList = trackList.filter((track) =>
    isSameDay(parseJSON(track.selectedDay), selectedDay)
  );

  return (
    <div className="tracker">
      <div className="selected-date">
        {selectedDate}
        <span>
          <input
            type="radio"
            className="trackerForEntireMonth"
            id="trackEntireMonth"
            checked={trackEntireMonth}
            onClick={() => setTrackEntireMonth((prev) => !prev)}
          />
          <label htmlFor={"trackEntireMonth"}>Entire Month</label>
        </span>
      </div>
      {trackEntireMonth ? (
        <MonthTracker
          trackList={trackList.filter((track) =>
            isSameMonth(selectedDay, parseJSON(track.selectedDay))
          )}
          setTrackList={setTrackList}
          filterTracker={filterTracker}
        />
      ) : (
        <DayByDay
          selectedList={selectedList}
          addBudget={addBudget}
          setAddBudget={setAddBudget}
          setTrackList={setTrackList}
          selectedDay={selectedDay}
          trackList={trackList}
        />
      )}
    </div>
  );
};

export default Tracker;
