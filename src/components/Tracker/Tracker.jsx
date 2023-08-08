import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Inputs from "./Inputs/Inputs";
import { format, isSameDay, parseJSON } from "date-fns";
import Track from "./Track/Track";
import GainLoss from "./GainLoss/GainLoss";
const Tracker = ({ selectedDay, trackList, setTrackList }) => {
  const [addBudget, setAddBudget] = useState(false);

  const selectedD = format(selectedDay, "do LLLL");

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
          trackList={trackList}
          setTrackList={setTrackList}
          id={track.id}
        />
      ))}
      {addBudget && (
        <Inputs
          type={addBudget}
          setAddBudget={setAddBudget}
          setTrackList={setTrackList}
          selectedDay={selectedDay}
          id={nanoid()}
        />
      )}
      <GainLoss setAddBudget={setAddBudget} />
    </div>
  );
};

export default Tracker;
