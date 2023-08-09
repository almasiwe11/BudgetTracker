/* eslint-disable react/prop-types */
import React from "react";
import { nanoid } from "nanoid";
import Inputs from "../Inputs/Inputs";
import Track from "../Track/Track";
import GainLoss from "../GainLoss/GainLoss";

const DayByDay = ({
  trackList,
  selectedList,
  addBudget,
  setAddBudget,
  setTrackList,
  selectedDay,
}) => {
  return (
    <div className="day-by-day">
      {selectedList.map((track) => (
        <Track
          key={track.id}
          spent={track.spent}
          gained={track.gained}
          description={track.description}
          toWho={track.toWho}
          amount={track.amount}
          type={track.type}
          trackList={trackList}
          setTrackList={setTrackList}
          id={track.id}
          disabled={true}
          selectedDay={track.selectedDay}
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

export default DayByDay;
