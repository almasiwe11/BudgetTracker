import React, { useState } from "react";
import Inputs from "./Inputs/Inputs";
import { format } from "date-fns";
import Track from "./Track/Track";

import GainLoss from "./GainLoss/GainLoss";
const Tracker = ({ selectedDay }) => {
  const [addBudget, setAddBudget] = useState(false);
  const [trackList, setTrackList] = useState([]);
  const selectedD = format(selectedDay, "do LLLL");
  console.log(trackList);
  return (
    <div className="tracker">
      <div className="selected-date">{selectedD}</div>
      {trackList.map((track, index) => (
        <Track
          key={index}
          spent={track.spent}
          description={track.description}
          toWho={track.toWho}
          amount={track.amount}
        />
      ))}
      {addBudget && (
        <Inputs
          type={addBudget}
          setAddBudget={setAddBudget}
          setTrackList={setTrackList}
        />
      )}
      <GainLoss setAddBudget={setAddBudget} />
    </div>
  );
};

export default Tracker;
