import React, { useState, useEffect } from "react";
import Inputs from "./Inputs/Inputs";
import { format, isSameDay, parseJSON } from "date-fns";
import Track from "./Track/Track";

import GainLoss from "./GainLoss/GainLoss";
const Tracker = ({ selectedDay }) => {
  const [addBudget, setAddBudget] = useState(false);
  const [trackList, setTrackList] = useState(
    JSON.parse(localStorage.getItem("trackList")) || []
  );
  const selectedD = format(selectedDay, "do LLLL");

  useEffect(() => {
    const fromStorage = JSON.parse(localStorage.getItem("trackList")) || [];
    console.log(fromStorage, "fromStorage");
    setTrackList(fromStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("trackList", JSON.stringify(trackList));
    console.log(trackList, "trackList");
  }, [trackList]);

  const selectedList = trackList.filter((track) =>
    isSameDay(parseJSON(track.selectedDay), selectedDay)
  );

  return (
    <div className="tracker">
      <div className="selected-date">{selectedD}</div>
      {selectedList.map((track, index) => (
        <Track
          key={index}
          spent={track.spent}
          gained={track.gained}
          description={track.description}
          toWho={track.toWho}
          amount={track.amount}
          type={track.type}
        />
      ))}
      {addBudget && (
        <Inputs
          type={addBudget}
          setAddBudget={setAddBudget}
          setTrackList={setTrackList}
          selectedDay={selectedDay}
        />
      )}
      <GainLoss setAddBudget={setAddBudget} />
    </div>
  );
};

export default Tracker;
