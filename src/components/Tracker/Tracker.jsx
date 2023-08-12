/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { format, isSameDay, parseJSON, isSameMonth } from "date-fns";
import DayByDay from "./DayByDay/DayByDay";
import MonthTracker from "./MonthTracker/MonthTracker";
import { VscDebugStepBack } from "react-icons/vsc";

const Tracker = ({
  selectedDay,
  trackList,
  setTrackList,
  filterTracker,
  trackEntireMonth,
  setTrackEntireMonth,
  setFilterTracker,
  showEntireMonth,
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
  }, [setTrackList]);

  useEffect(() => {
    localStorage.setItem("trackList", JSON.stringify(trackList));
  }, [trackList]);

  const selectedList = trackList.filter((track) =>
    isSameDay(parseJSON(track.selectedDay), selectedDay)
  );

  return (
    <div className={`tracker ${showEntireMonth ? "moveDown" : "moveCloser"}`}>
      <div className="selected-date">
        {filterTracker
          ? `${filterTracker.period} for ${filterTracker.expenditure} expenditures`
          : selectedDate}
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
        {filterTracker && trackEntireMonth && (
          <VscDebugStepBack
            className="resetFilter"
            onClick={() => setFilterTracker(false)}
          />
        )}
      </div>
      {trackEntireMonth ? (
        <MonthTracker
          trackList={trackList}
          setTrackList={setTrackList}
          filterTracker={filterTracker}
          selectedDay={selectedDay}
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
